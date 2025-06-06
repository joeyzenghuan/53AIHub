package controller

import (
	"net/http"
	"strconv"

	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

type ConversationRequest struct {
	Title   string `json:"title"`
	AgentID int64  `json:"agent_id" binding:"required"`
}

type ConversationUpdateRequest struct {
	Title string `json:"title"`
}

type ConversationResponse struct {
	Count         int64                 `json:"count"`
	Conversations []*model.Conversation `json:"conversations"`
}

type ConversationListRequest struct {
	Keyword string `json:"keyword" form:"keyword"`
	Offset  int    `json:"offset" form:"offset" example:"0"`
	Limit   int    `json:"limit" form:"limit" example:"10"`
}

// @Summary Create conversation
// @Description Create a new conversation
// @Tags Conversation
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param conversation body ConversationRequest true "Conversation data"
// @Success 200 {object} model.CommonResponse{data=model.Conversation} "Success"
// @Router /api/conversations [post]
func CreateConversation(c *gin.Context) {
	var req ConversationRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	eid := config.GetEID(c)
	agent, err := model.GetAgentByID(eid, req.AgentID)
	if err!= nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(nil))
		return
	}

	conversation := &model.Conversation{
		Eid:     eid,
		UserID:  config.GetUserId(c),
		AgentID: req.AgentID,
		Title:   req.Title,
		Status:  model.ConversationStatusActive,
		Model:   agent.Model,
	}

	if err := model.CreateConversation(conversation); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	conversation.LoadAgent()
	c.JSON(http.StatusOK, model.Success.ToResponse(conversation))
}

// @Summary Get conversation details
// @Description Get conversation details by ID
// @Tags Conversation
// @Produce json
// @Security BearerAuth
// @Param conversation_id path int true "Conversation ID"
// @Success 200 {object} model.CommonResponse{data=model.Conversation} "Success"
// @Router /api/conversations/{conversation_id} [get]
func GetConversation(c *gin.Context) {
	conversationID, err := strconv.ParseInt(c.Param("conversation_id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	conversation, err := model.GetConversationByID(config.GetEID(c), config.GetUserId(c), conversationID)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(nil))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(conversation))
}

// @Summary Get user conversations
// @Description Get conversation list for current user
// @Tags Conversation
// @Produce json
// @Security BearerAuth
// @Param keyword query string false "Search keyword"
// @Param offset query int false "Offset" default(0)
// @Param limit query int false "Limit" default(10)
// @Success 200 {object} model.CommonResponse{data=ConversationResponse} "Success"
// @Router /api/conversations [get]
func GetConversations(c *gin.Context) {
	var req ConversationListRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	conversations, err := model.GetConversationsByUserID(config.GetEID(c), config.GetUserId(c))
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(&ConversationResponse{
		Count:         int64(len(conversations)),
		Conversations: conversations,
	}))
}

// @Summary Update conversation
// @Description Update conversation information
// @Tags Conversation
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param conversation_id path int true "Conversation ID"
// @Param conversation body ConversationUpdateRequest true "Conversation data"
// @Success 200 {object} model.CommonResponse{data=model.Conversation} "Success"
// @Router /api/conversations/{conversation_id} [put]
func UpdateConversation(c *gin.Context) {
	conversationID, err := strconv.ParseInt(c.Param("conversation_id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	var req ConversationUpdateRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	conversation, err := model.GetConversationByID(config.GetEID(c), config.GetUserId(c), conversationID)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(nil))
		return
	}

	conversation.Title = req.Title

	if err := model.UpdateConversation(conversation); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(conversation))
}

// @Summary Delete conversation
// @Description Delete specified conversation
// @Tags Conversation
// @Produce json
// @Security BearerAuth
// @Param conversation_id path int true "Conversation ID"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/conversations/{conversation_id} [delete]
func DeleteConversation(c *gin.Context) {
	conversationID, err := strconv.ParseInt(c.Param("conversation_id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	if err := model.DeleteConversation(config.GetEID(c), conversationID); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}
