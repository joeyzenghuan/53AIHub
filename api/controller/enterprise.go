package controller

import (
	"net/http"
	"strconv"

	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

// Compare behavior snippet from 53AIHub/model/enterprise.go:
// resulf api
type EnterpriseResponse struct {
	Enterprise model.Enterprise `json:"enterprise"`
}

// Compare behavior snippet from 53AIHub/model/enterprise.go:
// resulf api

// @Summary Get enterprise information
// @Description Retrieve detailed information of a specific enterprise by ID
// @Tags Enterprise
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Enterprise ID"
// @Success 200 {object} model.Enterprise "Enterprise information"
// @Router /api/enterprises/{id} [get]
func GetEnterprise(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil || id <= 0 {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	enterprise, err := model.GetEnterpriseModel(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.NotFound.ToResponse(nil))
		return
	}
	c.JSON(http.StatusOK, model.Success.ToResponse(EnterpriseResponse{
		Enterprise: *enterprise,
	}))
}

// CreateEnterprise handles enterprise creation
// @Summary      Create a new enterprise
// @Tags         Enterprise
// @Accept       json
// @Produce      json
// @Security BearerAuth
// @Param        enterprise  body   model.Enterprise  true  "Enterprise data"
// @Success      200  {object}  model.CommonResponse{data=EnterpriseResponse}  "Success"
// @Router       /api/enterprises [post]
func CreateEnterprise(c *gin.Context) {
	enterprise := model.Enterprise{}
	err := c.ShouldBindJSON(&enterprise)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}
	err = model.CreateEnterpriseModel(&enterprise)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.SystemError.ToResponse(nil))
		return
	}
	c.JSON(http.StatusOK, model.Success.ToResponse(EnterpriseResponse{
		Enterprise: enterprise,
	}))
}

// UpdateEnterpriseRequest defines the request structure for updating enterprise information
type UpdateEnterpriseRequest struct {
	DisplayName  string `json:"display_name" binding:"required" example:"Enterprise Name"`
	Logo         string `json:"logo" binding:"required" example:"http://a.com/a.jpg"`
	Ico          string `json:"ico" example:"http://a.com/favicon.ico"`
	Keywords     string `json:"keywords" example:"AI,Hub,Agent"`
	Copyright    string `json:"copyright" example:"© 2023 Company Name"`
	Type         string `json:"type" example:"independent、enterprise、industry"`
	Banner       string `json:"banner" example:"http://a.com/banner.jpg"`
	Language     string `json:"language" binding:"required" example:"zh-cn"`
	Description  string `json:"description" example:"Description Test"`
	TemplateType string `json:"template_type" example:"default"`
	LayoutType   string `json:"layout_type" example:"1"`
}

// @Summary Update enterprise information
// @Description Update enterprise information
// @Tags Enterprise
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param request body UpdateEnterpriseRequest true "Enterprise information"
// @Success 200 {object} model.CommonResponse
// @Router /api/enterprise [put]
func UpdateEnterprise(c *gin.Context) {
	var req UpdateEnterpriseRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	currentEid := config.GetEID(c)
	if currentEid <= 0 {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	enterprise, err := model.GetEnterpriseModel(currentEid)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.NotFound.ToResponse(nil))
		return
	}

	enterprise.DisplayName = req.DisplayName
	enterprise.Logo = req.Logo
	enterprise.Ico = req.Ico
	enterprise.Keywords = req.Keywords
	enterprise.Copyright = req.Copyright
	enterprise.Type = req.Type
	enterprise.Language = req.Language
	enterprise.Description = req.Description

	if err := enterprise.Update(); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(enterprise))
}

// DeleteEnterprise handles enterprise deletion
// @Summary      Delete an enterprise
// @Description  Delete an existing enterprise by ID
// @Tags         Enterprise
// @Accept       json
// @Produce      json
// @Security BearerAuth
// @Param        id  path  int  true  "Enterprise ID"
// @Success      200  {object}  model.CommonResponse  "Success"
// @Router       /api/enterprises/{id} [delete]
func DeleteEnterprise(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}
	enterprise, err := model.GetEnterpriseModel(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.NotFound.ToResponse(nil))
		return
	}

	err = enterprise.Delete()
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(nil))
		return
	}
	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}

// UpdateEnterpriseAttribute handles partial update of enterprise attributes
// @Summary      Partial update of enterprise attributes
// @Description  Update specific attributes of an existing enterprise by ID
// @Tags         Enterprise
// @Accept       json
// @Produce      json
// @Security BearerAuth
// @Param        id  path  int  true  "Enterprise ID"
// @Param        updateData  body  map[string]interface{}  true  "Update data for enterprise attributes"
// @Success      200  {object}  model.CommonResponse{data=EnterpriseResponse} "Success"
// @Router       /api/enterprises/{id} [patch]
func UpdateEnterpriseAttribute(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	enterprise, err := model.GetEnterpriseModel(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.NotFound.ToResponse(nil))
		return
	}

	var updateData map[string]interface{}
	if err := c.ShouldBindJSON(&updateData); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	if err := enterprise.PartialUpdateEnterprise(updateData); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(nil))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(EnterpriseResponse{
		Enterprise: *enterprise,
	}))
}

// @Summary Get current enterprise information
// @Description Retrieve information of current enterprise (when not logged in)
// @Tags Enterprise
// @Accept json
// @Produce json
// @Success 200 {object} model.Enterprise "Current enterprise information"
// @Router /api/enterprises/current [get]
func GetCurrentEnterprise(c *gin.Context) {
	// Get default enterprise ID
	currentEid := config.GetEID(c)
	if currentEid <= 0 {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}
	enterprise, err := model.GetEnterpriseModel(currentEid)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.NotFound.ToResponse(nil))
		return
	}
	c.JSON(http.StatusOK, model.Success.ToResponse(EnterpriseResponse{
		Enterprise: *enterprise,
	}))
}

type GetIsSaasResponse struct {
	IsSaas bool `json:"is_saas" example:"true"` // Whether the system is running in SAAS mode
}

// GetIsSaas retrieves the system's SAAS mode status
// @Summary Get SAAS mode status
// @Description Get whether the system is running in SAAS mode
// @Tags Enterprise
// @Accept json
// @Produce json
// @Security BearerAuth
// @Success 200 {object} model.CommonResponse{data=GetIsSaasResponse} "Success"
// @Router /api/enterprises/is_saas [get]
func GetIsSaas(c *gin.Context) {
	c.JSON(http.StatusOK, model.Success.ToResponse(GetIsSaasResponse{
		IsSaas: config.IS_SAAS,
	}))
}

type HomePageResponse struct {
	AgentCount int64 `json:"agent_count"`
	UserCount  int64 `json:"user_count"`
}

// GetHomePage retrieves homepage information
// @Summary Get homepage information
// @Description Get site application info, enterprise info, agent count and user count
// @Tags Enterprise
// @Accept json
// @Produce json
// @Security BearerAuth
// @Success 200 {object} model.CommonResponse{data=HomePageResponse} "Success"
// @Router /api/enterprises/homepage [get]
func GetHomePage(c *gin.Context) {
	eid := config.GetEID(c)
	if eid <= 0 {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	var agentCount int64
	if err := model.DB.Model(&model.Agent{}).Where("eid = ?", eid).Count(&agentCount).Error; err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	var userCount int64
	if err := model.DB.Model(&model.User{}).Where("eid = ? AND role = ?", eid, model.RoleCommonUser).Count(&userCount).Error; err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(HomePageResponse{
		AgentCount: agentCount,
		UserCount:  userCount,
	}))
}

// @Summary Get enterprise banner
// @Description Get banner information of the current enterprise
// @Tags Enterprise
// @Accept json
// @Produce json
// @Security BearerAuth
// @Success 200 {object} model.CommonResponse
// @Router /api/enterprises/banner [get]
func GetEnterpriseBanner(c *gin.Context) {
	currentEid := config.GetEID(c)
	if currentEid <= 0 {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	enterprise, err := model.GetEnterpriseModel(currentEid)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.NotFound.ToResponse(nil))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(map[string]string{
		"banner": enterprise.Banner,
	}))
}

type UpdateEnterpriseBannerRequest struct {
	Banner string `json:"banner" binding:"required" example:"http://a.com/banner.jpg"`
}

// @Summary Update enterprise banner
// @Description Update banner information of the current enterprise
// @Tags Enterprise
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param request body UpdateEnterpriseBannerRequest true "Banner information"
// @Success 200 {object} model.CommonResponse
// @Router /api/enterprises/banner [put]
func UpdateEnterpriseBanner(c *gin.Context) {
	var req UpdateEnterpriseBannerRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	currentEid := config.GetEID(c)
	if currentEid <= 0 {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	enterprise, err := model.GetEnterpriseModel(currentEid)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.NotFound.ToResponse(nil))
		return
	}

	// Update Banner
	updateData := map[string]interface{}{
		"banner": req.Banner,
	}

	if err := enterprise.PartialUpdateEnterprise(updateData); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(map[string]string{
		"banner": req.Banner,
	}))
}

type UpdateEnterpriseTemplateTypeRequest struct {
	TemplateType string `json:"template_type" binding:"required" example:"default"`
}

// @Summary Update enterprise template type
// @Description Update template type information of the current enterprise
// @Tags Enterprise
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param request body UpdateEnterpriseTemplateTypeRequest true "Template type information"
// @Success 200 {object} model.CommonResponse
// @Router /api/enterprises/template_type [put]
func UpdateEnterpriseTemplateType(c *gin.Context) {
	var req UpdateEnterpriseTemplateTypeRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	currentEid := config.GetEID(c)
	if currentEid <= 0 {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	enterprise, err := model.GetEnterpriseModel(currentEid)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.NotFound.ToResponse(nil))
		return
	}

	// Update template type
	updateData := map[string]interface{}{
		"template_type": req.TemplateType,
	}

	if err := enterprise.PartialUpdateEnterprise(updateData); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(map[string]string{
		"template_type": req.TemplateType,
	}))
}

// @Summary Get enterprise template type
// @Description Get template type information of the current enterprise
// @Tags Enterprise
// @Accept json
// @Produce json
// @Security BearerAuth
// @Success 200 {object} model.CommonResponse
// @Router /api/enterprises/template_type [get]
func GetEnterpriseTemplateType(c *gin.Context) {
	currentEid := config.GetEID(c)
	if currentEid <= 0 {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	enterprise, err := model.GetEnterpriseModel(currentEid)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.NotFound.ToResponse(nil))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(map[string]string{
		"template_type": enterprise.TemplateType,
	}))
}
