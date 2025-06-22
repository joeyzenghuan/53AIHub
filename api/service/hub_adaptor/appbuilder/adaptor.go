package appbuilder

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"mime/multipart"
	"net/http"
	"strings"

	"github.com/53AI/53AIHub/common/logger"
	"github.com/53AI/53AIHub/common/storage"
	appbuilder_api "github.com/53AI/53AIHub/common/utils/appbuilder"
	db_model "github.com/53AI/53AIHub/model"
	"github.com/53AI/53AIHub/service/hub_adaptor/custom"
	"github.com/53AI/53AIHub/service/hub_adaptor/openai"
	"github.com/gin-gonic/gin"
	"github.com/songquanpeng/one-api/common/helper"
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
	return fmt.Sprintf("%s/v2/app/conversation/runs", baseUrl), nil
}

func (a *Adaptor) SetupRequestHeader(c *gin.Context, req *http.Request, meta *meta.Meta) error {
	custom.SetupCommonRequestHeader(c, req, meta)
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

func ConvertRequest(botID string, meta *meta.Meta, textRequest model.GeneralOpenAIRequest, customConfig *custom.CustomConfig) *Request {
	modelName := "bot-" + strings.TrimPrefix(meta.ActualModelName, "bot-")
	channelID := meta.ChannelId
	conversationID := customConfig.ConversationId
	request := Request{
		AppID:          botID,
		EndUserID:      customConfig.UserId,
		Stream:         textRequest.Stream,
		ConversationID: conversationID,
	}
	queryStr := ""
	for i, message := range textRequest.Messages {
		// upload files
		if i == len(textRequest.Messages)-1 {
			queryStr = message.StringContent()
			continue
		}
	}

	request.Query = queryStr
	var contentObjs []db_model.ObjectStringContent
	if err := json.Unmarshal([]byte(queryStr), &contentObjs); err == nil {
		if len(contentObjs) > 0 {
			targetStr := ""
			for _, contentObj := range contentObjs {
				if contentObj.Type == "text" {
					if targetStr == "" {
						targetStr = contentObj.Content
					}
					continue
				}

				uoloadFile := contentObj.GetUploadFile()
				if uoloadFile == nil {
					logger.SysError("file not found")
					continue
				}
				fileMapping := uoloadFile.GetChannelFileMapping(channelID, modelName)
				if fileMapping == nil {
					fileMapping = &db_model.ChannelFileMapping{}
					err := AppBuilderUploadFile(meta, uoloadFile, fileMapping, conversationID)
					if err != nil {
						logger.SysError(fmt.Sprintf("upload file failed: %v", err))
						continue
					}
					err = db_model.CreateChannelFileMapping(fileMapping)
					if err != nil {
						logger.SysError(fmt.Sprintf("create file mapping failed: %v", err))
						continue
					}
				} else if helper.GetTimestamp() > fileMapping.ExpirationTime {
					err := AppBuilderUploadFile(meta, uoloadFile, fileMapping, conversationID)
					if err != nil {
						logger.SysError(fmt.Sprintf("update file failed: %v", err))
						continue
					}
					err = db_model.UpdateChannelFileMapping(fileMapping)
					if err != nil {
						logger.SysError(fmt.Sprintf("update file mapping failed: %v", err))
						continue
					}
				}
				request.FileIDs = append(request.FileIDs, fileMapping.ChannelFileID)
			}
			request.Query = targetStr
		}
	}
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
	return "appbuilder"
}

func (a *Adaptor) GetConversationId() (string, error) {
	apiService := &appbuilder_api.AppBuilderApi{
		BaseUrl:   a.meta.BaseURL,
		AuthToken: a.meta.APIKey,
	}

	app_id := strings.TrimPrefix(a.meta.ActualModelName, "bot-")
	conversation, error := apiService.CreateConversation(app_id)
	if error != nil {
		return "", error
	}
	return conversation.ConversationId, nil
}

func AppBuilderUploadFile(meta *meta.Meta, uploadFile *db_model.UploadFile, fileMapping *db_model.ChannelFileMapping, conversationID string) error {
	url := fmt.Sprintf("%s/v2/app/conversation/file/upload", meta.BaseURL)
	fileContent, err := storage.StorageInstance.Load(uploadFile.Key)
	if err != nil {
		return err
	}

	body := &bytes.Buffer{}
	writer := multipart.NewWriter(body)

	_ = writer.WriteField("app_id", strings.TrimPrefix(meta.ActualModelName, "bot-"))
	_ = writer.WriteField("conversation_id", conversationID)

	part, err := writer.CreateFormFile("file", uploadFile.FileName)
	if err != nil {
		return err
	}
	_, err = io.Copy(part, bytes.NewReader(fileContent))
	if err != nil {
		return err
	}

	err = writer.Close()
	if err != nil {
		return err
	}

	req, err := http.NewRequest("POST", url, body)
	if err != nil {
		return err
	}

	req.Header.Set("Authorization", "Bearer "+meta.APIKey)
	req.Header.Set("Content-Type", writer.FormDataContentType())

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("upload failed with status: %d", resp.StatusCode)
	}

	var result struct {
		ID             string `json:"id"`
		ConversationId string `json:"conversation_id"`
		RequestId      string `json:"request_id"`
	}
	if err = json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return err
	}

	fileMapping.ChannelFileID = result.ID
	ExpirationTime := helper.GetTimestamp() + 3600*24*7
	fileMapping.Eid = uploadFile.Eid
	fileMapping.FileID = uploadFile.ID
	fileMapping.ChannelID = meta.ChannelId
	fileMapping.Model = "bot-" + strings.TrimPrefix(meta.ActualModelName, "bot-")
	fileMapping.ExpirationTime = ExpirationTime

	jsonResult, err := json.Marshal(result)
	if err != nil {
		return err
	}
	fileMapping.ApiResponse = string(jsonResult)
	return nil
}
