package controller

import (
	"encoding/json"
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

type UpdateDefaultLinksRequest struct {
	Links []LinkItem `json:"links"` // 网站配置列表
}

type LinkItem struct {
	AILink model.AILinkInfo `json:"ai_link"` // AI 链接信息
	Delete bool             `json:"delete" example:"false" description:"Whether to delete this link"`
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

// @Summary Get setting by key
// @Description Retrieve a specific setting by its key
// @Tags Setting
// @Produce json
// @Security BearerAuth
// @Param key path string true "Setting key"
// @Success 200 {object} model.CommonResponse
// @Router /api/settings/key/{key} [get]
func GetSettingByKey(c *gin.Context) {
	key := c.Param("key")
	user, err := model.GetLoginUser(c)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.UnauthorizedError.ToResponse(err))
		return
	}
	setting, err := model.GetSettingByEidAndKey(user.Eid, key)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	if setting == nil {
		c.JSON(http.StatusOK, model.Success.ToResponse(nil))
		return
	}
	c.JSON(http.StatusOK, model.Success.ToResponse(setting))
}

// @Summary 批量更新默认提示词链接
// @Description 更新默认提示词链接，支持增删改操作
// @Tags Setting
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param request body UpdateDefaultLinksRequest true "默认提示词链接列表"
// @Success 200 {object} model.CommonResponse "成功"
// @Router /api/settings/default_links [post]
func BatchUpdateDefaultPromptLinks(c *gin.Context) {
	var req UpdateDefaultLinksRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	eid := config.GetEID(c)

	// 获取当前设置
	setting, err := model.GetSettingByEidAndKey(eid, string(model.DefaultPromptLinks))
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	var links []model.AILink
	if setting != nil {
		// 解析现有的 JSON 数据
		if err := json.Unmarshal([]byte(setting.Value), &links); err != nil {
			c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
			return
		}
	}

	// 更新链接列表
	updatedLinks := []model.AILinkInfo{}
	for _, linkItem := range req.Links {
		if linkItem.Delete {
			// 删除操作：跳过删除的链接
			continue
		}
		updatedLinks = append(updatedLinks, linkItem.AILink)
	}

	// 保存更新后的数据
	linksJSON, err := json.Marshal(updatedLinks)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	if setting == nil {
		// 如果设置不存在，则创建新设置
		setting = &model.Setting{
			Eid:   eid,
			Key:   string(model.DefaultPromptLinks),
			Value: string(linksJSON),
		}
		if err := model.CreateSetting(setting); err != nil {
			c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
			return
		}
	} else {
		// 更新现有设置
		setting.Value = string(linksJSON)
		if err := model.UpdateSetting(setting); err != nil {
			c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
			return
		}
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}

// @Summary Get Default Prompt Links
// @Description Retrieve the default website configuration stored in settings
// @Tags Setting
// @Produce json
// @Security BearerAuth
// @Success 200 {object} model.CommonResponse{data=[]model.AILink} "Default website configuration"
// @Router /api/settings/default_links [get]
func GetDefaultPromptLinks(c *gin.Context) {
	eid := config.GetEID(c)
	links, err := model.GetDefaultPromptLinks(eid)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(links))
}
