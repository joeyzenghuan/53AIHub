package controller

import (
	"net/http"

	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

type HealthData struct {
	Version   string `json:"version"`
	StartTime string `json:"start_time"`
}

// HealthCheck HealthCheck
// @Summary HealthCheck
// @Description HealthCheck
// @Tags System
// @Produce json
// @Success 200 {object} model.CommonResponse{data=HealthData} "Success response"
// @Router /heath [get]
func HealthCheck(c *gin.Context) {
	c.JSON(http.StatusOK, model.Success.ToResponse(HealthData{
		Version:   config.Version + "." + config.VersionTime + "-" + config.Server,
		StartTime: config.StartTime,
	}))
}

type CodeInfo struct {
	Code        int    `json:"code"`
	Description string `json:"description"`
}

// GetAllResponseCodes Get all response codes and their descriptions
// @Summary Get all response codes
// @Description Returns all defined response codes and their descriptions in the system
// @Tags System
// @Produce json
// @Success 200 {object} []CodeInfo "Success response"
// @Router /api/response_codes [get]
func GetAllResponseCodes(c *gin.Context) {
	codes := make([]CodeInfo, 0, len(model.CodeMessage))

	for code, description := range model.CodeMessage {
		codes = append(codes, CodeInfo{
			Code:        int(code),
			Description: description,
		})
	}

	c.JSON(http.StatusOK, codes)
}
