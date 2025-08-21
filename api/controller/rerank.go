package controller

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"math"
	"net/http"
	"strings"
	"time"

	"github.com/53AI/53AIHub/common/logger"
	"github.com/53AI/53AIHub/common/utils/helper"
	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/middleware"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
	"github.com/songquanpeng/one-api/relay/adaptor/openai"
	billing_ratio "github.com/songquanpeng/one-api/relay/billing/ratio"
	"github.com/songquanpeng/one-api/relay/meta"
	relay_model "github.com/songquanpeng/one-api/relay/model"
)

// RerankRequest represents the request structure for rerank API
type RerankRequest struct {
	Model           string   `json:"model" example:"gte-rerank-v2" binding:"required"`                                                                               // Model name for reranking
	Query           string   `json:"query" example:"人工智能的发展历程" binding:"required"`                                                                                   // Query text to compare against documents
	Documents       []string `json:"documents" example:"[\"人工智能起源于1950年代，图灵提出了著名的图灵测试\",\"深度学习是机器学习的一个分支，使用神经网络进行学习\",\"自然语言处理是人工智能的重要应用领域之一\"]" binding:"required"` // List of documents to rerank
	TopN            *int     `json:"top_n,omitempty" example:"3"`                                                                                                    // Number of top results to return
	ReturnDocuments *bool    `json:"return_documents,omitempty" example:"true"`                                                                                      // Whether to return document content in response
}

// RerankResponse represents the response structure for rerank API
type RerankResponse struct {
	Object string         `json:"object" example:"list"`         // Response object type
	Data   []RerankResult `json:"data"`                          // Array of rerank results
	Model  string         `json:"model" example:"gte-rerank-v2"` // Model used for reranking
	Usage  RerankUsage    `json:"usage"`                         // Token usage information
}

// RerankResult represents a single rerank result
type RerankResult struct {
	Object         string          `json:"object" example:"rerank_result"` // Result object type
	Index          int             `json:"index" example:"0"`              // Original index in input documents
	RelevanceScore float64         `json:"relevance_score" example:"0.95"` // Relevance score (0-1)
	Document       *RerankDocument `json:"document,omitempty"`             // Document content (if return_documents=true)
}

// RerankDocument represents document content in rerank result
type RerankDocument struct {
	Text string `json:"text" example:"文档内容"` // Document text content
}

// RerankUsage represents token usage information for rerank
type RerankUsage struct {
	TotalTokens int `json:"total_tokens" example:"150"` // Total tokens used
}

// @Summary Rerank
// @Description Rerank documents based on query relevance using AI models
// @Tags Rerank
// @Accept json
// @Produce json
// @Param rerankRequest body RerankRequest true "Rerank request with query and documents"
// @Success 200 {object} RerankResponse "Successful rerank response"
// @Failure 400 {object} model.OpenAIErrorResponse "Bad request - invalid parameters"
// @Failure 401 {object} model.OpenAIErrorResponse "Unauthorized - invalid API key"
// @Failure 500 {object} model.OpenAIErrorResponse "Internal server error"
// @Router /v1/rerank [post]
// @Security BearerAuth
func Rerank(c *gin.Context) {
	ctx := c.Request.Context()
	startTime := time.Now()

	// 解析请求
	var rerankRequest RerankRequest
	if err := c.ShouldBindJSON(&rerankRequest); err != nil {
		logger.Errorf(ctx, "解析 rerank 请求失败: %v", err)
		c.JSON(http.StatusBadRequest, model.OpenAIErrorResponse{
			Error: struct {
				Message string `json:"message"`
				Type    string `json:"type"`
			}{
				Message: "请求参数格式错误: " + err.Error(),
				Type:    "invalid_request_error",
			},
		})
		return
	}

	// 验证请求参数
	if err := validateRerankRequest(&rerankRequest); err != nil {
		logger.Errorf(ctx, "rerank 请求参数验证失败: %v", err)
		c.JSON(http.StatusBadRequest, model.OpenAIErrorResponse{
			Error: struct {
				Message string `json:"message"`
				Type    string `json:"type"`
			}{
				Message: err.Error(),
				Type:    "invalid_request_error",
			},
		})
		return
	}

	// 记录请求开始日志 - 参考 workflow 格式
	logger.SysLogf("🚀 Rerank请求开始")
	logger.SysLogf("┌─────────────────────────────────────────────────────────────")
	logger.SysLogf("│ 🤖 模型名称: %s", rerankRequest.Model)
	logger.SysLogf("│ 📝 查询内容: %s", truncateString(rerankRequest.Query, 100))
	logger.SysLogf("│ 📚 文档数量: %d", len(rerankRequest.Documents))
	if rerankRequest.TopN != nil {
		logger.SysLogf("│ 🔢 TopN: %d", *rerankRequest.TopN)
	}
	if rerankRequest.ReturnDocuments != nil {
		logger.SysLogf("│ 📄 返回文档: %v", *rerankRequest.ReturnDocuments)
	}
	logger.SysLogf("└─────────────────────────────────────────────────────────────")

	// 获取用户信息
	userId := config.GetUserId(c)
	if userId == 0 {
		logger.SysErrorf("❌ Rerank请求失败 - 用户身份验证失败")
		c.JSON(http.StatusUnauthorized, model.OpenAIErrorResponse{
			Error: struct {
				Message string `json:"message"`
				Type    string `json:"type"`
			}{
				Message: "未授权访问",
				Type:    "authentication_error",
			},
		})
		return
	}

	// 获取企业信息 - 从用户信息中获取
	user, err := model.GetUserByID(userId)
	if err != nil {
		logger.SysErrorf("❌ Rerank请求失败 - 用户信息获取失败, UserID: %d, Error: %v", userId, err)
		c.JSON(http.StatusUnauthorized, model.OpenAIErrorResponse{
			Error: struct {
				Message string `json:"message"`
				Type    string `json:"type"`
			}{
				Message: "用户信息获取失败",
				Type:    "authentication_error",
			},
		})
		return
	}
	eid := user.Eid

	logger.SysLogf("📋 用户信息 - UserID: %d, EnterpriseID: %d", userId, eid)

	// 根据模型名称确定渠道类型
	channelType := getChannelTypeByModel(rerankRequest.Model)
	if channelType == -1 {
		logger.SysErrorf("❌ Rerank请求失败 - 不支持的模型: %s", rerankRequest.Model)
		c.JSON(http.StatusBadRequest, model.OpenAIErrorResponse{
			Error: struct {
				Message string `json:"message"`
				Type    string `json:"type"`
			}{
				Message: fmt.Sprintf("不支持的 rerank 模型: %s", rerankRequest.Model),
				Type:    "invalid_request_error",
			},
		})
		return
	}

	// 获取可用渠道
	channel, err := model.GetRandomChannel(eid, channelType, rerankRequest.Model)
	if err != nil {
		logger.Errorf(ctx, "❌ 获取 rerank 渠道失败: %v", err)
		c.JSON(http.StatusInternalServerError, model.OpenAIErrorResponse{
			Error: struct {
				Message string `json:"message"`
				Type    string `json:"type"`
			}{
				Message: "暂无可用的 rerank 服务渠道",
				Type:    "service_unavailable",
			},
		})
		return
	}

	logger.SysLogf("✅ 成功获取渠道 - ChannelID: %d, ChannelName: %s, ChannelType: %d",
		channel.ChannelID, channel.Name, channel.Type)

	// 设置渠道上下文
	middleware.SetupContextForSelectedChannel(c, channel, rerankRequest.Model)

	// 执行 rerank 请求
	response, usage, err := executeRerankRequest(c, &rerankRequest, channel)
	if err != nil {
		logger.Errorf(ctx, "❌ 执行 rerank 请求失败: %v", err)
		c.JSON(http.StatusInternalServerError, model.OpenAIErrorResponse{
			Error: struct {
				Message string `json:"message"`
				Type    string `json:"type"`
			}{
				Message: err.Error(),
				Type:    "service_error",
			},
		})
		return
	}

	// 计算执行时间
	elapsedTime := helper.CalcElapsedTime(startTime)

	// 记录成功日志
	logger.SysLogf("✅ Rerank请求成功完成")
	logger.SysLogf("┌─────────────────────────────────────────────────────────────")
	logger.SysLogf("│ 📊 结果统计:")
	logger.SysLogf("│   🔢 返回结果数: %d", len(response.Data))
	logger.SysLogf("│   ⏱️  执行时间: %dms", elapsedTime)
	logger.SysLogf("│   🎯 Token使用: %d", usage.TotalTokens)
	logger.SysLogf("│   🏷️  模型名称: %s", response.Model)
	logger.SysLogf("│   🆔 渠道ID: %d", channel.ChannelID)
	logger.SysLogf("└─────────────────────────────────────────────────────────────")

	// 异步记录使用情况
	go recordRerankUsage(ctx, userId, eid, &rerankRequest, response, usage, int(channel.ChannelID), startTime)

	// 返回响应
	c.JSON(http.StatusOK, response)
}

// validateRerankRequest 验证 rerank 请求参数
func validateRerankRequest(req *RerankRequest) error {
	if req.Model == "" {
		return fmt.Errorf("model 参数不能为空")
	}
	if req.Query == "" {
		return fmt.Errorf("query 参数不能为空")
	}
	if len(req.Documents) == 0 {
		return fmt.Errorf("documents 参数不能为空")
	}
	if len(req.Documents) > 1000 {
		return fmt.Errorf("documents 数量不能超过 1000")
	}
	if req.TopN != nil && *req.TopN <= 0 {
		return fmt.Errorf("top_n 参数必须大于 0")
	}
	if req.TopN != nil && *req.TopN > len(req.Documents) {
		*req.TopN = len(req.Documents)
	}
	return nil
}

// getChannelTypeByModel 根据模型名称确定渠道类型
func getChannelTypeByModel(modelName string) int {
	// 百炼模型
	if strings.HasPrefix(modelName, "gte-rerank") {
		return model.ChannelApiBailian
	}

	// 可以扩展支持其他厂商的 rerank 模型
	// if strings.HasPrefix(modelName, "cohere-rerank") {
	//     return channeltype.Cohere
	// }

	return -1 // 不支持的模型
}

// executeRerankRequest 执行 rerank 请求
func executeRerankRequest(c *gin.Context, req *RerankRequest, channel *model.Channel) (*RerankResponse, *relay_model.Usage, error) {
	// 创建元数据
	meta := &meta.Meta{
		Mode:            0, // rerank 模式
		ChannelType:     channel.Type,
		ChannelId:       int(channel.ChannelID),
		UserId:          int(config.GetUserId(c)),
		OriginModelName: req.Model,
		ActualModelName: req.Model,
		APIType:         model.GetApiType(channel.Type),
		APIKey:          channel.Key,
	}

	if channel.BaseURL != nil {
		meta.BaseURL = *channel.BaseURL
	}

	// 根据渠道类型处理请求
	switch channel.Type {
	case model.ChannelApiBailian:
		return executeAliRerankRequest(c, req, meta)
	default:
		return nil, nil, fmt.Errorf("不支持的渠道类型: %d", channel.Type)
	}
}

// executeAliRerankRequest 执行阿里云百炼 rerank 请求
func executeAliRerankRequest(c *gin.Context, req *RerankRequest, meta *meta.Meta) (*RerankResponse, *relay_model.Usage, error) {
	// 使用百炼适配器处理请求
	return callBailianRerankAPIViaAdaptor(c, req, meta)
}

// callBailianRerankAPIViaAdaptor 通过适配器调用百炼 rerank API
func callBailianRerankAPIViaAdaptor(c *gin.Context, req *RerankRequest, meta *meta.Meta) (*RerankResponse, *relay_model.Usage, error) {
	// 导入百炼适配器包
	// 由于编辑器自动移除导入，我们需要在函数内部处理

	// 创建百炼适配器请求格式
	bailianReq := struct {
		Model      string   `json:"model"`
		Query      string   `json:"query"`
		Documents  []string `json:"documents"`
		TopN       *int     `json:"top_n,omitempty"`
		ReturnDocs *bool    `json:"return_documents,omitempty"`
	}{
		Model:      req.Model,
		Query:      req.Query,
		Documents:  req.Documents,
		TopN:       req.TopN,
		ReturnDocs: req.ReturnDocuments,
	}

	// 构建请求体
	requestBody, err := json.Marshal(map[string]interface{}{
		"model": bailianReq.Model,
		"input": map[string]interface{}{
			"query":     bailianReq.Query,
			"documents": bailianReq.Documents,
		},
		"parameters": func() map[string]interface{} {
			params := make(map[string]interface{})
			if bailianReq.TopN != nil {
				params["top_n"] = *bailianReq.TopN
			}
			if bailianReq.ReturnDocs != nil {
				params["return_documents"] = *bailianReq.ReturnDocs
			} else {
				params["return_documents"] = false
			}
			return params
		}(),
	})
	if err != nil {
		return nil, nil, fmt.Errorf("序列化请求失败: %v", err)
	}

	// 构建正确的 rerank API URL
	baseUrl := meta.BaseURL
	if baseUrl == "" {
		baseUrl = "https://dashscope.aliyuncs.com"
	}
	url := fmt.Sprintf("%s/api/v1/services/rerank/text-rerank/text-rerank", baseUrl)

	// 详细的请求日志
	logger.SysLogf("🚀 百炼Rerank API请求开始")
	logger.SysLogf("┌─────────────────────────────────────────────────────────────")
	logger.SysLogf("│ 📡 请求URL: %s", url)
	logger.SysLogf("│ 🔑 API Key: %s", maskAPIKey(meta.APIKey))
	logger.SysLogf("│ 🤖 模型名称: %s", req.Model)
	logger.SysLogf("│ 📝 请求方法: POST")
	logger.SysLogf("│ 📊 查询长度: %d 字符", len(req.Query))
	logger.SysLogf("│ 📚 文档数量: %d", len(req.Documents))
	if req.TopN != nil {
		logger.SysLogf("│ 🔢 TopN: %d", *req.TopN)
	}
	if req.ReturnDocuments != nil {
		logger.SysLogf("│ 📄 返回文档: %v", *req.ReturnDocuments)
	}
	logger.SysLogf("└─────────────────────────────────────────────────────────────")

	// 创建HTTP请求
	httpReq, err := http.NewRequestWithContext(c.Request.Context(), "POST", url, bytes.NewReader(requestBody))
	if err != nil {
		logger.SysErrorf("❌ 创建HTTP请求失败: %v", err)
		return nil, nil, fmt.Errorf("创建请求失败: %v", err)
	}

	// 设置请求头
	httpReq.Header.Set("Content-Type", "application/json")
	httpReq.Header.Set("Authorization", "Bearer "+meta.APIKey)

	// 发送请求
	client := &http.Client{Timeout: 60 * time.Second}
	resp, err := client.Do(httpReq)
	if err != nil {
		logger.SysErrorf("❌ 百炼Rerank请求失败: %v", err)
		return nil, nil, fmt.Errorf("发送请求失败: %v", err)
	}
	defer resp.Body.Close()

	logger.SysLogf("✅ 百炼Rerank请求完成 - 状态码: %d", resp.StatusCode)

	// 检查响应状态
	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		logger.SysErrorf("❌ 百炼Rerank请求失败 - 状态码: %d, 响应: %s", resp.StatusCode, string(body))
		return nil, nil, fmt.Errorf("请求失败，状态码: %d", resp.StatusCode)
	}

	// 读取响应
	responseBody, err := io.ReadAll(resp.Body)
	if err != nil {
		logger.SysErrorf("❌ 读取响应失败: %v", err)
		return nil, nil, fmt.Errorf("读取响应失败: %v", err)
	}

	// 解析百炼响应
	var bailianResponse map[string]interface{}
	if err := json.Unmarshal(responseBody, &bailianResponse); err != nil {
		logger.SysErrorf("❌ 解析响应失败: %v", err)
		return nil, nil, fmt.Errorf("解析响应失败: %v", err)
	}

	// 转换为标准格式
	return convertBailianRerankResponse(bailianResponse, req)
}

// convertBailianRerankResponse 转换百炼 rerank 响应为标准格式
func convertBailianRerankResponse(bailianResp map[string]interface{}, req *RerankRequest) (*RerankResponse, *relay_model.Usage, error) {
	// 解析输出数据
	output, ok := bailianResp["output"].(map[string]interface{})
	if !ok {
		return nil, nil, fmt.Errorf("响应格式错误：缺少 output 字段")
	}

	results, ok := output["results"].([]interface{})
	if !ok {
		return nil, nil, fmt.Errorf("响应格式错误：缺少 results 字段")
	}

	// 转换结果
	var rerankResults []RerankResult
	for _, result := range results {
		resultMap, ok := result.(map[string]interface{})
		if !ok {
			continue
		}

		index, _ := resultMap["index"].(float64)
		score, _ := resultMap["relevance_score"].(float64)

		rerankResult := RerankResult{
			Object:         "rerank_result",
			Index:          int(index),
			RelevanceScore: score,
		}

		// 如果需要返回文档内容
		if req.ReturnDocuments != nil && *req.ReturnDocuments {
			if int(index) < len(req.Documents) {
				rerankResult.Document = &RerankDocument{
					Text: req.Documents[int(index)],
				}
			}
		}

		rerankResults = append(rerankResults, rerankResult)
	}

	// 计算 token 使用量
	usage := calculateRerankUsage(req, len(rerankResults))

	response := &RerankResponse{
		Object: "list",
		Data:   rerankResults,
		Model:  req.Model,
		Usage: RerankUsage{
			TotalTokens: usage.TotalTokens,
		},
	}

	logger.SysLogf("✅ 响应转换完成 - 结果数量: %d, Token使用: %d", len(rerankResults), usage.TotalTokens)

	return response, usage, nil
}

// calculateRerankUsage 计算 rerank 的 token 使用量
func calculateRerankUsage(req *RerankRequest, resultCount int) *relay_model.Usage {
	// 计算输入 token（query + documents）
	queryTokens := openai.CountTokenText(req.Query, req.Model)

	documentsText := strings.Join(req.Documents, " ")
	documentsTokens := openai.CountTokenText(documentsText, req.Model)

	promptTokens := queryTokens + documentsTokens

	// rerank 通常没有生成内容，completion tokens 为 0
	completionTokens := 0

	totalTokens := promptTokens + completionTokens

	logger.SysLogf("📊 Token计算详情 - Query: %d, Documents: %d, Total: %d",
		queryTokens, documentsTokens, totalTokens)

	return &relay_model.Usage{
		PromptTokens:     promptTokens,
		CompletionTokens: completionTokens,
		TotalTokens:      totalTokens,
	}
}

// recordRerankUsage 记录 rerank 使用情况
func recordRerankUsage(ctx context.Context, userId, eid int64, req *RerankRequest, resp *RerankResponse, usage *relay_model.Usage, channelId int, startTime time.Time) {
	// 计算费用
	channelType := getChannelTypeByModel(req.Model)
	modelRatio := billing_ratio.GetModelRatio(req.Model, channelType)
	groupRatio := 1.0
	completionRatio := billing_ratio.GetCompletionRatio(req.Model, channelType)
	ratio := modelRatio * groupRatio

	quota := int64(math.Ceil((float64(usage.PromptTokens) + float64(usage.CompletionTokens)*completionRatio) * ratio))
	if ratio != 0 && quota <= 0 {
		quota = 1
	}

	// 序列化请求和响应
	requestJSON, _ := json.Marshal(req)
	responseJSON, _ := json.Marshal(resp)

	// 获取请求ID
	requestId := helper.GetRequestID(ctx)
	if requestId == "" {
		requestId = fmt.Sprintf("rerank_%d_%d", userId, time.Now().UnixNano())
	}

	// 创建消息记录
	message := &model.Message{
		Eid:              eid,
		UserID:           userId,
		ConversationID:   0, // rerank 不关联会话
		AgentID:          0, // rerank 不关联 agent
		Message:          string(requestJSON),
		Answer:           string(responseJSON),
		ModelName:        req.Model,
		Quota:            int(quota),
		PromptTokens:     usage.PromptTokens,
		CompletionTokens: usage.CompletionTokens,
		TotalTokens:      usage.TotalTokens,
		ChannelId:        channelId,
		RequestId:        requestId,
		ElapsedTime:      helper.CalcElapsedTime(startTime),
		IsStream:         false,
		QuotaContent:     fmt.Sprintf("倍率：%.2f × %.2f × %.2f", modelRatio, groupRatio, completionRatio),
	}

	if err := model.CreateMessage(message); err != nil {
		logger.SysErrorf("❌ 记录 rerank 使用情况失败: %v", err)
	} else {
		logger.SysLogf("✅ Rerank使用记录保存成功")
		logger.SysLogf("┌─────────────────────────────────────────────────────────────")
		logger.SysLogf("│ 📊 使用统计:")
		logger.SysLogf("│   🆔 消息ID: %d", message.ID)
		logger.SysLogf("│   👤 用户ID: %d", userId)
		logger.SysLogf("│   🏢 企业ID: %d", eid)
		logger.SysLogf("│   🤖 模型: %s", req.Model)
		logger.SysLogf("│   🎯 Token: %d", usage.TotalTokens)
		logger.SysLogf("│   💰 配额: %d", quota)
		logger.SysLogf("│   ⏱️  耗时: %dms", helper.CalcElapsedTime(startTime))
		logger.SysLogf("└─────────────────────────────────────────────────────────────")
	}
}

// maskAPIKey 遮蔽API密钥的敏感部分
func maskAPIKey(apiKey string) string {
	if len(apiKey) <= 8 {
		return "****"
	}
	return apiKey[:4] + "****" + apiKey[len(apiKey)-4:]
}

// truncateString 截断字符串到指定长度
func truncateString(s string, maxLen int) string {
	if len(s) <= maxLen {
		return s
	}
	return s[:maxLen] + "..."
}
