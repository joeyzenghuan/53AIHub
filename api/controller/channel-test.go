package controller

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/http/httptest"
	"net/url"
	"strconv"
	"strings"
	"time"

	"github.com/53AI/53AIHub/common/ctxkey"
	"github.com/53AI/53AIHub/common/logger"
	"github.com/53AI/53AIHub/middleware"
	"github.com/53AI/53AIHub/model"
	"github.com/53AI/53AIHub/service"
	"github.com/53AI/53AIHub/service/hub_adaptor/custom"
	"github.com/gin-gonic/gin"
	"github.com/songquanpeng/one-api/relay/adaptor/openai"
	"github.com/songquanpeng/one-api/relay/meta"
	relaymodel "github.com/songquanpeng/one-api/relay/model"
	"github.com/songquanpeng/one-api/relay/relaymode"
)

type ChannelTestResponse struct {
	Success bool    `json:"success"`
	Message string  `json:"message"`
	Time    float64 `json:"time"`
}

// TestChannel Test channel availability
// @Summary Test channel connectivity
// @Description Verify channel configuration by invoking actual API endpoints
// @Tags Channel
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param channel_id path int true "Channel ID"
// @Param model query string false "Model name"
// @Success 200 {object} model.CommonResponse{data=ChannelTestResponse}
// @Router /api/channels/test/{channel_id} [get]
func TestChannel(c *gin.Context) {
	ctx := c.Request.Context()
	channel_id, err := strconv.Atoi(c.Param("channel_id"))
	if err != nil {
		c.JSON(http.StatusOK, model.ParamError.ToResponse(err))
		return
	}
	channel, err := model.GetChannelByID(int64(channel_id))
	if err != nil {
		c.JSON(http.StatusOK, model.ParamError.ToResponse(err))
		return
	}
	modelName := c.Query("model")
	testRequest := buildTestRequest(modelName)
	tik := time.Now()
	responseMessage, err, _ := testChannel(ctx, channel, testRequest)
	tok := time.Now()
	milliseconds := tok.Sub(tik).Milliseconds()
	if err != nil {
		milliseconds = 0
	}
	go channel.UpdateResponseTime(milliseconds)
	consumedTime := float64(milliseconds) / 1000.0
	if err != nil {
		c.JSON(http.StatusOK, model.ParamError.ToResponse(err))
		return
	}
	c.JSON(http.StatusOK, model.Success.ToResponse(ChannelTestResponse{
		Success: true,
		Message: responseMessage,
		Time:    consumedTime,
	}))
}

func testChannel(ctx context.Context, channel *model.Channel, request *relaymodel.GeneralOpenAIRequest) (responseMessage string, err error, openaiErr *relaymodel.Error) {
	//startTime := time.Now()
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)
	c.Request = &http.Request{
		Method: "POST",
		URL:    &url.URL{Path: "/v1/chat/completions"},
		Body:   nil,
		Header: make(http.Header),
	}
	c.Request.Header.Set("Authorization", "Bearer "+channel.Key)
	c.Request.Header.Set("Content-Type", "application/json")
	c.Set(ctxkey.Channel, channel.Type)
	c.Set(ctxkey.BaseURL, channel.GetBaseURL())
	cfg, _ := channel.LoadConfig()
	c.Set(ctxkey.Config, cfg)
	middleware.SetupContextForSelectedChannel(c, channel, "")
	meta := meta.GetByContext(c)
	apiType := model.GetApiType(channel.Type)
	meta.APIType = apiType
	// apiType := channeltype.ToAPIType(channel.Type)
	adaptor := service.GetAdaptor(meta.APIType)
	err = service.SetCustomConfig(&adaptor, &custom.CustomConfig{
		ConversationId: "",
		UserId:         "53AIHub",
	})
	if err != nil {
		return "", err, nil
	}
	// adaptor := relay.GetAdaptor(apiType)
	if adaptor == nil {
		return "", fmt.Errorf("invalid api type: %d, adaptor is nil", apiType), nil
	}
	adaptor.Init(meta)
	modelName := request.Model
	modelMap := channel.GetModelMapping()
	if modelName == "" || !strings.Contains(channel.Models, modelName) {
		modelNames := strings.Split(channel.Models, ",")
		if len(modelNames) > 0 {
			modelName = modelNames[0]
		}
	}
	if modelMap != nil && modelMap[modelName] != "" {
		modelName = modelMap[modelName]
	}
	meta.OriginModelName, meta.ActualModelName = request.Model, modelName
	request.Model = modelName
	convertedRequest, err := adaptor.ConvertRequest(c, relaymode.ChatCompletions, request)
	if err != nil {
		return "", err, nil
	}
	jsonData, err := json.Marshal(convertedRequest)
	if err != nil {
		return "", err, nil
	}
	defer func() {
		//logContent := fmt.Sprintf("渠道 %s 测试成功，响应：%s", channel.Name, responseMessage)
		if err != nil || openaiErr != nil {
			// errorMessage := ""
			// if err != nil {
			// 	errorMessage = err.Error()
			// } else {
			// 	errorMessage = openaiErr.Message
			// }
			//logContent = fmt.Sprintf("渠道 %s 测试失败，错误：%s", channel.Name, errorMessage)
		}
		// go model.RecordTestLog(ctx, &model.Log{
		// 	ChannelId:   channel.Id,
		// 	ModelName:   modelName,
		// 	Content:     logContent,
		// 	ElapsedTime: helper.CalcElapsedTime(startTime),
		// })
	}()
	logger.SysLog(string(jsonData))
	requestBody := bytes.NewBuffer(jsonData)
	c.Request.Body = io.NopCloser(requestBody)
	resp, err := adaptor.DoRequest(c, meta, requestBody)
	if err != nil {
		return "", err, nil
	}
	if resp != nil && resp.StatusCode != http.StatusOK {
		// err := controller.RelayErrorHandler(resp)
		// err := errors.New("http status code: " + strconv.Itoa(resp.StatusCode))
		// errorMessage := err.Error.Message
		// if errorMessage != "" {
		// 	errorMessage = ", error message: " + errorMessage
		// }
		return "", fmt.Errorf("http status code: %d%s", resp.StatusCode, ""), nil
	}
	usage, respErr := adaptor.DoResponse(c, resp, meta)
	if respErr != nil {
		return "", fmt.Errorf("%s", respErr.Error.Message), &respErr.Error
	}
	if usage == nil {
		return "", errors.New("usage is nil"), nil
	}
	rawResponse := w.Body.String()
	_, responseMessage, err = parseTestResponse(rawResponse)
	if err != nil {
		logger.SysError(fmt.Sprintf("failed to parse error: %s, \nresponse: %s", err.Error(), rawResponse))
		return "", err, nil
	}
	result := w.Result()
	// print result.Body
	respBody, err := io.ReadAll(result.Body)
	if err != nil {
		return "", err, nil
	}
	logger.SysLog(fmt.Sprintf("testing channel #%d, response: \n%s", channel.ChannelID, string(respBody)))
	return responseMessage, nil, nil
}

func parseTestResponse(resp string) (*openai.TextResponse, string, error) {
	var response openai.TextResponse
	err := json.Unmarshal([]byte(resp), &response)
	if err != nil {
		return nil, "", err
	}
	if len(response.Choices) == 0 {
		return nil, "", errors.New("response has no choices")
	}
	stringContent, ok := response.Choices[0].Content.(string)
	if !ok {
		return nil, "", errors.New("response content is not string")
	}
	return &response, stringContent, nil
}

func buildTestRequest(model string) *relaymodel.GeneralOpenAIRequest {
	if model == "" {
		model = "gpt-3.5-turbo"
	}
	testRequest := &relaymodel.GeneralOpenAIRequest{
		Model: model,
	}
	testMessage := relaymodel.Message{
		Role:    "user",
		Content: "Output only your specific model name with no additional text.",
	}
	testRequest.Messages = append(testRequest.Messages, testMessage)
	return testRequest
}
