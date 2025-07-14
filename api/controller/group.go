package controller

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/53AI/53AIHub/common/utils"
	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

type BaseGroupRequest struct {
	GroupName string `json:"group_name" example:"group_name"`
	Sort      int64  `json:"sort" example:"0"`
}

type GroupRequest struct {
	GroupType int64 `json:"group_type" example:"1"` // Group type: 1=USER_GROUP_TYPE, 2=AI_LINKS_TYPE, 3=AGENT_TYPE, 4=INTERNAL_USER_GROUP_TYPE， 5=SYSTEM_PROMPT_TYPE 6=PERSONAL_PROMPT_TYPE
	BaseGroupRequest
}

type BatchSubmitGroupRequestItem struct {
	GroupId int64 `json:"group_id" example:"0"`
	BaseGroupRequest
}

type BatchSubmitGroupsRequest struct {
	Groups []BatchSubmitGroupRequestItem `json:"groups"`
}

// @Summary Create a new group
// @Description Create a new group with the provided information
// @Tags Group
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param group body GroupRequest true "Group information (GroupType: 1=USER_GROUP_TYPE, 2=AI_LINKS_TYPE, 3=AGENT_TYPE, 4=INTERNAL_USER_GROUP_TYPE， 5=SYSTEM_PROMPT_TYPE 6=PERSONAL_PROMPT_TYPE)"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/groups [post]
// @Router /api/groups/prompt [post]
func CreateGroup(c *gin.Context) {
	var groupRequest GroupRequest
	if err := c.ShouldBindJSON(&groupRequest); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	path := c.Request.URL.Path
	if path == "/api/groups/prompt" {
		groupRequest.GroupType = model.PERSONAL_PROMPT_TYPE
	}

	group := model.Group{
		Eid:       config.GetEID(c),
		CreatedBy: config.GetUserId(c),
		GroupName: groupRequest.GroupName,
		GroupType: groupRequest.GroupType,
		Sort:      groupRequest.Sort,
	}
	if err := model.CreateGroup(&group); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(group))
}

// @Summary Get group information
// @Description Retrieve detailed information of a specific group by ID
// @Tags Group
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Group ID"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/groups/{id} [get]
func GetGroup(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	group, err := model.GetGroupByID(int64(id))
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(group))
}

// @Summary Update group information
// @Description Update an existing group with the provided information
// @Tags Group
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Group ID"
// @Param group body GroupRequest true "Group information to update"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/groups/{id} [put]
func UpdateGroup(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	var groupRequest GroupRequest
	if err = c.ShouldBindJSON(&groupRequest); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	group, err := model.GetGroupByID(int64(id))
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(err))
		return
	}

	if group.Eid != config.GetEID(c) {
		c.JSON(http.StatusForbidden, model.NotFound.ToResponse(nil))
		return
	}

	group.GroupName = groupRequest.GroupName
	group.GroupType = groupRequest.GroupType
	group.Sort = groupRequest.Sort

	if err := model.UpdateGroup(group); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(group))
}

// @Summary Delete a group
// @Description Delete a specific group by ID
// @Tags Group
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Group ID"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/groups/{id} [delete]
func DeleteGroup(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	group, err := model.GetGroupByID(int64(id))
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(err))
		return
	}

	if group.Eid != config.GetEID(c) {
		c.JSON(http.StatusForbidden, model.NotFound.ToResponse(nil))
		return
	}

	if err := model.DeleteGroupByID(int64(id)); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}

// @Summary Get groups by type
// @Description Retrieve a list of groups based on the specified type
// @Tags Group
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param group_type path int true "Group type"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/groups/type/{group_type} [get]
func GetGroups(c *gin.Context) {
	groupType, err := strconv.Atoi(c.Param("group_type"))
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	eid := config.GetEID(c)
	groups, err := model.GetGroupsByEid(eid, int64(groupType))
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}
	c.JSON(http.StatusOK, model.Success.ToResponse(groups))
}

// @Summary Get groups by type
// @Description Retrieve a list of groups based on the specified type
// @Tags Group
// @Accept json
// @Produce json
// @Param group_type path int true "Group type"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/groups/type/current/{group_type} [get]
func GetCurrentGroups(c *gin.Context) {
	groupType, err := strconv.Atoi(c.Param("group_type"))
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	if groupType == model.USER_GROUP_TYPE {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
	}

	eid := config.GetEID(c)
	groups, err := model.GetGroupsByEid(eid, int64(groupType))
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}
	c.JSON(http.StatusOK, model.Success.ToResponse(groups))
}

// @Summary Batch submit groups
// @Description Batch submit groups with the provided information
// @Tags Group
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param group_type path int true "Group type"
// @Param groups body BatchSubmitGroupsRequest true "Groups information to submit"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/groups/type/{group_type} [post]
func BatchSubmitGroups(c *gin.Context) {
	groupType, err := strconv.Atoi(c.Param("group_type"))
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	var request BatchSubmitGroupsRequest
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}
	eid := config.GetEID(c)
	var GroupModels []model.Group
	for _, group := range request.Groups {
		GroupModels = append(GroupModels, model.Group{
			GroupId:   group.GroupId,
			Eid:       eid,
			CreatedBy: config.GetUserId(c),
			GroupName: group.GroupName,
			GroupType: int64(groupType),
			Sort:      group.Sort,
		})
	}
	if err := model.BatchSubmitGroups(int64(groupType), eid, GroupModels); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	log := model.SystemLog{
		Eid:      eid,
		UserID:   config.GetUserId(c),
		Nickname: config.GetUserNickname(c),
		Module:   model.GetModuleByGroupType(int64(groupType)),
		Action:   model.SystemLogActionUpdate,
		Content:  fmt.Sprint("管理了分组"),
		IP:       utils.GetClientIP(c),
	}
	model.CreateSystemLog(&log)

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}

// AddAgentsToGroupRequest defines the request structure for adding Agents to a Group
type AddAgentsToGroupRequest struct {
	AgentIDs []int64 `json:"agent_ids" binding:"required" example:"1,2,3"` // Array of Agent IDs
}

// @Summary Add Agents to Group
// @Description Add multiple Agents to a specified Group
// @Tags Group
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Group ID"
// @Param request body AddAgentsToGroupRequest true "Array of Agent IDs"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/groups/{id}/agents [post]
func AddAgentsToGroup(c *gin.Context) {
	// Parse Group ID
	groupID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	// Get Group information, verify its existence
	group, err := model.GetGroupByID(int64(groupID))
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(err))
		return
	}

	// Verify enterprise permissions
	if group.Eid != config.GetEID(c) {
		c.JSON(http.StatusForbidden, model.NotFound.ToResponse(nil))
		return
	}

	// Parse request body
	var request AddAgentsToGroupRequest
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	// Begin transaction
	tx := model.DB.Begin()
	if tx.Error != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(tx.Error))
		return
	}

	// Batch create ResourcePermission records
	for _, agentID := range request.AgentIDs {
		permission := model.ResourcePermission{
			GroupID:      int64(groupID),
			ResourceID:   agentID,
			ResourceType: model.ResourceTypeAgent,
			Permission:   model.PermissionRead,
		}

		// Check if the same permission record already exists
		var count int64
		if err := tx.Model(&model.ResourcePermission{}).
			Where("group_id = ? AND resource_id = ? AND resource_type = ?",
				groupID, agentID, model.ResourceTypeAgent).
			Count(&count).Error; err != nil {
			tx.Rollback()
			c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
			return
		}

		// If it doesn't exist, create it
		if count == 0 {
			if err := tx.Create(&permission).Error; err != nil {
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

// RemoveAgentsFromGroupRequest defines the request structure for removing Agents from a Group
type RemoveAgentsFromGroupRequest struct {
	AgentIDs []int64 `json:"agent_ids" binding:"required" example:"1,2,3"` // Array of Agent IDs to remove
}

// @Summary Remove Agents from Group
// @Description Remove multiple Agents from a specified Group
// @Tags Group
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Group ID"
// @Param request body RemoveAgentsFromGroupRequest true "Array of Agent IDs to remove"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/groups/{id}/agents [delete]
func RemoveAgentsFromGroup(c *gin.Context) {
	// Parse Group ID
	groupID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	// Get Group information, verify its existence
	group, err := model.GetGroupByID(int64(groupID))
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(err))
		return
	}

	// Verify enterprise permissions
	if group.Eid != config.GetEID(c) {
		c.JSON(http.StatusForbidden, model.NotFound.ToResponse(nil))
		return
	}

	// Parse request body
	var request RemoveAgentsFromGroupRequest
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	// If AgentIDs is empty, return success directly
	if len(request.AgentIDs) == 0 {
		c.JSON(http.StatusOK, model.Success.ToResponse(nil))
		return
	}

	// Begin transaction
	tx := model.DB.Begin()
	if tx.Error != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(tx.Error))
		return
	}

	// Batch delete ResourcePermission records
	if err := tx.Where("group_id = ? AND resource_id IN ? AND resource_type = ?",
		groupID, request.AgentIDs, model.ResourceTypeAgent).
		Delete(&model.ResourcePermission{}).Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	// Commit transaction
	if err := tx.Commit().Error; err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}

// GroupAgentListRequest defines the request structure for getting agent list in a group
type GroupAgentListRequest struct {
	Keyword string `form:"keyword"` // Search keyword for agent name
	Offset  int    `form:"offset"`  // Pagination offset
	Limit   int    `form:"limit"`   // Items per page
}

// GroupAgentListResponse defines the response structure for getting agent list in a group
type GroupAgentListResponse struct {
	Count  int64         `json:"count"`  // Total count of agents
	Agents []model.Agent `json:"agents"` // List of agents
}

// @Summary Get all Agents in a Group
// @Description Get all Agent information associated with a specified Group, sorted in descending order
// @Tags Group
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Group ID"
// @Param keyword query string false "Agent name keyword for fuzzy search"
// @Param offset query int false "Pagination offset" default(0)
// @Param limit query int false "Pagination limit" default(10)
// @Success 200 {object} model.CommonResponse{data=GroupAgentListResponse} "Success"
// @Router /api/groups/{id}/agents [get]
func GetGroupAgents(c *gin.Context) {
	// Parse group ID
	groupID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	// Get group information, verify its existence
	group, err := model.GetGroupByID(int64(groupID))
	if err != nil {
		// c.JSON(http.StatusNotFound, model.NotFound.ToResponse(err))
		c.JSON(http.StatusOK, model.Success.ToResponse(&GroupUsersResponse{
			Total:       0,
			Permissions: make([]*model.ResourcePermission, 0),
		}))
		return
	}

	// Verify enterprise permissions
	if group.Eid != config.GetEID(c) {
		c.JSON(http.StatusForbidden, model.NotFound.ToResponse(nil))
		return
	}

	// Bind request parameters
	var req GroupAgentListRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	// Set default pagination parameters
	if req.Limit <= 0 {
		req.Limit = 10 // Default 10 items per page
	}
	if req.Offset < 0 {
		req.Offset = 0 // Offset cannot be negative
	}

	// Query all resource permission records associated with this group
	var permissions []model.ResourcePermission
	if err := model.DB.Where("group_id = ? AND resource_type = ?",
		groupID, model.ResourceTypeAgent).Find(&permissions).Error; err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	// If there are no associated agents, return an empty array
	if len(permissions) == 0 {
		c.JSON(http.StatusOK, model.Success.ToResponse(GroupAgentListResponse{
			Count:  0,
			Agents: []model.Agent{},
		}))
		return
	}

	// Extract all agent IDs
	var agentIDs []int64
	for _, perm := range permissions {
		agentIDs = append(agentIDs, perm.ResourceID)
	}

	// Build query
	query := model.DB.Model(&model.Agent{}).Where("agent_id IN ?", agentIDs)

	// If there is a keyword, add fuzzy search condition
	if req.Keyword != "" {
		query = query.Where("name LIKE ?", "%"+req.Keyword+"%")
	}

	// Get total count
	var total int64
	if err := query.Count(&total).Error; err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	// Apply pagination and get data
	var agents []model.Agent
	if err := query.Order("sort DESC").Offset(req.Offset).Limit(req.Limit).Find(&agents).Error; err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	// Return result
	c.JSON(http.StatusOK, model.Success.ToResponse(GroupAgentListResponse{
		Count:  total,
		Agents: agents,
	}))
}

// BatchAddUsersToGroupRequest defines the request structure for batch adding users to a group
type BatchAddUsersToGroupRequest struct {
	UserIDs       []int64 `json:"user_ids" example:"1,2,3"`       // Array of user IDs
	DepartmentIDs []int64 `json:"department_ids" example:"1,2,3"` // Array of department IDs
}

// @Summary Batch add users and departments to group
// @Description Add multiple users and departments to a specified group, either by department ID or by directly specifying user IDs
// @Tags Group
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Group ID"
// @Param request body BatchAddUsersToGroupRequest true "Array of department IDs, user IDs, and department IDs to add as resources"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/groups/{id}/users/batch [post]
func BatchAddUsersToGroup(c *gin.Context) {
	// Parse Group ID
	groupID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	// Get Group information, verify its existence
	group, err := model.GetGroupByID(int64(groupID))
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(err))
		return
	}

	// Verify enterprise permissions
	if group.Eid != config.GetEID(c) {
		c.JSON(http.StatusForbidden, model.NotFound.ToResponse(nil))
		return
	}

	// Parse request body
	var request BatchAddUsersToGroupRequest
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	// Begin transaction
	tx := model.DB.Begin()
	if tx.Error != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(tx.Error))
		return
	}

	// Process user resources
	if len(request.UserIDs) > 0 {
		// Collect all user IDs to be added
		allUserIDs := make([]int64, 0)

		// Add directly specified user IDs
		if len(request.UserIDs) > 0 {
			allUserIDs = append(allUserIDs, request.UserIDs...)
		}

		// Remove duplicates
		userIDMap := make(map[int64]bool)
		uniqueUserIDs := make([]int64, 0)
		for _, userID := range allUserIDs {
			if !userIDMap[userID] {
				uniqueUserIDs = append(uniqueUserIDs, userID)
				userIDMap[userID] = true
			}
		}

		// Batch create ResourcePermission records for users
		for _, userID := range uniqueUserIDs {
			permission := model.ResourcePermission{
				GroupID:      int64(groupID),
				ResourceID:   userID,
				ResourceType: model.ResourceTypeUser,
				Permission:   model.PermissionRead,
			}

			// Check if the same permission record already exists
			var count int64
			if err := tx.Model(&model.ResourcePermission{}).
				Where("group_id = ? AND resource_id = ? AND resource_type = ?",
					groupID, userID, model.ResourceTypeUser).
				Count(&count).Error; err != nil {
				tx.Rollback()
				c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
				return
			}

			// If it doesn't exist, create it
			if count == 0 {
				if err := tx.Create(&permission).Error; err != nil {
					tx.Rollback()
					c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
					return
				}
			}
		}
	}

	// Process department resources
	if len(request.DepartmentIDs) > 0 {
		// Remove duplicates
		deptIDMap := make(map[int64]bool)
		uniqueDeptIDs := make([]int64, 0)
		for _, deptID := range request.DepartmentIDs {
			if !deptIDMap[deptID] {
				uniqueDeptIDs = append(uniqueDeptIDs, deptID)
				deptIDMap[deptID] = true
			}
		}

		// Batch create ResourcePermission records for departments
		for _, deptID := range uniqueDeptIDs {
			permission := model.ResourcePermission{
				GroupID:      int64(groupID),
				ResourceID:   deptID,
				ResourceType: model.ResourceTypeDepartment,
				Permission:   model.PermissionRead,
			}

			// Check if the same permission record already exists
			var count int64
			if err := tx.Model(&model.ResourcePermission{}).
				Where("group_id = ? AND resource_id = ? AND resource_type = ?",
					groupID, deptID, model.ResourceTypeDepartment).
				Count(&count).Error; err != nil {
				tx.Rollback()
				c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
				return
			}

			// If it doesn't exist, create it
			if count == 0 {
				if err := tx.Create(&permission).Error; err != nil {
					tx.Rollback()
					c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
					return
				}
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

// @Summary Get all users in a group
// @Description Get all user information associated with a specified group, sorted in descending order
// @Tags Group
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Group ID"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/groups/{id}/users [get]
type GroupUsersRequest struct {
	Keyword      string `form:"keyword" json:"keyword"`
	ResourceType string `form:"resource_type" json:"resource_type"`
	Offset       int    `form:"offset" json:"offset" default:"0"`
	Limit        int    `form:"limit" json:"limit" default:"10"`
}

// GroupUsersResponse 定义获取组内用户和部门的响应结构
type GroupUsersResponse struct {
	Total       int64                       `json:"total"`
	Permissions []*model.ResourcePermission `json:"permissions"`
}

// GetGroupUsers gets users and departments in a group
// @Summary Get users and departments in a group
// @Description Get users and departments in a group with search and pagination support
// @Tags Group
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Group ID"
// @Param keyword query string false "Search keyword"
// @Param resource_type query string false "Resource type: user,department,all" default(all)
// @Param offset query int false "Pagination offset" default(0)
// @Param limit query int false "Page size" default(10)
// @Success 200 {object} model.CommonResponse{data=GroupUsersResponse} "Success"
// @Router /api/groups/{id}/users [get]
func GetGroupUsers(c *gin.Context) {
	groupID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	group, err := model.GetGroupByID(int64(groupID))
	if err != nil {
		// c.JSON(http.StatusNotFound, model.NotFound.ToResponse(err))
		c.JSON(http.StatusOK, model.Success.ToResponse(&GroupUsersResponse{
			Total:       0,
			Permissions: make([]*model.ResourcePermission, 0),
		}))
		return
	}

	if group.Eid != config.GetEID(c) {
		c.JSON(http.StatusForbidden, model.NotFound.ToResponse(nil))
		return
	}

	var req GroupUsersRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	if req.Limit <= 0 {
		req.Limit = 10
	}
	if req.ResourceType == "" {
		req.ResourceType = "all"
	}

	var resourceTypes []string
	switch req.ResourceType {
	case "user":
		resourceTypes = []string{model.ResourceTypeUser}
	case "department":
		resourceTypes = []string{model.ResourceTypeDepartment}
	default:
		resourceTypes = []string{model.ResourceTypeUser, model.ResourceTypeDepartment}
	}

	tx := model.DB.Begin()
	if tx.Error != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(tx.Error))
		return
	}

	var total int64
	var permissions []*model.ResourcePermission

	query := tx.Model(&model.ResourcePermission{}).
		Where("group_id = ?", groupID).
		Where("resource_type IN ?", resourceTypes)

	if req.Keyword != "" {
		query = query.Where(`
			(resource_type = ? AND resource_id IN (
				SELECT user_id FROM users WHERE 
				(nickname LIKE ? OR mobile LIKE ? OR email LIKE ?) AND eid = ?
			)) OR 
			(resource_type = ? AND resource_id IN (
				SELECT did FROM departments WHERE name LIKE ? AND eid = ?
			))
		`,
			model.ResourceTypeUser, "%"+req.Keyword+"%", "%"+req.Keyword+"%", "%"+req.Keyword+"%", group.Eid,
			model.ResourceTypeDepartment, "%"+req.Keyword+"%", group.Eid)
	}

	if err := query.Count(&total).Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	if err := query.Offset(req.Offset).Limit(req.Limit).Find(&permissions).Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	// 获取用户和部门的详细信息
	var userMap = make(map[int64]*model.User)
	var departmentMap = make(map[int64]*model.Department)

	// 提取用户ID和部门ID
	var userIDs []int64
	var departmentIDs []int64

	for _, perm := range permissions {
		if perm.ResourceType == model.ResourceTypeUser {
			userIDs = append(userIDs, perm.ResourceID)
		} else if perm.ResourceType == model.ResourceTypeDepartment {
			departmentIDs = append(departmentIDs, perm.ResourceID)
		}
	}

	// 查询用户详细信息
	if len(userIDs) > 0 {
		var users []*model.User
		if err := tx.Where("user_id IN ?", userIDs).Find(&users).Error; err != nil {
			tx.Rollback()
			c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
			return
		}

		// 构建用户ID到用户对象的映射
		for _, user := range users {
			user.LoadDepartments(model.DepartmentFromBackend)
			userMap[user.UserID] = user
		}
	}

	// 查询部门详细信息
	if len(departmentIDs) > 0 {
		var departments []*model.Department
		if err := tx.Where("did IN ?", departmentIDs).Find(&departments).Error; err != nil {
			tx.Rollback()
			c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
			return
		}

		// 构建部门ID到部门对象的映射
		for _, dept := range departments {
			departmentMap[dept.DID] = dept
		}
	}

	// 回填数据到permissions
	for _, perm := range permissions {
		if perm.ResourceType == model.ResourceTypeUser {
			if user, ok := userMap[perm.ResourceID]; ok {
				perm.User = user
			}
		} else if perm.ResourceType == model.ResourceTypeDepartment {
			if dept, ok := departmentMap[perm.ResourceID]; ok {
				perm.Department = dept
			}
		}
	}

	if err := tx.Commit().Error; err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(&GroupUsersResponse{
		Total:       total,
		Permissions: permissions,
	}))
}

// @Summary Remove users from group
// @Description Remove multiple users from the specified group
// @Tags Group
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Group ID"
// @Param request body RemoveUsersFromGroupRequest true "Array of resource permission record IDs"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/groups/{id}/users [delete]
// RemoveUsersFromGroupRequest
type RemoveUsersFromGroupRequest struct {
	PermissionIDs []int64 `json:"permission_ids" binding:"required" example:"1,2,3"` // 资源权限记录ID数组
}

// @Summary Remove users from group
// @Description Remove multiple users from the specified group
// @Tags Group
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Group ID"
// @Param request body RemoveUsersFromGroupRequest true "Array of resource permission record IDs"
// @Success 200 {object} model.CommonResponse "Success"
// @Router /api/groups/{id}/users [delete]
func RemoveUsersFromGroup(c *gin.Context) {
	groupID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	group, err := model.GetGroupByID(int64(groupID))
	if err != nil {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(err))
		return
	}

	if group.Eid != config.GetEID(c) {
		c.JSON(http.StatusForbidden, model.NotFound.ToResponse(nil))
		return
	}

	var request RemoveUsersFromGroupRequest
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	if len(request.PermissionIDs) == 0 {
		c.JSON(http.StatusOK, model.Success.ToResponse(nil))
		return
	}

	tx := model.DB.Begin()
	if tx.Error != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(tx.Error))
		return
	}

	if err := tx.Where("id IN ? AND group_id = ?",
		request.PermissionIDs, groupID).
		Delete(&model.ResourcePermission{}).Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	if err := tx.Commit().Error; err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}
