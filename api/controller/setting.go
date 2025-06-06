package controller

import (
	"net/http"
	"strconv"

	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

type SettingRequest struct {
	Key   string `json:"key" example:"setting_key"`
	Value string `json:"value" example:"setting_value"`
}

// @Summary Create Setting
// @Description Create new setting entry
// @Tags Setting
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param setting body SettingRequest true "Setting data"
// @Success 200 {object} model.CommonResponse
// @Router /api/settings [post]
func CreateSetting(c *gin.Context) {
	var req SettingRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	setting := model.Setting{
		Eid:   config.GetEID(c),
		Key:   req.Key,
		Value: req.Value,
	}

	if err := model.CreateSetting(&setting); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(setting))
}

// @Summary Get Setting
// @Description Get setting by ID
// @Tags Setting
// @Accept json
// @Produce json
// @Param id path int true "Setting ID"
// @Success 200 {object} model.CommonResponse
// @Router /api/settings/{id} [get]
func GetSetting(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	setting, err := model.GetSettingByID(int64(id))

	if err != nil || setting.Eid != config.GetEID(c) {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(nil))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(setting))
}

// @Summary Update Setting
// @Description Update existing setting
// @Tags Setting
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Setting ID"
// @Param setting body SettingRequest true "Update data"
// @Success 200 {object} model.CommonResponse
// @Router /api/settings/{id} [put]
func UpdateSetting(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	setting, err := model.GetSettingByID(int64(id))

	if err != nil || setting.Eid != config.GetEID(c) {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(nil))
		return
	}

	var req SettingRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	setting.Key = req.Key
	setting.Value = req.Value

	if err := model.UpdateSetting(setting); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(setting))
}

// @Summary Delete Setting
// @Description Delete setting by ID
// @Tags Setting
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Setting ID"
// @Success 200 {object} model.CommonResponse
// @Router /api/settings/{id} [delete]
func DeleteSetting(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	setting, err := model.GetSettingByID(int64(id))

	if err == nil && setting.Eid == config.GetEID(c) {
		err = model.DeleteSettingByID(int64(id))
	}

	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}

// @Summary Get Settings
// @Description Get all settings for current enterprise
// @Tags Setting
// @Accept json
// @Produce json
// @Security BearerAuth
// @Success 200 {object} model.CommonResponse
// @Router /api/settings [get]
func GetSettings(c *gin.Context) {
	settings, err := model.GetSettingsByEid(config.GetEID(c))
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(settings))
}

// @Summary Get Settings by Group
// @Description Get settings by group name
// @Tags Setting
// @Accept json
// @Produce json
// @Param group_name path string true "Group name (third_party_statistic)"
// @Success 200 {object} model.CommonResponse
// @Router /api/settings/group/{group_name} [get]
func GetSettingsByGroup(c *gin.Context) {
	groupName := c.Param("group_name")
	settings, err := model.GetSettingsBySettingsGroup(config.GetEID(c), groupName)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(settings))
}
