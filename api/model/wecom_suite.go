package model

import (
	"errors"
)

type WecomSuite struct {
	SuiteID                 string `json:"suite_id" gorm:"primaryKey;type:varchar(32)"`
	Secret                  string `json:"secret" gorm:"type:varchar(255);not null"`
	Ticket                  string `json:"ticket" gorm:"type:varchar(255)"`
	TicketUpdateTime        int64  `json:"ticket_update_time" gorm:"type:bigint"`
	AccessToken             string `json:"access_token" gorm:"type:varchar(255)"`
	ExpiresIn               int    `json:"expires_in" gorm:"type:int"`
	TokenUpdateTime         int64  `json:"token_update_time" gorm:"type:bigint"`
	Auths                   int    `json:"auths" gorm:"type:int;default:0"`
	Name                    string `json:"name" gorm:"type:varchar(255);not null"`
	Desc                    string `json:"desc" gorm:"type:varchar(255)"`
	Token                   string `json:"token" gorm:"type:varchar(255);not null"`
	EncodingAesKey          string `json:"encoding_aes_key" gorm:"type:varchar(255);not null"`
	AppInfo                 string `json:"app_info" gorm:"type:text"`
	ProviderSecret          string `json:"provider_secret" gorm:"type:varchar(255)"`
	CorpID                  string `json:"corp_id" gorm:"type:varchar(255);index"`
	ProviderToken           string `json:"provider_token" gorm:"type:varchar(255)"`
	ProviderTokenUpdateTime int64  `json:"provider_token_update_time" gorm:"type:bigint"`
	ProviderTokenExpiresIn  int    `json:"provider_token_expires_in" gorm:"type:int"`
	App                     string `json:"app" gorm:"type:varchar(255)"`
	BaseModel
}

func GetWecomSuite(suiteID string) (*WecomSuite, error) {
	var suite WecomSuite
	err := DB.Where("suite_id = ?", suiteID).First(&suite).Error
	if err != nil {
		return nil, errors.New("suite not found")
	}
	return &suite, nil
}

func (suite *WecomSuite) Create() error {
	if suite.SuiteID == "" {
		return errors.New("suite_id cannot be empty")
	}
	var count int64
	DB.Model(&WecomSuite{}).Where("suite_id = ?", suite.SuiteID).Count(&count)
	if count > 0 {
		return errors.New("suite_id already exists")
	}

	result := DB.Create(suite)
	return result.Error
}

func (suite *WecomSuite) Update() error {
	if suite.SuiteID == "" {
		return errors.New("suite_id cannot be empty")
	}

	return DB.Model(suite).Updates(suite).Error
}

func (suite *WecomSuite) Delete() error {
	if suite.SuiteID == "" {
		return errors.New("suite_id cannot be empty")
	}

	return DB.Delete(suite).Error
}

func GetWecomSuitesByCorpID(corpID string) ([]*WecomSuite, error) {
	var suites []*WecomSuite
	err := DB.Where("corp_id = ?", corpID).Find(&suites).Error
	return suites, err
}
