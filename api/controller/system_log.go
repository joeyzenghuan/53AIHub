package controller

import (
	"net/http"

	"github.com/53AI/53AIHub/common/utils"
	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

// @Summary 获取所有系统日志模块定义
// @Description 返回模块值与描述的映射列表（风格对齐ai_link控制器）
// @Tags SystemLog
// @Accept json
// @Produce json
// @Security BearerAuth
// @Success 200 {object} model.CommonResponse{data=[]model.ModuleItem} "成功返回模块列表"
// @Router /api/system_logs/modules [get]
func GetModules(c *gin.Context) {
	// 无参数绑定，直接调用模型方法
	modules := model.GetAllModules()
	c.JSON(http.StatusOK, model.Success.ToResponse(modules))
}

// @Summary 获取所有系统日志动作定义
// @Description 返回动作值与描述的映射列表（风格对齐ai_link控制器）
// @Tags SystemLog
// @Accept json
// @Produce json
// @Security BearerAuth
// @Success 200 {object} model.CommonResponse{data=[]model.ActionItem} "成功返回动作列表"
// @Router /api/system_logs/actions [get]
func GetActions(c *gin.Context) {
	// 无参数绑定，直接调用模型方法
	actions := model.GetAllActions()
	c.JSON(http.StatusOK, model.Success.ToResponse(actions))
}

type CreateLogRequest struct {
	Action  uint8  `json:"action" binding:"required"`
	Content string `json:"content" binding:"required"`
}

// GetSystemLogsRequest 请求参数结构体
type GetSystemLogsRequest struct {
	Offset    int   `form:"offset" default:"0"`
	Limit     int   `form:"limit" default:"10"`
	StartTime int64 `form:"start_time"`
	EndTime   int64 `form:"end_time"`
	Module    int64 `form:"module"`
	Action    int64 `form:"action"`
	UserID    int64 `form:"user_id"`
}

type SystemLogsResponse struct {
	Count      int64              `json:"count"`
	SystemLogs []*model.SystemLog `json:"system_logs"`
}

// @Summary 获取当前站点系统日志
// @Description 根据eid、时间范围、分页及筛选条件获取系统日志
// @Tags SystemLog
// @Accept json
// @Produce json
// @Param offset query int false "offset" default(0)
// @Param limit query int false "每页数量" default(10)
// @Param start_time query int64 false "开始时间（毫秒时间戳）"
// @Param end_time query int64 false "结束时间（毫秒时间戳）"
// @Param module query string false "模块筛选（可选）"
// @Param action query string false "操作类型筛选（可选）"
// @Param user_id query int64 false "用户ID筛选（可选）"
// @Security BearerAuth
// @Success 200 {object} model.CommonResponse{data=SystemLogsResponse{}} "成功返回日志列表"
// @Failure 400 {object} model.CommonResponse "参数验证失败"
// @Failure 500 {object} model.CommonResponse "数据库操作失败"
// @Router /api/system_logs [get]
func GetSystemLogs(c *gin.Context) {
	var req GetSystemLogsRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToErrorResponse(err))
		return
	}

	eid := config.GetEID(c)
	logs, total, err := model.GetSystemLogsByConditions(
		eid,
		req.Module,
		req.Action,
		req.UserID,
		req.StartTime,
		req.EndTime,
		req.Offset,
		req.Limit,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToErrorResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(SystemLogsResponse{
		Count:      total,
		SystemLogs: logs,
	}))
}

// @Summary 创建系统日志
// @Description 根据用户ID和请求参数创建系统日志记录
// @Tags SystemLog
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param data body CreateLogRequest true "日志请求参数"
// @Success 200 {object} model.CommonResponse
// @Router /api/users/system_log [post]
func CreateSystemLogs(c *gin.Context) {
	userID := config.GetUserId(c)
	if userID == 0 {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	var req CreateLogRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToErrorResponse(err))
		return
	}

	eid := config.GetEID(c)
	user, err := model.GetUserByID(userID)
	if err != nil {
		c.JSON(http.StatusNotFound, model.DBError.ToResponse(err))
		return
	}
	ip := utils.GetClientIP(c)

	log := model.SystemLog{
		Eid:      eid,
		UserID:   userID,
		Nickname: user.Nickname,
		Module:   model.SystemLogModuleSystem,
		Action:   req.Action,
		Content:  req.Content,
		IP:       ip,
	}

	model.CreateSystemLog(&log)

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}
