package controller

import (
	"net/http"
	"strconv"

	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

type AILinkRequest struct {
	GroupID     int64  `json:"group_id" example:"1"`
	Name        string `json:"name" example:"ai_link_name"`
	Logo        string `json:"logo" example:"logo_url"`
	URL         string `json:"url" example:"ai_link_url"`
	Description string `json:"description" example:"ai_link_description"`
	Sort        int64  `json:"sort" example:"0"`
}

// @Summary Create AI Link
// @Description Create new AI link entry
// @Tags AI Link
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param link body AILinkRequest true "AI Link data"
// @Success 200 {object} model.CommonResponse
// @Router /api/ai_links [post]
func CreateAILink(c *gin.Context) {
	var req AILinkRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(err))
		return
	}

	link := model.AILink{
		Eid:         config.GetEID(c),
		GroupID:     req.GroupID,
		Name:        req.Name,
		Logo:        req.Logo,
		URL:         req.URL,
		Description: req.Description,
		Sort:        req.Sort,
		CreatedBy:   config.GetUserId(c),
	}

	if err := model.CreateAILink(&link); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(link))
}

// @Summary Get AI Link
// @Description Get AI link by ID
// @Tags AI Link
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Link ID"
// @Success 200 {object} model.CommonResponse
// @Router /api/ai_links/{id} [get]
func GetAILink(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	link, err := model.GetAILinkByID(int64(id))

	if err != nil || link.Eid != config.GetEID(c) {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(nil))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(link))
}

// @Summary Update AI Link
// @Description Update existing AI link
// @Tags AI Link
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Link ID"
// @Param link body AILinkRequest true "Update data"
// @Success 200 {object} model.CommonResponse
// @Router /api/ai_links/{id} [put]
func UpdateAILink(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	link, err := model.GetAILinkByID(int64(id))

	if err != nil || link.Eid != config.GetEID(c) {
		c.JSON(http.StatusNotFound, model.NotFound.ToResponse(nil))
		return
	}

	var req AILinkRequest
	if c.ShouldBindJSON(&req) != nil {
		c.JSON(http.StatusBadRequest, model.ParamError.ToResponse(nil))
		return
	}

	link.GroupID = req.GroupID
	link.Name = req.Name
	link.Logo = req.Logo
	link.URL = req.URL
	link.Description = req.Description
	link.Sort = req.Sort

	if err := model.UpdateAILink(link); err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(link))
}

// @Summary Delete AI Link
// @Description Delete AI link by ID
// @Tags AI Link
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Link ID"
// @Success 200 {object} model.CommonResponse
// @Router /api/ai_links/{id} [delete]
func DeleteAILink(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	link, err := model.GetAILinkByID(int64(id))

	if err == nil && link.Eid == config.GetEID(c) {
		err = model.DeleteAILinkByID(int64(id))
	}

	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(nil))
}

// @Summary Get AI Links
// @Description Get AI links by group ID
// @Tags AI Link
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param group_id query int false "Empty for all groups or group ID"
// @Param keyword query string false "Search by name"
// @Success 200 {object} model.CommonResponse
// @Router /api/ai_links [get]
func GetAILinks(c *gin.Context) {
	groupID, _ := strconv.ParseInt(c.Query("group_id"), 10, 64)
	keyword := c.Query("keyword")
	var links []model.AILink
	var err error

	if groupID != 0 {
		if keyword != "" {
			links, err = model.GetAILinksByEidAndGroupIdWithKeyword(config.GetEID(c), groupID, keyword)
		} else {
			links, err = model.GetAILinksByEidAndGroupId(config.GetEID(c), groupID)
		}
	} else {
		if keyword != "" {
			links, err = model.GetAILinksGroupedBySortWithKeyword(config.GetEID(c), keyword)
		} else {
			links, err = model.GetAILinksGroupedBySort(config.GetEID(c))
		}
	}

	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(links))
}

// @Summary Get current site AI links
// @Description Get all AI links for current site
// @Tags AI Link
// @Accept json
// @Produce json
// @Security BearerAuth
// @Success 200 {object} model.CommonResponse
// @Router /api/ai_links/current [get]
func GetCurrentSiteAILinks(c *gin.Context) {
	eid := config.GetEID(c)
	links, err := model.GetAILinksGroupedBySort(eid)

	if err != nil {
		c.JSON(http.StatusInternalServerError, model.DBError.ToResponse(err))
		return
	}

	c.JSON(http.StatusOK, model.Success.ToResponse(links))
}
