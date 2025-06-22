package common

import (
	"crypto/rand"
	"crypto/tls"
	"errors"
	"fmt"
	"regexp"
	"time"

	"github.com/53AI/53AIHub/common/utils/env"
	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/jordan-wright/email"
	"gorm.io/gorm"
)

// ValidateEmailFormat 验证基础邮箱格式（通用版）
func ValidateEmailFormat(email string) bool {
	pattern := `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$` // 通用邮箱格式验证（如user@domain.com）
	return regexp.MustCompile(pattern).MatchString(email)
}

// SendEmail 使用jordan-wright/email库通过通用SMTP服务发送邮件
func SendEmail(e *email.Email) error {
	auth, from, err := config.GetSMTPAuth()
	if err != nil {
		return fmt.Errorf("failed to get SMTP auth: %w", err)
	}
	if from == "" {
		return errors.New("SMTP from address is empty")
	}
	e.From = from

	host := env.String("SMTP_HOST", "smtp.example.com")
	port := env.Int("SMTP_PORT", 587)
	isSsl := env.Bool("SMTP_IS_SSL", false)
	addr := fmt.Sprintf("%s:%d", host, port)
	if isSsl {
		tlsConfig := &tls.Config{
			InsecureSkipVerify: false,
			ServerName:         host,
		}

		if err := e.SendWithTLS(addr, auth, tlsConfig); err != nil {
			return fmt.Errorf("failed to send email via %s:%d: %w", host, port, err)
		}
	} else {
		if err := e.Send(addr, auth); err != nil {
			return fmt.Errorf("failed to send email via %s:%d: %w", host, port, err)
		}
	}
	return nil
}

// VerifyEmailCode 验证邮箱验证码有效性
func VerifyEmailCode(email, code string) (bool, error) {
	if email == "" || code == "" {
		return false, errors.New("missing email or code parameter")
	}

	now := time.Now().UTC().UnixMilli()
	var storedCode string
	// 优先从Redis获取验证码
	storedCode, err := RedisGet("email_verification:" + email)
	if err != nil || storedCode == "" {
		// Redis不存在时查询数据库
		var vc model.VerificationCode
		err = model.DB.Where("target = ? AND type = 'email' AND code = ? AND expires_at > ?", email, code, now).First(&vc).Error
		if err != nil {
			if errors.Is(err, gorm.ErrRecordNotFound) {
				return false, errors.New("verification code expired or invalid")
			}
			return false, fmt.Errorf("database query error: %w", err)
		}
		storedCode = code
	}

	if storedCode != code {
		return false, errors.New(model.InvalidVerificationCode)
	}

	RedisDel("email_verification:" + email)
	return true, nil
}

func GenerateRandomCode(length int) (string, error) {
	bytes := make([]byte, length)
	if _, err := rand.Read(bytes); err != nil {
		return "", err
	}
	for i := 0; i < length; i++ {
		bytes[i] = byte(48 + int(bytes[i])%10) // 0-9
	}
	return string(bytes), nil
}
