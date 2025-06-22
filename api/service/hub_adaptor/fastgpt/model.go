package fastgpt

import "github.com/songquanpeng/one-api/relay/model"

type FastGptRequest struct {
	model.GeneralOpenAIRequest
	ChatId    string `json:"chatId,omitempty"`
	CustomUid string `json:"customUid,omitempty"`
}
