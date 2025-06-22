package controller

import (
	"net/http"
	"strings"

	"github.com/53AI/53AIHub/common/logger"
	"github.com/53AI/53AIHub/common/utils/ai53"
	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/53AI/53AIHub/service"
	"github.com/gin-gonic/gin"
)

// Get53AIAllBots Get all 53AI bots
// @Summary Get all 53AI bots list
// @Description Get all bots list from 53AI platform
// @Tags 53AI
// @Accept json
// @Produce json
// @Security BearerAuth
// @Success 200 {object} model.CommonResponse{data=[]ai53.AppResponse}
// @Router /api/53ai/bots [get]
func Get53AIAllBots(c *gin.Context) {
	eid := config.GetEID(c)
	provider, err := model.GetFirstProviderByEidAndProviderType(eid, int64(model.ProviderType53AI))
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.ProviderNoFoundError.ToResponse(err))
		return
	}

	ser := service.AI53Service{
		Provider: &provider,
	}

	bots, err := ser.GetAllBots()
	if err != nil {
		logger.SysLogf("Get53AIAllBots: %s", err.Error())
		c.JSON(http.StatusInternalServerError, model.ProviderNoFoundError.ToResponse(err))
		return
	}

	Update53AIChannel(provider, bots)
	c.JSON(http.StatusOK, model.Success.ToResponse(bots))
}

func Update53AIChannel(provider model.Provider, apps []ai53.AppResponse) error {
	var botIds []string
	for _, bot := range apps {
		botIds = append(botIds, "bot-"+bot.BotID)
	}
	// todo Call interface user ID all use the same
	configStr := `{"region":"","sk":"","ak":"","user_id":"53AIHub","vertex_ai_project_id":"","vertex_ai_adc":""}`
	// Create or update channel record
	baseURL := provider.GetBaseURLByProviderType()
	channel := &model.Channel{
		Eid:        provider.Eid,
		Name:       provider.Name,
		Key:        provider.AccessToken,
		Type:       model.ChannelApi53AI,
		ProviderID: provider.ProviderID,
		BaseURL:    &baseURL,
		Models:     strings.Join(botIds, ","),
		Status:     model.ChannelStatusEnabled,
		Config:     configStr,
	}

	existingChannel, err := model.GetFirstChannelByEidAndProviderId(channel.Eid, channel.ProviderID)
	if err != nil {
		// Create new record
		return model.CreateChannel(channel) // Fix: return error instead of assigning i
	} else {
		// Update existing record
		channel.ChannelID = existingChannel.ChannelID
		channel.CreatedTime = existingChannel.CreatedTime
		return model.UpdateChannel(channel)
	}
}
