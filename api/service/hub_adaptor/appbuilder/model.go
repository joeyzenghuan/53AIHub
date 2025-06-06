package appbuilder

type Request struct {
	AppID          string       `json:"app_id"`
	EndUserID      string       `json:"end_user_id,omitempty"`
	Query          string       `json:"query"`
	Stream         bool         `json:"stream"`
	ConversationID string       `json:"conversation_id"`
	FileIDs        []string     `json:"file_ids,omitempty"`
	ToolChoice     *ToolChoice  `json:"tool_choice,omitempty"`
	Tools          []Tool       `json:"tools,omitempty"`
	ToolOutputs    []ToolOutput `json:"tool_outputs,omitempty"`
	Action         *Action      `json:"action,omitempty"`
}

type ToolChoice struct {
	Type     string    `json:"type"`
	Function *Function `json:"function,omitempty"`
}

type Function struct {
	Name  string      `json:"name"`
	Input interface{} `json:"input"`
}

type Tool struct {
	Type     string    `json:"type"`
	Function *Function `json:"function"`
}

type ToolOutput struct {
	ToolCallID string `json:"tool_call_id"`
	Output     string `json:"output"`
}

type Action struct {
	ActionType string      `json:"action_type"`
	Parameters interface{} `json:"parameters"`
}

type InterruptEvent struct {
	ID   string `json:"id"`
	Type string `json:"type"`
}

// Response represents the main API response structure
type Response struct {
	RequestID      string    `json:"request_id"`
	Date           string    `json:"date"`
	Answer         string    `json:"answer"`
	ConversationID string    `json:"conversation_id"`
	MessageID      string    `json:"message_id"`
	IsCompletion   *bool     `json:"is_completion"`
	Content        []Content `json:"content"`
}

// Content represents the nested content structure
type Content struct {
	ResultType   string      `json:"result_type,omitempty"`
	EventCode    int         `json:"event_code"`
	EventMessage string      `json:"event_message"`
	EventType    string      `json:"event_type"`
	EventID      string      `json:"event_id"`
	EventStatus  string      `json:"event_status"`
	ContentType  string      `json:"content_type"`
	Outputs      interface{} `json:"outputs"`
	Usage        *Usage      `json:"usage,omitempty"`
	ToolCalls    []ToolCall  `json:"tool_calls,omitempty"`
}

// ToolCall represents tool call information
type ToolCall struct {
	ID       string      `json:"id"`
	Type     string      `json:"type"`
	Function *Function   `json:"function,omitempty"`
	Input    interface{} `json:"input,omitempty"`
}

// Usage represents model usage information
type Usage struct {
	PromptTokens     int    `json:"prompt_tokens"`
	CompletionTokens int    `json:"completion_tokens"`
	TotalTokens      int    `json:"total_tokens"`
	Name             string `json:"name"`
}
