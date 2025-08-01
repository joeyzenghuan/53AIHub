package fastgpt

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"
	"strings"

	"github.com/53AI/53AIHub/model"
	"github.com/53AI/53AIHub/service/hub_adaptor/custom"
	"github.com/53AI/53AIHub/service/hub_adaptor/openai"
	"github.com/gin-gonic/gin"
	"github.com/songquanpeng/one-api/common/logger"
	"github.com/songquanpeng/one-api/relay/meta"
)

// FastGPTWorkflowAdaptor FastGPT 工作流适配器
type FastGPTWorkflowAdaptor struct {
	openai.Adaptor // 继承 OpenAI 适配器的文件处理能力
	meta           *meta.Meta
	CustomConfig   *custom.CustomConfig
}

// FastGPTWorkflowRequest FastGPT 工作流请求结构
type FastGPTWorkflowRequest struct {
	Variables map[string]interface{} `json:"variables"`
	Stream    bool                   `json:"stream"`
	Detail    bool                   `json:"detail"`
}

// FastGPTWorkflowResponse FastGPT 工作流响应结构
type FastGPTWorkflowResponse struct {
	ResponseData []ModuleResponse `json:"responseData"`
}

// ModuleResponse 模块响应结构
type ModuleResponse struct {
	NodeId       string                 `json:"nodeId"`
	ModuleName   string                 `json:"moduleName"`
	ModuleType   string                 `json:"moduleType"`
	TotalPoints  float64                `json:"totalPoints"`
	RunningTime  float64                `json:"runningTime"`
	PluginOutput map[string]interface{} `json:"pluginOutput,omitempty"`
}

// Init 初始化适配器
func (a *FastGPTWorkflowAdaptor) Init(meta *meta.Meta) {
	a.meta = meta
	a.Adaptor.Init(meta)
}

// GetRequestURL 构建请求URL
func (a *FastGPTWorkflowAdaptor) GetRequestURL(meta *meta.Meta) (string, error) {
	baseURL := standardizeBaseURL(meta.BaseURL)
	return baseURL + "/api/v1/chat/completions", nil
}

// standardizeBaseURL 标准化 baseURL，移除可能的路径后缀
func standardizeBaseURL(baseURL string) string {
	// 移除末尾的斜杠
	baseURL = strings.TrimSuffix(baseURL, "/")

	// 移除常见的 FastGPT API 路径后缀
	suffixesToRemove := []string{
		"/api/v1/chat/completions", // 完整的 API 路径
		"/api/v1/chat",             // 部分 API 路径
		"/api/v1",                  // API 版本路径
		"/api",                     // API 基础路径
		"/v1",                      // 版本路径
	}

	for _, suffix := range suffixesToRemove {
		if strings.HasSuffix(baseURL, suffix) {
			baseURL = strings.TrimSuffix(baseURL, suffix)
			// 递归处理，以防有多层嵌套
			return standardizeBaseURL(baseURL)
		}
	}

	return baseURL
}

// ConvertWorkflowToWorkflowRequest 将工作流请求转换为 FastGPT 工作流请求
func (a *FastGPTWorkflowAdaptor) ConvertWorkflowToWorkflowRequest(parameters map[string]interface{}) (*FastGPTWorkflowRequest, error) {
	// 处理文件参数
	processedParams, err := a.processFileParameters(parameters)
	if err != nil {
		return nil, fmt.Errorf("处理文件参数失败: %v", err)
	}

	workflowRequest := &FastGPTWorkflowRequest{
		Variables: processedParams,
		Stream:    false, // 工作流默认非流式
		Detail:    true,  // 工作流默认详细模式
	}

	logger.SysLogf("🔄 FastGPT工作流请求转换完成 - 参数数量: %d", len(workflowRequest.Variables))
	return workflowRequest, nil
}

// processFileParameters 处理文件参数，复用 OpenAI 适配器的文件处理逻辑
func (a *FastGPTWorkflowAdaptor) processFileParameters(parameters map[string]interface{}) (map[string]interface{}, error) {
	processedParams := make(map[string]interface{})

	for key, value := range parameters {
		if strValue, ok := value.(string); ok && strings.HasPrefix(strValue, "file_id:") {
			// 处理文件参数
			fileContent, err := a.processFileParameter(strValue)
			if err != nil {
				logger.SysErrorf("处理文件参数失败 - key: %s, value: %s, error: %v", key, strValue, err)
				// 文件处理失败时，保留原始值
				processedParams[key] = value
				continue
			}
			processedParams[key] = fileContent
			logger.SysLogf("✅ 文件参数处理成功 - key: %s", key)
		} else {
			// 非文件参数直接复制
			processedParams[key] = value
		}
	}

	return processedParams, nil
}

// processFileParameter 处理单个文件参数，返回 FastGPT 数组格式
func (a *FastGPTWorkflowAdaptor) processFileParameter(fileParam string) (interface{}, error) {
	// 解析 file_id:xxx 格式
	if !strings.HasPrefix(fileParam, "file_id:") {
		return fileParam, nil
	}

	fileIDStr := strings.TrimPrefix(fileParam, "file_id:")
	fileID, err := strconv.ParseInt(fileIDStr, 10, 64)
	if err != nil {
		logger.SysErrorf("解析文件ID失败: %s, error: %v", fileIDStr, err)
		return fileParam, fmt.Errorf("无效的文件ID: %s", fileIDStr)
	}

	// 获取文件信息
	uploadFile, err := model.GetUploadFileByID(fileID)
	if err != nil {
		logger.SysErrorf("获取上传文件失败: ID=%d, error: %v", fileID, err)
		return fileParam, fmt.Errorf("文件不存在: %v", err)
	}

	// 统一使用预览 URL 方式处理所有文件类型
	previewURL := uploadFile.GetPreviewFullUrl()
	if previewURL == "" {
		logger.SysErrorf("文件预览URL为空: ID=%d, PreviewKey=%s", fileID, uploadFile.PreviewKey)
		return fileParam, fmt.Errorf("文件预览URL不可用")
	}

	// 根据文件类型返回 FastGPT 数组格式
	extension := strings.ToLower(uploadFile.Extension)
	if isImageFile(extension) {
		// 图片文件：返回数组格式
		logger.SysLogf("✅ FastGPT工作流图片文件处理 - ID: %d, Name: %s, URL: %s",
			fileID, uploadFile.FileName, previewURL)
		return []map[string]interface{}{
			{
				"type": "image",
				"name": uploadFile.FileName,
				"url":  previewURL,
			},
		}, nil
	} else {
		// 文档文件：返回数组格式
		logger.SysLogf("✅ FastGPT工作流文档文件处理 - ID: %d, Name: %s, URL: %s",
			fileID, uploadFile.FileName, previewURL)
		return []map[string]interface{}{
			{
				"type": "file",
				"name": uploadFile.FileName,
				"url":  previewURL,
			},
		}, nil
	}
}

// isImageFile 判断是否为图片文件
func isImageFile(extension string) bool {
	imageExts := []string{".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp"}
	for _, ext := range imageExts {
		if extension == ext {
			return true
		}
	}
	return false
}

// DoRequest 执行 FastGPT 工作流请求
func (a *FastGPTWorkflowAdaptor) DoRequest(c *gin.Context, meta *meta.Meta, requestBody io.Reader) (*http.Response, error) {
	url, err := a.GetRequestURL(meta)
	if err != nil {
		return nil, err
	}

	// 读取请求体用于日志输出
	bodyBytes, err := io.ReadAll(requestBody)
	if err != nil {
		return nil, fmt.Errorf("读取请求体失败: %v", err)
	}

	// 格式化输出请求信息
	logger.SysLogf("🚀 FastGPT工作流请求开始")
	logger.SysLogf("┌─────────────────────────────────────────────────────────────")
	logger.SysLogf("│ 📡 请求URL: %s", url)
	logger.SysLogf("│ 🔑 API Key: %s", maskAPIKey(meta.APIKey))
	logger.SysLogf("│ 📝 请求方法: POST")
	logger.SysLogf("│ 📋 Content-Type: application/json")
	logger.SysLogf("├─────────────────────────────────────────────────────────────")
	logger.SysLogf("│ 📦 请求参数:")

	// 格式化输出请求体
	var requestData map[string]interface{}
	if err := json.Unmarshal(bodyBytes, &requestData); err == nil {
		prettyJSON, _ := json.MarshalIndent(requestData, "│   ", "  ")
		logger.SysLogf("│   %s", string(prettyJSON))
	} else {
		logger.SysLogf("│   %s", string(bodyBytes))
	}
	logger.SysLogf("└─────────────────────────────────────────────────────────────")

	// 重新创建请求体
	req, err := http.NewRequest("POST", url, bytes.NewReader(bodyBytes))
	if err != nil {
		return nil, err
	}

	// 设置请求头
	req.Header.Set("Authorization", "Bearer "+meta.APIKey)
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)

	if err != nil {
		logger.SysErrorf("❌ FastGPT工作流请求失败: %v", err)
		return nil, err
	}

	logger.SysLogf("✅ FastGPT工作流请求成功 - 状态码: %d", resp.StatusCode)
	return resp, nil
}

// ProcessWorkflowResponse 处理工作流响应
func (a *FastGPTWorkflowAdaptor) ProcessWorkflowResponse(resp *http.Response) (*custom.WorkflowResponseData, error) {
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("请求失败，状态码: %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("读取响应失败: %v", err)
	}

	logger.SysLogf("📦 FastGPT工作流响应: %s", string(body))

	var workflowResp FastGPTWorkflowResponse
	if err := json.Unmarshal(body, &workflowResp); err != nil {
		return nil, fmt.Errorf("解析响应失败: %v", err)
	}

	// 提取工作流输出
	workflowOutput := a.extractWorkflowOutput(workflowResp.ResponseData)

	// 转换为统一的工作流响应格式
	workflowResponse := &custom.WorkflowResponseData{
		ExecuteID:          fmt.Sprintf("fastgpt_workflow_%d", a.meta.ChannelId),
		WorkflowOutputData: workflowOutput,
		ModelName:          a.meta.ActualModelName,
		ChannelID:          a.meta.ChannelId,
	}

	logger.SysLogf("✅ FastGPT工作流响应处理完成 - 输出字段数: %d", len(workflowOutput))
	return workflowResponse, nil
}

// extractWorkflowOutput 从响应数据中提取工作流输出
func (a *FastGPTWorkflowAdaptor) extractWorkflowOutput(responseData []ModuleResponse) map[string]interface{} {
	workflowOutput := make(map[string]interface{})

	for _, module := range responseData {
		logger.SysLogf("🔍 检查模块 - NodeId: %s, ModuleType: %s", module.NodeId, module.ModuleType)

		if module.ModuleType == "pluginOutput" && module.PluginOutput != nil {
			// 找到插件输出模块（FastGPT中工作流的输出仍然叫pluginOutput）
			for key, value := range module.PluginOutput {
				workflowOutput[key] = value
			}
			logger.SysLogf("✅ 找到工作流输出 - 字段数: %d", len(module.PluginOutput))
		}
	}

	// 如果没有找到专门的插件输出，尝试从最后一个模块获取输出
	if len(workflowOutput) == 0 && len(responseData) > 0 {
		lastModule := responseData[len(responseData)-1]
		if lastModule.PluginOutput != nil {
			workflowOutput = lastModule.PluginOutput
			logger.SysLogf("⚠️  使用最后一个模块的输出作为工作流输出")
		}
	}

	return workflowOutput
}

// ExtractWorkflowOutputForTest 为测试提供的公开方法
func (a *FastGPTWorkflowAdaptor) ExtractWorkflowOutputForTest(responseData []ModuleResponse) map[string]interface{} {
	return a.extractWorkflowOutput(responseData)
}

// maskAPIKey 遮蔽API密钥的敏感部分
func maskAPIKey(apiKey string) string {
	if len(apiKey) <= 8 {
		return "****"
	}
	return apiKey[:4] + "****" + apiKey[len(apiKey)-4:]
}
