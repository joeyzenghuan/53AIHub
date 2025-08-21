package model

import (
	"encoding/json"
	"errors"

	"gorm.io/gorm"
)

type Setting struct {
	SettingID int64  `json:"setting_id" gorm:"primaryKey;autoIncrement"`
	Eid       int64  `json:"eid" gorm:"not null;index" example:"1"`
	Key       string `json:"key" gorm:"not null;index" example:"setting_key"`
	Value     string `json:"value" gorm:"not null" example:"setting_value"`
	BaseModel
}

type SettingKey string

const (
	ThirdPartyStatisticHeader SettingKey = "third_party_statistic_header"
	ThirdPartyStatisticCss    SettingKey = "third_party_statistic_css"
)

const (
	DefaultPromptLinks string = "default_prompt_links" // 添加默认网站配置的 key
)

type SettingGroup []SettingKey

var ThirdPartyStatisticGroup SettingGroup = []SettingKey{
	ThirdPartyStatisticHeader,
	ThirdPartyStatisticCss,
}

var settingGroupMap = map[string]SettingGroup{
	"third_party_statistic": ThirdPartyStatisticGroup,
}

func GetSettingGroupByName(group_name string) (SettingGroup, bool) {
	group, exists := settingGroupMap[group_name]
	return group, exists
}

func CreateSetting(setting *Setting) error {
	return DB.Create(setting).Error
}

func DeleteSettingByID(id int64) error {
	return DB.Where("setting_id = ?", id).Delete(&Setting{}).Error
}

func UpdateSetting(setting *Setting) error {
	return DB.Model(setting).
		Select("key", "value", "updated_time").
		Updates(setting).Error
}

func GetSettingByID(id int64) (*Setting, error) {
	var setting Setting
	result := DB.Where("setting_id = ?", id).First(&setting)
	if result.Error != nil {
		return nil, result.Error
	}
	return &setting, nil
}

func GetSettingsByEid(eid int64) ([]Setting, error) {
	var settings []Setting
	if err := DB.Where("eid =?", eid).Order("created_time DESC").Find(&settings).Error; err != nil {
		return nil, err
	}
	return settings, nil
}

func GetSettingsBySettingsGroup(eid int64, group_name string) ([]Setting, error) {
	group, ok := GetSettingGroupByName(group_name)
	if !ok {
		return nil, errors.New("setting group not exist")
	}
	var settings []Setting
	keys := make([]string, len(group))
	for i, k := range group {
		keys[i] = string(k)
	}
	if err := DB.Where("eid = ?", eid).Where("`key` IN (?)", keys).Order("created_time DESC").Find(&settings).Error; err != nil {
		return nil, err
	}
	return settings, nil
}

func GetSettingByEidAndKey(eid int64, key string) (*Setting, error) {
	var setting Setting
	result := DB.Where("eid =?", eid).Where("`key` =?", key).First(&setting)
	if result.Error != nil {
		if result.Error.Error() == "record not found" {
			return nil, nil
		}
		return nil, result.Error
	}
	return &setting, nil
}

// 添加解析 JSON 的辅助函数
func GetDefaultPromptLinks(eid int64) ([]AILinkInfo, error) {
	var setting Setting
	err := DB.Where("eid = ? AND `key` = ?", eid, DefaultPromptLinks).First(&setting).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			// 如果记录未找到，从 GetDefaultGroupData 中提取数据
			defaultGroups := GetDefaultGroupData()

			// 定义需要的链接名称，并存储到 map 中
			requiredLinkNames := map[string]bool{
				"豆包":       true,
				"腾讯元宝":     true,
				"百度AI+":    true,
				"ChatGPT":  true,
				"Kimi":     true,
				"DeekSeek": true,
			}

			// 提取需要的链接数据
			var defaultLinks []AILinkInfo
			for _, group := range defaultGroups {
				for _, link := range group.Links {
					if requiredLinkNames[link.Name] {
						defaultLinks = append(defaultLinks, link)
					}
				}
			}
			data, _ := json.Marshal(defaultLinks)
			setting = Setting{
				Eid:   eid,
				Key:   DefaultPromptLinks,
				Value: string(data),
			}
			if err := CreateSetting(&setting); err != nil {
				return nil, err
			}
			// 重新从数据库中获取设置
			err = DB.Where("eid = ? AND `key` = ?", eid, DefaultPromptLinks).First(&setting).Error
			if err != nil {
				return nil, err
			}
		}
	}
	// 还需要把setting.eid传入links中
	var links []AILinkInfo
	if err := json.Unmarshal([]byte(setting.Value), &links); err != nil {
		return nil, err
	}
	return links, nil
}
