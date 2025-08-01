package controller

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"
	"sync"
	"time"

	"github.com/53AI/53AIHub/common"
	"github.com/53AI/53AIHub/common/utils"
	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/53AI/53AIHub/service/payment"
	"github.com/53AI/53AIHub/tasks"
	"github.com/gin-gonic/gin"
	alipayV2 "github.com/go-pay/gopay/alipay"
	"github.com/go-pay/gopay/wechat/v3"
	"github.com/go-pay/xlog"
)

// WechatNotifyResponse represents the response for WeChat payment notification
type WechatNotifyResponse struct {
	Code    string `json:"code" example:"SUCCESS"`
	Message string `json:"message" example:"SUCCESS"`
}

// CreateOrderRequest represents the request for creating a new order
type CreateOrderRequest struct {
	SubscriptionID   int64  `json:"subscription_id" form:"subscription_id" binding:"required" example:"1"`                // group_id
	SubscriptionName string `json:"subscription_name" form:"subscription_name" binding:"required" example:"Professional"` // group_name
	Duration         int    `json:"duration" form:"duration" binding:"required" example:"12"`                             // Duration in months
	TimeUnit         string `json:"time_unit" form:"time_unit" binding:"required" example:"month"`                        // Time unit for subscription duration
	Amount           int64  `json:"amount" form:"amount" binding:"required" example:"29900"`                              // Amount in cents
	Currency         string `json:"currency" form:"currency" binding:"required" example:"CNY"`                            // Currency type
	PayType          int    `json:"pay_type" form:"pay_type" binding:"required" example:"1"`                              // 1: WeChat, 2: Manual, 3: PayPal, 4: Alipay
	OrderId          string `json:"order_id" form:"order_id"`                                                             // 订单ID存在则使用旧订单发起支付
	UserID           int64  `json:"user_id" form:"user_id" binding:"required" example:"1"`                                // User ID
	Nickname         string `json:"nickname" form:"nickname" binding:"required" example:"nickname"`                       // User nickname
	ReturnUrl        string `json:"return_url" form:"return_url"`                                                         // Return URL for alipay
}

// OrderResponse represents the response for order operations
type OrderResponse struct {
	Order       *model.Order `json:"order"`
	PaymentInfo interface{}  `json:"payment_info,omitempty"` // Payment-specific information
}

// PayOrderRequest represents the request for paying an order
type PayOrderRequest struct {
	PayType   int    `json:"pay_type" binding:"required" example:"1"`        // Payment type (1: WeChat, 2: Manual, 3: PayPal)
	PayMethod string `json:"pay_method" binding:"required" example:"native"` // Payment method (e.g., "native", "jsapi")
	OpenID    string `json:"openid" example:""`                              // OpenID for JSAPI payment (optional)
}

// PayOrderResponse represents the response for paying an order
type PayOrderResponse struct {
	PaymentInfo interface{}  `json:"payment_info"` // Payment-specific information
	Order       *model.Order `json:"order"`        // Updated order information
}

var orderMutex = &sync.Mutex{}

// CreateOrder creates a new order
// @Summary Create order
// @Description Create a new order for service subscription
// @Tags Order
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param order body CreateOrderRequest true "Order information"
// @Success 200 {object} model.CommonResponse{data=OrderResponse}
// @Router /api/orders [post]
func CreateOrder(c *gin.Context) {
	var req CreateOrderRequest
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

	// Get payment setting
	paySetting, err := model.GetPaySettingByType(eid, req.PayType)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Payment method not configured"))
		return
	}

	if paySetting.PayStatus != model.PayStatusEnabled {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Payment method is disabled"))
		return
	}

	order := getOrder(c, eid, req, paySetting)

	factory := &payment.PaymentFactory{}
	newPayment, err := factory.NewPayment(req.PayType)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}
	paymentReq := &payment.PaymentRequest{
		Order:      order,
		PaySetting: paySetting,
		OpenID:     c.Query("openid"),
		ReturnURL:  req.ReturnUrl,
		PayMethod:  c.Query("pay_method"),
	}
	paymentInfo, processErr := newPayment.CreateOrder(paymentReq)

	if processErr != nil {
		c.JSON(http.StatusInternalServerError, model.SystemError.ToResponse(processErr))
		return
	}

	if req.OrderId == "" {
		if err := order.Create(); err != nil {
			c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
			return
		}
	}

	if order.Status == model.OrderStatusPending && order.ExpiredTime > 0 {
		if err := tasks.AddOrderToExpirationQueue(order.Eid, order.OrderId, order.ExpiredTime); err != nil {
			xlog.Error("Failed to add order to expiration queue:", err)
		}
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(&OrderResponse{
		Order:       order,
		PaymentInfo: paymentInfo,
	}))
}

func getOrder(c *gin.Context, eid int64, req CreateOrderRequest, paySetting *model.PaySetting) *model.Order {
	order := &model.Order{}
	if req.PayType == model.PayTypeAlipay && req.OrderId != "" {
		order, _ = model.GetOrderByOrderId(eid, req.OrderId)
		if order == nil {
			c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(model.OrderNotFound))
			return nil
		}
		if order.PayType != model.PayTypeAlipay {
			c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Order is not an Alipay order"))
			return nil
		}
		if order.Status != model.OrderStatusPending {
			c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Order is not pending"))
			return nil
		}
	} else {
		orderId := utils.GenerateOrderId()

		orderStatus := model.OrderStatusPending
		if req.PayType == model.PayTypeManual {
			orderStatus = model.OrderStatusConfirming
		}

		// Create order object (but don't save to database yet)
		order = &model.Order{
			OrderId:          orderId,
			Eid:              eid,
			UserID:           req.UserID,
			Nickname:         req.Nickname,
			ServiceID:        req.SubscriptionID,
			ServiceType:      model.ServiceTypeSubscription,
			SubscriptionName: req.SubscriptionName,
			Duration:         req.Duration,
			TimeUnit:         req.TimeUnit,
			Amount:           req.Amount,
			Currency:         req.Currency,
			PayType:          req.PayType,
			Status:           orderStatus,
			ExpiredTime:      time.Now().Add(2 * time.Hour).UnixMilli(),
		}
	}
	return order
}

// Cache order data
// func cacheOrderData(order *model.Order) {
// 	orderData, _ := json.Marshal(order)
// 	common.RedisSet(order.OrderId, string(orderData), 2*time.Hour)
// }

// Get cached order data
func getCachedOrder(orderId string) (*model.Order, bool) {
	data, err := common.RedisGet(orderId)
	if err != nil || data == "" {
		return nil, false
	}

	var order model.Order
	err = json.Unmarshal([]byte(data), &order)
	if err != nil {
		return nil, false
	}

	return &order, true
}

// Remove cached order data
func removeCachedOrder(orderId string) {
	common.RedisDel(orderId)
}

// createOrUpdateOrderFromCache creates a new order from cache or updates an existing one
func createOrUpdateOrderFromCache(eid int64, orderId string, status int, transactionId string) (*model.Order, error) {
	// Lock to prevent concurrent operations
	orderMutex.Lock()
	defer orderMutex.Unlock()

	// Check if order exists in database
	dbOrder, err := model.GetOrderByOrderId(eid, orderId)
	if err != nil {
		// Order not found in database, check cache
		cachedOrder, found := getCachedOrder(orderId)
		if !found {
			return nil, fmt.Errorf("order not found in database or cache: %s", orderId)
		}

		xlog.Info("Order found in cache:", orderId)
		// Create order from cached data
		cachedOrder.Status = status
		if transactionId != "" {
			cachedOrder.TransactionId = transactionId
		}

		if status == model.OrderStatusPaid {
			cachedOrder.PayTime = time.Now().UTC().UnixMilli()
		}

		if err = cachedOrder.Create(); err != nil {
			return nil, fmt.Errorf("create order from cache error: %v", err)
		}
		xlog.Info("Successfully created order from cache with status:", status)

		// Remove from cache
		removeCachedOrder(orderId)
		xlog.Info("Removed order from cache")

		return cachedOrder, nil
	}

	// Order exists, update status
	if status == model.OrderStatusPaid {
		err = model.UpdateOrderPaid(eid, orderId, transactionId)
		dbOrder.Status = model.OrderStatusPaid
		dbOrder.TransactionId = transactionId
		dbOrder.PayTime = time.Now().UTC().UnixMilli()
	} else {
		err = model.UpdateOrderStatus(eid, orderId, status)
		dbOrder.Status = status
	}

	if err != nil {
		return nil, fmt.Errorf("update order status error: %v", err)
	}
	xlog.Info("Successfully updated order status to:", status)

	// Remove from cache if exists
	removeCachedOrder(orderId)
	xlog.Info("Attempted to remove order from cache")

	return dbOrder, nil
}

func createOrUpdateOrderFromCacheWithTime(eid int64, orderId string, status int, transactionId string, payTime int64) (*model.Order, error) {
	// Lock to prevent concurrent operations
	orderMutex.Lock()
	defer orderMutex.Unlock()

	// Check if order exists in database
	dbOrder, err := model.GetOrderByOrderId(eid, orderId)
	if err != nil {
		// Order not found in database, check cache
		cachedOrder, found := getCachedOrder(orderId)
		if !found {
			return nil, fmt.Errorf("order not found in database or cache: %s", orderId)
		}

		xlog.Info("Order found in cache:", orderId)
		// Create order from cached data
		cachedOrder.Status = status
		if transactionId != "" {
			cachedOrder.TransactionId = transactionId
		}

		if status == model.OrderStatusPaid && payTime > 0 {
			cachedOrder.PayTime = payTime
			xlog.Info("Setting payment time from WeChat:", time.UnixMilli(payTime).Format(time.RFC3339))
		} else if status == model.OrderStatusPaid {
			cachedOrder.PayTime = time.Now().UTC().UnixMilli()
		}

		if err = cachedOrder.Create(); err != nil {
			return nil, fmt.Errorf("create order from cache error: %v", err)
		}
		xlog.Info("Successfully created order from cache with status:", status)

		// Remove from cache
		removeCachedOrder(orderId)
		xlog.Info("Removed order from cache")

		return cachedOrder, nil
	}

	// Order exists, update status
	if status == model.OrderStatusPaid {
		if payTime > 0 {
			err = model.UpdateOrderPaidWithTime(eid, orderId, transactionId, payTime)
			dbOrder.PayTime = payTime
		} else {
			err = model.UpdateOrderPaid(eid, orderId, transactionId)
			dbOrder.PayTime = time.Now().UTC().UnixMilli()
		}
		dbOrder.Status = model.OrderStatusPaid
		dbOrder.TransactionId = transactionId
	} else {
		err = model.UpdateOrderStatus(eid, orderId, status)
		dbOrder.Status = status
	}

	if err != nil {
		return nil, fmt.Errorf("update order status error: %v", err)
	}
	xlog.Info("Successfully updated order status to:", status)

	// Remove from cache if exists
	removeCachedOrder(orderId)
	xlog.Info("Attempted to remove order from cache")

	return dbOrder, nil
}

// AlipayNotify handles Alipay payment notification callbacks
// It processes payment result notifications sent by Alipay after a payment is completed
// The function verifies the notification, parses the data, and updates the order status accordingly
// @Summary Process Alipay payment notification
// @Description Handle payment notification callbacks from Alipay
// @Tags Payment
// @Accept json
// @Produce json
// @Param id path int true "Enterprise ID"
// @Success 200 {string} string "success"
// @Failure 400 {string} string "Bad Request"
// @Failure 500 {string} string "Internal Server Error"
// @Router /api/payment/alipay/notify/{id} [post]
func AlipayNotify(c *gin.Context) {
	// Log request basic information
	xlog.Info("Received Alipay payment notification - Time:", time.Now().Format("2006-01-02 15:04:05"))
	xlog.Info("Request IP:", c.ClientIP())

	// Get enterprise ID
	notifyID := c.Param("id")
	eid, err := strconv.ParseInt(notifyID, 10, 64)
	if err != nil {
		xlog.Error("Invalid notification ID:", err)
		c.String(http.StatusBadRequest, "fail")
		return
	}

	// Get Alipay payment settings
	paySetting, err := model.GetPaySettingByType(eid, model.PayTypeAlipay)
	if err != nil {
		xlog.Error("Payment setting not found:", err)
		c.String(http.StatusBadRequest, "fail")
		return
	}

	// Parse Alipay configuration
	var alipayConfig model.AlipayConfig
	if err = json.Unmarshal([]byte(paySetting.PayConfig), &alipayConfig); err != nil {
		xlog.Error("Parse payment config error:", err)
		c.String(http.StatusInternalServerError, "fail")
		return
	}

	notifyReq, err := alipayV2.ParseNotifyToBodyMap(c.Request)
	notifyReqJson, _ := json.Marshal(notifyReq)
	xlog.Info("Parsed notification:", string(notifyReqJson))
	if err != nil {
		xlog.Error("Parse notification error:", err)
		c.String(http.StatusBadRequest, "fail")
		return
	}

	var ok bool
	ok, err = alipayV2.VerifySign(alipayConfig.AlipayPublicKey, notifyReq)

	if err != nil || !ok {
		xlog.Error("Signature verification failed:", err)
		c.String(http.StatusBadRequest, "fail")
		return
	}

	// Check trade status
	tradeStatus := notifyReq.Get("trade_status")
	if tradeStatus != "TRADE_SUCCESS" {
		xlog.Errorf("Trade state not success: %s", tradeStatus)
		c.String(http.StatusOK, "success")
		return
	}

	// Get order information
	orderId := notifyReq.Get("out_trade_no")
	transactionId := notifyReq.Get("trade_no")
	successTime := notifyReq.Get("gmt_payment")

	// Parse payment time
	var payTime int64
	if successTime != "" {
		layout := "2006-01-02 15:04:05"
		t, err := time.Parse(layout, successTime)
		if err != nil {
			xlog.Error("Failed to parse success time:", err)
			payTime = time.Now().UTC().UnixMilli()
		} else {
			payTime = t.UnixMilli()
		}
	} else {
		payTime = time.Now().UTC().UnixMilli()
	}

	_, err = createOrUpdateOrderFromCacheWithTime(eid, orderId, model.OrderStatusPaid, transactionId, payTime)
	if err != nil {
		xlog.Error("Update order status error:", err)
		c.String(http.StatusInternalServerError, "fail")
		return
	}

	// Return success response as required by Alipay
	c.String(http.StatusOK, "success")
}

// WechatPayNotify handles WeChat payment notification callbacks
// It processes payment result notifications sent by WeChat Pay after a payment is completed
// The function verifies the notification, decrypts the data, and updates the order status accordingly
// @Summary Process WeChat payment notification
// @Description Handle payment notification callbacks from WeChat Pay
// @Tags Payment
// @Accept json
// @Produce json
// @Param id path int true "Enterprise ID"
// @Success 200 {object} WechatNotifyResponse
// @Failure 400 {string} string "Bad Request"
// @Failure 500 {string} string "Internal Server Error"
// @Router /api/payment/wechat/notify/{id} [post]
func WechatPayNotify(c *gin.Context) {
	// Log request basic information
	xlog.Info("Received WeChat payment notification - Time:", time.Now().Format("2006-01-02 15:04:05"))
	xlog.Info("Request IP:", c.ClientIP())

	// Log request headers
	headers := make(map[string]string)
	for k, v := range c.Request.Header {
		if len(v) > 0 {
			headers[k] = v[0]
			xlog.Info("Request header:", k, "=", v[0])
		}
	}

	// Read and log request body - Ensure safe reading of request body
	var bodyBytes []byte
	if c.Request.Body != nil {
		// Save original request body
		bodyBytes, _ = io.ReadAll(c.Request.Body)
		// Reset request body for subsequent processing
		c.Request.Body = io.NopCloser(bytes.NewBuffer(bodyBytes))

		// Log original request body
		xlog.Info("Request raw body:", string(bodyBytes))
	}

	// Reset request body again for subsequent parsing
	if len(bodyBytes) > 0 {
		c.Request.Body = io.NopCloser(bytes.NewBuffer(bodyBytes))
	}

	// Get enterprise ID
	notifyID := c.Param("id")
	eid, err := strconv.ParseInt(notifyID, 10, 64)
	if err != nil {
		xlog.Error("Invalid notification ID:", err)
		c.String(http.StatusBadRequest, "Invalid notification ID")
		return
	}

	// Get WeChat payment settings
	paySetting, err := model.GetPaySettingByType(eid, model.PayTypeWechat)
	if err != nil {
		xlog.Error("Payment setting not found:", err)
		c.String(http.StatusBadRequest, "Payment setting not found")
		return
	}

	// Parse WeChat configuration
	var wechatConfig model.WechatPayConfig
	if err = json.Unmarshal([]byte(paySetting.PayConfig), &wechatConfig); err != nil {
		xlog.Error("Parse payment config error:", err)
		c.String(http.StatusInternalServerError, "Failed to parse payment configuration")
		return
	}

	// 添加详细的配置信息日志（隐藏敏感信息）
	xlog.Info("WeChat Pay Config Debug Info:")
	xlog.Info("- AppID length:", len(wechatConfig.AppID))
	xlog.Info("- MchID:", wechatConfig.MchID)
	xlog.Info("- SerialNo:", wechatConfig.SerialNo)
	xlog.Info("- APIv3Key length:", len(wechatConfig.APIv3Key))
	xlog.Info("- PrivateKeyPath:", wechatConfig.PrivateKeyPath)
	xlog.Info("- NotifyURL:", wechatConfig.NotifyURL)
	xlog.Info("- UseEncryptedConfig:", wechatConfig.UseEncryptedConfig)

	// 检查关键配置是否完整
	if wechatConfig.AppID == "" {
		xlog.Error("AppID is empty in payment configuration")
		c.String(http.StatusInternalServerError, "Payment configuration error: missing AppID")
		return
	}

	if wechatConfig.MchID == "" {
		xlog.Error("MchID is empty in payment configuration")
		c.String(http.StatusInternalServerError, "Payment configuration error: missing MchID")
		return
	}

	// 检查APIv3Key是否正确加载
	if wechatConfig.APIv3Key == "" {
		xlog.Error("APIv3Key is empty in payment configuration")
		c.String(http.StatusInternalServerError, "Payment configuration error: missing APIv3Key")
		return
	}

	// 检查APIv3Key长度是否符合要求（应该为32位）
	if len(wechatConfig.APIv3Key) != 32 {
		xlog.Error("APIv3Key length is invalid, expected 32, got:", len(wechatConfig.APIv3Key))
		xlog.Error("APIv3Key content (first 4 and last 4 chars):", wechatConfig.APIv3Key[:4], "...", wechatConfig.APIv3Key[len(wechatConfig.APIv3Key)-4:])
		c.String(http.StatusInternalServerError, fmt.Sprintf("Payment configuration error: invalid APIv3Key length, expected 32, got %d", len(wechatConfig.APIv3Key)))
		return
	}

	// Initialize WeChat client
	_, err = payment.InitWechatClient(wechatConfig)
	if err != nil {
		xlog.Error("Initialize WeChat client error:", err)
		c.String(http.StatusInternalServerError, "Failed to initialize payment client: "+err.Error())
		return
	}

	// Parse notification parameters
	notifyReq, err := wechat.V3ParseNotify(c.Request)
	if err != nil {
		xlog.Error("Parse notification error:", err)
		// Log detailed error information
		xlog.Error("Parse notification detailed error:", err.Error())
		c.String(http.StatusBadRequest, "Failed to parse notification")
		return
	}

	// Log parsed notification request data
	notifyReqJSON, _ := json.MarshalIndent(notifyReq, "", "  ")
	xlog.Info("Parsed notification request data:", string(notifyReqJSON))

	// Decrypt payment notification
	// result, err := notifyReq.DecryptPayCipherText(wechatConfig.APIv3Key)
	// 通用通知解密（推荐此方法）
	var result wechat.V3DecryptPayResult
	err = notifyReq.DecryptCipherTextToStruct(wechatConfig.APIv3Key, &result)
	if err != nil {
		xlog.Error("Decrypt notification data error:", err)
		// Log detailed error information
		xlog.Error("Decrypt notification detailed error:", err.Error())
		c.String(http.StatusBadRequest, "Failed to decrypt notification data")
		return
	}

	// Process successful payment notification
	if result.TradeState == "SUCCESS" {
		// Get order number
		orderId := result.OutTradeNo
		transactionId := result.TransactionId

		var payTime int64
		if result.SuccessTime != "" {
			successTime, err := time.Parse(time.RFC3339, result.SuccessTime)
			if err != nil {
				xlog.Error("Failed to parse success time:", err)
				payTime = time.Now().UTC().UnixMilli()
			} else {
				payTime = successTime.UnixMilli()
				xlog.Info("Using payment success time from WeChat:", result.SuccessTime)
			}
		} else {
			payTime = time.Now().UTC().UnixMilli()
			xlog.Info("No success time provided, using current time")
		}

		// Lock to prevent concurrent operations
		orderMutex.Lock()
		defer orderMutex.Unlock()

		// Check if order exists in database
		_, err := model.GetOrderByOrderId(eid, orderId)
		if err != nil {
			// Order not found in database, check cache
			cachedOrder, found := getCachedOrder(orderId)
			if found {
				// Create order from cached data
				cachedOrder.Status = model.OrderStatusPaid
				cachedOrder.TransactionId = transactionId
				cachedOrder.PayTime = payTime

				if err = cachedOrder.Create(); err != nil {
					xlog.Error("Create order from cache error:", err)
					c.String(http.StatusInternalServerError, "Failed to create order")
					return
				}

				// Remove from cache
				removeCachedOrder(orderId)
			} else {
				xlog.Error("Order not found in database or cache:", orderId)
				c.String(http.StatusBadRequest, "Order not found")
				return
			}
		} else {
			// Order exists, update status
			err = model.UpdateOrderPaidWithTime(eid, orderId, transactionId, payTime)
			if err != nil {
				xlog.Error("Update order status error:", err)
				c.String(http.StatusInternalServerError, "Failed to update order")
				return
			}

			// Remove from cache if exists
			removeCachedOrder(orderId)
		}

		// Return success response
		c.JSON(http.StatusOK, &WechatNotifyResponse{
			Code:    "SUCCESS",
			Message: "SUCCESS",
		})
	} else {
		xlog.Errorf("Trade state not success: %s", result.TradeState)
		c.String(http.StatusBadRequest, "Trade state not success")
	}
}

// QueryOrderStatus queries the status of an order
// @Summary Query order status
// @Description Query the status of an order
// @Tags Order
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param order_id path string true "Order ID"
// @Success 200 {object} model.CommonResponse{data=OrderStatusResponse}
// @Router /api/orders/status/{order_id} [get]
// QueryOrderStatus queries the status of an order
func QueryOrderStatus(c *gin.Context) {
	orderId := c.Param("order_id")
	if orderId == "" {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Order ID is required"))
		return
	}

	eid := config.GetEID(c)

	// Try to get order from database
	order, err := model.GetOrderByOrderId(eid, orderId)
	if err != nil {
		// Order not found in database, check cache
		cachedOrder, found := getCachedOrder(orderId)
		if !found {
			c.JSON(http.StatusNotFound, model.NotFound.ToNewErrorResponse(model.OrderNotFound))
			return
		}

		// Use cached order
		order = cachedOrder
	}

	// Initialize response structure
	response := &OrderStatusResponse{
		Order:              order,
		OriginalStatus:     "",
		OriginalStatusDesc: "",
	}

	if order.PayType == model.PayTypeWechat {
		// Query WeChat payment status
		status, transactionId, originalStatus, payTime, err := queryWechatOrderStatusWithOriginal(eid, orderId)
		if err == nil {
			// Set original status
			response.OriginalStatus = originalStatus
			response.OriginalStatusDesc = getTradeStateDesc(originalStatus)

			// Handle different payment states
			if status == model.OrderStatusPaid {
				// Payment successful, create or update order with payment time
				updatedOrder, err := createOrUpdateOrderFromCacheWithTime(eid, orderId, model.OrderStatusPaid, transactionId, payTime)
				if err == nil {
					order = updatedOrder
					xlog.Info("Order updated with payment time:", time.UnixMilli(payTime).Format(time.RFC3339))
				} else {
					xlog.Error("Failed to update order:", err)
				}
			} else if originalStatus == model.TradeStateUserPaying {
				// User is paying, record this status but don't mark as paid
				xlog.Info("User is paying for order:", orderId)

				// If order is not in database yet, create it with pending status
				if order.ID == 0 {
					updatedOrder, err := createOrUpdateOrderFromCache(eid, orderId, model.OrderStatusPending, "")
					if err == nil {
						order = updatedOrder
					} else {
						xlog.Error("Failed to create order record for user paying:", err)
					}
				}
			} else if status == model.OrderStatusPending && order.ID == 0 {
				// Order still pending and not in database
				// Keep in cache, do nothing
			}
		}
	}

	// If order status is pending, check payment status
	switch order.Status {
	case model.OrderStatusPending:
		// Check if order has expired
		if order.Status == model.OrderStatusPending && time.Now().UnixMilli() > order.ExpiredTime {
			// If order is in database, update status
			if order.ID > 0 {
				model.UpdateOrderStatus(eid, orderId, model.OrderStatusExpired)
			}
			order.Status = model.OrderStatusExpired
			response.OriginalStatus = model.TradeStateClosed
			response.OriginalStatusDesc = "Order Expired"

			// Remove from cache
			removeCachedOrder(orderId)
		}
	case model.OrderStatusPaid:
		response.OriginalStatus = model.TradeStateSuccess
		response.OriginalStatusDesc = "Payment Successful"
	// case model.OrderStatusExpired:
	// 	response.OriginalStatus = model.TradeStateClosed
	// 	response.OriginalStatusDesc = "Order Expired"
	case model.OrderStatusConfirming:
		response.OriginalStatus = "CONFIRMING"
		response.OriginalStatusDesc = "Waiting for Confirmation"
	}
	// Update order information in response
	response.Order = order

	c.JSON(http.StatusOK, model.Success.ToResponse(response))
}

// OrderStatusResponse contains order status and original payment status
type OrderStatusResponse struct {
	Order              *model.Order `json:"order"`              // Order information
	OriginalStatus     string       `json:"originalStatus"`     // Original payment status code
	OriginalStatusDesc string       `json:"originalStatusDesc"` // Original payment status description
}

// Get WeChat payment status description
func getTradeStateDesc(tradeState string) string {
	switch tradeState {
	case model.TradeStateSuccess:
		return "Payment Successful"
	case model.TradeStateRefund:
		return "Refund Initiated"
	case model.TradeStateNotPay:
		return "Not Paid"
	case model.TradeStateClosed:
		return "Order Closed"
	case model.TradeStateRevoked:
		return "Order Revoked"
	case model.TradeStateUserPaying:
		return "User is Paying"
	case model.TradeStatePayError:
		return "Payment Failed"
	default:
		return "Unknown Status"
	}
}

// Query WeChat order status and return original status
func queryWechatOrderStatusWithOriginal(eid int64, orderId string) (int, string, string, int64, error) {
	// Get WeChat payment settings
	paySetting, err := model.GetPaySettingByType(eid, model.PayTypeWechat)
	if err != nil {
		return 0, "", "", 0, err
	}

	order, err := model.GetOrderByOrderId(eid, orderId)
	if err != nil {
		return 0, "", "", 0, err
	}

	factory := &payment.PaymentFactory{}
	newPayment, err := factory.NewPayment(order.PayType)
	if err != nil {
		return 0, "", "", 0, err
	}

	// Query order status
	rsp, err := newPayment.QueryPaymentStatus(order, paySetting)
	if err != nil {
		return 0, "", "", 0, err
	}

	wxRsp, ok := rsp.(*wechat.QueryOrderRsp)
	if !ok {
		return 0, "", "", 0, fmt.Errorf("invalid response type")
	}

	var payTime int64
	if wxRsp.Response.SuccessTime != "" {
		successTime, err := time.Parse(time.RFC3339, wxRsp.Response.SuccessTime)
		if err != nil {
			xlog.Error("Failed to parse success time:", err)
			payTime = time.Now().UTC().UnixMilli()
		} else {
			payTime = successTime.UnixMilli()
			xlog.Info("Using payment success time from WeChat:", wxRsp.Response.SuccessTime)
		}
	} else {
		payTime = time.Now().UTC().UnixMilli()
	}

	// Check payment status
	if wxRsp.Response.TradeState == model.TradeStateSuccess {
		return model.OrderStatusPaid, wxRsp.Response.TransactionId, wxRsp.Response.TradeState, payTime, nil
	} else if wxRsp.Response.TradeState == model.TradeStateClosed {
		return model.OrderStatusExpired, "", wxRsp.Response.TradeState, 0, nil
	} else if wxRsp.Response.TradeState == model.TradeStateRefund {
		return model.OrderStatusPending, "", wxRsp.Response.TradeState, 0, nil
	}

	return model.OrderStatusPending, "", wxRsp.Response.TradeState, 0, nil
}

// PayTypeStatus represents the status information of a payment type
type PayTypeStatus struct {
	PayType    int  `json:"pay_type"`   // Payment type ID
	Enabled    bool `json:"enabled"`    // Whether the payment type is enabled
	Configured bool `json:"configured"` // Whether the payment type is configured
}

// GetAvailablePayTypes gets all available payment types
// @Summary Get available payment types
// @Description Get all payment types that are configured and enabled on the site
// @Tags Payment
// @Accept json
// @Produce json
// @Success 200 {object} model.CommonResponse{data=[]PayTypeStatus}
// @Router /api/payment/available [get]
func GetAvailablePayTypes(c *gin.Context) {
	eid := config.GetEID(c)

	// Get all payment settings
	paySettings, err := model.GetPaySettingsByEid(eid)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	// Build payment type status list
	var payTypeStatusList []PayTypeStatus

	// Add all possible payment types (can be adjusted according to actual situation)
	allPayTypes := []int{
		model.PayTypeWechat, // WeChat Pay
		model.PayTypeManual, // Manual Transfer
		model.PayTypePaypal, // PayPal
		model.PayTypeAlipay, // Alipay
	}

	// Create payment type mapping for quick lookup
	payTypeMap := make(map[int]*model.PaySetting)
	for _, setting := range paySettings {
		payTypeMap[setting.PayType] = setting
	}

	for _, payType := range allPayTypes {
		status := PayTypeStatus{
			PayType:    payType,
			Enabled:    false,
			Configured: false,
		}

		if setting, exists := payTypeMap[payType]; exists {
			status.Configured = true
			status.Enabled = (setting.PayStatus == model.PayStatusEnabled)
		}

		payTypeStatusList = append(payTypeStatusList, status)
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(payTypeStatusList))
}
