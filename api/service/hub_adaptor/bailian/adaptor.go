package bailian

import (
	"errors"
	"fmt"
	"io"
	"net/http"
	"strings"

	"github.com/53AI/53AIHub/service/hub_adaptor/custom"
	"github.com/53AI/53AIHub/service/hub_adaptor/openai"
	"github.com/gin-gonic/gin"
	"github.com/songquanpeng/one-api/relay/adaptor"
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
	botID := strings.TrimPrefix(a.meta.ActualModelName, "bot-")
	return fmt.Sprintf("%s/api/v1/apps/%s/completion", meta.BaseURL, botID), nil
}

func (a *Adaptor) SetupRequestHeader(c *gin.Context, req *http.Request, meta *meta.Meta) error {
	adaptor.SetupCommonRequestHeader(c, req, meta)
	req.Header.Set("Authorization", "Bearer "+meta.APIKey)
	req.Header.Set("Content-Type", "application/json")
	if meta.IsStream {
		req.Header.Set("X-DashScope-SSE", "enable")
	}
	return nil
}

func (a *Adaptor) ConvertRequest(c *gin.Context, relayMode int, request *model.GeneralOpenAIRequest) (any, error) {
	if request == nil {
		return nil, errors.New("request is nil")
	}
	request.User = a.meta.Config.UserID
	bailianRequest := ConvertRequest(*request, a.CustomConfig)
	if a.meta.IsStream {
		bailianRequest.Parameters.IncrementalOutput = true
	}
	return bailianRequest, nil
}

func ConvertRequest(textRequest model.GeneralOpenAIRequest, customConfig *custom.CustomConfig) *Request {
	var Prompt string
	for i, message := range textRequest.Messages {
		if i == len(textRequest.Messages)-1 {
			Prompt = message.StringContent()
			continue
		}
	}

	request := Request{
		Input: Input{
			Prompt:    Prompt,
			SessionID: customConfig.ConversationId,
		},
		Parameters: Parameters{
			IncrementalOutput: false,
		},
	}

	return &request
}

func (a *Adaptor) DoRequest(c *gin.Context, meta *meta.Meta, requestBody io.Reader) (*http.Response, error) {
	return adaptor.DoRequestHelper(a, c, meta, requestBody)
}

func (a *Adaptor) ConvertImageRequest(request *model.ImageRequest) (any, error) {
	if request == nil {
		return nil, errors.New("request is nil")
	}
	return request, nil
}

func (a *Adaptor) DoResponse(c *gin.Context, resp *http.Response, meta *meta.Meta) (usage *model.Usage, err *model.ErrorWithStatusCode) {
	var responseText *string
	var channelConversationId string
	if meta.IsStream {
		err, responseText, channelConversationId = StreamHandler(c, resp)
	} else {
		err, responseText, channelConversationId = Handler(c, resp, meta.PromptTokens, meta.ActualModelName)
	}
	if responseText != nil {
		usage = openai.ResponseText2Usage(*responseText, meta.ActualModelName, meta.PromptTokens)
	} else {
		usage = &model.Usage{}
	}
	usage.PromptTokens = meta.PromptTokens
	usage.TotalTokens = usage.PromptTokens + usage.CompletionTokens
	a.CustomConfig.ConversationId = channelConversationId
	return
}

func (a *Adaptor) GetModelList() []string {
	return ModelList
}

func (a *Adaptor) GetChannelName() string {
	return "bailian"
}
