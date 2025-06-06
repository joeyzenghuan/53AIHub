package controller

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/53AI/53AIHub/common"
	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/53AI/53AIHub/tasks"
	"github.com/53AI/53AIHub/utils"
	"github.com/gin-gonic/gin"
	"github.com/go-pay/gopay"
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
	SubscriptionID   int64  `json:"subscription_id" binding:"required" example:"1"`              // group_id
	SubscriptionName string `json:"subscription_name" binding:"required" example:"Professional"` // group_name
	Duration         int    `json:"duration" binding:"required" example:"12"`                    // Duration in months
	TimeUnit         string `json:"time_unit" binding:"required" example:"month"`                // Time unit for subscription duration
	Amount           int64  `json:"amount" binding:"required" example:"29900"`                   // Amount in cents
	Currency         string `json:"currency" binding:"required" example:"CNY"`                   // Currency type
	PayType          int    `json:"pay_type" binding:"required" example:"1"`                     // 1: WeChat, 2: Manual, 3: PayPal
	UserID           int64  `json:"user_id" binding:"required" example:"1"`
	Nickname         string `json:"nickname" binding:"required" example:"nickname"`
}

// OrderResponse represents the response for order operations
type OrderResponse struct {
	Order       *model.Order `json:"order"`
	PaymentInfo interface{}  `json:"payment_info,omitempty"` // Payment-specific information
}

// WechatNativePayInfo represents the WeChat Native payment information
type WechatNativePayInfo struct {
	CodeURL     string `json:"code_url"`     // QR code URL for payment
	OrderId     string `json:"order_id"`     // Order ID
	ExpiredTime int64  `json:"expired_time"` // Expiration timestamp
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

	// Generate order ID
	orderId := utils.GenerateOrderId()

	// Create order object (but don't save to database yet)
	order := &model.Order{
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
		Status:           model.OrderStatusPending,
		ExpiredTime:      time.Now().Add(2 * time.Hour).UnixMilli(),
	}

	// Process payment based on payment type
	var paymentInfo interface{}
	var processErr error

	switch req.PayType {
	case model.PayTypeWechat:
		// Get payment method (Native, JSAPI, etc.)
		payMethod := c.Query("pay_method")
		if payMethod == "jsapi" {
			openid := c.Query("openid")
			if openid == "" {
				c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("OpenID is required for JSAPI payment"))
				return
			}

			// Process JSAPI payment and cache order data
			paymentInfo, processErr = processWechatJsapiPayment(paySetting, order, openid)
			// if processErr == nil {
			// 	// Cache order data
			// 	cacheOrderData(order)
			// }
		} else {
			// Default use Native payment (scan code payment)
			// Process Native payment and cache order data
			paymentInfo, processErr = processWechatNativePayment(paySetting, order)
			// if processErr == nil {
			// 	// Cache order data
			// 	cacheOrderData(order)
			// }
		}
	case model.PayTypeManual:
		// For manual payment, save the order directly
		order.Status = model.OrderStatusConfirming
		if err := order.Update(); err != nil {
			c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
			return
		}
		paymentInfo = nil
	case model.PayTypePaypal:
		// TODO: Implement PayPal payment processing
		paymentInfo = nil
	}

	if processErr != nil {
		c.JSON(http.StatusInternalServerError, model.SystemError.ToResponse(processErr))
		return
	}

	if err := order.Create(); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
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

// Initialize WeChat client
func initWechatClient(wechatConfig model.WechatPayConfig) (*wechat.ClientV3, error) {
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

// Process WeChat Native payment and return payment information
func processWechatNativePayment(paySetting *model.PaySetting, order *model.Order) (*WechatNativePayInfo, error) {
	// Parse WeChat configuration
	var wechatConfig model.WechatPayConfig
	if err := json.Unmarshal([]byte(paySetting.PayConfig), &wechatConfig); err != nil {
		return nil, err
	}

	// Initialize WeChat client
	client, err := initWechatClient(wechatConfig)
	if err != nil {
		return nil, err
	}

	bm, err := buildWechatPaymentBodyMap(wechatConfig, order)
	if err != nil {
		return nil, err
	}

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

// Process WeChat JSAPI payment and return payment information
func processWechatJsapiPayment(paySetting *model.PaySetting, order *model.Order, openid string) (*WechatJsapiPayInfo, error) {
	// Parse WeChat configuration
	var wechatConfig model.WechatPayConfig
	if err := json.Unmarshal([]byte(paySetting.PayConfig), &wechatConfig); err != nil {
		return nil, err
	}

	// Initialize WeChat client
	client, err := initWechatClient(wechatConfig)
	if err != nil {
		return nil, err
	}

	bm, err := buildWechatPaymentBodyMap(wechatConfig, order)
	if err != nil {
		return nil, err
	}

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
		OrderId:   order.OrderId,
	}, nil
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

	// Initialize WeChat client
	_, err = initWechatClient(wechatConfig)
	if err != nil {
		xlog.Error("Initialize WeChat client error:", err)
		c.String(http.StatusInternalServerError, "Failed to initialize payment client")
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
	result, err := notifyReq.DecryptPayCipherText(wechatConfig.APIv3Key)
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
			c.JSON(http.StatusNotFound, model.NotFound.ToResponse("Order not found"))
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

	// If order status is pending, check payment status
	if order.Status == model.OrderStatusPending {
		// Check if order has expired
		if time.Now().UnixMilli() > order.ExpiredTime {
			// If order is in database, update status
			if order.ID > 0 {
				model.UpdateOrderStatus(eid, orderId, model.OrderStatusExpired)
			}
			order.Status = model.OrderStatusExpired
			response.OriginalStatus = model.TradeStateClosed
			response.OriginalStatusDesc = "Order Expired"

			// Remove from cache
			removeCachedOrder(orderId)
		} else if order.PayType == model.PayTypeWechat {
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
	} else if order.Status == model.OrderStatusPaid {
		response.OriginalStatus = model.TradeStateSuccess
		response.OriginalStatusDesc = "Payment Successful"
	} else if order.Status == model.OrderStatusExpired {
		response.OriginalStatus = model.TradeStateClosed
		response.OriginalStatusDesc = "Order Expired"
	} else if order.Status == model.OrderStatusConfirming {
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

	// Parse WeChat configuration
	var wechatConfig model.WechatPayConfig
	if err = json.Unmarshal([]byte(paySetting.PayConfig), &wechatConfig); err != nil {
		return 0, "", "", 0, err
	}

	// Initialize WeChat client
	client, err := initWechatClient(wechatConfig)
	if err != nil {
		return 0, "", "", 0, err
	}

	// Query order status
	wxRsp, err := client.V3TransactionQueryOrder(context.Background(), wechat.OutTradeNo, orderId)
	if err != nil {
		return 0, "", "", 0, err
	}

	if wxRsp.Code != wechat.Success {
		return 0, "", "", 0, fmt.Errorf("WeChat query error: %s", wxRsp.Error)
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

func formatNotifyURL(configURL string, apiHost string, eid int64) string {
	if configURL == "" {
		if !strings.HasSuffix(apiHost, "/") {
			apiHost = apiHost + "/"
		}
		return fmt.Sprintf("%sapi/payment/wechat/notify/%d", apiHost, eid)
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

	notifyURL := formatNotifyURL(wechatConfig.NotifyURL, config.ApiHost, order.Eid)
	bm.Set("notify_url", notifyURL)

	amountBM := make(gopay.BodyMap)
	amountBM.Set("total", int64(order.Amount))

	amountBM.Set("currency", order.Currency)

	bm.Set("amount", amountBM)

	return bm, nil
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
