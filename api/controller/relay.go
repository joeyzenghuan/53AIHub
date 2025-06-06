package controller

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"math"
	"net/http"
	"strings"
	"time"

	"github.com/53AI/53AIHub/common/ctxkey"
	"github.com/53AI/53AIHub/common/logger"
	"github.com/53AI/53AIHub/common/session"
	"github.com/53AI/53AIHub/common/utils/helper"
	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/middleware"
	"github.com/53AI/53AIHub/model"
	"github.com/53AI/53AIHub/service"
	"github.com/53AI/53AIHub/service/hub_adaptor/custom"
	"github.com/gin-gonic/gin"
	"github.com/songquanpeng/one-api/common"
	"github.com/songquanpeng/one-api/monitor"
	"github.com/songquanpeng/one-api/relay/adaptor"
	"github.com/songquanpeng/one-api/relay/adaptor/openai"
	"github.com/songquanpeng/one-api/relay/apitype"
	billing_ratio "github.com/songquanpeng/one-api/relay/billing/ratio"
	"github.com/songquanpeng/one-api/relay/channeltype"
	"github.com/songquanpeng/one-api/relay/constant/role"
	"github.com/songquanpeng/one-api/relay/controller"
	"github.com/songquanpeng/one-api/relay/controller/validator"
	"github.com/songquanpeng/one-api/relay/meta"
	relay_model "github.com/songquanpeng/one-api/relay/model"
	"github.com/songquanpeng/one-api/relay/relaymode"
)

type Message struct {
	Role    string `json:"role" example:"user"`
	Content string `json:"content" example:"who are you"`
}

type ChatRequest struct {
	Messages         []Message `json:"messages"`
	Stream           bool      `json:"stream"`
	Model            string    `json:"model" example:"agent-6"`
	Temperature      float64   `json:"temperature,omitempty"`
	PresencePenalty  float64   `json:"presence_penalty,omitempty"`
	FrequencyPenalty float64   `json:"frequency_penalty,omitempty"`
	TopP             float64   `json:"top_p,omitempty"`
	ConversationID   int64     `json:"conversation_id"`
}

func GetSessionAgent(c *gin.Context) (agent *model.Agent, err error) {
	sessionAgent, exists := c.Get(session.SESSION_AGENT)
	if !exists {
		return nil, errors.New("agent not found")
	}
	agent, ok := sessionAgent.(*model.Agent)
	if !ok {
		return nil, errors.New("agent not found")
	}
	return agent, nil
}

func GetSessionConversation(c *gin.Context) (conversation *model.Conversation, err error) {
	sessionConversation, exists := c.Get(session.SESSION_CONVERSATION)
	if !exists {
		return nil, errors.New("conversation not found")
	}
	conversation, ok := sessionConversation.(*model.Conversation)
	if !ok {
		return nil, errors.New("conversation not found")
	}
	return conversation, nil
}

// @Summary Relay
// @Description Relay
// @Tags Relay
// @Accept json
// @Produce json
// @Param chatRequest body ChatRequest true "ChatRequest"
// @Success 500 {object} model.OpenAIErrorResponse
// @Router /v1/chat/completions [post]
// @Security BearerAuth
func Relay(c *gin.Context) {
	ctx := c.Request.Context()
	var chatRequest ChatRequest

	c.Set(ctxkey.Group, "vip")

	body, err := io.ReadAll(c.Request.Body)
	if err != nil {
		c.JSON(400, model.ParamError.ToOpenAIErrorRespone(nil))
		return
	}
	c.Request.Body = io.NopCloser(bytes.NewBuffer(body))

	if err := json.Unmarshal(body, &chatRequest); err != nil {
		c.JSON(400, model.ParamError.ToOpenAIErrorRespone(nil))
		return
	}

	// Handle object_string type messages
	// {"conversation_id":619,"frequency_penalty":0.5,"messages":[{"role":"user","content":"[{\"type\":\"text\",\"content\":\"解析这张图片\"},{\"type\":\"image\",\"content\":\"file_id:175\"}]"}],"model":"agent-56","presence_penalty":0.5,"stream":true,"temperature":0.2,"top_p":0.75}

	relayMode := relaymode.GetByPath(c.Request.URL.Path)
	agent, err := GetSessionAgent(c)
	if err != nil {
		c.JSON(404, model.NotFound.ToOpenAIErrorRespone(err))
		return
	}
	logger.SysLogf("Relay", "Relay", "RelayMode", relayMode, "Agent", agent)

	retryTimes := config.CHANNEL_RETRY_TIMES
	requestModel := agent.Model
	chatRequest.Model = requestModel

	// if 1o model, unset temperature, presence_penalty, frequency_penalty, top_p
	if agent.ChannelType == channeltype.OpenAI && strings.Contains(strings.ToLower(chatRequest.Model), "o1") {
		chatRequest.Temperature = 0
		chatRequest.PresencePenalty = 0
		chatRequest.FrequencyPenalty = 0
		chatRequest.TopP = 0
	}

	modifiedBody, err := json.Marshal(chatRequest)
	if err != nil {
		c.JSON(500, model.ParamError.ToOpenAIErrorRespone(nil))
		return
	}
	c.Request.Body = io.NopCloser(bytes.NewBuffer(modifiedBody))
	logger.SysLogf("modifiedBody", string(modifiedBody))

	// bizErr := relayHelper(c, relayMode)
	// if bizErr == nil {
	// 	return
	// }

	var lastFailedChannelId int64
	for i := retryTimes; i > 0; i-- {
		channel, err := model.GetRandomChannel(agent.Eid, agent.ChannelType, requestModel)
		if err != nil {
			continue
		}
		if channel.ChannelID == lastFailedChannelId {
			continue
		}

		isRefreshToken := false
		if channel.ProviderID != 0 {
			provider, err := model.GetProviderByID(channel.ProviderID, channel.Eid)
			if err != nil {
				logger.Errorf(ctx, "refresh token failed: %s", err.Error())
				continue
			}
			checkProviderType := int(provider.ProviderType)

			switch checkProviderType {
			case model.ProviderTypeCozeCn, model.ProviderTypeCozeCom:
				ser := service.CozeService{
					Provider: *provider,
				}
				isRefreshToken, err = ser.CheckAndRefreshToken()
				if err != nil {
					logger.Errorf(ctx, "refresh token failed: %s", err.Error())
					continue
				}
			}
		}

		if isRefreshToken {
			// update channel key
			channel, err = model.GetChannelByID(channel.ChannelID)
			if err != nil {
				logger.Errorf(ctx, "refresh token failed: %s", err.Error())
				continue
			}
			logger.SysLogf("channel token update success, channel_id=", channel.ChannelID)
		}

		middleware.SetupContextForSelectedChannel(c, channel, requestModel)
		logger.SysLogf("ChannelID", channel.ChannelID)
		channelId := c.GetInt64(ctxkey.ChannelId)
		lastFailedChannelId = channelId
		requestBody, err := common.GetRequestBody(c)
		c.Request.Body = io.NopCloser(bytes.NewBuffer(requestBody))
		bizErr := relayHelper(c, relayMode)
		if bizErr == nil {
			return
		}
		channelName := c.GetString(ctxkey.ChannelName)
		go processChannelRelayError(ctx, int(config.GetUserId(c)), int(channelId), channelName, *bizErr)
		// return error message
		c.JSON(500, model.OpenAIErrorResponse{
			Error: struct {
				Message string `json:"message"`
				Type    string `json:"type"`
			}{
				Message: bizErr.Message,
				Type:    bizErr.Type,
			},
		})
		return
	}
	c.JSON(500, model.OpenAIErrorResponse{
		Error: struct {
			Message string `json:"message"`
			Type    string `json:"type"`
		}{
			Message: "All channels are unavailable",
			Type:    "53aihub_error",
		},
	})
}

func relayHelper(c *gin.Context, relayMode int) *relay_model.ErrorWithStatusCode {
	var err *relay_model.ErrorWithStatusCode
	switch relayMode {
	case relaymode.ImagesGenerations:
		err = controller.RelayImageHelper(c, relayMode)
	// case relaymode.AudioSpeech:
	// 	fallthrough
	// case relaymode.AudioTranslation:
	// 	fallthrough
	// case relaymode.AudioTranscription:
	// 	err = controller.RelayAudioHelper(c, relayMode)
	// case relaymode.Proxy:
	// 	err = controller.RelayProxyHelper(c, relayMode)
	default:
		err = RelayTextHelper(c)
	}
	return err
}

func processChannelRelayError(ctx context.Context, userId int, channelId int, channelName string, err relay_model.ErrorWithStatusCode) {
	logger.Errorf(ctx, "relay error (channel id %d, user id: %d): %s", channelId, userId, err.Message)
	if monitor.ShouldDisableChannel(&err.Error, err.StatusCode) {
		monitor.DisableChannel(channelId, channelName, err.Message)
	} else {
		monitor.Emit(channelId, false)
	}
}

func getAndValidateTextRequest(c *gin.Context, relayMode int) (*relay_model.GeneralOpenAIRequest, error) {
	textRequest := &relay_model.GeneralOpenAIRequest{}
	err := common.UnmarshalBodyReusable(c, textRequest)
	if err != nil {
		return nil, err
	}
	if relayMode == relaymode.Moderations && textRequest.Model == "" {
		textRequest.Model = "text-moderation-latest"
	}
	if relayMode == relaymode.Embeddings && textRequest.Model == "" {
		textRequest.Model = c.Param("model")
	}
	err = validator.ValidateTextRequest(textRequest, relayMode)
	if err != nil {
		return nil, err
	}
	return textRequest, nil
}

func getMappedModelName(modelName string, mapping map[string]string) (string, bool) {
	if mapping == nil {
		return modelName, false
	}
	mappedModelName := mapping[modelName]
	if mappedModelName != "" {
		return mappedModelName, true
	}
	return modelName, false
}

func setSystemPrompt(ctx context.Context, request *relay_model.GeneralOpenAIRequest, prompt string) (reset bool) {
	if prompt == "" {
		return false
	}
	if len(request.Messages) == 0 {
		return false
	}
	if request.Messages[0].Role == role.System {
		request.Messages[0].Content = prompt
		logger.Infof(ctx, "rewrite system prompt")
		return true
	}
	request.Messages = append([]relay_model.Message{{
		Role:    role.System,
		Content: prompt,
	}}, request.Messages...)
	logger.Infof(ctx, "add system prompt")
	return true
}

func getPromptTokens(textRequest *relay_model.GeneralOpenAIRequest, relayMode int) int {
	switch relayMode {
	case relaymode.ChatCompletions:
		return openai.CountTokenMessages(textRequest.Messages, textRequest.Model)
	case relaymode.Completions:
		return openai.CountTokenInput(textRequest.Prompt, textRequest.Model)
	case relaymode.Moderations:
		return openai.CountTokenInput(textRequest.Input, textRequest.Model)
	}
	return 0
}

func getRequestBody(c *gin.Context, meta *meta.Meta, textRequest *relay_model.GeneralOpenAIRequest, adaptor adaptor.Adaptor) (io.Reader, error) {
	if !config.EnforceIncludeUsage &&
		meta.APIType != apitype.OpenAI &&
		meta.OriginModelName == meta.ActualModelName &&
		meta.ChannelType != channeltype.Baichuan &&
		meta.SystemPrompt == "" {
		bodyBytes, err := io.ReadAll(c.Request.Body)
		if err != nil {
			return nil, err
		}

		var requestData map[string]interface{}
		if err := json.Unmarshal(bodyBytes, &requestData); err != nil {
			return nil, err
		}

		delete(requestData, "conversation_id")
		modifiedBody, err := json.Marshal(requestData)
		if err != nil {
			return nil, err
		}

		c.Request.Body = io.NopCloser(bytes.NewBuffer(modifiedBody))
		// return c.Request.Body, nil
	}

	// get request body
	var requestBody io.Reader
	convertedRequest, err := adaptor.ConvertRequest(c, meta.Mode, textRequest)
	if err != nil {
		logger.Debugf(c.Request.Context(), "converted request failed: %s\n", err.Error())
		return nil, err
	}

	if convertedRequestMap, ok := convertedRequest.(map[string]interface{}); ok {
		delete(convertedRequestMap, "conversation_id")
	}

	jsonData, err := json.Marshal(convertedRequest)
	if err != nil {
		logger.Debugf(c.Request.Context(), "converted request json_marshal_failed: %s\n", err.Error())
		return nil, err
	}
	logger.Debugf(c.Request.Context(), "converted request: \n%s", string(jsonData))
	requestBody = bytes.NewBuffer(jsonData)
	return requestBody, nil
}

func RelayTextHelper(c *gin.Context) *relay_model.ErrorWithStatusCode {
	ctx := c.Request.Context()
	user_id := config.GetUserId(c)
	meta := meta.GetByContext(c)
	channelId := c.GetInt64(ctxkey.ChannelId)
	meta.ChannelId = int(channelId)
	meta.APIType = model.GetApiType(meta.ChannelType)
	startTime := time.Now()
	textRequest, err := getAndValidateTextRequest(c, meta.Mode)
	if err != nil {
		logger.Errorf(ctx, "getAndValidateTextRequest failed: %s", err.Error())
		return openai.ErrorWrapper(err, "invalid_text_request", http.StatusBadRequest)
	}
	meta.IsStream = textRequest.Stream

	if meta.IsStream {
		SetupStreamInterceptor(c)
	}

	// map model name
	meta.OriginModelName = textRequest.Model
	textRequest.Model, _ = getMappedModelName(textRequest.Model, meta.ModelMapping)
	meta.ActualModelName = textRequest.Model
	modelRatio := billing_ratio.GetModelRatio(textRequest.Model, meta.ChannelType)
	// groupRatio := billing_ratio.GetGroupRatio(meta.Group)
	groupRatio := 1.0
	ratio := modelRatio * groupRatio
	// set system prompt if not empty
	agent, err := GetSessionAgent(c)
	if err != nil {
		logger.Errorf(ctx, "getSessionAgent failed: %s", err.Error())
		return openai.ErrorWrapper(err, "invalid_text_request", http.StatusBadRequest)
	}
	systemPromptReset := false
	if agent.Prompt != "" {
		systemPromptReset = addAgentPrompt(ctx, textRequest, agent.Prompt, agent.ChannelType)
		modifiedBody, err := json.Marshal(textRequest)
		if err != nil {
			return openai.ErrorWrapper(err, "marshal_request_failed", http.StatusInternalServerError)
		}
		c.Request.Body = io.NopCloser(bytes.NewBuffer(modifiedBody))
	}

	promptTokens := getPromptTokens(textRequest, meta.Mode)
	meta.PromptTokens = promptTokens
	preConsumedQuota, bizErr := preConsumeQuota(ctx, textRequest, promptTokens, ratio, meta)
	if bizErr != nil {
		logger.Warnf(ctx, "preConsumeQuota failed: %+v", *bizErr)
		return bizErr
	}
	conversation, err := GetSessionConversation(c)
	if err != nil {
		logger.Errorf(ctx, "getSessionConversation failed: %s", err.Error())
		return openai.ErrorWrapper(err, "invalid_text_request", http.StatusBadRequest)
	}
	adaptor := service.GetAdaptor(meta.APIType)
	// set custom config
	if adaptor == nil {
		return openai.ErrorWrapper(fmt.Errorf("invalid api type: %d", meta.APIType), "invalid_api_type", http.StatusBadRequest)
	}
	adaptor.Init(meta)
	customConfig := &custom.CustomConfig{
		UserId:                     "angethub_u" + fmt.Sprintf("%d", user_id),
		ConversationId:             conversation.ChannelConversationID,
		ConversationExpirationTime: conversation.ChannelConversationExpirationTime,
		AIHubConversationId:        conversation.ConversationID,
	}

	err = service.SetCustomConfig(&adaptor, customConfig)

	if err != nil {
		return openai.ErrorWrapper(err, "convert_request_failed", http.StatusInternalServerError)
	}

	// get request body
	requestBody, err := getRequestBody(c, meta, textRequest, adaptor)
	if err != nil {
		return openai.ErrorWrapper(err, "convert_request_failed", http.StatusInternalServerError)
	}

	// do request
	resp, err := adaptor.DoRequest(c, meta, requestBody)
	if err != nil {
		logger.Errorf(ctx, "DoRequest failed: %s", err.Error())
		return openai.ErrorWrapper(err, "do_request_failed", http.StatusInternalServerError)
	}
	if isErrorHappened(meta, resp) {
		//billing.ReturnPreConsumedQuota(ctx, preConsumedQuota, meta.TokenId)
		return controller.RelayErrorHandler(resp)
	}

	// do response
	usage, respErr := adaptor.DoResponse(c, resp, meta)
	logger.SysLogf("usage", usage)
	if respErr != nil {
		logger.Errorf(ctx, "respErr is not nil: %+v", respErr)
		//billing.ReturnPreConsumedQuota(ctx, preConsumedQuota, meta.TokenId)
		return respErr
	}

	responseContent, reasoningContent := GetResponseContent(c, meta.IsStream, resp)

	customConfig = service.GetCustomConfig(&adaptor)
	// post-consume quota
	go postConsumeQuota(c, agent, user_id, startTime, ctx, usage, meta,
		textRequest, ratio, preConsumedQuota, modelRatio, groupRatio,
		systemPromptReset, responseContent, reasoningContent, customConfig)
	return nil
}

func isErrorHappened(meta *meta.Meta, resp *http.Response) bool {
	if resp == nil {
		if meta.ChannelType == channeltype.AwsClaude {
			return false
		}
		return true
	}
	if resp.StatusCode != http.StatusOK &&
		// replicate return 201 to create a task
		resp.StatusCode != http.StatusCreated {
		return true
	}
	if meta.ChannelType == channeltype.DeepL {
		// skip stream check for deepl
		return false
	}

	if meta.IsStream && strings.HasPrefix(resp.Header.Get("Content-Type"), "application/json") &&
		// Even if stream mode is enabled, replicate will first return a task info in JSON format,
		// requiring the client to request the stream endpoint in the task info
		meta.ChannelType != channeltype.Replicate {
		return true
	}
	return false
}

func addAgentPrompt(ctx context.Context, textRequest *relay_model.GeneralOpenAIRequest, agentPrompt string, channelType int) bool {
	if agentPrompt == "" {
		return false
	}

	if channelType == channeltype.OpenAI && strings.Contains(strings.ToLower(textRequest.Model), "o1") {
		textRequest.Messages = append([]relay_model.Message{{
			Role:    "user",
			Content: agentPrompt,
		}}, textRequest.Messages...)
		logger.Infof(ctx, "add agent prompt for o1 model")
		return true
	}

	if len(textRequest.Messages) > 0 && textRequest.Messages[0].Role == role.System {
		textRequest.Messages[0].Content = fmt.Sprintf("%s\n%s", agentPrompt, textRequest.Messages[0].Content)
		logger.Infof(ctx, "append agent system prompt")
	} else {
		textRequest.Messages = append([]relay_model.Message{{
			Role:    role.System,
			Content: agentPrompt,
		}}, textRequest.Messages...)
		logger.Infof(ctx, "add agent system prompt")
	}
	return true
}

func postConsumeQuota(c *gin.Context, agent *model.Agent, user_id int64, startTime time.Time,
	ctx context.Context, usage *relay_model.Usage, meta *meta.Meta, textRequest *relay_model.GeneralOpenAIRequest,
	ratio float64, preConsumedQuota int64, modelRatio float64,
	groupRatio float64, systemPromptReset bool, responseContent string, reasoningContent string, customConfig *custom.CustomConfig) {
	if usage == nil {
		logger.Error(ctx, "usage is nil, which is unexpected")
		return
	}
	var quota int64
	completionRatio := billing_ratio.GetCompletionRatio(textRequest.Model, meta.ChannelType)
	promptTokens := usage.PromptTokens
	completionTokens := usage.CompletionTokens
	quota = int64(math.Ceil((float64(promptTokens) + float64(completionTokens)*completionRatio) * ratio))
	if ratio != 0 && quota <= 0 {
		quota = 1
	}
	totalTokens := promptTokens + completionTokens
	if totalTokens == 0 {
		// in this case, must be some error happened
		// we cannot just return, because we may have to return the pre-consumed quota
		quota = 0
	}
	quotaDelta := quota - preConsumedQuota

	logContent := fmt.Sprintf("倍率：%.2f × %.2f × %.2f", modelRatio, groupRatio, completionRatio)

	messageJSON, err := json.Marshal(textRequest.Messages)
	if err != nil {
		logger.Errorf(ctx, "marshal messages failed: %s", err.Error())
		messageJSON = []byte("[]")
	}
	requestId := helper.GetRequestID(ctx)
	conversationId := c.GetInt64(session.SESSION_CONVERSATION_ID)
	message := &model.Message{
		Eid:              agent.Eid,
		UserID:           user_id,
		ConversationID:   conversationId,
		AgentID:          agent.AgentID,
		Message:          string(messageJSON),
		Answer:           responseContent,
		ReasoningContent: reasoningContent,
		ModelName:        textRequest.Model,
		Quota:            int(quotaDelta),
		PromptTokens:     promptTokens,
		CompletionTokens: completionTokens,
		TotalTokens:      totalTokens,
		ChannelId:        int(meta.ChannelId),
		RequestId:        requestId,
		ElapsedTime:      helper.CalcElapsedTime(startTime),
		IsStream:         meta.IsStream,
		QuotaContent:     logContent,
	}
	model.CreateMessage(message)
	// conversation update
	if conversationId != 0 {
		conversation, err := model.GetConversationByIdAndUserId(agent.Eid, conversationId, user_id)
		if err != nil {
			logger.Errorf(ctx, "get conversation by id and user id failed: %s", err.Error())
		} else {
			lastMessage, _ := json.Marshal(map[string]string{
				"question": string(messageJSON),
				"answer":   responseContent,
			})

			conversation.Quota += int(quotaDelta)
			conversation.TotalTokens += totalTokens
			conversation.LastMessage = string(lastMessage)
			if customConfig != nil {
				if customConfig.ConversationId != "" {
					conversation.ChannelConversationID = customConfig.ConversationId
				}
				if customConfig.ConversationExpirationTime != 0 {
					conversation.ChannelConversationExpirationTime = customConfig.ConversationExpirationTime
				}
			}

			model.UpdateConversation(conversation)
		}
	}
}

func preConsumeQuota(ctx context.Context, textRequest *relay_model.GeneralOpenAIRequest, promptTokens int, ratio float64, meta *meta.Meta) (int64, *relay_model.ErrorWithStatusCode) {
	preConsumedQuota := getPreConsumedQuota(textRequest, promptTokens, ratio)
	return preConsumedQuota, nil
}

func getPreConsumedQuota(textRequest *relay_model.GeneralOpenAIRequest, promptTokens int, ratio float64) int64 {
	preConsumedTokens := config.PreConsumedQuota + int64(promptTokens)
	if textRequest.MaxTokens != 0 {
		preConsumedTokens += int64(textRequest.MaxTokens)
	}
	return int64(float64(preConsumedTokens) * ratio)
}
