package middleware

import (
	"bytes"
	"encoding/json"
	"errors"
	"io"
	"net/http"
	"strconv"
	"strings"

	"github.com/53AI/53AIHub/common"
	"github.com/53AI/53AIHub/common/logger"
	"github.com/53AI/53AIHub/common/session"
	"github.com/53AI/53AIHub/common/utils/helper"
	"github.com/53AI/53AIHub/common/utils/jwt"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

func RelayTokenAuth() func(c *gin.Context) {
	return func(c *gin.Context) {
		token := c.Request.Header.Get("Authorization")
		token = strings.Replace(token, "Bearer ", "", 1)
		if token == "" {
			c.JSON(http.StatusUnauthorized, model.UnauthorizedError.ToOpenAIErrorRespone(nil))
			c.Abort()
			return
		}

		user_id, eid, err := jwt.UserParseJWT(token)
		if err != nil {
			if strings.Contains(err.Error(), "token is expired") {
				c.JSON(http.StatusUnauthorized, model.TokenExpiredError.ToOpenAIErrorRespone(nil))
			} else {
				c.JSON(http.StatusUnauthorized, model.UnauthorizedError.ToOpenAIErrorRespone(nil))
			}
			c.Abort()
			return
		}

		user := model.ValidateAccessToken(token)
		if user.UserID != user_id {
			c.JSON(http.StatusUnauthorized, model.UnauthorizedError.ToOpenAIErrorRespone(nil))
			c.Abort()
			return
		}

		c.Set(session.SESSION_USER_ID, user_id)
		c.Set(session.SESSION_USER_ROLE, user.Role)
		c.Set(session.SESSION_USER_GROUP_ID, user.GroupId)
		c.Set(session.ENV_EID, eid)

		// 读取原始请求体
		bodyBytes, err := c.GetRawData()
		if err != nil {
			c.JSON(http.StatusBadRequest, model.ParamError.ToOpenAIErrorRespone(err))
			c.Abort()
			return
		}

		var requestData map[string]interface{}
		if err := json.Unmarshal(bodyBytes, &requestData); err != nil {
			c.JSON(http.StatusBadRequest, model.ParamError.ToOpenAIErrorRespone(err))
			c.Abort()
			return
		}

		c.Request.Body = io.NopCloser(bytes.NewBuffer(bodyBytes))

		if modelValue, exists := requestData["model"]; exists {
			modelStr, ok := modelValue.(string)
			if !ok {
				c.JSON(http.StatusUnauthorized, model.ParamError.ToOpenAIErrorRespone(nil))
				c.Abort()
				return
			}
			c.Set(session.SESSION_AGENT_MODEL, modelStr)
			if conversationIdValue, exists := requestData["conversation_id"]; exists {
				if conversationIdValue != nil {
					var conversationId int64
					switch v := conversationIdValue.(type) {
					case float64:
						conversationId = int64(v)
					case int64:
						conversationId = v
					}
					// TODO: check conversation_id is exist and belong to user_id
					conversation, err := model.GetConversationByIdAndUserId(eid, conversationId, user_id)
					if err != nil {
						c.JSON(http.StatusNotFound, model.NotFound.ToOpenAIErrorRespone(errors.New("Conversation not found")))
						c.Abort()
						return
					}
					c.Set(session.SESSION_CONVERSATION_ID, conversationId)
					c.Set(session.SESSION_CONVERSATION, conversation)
				}
			}

			if strings.HasPrefix(modelStr, "agent-") {
				agentIDStr := strings.TrimPrefix(modelStr, "agent-")
				agentID, err := strconv.ParseInt(agentIDStr, 10, 64)
				if err != nil {
					c.JSON(http.StatusBadRequest, model.ParamError.ToOpenAIErrorRespone(errors.New("AgentId Error")))
					c.Abort()
					return
				}

				agent, err := model.GetAgentByID(eid, agentID)
				if err != nil {
					c.JSON(http.StatusNotFound, model.NotFound.ToOpenAIErrorRespone("Agent not found"))
					c.Abort()
					return
				}

				if !common.IsAdmin(c) {
					agentUserGroupIds, err := agent.GetUserGroupIds()
					if err != nil {
						c.JSON(http.StatusInternalServerError, model.NotFound.ToOpenAIErrorRespone(err))
						c.Abort()
						return
					}

					userGroupIds, err := user.GetUserGroupIds()
					if !helper.HasIntersection(agentUserGroupIds, userGroupIds) {
						c.JSON(http.StatusForbidden, model.AgentAuthError.ToOpenAIErrorRespone(nil))
						c.Abort()
						return
					}
				} else {
					logger.SysLogf("Admin user access agent: %d", agent.AgentID)
				}

				c.Set(session.SESSION_AGENT_ID, agentID)
				c.Set(session.SESSION_AGENT, agent)
				logger.SysLogf("Agent ID: %d", agent.AgentID)
			}
		}
		c.Next()
	}
}
