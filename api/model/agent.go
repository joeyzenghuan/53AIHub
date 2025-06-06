package model

import "errors"

type Agent struct {
	AgentID           int64   `json:"agent_id" gorm:"primaryKey;autoIncrement"`
	Eid               int64   `json:"eid" gorm:"not null;index"`
	Name              string  `json:"name" gorm:"not null"`
	Logo              string  `json:"logo" gorm:"not null"`
	Sort              int     `json:"sort" gorm:"default:0"`
	Description       string  `json:"description" gorm:"not null"`
	ChannelType       int     `json:"channel_type" gorm:"default:0"`
	Model             string  `json:"model" gorm:"not null"`
	Prompt            string  `json:"prompt" gorm:"not null"`
	Configs           string  `json:"configs" gorm:"not null;type:text"`
	Tools             string  `json:"tools" gorm:"not null;type:text"`
	GroupID           int64   `json:"group_id" gorm:"type:int;default:0;not null"`
	UseCases          string  `json:"use_cases" gorm:"not null;type:text"`
	CreatedBy         int64   `json:"created_by" gorm:"not null"`
	CustomConfig      string  `json:"custom_config" gorm:"not null;type:text"`
	UserGroupIds      []int64 `json:"user_group_ids" gorm:"-"`
	Enable            bool    `json:"enable" gorm:"default:false;comment:enable status"`
	ConversationCount int64   `json:"conversation_count" gorm:"-"`
	BaseModel
}

func (agent *Agent) Create() error {
	if agent.Eid == 0 {
		return errors.New("eid is empty")
	}
	// check if name exists
	var count int64
	DB.Model(&Agent{}).Where("eid = ? AND name = ?", agent.Eid, agent.Name).Count(&count)
	if count > 0 {
		return errors.New("name already exists")
	}

	result := DB.Create(agent)
	if result.Error != nil {
		return result.Error
	}

	return nil
}

func (agent *Agent) Update() error {
	err := DB.Model(agent).Updates(agent).Error
	return err
}

func (agent *Agent) Delete() error {
	err := DB.Delete(agent).Error
	return err
}

func GetAgentByID(eid int64, agentID int64) (*Agent, error) {
	var agent Agent
	err := DB.Where("eid = ? AND agent_id = ?", eid, agentID).First(&agent).Error
	if err != nil {
		return nil, err
	}
	return &agent, nil
}

func GetAgentListWithIDs(eid int64, keyword string, group_id int64, permittedAgentIDs []int64, channel_types []int, offset int, limit int) (count int64, agents []*Agent, err error) {
	db := DB.Model(&Agent{}).Where("eid = ?", eid)
	if keyword != "" {
		db = db.Where("name LIKE ?", "%"+keyword+"%")
	}

	if group_id != 0 {
		db = db.Where("group_id =?", group_id)
	}

	if len(channel_types) > 0 {
		db = db.Where("channel_type IN?", channel_types)
	}

	if permittedAgentIDs != nil {
		if len(permittedAgentIDs) == 0 {
			return 0, []*Agent{}, nil
		}
		db = db.Where("agent_id IN ?", permittedAgentIDs)
	}

	db.Count(&count)

	err = db.Offset(offset).Limit(limit).Order("sort DESC").Order("agent_id DESC").Find(&agents).Error

	return count, agents, err
}

func (a *Agent) GetUserGroupIds() ([]int64, error) {
	var permissions []ResourcePermission
	var groupIds []int64

	err := DB.Where("resource_id = ? AND resource_type = ?", a.AgentID, ResourceTypeAgent).Find(&permissions).Error
	if err != nil {
		return nil, err
	}

	for _, p := range permissions {
		groupIds = append(groupIds, p.GroupID)
	}

	return groupIds, nil
}

// LoadUserGroupIds
func (a *Agent) LoadUserGroupIds() error {
	ids, err := a.GetUserGroupIds()
	if err != nil {
		return err
	}
	a.UserGroupIds = ids
	return nil
}

func UpdateAgentStatus(eid, agentID int64, enable *bool) error {
	return DB.Model(&Agent{}).
		Where("eid = ? AND agent_id = ?", eid, agentID).
		Update("enable", enable).Error
}
