package main

import (
	"embed"
	"os"

	"github.com/53AI/53AIHub/common"
	"github.com/53AI/53AIHub/common/logger"
	"github.com/53AI/53AIHub/model"
	"github.com/53AI/53AIHub/router"
	hub_openai "github.com/53AI/53AIHub/service/hub_adaptor/openai"
	"github.com/53AI/53AIHub/tasks"
	"github.com/gin-gonic/gin"
	"github.com/songquanpeng/one-api/common/client"
	"github.com/songquanpeng/one-api/relay/adaptor/openai"
)

//go:embed static/front static/console static/images static/libs
var buildFS embed.FS

func main() {
	var err error
	common.Init()
	model.InitDB()
	client.Init()
	openai.InitTokenEncoders()
	hub_openai.InitTokenEncoders()

	// Initialize system (create default enterprise, user group, and admin if needed)
	if err := model.InitializeSystem(); err != nil {
		logger.FatalLog("Failed to initialize system: " + err.Error())
	}

	tasks.Start()

	logLevel := os.Getenv("LOG_LEVEL")
	if logLevel == "" {
		logLevel = "INFO"
	}

	logger.SetLogLevel(logLevel)

	if logLevel == "DEBUG" {
		gin.SetMode(gin.DebugMode)
	} else {
		gin.SetMode(gin.ReleaseMode)
	}
	var port = os.Getenv("PORT")
	if port == "" {
		port = "80"
	}
	logger.SysLogf("\033[94m"+`
                    @                
                   ###                
           /###################\      
          |#####################|     
        ##|#####################|##  
       ###|####    #####    ####|###  
        ##|#####################|##  
          |#####################|     
           \###################/      
                  ######              
                  ###                 
                  @
  server started on http://localhost:%s
		`+"\033[0m", port)

	server := gin.New()

	router.SetRouter(server, buildFS)
	err = server.Run(":" + port)
	if err != nil {
		logger.FatalLog("failed to start HTTP server: " + err.Error())
	}
}
