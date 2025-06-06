package common

import (
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

func IsAdmin(c *gin.Context) bool {
	role, success := c.Get("SESSION_USER_ROLE")
	if success && role != nil {
		return role.(int64) >= model.RoleAdminUser
	}
	return false
}
