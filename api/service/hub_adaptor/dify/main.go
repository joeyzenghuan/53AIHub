package dify

import (
	"bufio"
	"encoding/json"
	"net/http"
	"strings"

	"github.com/53AI/53AIHub/common/logger"
	"github.com/gin-gonic/gin"
	"github.com/songquanpeng/one-api/common"
	"github.com/songquanpeng/one-api/common/helper"
	"github.com/songquanpeng/one-api/common/render"
	"github.com/songquanpeng/one-api/relay/adaptor/openai"
	"github.com/songquanpeng/one-api/relay/model"
)

func StreamHandler(c *gin.Context, resp *http.Response) (*model.ErrorWithStatusCode, *string, string) {
	var responseText string
	createdTime := helper.GetTimestamp()
	scanner := bufio.NewScanner(resp.Body)
	// 设置更大的缓冲区以处理大型响应 (1MB)
	buf := make([]byte, 0, 64*1024)
	scanner.Buffer(buf, 1024*1024)
	scanner.Split(bufio.ScanLines)
	common.SetEventStreamHeaders(c)
	var modelName string

	channelConversationId := ""
	for scanner.Scan() {
		data := scanner.Text()
		if len(data) < 5 || !strings.HasPrefix(data, "data:") {
			continue
		}
		data = strings.TrimPrefix(data, "data:")
		data = strings.TrimSuffix(data, "\r")

		//logger.SysLogf("dify stream data: %s", data)
		var difyResponse StreamResponse
		err := json.Unmarshal([]byte(data), &difyResponse)
		if err != nil {
			logger.SysError("error unmarshalling stream response: " + err.Error())
			continue
		}

		response, _ := StreamResponseDifyOpenAI(&difyResponse)
		if response == nil {
			continue
		}

		response.Model = modelName
		response.Created = createdTime

		err = render.ObjectData(c, response)
		if err != nil {
			logger.SysError(err.Error())
		}
		channelConversationId = difyResponse.ConversationID
	}

	if err := scanner.Err(); err != nil {
		logger.SysError("error reading stream: " + err.Error())
	}

	render.Done(c)

	err := resp.Body.Close()
	if err != nil {
		return openai.ErrorWrapper(err, "close_response_body_failed", http.StatusInternalServerError), nil, channelConversationId
	}

	return nil, &responseText, channelConversationId
}

func StreamResponseDifyOpenAI(difyResponse *StreamResponse) (*openai.ChatCompletionsStreamResponse, *Response) {
	var response *Response
	var stopReason string
	var choice openai.ChatCompletionsStreamResponseChoice

	if difyResponse.Answer != "" {
		choice.Delta.Content = difyResponse.Answer
	}
	choice.Delta.Role = "assistant"
	finishReason := stopReasonDifyOpenAI(&stopReason)
	if finishReason != "null" {
		choice.FinishReason = &finishReason
	}
	var openaiResponse openai.ChatCompletionsStreamResponse
	openaiResponse.Object = "chat.completion.chunk"
	openaiResponse.Choices = []openai.ChatCompletionsStreamResponseChoice{choice}
	openaiResponse.Id = difyResponse.ConversationID
	return &openaiResponse, response
}

func BlockingResponseDifyOpenAI(difyResponse *BlockResponse) (*openai.ChatCompletionsStreamResponse, *Response) {
	var response *Response
	var choice openai.ChatCompletionsStreamResponseChoice

	if difyResponse.Answer != "" {
		choice.Delta.Content = difyResponse.Answer
	}
	var openaiResponse openai.ChatCompletionsStreamResponse
	openaiResponse.Object = "chat.completion.chunk"
	openaiResponse.Choices = []openai.ChatCompletionsStreamResponseChoice{choice}
	openaiResponse.Id = difyResponse.ConversationID
	return &openaiResponse, response
}

func stopReasonDifyOpenAI(reason *string) string {
	if reason == nil {
		return ""
	}
	switch *reason {
	case "end_turn":
		return "stop"
	case "stop_sequence":
		return "stop"
	case "max_tokens":
		return "length"
	default:
		return *reason
	}
}

type File struct {
	TransferMethod string `json:"transfer_method"`
	Type           string `json:"type"`
	Url            string `json:"url"`
	UploadFileID   string `json:"upload_file_id"`
}

const (
	ResponseModeStream = "streaming"
	ResponseModeBlock  = "blocking"
)

type Request struct {
	ConversationId string      `json:"conversation_id"`
	User           string      `json:"user"`
	Query          string      `json:"query"`
	ResponseMode   string      `json:"response_mode"`
	Files          []File      `json:"files"`
	Inputs         interface{} `json:"inputs"`
}
