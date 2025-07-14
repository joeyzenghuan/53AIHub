package controller

import (
	"fmt"
	"net/http"
	"strconv"
	"time"

	"github.com/53AI/53AIHub/common"
	"github.com/53AI/53AIHub/common/logger"
	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/53AI/53AIHub/service"
	"github.com/gin-gonic/gin"
)

// @Summary Sync organization structure
// @Description Synchronize enterprise organization structure based on source
// @Tags Department
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param from path int true "Source identifier (1=WeCom)"
// @Param body body service.SyncOrganizationParams true "Sync parameters"
// @Success 200 {object} model.CommonResponse "Operation succeeded"
// @Failure 400 {object} model.CommonResponse "Parameter error"
// @Failure 500 {object} model.CommonResponse "Server error"
// @Router /api/departments/sync/{from} [post]
func SyncOrganization(c *gin.Context) {
	fromStr := c.Param("from")
	from, err := strconv.Atoi(fromStr)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}
	eid := config.GetEID(c)
	enterprise, err := model.GetEnterpriseByID(eid)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	var params service.SyncOrganizationParams
	if err = c.ShouldBindJSON(&params); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	lockKey := fmt.Sprintf("%s:%s:%d", model.LockOrganizationKeyPre, fromStr, enterprise.Eid)
	isLock := common.LOCKER.TryLock(lockKey, 60*5*time.Second)
	if !isLock {
		c.JSON(http.StatusNotFound, model.OperateTooFast.ToResponse(nil))
		return
	}

	switch from {
	case model.DepartmentFromWecom:
		go func() {
			err := service.WeComRunSyncOrganization(enterprise, params)
			if err != nil {
				logger.SysErrorf("sync organization from wecom failed: %v", err)
			}
		}()
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}
