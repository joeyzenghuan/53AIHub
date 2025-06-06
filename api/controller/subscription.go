package controller

import (
	"net/http"

	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

// BatchSubscriptionRelation defines the subscription relation request structure
// BatchSubscriptionRelation represents a subscription relation in batch operations
// @Description Contains pricing and duration information for a subscription plan
type BatchSubscriptionRelation struct {
	// @Description Unique identifier for the subscription relation, 0 for new relation
	// @Example 1
	RelationId int64 `json:"relation_id" example:"1" description:"Relation ID"`
	// @Description Amount in cents/pennies for the subscription
	// @Example 9900
	Amount int64 `json:"amount" example:"1000" description:"Amount in cents/pennies"`
	// @Description Currency type for the subscription amount
	// @Enum CNY,USD
	// @Example CNY
	Currency string `json:"currency" example:"CNY" description:"Currency type: CNY/USD"`
	// @Description Time unit for subscription duration
	// @Enum year,month,week,day,quarter
	// @Example month
	TimeUnit string `json:"time_unit" example:"month" description:"Time unit: year/month/week/day/quarter"`
	// @Description Type of subscription
	// @Enum 1,2
	// @Example 1
	// @Description 1=Fee subscription, 2=Points subscription
	Type uint `json:"type" example:"1" description:"Subscription type: 1=Fee/2=Points"`
}

// BatchSubscriptionItem defines the subscription item request structure
// BatchSubscriptionItem represents a subscription item in batch operations
// @Description Contains group and subscription settings information for batch operations
type BatchSubscriptionItem struct {
	// @Description Group identifier, use 0 to create new group
	// @Example 1
	GroupId int64 `json:"group_id" example:"1" description:"Group ID, 0 for new group"`
	// @Description Name of the subscription group
	// @Example Premium Subscription
	GroupName string `json:"group_name" example:"VIP Group" description:"Group name"`
	// @Description Display order for the group
	// @Example 100
	Sort int64 `json:"sort" example:"1" description:"Sort order for display"`
	// @Description Setting identifier, use 0 to create new setting
	// @Example 1
	SettingId int64 `json:"setting_id" example:"1" description:"Setting ID, 0 for new setting"`
	// @Description URL for the subscription logo image
	// @Example https://example.com/subscription-logo.png
	LogoUrl string `json:"logo_url" example:"http://example.com/logo.png" description:"Logo URL"`
	// @Description Whether AI features are enabled for this subscription
	// @Example true
	AiEnabled bool `json:"ai_enabled" example:"true" description:"Whether AI features are enabled"`
	// @Description Whether to delete this subscription item
	// @Example false
	Delete bool `json:"delete" example:"false" description:"Whether to delete this item"`
	// @Description List of subscription relations for this item
	Relations []BatchSubscriptionRelation `json:"relations" description:"List of subscription relations"`
}

// BatchSubscriptionRequest defines the batch operation request structure
// BatchSubscriptionRequest represents the request structure for batch operations
// @Description Request structure for batch creating, updating or deleting subscription settings
type BatchSubscriptionRequest struct {
	// @Description List of subscription items to process
	Items []BatchSubscriptionItem `json:"items" description:"List of subscription items"`
}

// GetSubscriptionSettingsRequest defines the query request structure
type GetSubscriptionSettingsRequest struct {
	Offset int `form:"offset" json:"offset" example:"0" description:"Pagination offset"`
	Limit  int `form:"limit" json:"limit" example:"10" description:"Pagination limit"`
}

// SubscriptionSettingsResponse defines the query response structure
type SubscriptionSettingsResponse struct {
	Count    int64                                 `json:"count" description:"Total number of records"`
	Settings []model.SubscriptionSettingWithAgents `json:"settings" description:"List of subscription settings with agents"`
}

// @Summary Batch operation for subscription settings
// @Description Batch create, update or delete subscription settings
// @Tags Subscription
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param request body BatchSubscriptionRequest true "Batch operation request"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/subscriptions/batch [post]
func BatchSubscriptionOperation(c *gin.Context) {
	var req BatchSubscriptionRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	// Start transaction
	tx := model.DB.Begin()
	if tx.Error != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(tx.Error))
		return
	}

	eid := config.GetEID(c)
	userId := config.GetUserId(c)

	for _, item := range req.Items {
		// Delete operation
		if item.Delete {
			if item.GroupId > 0 {
				// Delete relations
				if err := tx.Where("setting_id = ?", item.SettingId).Delete(&model.SubscriptionRelation{}).Error; err != nil {
					tx.Rollback()
					c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
					return
				}

				// Delete settings
				if err := tx.Where("setting_id = ?", item.SettingId).Delete(&model.SubscriptionSetting{}).Error; err != nil {
					tx.Rollback()
					c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
					return
				}

				// Delete group
				if err := tx.Where("group_id = ?", item.GroupId).Delete(&model.Group{}).Error; err != nil {
					tx.Rollback()
					c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
					return
				}
			}
			continue
		}

		// Create or update group
		var groupId int64 = item.GroupId
		if groupId == 0 {
			// Create new group
			group := model.Group{
				Eid:       eid,
				CreatedBy: userId,
				GroupName: item.GroupName,
				GroupType: model.USER_GROUP_TYPE, // Fixed as 1
				Sort:      item.Sort,
			}

			if err := tx.Create(&group).Error; err != nil {
				tx.Rollback()
				c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
				return
			}

			groupId = group.GroupId
		} else {
			// Update existing group
			group := model.Group{
				GroupName: item.GroupName,
				Sort:      item.Sort,
			}
			if err := tx.Model(&model.Group{}).Where("group_id =?", groupId).Updates(group).Error; err != nil {
				tx.Rollback()
				c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
				return
			}
		}

		// Create or update subscription settings
		var setting model.SubscriptionSetting
		if item.SettingId > 0 {
			// Update existing settings
			if err := tx.Where("setting_id = ?", item.SettingId).First(&setting).Error; err != nil {
				tx.Rollback()
				c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
				return
			}

			setting.GroupId = groupId
			setting.LogoUrl = item.LogoUrl
			setting.AiEnabled = item.AiEnabled

			if err := tx.Save(&setting).Error; err != nil {
				tx.Rollback()
				c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
				return
			}
		} else {
			// Create new settings
			setting = model.SubscriptionSetting{
				GroupId:   groupId,
				LogoUrl:   item.LogoUrl,
				AiEnabled: item.AiEnabled,
			}

			if err := tx.Create(&setting).Error; err != nil {
				tx.Rollback()
				c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
				return
			}
		}

		// Delete old relations
		if err := tx.Where("setting_id = ?", setting.SettingId).Delete(&model.SubscriptionRelation{}).Error; err != nil {
			tx.Rollback()
			c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
			return
		}

		// Create new relations
		for _, relationItem := range item.Relations {
			relation := model.SubscriptionRelation{
				SettingId: setting.SettingId,
				Amount:    relationItem.Amount,
				Currency:  relationItem.Currency,
				TimeUnit:  relationItem.TimeUnit,
				Type:      relationItem.Type,
			}

			if err := tx.Create(&relation).Error; err != nil {
				tx.Rollback()
				c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
				return
			}
		}
	}

	// Commit transaction
	if err := tx.Commit().Error; err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}

// @Summary Get subscription settings list
// @Description Get all subscription settings with their groups, agents and relations
// @Tags Subscription
// @Accept json
// @Produce json
// @Param offset query int false "Offset for pagination" example:"0"
// @Param limit query int false "Limit for pagination" example:"10"
// @Success 200 {object} model.CommonResponse{data=SubscriptionSettingsResponse} "Success"
// @Router /api/subscriptions/settings [get]
func GetSubscriptionList(c *gin.Context) {
	var req GetSubscriptionSettingsRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	offset := req.Offset
	limit := req.Limit
	if limit <= 0 {
		limit = 10
	}
	eid := config.GetEID(c)
	settings, count, err := model.GetSubscriptionSettingsWithAgents(eid, offset, limit)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	response := SubscriptionSettingsResponse{
		Count:    count,
		Settings: settings,
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(response))
}
