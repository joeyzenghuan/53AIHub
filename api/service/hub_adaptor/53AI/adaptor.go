package adaptor53AI

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"mime/multipart"
	"net/http"
	"net/textproto"
	"strings"

	"github.com/53AI/53AIHub/common/logger"
	"github.com/53AI/53AIHub/common/storage"
	db_model "github.com/53AI/53AIHub/model"
	"github.com/53AI/53AIHub/service/hub_adaptor/custom"
	"github.com/gin-gonic/gin"
	"github.com/songquanpeng/one-api/common/helper"
	"github.com/songquanpeng/one-api/relay/adaptor/openai"
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

func GetBaseURL(baseUrl string) string {
	baseUrl = strings.TrimSuffix(baseUrl, "/")
	baseUrl = strings.TrimSuffix(baseUrl, "/v3")
	return baseUrl
}

func (a *Adaptor) GetRequestURL(meta *meta.Meta) (string, error) {
	baseUrl := GetBaseURL(meta.BaseURL)
	return fmt.Sprintf("%s/v3/chat-messages", baseUrl), nil
}

func (a *Adaptor) SetupRequestHeader(c *gin.Context, req *http.Request, meta *meta.Meta) error {
	custom.SetupCommonRequestHeader(c, req, meta)
	botID := strings.TrimPrefix(meta.ActualModelName, "bot-")
	req.Header.Set("Authorization", "Bearer "+meta.APIKey)
	req.Header.Set("Bot-Id", botID)
	return nil
}

func (a *Adaptor) ConvertRequest(c *gin.Context, relayMode int, request *model.GeneralOpenAIRequest) (any, error) {
	if request == nil {
		return nil, errors.New("request is nil")
	}
	request.User = a.meta.Config.UserID
	return ConvertRequest(*request, a.meta, a.CustomConfig), nil
}

func ConvertRequest(textRequest model.GeneralOpenAIRequest, meta *meta.Meta, customConfig *custom.CustomConfig) *Request {
	modelName := "bot-" + strings.TrimPrefix(meta.ActualModelName, "bot-")
	channelID := meta.ChannelId
	conversationID := customConfig.ConversationId
	ai53Request := Request{
		ConversationId: customConfig.ConversationId,
		User:           customConfig.UserId,
		ResponseMode:   ResponseModeBlock,
		Inputs:         struct{}{},
	}
	if textRequest.Stream {
		ai53Request.ResponseMode = ResponseModeStream
	}
	queryStr := ""
	for i, message := range textRequest.Messages {
		// upload files
		if i == len(textRequest.Messages)-1 {
			queryStr = message.StringContent()
			continue
		}
	}

	ai53Request.Query = queryStr
	var files []File
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
				if contentObj.Type != "image" {
					logger.SysError("File types are not supported temporarily")
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
					err := AI53UploadFile(meta, uoloadFile, fileMapping, conversationID)
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
					err := AI53UploadFile(meta, uoloadFile, fileMapping, conversationID)
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
				files = append(files, File{
					UploadFileID:   fileMapping.ChannelFileID,
					Type:           "image",
					TransferMethod: TransferMethodLocalFile,
					Url:            "",
				})

			}
			ai53Request.Files = files
			ai53Request.Query = targetStr
		}
	}
	// logger.SysLogf("ai53Request: %+v", ai53Request)
	return &ai53Request
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

func Handler(c *gin.Context, resp *http.Response, promptTokens int, modelName string) (*model.ErrorWithStatusCode, *string, string) {
	channelConversationId := ""
	responseBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return openai.ErrorWrapper(err, "read_response_body_failed", http.StatusInternalServerError), nil, channelConversationId
	}
	err = resp.Body.Close()
	if err != nil {
		return openai.ErrorWrapper(err, "close_response_body_failed", http.StatusInternalServerError), nil, channelConversationId
	}
	var ai53Response BlockResponse
	err = json.Unmarshal(responseBody, &ai53Response)
	if err != nil {
		return openai.ErrorWrapper(err, "unmarshal_response_body_failed", http.StatusInternalServerError), nil, channelConversationId
	}

	fullTextResponse := ResponseAi53OpenAI(&ai53Response)
	fullTextResponse.Model = modelName
	jsonResponse, err := json.Marshal(fullTextResponse)
	if err != nil {
		return openai.ErrorWrapper(err, "marshal_response_body_failed", http.StatusInternalServerError), nil, channelConversationId
	}
	c.Writer.Header().Set("Content-Type", "application/json")
	c.Writer.WriteHeader(resp.StatusCode)
	_, err = c.Writer.Write(jsonResponse)
	var responseText string
	if len(fullTextResponse.Choices) > 0 {
		responseText = fullTextResponse.Choices[0].Message.StringContent()
	}
	channelConversationId = ai53Response.ConversationID
	return nil, &responseText, channelConversationId
}

func ResponseAi53OpenAI(ai53Response *BlockResponse) *openai.TextResponse {
	var responseText string
	responseText = ai53Response.Answer
	choice := openai.TextResponseChoice{
		Index: 0,
		Message: model.Message{
			Role:    "assistant",
			Content: responseText,
			Name:    nil,
		},
		FinishReason: "stop",
	}
	fullTextResponse := openai.TextResponse{
		Id:      fmt.Sprintf("chatcmpl-%s", ai53Response.ConversationID),
		Model:   "53ai-bot",
		Object:  "chat.completion",
		Created: helper.GetTimestamp(),
		Choices: []openai.TextResponseChoice{choice},
	}
	return &fullTextResponse
}

func (a *Adaptor) GetModelList() []string {
	return ModelList
}

func (a *Adaptor) GetChannelName() string {
	return "53AI"
}

func AI53UploadFile(meta *meta.Meta, uploadFile *db_model.UploadFile, fileMapping *db_model.ChannelFileMapping, conversationID string) error {
	url := fmt.Sprintf("%s/v3/files/upload", GetBaseURL(meta.BaseURL))
	fileContent, err := storage.StorageInstance.Load(uploadFile.Key)
	if err != nil {
		return err
	}

	body := &bytes.Buffer{}
	writer := multipart.NewWriter(body)

	// Add form fields
	_ = writer.WriteField("user", meta.Config.UserID)
	var quoteEscaper = strings.NewReplacer("\\", "\\\\", `"`, "\\\"")

	// Add file part
	h := make(textproto.MIMEHeader)
	h.Set("Content-Disposition",
		fmt.Sprintf(`form-data; name="%s"; filename="%s"; type="%s"`,
			quoteEscaper.Replace("file"),
			quoteEscaper.Replace(uploadFile.FileName),
			quoteEscaper.Replace(uploadFile.MimeType)))
	h.Set("Content-Type", uploadFile.MimeType)
	part, err := writer.CreatePart(h)
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

	req.Header.Set("Content-Type", writer.FormDataContentType())
	req.Header.Set("Authorization", "Bearer "+meta.APIKey)
	botID := strings.TrimPrefix(meta.ActualModelName, "bot-")
	req.Header.Set("Bot-Id", botID)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusCreated {
		return fmt.Errorf("upload failed with status: %d", resp.StatusCode)
	}

	var result UploadResponse
	err = json.NewDecoder(resp.Body).Decode(&result)
	if err != nil {
		return err
	}

	fileMapping.ChannelFileID = result.ID
	fileMapping.Eid = uploadFile.Eid
	fileMapping.FileID = uploadFile.ID
	fileMapping.ChannelID = meta.ChannelId
	fileMapping.Model = "bot-" + strings.TrimPrefix(meta.ActualModelName, "bot-")
	fileMapping.ExpirationTime = helper.GetTimestamp() + 3600*24*30
	jsonResult, err := json.Marshal(result)
	if err != nil {
		return err
	}
	fileMapping.ApiResponse = string(jsonResult)

	return nil
}
