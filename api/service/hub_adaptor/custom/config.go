package custom

type CustomConfig struct {
	UserId                     string `json:"user_id,omitempty"`
	ConversationId             string `json:"conversation_id,omitempty"`
	ConversationExpirationTime int64  `json:"conversation_expire,omitempty"`
	AIHubConversationId        int64  `json:"53AIHub_conversation_id,omitempty"`
}
