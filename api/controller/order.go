package controller

import (
	"net/http"
	"strconv"
	"time"

	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

// OrderListRequest represents the request for listing orders
type OrderListRequest struct {
	// UserID    int64  `form:"user_id" example:"0"` // 0 means all users
	Offset  int    `form:"offset" example:"0"`
	Limit   int    `form:"limit" example:"10"`
	Status  int    `form:"status" example:"-1"`   // -1 means all statuses (default -1)
	PayType int    `form:"pay_type" example:"-1"` // -1 means all payment types (default -1)
	Keyword string `form:"keyword" example:""`    // Search by nickname or order ID
}

// OrderListResponse represents the response for listing orders
type OrderListResponse struct {
	Total  int64          `json:"total"`
	Orders []*model.Order `json:"orders"`
}

// GetOrders gets orders with pagination
// @Summary Get orders
// @Description Get orders with pagination
// @Tags Order
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param offset query int false "Offset"
// @Param limit query int false "Limit"
// @Param status query int false "Order status (-1 for all statuses, 1:Not confirmed 2:Pending 3:Paid 4:Expired)"
// @Param pay_type query int false "Payment type (-1 for all types, 1:WeChat Pay 2:Manual Transfer 3:PayPal)"
// @Param keyword query string false "Search by nickname or order ID"
// @Success 200 {object} model.CommonResponse{data=OrderListResponse}
// @Router /api/orders [get]
func GetOrders(c *gin.Context) {
	var req OrderListRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	eid := config.GetEID(c)

	offset := req.Offset
	if offset == 0 {
		offset = 0
	}

	if req.Status == 0 {
		req.Status = -1
	}

	if req.PayType == 0 {
		req.PayType = -1
	}

	limit := req.Limit
	if limit == 0 {
		limit = 10
	}

	// Get orders with extended filters
	orders, total, err := model.GetOrdersWithFilters(eid, req.Status,
		req.PayType, req.Keyword, offset, limit)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(&OrderListResponse{
		Total:  total,
		Orders: orders,
	}))
}

// GetOrder gets an order by ID
// @Summary Get order
// @Description Get an order by ID
// @Tags Order
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Order ID"
// @Success 200 {object} model.CommonResponse{data=model.Order}
// @Router /api/orders/{id} [get]
func GetOrder(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid ID"))
		return
	}

	eid := config.GetEID(c)

	// Get order
	order, err := model.GetOrderByID(eid, id)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToNewErrorResponse(model.OrderNotFound))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(order))
}

// GetUserOrders gets orders for the current user
// @Summary Get user orders
// @Description Get orders for the current user
// @Tags Order
// @Accept json
// @Produce json
// @Security BearerAuth
// @Success 200 {object} model.CommonResponse{data=[]model.Order}
// @Router /api/orders/user [get]
func GetUserOrders(c *gin.Context) {
	eid := config.GetEID(c)
	userID := config.GetUserId(c)

	// Get orders
	orders, err := model.GetUserOrders(eid, userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(orders))
}

// UpdateOrderStatusRequest represents the request for updating order status
type UpdateOrderStatusRequest struct {
	Status int `json:"status" binding:"required" example:"1"` // 1: Paid
}

// UpdateOrderStatus updates the status of an order
// @Summary Update order status
// @Description Update the status of an order
// @Tags Order
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Order ID"
// @Param status body UpdateOrderStatusRequest true "Order status"
// @Success 200 {object} model.CommonResponse{data=model.Order}
// @Router /api/orders/{id}/status [patch]
func UpdateOrderStatus(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid ID"))
		return
	}

	eid := config.GetEID(c)

	// Get order
	order, err := model.GetOrderByID(eid, id)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToNewErrorResponse(model.OrderNotFound))
		return
	}

	// Check payment type, only manual payment orders can be updated through this interface
	if order.PayType != 2 {
		c.JSON(http.StatusBadRequest, model.ParamError.ToNewErrorResponse("Only manual payment orders can be updated through this interface"))
		return
	}

	var req UpdateOrderStatusRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	if order.Status != model.OrderStatusConfirming {
		c.JSON(http.StatusBadRequest, model.ParamError.ToNewErrorResponse("Only orders in confirming status can be updated"))
		return
	}

	// Validate status
	if req.Status < 0 || req.Status > 4 {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid status"))
		return
	}

	// Update status
	order.Status = req.Status

	// If status is paid, set paid time
	if req.Status == model.OrderStatusPaid && order.PayTime == 0 {
		order.PayTime = time.Now().UTC().UnixMilli()
	}

	if err := order.Update(); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(order))
}

// DeleteOrder deletes an order
// @Summary Delete order
// @Description Delete an order
// @Tags Order
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Order ID"
// @Success 200 {object} model.CommonResponse
// @Router /api/orders/{id} [delete]
func DeleteOrder(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid ID"))
		return
	}

	eid := config.GetEID(c)

	// Get order
	order, err := model.GetOrderByID(eid, id)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToNewErrorResponse(model.OrderNotFound))
		return
	}

	// Check payment type, only manual payment orders can be deleted through this interface
	if order.PayType != 2 {
		c.JSON(http.StatusBadRequest, model.ParamError.ToNewErrorResponse("Only manual payment orders can be deleted through this interface"))
		return
	}

	// Delete order
	if err := order.Delete(); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}

// ConfirmManualPayment confirms a manual payment
// @Summary Confirm manual payment
// @Description Confirm a manual payment
// @Tags Order
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Order ID"
// @Success 200 {object} model.CommonResponse{data=model.Order}
// @Router /api/orders/{id}/confirm [post]
func ConfirmManualPayment(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid ID"))
		return
	}

	eid := config.GetEID(c)

	// Get order
	order, err := model.GetOrderByID(eid, id)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToNewErrorResponse(model.OrderNotFound))
		return
	}

	// Check if order is manual payment and in confirming status
	if order.PayType != 2 || order.Status != model.OrderStatusConfirming {
		c.JSON(http.StatusBadRequest, model.ParamError.ToNewErrorResponse("Only manual payments in confirming status can be confirmed"))
		return
	}

	// Start database transaction
	tx := model.DB.Begin()
	if tx.Error != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(tx.Error))
		return
	}
	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()

	// Update order status within transaction
	order.Status = model.OrderStatusPaid
	order.PayTime = time.Now().UTC().UnixMilli()
	if err = tx.Model(&order).Updates(order).Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	// Get user and update subscription group
	var user model.User
	if err = tx.Where("user_id = ?", order.UserID).First(&user).Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	// Calculate new expiration time
	newExpiredTime, err := order.CalculateNewExpiredTime(&user)
	if err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	// Update user group and expiration time
	if err := tx.Model(&user).Updates(map[string]interface{}{
		"group_id":     order.ServiceID,
		"expired_time": newExpiredTime,
	}).Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	// Commit transaction
	if err := tx.Commit().Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(order))
}

// UpdateManualTransferOrderRequest represents the request for updating manual transfer order
type UpdateManualTransferOrderRequest struct {
	Amount           int64  `json:"amount" binding:"required"`
	Currency         string `json:"currency" binding:"required,oneof=CNY USD"`
	Duration         int    `json:"duration" binding:"required,min=1"`
	UserID           int64  `json:"user_id" binding:"required" example:"1"`
	Nickname         string `json:"nickname" binding:"required"`
	SubscriptionID   int64  `json:"subscription_id" binding:"required"`
	SubscriptionName string `json:"subscription_name" binding:"required"`
	TimeUnit         string `json:"time_unit" binding:"required,oneof=day week month quarter year"`
}

// UpdateManualTransferOrder updates a manual transfer order
// @Summary Update manual transfer order
// @Description Update details of a manual transfer order
// @Tags Order
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Order ID"
// @Param data body UpdateManualTransferOrderRequest true "Order details"
// @Success 200 {object} model.CommonResponse{data=model.Order}
// @Router /api/orders/{id}/manual [put]
func UpdateManualTransferOrder(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("Invalid ID"))
		return
	}

	eid := config.GetEID(c)

	var req UpdateManualTransferOrderRequest
	if err = c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	order, err := model.GetOrderByID(eid, id)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToNewErrorResponse(model.OrderNotFound))
		return
	}

	if order.PayType != 2 {
		c.JSON(http.StatusBadRequest, model.ParamError.ToNewErrorResponse("Only manual payment orders can be updated"))
		return
	}

	// Update order fields
	order.Amount = req.Amount
	order.Currency = req.Currency
	order.Duration = req.Duration
	order.UserID = req.UserID
	order.Nickname = req.Nickname
	order.ServiceID = req.SubscriptionID
	order.SubscriptionName = req.SubscriptionName
	order.TimeUnit = req.TimeUnit

	if err := order.Update(); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(order))
}
