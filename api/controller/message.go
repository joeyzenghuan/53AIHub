package controller

import (
	"net/http"
	"strconv"

	"github.com/53AI/53AIHub/common"
	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

type MessagesResponse struct {
	Count    int64            `json:"count"`
	Messages []*model.Message `json:"messages"`
}

type MessageListRequest struct {
	Keyword   string `json:"keyword" form:"keyword" example:"gpt"`
	Offset    int    `json:"offset" form:"offset" example:"0"`
	Limit     int    `json:"limit" form:"limit" example:"10"`
	Direction string `json:"direction" form:"direction" example:"desc"` // 获取方向: desc=从新到旧, asc=从旧到新
}

// @Summary Get messages by agent
// @Description Get messages between user and specific agent with pagination and keyword search
// @Tags Message
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param agent_id path int true "Agent ID"
// @Param keyword query string false "Search keyword"
// @Param offset query int false "Pagination offset" default(0)
// @Param limit query int false "Pagination limit" default(10)
// @Success 200 {object} model.CommonResponse{data=MessagesResponse} "Success"
// @Router /api/agents/{agent_id}/messages [get]
func GetMessagesByUserAndAgent(c *gin.Context) {
	agent_id, err := strconv.ParseInt(c.Param("agent_id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	var messageListRequest MessageListRequest
	if err := c.ShouldBindQuery(&messageListRequest); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	userId := config.GetUserId(c)
	eid := config.GetEID(c)
	count, messages, err := model.GetMessagesByUserAndAgent(
		eid, userId, agent_id,
		messageListRequest.Keyword, messageListRequest.Limit, messageListRequest.Offset)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(&MessagesResponse{
		Count:    count,
		Messages: messages,
	}))
}

// @Summary Get messages by user and agent
// @Description Get messages between user and specific agent with pagination and keyword search
// @Tags Message
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param agent_id path int true "Agent ID"
// @Param user_id path int true "User ID"
// @Param keyword query string false "Search keyword"
// @Param offset query int false "Pagination offset" default(0)
// @Param limit query int false "Pagination limit" default(10)
// @Success 200 {object} model.CommonResponse{data=MessagesResponse} "Success"
// @Router /api/users/{user_id}/agents/{agent_id}/messages [get]
func GetUserMessages(c *gin.Context) {
	agent_id, err := strconv.ParseInt(c.Param("agent_id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	user_id, err := strconv.ParseInt(c.Param("user_id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}
	user, err := model.GetUserByID(user_id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	if user.Eid != config.GetEID(c) {
		c.JSON(http.StatusForbidden, model.NotFound.ToResponse(nil))
		return
	}

	var messageListRequest MessageListRequest
	if err := c.ShouldBindQuery(&messageListRequest); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	eid := config.GetEID(c)
	count, messages, err := model.GetMessagesByUserAndAgent(
		eid, user_id, agent_id,
		messageListRequest.Keyword, messageListRequest.Limit, messageListRequest.Offset)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(&MessagesResponse{
		Count:    count,
		Messages: messages,
	}))
}

// @Summary Get messages by conversation ID
// @Description Get message list by conversation ID with pagination and keyword search
// @Tags Message
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param conversation_id path int true "Conversation ID"
// @Param keyword query string false "Search keyword"
// @Param offset query int false "Pagination offset" default(0)
// @Param limit query int false "Pagination limit" default(10)
// @Param direction query string false "Direction (desc=newest first, asc=oldest first)" default(desc)
// @Success 200 {object} model.CommonResponse{data=MessagesResponse} "Success"
// @Router /api/conversations/{conversation_id}/messages [get]
func GetMessagesByConversation(c *gin.Context) {
	conversation_id, err := strconv.ParseInt(c.Param("conversation_id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	var messageListRequest MessageListRequest
	if err := c.ShouldBindQuery(&messageListRequest); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	// 设置默认方向为从新到旧
	if messageListRequest.Direction == "" {
		messageListRequest.Direction = "desc"
	}

	eid := config.GetEID(c)
	var messages []*model.Message
	var count int64

	var getConversation func() error
	if common.IsAdmin(c) {
		getConversation = func() error {
			_, err := model.AdminGetConversationByID(eid, conversation_id)
			return err
		}
	} else {
		getConversation = func() error {
			_, err := model.GetConversationByID(eid, config.GetUserId(c), conversation_id)
			return err
		}
	}

	if err := getConversation(); err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(err))
		return
	}

	// 传递方向参数到模型层
	count, messages, err = model.GetMessagesByConversationIDWithDirection(
		eid, conversation_id,
		messageListRequest.Keyword, messageListRequest.Limit, messageListRequest.Offset,
		messageListRequest.Direction)

	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	// 如果是从新到旧获取的，需要反转结果集以确保最终结果是从旧到新排序
	if messageListRequest.Direction == "desc" {
		// 反转消息数组
		for i, j := 0, len(messages)-1; i < j; i, j = i+1, j-1 {
			messages[i], messages[j] = messages[j], messages[i]
		}
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(&MessagesResponse{
		Count:    count,
		Messages: messages,
	}))
}
