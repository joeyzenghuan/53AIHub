package bailian

type Request struct {
	Input      Input      `json:"input"`
	Parameters Parameters `json:"parameters"`
}

type Input struct {
	Prompt         string   `json:"prompt"`
	SessionID      string   `json:"session_id,omitempty"`
	ImageList      []string `json:"image_list,omitempty"`
	SessionFileIds []string `json:"session_file_ids,omitempty"`
}

type Parameters struct {
	IncrementalOutput bool `json:"incremental_output,omitempty"`
}

type Response struct {
	Output    Output `json:"output"`
	Usage     Usage  `json:"usage"`
	RequestID string `json:"request_id"`
}

type Output struct {
	SessionID    string `json:"session_id"`
	FinishReason string `json:"finish_reason"`
	Text         string `json:"text"`
}

type Usage struct {
	Models Models `json:"models"`
}

type Models []struct {
	InputTokens  int    `json:"input_tokens"`
	OutputTokens int    `json:"output_tokens"`
	ModelID      string `json:"model_id"`
}

type ErrorResponse struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}
