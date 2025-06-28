package controller

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"strconv"
	"strings"

	"github.com/53AI/53AIHub/common/storage"
	"github.com/53AI/53AIHub/common/utils"
	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

// PaySettingRequest represents the request for creating or updating a payment setting
type PaySettingRequest struct {
	PayType     int    `json:"pay_type" binding:"required" example:"1" enums:"1,2,3" description:"Payment type: 1:WeChat Pay 2:Manual Transfer 3:PayPal"`
	PayConfig   string `json:"pay_config" binding:"required" example:"{\"appId\":\"wx123456\",\"mchId\":\"1900000109\",\"serialNo\":\"1DDE55AD98ED71EB\",\"apiV3Key\":\"Aa111111\",\"notifyUrl\":\"https://example.com/notify\",\"privateKeyPath\":\"/path/to/apiclient_key.pem\",\"certPath\":\"\",\"platformCertPath\":\"/path/to/platform_cert.pem\"}" description:"Payment configuration. For WeChat Pay, certificate file paths are required"`
	PayStatus   bool   `json:"pay_status" example:"true" description:"Payment status, true for enabled, false for disabled"`
	ExtraConfig string `json:"extra_config" example:"{}" description:"Extra configuration"`
}

// PaySettingsResponse represents the response for listing payment settings
type PaySettingsResponse struct {
	Count       int64               `json:"count"`
	PaySettings []*model.PaySetting `json:"pay_settings"`
}

// CreatePaySetting creates a new payment setting
// @Summary Create payment setting
// @Description Create a new payment setting. For WeChat Pay, certificate files will be read from the specified paths and encrypted
// @Tags PaySetting
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param setting body PaySettingRequest true "Payment setting information including payment type, configuration and status. For WeChat Pay, configuration must include certificate file paths"
// @Success 200 {object} model.CommonResponse{data=model.PaySetting} "Payment setting created successfully"
// @Failure 400 {object} model.CommonResponse "Invalid parameters or payment setting already exists"
// @Failure 500 {object} model.CommonResponse "Internal server error"
// @Router /api/pay_settings [post]
func CreatePaySetting(c *gin.Context) {
	var req PaySettingRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	eid := config.GetEID(c)

	// Validate payment type
	if !isValidPayType(req.PayType) {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid payment type"))
		return
	}

	// Check if payment setting already exists
	existing, _ := model.GetPaySettingByType(eid, req.PayType)
	if existing != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Payment setting of this type already exists"))
		return
	}

	// Process configuration based on payment type
	var err error
	if req.PayType == model.PayTypeWechat {
		req.PayConfig, err = processWechatConfig(req.PayConfig)
		if err != nil {
			c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err.Error()))
			return
		}
	}

	// Set default status if not provided
	if req.PayStatus == false {
		req.PayStatus = model.PayStatusEnabled
	}

	paySetting := &model.PaySetting{
		Eid:         eid,
		PayType:     req.PayType,
		PayConfig:   req.PayConfig,
		PayStatus:   req.PayStatus,
		ExtraConfig: req.ExtraConfig,
	}

	if err := paySetting.Create(); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	payText, err := model.GetPayTypeText(paySetting.PayType)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	log := model.SystemLog{
		Eid:      eid,
		UserID:   config.GetUserId(c),
		Nickname: config.GetUserNickname(c),
		Module:   model.SystemLogModulePayment,
		Action:   model.SystemLogActionCreate,
		Content:  fmt.Sprintf("设置%s", payText),
		IP:       utils.GetClientIP(c),
	}
	model.CreateSystemLog(&log)

	c.JSON(http.StatusOK, model.Success.ToResponse(paySetting))
}

// UpdatePaySetting updates an existing payment setting
// @Summary Update payment setting
// @Description Update an existing payment setting
// @Tags PaySetting
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Payment setting ID"
// @Param setting body PaySettingRequest true "Payment setting information"
// @Success 200 {object} model.CommonResponse{data=model.PaySetting}
// @Router /api/pay_settings/{id} [put]
func UpdatePaySetting(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid ID"))
		return
	}

	eid := config.GetEID(c)

	// Get existing payment setting
	paySetting, err := model.GetPaySettingByID(eid, id)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse("Payment setting not found"))
		return
	}

	var req PaySettingRequest
	if err = c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	// Validate payment type
	if !isValidPayType(req.PayType) {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid payment type"))
		return
	}

	// Process configuration based on payment type
	if req.PayType == model.PayTypeWechat {
		req.PayConfig, err = processWechatConfig(req.PayConfig)
		if err != nil {
			c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err.Error()))
			return
		}
	}

	// Update payment setting
	paySetting.PayType = req.PayType
	paySetting.PayConfig = req.PayConfig
	paySetting.PayStatus = req.PayStatus
	paySetting.ExtraConfig = req.ExtraConfig

	if err := paySetting.Update(); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(paySetting))
}

// DeletePaySetting deletes a payment setting
// @Summary Delete payment setting
// @Description Delete a specific payment setting
// @Tags PaySetting
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Payment setting ID"
// @Success 200 {object} model.CommonResponse
// @Router /api/pay_settings/{id} [delete]
func DeletePaySetting(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid ID"))
		return
	}

	paySetting, err := model.GetPaySettingByID(config.GetEID(c), id)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(nil))
		return
	}

	if err := paySetting.Delete(); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}

// GetPaySetting gets a payment setting by ID
// @Summary Get payment setting
// @Description Get a specific payment setting by ID
// @Tags PaySetting
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Payment setting ID"
// @Success 200 {object} model.CommonResponse{data=model.PaySetting}
// @Router /api/pay_settings/{id} [get]
func GetPaySetting(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid ID"))
		return
	}

	paySetting, err := model.GetPaySettingByID(config.GetEID(c), id)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(nil))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(paySetting))
}

// GetPaySettings gets all payment settings for the current enterprise
// @Summary Get all payment settings
// @Description Get all payment settings for the current enterprise
// @Tags PaySetting
// @Accept json
// @Produce json
// @Security BearerAuth
// @Success 200 {object} model.CommonResponse{data=PaySettingsResponse}
// @Router /api/pay_settings [get]
func GetPaySettings(c *gin.Context) {
	paySettings, err := model.GetPaySettingsByEid(config.GetEID(c))
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(&PaySettingsResponse{
		Count:       int64(len(paySettings)),
		PaySettings: paySettings,
	}))
}

// GetPaySettingByType gets a payment setting by type
// @Summary Get payment setting by type
// @Description Get a payment setting by payment type
// @Tags PaySetting
// @Accept json
// @Produce json
// @Param type path int true "Payment type (1: WeChat Pay, 2: Manual Transfer, 3: PayPal)"
// @Success 200 {object} model.CommonResponse{data=model.PaySetting}
// @Router /api/pay_settings/type/{type} [get]
func GetPaySettingByType(c *gin.Context) {
	typeStr := c.Param("type")
	payType, err := strconv.Atoi(typeStr)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid payment type"))
		return
	}

	// Validate payment type
	if !isValidPayType(payType) {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid payment type"))
		return
	}

	paySetting, err := model.GetPaySettingByType(config.GetEID(c), payType)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(nil))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(paySetting))
}

// PayConfigRequest represents the request for updating payment configuration
type PayConfigRequest struct {
	PayConfig   string `json:"pay_config" binding:"required" example:"{\"appId\":\"wx123456\",\"mchId\":\"1900000109\",\"serialNo\":\"1DDE55AD98ED71EB\",\"apiV3Key\":\"Aa111111\",\"notifyUrl\":\"https://example.com/notify\",\"privateKeyPath\":\"/path/to/apiclient_key.pem\",\"certPath\":\"\",\"platformCertPath\":\"/path/to/platform_cert.pem\"}"`
	ExtraConfig string `json:"extra_config" example:"{}"`
}

// PayStatusRequest represents the request for updating payment status
type PayStatusRequest struct {
	PayStatus *bool `json:"pay_status" binding:"required" example:"false"`
}

// UpdatePayConfig updates the payment configuration
// @Summary Update payment configuration
// @Description Update the configuration of an existing payment setting
// @Tags PaySetting
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Payment setting ID"
// @Param setting body PayConfigRequest true "Payment configuration"
// @Success 200 {object} model.CommonResponse{data=model.PaySetting}
// @Router /api/pay_settings/{id}/config [patch]
func UpdatePayConfig(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid ID"))
		return
	}

	paySetting, err := model.GetPaySettingByID(config.GetEID(c), id)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(nil))
		return
	}

	var req PayConfigRequest
	if err = c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	// Validate configuration based on payment type
	if paySetting.PayType == model.PayTypeWechat {
		paySetting.PayConfig, err = processWechatConfig(req.PayConfig)
		if err != nil {
			c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err.Error()))
			return
		}
	} else {
		paySetting.PayConfig = req.PayConfig
	}
	paySetting.ExtraConfig = req.ExtraConfig

	if err := paySetting.Update(); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	payText, err := model.GetPayTypeText(paySetting.PayType)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	log := model.SystemLog{
		Eid:      config.GetEID(c),
		UserID:   config.GetUserId(c),
		Nickname: config.GetUserNickname(c),
		Module:   model.SystemLogModulePayment,
		Action:   model.SystemLogActionUpdate,
		Content:  fmt.Sprintf("设置%s", payText),
		IP:       utils.GetClientIP(c),
	}
	model.CreateSystemLog(&log)

	c.JSON(http.StatusOK, model.Success.ToResponse(paySetting))
}

// UpdatePayStatus updates the payment status
// @Summary Update payment status
// @Description Update the status of an existing payment setting
// @Tags PaySetting
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Payment setting ID"
// @Param status body PayStatusRequest true "Payment status (1: Enabled, 0: Disabled)"
// @Success 200 {object} model.CommonResponse{data=model.PaySetting}
// @Router /api/pay_settings/{id}/status [patch]
func UpdatePayStatus(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid ID"))
		return
	}

	paySetting, err := model.GetPaySettingByID(config.GetEID(c), id)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(nil))
		return
	}

	var req PayStatusRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	paySetting.PayStatus = *req.PayStatus

	if err := paySetting.Update(); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	statusText := "启用"
	if !paySetting.PayStatus {
		statusText = "禁用"
	}

	payText, err := model.GetPayTypeText(paySetting.PayType)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	log := model.SystemLog{
		Eid:      paySetting.Eid,
		UserID:   config.GetUserId(c),
		Nickname: config.GetUserNickname(c),
		Module:   model.SystemLogModuleAdmin,
		Action:   model.SystemLogActionToggle,
		Content:  fmt.Sprintf("%s%s", statusText, payText),
		IP:       utils.GetClientIP(c),
	}
	model.CreateSystemLog(&log)

	c.JSON(http.StatusOK, model.Success.ToResponse(paySetting))
}

// isValidPayType checks if the payment type is valid
func isValidPayType(payType int) bool {
	return payType >= 1 && payType <= 3
}

// processWechatConfig processes and validates WeChat payment configuration
func processWechatConfig(payConfig string) (string, error) {
	wechatConfig, err := validateWechatConfig(payConfig)
	if err != nil {
		return "", err
	}

	configBytes, err := json.Marshal(wechatConfig)
	if err != nil {
		return "", fmt.Errorf("Failed to marshal config: %v", err)
	}

	return string(configBytes), nil
}

// loadFileFromPathOrURL loads a file from a local path or URL
func loadFileFromPathOrURL(path string) ([]byte, error) {
	if strings.HasPrefix(path, "http://") || strings.HasPrefix(path, "https://") {
		// Fetch from URL
		resp, err := http.Get(path)
		if err != nil {
			return nil, fmt.Errorf("Failed to fetch from URL: %v", err)
		}
		defer resp.Body.Close()

		if resp.StatusCode != http.StatusOK {
			return nil, fmt.Errorf("Failed to fetch from URL, status code: %d", resp.StatusCode)
		}

		return io.ReadAll(resp.Body)
	}

	// Load from storage
	return storage.StorageInstance.Load(path)
}

// prepareEncryptionKey prepares a 32-byte encryption key for AES-256
func prepareEncryptionKey() ([]byte, error) {
	// Get encryption key from config
	originalKey := []byte(config.GetEncryptionKey())

	// Ensure key is exactly 32 bytes (256 bits) for AES-256
	key := make([]byte, 32)

	// If key is shorter than 32 bytes, pad with zeros
	// If key is longer than 32 bytes, truncate it
	if len(originalKey) > 32 {
		copy(key, originalKey[:32])
	} else {
		copy(key, originalKey)
	}

	return key, nil
}

// Helper function to validate WeChat payment configuration
func validateWechatConfig(payConfig string) (model.WechatPayConfig, error) {
	var wechatConfig model.WechatPayConfig
	if err := json.Unmarshal([]byte(payConfig), &wechatConfig); err != nil {
		return wechatConfig, err
	}

	// Validate required fields
	if wechatConfig.AppID == "" || wechatConfig.MchID == "" || wechatConfig.APIv3Key == "" || wechatConfig.SerialNo == "" {
		return wechatConfig, fmt.Errorf("Missing required WeChat payment configuration (AppID, MchID, APIv3Key, SerialNo)")
	}

	// Check if we need to process certificate and private key files
	if wechatConfig.UseEncryptedConfig {
		// Configuration already contains encrypted data
		if wechatConfig.PrivateKey == "" {
			return wechatConfig, fmt.Errorf("Encrypted private key is required when using encrypted configuration")
		}
	} else {
		// Need to read and encrypt files
		if wechatConfig.PrivateKeyPath == "" {
			return wechatConfig, fmt.Errorf("Private key path is required")
		}

		// Load and encrypt private key
		privateKeyBytes, err := loadFileFromPathOrURL(wechatConfig.PrivateKeyPath)
		if err != nil {
			return wechatConfig, fmt.Errorf("Failed to read private key file: %v", err)
		}

		// Encrypt private key content
		encryptedPrivateKey, err := encryptSensitiveData(string(privateKeyBytes))
		if err != nil {
			return wechatConfig, fmt.Errorf("Failed to encrypt private key: %v", err)
		}

		// Save encrypted private key content and original file path
		wechatConfig.PrivateKey = encryptedPrivateKey
		// Keep original file path unchanged

		// Read and encrypt platform certificate (if provided)
		if wechatConfig.PlatformCertPath != "" {
			platformCertBytes, err := loadFileFromPathOrURL(wechatConfig.PlatformCertPath)
			if err != nil {
				return wechatConfig, fmt.Errorf("Failed to read platform certificate file: %v", err)
			}

			encryptedPlatformCert, err := encryptSensitiveData(string(platformCertBytes))
			if err != nil {
				return wechatConfig, fmt.Errorf("Failed to encrypt platform certificate: %v", err)
			}

			// Save encrypted certificate content and original file path
			wechatConfig.PlatformCert = encryptedPlatformCert
			// Keep original file path unchanged
		}

		// Mark as using encrypted configuration for future use
		wechatConfig.UseEncryptedConfig = true
	}

	// Validate notification URL
	// if wechatConfig.NotifyURL == "" {
	// 	return wechatConfig, fmt.Errorf("Notification URL is required")
	// }

	return wechatConfig, nil
}

// Function to encrypt sensitive data
func encryptSensitiveData(data string) (string, error) {
	// Prepare encryption key
	key, err := prepareEncryptionKey()
	if err != nil {
		return "", err
	}

	// Create cipher
	block, err := aes.NewCipher(key)
	if err != nil {
		return "", err
	}

	// Create GCM mode
	gcm, err := cipher.NewGCM(block)
	if err != nil {
		return "", err
	}

	// Create nonce
	nonce := make([]byte, gcm.NonceSize())
	if _, err := io.ReadFull(rand.Reader, nonce); err != nil {
		return "", err
	}

	// Encrypt data
	ciphertext := gcm.Seal(nonce, nonce, []byte(data), nil)

	// Return base64 encoded encrypted data
	return base64.StdEncoding.EncodeToString(ciphertext), nil
}

// Function to decrypt sensitive data
func decryptSensitiveData(encryptedData string) (string, error) {
	// Decode base64
	data, err := base64.StdEncoding.DecodeString(encryptedData)
	if err != nil {
		return "", err
	}

	// Prepare encryption key
	key, err := prepareEncryptionKey()
	if err != nil {
		return "", err
	}

	// Create cipher
	block, err := aes.NewCipher(key)
	if err != nil {
		return "", err
	}

	// Create GCM mode
	gcm, err := cipher.NewGCM(block)
	if err != nil {
		return "", err
	}

	// Get nonce size
	nonceSize := gcm.NonceSize()
	if len(data) < nonceSize {
		return "", errors.New("ciphertext too short")
	}

	// Extract nonce and ciphertext
	nonce, ciphertext := data[:nonceSize], data[nonceSize:]

	// Decrypt
	plaintext, err := gcm.Open(nil, nonce, ciphertext, nil)
	if err != nil {
		return "", err
	}

	return string(plaintext), nil
}
