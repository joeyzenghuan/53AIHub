package fastgpt

import (
	"errors"
	"fmt"
	"io"
	"net/http"

	"github.com/53AI/53AIHub/service/hub_adaptor/custom"
	"github.com/53AI/53AIHub/service/hub_adaptor/openai"
	"github.com/gin-gonic/gin"
	"github.com/songquanpeng/one-api/relay/meta"
	"github.com/songquanpeng/one-api/relay/model"
)

type Adaptor struct {
	meta         *meta.Meta
	CustomConfig *custom.CustomConfig
}

func (a *Adaptor) Init(meta *meta.Meta) {
	a.meta = meta
}

func (a *Adaptor) GetRequestURL(meta *meta.Meta) (string, error) {
	// baseURL := strings.TrimSuffix(meta.BaseURL, "/api")
	// baseURL = custom.GetBaseURL(baseURL)
	baseUrl, err := custom.GetBaseURL(meta.BaseURL)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf("%s/api/v1/chat/completions", baseUrl), nil
}

func (a *Adaptor) SetupRequestHeader(c *gin.Context, req *http.Request, meta *meta.Meta) error {
	custom.SetupCommonRequestHeader(c, req, meta)
	req.Header.Set("Authorization", "Bearer "+meta.APIKey)
	return nil
}

func (a *Adaptor) ConvertRequest(c *gin.Context, relayMode int, request *model.GeneralOpenAIRequest) (any, error) {
	if request == nil {
		return nil, errors.New("request is nil")
	}
	request.User = a.meta.Config.UserID
	return ConvertRequest(*request, a.meta, a.CustomConfig), nil
}

func ConvertRequest(textRequest model.GeneralOpenAIRequest, meta *meta.Meta, customConfig *custom.CustomConfig) *FastGptRequest {
	request := &FastGptRequest{
		GeneralOpenAIRequest: textRequest,
		ChatId:               customConfig.ConversationId,
		CustomUid:            customConfig.UserId,
	}
	return request
}

func (a *Adaptor) DoRequest(c *gin.Context, meta *meta.Meta, requestBody io.Reader) (*http.Response, error) {
	return custom.DoRequestHelper(a, c, meta, requestBody)
}

func (a *Adaptor) ConvertImageRequest(request *model.ImageRequest) (any, error) {
	if request == nil {
		return nil, errors.New("request is nil")
	}
	return request, nil
}

func (a *Adaptor) DoResponse(c *gin.Context, resp *http.Response, meta *meta.Meta) (usage *model.Usage, err *model.ErrorWithStatusCode) {
	usage = &model.Usage{} // 默认初始化

	var responseText string
	var channelConversationId string
	var streamUsage *model.Usage

	if meta.IsStream {
		err, responseText, streamUsage = openai.StreamHandler(c, resp, meta.Mode)
		if streamUsage == nil {
			streamUsage = &model.Usage{
				PromptTokens:     meta.PromptTokens,
				CompletionTokens: 0,
				TotalTokens:      meta.PromptTokens,
			}
		}
	} else {
		err, streamUsage = openai.Handler(c, resp, meta.PromptTokens, meta.ActualModelName)
	}

	if err != nil {
		return nil, err
	}

	if meta.IsStream {
		usage = streamUsage
	} else if responseText != "" {
		usage = openai.ResponseText2Usage(responseText, meta.ActualModelName, meta.PromptTokens)
	} else if streamUsage != nil {
		usage = streamUsage
	}

	usage.PromptTokens = meta.PromptTokens
	usage.TotalTokens = usage.PromptTokens + usage.CompletionTokens
	a.CustomConfig.ConversationId = channelConversationId
	return usage, nil
}

func (a *Adaptor) GetModelList() []string {
	return ModelList
}

func (a *Adaptor) GetChannelName() string {
	return "fastgpt"
}
