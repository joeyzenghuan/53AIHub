package router

import (
	"embed"
	"io/fs"
	"net/http"
	"os"

	"github.com/53AI/53AIHub/controller"
	_ "github.com/53AI/53AIHub/docs"
	"github.com/53AI/53AIHub/middleware"

	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// @title 53AIHub API
// @version 0.1
// @description This is the API documentation for 53AIHub
// @securityDefinitions.apikey BearerAuth
// @in header
// @name Authorization
// @description Type "Bearer" followed by a space and JWT token. Example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
func SetRouter(router *gin.Engine, buildFS embed.FS) {
	if os.Getenv("HUB_SERVER") != "prod" {
		router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	}
	router.GET("/heath", controller.HealthCheck)
	router.Use(middleware.CORS())
	setStaticImagesRouter(router, buildFS)
	setStaticLibsRouter(router, buildFS)
	SetApiRouter(router)
	// SetWebRouter(router, buildFS)
	SetStaticRouter(router, buildFS)
}

func setStaticImagesRouter(router *gin.Engine, buildFS embed.FS) {
	subFS, _ := fs.Sub(buildFS, "static/images")
	router.StaticFS("/api/images", http.FS(subFS))
}

func setStaticLibsRouter(router *gin.Engine, buildFS embed.FS) {
	subFS, _ := fs.Sub(buildFS, "static/libs")
	router.StaticFS("/api/libs", http.FS(subFS))
}
