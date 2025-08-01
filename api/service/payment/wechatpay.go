package payment

import (
	"context"
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"

	"github.com/53AI/53AIHub/common/storage"
	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/go-pay/gopay"
	"github.com/go-pay/gopay/wechat/v3"
	"github.com/go-pay/xlog"
)

// WechatService 微信支付实现
type WechatService struct{}

// CreateOrder 创建微信订单
// 返回支付参数(如prepay_id)，用于前端调起支付
func (w *WechatService) CreateOrder(req *PaymentRequest) (interface{}, error) {
	order := req.Order
	paySetting := req.PaySetting

	wechatConfig, err := ValidateWechatConfig(paySetting.PayConfig)
	if err != nil {
		xlog.Errorf("[Wechat] invalid config: %v", err)
		return "", fmt.Errorf("invalid wechat configuration: %w", err)
	}

	client, err := InitWechatClient(wechatConfig)
	if err != nil {
		return nil, err
	}

	bm, err := buildWechatPaymentBodyMap(wechatConfig, order)
	if err != nil {
		return nil, err
	}

	// 4. 根据支付方式处理不同支付类型
	payMethod := req.PayMethod
	if payMethod == "jsapi" {
		openid := req.OpenID
		// 从统一请求参数中获取openid
		if openid == "" {
			return "", fmt.Errorf("OpenID is required for JSAPI payment")
		}
		// 处理JSAPI支付
		return w.processJsapiPayment(client, bm, wechatConfig, openid)
	} else {
		// 默认使用Native支付(扫码支付)
		return w.processNativePayment(client, bm, order, wechatConfig)
	}
}

// WechatJsapiPayInfo represents the WeChat JSAPI payment information
type WechatJsapiPayInfo struct {
	AppId     string `json:"app_id"`
	TimeStamp string `json:"time_stamp"`
	NonceStr  string `json:"nonce_str"`
	Package   string `json:"package"`
	SignType  string `json:"sign_type"`
	PaySign   string `json:"pay_sign"`
	OrderId   string `json:"order_id"`
}

// processJsapiPayment 处理微信JSAPI支付
func (w *WechatService) processJsapiPayment(client *wechat.ClientV3, bm gopay.BodyMap, wechatConfig model.WechatPayConfig, openid string) (*WechatJsapiPayInfo, error) {
	payerBM := make(gopay.BodyMap)
	payerBM.Set("openid", openid)
	bm.Set("payer", payerBM)

	// Create JSAPI payment
	wxRsp, err := client.V3TransactionJsapi(context.Background(), bm)
	if err != nil {
		return nil, err
	}

	if wxRsp.Code != wechat.Success {
		return nil, fmt.Errorf("WeChat payment error: %s", wxRsp.Error)
	}

	// Get JSAPI payment parameters
	jsapiParams, err := client.PaySignOfJSAPI(wechatConfig.AppID, wxRsp.Response.PrepayId)
	if err != nil {
		return nil, err
	}

	// Return payment information
	return &WechatJsapiPayInfo{
		AppId:     jsapiParams.AppId,
		TimeStamp: jsapiParams.TimeStamp,
		NonceStr:  jsapiParams.NonceStr,
		Package:   jsapiParams.Package,
		SignType:  jsapiParams.SignType,
		PaySign:   jsapiParams.PaySign,
		OrderId:   bm.Get("out_trade_no"),
	}, nil
}

// WechatNativePayInfo represents the WeChat Native payment information
type WechatNativePayInfo struct {
	CodeURL     string `json:"code_url"`     // QR code URL for payment
	OrderId     string `json:"order_id"`     // Order ID
	ExpiredTime int64  `json:"expired_time"` // Expiration timestamp
}

// processNativePayment 处理微信Native支付
func (w *WechatService) processNativePayment(client *wechat.ClientV3, bm gopay.BodyMap, order *model.Order, config model.WechatPayConfig) (*WechatNativePayInfo, error) {
	// Create Native payment
	wxRsp, err := client.V3TransactionNative(context.Background(), bm)
	if err != nil {
		return nil, err
	}

	if wxRsp.Code != wechat.Success {
		return nil, fmt.Errorf("WeChat payment error: %s", wxRsp.Error)
	}

	// Return payment information
	return &WechatNativePayInfo{
		CodeURL:     wxRsp.Response.CodeUrl,
		OrderId:     order.OrderId,
		ExpiredTime: order.ExpiredTime,
	}, nil
}

// CloseOrder 关闭微信订单
func (w *WechatService) CloseOrder(order *model.Order, paySetting *model.PaySetting) (string, error) {
	// 实现微信支付取消订单逻辑
	return "", nil
}

// Refund 微信退款
func (w *WechatService) Refund(order *model.Order, paySetting *model.PaySetting) (any, error) {
	// 验证微信支付配置
	wechatConfig, err := ValidateWechatConfig(paySetting.PayConfig)
	if err != nil {
		xlog.Errorf("[Wechat] invalid config: %v", err)
		return "", fmt.Errorf("invalid wechat configuration: %w", err)
	}

	// 初始化微信客户端
	client, err := InitWechatClient(wechatConfig)
	if err != nil {
		return nil, err
	}

	// 构建退款请求参数
	bm := make(gopay.BodyMap)
	bm.Set("out_trade_no", order.OrderId)                    // 商户订单号
	bm.Set("out_refund_no", generateRefundNo(order.OrderId)) // 商户退款单号，需要唯一

	// 设置退款金额信息
	amount := make(gopay.BodyMap)
	amount.Set("refund", int64(order.Amount)) // 退款金额
	amount.Set("total", int64(order.Amount))  // 原订单金额
	amount.Set("currency", order.Currency)    // 货币类型
	bm.Set("amount", amount)

	// 设置退款原因（可选）
	bm.Set("reason", "测试用户申请退款")

	// 发起退款请求
	refundRsp, err := client.V3Refund(context.Background(), bm)
	if err != nil {
		return nil, fmt.Errorf("发起微信退款失败: %w", err)
	}

	// 检查响应状态
	if refundRsp.Code != wechat.Success {
		return nil, fmt.Errorf("微信退款失败: %s", refundRsp.Error)
	}

	// 返回退款结果
	return refundRsp, nil
}

// generateRefundNo 生成退款单号
func generateRefundNo(orderId string) string {
	// 使用订单号+时间戳+随机数生成唯一退款单号
	return fmt.Sprintf("%s_refund_%d", orderId, time.Now().Unix())
}

// QueryPaymentStatus 查询微信支付状态
func (w *WechatService) QueryPaymentStatus(order *model.Order, paySetting *model.PaySetting) (any, error) {
	wechatConfig, err := ValidateWechatConfig(paySetting.PayConfig)
	if err != nil {
		xlog.Errorf("[Wechat] invalid config: %v", err)
		return "", fmt.Errorf("invalid wechat configuration: %w", err)
	}

	client, err := InitWechatClient(wechatConfig)
	if err != nil {
		return nil, err
	}

	wxRsp, err := client.V3TransactionQueryOrder(context.Background(), wechat.OutTradeNo, order.OrderId)
	if err != nil {
		return nil, err
	}
	if wxRsp.Code != wechat.Success {
		return nil, fmt.Errorf("WeChat payment error: %s", wxRsp.Error)
	}
	return wxRsp, nil
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

// loadFileFromPathOrURL loads a file from a local path or URL
func loadFileFromPathOrURL(path string) ([]byte, error) {
	if strings.HasPrefix(path, "http://") || strings.HasPrefix(path, "https://") {
		// Fetch from URL
		resp, err := http.Get(path)
		if err != nil {
			return nil, fmt.Errorf("failed to fetch from URL: %v", err)
		}
		defer resp.Body.Close()

		if resp.StatusCode != http.StatusOK {
			return nil, fmt.Errorf("failed to fetch from URL, status code: %d", resp.StatusCode)
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
func ValidateWechatConfig(payConfig string) (model.WechatPayConfig, error) {
	var wechatConfig model.WechatPayConfig
	if err := json.Unmarshal([]byte(payConfig), &wechatConfig); err != nil {
		return wechatConfig, err
	}

	// Validate required fields
	if wechatConfig.AppID == "" || wechatConfig.MchID == "" || wechatConfig.APIv3Key == "" || wechatConfig.SerialNo == "" {
		return wechatConfig, fmt.Errorf("missing required WeChat payment configuration (AppID, MchID, APIv3Key, SerialNo)")
	}

	// Check if we need to process certificate and private key files
	if wechatConfig.UseEncryptedConfig {
		// Configuration already contains encrypted data
		if wechatConfig.PrivateKey == "" {
			return wechatConfig, fmt.Errorf("encrypted private key is required when using encrypted configuration")
		}
	} else {
		// Need to read and encrypt files
		if wechatConfig.PrivateKeyPath == "" {
			return wechatConfig, fmt.Errorf("private key path is required")
		}

		// Load and encrypt private key
		privateKeyBytes, err := loadFileFromPathOrURL(wechatConfig.PrivateKeyPath)
		if err != nil {
			return wechatConfig, fmt.Errorf("failed to read private key file: %v", err)
		}

		// Encrypt private key content
		encryptedPrivateKey, err := encryptSensitiveData(string(privateKeyBytes))
		if err != nil {
			return wechatConfig, fmt.Errorf("failed to encrypt private key: %v", err)
		}

		// Save encrypted private key content and original file path
		wechatConfig.PrivateKey = encryptedPrivateKey
		// Keep original file path unchanged

		// Read and encrypt platform certificate (if provided)
		if wechatConfig.PlatformCertPath != "" {
			platformCertBytes, err := loadFileFromPathOrURL(wechatConfig.PlatformCertPath)
			if err != nil {
				return wechatConfig, fmt.Errorf("failed to read platform certificate file: %v", err)
			}

			encryptedPlatformCert, err := encryptSensitiveData(string(platformCertBytes))
			if err != nil {
				return wechatConfig, fmt.Errorf("failed to encrypt platform certificate: %v", err)
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

	// Create nonceprocessWechatConfig
	nonce := make([]byte, gcm.NonceSize())
	if _, err := io.ReadFull(rand.Reader, nonce); err != nil {
		return "", err
	}

	// Encrypt data
	ciphertext := gcm.Seal(nonce, nonce, []byte(data), nil)

	// Return base64 encoded encrypted data
	return base64.StdEncoding.EncodeToString(ciphertext), nil
}

// Initialize WeChat client
func InitWechatClient(wechatConfig model.WechatPayConfig) (*wechat.ClientV3, error) {
	// Decrypt private key if using encrypted configuration
	var privateKey string
	var err error

	if wechatConfig.UseEncryptedConfig {
		privateKey, err = decryptSensitiveData(wechatConfig.PrivateKey)
		if err != nil {
			return nil, fmt.Errorf("failed to decrypt private key: %v", err)
		}
	} else {
		// This should not happen with the new implementation
		return nil, fmt.Errorf("configuration is not encrypted")
	}

	// Initialize WeChat client
	client, err := wechat.NewClientV3(wechatConfig.MchID, wechatConfig.SerialNo, wechatConfig.APIv3Key, privateKey)
	if err != nil {
		return nil, err
	}

	// Enable debug mode
	if config.DebugEnabled {
		client.DebugSwitch = gopay.DebugOn
	}

	// Auto verify signature (if platform certificate exists)
	if wechatConfig.PlatformCert != "" && wechatConfig.PlatformSerialNo != "" {
		// Decrypt platform certificate
		platformCert, err := decryptSensitiveData(wechatConfig.PlatformCert)
		if err != nil {
			xlog.Error("failed to decrypt platform certificate:", err)
			// Continue execution, don't return error
		} else {
			err = client.AutoVerifySignByPublicKey([]byte(platformCert), wechatConfig.PlatformSerialNo)
			if err != nil {
				xlog.Error("auto verify sign error:", err)
				// Continue execution, don't return error
			}
		}
	}

	return client, nil
}

func buildWechatPaymentBodyMap(wechatConfig model.WechatPayConfig, order *model.Order) (gopay.BodyMap, error) {
	bm := make(gopay.BodyMap)
	bm.Set("appid", wechatConfig.AppID)
	bm.Set("mchid", wechatConfig.MchID)

	siteName, err := model.GetEnterpriseName(order.Eid)
	if err != nil || siteName == "" {
		siteName = "53AIHub"
	}
	bm.Set("description", fmt.Sprintf("%s - %s %d%s", siteName, order.SubscriptionName, order.Duration, order.TimeUnit))
	bm.Set("out_trade_no", order.OrderId)

	notifyURL := formatNotifyURL(wechatConfig.NotifyURL, config.ApiHost, order.Eid, model.PayTypeWechat)
	xlog.Info("notifyURL:", notifyURL)
	bm.Set("notify_url", notifyURL)

	amountBM := make(gopay.BodyMap)
	amountBM.Set("total", int64(order.Amount))

	amountBM.Set("currency", order.Currency)

	bm.Set("amount", amountBM)

	return bm, nil
}
