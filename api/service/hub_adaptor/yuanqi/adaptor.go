package yuanqi

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"strings"

	"github.com/53AI/53AIHub/common/logger"
	db_model "github.com/53AI/53AIHub/model"
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
	baseUrl, err := custom.GetBaseURL(meta.BaseURL)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf("%s/openapi/v1/agent/chat/completions", baseUrl), nil
}

func (a *Adaptor) SetupRequestHeader(c *gin.Context, req *http.Request, meta *meta.Meta) error {
	custom.SetupCommonRequestHeader(c, req, meta)
	req.Header.Set("X-Source", "openapi")
	req.Header.Set("Authorization", "Bearer "+meta.APIKey)
	req.Header.Set("Content-Type", "application/json")
	return nil
}

func (a *Adaptor) ConvertRequest(c *gin.Context, relayMode int, request *model.GeneralOpenAIRequest) (any, error) {
	if request == nil {
		return nil, errors.New("request is nil")
	}
	request.User = a.meta.Config.UserID
	botID := strings.TrimPrefix(a.meta.ActualModelName, "bot-")
	return ConvertRequest(botID, a.meta, *request, a.CustomConfig), nil
}

func ConvertRequest(botID string, meta *meta.Meta, textRequest model.GeneralOpenAIRequest, customConfig *custom.CustomConfig) *YuanQiRequest {
	modelName := "bot-" + strings.TrimPrefix(meta.ActualModelName, "bot-")
	logger.SysLogf("yuanqi model name: %s", modelName)
	// channelID := meta.ChannelId
	request := YuanQiRequest{
		AssistantID: botID,
		UserID:      customConfig.UserId,
		Stream:      textRequest.Stream,
		ChatType:    "published",
	}
	var queryStr string
	var yuanQiMessages []YuanQiMessage
	for _, message := range textRequest.Messages {
		queryStr = message.StringContent()
		var contentObjs []db_model.ObjectStringContent
		var yuanQiContents []YuanQiContent
		if err := json.Unmarshal([]byte(queryStr), &contentObjs); err == nil {
			if len(contentObjs) > 0 {
				for _, contentObj := range contentObjs {
					if contentObj.Type == "text" {
						yuanQiContents = append(yuanQiContents, YuanQiContent{
							Type: "text",
							Text: contentObj.Content,
						})
						continue
					}

					uoloadFile := contentObj.GetUploadFile()
					if uoloadFile == nil {
						logger.SysErrorf("file not found, %+v", contentObj)
						continue
					}

					fileType := GetFileTypeString(uoloadFile.Extension)
					if fileType == "" {
						logger.SysErrorf("yuanqi: file type not supported, %+v", contentObj)
						continue
					}

					yuanQiContents = append(yuanQiContents, YuanQiContent{
						Type: "file_url",
						FileURL: &FileURL{
							Type: fileType,
							URL:  uoloadFile.GetPreviewFullUrl(),
						},
					})

				}
				yuanQiMessages = append(yuanQiMessages, YuanQiMessage{
					Role:    message.Role,
					Content: yuanQiContents,
				})
			}
		} else {
			yuanQiContents = append(yuanQiContents, YuanQiContent{
				Type: "text",
				Text: queryStr,
			})
			yuanQiMessages = append(yuanQiMessages, YuanQiMessage{
				Role:    message.Role,
				Content: yuanQiContents,
			})
		}
	}
	request.Messages = yuanQiMessages
	logger.SysLogf("yuanqi request: %+v", request)
	return &request
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
	return "yuanqi"
}

func GetFileTypeString(extension string) string {
	var fileType string
	switch strings.ToLower(extension) {
	case ".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp":
		fileType = "image"
	case ".mp4", ".mov", ".avi", ".wmv", ".flv":
		fileType = "video"
	case ".mp3", ".wav", ".aac", ".flac":
		fileType = "audio"
	case ".pdf":
		fileType = "pdf"
	case ".txt", ".csv", ".json", ".xml":
		fileType = "text"
	case ".doc", ".docx":
		fileType = "doc"
	case ".xls", ".xlsx":
		fileType = "xls"
	case ".ppt", ".pptx":
		fileType = "ppt"
	default:
		fileType = ""
	}

	return fileType
}
