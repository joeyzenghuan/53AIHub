package n8n

// N8nWorkflowRequest n8n 工作流请求结构
type N8nWorkflowRequest map[string]interface{}

// N8nWorkflowResponse n8n 工作流响应结构（数组格式）
type N8nWorkflowResponse []map[string]interface{}

// N8nWorkflowItem n8n 工作流响应项
type N8nWorkflowItem struct {
	Output interface{} `json:"output,omitempty"`
	Query  interface{} `json:"query,omitempty"`
	// 支持任意其他字段
	Data map[string]interface{} `json:"-"`
}

// N8nErrorResponse n8n 错误响应结构
type N8nErrorResponse struct {
	Error   string `json:"error,omitempty"`
	Message string `json:"message,omitempty"`
	Code    int    `json:"code,omitempty"`
}
