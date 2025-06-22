package model

type Provider struct {
	ProviderID   int64   `json:"provider_id" gorm:"primaryKey;autoIncrement"`
	Eid          int64   `json:"eid" gorm:"not null;index" example:"1"`
	Name         string  `json:"name" gorm:"size:100;not null;index"`
	ProviderType int64   `json:"provider_type" gorm:"not null;index"`
	Configs      string  `json:"configs" gorm:"type:text;not null"`
	IsAuthorized bool    `json:"is_authorized" gorm:"not null;default:false"`
	AccessToken  string  `json:"access_token" gorm:"type:text"`
	RefreshToken string  `json:"refresh_token" gorm:"type:text"`
	ExpiresIn    int64   `json:"expires_in" gorm:"not null"`
	AuthedTime   int64   `json:"authed_time" gorm:"not null"`
	BaseURL      *string `json:"base_url" gorm:"column:base_url;default:''"`
	BaseModel
}

type CozeConfig struct {
	ClientID     string `json:"client_id"`
	ClientSecret string `json:"client_secret"`
}

const (
	ProviderTypeCozeCn     = 1
	ProviderTypeCozeCom    = 2
	ProviderTypeAppBuilder = 3
	ProviderType53AI       = 4
)

// GetBaseURLByProviderType returns the base URL based on provider type
func (provider *Provider) GetBaseURLByProviderType() string {
	if provider.BaseURL != nil && *provider.BaseURL != "" {
		return *provider.BaseURL
	}

	switch provider.ProviderType {
	case ProviderTypeCozeCn:
		return "https://api.coze.cn"
	case ProviderTypeCozeCom:
		return "https://api.coze.com"
	case ProviderTypeAppBuilder:
		return "https://qianfan.baidubce.com"
	case ProviderType53AI:
		return "https://api.53ai.com"
	default:
		return ""
	}
}

func CreateProvider(provider *Provider) error {
	return DB.Create(provider).Error
}

func DeleteProviderByID(id, eid int64) error {
	return DB.Where("provider_id = ? AND eid = ?", id, eid).Delete(&Provider{}).Error
}

func UpdateProvider(provider *Provider) error {
	return DB.Model(provider).
		Select("name", "provider_type", "configs",
			"is_authorized", "updated_time", "access_token", "refresh_token", "expires_in", "authed_time").
		Updates(provider).Error
}

func GetProviderByID(id, eid int64) (*Provider, error) {
	var provider Provider
	err := DB.Where("provider_id = ? AND eid = ?", id, eid).First(&provider).Error
	return &provider, err
}

func GetProvidersByEidAndProviderType(eid int64, providerType int64) ([]Provider, error) {
	var providers []Provider
	if providerType != 0 {
		err := DB.Where("eid =? AND provider_type =?", eid, providerType).Find(&providers).Error
		return providers, err
	}

	err := DB.Where("eid = ?", eid).Find(&providers).Error
	return providers, err
}

func GetFirstProviderByEidAndProviderType(eid int64, providerType int64) (provider Provider, err error) {
	err = DB.Where("eid =? AND provider_type =?", eid, providerType).First(&provider).Error
	return provider, err
}

func GetProvidersByTypeAndAuthStatus(providerType int64, authStatus bool) ([]Provider, error) {
	var providers []Provider
	err := DB.Where("provider_type = ? and is_authorized = ?", providerType, authStatus).Find(&providers).Error
	return providers, err
}
