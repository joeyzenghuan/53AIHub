package controller

import (
	"net/http"
	"strconv"

	"github.com/53AI/53AIHub/model"
	"github.com/53AI/53AIHub/service/hub_adaptor/dify"
	"github.com/gin-gonic/gin"
	"github.com/songquanpeng/one-api/common/logger"
	"github.com/songquanpeng/one-api/relay/meta"
)

// GetDifyAppInfo 获取 DIFY 应用基本信息
// @Summary 获取 DIFY 应用基本信息
// @Description 根据渠道ID获取 DIFY 应用的基本信息
// @Tags DIFY
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param channelId path int true "渠道ID"
// @Success 200 {object} model.CommonResponse{data=dify.AppInfoResponse}
// @Router /api/dify/info/{channelId} [get]
func GetDifyAppInfo(c *gin.Context) {
	channelIdStr := c.Param("channelId")
	channelId, err := strconv.ParseInt(channelIdStr, 10, 64)
	if err != nil {
		logger.SysErrorf("解析渠道ID失败: %v", err)
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("无效的渠道ID"))
		return
	}

	logger.SysLogf("🔍 获取DIFY应用信息 - 渠道ID: %d", channelId)

	// 获取渠道信息
	channel, err := model.GetChannelByID(channelId)
	if err != nil {
		logger.SysErrorf("获取渠道信息失败: %v", err)
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse("渠道不存在"))
		return
	}

	// 验证渠道类型
	if channel.Type != model.ChannelApiDify {
		logger.SysErrorf("渠道类型不匹配: 期望 %d, 实际 %d", model.ChannelApiDify, channel.Type)
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("渠道类型不是DIFY"))
		return
	}

	// 构建元数据
	meta := &meta.Meta{
		ChannelId: int(channelId),
		APIKey:    channel.Key,
	}
	if channel.BaseURL != nil {
		meta.BaseURL = *channel.BaseURL
	}

	// 创建适配器并获取应用信息
	adaptor := &dify.DifyInfoAdaptor{}
	appInfo, err := adaptor.GetAppInfo(meta)
	if err != nil {
		logger.SysErrorf("获取DIFY应用信息失败: %v", err)
		c.JSON(http.StatusInternalServerError, model.SystemError.ToResponse(err))
		return
	}

	logger.SysLogf("✅ DIFY应用信息获取成功 - 应用名称: %s", appInfo.Name)
	c.JSON(http.StatusOK, model.Success.ToResponse(appInfo))
}

// GetDifyAppParameters 获取 DIFY 应用参数配置
// @Summary 获取 DIFY 应用参数配置
// @Description 根据渠道ID获取 DIFY 应用的参数配置信息
// @Tags DIFY
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param channelId path int true "渠道ID"
// @Success 200 {object} model.CommonResponse{data=dify.AppParametersResponse}
// @Router /api/dify/parameters/{channelId} [get]
func GetDifyAppParameters(c *gin.Context) {
	channelIdStr := c.Param("channelId")
	channelId, err := strconv.ParseInt(channelIdStr, 10, 64)
	if err != nil {
		logger.SysErrorf("解析渠道ID失败: %v", err)
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("无效的渠道ID"))
		return
	}

	logger.SysLogf("🔍 获取DIFY应用参数 - 渠道ID: %d", channelId)

	// 获取渠道信息
	channel, err := model.GetChannelByID(channelId)
	if err != nil {
		logger.SysErrorf("获取渠道信息失败: %v", err)
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse("渠道不存在"))
		return
	}

	// 验证渠道类型
	if channel.Type != model.ChannelApiDify {
		logger.SysErrorf("渠道类型不匹配: 期望 %d, 实际 %d", model.ChannelApiDify, channel.Type)
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse("渠道类型不是DIFY"))
		return
	}

	// 构建元数据
	meta := &meta.Meta{
		ChannelId: int(channelId),
		APIKey:    channel.Key,
	}
	if channel.BaseURL != nil {
		meta.BaseURL = *channel.BaseURL
	}

	// 创建适配器并获取应用参数
	adaptor := &dify.DifyInfoAdaptor{}
	appParams, err := adaptor.GetAppParameters(meta)
	if err != nil {
		logger.SysErrorf("获取DIFY应用参数失败: %v", err)
		c.JSON(http.StatusInternalServerError, model.SystemError.ToResponse(err))
		return
	}

	logger.SysLogf("✅ DIFY应用参数获取成功 - 输入表单项数: %d", len(appParams.UserInputForm))
	c.JSON(http.StatusOK, model.Success.ToResponse(appParams))
}
