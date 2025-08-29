package model

// Group represents a group entity with optional agent associations
type Group struct {
	GroupId   int64  `json:"group_id" gorm:"primaryKey;autoIncrement"`
	Eid       int64  `json:"eid" gorm:"not null;index" example:"1"`
	CreatedBy int64  `json:"created_by" gorm:"not null" example:"1"`
	GroupName string `json:"group_name" gorm:"not null" example:"group_name"`
	GroupType int64  `json:"group_type" gorm:"not null;default:0" example:"1"`
	Sort      int64  `json:"sort" gorm:"not null; default:0" example:"0"`
	// Define the relationship between Group and Agent through resource_permissions table
	Agents []*Agent `json:"agents" gorm:"-"` // Ignore this field in normal GORM operations
	BaseModel
}

const (
	USER_FREE_GROUP_NAME = "免费版"
)

// GetGroupWithAgents retrieves a group with its associated agents through resource permissions
func GetGroupWithAgents(groupId int64, enable bool) (*Group, error) {
	var group Group

	// First get the group
	if err := DB.Where("group_id = ?", groupId).First(&group).Error; err != nil {
		return nil, err
	}

	// Then get associated agents through resource permissions
	var agents []*Agent
	err := DB.Model(&Agent{}).
		Distinct("agents.*").
		Joins("JOIN resource_permissions ON resource_permissions.resource_id = agents.agent_id").
		Where("resource_permissions.group_id = ? AND resource_permissions.resource_type = ? and enable = ?",
			groupId, ResourceTypeAgent, enable).
		Order("sort DESC").
		Order("agent_id DESC").
		Find(&agents).Error

	if err != nil {
		return nil, err
	}

	group.Agents = agents
	return &group, nil
}

// GetGroupsWithAgents retrieves groups with their associated agents with pagination support
func GetGroupsWithAgents(eid int64, groupType int64, offset, limit int) ([]Group, int64, error) {
	var groups []Group
	var count int64

	// Get total count first
	if err := DB.Model(&Group{}).
		Where("eid = ? AND group_type = ?", eid, groupType).
		Count(&count).Error; err != nil {
		return nil, 0, err
	}

	// Query paginated groups
	query := DB.Where("eid = ? AND group_type = ?", eid, groupType).
		Order("sort DESC")

	if limit > 0 {
		query = query.Offset(offset).Limit(limit)
	}

	if err := query.Find(&groups).Error; err != nil {
		return nil, 0, err
	}

	// Query associated agents for each group
	for i := range groups {
		var agents []*Agent
		err := DB.Model(&Agent{}).
			Distinct("agents.*").
			Joins("JOIN resource_permissions ON resource_permissions.resource_id = agents.agent_id").
			Where("resource_permissions.group_id = ? AND resource_permissions.resource_type = ? AND agents.enable = ?",
				groups[i].GroupId, ResourceTypeAgent, true).
			Order("sort DESC").
			Order("agent_id DESC").
			Find(&agents).Error

		if err != nil {
			return nil, 0, err
		}

		groups[i].Agents = agents
	}

	return groups, count, nil
}

const (
	USER_GROUP_TYPE          = 1
	AI_LINKS_TYPE            = 2
	AGENT_TYPE               = 3
	INTERNAL_USER_GROUP_TYPE = 4
	SYSTEM_PROMPT_TYPE       = 5
	PERSONAL_PROMPT_TYPE     = 6
)

func CreateGroup(group *Group) error {
	return DB.Create(group).Error
}

func DeleteGroupByID(groupID int64) error {
	return DB.Where("group_id = ?", groupID).Delete(&Group{}).Error
}

func UpdateGroup(group *Group) error {
	return DB.Model(group).
		Select("group_name", "group_type", "sort", "updated_at").
		Updates(group).Error
}

func GetGroupByID(groupID int64) (*Group, error) {
	var group Group
	// 执行查询操作
	result := DB.Where("group_id = ?", groupID).First(&group)
	if result.Error != nil {
		return nil, result.Error
	}
	return &group, nil
}

// BatchSubmitGroups batch submits group information of a specified type, and decides to create, update, or delete based on the ID.
func BatchSubmitGroups(groupType int64, eid int64, groups []Group) error {
	// Query only existing groups of the specified type and eid
	var existingGroups []Group
	if err := DB.Where("group_type = ? AND eid = ?", groupType, eid).Find(&existingGroups).Error; err != nil {
		return err
	}
	existingGroupIDs := make(map[int64]bool)
	for _, group := range existingGroups {
		existingGroupIDs[group.GroupId] = true
	}

	// Process only incoming groups of the specified type and valid eid
	for _, group := range groups {
		if group.GroupType != groupType || group.Eid != eid {
			continue
		}
		if group.GroupId == 0 {
			if err := CreateGroup(&group); err != nil {
				return err
			}
		} else {
			if err := UpdateGroup(&group); err != nil {
				return err
			}
			existingGroupIDs[group.GroupId] = false
		}
	}

	// Delete groups of the specified type and eid that exist in the database but not in the incoming data
	for groupID, shouldDelete := range existingGroupIDs {
		if shouldDelete {
			if err := DeleteGroupByID(groupID); err != nil {
				return err
			}
		}
	}

	return nil
}

func GetGroupsByEid(eid int64, groupType int64) ([]Group, error) {
	var groups []Group
	if err := DB.Where("eid =? AND group_type =?", eid, groupType).Order("sort DESC").Find(&groups).Error; err != nil {
		return nil, err
	}

	if len(groups) == 0 {
		defaultGroup := Group{
			Eid:       eid,
			GroupType: groupType,
			GroupName: "默认",
			Sort:      0,
		}
		if err := DB.Create(&defaultGroup).Error; err != nil {
			return nil, err
		}
		groups = append(groups, defaultGroup)
	}

	return groups, nil
}

func GetFirstGroupByEid(eid int64, groupType int64) (Group, error) {
	var group Group
	if err := DB.Where("eid =? AND group_type =?", eid, groupType).Order("sort DESC").First(&group).Error; err != nil {
		return Group{}, err
	}
	return group, nil
}

func ExistsGroupByIDAndType(Eid int64, groupId int64, groupType int64) (bool, error) {
	var group Group
	err := DB.Where("group_id =? AND group_type =? AND eid =?", groupId, groupType, Eid).First(&group).Error
	if err != nil {
		return false, err
	}
	return true, nil
}

// AILinkInfo 定义AI链接信息结构体
type AILinkInfo struct {
	Name        string `json:"name"`
	Logo        string `json:"logo"`
	URL         string `json:"url"`
	Description string `json:"description"`
	Sort        int64  `json:"sort"`
}

// GroupInfo 定义分组信息结构体，包含子链接
type GroupInfo struct {
	GroupName string       `json:"group_name"`
	GroupType int64        `json:"group_type"`
	Sort      int64        `json:"sort"`
	Links     []AILinkInfo `json:"links"`
}

// GetDefaultGroupData 返回组合后的默认分组及链接数据
func GetDefaultGroupData() []GroupInfo {
	// 返回空的默认分组数据，用户需要自行添加工具
	defaultGroups := []GroupInfo{}
	return defaultGroups
}

func GetUserFreeGroup(eid int64) (*Group, error) {
	var group Group
	if err := DB.Where("eid =? AND group_type =? AND group_name =?", eid, USER_GROUP_TYPE, USER_FREE_GROUP_NAME).First(&group).Error; err != nil {
		return nil, err
	}

	return &group, nil
}
