package custom

// WorkflowResponseData 工作流标准响应数据结构
type WorkflowResponseData struct {
	WorkflowOutputData map[string]interface{} `json:"workflow_output_data"` // 工作流输出数据
	ExecuteID          string                 `json:"execute_id"`           // 执行ID
	ChannelID          int                    `json:"channel_id"`
	ModelName          string                 `json:"model_name"` // 模型名称
}

// WorkflowAdaptorResponse 工作流适配器响应接口
// 所有工作流适配器都应该实现此接口，以提供统一的响应格式
type WorkflowAdaptorResponse interface {
	IsSuccess() bool
	GetExecuteID() string
	GetOutputData() interface{}
	GetErrorMessage() string
}
