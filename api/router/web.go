package router

import (
	"embed"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func SetWebRouter(router *gin.Engine, buildFS embed.FS) {
	// 添加错误处理
	currentDir, err := os.Getwd()
	log.Printf("当前工作目录: %s", currentDir)
	indexPageData, err := buildFS.ReadFile("./web/build/index.html")
	if err != nil {
		log.Printf("无法读取 index.html 文件: %v", err)
	}

	// 显式处理根路径
	// router.GET("/", func(c *gin.Context) {
	// 	c.Header("Cache-Control", "no-cache")
	// 	c.Data(http.StatusOK, "text/html; charset=utf-8", indexPageData)
	// })

	// 静态文件服务
	//router.Use(static.Serve("/", common.EmbedFolder(buildFS, "web/build")))

	// NoRoute 处理
	router.NoRoute(func(c *gin.Context) {
		c.Header("Cache-Control", "no-cache")
		c.Data(http.StatusOK, "text/html; charset=utf-8", indexPageData)
	})
}
