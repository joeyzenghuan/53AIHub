package payment

import (
	"fmt"
	"strings"

	"github.com/53AI/53AIHub/model"
)

// PaymentRequest 统一支付请求参数
type PaymentRequest struct {
	Order      *model.Order      // 订单信息
	PaySetting *model.PaySetting // 支付配置
	OpenID     string            // 微信支付OpenID(JSAPI支付需要)
	ReturnURL  string            // 支付完成返回URL
	NotifyURL  string            // 支付结果通知URL
	PayMethod  string            // 支付方式(可选)
}

// PaymentInterface 定义支付方式的统一接口
type PaymentInterface interface {
	// 创建支付订单
	CreateOrder(req *PaymentRequest) (interface{}, error)
	// 关闭支付订单
	CloseOrder(order *model.Order, paySetting *model.PaySetting) (string, error)
	// 退款
	Refund(order *model.Order, paySetting *model.PaySetting) (any, error)
	// 查询支付状态
	QueryPaymentStatus(order *model.Order, paySetting *model.PaySetting) (any, error)
}

// PaymentFactory 支付方式工厂
type PaymentFactory struct{}

// NewPayment 根据支付类型创建对应的支付实例
func (f *PaymentFactory) NewPayment(payType int) (PaymentInterface, error) {
	switch payType {
	case model.PayTypeAlipay:
		return &AlipayService{}, nil
	case model.PayTypeWechat:
		return &WechatService{}, nil
	case model.PayTypePaypal:
		return &PaypalService{}, nil
	case model.PayTypeManual:
		return &ManualService{}, nil
	default:
		return nil, fmt.Errorf("unsupported payment type: %d", payType)
	}
}

func formatNotifyURL(configURL string, apiHost string, eid int64, payType int) string {
	if configURL == "" {
		if !strings.HasSuffix(apiHost, "/") {
			apiHost = apiHost + "/"
		}
		if payType == model.PayTypeAlipay {
			return fmt.Sprintf("%sapi/payment/alipay/notify/%d", apiHost, eid)
		} else {
			return fmt.Sprintf("%sapi/payment/wechat/notify/%d", apiHost, eid)
		}
	} else if !strings.HasPrefix(configURL, "http://") && !strings.HasPrefix(configURL, "https://") {
		if !strings.HasSuffix(apiHost, "/") {
			apiHost = apiHost + "/"
		}
		if strings.HasPrefix(configURL, "/") {
			configURL = configURL[1:]
		}
		return apiHost + configURL
	}
	return configURL
}
