package model

// VerificationCode 验证码数据表
// @Description 存储手机号/邮箱验证码及发送次数等信息
type VerificationCode struct {
	ID         int64  `json:"id" gorm:"primaryKey;autoIncrement;comment:主键ID"`
	Type       string `json:"type" gorm:"type:varchar(20);not null;comment:验证码类型（phone/email）"` // 验证码类型（phone/email）
	Target     string `json:"target" gorm:"type:varchar(50);not null;comment:验证目标（手机号/邮箱）"`     // 验证目标（手机号/邮箱）
	Code       string `json:"code" gorm:"type:varchar(10);not null;comment:验证码"`                // 验证码
	ExpiresAt  int64  `json:"expires_at" gorm:"not null;comment:过期时间戳（毫秒）"`                     // 过期时间戳（毫秒）
	DailyCount int    `json:"daily_count" gorm:"not null;default:1;comment:本日发送次数"`             // 本日发送次数
	BaseModel
}

const (
	VerificationCodeTypePhone = "phone"
	VerificationCodeTypeEmail = "email"
)

// TableName 指定表名
func (VerificationCode) TableName() string {
	return "verification_codes"
}
