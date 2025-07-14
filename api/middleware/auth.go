package middleware

import (
	"errors"
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
		user, err := HandleTokenAuth(token, role)
		if err != nil {
			switch err.Error() {
			case "token is expired":
				c.JSON(http.StatusUnauthorized, model.TokenExpiredError.ToResponse(nil))
			case "token has invalid claims", "forbidden access":
				c.JSON(http.StatusUnauthorized, model.ForbiddenError.ToResponse(nil))
			default:
				c.JSON(http.StatusUnauthorized, model.UnauthorizedError.ToResponse(nil))
			}

			c.Abort()
			return
		}

		c.Set(session.SESSION_USER_ID, user.UserID)
		c.Set(session.SESSION_USER_NICKNAME, user.Nickname)
		c.Set(session.SESSION_USER_ROLE, user.Role)
		c.Set(session.SESSION_USER_GROUP_ID, user.GroupId)
		c.Set(session.ENV_EID, user.Eid)
		c.Set(session.SESSION_SAAS_USER, false)
	}
}

func HandleTokenAuth(token string, role int64) (user *model.User, err error) {
	user_id, _, err := jwt.UserParseJWT(token)
	if err != nil {
		if strings.Contains(err.Error(), "token is expired") {
			return nil, errors.New("token is expired")
		} else if strings.Contains(err.Error(), "token has invalid claims") {
			return nil, errors.New("token has invalid claims")
		} else {
			return nil, errors.New("unauthorized access")
		}
	}

	user = model.ValidateAccessToken(token)
	if user == nil || user.UserID != user_id {
		return nil, errors.New("not found")
	}

	if user.Status == model.UserStatusDisabled {
		return nil, errors.New("forbidden access")
	}

	if role > 0 && user.Role < role {
		return nil, errors.New("forbidden access")
	}

	return user, nil
}
