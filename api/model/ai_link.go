package model

import (
	"errors"
	"log"
)

type AILink struct {
	ID          int64  `json:"id" gorm:"primaryKey;autoIncrement"`
	Eid         int64  `json:"eid" gorm:"not null;index" example:"1"`
	GroupID     int64  `json:"group_id" gorm:"not null;index" example:"1"`
	Name        string `json:"name" gorm:"not null" example:"ai_link_name"`
	Logo        string `json:"logo" gorm:"not null" example:"logo_url"`
	URL         string `json:"url" gorm:"not null" example:"ai_link_url"`
	Description string `json:"description" gorm:"not null" example:"ai_link_description"`
	Sort        int64  `json:"sort" gorm:"not null; default:0" example:"0"`
	CreatedBy   int64  `json:"created_by" gorm:"not null" example:"1"`
	BaseModel
}

func (aiLink *AILink) CheckGroup() error {
	if aiLink.GroupID == 0 {
		return nil
	}
	exist, _ := ExistsGroupByIDAndType(aiLink.Eid, aiLink.GroupID, AI_LINKS_TYPE)
	if !exist {
		return errors.New("group not exist")
	}
	return nil
}

func CreateAILink(aiLink *AILink) error {
	err := aiLink.CheckGroup()
	if err != nil {
		return err
	}
	return DB.Create(aiLink).Error
}

func DeleteAILinkByID(id int64) error {
	return DB.Where("id = ?", id).Delete(&AILink{}).Error
}

func UpdateAILink(aiLink *AILink) error {
	err := aiLink.CheckGroup()
	if err != nil {
		return err
	}
	return DB.Model(aiLink).
		Select("name", "group_id", "logo", "url", "description", "sort", "updated_at").
		Updates(aiLink).Error
}

func GetAILinkByID(id int64) (*AILink, error) {
	var aiLink AILink
	result := DB.Where("id = ?", id).First(&aiLink)
	if result.Error != nil {
		return nil, result.Error
	}
	return &aiLink, nil
}

func GetAILinksByEidAndGroupId(eid int64, groupID int64) ([]AILink, error) {
	var aiLinks []AILink
	if err := DB.Where("eid =? AND group_id =?", eid, groupID).Order("sort DESC").Find(&aiLinks).Error; err != nil {
		return nil, err
	}
	return aiLinks, nil
}

func GetAILinksGroupedBySort(eid int64) ([]AILink, error) {
	type queryResult struct {
		GroupSort int64 `gorm:"column:group_sort"`
		AILink
	}

	var results []queryResult
	err := DB.Table("groups").
		Select("groups.sort AS group_sort, ai_links.*").
		Joins("JOIN ai_links ON groups.group_id = ai_links.group_id AND groups.eid = ai_links.eid").
		Where("ai_links.eid = ?", eid).
		Order("group_sort DESC, sort DESC").
		Scan(&results).Error

	if err != nil {
		log.Printf("GetAILinksGroupedBySort failed: %v", err)
		return nil, err
	}

	aiLinks := make([]AILink, 0, len(results))
	for _, r := range results {
		aiLinks = append(aiLinks, r.AILink)
	}
	return aiLinks, nil
}

func GetAILinksByEidAndGroupIdWithKeyword(eid int64, groupID int64, keyword string) ([]AILink, error) {
	var aiLinks []AILink
	if err := DB.Where("eid = ? AND group_id = ? AND name LIKE ?", eid, groupID, "%"+keyword+"%").
		Order("sort DESC").Find(&aiLinks).Error; err != nil {
		return nil, err
	}
	return aiLinks, nil
}

func GetAILinksGroupedBySortWithKeyword(eid int64, keyword string) ([]AILink, error) {
	type queryResult struct {
		GroupSort int64 `gorm:"column:group_sort"`
		AILink
	}

	var results []queryResult
	err := DB.Table("groups").
		Select("groups.sort AS group_sort, ai_links.*").
		Joins("JOIN ai_links ON groups.group_id = ai_links.group_id AND groups.eid = ai_links.eid").
		Where("ai_links.eid = ? AND ai_links.name LIKE ?", eid, "%"+keyword+"%").
		Order("group_sort DESC, sort DESC").
		Scan(&results).Error

	if err != nil {
		log.Printf("GetAILinksGroupedBySortWithKeyword failed: %v", err)
		return nil, err
	}

	aiLinks := make([]AILink, 0, len(results))
	for _, r := range results {
		aiLinks = append(aiLinks, r.AILink)
	}
	return aiLinks, nil
}
