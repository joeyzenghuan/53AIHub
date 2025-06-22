package middleware

import (
	"net/http"
	"strings"

	"github.com/53AI/53AIHub/common/session"
	"github.com/53AI/53AIHub/common/utils/jwt"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

func UserTokenAuth(role int64) func(c *gin.Context) {
	return func(c *gin.Context) {
		token := c.Request.Header.Get("Authorization")
		token = strings.Replace(token, "Bearer ", "", 1)
		if token == "" {
			c.JSON(http.StatusUnauthorized, model.UnauthorizedError.ToResponse(nil))
			c.Abort()
			return
		}
		user_id, eid, err := jwt.UserParseJWT(token)
		if err != nil {
			if strings.Contains(err.Error(), "token is expired") {
				c.JSON(http.StatusUnauthorized, model.TokenExpiredError.ToResponse(nil))
			} else if strings.Contains(err.Error(), "token has invalid claims") {
				c.JSON(http.StatusUnauthorized, model.ForbiddenError.ToResponse(nil))
			} else {
				c.JSON(http.StatusUnauthorized, model.UnauthorizedError.ToResponse(nil))
			}
			c.Abort()
			return
		}

		user := model.ValidateAccessToken(token)
		if user == nil || user.UserID != user_id {
			c.JSON(http.StatusUnauthorized, model.TokenExpiredError.ToResponse(nil))
			c.Abort()
			return
		}

		if user.Status == model.UserStatusDisabled {
			c.JSON(http.StatusOK, model.ForbiddenError.ToResponse(nil))
			c.Abort()
			return
		}

		if role > 0 && user.Role < role {
			c.JSON(http.StatusUnauthorized, model.AuthFailed.ToResponse(nil))
			c.Abort()
			return
		}

		c.Set(session.SESSION_USER_ID, user_id)
		c.Set(session.SESSION_USER_NICKNAME, user.Nickname)
		c.Set(session.SESSION_USER_ROLE, user.Role)
		c.Set(session.SESSION_USER_GROUP_ID, user.GroupId)
		c.Set(session.ENV_EID, eid)
		c.Set(session.SESSION_SAAS_USER, false)
	}
}
