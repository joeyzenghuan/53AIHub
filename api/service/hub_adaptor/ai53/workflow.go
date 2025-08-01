package ai53

import (
	"bufio"
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"strings"

	db_model "github.com/53AI/53AIHub/model"
	"github.com/53AI/53AIHub/service/hub_adaptor/custom"
	"github.com/gin-gonic/gin"
	"github.com/songquanpeng/one-api/common/logger"
	"github.com/songquanpeng/one-api/relay/meta"
	"github.com/songquanpeng/one-api/relay/model"
)

// readCloser 简单的 ReadCloser 实现
type readCloser struct {
	io.Reader
}

func (rc *readCloser) Close() error {
	return nil
}

// AI53WorkflowAdaptor 53AI 工作流适配器
type AI53WorkflowAdaptor struct {
	meta         *meta.Meta
	CustomConfig *custom.CustomConfig
}

// AI53WorkflowRequest 53AI 工作流请求结构
type AI53WorkflowRequest struct {
	Inputs       map[string]interface{} `json:"inputs"`        // 使用 inputs 而不是 variables
	ResponseMode string                 `json:"response_mode"` // 使用 response_mode 而不是 stream
	User         string                 `json:"user"`
}

// AI53FileInput 53AI 文件输入结构
type AI53FileInput struct {
	FileID string `json:"file_id"`
	Type   string `json:"type"`
	Name   string `json:"name"`
}

// AI53WorkflowEvent 53AI 工作流事件结构 (精简版)
type AI53WorkflowEvent struct {
	Event  string                 `json:"event"`
	TaskID string                 `json:"task_id"`
	Data   map[string]interface{} `json:"data"`
}

// AI53WorkflowResponse 53AI 工作流完整响应结构
type AI53WorkflowResponse struct {
	TaskID    string                 `json:"task_id"`
	Data      map[string]interface{} `json:"data"`
	CreatedAt int64                  `json:"created_at"`
}

func (a *AI53WorkflowAdaptor) Init(meta *meta.Meta) {
	a.meta = meta
}

// GetRequestURL 构建 53AI 工作流请求 URL (使用 v3 接口)
func (a *AI53WorkflowAdaptor) GetRequestURL(meta *meta.Meta) (string, error) {
	baseURL := meta.BaseURL

	// 去掉可能的 /v3 后缀以避免重复
	baseURL = strings.TrimSuffix(baseURL, "/v3")
	// 确保 baseURL 不以 / 结尾
	baseURL = strings.TrimSuffix(baseURL, "/")

	return baseURL + "/v3/workflows/run", nil
}

// SetupRequestHeader 设置 53AI 工作流请求头 (包含 Bot-Id)
func (a *AI53WorkflowAdaptor) SetupRequestHeader(c *gin.Context, req *http.Request, meta *meta.Meta) error {
	req.Header.Set("Authorization", "Bearer "+meta.APIKey)
	req.Header.Set("Content-Type", "application/json")

	// 53AI 特有的 Bot-Id 头
	botId := a.extractBotId(meta.ActualModelName)
	req.Header.Set("Bot-Id", botId)

	return nil
}

// extractBotId 从模型名称中提取 Bot ID
func (a *AI53WorkflowAdaptor) extractBotId(modelName string) string {
	// 去掉 "workflow-" 前缀
	if strings.HasPrefix(modelName, "workflow-") {
		return strings.TrimPrefix(modelName, "workflow-")
	}
	return modelName
}

// ConvertRequest 转换请求为 53AI 工作流格式
func (a *AI53WorkflowAdaptor) ConvertRequest(c *gin.Context, relayMode int, request *model.GeneralOpenAIRequest) (any, error) {
	if request == nil {
		return nil, errors.New("request is nil")
	}

	// 提取工作流ID
	workflowID := a.extractBotId(request.Model)
	logger.SysLogf("53AI工作流请求 - WorkflowID: %s", workflowID)

	// 构建 53AI 工作流请求
	ai53Request := &AI53WorkflowRequest{
		Inputs:       make(map[string]interface{}),
		ResponseMode: "streaming", // 53AI 工作流使用流式模式
		User:         a.getUserID(request),
	}

	// 处理消息转换为 variables
	if len(request.Messages) > 0 {
		lastMessage := request.Messages[len(request.Messages)-1]

		// 处理文本内容
		if lastMessage.StringContent() != "" {
			ai53Request.Inputs["input"] = lastMessage.StringContent()
		}

		// 处理文件内容 (53AI 方式)
		if lastMessage.Content != nil {
			if contentArray, ok := lastMessage.Content.([]interface{}); ok {
				var files []AI53FileInput
				for _, contentItem := range contentArray {
					if contentObj, ok := contentItem.(db_model.ObjectStringContent); ok {
						if contentObj.Type == "image" || contentObj.Type == "file" {
							// 处理文件
							uploadFile := contentObj.GetUploadFile()
							if uploadFile != nil {
								fileMapping, err := a.processFile(uploadFile)
								if err != nil {
									logger.SysErrorf("53AI工作流文件处理失败: %v", err)
									continue
								}

								files = append(files, AI53FileInput{
									FileID: fileMapping.ChannelFileID,
									Type:   contentObj.Type,
									Name:   uploadFile.FileName,
								})

								logger.SysLogf("✅ 53AI工作流文件处理成功 - 原始ID: %d, 渠道文件ID: %s, 类型: %s",
									uploadFile.ID, fileMapping.ChannelFileID, contentObj.Type)
							}
						}
					}
				}

				if len(files) > 0 {
					ai53Request.Inputs["files"] = files
				}
			}
		}
	}

	logger.SysLogf("🔄 53AI工作流请求转换完成 - 参数数量: %d", len(ai53Request.Inputs))
	return ai53Request, nil
}

// processFile 处理文件上传 (53AI 方式)
func (a *AI53WorkflowAdaptor) processFile(uploadFile *db_model.UploadFile) (*db_model.ChannelFileMapping, error) {
	// 查询是否已存在文件映射
	fileMapping := uploadFile.GetChannelFileMapping(a.meta.ChannelId, a.meta.ActualModelName)
	if fileMapping != nil && fileMapping.ChannelFileID != "" {
		// 文件已存在，直接返回
		return fileMapping, nil
	}

	// 创建新的文件映射 (简化处理)
	fileMapping = &db_model.ChannelFileMapping{
		Eid:           uploadFile.Eid, // 使用文件的 Eid
		ChannelID:     a.meta.ChannelId,
		Model:         a.meta.ActualModelName,
		FileID:        uploadFile.ID,
		ChannelFileID: fmt.Sprintf("ai53_%d", uploadFile.ID), // 53AI 特有的文件ID格式
	}

	if err := db_model.CreateChannelFileMapping(fileMapping); err != nil {
		return nil, fmt.Errorf("创建文件映射失败: %v", err)
	}

	return fileMapping, nil
}

// getUserID 获取用户ID
func (a *AI53WorkflowAdaptor) getUserID(request *model.GeneralOpenAIRequest) string {
	if request.User != "" {
		return request.User
	}
	return "ai53_user"
}

// DoRequest 执行 53AI 工作流请求
func (a *AI53WorkflowAdaptor) DoRequest(c *gin.Context, meta *meta.Meta, requestBody io.Reader) (*http.Response, error) {
	url, err := a.GetRequestURL(meta)
	if err != nil {
		return nil, err
	}

	// 读取请求体用于日志输出
	bodyBytes, err := io.ReadAll(requestBody)
	if err != nil {
		return nil, fmt.Errorf("读取请求体失败: %v", err)
	}

	logger.SysLogf("🚀 53AI工作流请求开始")
	logger.SysLogf("┌─────────────────────────────────────────────────────────────")
	logger.SysLogf("│ 📡 请求URL: %s", url)
	logger.SysLogf("│ 🔑 API Key: %s", a.maskAPIKey(meta.APIKey))
	logger.SysLogf("│ 🤖 Bot ID: %s", a.extractBotId(meta.ActualModelName))
	logger.SysLogf("│ 📝 请求方法: POST")

	// 详细的请求参数日志
	logger.SysLogf("├─────────────────────────────────────────────────────────────")
	logger.SysLogf("│ 📦 请求参数:")
	var requestData map[string]interface{}
	if err := json.Unmarshal(bodyBytes, &requestData); err == nil {
		prettyJSON, _ := json.MarshalIndent(requestData, "│   ", "  ")
		logger.SysLogf("│   %s", string(prettyJSON))
	} else {
		logger.SysLogf("│   原始数据: %s", string(bodyBytes))
	}

	logger.SysLogf("└─────────────────────────────────────────────────────────────")

	req, err := http.NewRequest("POST", url, bytes.NewReader(bodyBytes))
	if err != nil {
		return nil, fmt.Errorf("创建请求失败: %v", err)
	}

	// 设置请求头
	if err := a.SetupRequestHeader(c, req, meta); err != nil {
		return nil, err
	}

	// 记录请求头信息
	logger.SysLogf("📋 请求头信息:")
	for key, values := range req.Header {
		logger.SysLogf("  %s: %s", key, strings.Join(values, ", "))
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		logger.SysErrorf("❌ 53AI工作流请求失败: %v", err)
		return nil, err
	}

	logger.SysLogf("✅ 53AI工作流请求完成 - 状态码: %d", resp.StatusCode)

	// 如果状态码不是 200，记录响应内容
	if resp.StatusCode != http.StatusOK {
		if resp.Body != nil {
			errorBody, _ := io.ReadAll(resp.Body)
			logger.SysErrorf("❌ 53AI工作流请求失败 - 状态码: %d, 响应: %s", resp.StatusCode, string(errorBody))
			// 重新创建响应体供后续使用
			resp.Body = &readCloser{bytes.NewReader(errorBody)}
		}
	}

	return resp, nil
}

// DoResponse 处理 53AI 工作流响应 (精简事件处理)
func (a *AI53WorkflowAdaptor) DoResponse(c *gin.Context, resp *http.Response, meta *meta.Meta) (usage *model.Usage, err *model.ErrorWithStatusCode) {
	logger.SysLogf("📡 开始处理53AI工作流流式响应")
	logger.SysLogf("┌─────────────────────────────────────────────────────────────")
	logger.SysLogf("│ 🔄 响应状态码: %d", resp.StatusCode)
	logger.SysLogf("│ 📋 Content-Type: %s", resp.Header.Get("Content-Type"))
	logger.SysLogf("└─────────────────────────────────────────────────────────────")

	if resp.StatusCode != http.StatusOK {
		return nil, &model.ErrorWithStatusCode{
			Error: model.Error{
				Message: fmt.Sprintf("53AI工作流请求失败，状态码: %d", resp.StatusCode),
				Type:    "api_error",
			},
			StatusCode: resp.StatusCode,
		}
	}

	var finalOutputs map[string]interface{}
	var taskID string

	scanner := bufio.NewScanner(resp.Body)
	// 设置更大的缓冲区以处理大型响应 (1MB)
	buf := make([]byte, 0, 64*1024)
	scanner.Buffer(buf, 1024*1024)
	for scanner.Scan() {
		line := scanner.Text()
		if !strings.HasPrefix(line, "data: ") {
			continue
		}

		data := strings.TrimPrefix(line, "data: ")
		if data == "[DONE]" {
			break
		}

		var event AI53WorkflowEvent
		if err := json.Unmarshal([]byte(data), &event); err != nil {
			continue
		}

		// 53AI 精简事件处理 (只处理关键事件)
		switch event.Event {
		case "workflow_started":
			taskID = event.TaskID
			logger.SysLogf("53AI工作流开始执行 - TaskID: %s", taskID)

		case "workflow_finished":
			logger.SysLogf("53AI工作流执行完成")
			// 提取最终输出
			if outputs, ok := event.Data["outputs"].(map[string]interface{}); ok {
				finalOutputs = outputs
				logger.SysLogf("53AI工作流最终输出: %+v", finalOutputs)
			}

		case "error":
			logger.SysErrorf("53AI工作流执行错误: %+v", event.Data)
			return nil, &model.ErrorWithStatusCode{
				Error: model.Error{
					Message: "53AI工作流执行失败",
					Type:    "workflow_error",
				},
				StatusCode: http.StatusInternalServerError,
			}

		default:
			// 忽略其他事件 (与 DIFY 不同，体现精简特性)
			continue
		}

		// 发送事件到客户端
		c.Writer.Write([]byte("data: " + data + "\n\n"))
		c.Writer.Flush()
	}

	logger.SysLogf("53AI工作流处理完成 - TaskID: %s, 输出字段数: %d",
		taskID, len(finalOutputs))

	// 发送完成信号
	c.Writer.Write([]byte("data: [DONE]\n\n"))
	c.Writer.Flush()

	return &model.Usage{}, nil
}

// ConvertWorkflowToAI53Request 转换工作流参数为 53AI 请求
func (a *AI53WorkflowAdaptor) ConvertWorkflowToAI53Request(parameters map[string]interface{}) (*AI53WorkflowRequest, error) {
	// 参数验证和日志
	logger.SysLogf("🔄 开始转换53AI工作流请求 - 输入参数: %+v", parameters)

	if len(parameters) == 0 {
		return nil, fmt.Errorf("工作流参数不能为空")
	}

	ai53Request := &AI53WorkflowRequest{
		Inputs:       parameters,
		ResponseMode: "streaming", // 使用 streaming 模式
		User:         "ai53_user",
	}

	// 设置用户ID
	if a.CustomConfig != nil && a.CustomConfig.UserId != "" {
		ai53Request.User = a.CustomConfig.UserId
	}

	// 验证必要字段
	if ai53Request.Inputs == nil {
		ai53Request.Inputs = make(map[string]interface{})
	}

	logger.SysLogf("53AI工作流请求转换完成 - 参数数量: %d, ResponseMode: %s, User: %s",
		len(ai53Request.Inputs), ai53Request.ResponseMode, ai53Request.User)

	// 输出最终的请求结构
	if requestJSON, err := json.MarshalIndent(ai53Request, "", "  "); err == nil {
		logger.SysLogf("📋 最终53AI请求结构:\n%s", string(requestJSON))
	}

	return ai53Request, nil
}

// ProcessAI53WorkflowResponse 处理 53AI 工作流流式响应
func (a *AI53WorkflowAdaptor) ProcessAI53WorkflowResponse(resp *http.Response) (*custom.WorkflowResponseData, error) {
	defer resp.Body.Close()

	logger.SysLogf("📡 53AI工作流响应状态码: %d", resp.StatusCode)

	if resp.StatusCode != http.StatusOK {
		// 读取错误响应
		body, _ := io.ReadAll(resp.Body)
		logger.SysErrorf("❌ 53AI工作流请求失败 - 状态码: %d, 响应: %s", resp.StatusCode, string(body))
		return nil, fmt.Errorf("53AI工作流请求失败，状态码: %d", resp.StatusCode)
	}

	// 流式处理响应
	scanner := bufio.NewScanner(resp.Body)
	// 设置更大的缓冲区以处理大型响应 (1MB)
	buf := make([]byte, 0, 64*1024)
	scanner.Buffer(buf, 1024*1024)
	var finalOutputs map[string]interface{}
	var workflowRunID string
	var taskID string
	var textChunks []string

	logger.SysLogf("📡 开始处理53AI工作流流式响应")
	logger.SysLogf("┌─────────────────────────────────────────────────────────────")
	logger.SysLogf("│ 🔄 响应状态码: %d", resp.StatusCode)
	logger.SysLogf("│ 📋 Content-Type: %s", resp.Header.Get("Content-Type"))
	logger.SysLogf("├─────────────────────────────────────────────────────────────")

	// 使用标签来支持跳出外层循环
scanLoop:
	for scanner.Scan() {
		line := scanner.Text()

		// 跳过空行和非数据行
		if !strings.HasPrefix(line, "data: ") {
			continue
		}

		// 提取 JSON 数据
		jsonData := strings.TrimPrefix(line, "data: ")
		if jsonData == "" || jsonData == "[DONE]" {
			continue
		}

		// 解析事件
		var event AI53WorkflowEvent
		if err := json.Unmarshal([]byte(jsonData), &event); err != nil {
			logger.SysErrorf("解析53AI工作流事件失败: %v, 数据: %s", err, jsonData)
			continue
		}

		// 记录基本信息
		if workflowRunID == "" {
			if event.Data != nil {
				if runID, ok := event.Data["workflow_run_id"].(string); ok {
					workflowRunID = runID
				}
			}
		}
		if taskID == "" {
			taskID = event.TaskID
		}

		// 53AI 精简事件处理 (只处理关键事件)
		switch event.Event {
		case "workflow_started":
			logger.SysLogf("53AI工作流开始执行 - TaskID: %s", event.TaskID)

		case "text_chunk":
			// 收集文本块
			if text, ok := event.Data["text"].(string); ok {
				textChunks = append(textChunks, text)
			}

		case "node_finished":
			// 检查是否有输出
			if outputs, ok := event.Data["outputs"].(map[string]interface{}); ok {
				if len(outputs) > 0 {
					finalOutputs = outputs
				}
			}

		case "workflow_finished":
			logger.SysLogf("53AI工作流执行完成")
			// 提取最终输出
			if outputs, ok := event.Data["outputs"].(map[string]interface{}); ok {
				finalOutputs = outputs
				logger.SysLogf("53AI工作流最终输出: %+v", finalOutputs)
			}
			// 工作流完成，可以退出循环
			break scanLoop

		case "error":
			logger.SysErrorf("53AI工作流执行错误: %+v", event.Data)
			return nil, fmt.Errorf("53AI工作流执行失败")

		default:
			// 忽略其他事件 (与 DIFY 不同，体现精简特性)
			continue
		}
	}

	if err := scanner.Err(); err != nil {
		return nil, fmt.Errorf("读取53AI工作流响应流失败: %v", err)
	}

	// 构建最终响应
	if finalOutputs == nil {
		finalOutputs = make(map[string]interface{})
	}

	// 如果有文本片段，合并到输出中
	if len(textChunks) > 0 {
		finalOutputs["text"] = strings.Join(textChunks, "")
	}

	workflowResponse := &custom.WorkflowResponseData{
		ExecuteID:          taskID,
		WorkflowOutputData: finalOutputs,
	}

	logger.SysLogf("53AI工作流响应处理完成 - TaskID: %s, 输出字段数: %d",
		taskID, len(finalOutputs))

	return workflowResponse, nil
}

// maskAPIKey 遮蔽API密钥的敏感部分
func (a *AI53WorkflowAdaptor) maskAPIKey(apiKey string) string {
	if len(apiKey) <= 8 {
		return "****"
	}
	return apiKey[:4] + "****" + apiKey[len(apiKey)-4:]
}
