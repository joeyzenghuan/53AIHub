package model

import "errors"

// Payment type constants
const (
	PayTypeWechat = 1 // WeChat Pay
	PayTypeManual = 2 // Manual Transfer
	PayTypePaypal = 3 // PayPal
	PayTypeAlipay = 4 // Alipay
)

// Payment status constants
const (
	PayStatusDisabled = false // Payment method disabled
	PayStatusEnabled  = true  // Payment method enabled
)

// PaySetting represents the payment setting table
type PaySetting struct {
	PaySettingID int64  `json:"pay_setting_id" gorm:"primaryKey;autoIncrement"`
	Eid          int64  `json:"eid" gorm:"not null;index"`
	PayType      int    `json:"pay_type" gorm:"not null;comment:'Payment type 1:WeChat Pay 2:Manual Transfer 3:PayPal 4:alipay'"` // 1:WeChat Pay 2:Manual Transfer 3:PayPal 4:alipay
	PayConfig    string `json:"pay_config" gorm:"type:text;not null;comment:'Payment configuration JSON'"`
	PayStatus    bool   `json:"pay_status" gorm:"not null;default:1;comment:'Status true:Enabled false:Disabled'"` // 1:Enabled false:Disabled
	ExtraConfig  string `json:"extra_config" gorm:"type:text;comment:'Extra configuration JSON'"`
	BaseModel
}

// WechatPayConfig represents the configuration for WeChat Pay
type WechatPayConfig struct {
	AppID              string `json:"appId"`              // Application ID
	MchID              string `json:"mchId"`              // Merchant ID
	SerialNo           string `json:"serialNo"`           // Merchant Certificate Serial Number
	APIv3Key           string `json:"apiV3Key"`           // API v3 Key
	PrivateKeyPath     string `json:"privateKeyPath"`     // Path to Merchant Private Key file
	PrivateKey         string `json:"privateKey"`         // Encrypted Merchant Private Key content
	CertPath           string `json:"certPath"`           // Path to Merchant Certificate file
	NotifyURL          string `json:"notifyUrl"`          // Payment Notification URL
	PlatformCertPath   string `json:"platformCertPath"`   // Path to WeChat Pay Platform Certificate (optional)
	PlatformCert       string `json:"platformCert"`       // Encrypted WeChat Pay Platform Certificate content (optional)
	PlatformSerialNo   string `json:"platformSerialNo"`   // WeChat Pay Platform Certificate Serial Number (optional)
	UseEncryptedConfig bool   `json:"useEncryptedConfig"` // Whether to use encrypted configuration
}

type AlipayConfig struct {
	AppID           string `json:"appId"`
	PrivateKey      string `json:"privateKey"`
	AlipayPublicKey string `json:"alipayPublicKey"`
	ReturnUrl       string `json:"returnUrl"`
	NotifyUrl       string `json:"notifyUrl"`
}

// TableName specifies the table name
func (PaySetting) TableName() string {
	return "pay_settings"
}

// Create creates a new payment setting
func (ps *PaySetting) Create() error {
	return DB.Create(ps).Error
}

// Update updates an existing payment setting
func (ps *PaySetting) Update() error {
	return DB.Save(ps).Error
}

// Delete deletes a payment setting
func (ps *PaySetting) Delete() error {
	return DB.Delete(ps).Error
}

// GetPaySettingByID gets a payment setting by ID
func GetPaySettingByID(eid int64, id int64) (*PaySetting, error) {
	var paySetting PaySetting
	err := DB.Where("eid = ? AND pay_setting_id = ?", eid, id).First(&paySetting).Error
	if err != nil {
		return nil, err
	}
	return &paySetting, nil
}

// GetPaySettingsByEid gets all payment settings for an enterprise
func GetPaySettingsByEid(eid int64) ([]*PaySetting, error) {
	var paySettings []*PaySetting
	err := DB.Where("eid = ?", eid).Find(&paySettings).Error
	if err != nil {
		return nil, err
	}
	return paySettings, nil
}

// GetPaySettingByType gets a payment setting by type
func GetPaySettingByType(eid int64, payType int) (*PaySetting, error) {
	var paySetting PaySetting
	err := DB.Where("eid = ? AND pay_type = ?", eid, payType).First(&paySetting).Error
	if err != nil {
		return nil, err
	}
	return &paySetting, nil
}

func GetPayTypeText(payType int) (string, error) {
	switch payType {
	case PayTypeWechat:
		return "微信支付", nil
	case PayTypeManual:
		return "手动转账", nil
	case PayTypePaypal:
		return "PayPal", nil
	case PayTypeAlipay:
		return "支付宝", nil
	default:
		return "", errors.New("unsupported payment type")
	}
}
