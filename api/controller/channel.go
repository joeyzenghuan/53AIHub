package controller

import (
	"net/http"
	"strconv"
	"strings"

	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

type ChannelRequest struct {
	Type         int     `json:"type" example:"1"`
	Key          string  `json:"key" example:"channel_key"`
	Name         string  `json:"name" example:"channel_name"`
	Models       string  `json:"models" example:"gpt-3.5-turbo"`
	Config       string  `json:"config" example:"{\"region\":\"us-east-1\"}"`
	ModelMapping *string `json:"model_mapping"`
	Weight       *uint   `json:"weight"`
	Priority     *int64  `json:"priority"`
	BaseURL      *string `json:"base_url"`
}

// @Summary Create channel
// @Description Create new channel configuration
// @Tags Channel
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param channel body ChannelRequest true "Channel data"
// @Success 200 {object} model.CommonResponse
// @Router /api/channels [post]
func CreateChannel(c *gin.Context) {
	var req ChannelRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	channel := model.Channel{
		Eid:          config.GetEID(c),
		Type:         req.Type,
		Key:          req.Key,
		Name:         req.Name,
		Models:       req.Models,
		Config:       req.Config,
		ModelMapping: req.ModelMapping,
		Weight:       req.Weight,
		Priority:     req.Priority,
		BaseURL:      req.BaseURL,
	}

	if err := model.CreateChannel(&channel); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(channel))
}

// @Summary Get channel
// @Description Get channel configuration by ID
// @Tags Channel
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param channel_id path int true "Channel ID"
// @Success 200 {object} model.CommonResponse
// @Router /api/channels/{channel_id} [get]
func GetChannel(c *gin.Context) {
	id, _ := strconv.ParseInt(c.Param("channel_id"), 10, 64)
	channel, err := model.GetChannelByID(id)

	if err != nil || channel.Eid != config.GetEID(c) {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(nil))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(channel))
}

// @Summary Update channel
// @Description Update existing channel configuration
// @Tags Channel
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param channel_id path int true "Channel ID"
// @Param channel body ChannelRequest true "Update data"
// @Success 200 {object} model.CommonResponse
// @Router /api/channels/{channel_id} [put]
func UpdateChannel(c *gin.Context) {
	id, _ := strconv.ParseInt(c.Param("channel_id"), 10, 64)
	channel, err := model.GetChannelByID(id)

	if err != nil || channel.Eid != config.GetEID(c) {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(nil))
		return
	}

	var req ChannelRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	channel.Type = req.Type
	channel.Key = req.Key
	channel.Name = req.Name
	channel.Models = req.Models
	channel.Config = req.Config
	channel.ModelMapping = req.ModelMapping
	channel.Weight = req.Weight
	channel.Priority = req.Priority
	channel.BaseURL = req.BaseURL

	if err := model.UpdateChannel(channel); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(channel))
}

// @Summary Delete channel
// @Description Delete channel by ID
// @Tags Channel
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param channel_id path int true "Channel ID"
// @Success 200 {object} model.CommonResponse
// @Router /api/channels/{channel_id} [delete]
func DeleteChannel(c *gin.Context) {
	id, _ := strconv.ParseInt(c.Param("channel_id"), 10, 64)
	channel, err := model.GetChannelByID(id)

	if err == nil && channel.Eid == config.GetEID(c) {
		err = model.DeleteChannelByID(id)
	}

	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}

// @Summary Get all channels
// @Description Get all channels for current enterprise
// @Tags Channel
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param provider_id query int false "Provider ID, 0 means platform-added keys, non-zero means get channels from other platforms" example:"0"
// @Param channel_types query string false "Channel type filters" example:"1,1001,1002"
// @Success 200 {object} model.CommonResponse
// @Router /api/channels [get]
func GetChannels(c *gin.Context) {
	providerId, _ := strconv.ParseInt(c.Query("provider_id"), 10, 64)
	channelTypesStr := c.Query("channel_types")
	var channelTypes []int
	if channelTypesStr != "" {
		for _, s := range strings.Split(channelTypesStr, ",") {
			if t, err := strconv.Atoi(strings.TrimSpace(s)); err == nil {
				channelTypes = append(channelTypes, t)
			}
		}
	}
	channels, err := model.GetChannelsByEidAndParams(config.GetEID(c), providerId, channelTypes)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(channels))
}

// func TestChannel(c *gin.Context) {
// 	ctx := c.Request.Context()
// 	id, err := strconv.Atoi(c.Param("id"))
// }
