package payment

import (
	"context"
	"crypto"
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"time"

	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/go-pay/crypto/xpem"
	"github.com/go-pay/crypto/xrsa"
	"github.com/go-pay/gopay"
	alipayV2 "github.com/go-pay/gopay/alipay"
	"github.com/go-pay/gopay/alipay/v3"
	"github.com/go-pay/xlog"
)

// AlipayService 支付宝支付实现
type AlipayService struct{}

func getAlipayConfig(paySetting *model.PaySetting) (*model.AlipayConfig, error) {
	var alipayConfig model.AlipayConfig
	if err := json.Unmarshal([]byte(paySetting.PayConfig), &alipayConfig); err != nil {
		return nil, fmt.Errorf("alipay config parse error: %v", err)
	}

	if alipayConfig.AppID == "" || alipayConfig.PrivateKey == "" || alipayConfig.AlipayPublicKey == "" {
		return nil, fmt.Errorf("missing required alipay configuration")
	}
	return &alipayConfig, nil
}

// CreateOrder 创建支付宝订单
func (a *AlipayService) CreateOrder(req *PaymentRequest) (interface{}, error) {
	order := req.Order
	alipayConfig, err := getAlipayConfig(req.PaySetting)
	if err != nil {
		return "", err
	}

	client, err := alipay.NewClientV3(alipayConfig.AppID, alipayConfig.PrivateKey, true)
	if err != nil {
		xlog.Error(err)
		return "", fmt.Errorf("create alipay client failed: %v", err)
	}

	// 构建支付请求参数
	bm := gopay.BodyMap{}
	bm.Set("out_trade_no", order.OrderId)
	bm.Set("total_amount", fmt.Sprintf("%.2f", float64(order.Amount)/100.0))
	siteName, err := model.GetEnterpriseName(order.Eid)
	if err != nil || siteName == "" {
		siteName = "53AIHub"
	}
	bm.Set("subject", fmt.Sprintf("%s - %s %d%s", siteName, order.SubscriptionName, order.Duration, order.TimeUnit))
	bm.Set("product_code", "FAST_INSTANT_TRADE_PAY")
	NotifyUrl := formatNotifyURL(alipayConfig.NotifyUrl, config.ApiHost, order.Eid, model.PayTypeAlipay)
	bm.Set("notify_url", NotifyUrl)

	if req.ReturnURL != "" {
		bm.Set("return_url", req.ReturnURL)
	}

	payUrl, err := createTradePagePayURL(client, bm, alipayConfig.PrivateKey)
	if err != nil {
		xlog.Error(err)
		return "", fmt.Errorf("create alipay trade page pay url failed: %v", err)
	}
	return &model.AlipayConfig{ReturnUrl: payUrl}, nil
}

// CloseOrder 关闭支付宝订单
func (a *AlipayService) CloseOrder(order *model.Order, paySetting *model.PaySetting) (string, error) {
	alipayConfig, err := getAlipayConfig(paySetting)
	if err != nil {
		return "", err
	}

	client, err := alipayV2.NewClient(alipayConfig.AppID, alipayConfig.PrivateKey, true)
	if err != nil {
		xlog.Error(err)
		return "", fmt.Errorf("create alipay client failed: %v", err)
	}
	client.SetCharset("utf-8").
		SetSignType(alipayV2.RSA2)

	bm := make(gopay.BodyMap)
	bm.Set("out_trade_no", order.OrderId)

	aliRsp, err := client.TradeClose(context.Background(), bm)
	if err != nil {
		xlog.Error("err:", err)
		// code == 40004 && sub_code == ACQ.TRADE_NOT_EXIST 则返回 "", nil
		if aliRsp.Response.Code == "40004" && (aliRsp.Response.SubCode == "ACQ.TRADE_NOT_EXIST" || aliRsp.Response.SubCode == "ACQ.TRADE_STATUS_ERROR") {
			return "", nil
		}
		return "", fmt.Errorf("alipay trade close failed: %v", err)
	}

	if aliRsp.Response.Code != "10000" {
		return "", fmt.Errorf("alipay close order failed: %s, sub_msg: %s", aliRsp.Response.Code, aliRsp.Response.SubMsg)
	}
	return aliRsp.Response.TradeNo, nil
}

// Refund 支付宝退款
func (a *AlipayService) Refund(order *model.Order, paySetting *model.PaySetting) (any, error) {
	alipayConfig, err := getAlipayConfig(paySetting)
	if err != nil {
		return "", err
	}

	client, err := alipayV2.NewClient(alipayConfig.AppID, alipayConfig.PrivateKey, true)
	if err != nil {
		return nil, fmt.Errorf("create alipay client failed: %v", err)
	}
	client.SetCharset("utf-8").
		SetSignType(alipayV2.RSA2)

	//请求参数
	bm := make(gopay.BodyMap)
	bm.Set("out_trade_no", order.OrderId).
		Set("refund_amount", fmt.Sprintf("%.2f", float64(order.Amount)/100.0)).
		Set("refund_reason", "测试退款")

	aliRsp, err := client.TradeRefund(context.Background(), bm)
	if err != nil {
		return nil, fmt.Errorf("alipay trade refund failed: %v", err)
	}
	return aliRsp, nil
}

// QueryPaymentStatus 查询支付宝支付状态
func (a *AlipayService) QueryPaymentStatus(order *model.Order, paySetting *model.PaySetting) (any, error) {
	alipayConfig, err := getAlipayConfig(paySetting)
	if err != nil {
		return "", err
	}

	// 查询订单
	client, err := alipayV2.NewClient(alipayConfig.AppID, alipayConfig.PrivateKey, true)
	if err != nil {
		return nil, fmt.Errorf("create alipay client failed: %v", err)
	}
	client.SetCharset("utf-8").
		SetSignType(alipayV2.RSA2)

	//请求参数
	bm := make(gopay.BodyMap)
	bm.Set("out_trade_no", order.OrderId)

	aliRsp, err := client.TradeQuery(context.Background(), bm)
	if err != nil {
		return nil, fmt.Errorf("alipay trade query failed: %v", err)
	}
	return aliRsp, nil
}

func createTradePagePayURL(client *alipay.ClientV3, bm gopay.BodyMap, privateKey string) (string, error) {
	// 构建公共请求参数
	pubParams := gopay.BodyMap{}
	pubParams.Set("app_id", client.AppId)
	pubParams.Set("method", "alipay.trade.page.pay")
	pubParams.Set("format", "JSON")
	pubParams.Set("charset", "utf-8")
	pubParams.Set("sign_type", "RSA2")
	pubParams.Set("version", "1.0")
	pubParams.Set("timestamp", time.Now().Format("2006-01-02 15:04:05"))
	pubParams.Set("biz_content", bm.JsonBody())

	if returnUrl := bm.GetString("return_url"); returnUrl != gopay.NULL {
		pubParams.Set("return_url", returnUrl)
	}
	if notifyUrl := bm.GetString("notify_url"); notifyUrl != gopay.NULL {
		pubParams.Set("notify_url", notifyUrl)
	}

	key := xrsa.FormatAlipayPrivateKey(privateKey)
	priKey, err := xpem.DecodePrivateKey([]byte(key))
	if err != nil {
		return "", fmt.Errorf("生成签名失败: %w", err)
	}
	sign, err := rsaSign(pubParams.EncodeAliPaySignParams(), priKey)
	if err != nil {
		return "", fmt.Errorf("生成签名失败: %w", err)
	}
	pubParams.Set("sign", sign)

	gateway := "https://openapi.alipay.com/gateway.do"
	if !client.IsProd {
		gateway = "https://openapi-sandbox.dl.alipaydev.com/gateway.do"
	}
	return gateway + "?" + pubParams.EncodeURLParams(), nil
}

// 使用RSA私钥对数据进行签名
func rsaSign(data string, privateKey *rsa.PrivateKey) (string, error) {
	h := sha256.New()
	h.Write([]byte(data))
	result, err := rsa.SignPKCS1v15(rand.Reader, privateKey, crypto.SHA256, h.Sum(nil))
	if err != nil {
		return gopay.NULL, fmt.Errorf("[%w]: %+v", gopay.SignatureErr, err)
	}

	return base64.StdEncoding.EncodeToString(result), nil
}
