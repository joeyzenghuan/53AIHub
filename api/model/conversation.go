package model

type Conversation struct {
	ConversationID                    int64  `json:"conversation_id" gorm:"column:conversation_id;primaryKey;autoIncrement"`
	Eid                               int64  `json:"eid" gorm:"column:eid;not null;index:idx_conversation_user_agent"`
	UserID                            int64  `json:"user_id" gorm:"column:user_id;not null;index:idx_conversation_user_agent"`
	AgentID                           int64  `json:"agent_id" gorm:"column:agent_id;not null;index:idx_conversation_user_agent"`
	Title                             string `json:"title" gorm:"column:title;type:varchar(255)"`
	Status                            int    `json:"status" gorm:"column:status;default:1"`
	LastMessage                       string `json:"last_message" gorm:"column:last_message;type:text"`
	DeletedTime                       int64  `json:"deleted_time" gorm:"not null"`
	Quota                             int    `json:"quota" gorm:"default:0"`
	TotalTokens                       int    `json:"total_tokens" gorm:"default:0"`
	ChannelConversationID             string `json:"channel_conversation_id" gorm:"column:channel_conversation_id;type:varchar(255)"`
	ChannelConversationExpirationTime int64  `json:"channel_conversation_expiration_time" gorm:"column:channel_conversation_expiration_time;default:0"`
	Model                             string `json:"model" gorm:"column:model;type:varchar(255)"`
	Agent                             *Agent `json:"agent" gorm:"-"`
	User                              *User  `json:"user" gorm:"-"`
	BaseModel
}

const (
	ConversationStatusActive   = 1
	ConversationStatusArchived = 2
	ConversationStatusDeleted  = 0
)

// CreateConversation creates a new conversation record
func CreateConversation(conversation *Conversation) error {
	return DB.Create(conversation).Error
}

// GetConversationByID retrieves a conversation by ID
func GetConversationByID(eid int64, user_id int64, conversation_id int64) (*Conversation, error) {
	var conversation Conversation
	err := DB.Where("eid = ? AND conversation_id = ? and user_id = ?", eid, conversation_id, user_id).First(&conversation).Error
	if err != nil {
		return nil, err
	}
	conversation.LoadAgent()
	return &conversation, nil
}

func AdminGetConversationByID(eid int64, conversation_id int64) (*Conversation, error) {
	var conversation Conversation
	err := DB.Where("eid =? AND conversation_id =?", eid, conversation_id).First(&conversation).Error
	if err != nil {
		return nil, err
	}
	return &conversation, nil
}

// GetConversationsByUserID retrieves all conversations for a user
func GetConversationsByUserID(eid int64, userID int64) ([]*Conversation, error) {
	var conversations []*Conversation
	err := DB.Where("eid = ? AND user_id = ?", eid, userID).Order("updated_time DESC").Find(&conversations).Error
	if err != nil {
		return nil, err
	}
	for _, conversation := range conversations {
		conversation.LoadAgent()
	}
	return conversations, nil
}

// GetUserConversationsWithFilter retrieves conversations with filter and pagination
func GetUserConversationsWithFilter(eid, userID int64, keyword string, createdAtStart, createdAtEnd int64, offset, limit int) ([]*Conversation, int64, error) {
	query := DB.Where("eid = ? AND user_id = ?", eid, userID)

	if createdAtStart > 0 {
		query = query.Where("created_time >= ?", createdAtStart)
	}
	if createdAtEnd > 0 {
		query = query.Where("created_time <= ?", createdAtEnd)
	}

	if keyword != "" {
		query = query.Where("title LIKE ?", "%"+keyword+"%")
	}

	var total int64
	if err := query.Model(&Conversation{}).Count(&total).Error; err != nil {
		return nil, 0, err
	}

	var conversations []*Conversation
	if err := query.Order("created_time DESC").Offset(offset).Limit(limit).Find(&conversations).Error; err != nil {
		return nil, 0, err
	}

	return conversations, total, nil
}

// GetMessageCountByConversationID 获取会话消息数量
func GetMessageCountByConversationID(conversationID int64) (int, error) {
	var count int64
	if err := DB.Model(&Message{}).Where("conversation_id = ?", conversationID).Count(&count).Error; err != nil {
		return 0, err
	}
	return int(count), nil
}

// GetFirstMessageByConversationID 获取会话的第一条消息
func GetFirstMessageByConversationID(conversationID int64) (string, error) {
	var msg Message
	if err := DB.Where("conversation_id = ?", conversationID).Order("created_time ASC").First(&msg).Error; err != nil {
		return "", err
	}
	return msg.Message, nil
}

func (c *Conversation) LoadAgent() error {
	agent, err := GetAgentByID(c.Eid, c.AgentID)
	if err != nil {
		return err
	}
	c.Agent = agent
	return nil
}

func (c *Conversation) LoadUser() error {
	user, err := GetUserByID(c.UserID)
	if err != nil {
		return err
	}
	c.User = user
	return nil
}

// GetConversationsByAgentID retrieves all conversations for a specific agent
func GetConversationsByAgentID(eid int64, agentID int64) ([]*Conversation, error) {
	var conversations []*Conversation
	err := DB.Where("eid = ? AND agent_id = ?", eid, agentID).Order("updated_time DESC").Find(&conversations).Error
	if err != nil {
		return nil, err
	}
	return conversations, nil
}

// GetAgentConversationsWithFilter retrieves conversations with filter and pagination for agent
func GetAgentConversationsWithFilter(eid, agentID int64, keyword string, createdAtStart, createdAtEnd int64, offset, limit int) ([]*Conversation, int64, error) {
	query := DB.Where("eid = ? AND agent_id = ?", eid, agentID)

	if createdAtStart > 0 {
		query = query.Where("created_time >= ?", createdAtStart)
	}
	if createdAtEnd > 0 {
		query = query.Where("created_time <= ?", createdAtEnd)
	}

	if keyword != "" {
		query = query.Where("title LIKE ?", "%"+keyword+"%")
	}

	var total int64
	if err := query.Model(&Conversation{}).Count(&total).Error; err != nil {
		return nil, 0, err
	}

	var conversations []*Conversation
	if err := query.Order("created_time DESC").Offset(offset).Limit(limit).Find(&conversations).Error; err != nil {
		return nil, 0, err
	}

	return conversations, total, nil
}

// UpdateConversation updates a conversation record
func UpdateConversation(conversation *Conversation) error {
	return DB.Save(conversation).Error
}

// DeleteConversation deletes a conversation record
func DeleteConversation(eid int64, conversation_id int64) error {
	return DB.Where("eid = ? AND conversation_id = ?", eid, conversation_id).Delete(&Conversation{}).Error
}

func GetConversationByIdAndUserId(eid int64, conversation_id int64, user_id int64) (*Conversation, error) {
	var conversation Conversation
	err := DB.Where("eid =? AND conversation_id =? AND user_id =?", eid, conversation_id, user_id).First(&conversation).Error
	if err != nil {
		return nil, err
	}
	return &conversation, nil
}
