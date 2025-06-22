package service

import (
	"encoding/json"
	"errors"
	"strings"
	"time"

	"github.com/53AI/53AIHub/common/logger"
	"github.com/53AI/53AIHub/common/utils/coze"
	"github.com/53AI/53AIHub/model"
	"github.com/songquanpeng/one-api/relay/channeltype"
)

type CozeService struct {
	Provider model.Provider
}

func (ser *CozeService) GetCozeApiSdk() (*coze.CozeApi, error) {
	var baseUrl string
	if ser.Provider.ProviderType == model.ProviderTypeCozeCn {
		baseUrl = coze.CozeCnUrl
	} else {
		baseUrl = coze.CozeComUrl
	}

	return &coze.CozeApi{
		BaseUrl: baseUrl,
	}, nil
}

func (ser *CozeService) HandlerAccessTokenByCode(coze string, callbackUrl string) error {
	if ser.Provider.ProviderType != model.ProviderTypeCozeCn && ser.Provider.ProviderType != model.ProviderTypeCozeCom {
		return errors.New("invalid provider type")
	}

	api, err := ser.GetCozeApiSdk()
	if err != nil {
		return err
	}

	var config model.CozeConfig

	err = json.Unmarshal([]byte(ser.Provider.Configs), &config)
	if err != nil {
		return err
	}

	cozeApiToken, err := api.GetOAuthToken(config.ClientID, config.ClientSecret, coze, callbackUrl)
	if err != nil {
		return err
	}

	ser.Provider.AccessToken = cozeApiToken.AccessToken
	ser.Provider.RefreshToken = cozeApiToken.RefreshToken
	ser.Provider.ExpiresIn = cozeApiToken.ExpiresIn
	ser.Provider.IsAuthorized = true
	ser.Provider.AuthedTime = time.Now().UTC().UnixMilli()
	err = model.UpdateProvider(&ser.Provider)

	return err
}

func (ser *CozeService) HandlerAccessTokenByRefreshToken() error {
	if ser.Provider.ProviderType != model.ProviderTypeCozeCn && ser.Provider.ProviderType != model.ProviderTypeCozeCom {
		return errors.New("invalid provider type")
	}
	api, err := ser.GetCozeApiSdk()
	if err != nil {
		return err
	}

	var config model.CozeConfig
	err = json.Unmarshal([]byte(ser.Provider.Configs), &config)
	if err != nil {
		return err
	}
	cozeApiToken, err := api.RefreshOAuthToken(config.ClientID, config.ClientSecret, ser.Provider.RefreshToken)
	if err != nil {
		return err
	}
	ser.Provider.AccessToken = cozeApiToken.AccessToken
	ser.Provider.RefreshToken = cozeApiToken.RefreshToken
	ser.Provider.ExpiresIn = cozeApiToken.ExpiresIn
	ser.Provider.IsAuthorized = true
	err = model.UpdateProvider(&ser.Provider)
	if err != nil {
		return err
	}

	// update channel key
	existingChannel, err := model.GetFirstChannelByEidAndProviderId(ser.Provider.Eid, ser.Provider.ProviderID)
	if err != nil {
		return err
	}

	existingChannel.Key = ser.Provider.AccessToken
	err = model.UpdateChannel(existingChannel)
	return err
}

func (ser *CozeService) CheckAndRefreshToken() (ok bool, err error) {
	if ser.Provider.ExpiresIn <= time.Now().Unix() {
		logger.SysLogf("Coze RefreshToken: eid = %d", ser.Provider.Eid)
		err := ser.HandlerAccessTokenByRefreshToken()
		if err != nil {
			return false, err
		}
		return true, nil
	}
	return false, nil
}

func (ser *CozeService) GetAllWorkspace() ([]*coze.Workspace, error) {
	_, err := ser.CheckAndRefreshToken()
	if err != nil {
		return nil, err
	}

	api, err := ser.GetCozeApiSdk()
	if err != nil {
		return nil, err
	}

	var config model.CozeConfig
	err = json.Unmarshal([]byte(ser.Provider.Configs), &config)
	if err != nil {
		return nil, err
	}

	var allWorkspaces []*coze.Workspace
	page := 1
	pageSize := 50

	for {
		if page > 20 {
			break
		}
		workspacesResp, err := api.GetWorkspaces(&ser.Provider, page, pageSize)
		if err != nil {
			return nil, err
		}
		if len(workspacesResp.Workspaces) == 0 {
			break
		}
		for _, workspace := range workspacesResp.Workspaces {
			allWorkspaces = append(allWorkspaces, &workspace)
		}
		page++
	}

	return allWorkspaces, nil
}

func (ser *CozeService) GetAllBot(workspaceId string) ([]*coze.Bot, error) {
	_, err := ser.CheckAndRefreshToken()
	if err != nil {
		return nil, err
	}

	api, err := ser.GetCozeApiSdk()
	if err != nil {
		return nil, err
	}

	var config model.CozeConfig
	err = json.Unmarshal([]byte(ser.Provider.Configs), &config)
	if err != nil {
		return nil, err
	}

	var allBots []*coze.Bot
	page := 1
	pageSize := 50

	for {
		if page > 20 {
			break
		}
		botsResp, err := api.GetPublishedBots(&ser.Provider, workspaceId, page, pageSize)
		if err != nil {
			return nil, err
		}
		if len(botsResp.SpaceBots) == 0 {
			break
		}
		for _, bot := range botsResp.SpaceBots {
			allBots = append(allBots, &bot)
		}
		page++
	}

	return allBots, nil
}

// UpdateCozeChannel asynchronously updates the Coze channel's model list with new bot IDs.
// It ensures no duplicate bot IDs are added to the channel's models.
// The update process runs in a separate goroutine to avoid blocking the main execution.
// Parameters:
//   - botIds: slice of bot IDs to be added to the channel's model list
//
// Returns:
//   - error: returns nil as the update process runs asynchronously
func (ser *CozeService) UpdateCozeChannel(botIds []string) error {
	go func() {
		defer func() {
			if r := recover(); r != nil {
				logger.SysErrorf("Panic in UpdateCozeChannel: %v", r)
			}
		}()

		// Get the existing channel for the current enterprise ID with type Coze (34)
		existingChannel, err := model.GetFirstChannelByEidAndProviderType(ser.Provider.Eid, int64(channeltype.Coze))
		if err != nil {
			logger.SysErrorf("Failed to get Channel: %v", err)
			return
		}

		// Parse existing models and store them in a map for deduplication
		existingModels := make(map[string]bool)
		if existingChannel.Models != "" {
			for _, model := range strings.Split(existingChannel.Models, ",") {
				model = strings.TrimSpace(model)
				if model != "" {
					existingModels[model] = true
				}
			}
		}

		// Process new bot IDs and add them if they don't exist
		var updatedBotIds []string
		for _, botId := range botIds {
			if botId == "" {
				continue
			}
			formattedBotId := "bot-" + botId
			if !existingModels[formattedBotId] {
				updatedBotIds = append(updatedBotIds, formattedBotId)
				existingModels[formattedBotId] = true // Mark as added to prevent duplicates
			}
		}

		// If no new bot IDs to add, return early
		if len(updatedBotIds) == 0 {
			logger.SysLogf("No new bot IDs to add")
			return
		}

		// Rebuild the complete bot IDs list from the map to ensure uniqueness
		var allBotIds []string
		for model := range existingModels {
			allBotIds = append(allBotIds, model)
		}

		// Prepare channel update with default configuration
		configStr := `{"region":"","sk":"","ak":"","user_id":"53AIHub","vertex_ai_project_id":"","vertex_ai_adc":""}`
		baseURL := ser.Provider.GetBaseURLByProviderType()

		// Create channel object with updated information
		channel := &model.Channel{
			ChannelID:  existingChannel.ChannelID,
			Eid:        ser.Provider.Eid,
			Name:       ser.Provider.Name,
			Key:        ser.Provider.AccessToken,
			Type:       channeltype.Coze,
			ProviderID: ser.Provider.ProviderID,
			BaseURL:    &baseURL,
			Models:     strings.Join(allBotIds, ","),
			Status:     model.ChannelStatusEnabled,
			Config:     configStr,
		}

		// Update the channel in the database
		if err := model.UpdateChannel(channel); err != nil {
			logger.SysErrorf("Failed to update Channel: %v", err)
			return
		}

		logger.SysLogf("Successfully updated Channel %d, added %d new bot IDs", channel.ChannelID, len(updatedBotIds))
	}()

	return nil
}
