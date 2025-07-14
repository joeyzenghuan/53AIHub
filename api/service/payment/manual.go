package payment

import "github.com/53AI/53AIHub/model"

type ManualService struct{}

// CreateOrder 创建手动支付订单
func (m *ManualService) CreateOrder(req *PaymentRequest) (interface{}, error) {
	// 实现手动支付创建订单逻辑
	return "", nil
}

// CloseOrder 关闭手动支付订单
func (m *ManualService) CloseOrder(order *model.Order, paySetting *model.PaySetting) (string, error) {
	// 实现手动支付取消订单逻辑
	return "", nil
}

// Refund 手动支付退款
func (m *ManualService) Refund(order *model.Order, paySetting *model.PaySetting) (any, error) {
	// 实现手动支付退款逻辑
	return "", nil
}

// QueryPaymentStatus 查询手动支付状态
func (m *ManualService) QueryPaymentStatus(order *model.Order, paySetting *model.PaySetting) (any, error) {
	// 实现手动支付状态查询逻辑
	return "", nil
}
