package service

import (
	"github.com/gin-gonic/gin"
)

func IsFeatureAvailable(c *gin.Context, featureKey string, params map[string]interface{}) (bool, error) {
	return true, nil
}
