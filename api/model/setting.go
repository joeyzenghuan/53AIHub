package model

import "errors"

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
