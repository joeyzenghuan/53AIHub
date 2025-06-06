package controller

import (
	"net/http"
	"strconv"

	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

// DepartmentRequest represents the request body for department operations
type DepartmentRequest struct {
	PDID int64  `json:"pdid"`
	Name string `json:"name" binding:"required"`
	Sort int    `json:"sort"`
}

type UpdateDepartmentRequest struct {
	Name string `json:"name" binding:"required"`
	Sort int    `json:"sort"`
}

// DepartmentResponse represents the response for department list
type DepartmentResponse struct {
	Departments []*model.Department `json:"departments"`
	Total       int                 `json:"total"`
}

// DepartmentTreeResponse represents the response for department tree
type DepartmentTreeResponse struct {
	Tree []*model.DepartmentNode `json:"tree"`
}

// CreateDepartment creates a new department
// @Summary Create a new department
// @Description Create a new department in the organization
// @Tags Department
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param request body DepartmentRequest true "Department information"
// @Success 200 {object} model.CommonResponse{data=model.Department} "Success"
// @Failure 400 {object} model.CommonResponse "Bad request"
// @Failure 500 {object} model.CommonResponse "Internal server error"
// @Router /api/departments [post]
func CreateDepartment(c *gin.Context) {
	var req DepartmentRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	// Create department object
	dept := &model.Department{
		PDID: req.PDID,
		EID:  config.GetEID(c),
		Name: req.Name,
		Sort: req.Sort,
		From: model.DepartmentFromBackend,
	}

	// Create department in database
	if err := model.CreateDepartment(dept); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(dept))
}

// GetDepartment retrieves a department by ID
// @Summary Get department by ID
// @Description Get department details by ID
// @Tags Department
// @Produce json
// @Security BearerAuth
// @Param did path int true "Department ID"
// @Success 200 {object} model.CommonResponse{data=model.Department} "Success"
// @Failure 404 {object} model.CommonResponse "Department not found"
// @Failure 500 {object} model.CommonResponse "Internal server error"
// @Router /api/departments/{did} [get]
func GetDepartment(c *gin.Context) {
	didStr := c.Param("did")
	did, err := strconv.ParseInt(didStr, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	dept, err := model.GetDepartmentByID(config.GetEID(c), did)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(dept))
}

// UpdateDepartment updates an existing department
// @Summary Update department
// @Description Update an existing department
// @Tags Department
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param did path int true "Department ID"
// @Param request body UpdateDepartmentRequest true "Department information"
// @Success 200 {object} model.CommonResponse{data=model.Department} "Success"
// @Failure 400 {object} model.CommonResponse "Bad request"
// @Failure 404 {object} model.CommonResponse "Department not found"
// @Failure 500 {object} model.CommonResponse "Internal server error"
// @Router /api/departments/{did} [put]
func UpdateDepartment(c *gin.Context) {
	didStr := c.Param("did")
	did, err := strconv.ParseInt(didStr, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	var req UpdateDepartmentRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	// Get existing department
	dept, err := model.GetDepartmentByID(config.GetEID(c), did)
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(err))
		return
	}

	// Update department fields
	dept.Name = req.Name
	dept.Sort = req.Sort

	// Update department in database
	if err := model.UpdateDepartment(dept); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(dept))
}

// DeleteDepartment deletes a department
// @Summary Delete department
// @Description Delete a department and optionally its children
// @Tags Department
// @Produce json
// @Security BearerAuth
// @Param did path int true "Department ID"
// @Param delete_children query bool false "Delete children" default(false)
// @Success 200 {object} model.CommonResponse "Success"
// @Failure 400 {object} model.CommonResponse "Bad request"
// @Failure 404 {object} model.CommonResponse "Department not found"
// @Failure 500 {object} model.CommonResponse "Internal server error"
// @Router /api/departments/{did} [delete]
func DeleteDepartment(c *gin.Context) {
	didStr := c.Param("did")
	did, err := strconv.ParseInt(didStr, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	deleteChildrenStr := c.DefaultQuery("delete_children", "false")
	deleteChildren := deleteChildrenStr == "true"

	if err := model.DeleteDepartment(config.GetEID(c), did, deleteChildren); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}

// GetDepartments retrieves all departments
// @Summary Get all departments
// @Description Get all departments for the current enterprise
// @Tags Department
// @Produce json
// @Security BearerAuth
// @Param keyword query string false "Search keyword"
// @Param limit query int false "Limit results" default(100)
// @Success 200 {object} model.CommonResponse{data=DepartmentResponse} "Success"
// @Failure 500 {object} model.CommonResponse "Internal server error"
// @Router /api/departments [get]
func GetDepartments(c *gin.Context) {
	keyword := c.Query("keyword")
	limitStr := c.DefaultQuery("limit", "100")
	limit, _ := strconv.Atoi(limitStr)

	departments, err := model.SearchDepartments(config.GetEID(c), keyword, limit)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(DepartmentResponse{
		Departments: departments,
		Total:       len(departments),
	}))
}

// GetChildDepartments retrieves child departments
// @Summary Get child departments
// @Description Get all child departments for a specific department
// @Tags Department
// @Produce json
// @Security BearerAuth
// @Param pdid path int true "Parent Department ID"
// @Success 200 {object} model.CommonResponse{data=DepartmentResponse} "Success"
// @Failure 400 {object} model.CommonResponse "Bad request"
// @Failure 500 {object} model.CommonResponse "Internal server error"
// @Router /api/departments/children/{pdid} [get]
func GetChildDepartments(c *gin.Context) {
	pdidStr := c.Param("pdid")
	pdid, err := strconv.ParseInt(pdidStr, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	departments, err := model.GetChildDepartments(config.GetEID(c), pdid)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(DepartmentResponse{
		Departments: departments,
		Total:       len(departments),
	}))
}

// GetDepartmentTree retrieves the department hierarchy
// @Summary Get department tree
// @Description Get hierarchical structure of departments
// @Tags Department
// @Produce json
// @Security BearerAuth
// @Success 200 {object} model.CommonResponse{data=DepartmentTreeResponse} "Success"
// @Failure 500 {object} model.CommonResponse "Internal server error"
// @Router /api/departments/tree [get]
func GetDepartmentTree(c *gin.Context) {
	tree, err := model.GetDepartmentTree(config.GetEID(c))
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(DepartmentTreeResponse{
		Tree: tree,
	}))
}
