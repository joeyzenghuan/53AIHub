package router

import (
	"github.com/53AI/53AIHub/controller"
	"github.com/53AI/53AIHub/middleware"
	"github.com/53AI/53AIHub/model"
	"github.com/gin-gonic/gin"
)

func SetApiRouter(router *gin.Engine) {
	apiRouter := router.Group("/api")
	// apiRouter.Use(middleware.CORS())
	apiRouter.Use(middleware.Logger())

	enterpriseRoute := apiRouter.Group("/enterprises")
	{
		enterpriseRoute.GET("/is_saas", middleware.UserTokenAuth(model.RoleAdminUser), controller.GetIsSaas)
		enterpriseRoute.GET("/homepage", middleware.UserTokenAuth(model.RoleAdminUser), controller.GetHomePage)

		enterpriseRoute.GET("/current", controller.GetCurrentEnterprise)

		enterpriseRoute.GET("/:id", middleware.UserTokenAuth(model.RoleAdminUser), controller.GetEnterprise)
		enterpriseRoute.PUT("/:id", middleware.UserTokenAuth(model.RoleAdminUser), controller.UpdateEnterprise)
		enterpriseRoute.PATCH("/:id", middleware.UserTokenAuth(model.RoleAdminUser), controller.UpdateEnterpriseAttribute)
		enterpriseRoute.DELETE("/:id", middleware.UserTokenAuth(model.RoleAdminUser), controller.DeleteEnterprise)
		enterpriseRoute.POST("", middleware.UserTokenAuth(model.RoleAdminUser), controller.CreateEnterprise)
		enterpriseRoute.GET("/banner", middleware.UserTokenAuth(model.RoleAdminUser), controller.GetEnterpriseBanner)
		enterpriseRoute.PUT("/banner", middleware.UserTokenAuth(model.RoleAdminUser), controller.UpdateEnterpriseBanner)
		enterpriseRoute.GET("/template_type", middleware.UserTokenAuth(model.RoleAdminUser), controller.GetEnterpriseTemplateType)
		enterpriseRoute.PUT("/template_type", middleware.UserTokenAuth(model.RoleAdminUser), controller.UpdateEnterpriseTemplateType)
	}

	commonRoute := apiRouter.Group("")
	{
		commonRoute.POST("/register", controller.PasswordRegister)
		commonRoute.POST("/login", controller.Login)
		commonRoute.POST("/check_account", controller.CheckAccountExists)
		commonRoute.POST("/upload", middleware.UserTokenAuth(model.RoleGuestUser), controller.Upload)
		commonRoute.GET("/preview/*key", controller.PreviewFile)
		commonRoute.GET("/response_codes", controller.GetAllResponseCodes)
	}

	userRoute := apiRouter.Group("/users")
	userRoute.GET("/me", middleware.UserTokenAuth(model.RoleCommonUser), controller.GetCurrentUser)
	userRoute.PUT("/password", middleware.UserTokenAuth(model.RoleCommonUser), controller.UpdateUserPassword)
	userRoute.PUT("/me", middleware.UserTokenAuth(model.RoleCommonUser), controller.UpdateCurrentUser)
	userRoute.Use(middleware.UserTokenAuth(model.RoleAdminUser))
	{
		userRoute.POST("", controller.EnterpriseAddUser)
		userRoute.GET("", controller.EnterpriseUsers)
		userRoute.DELETE("/:id", controller.DeleteEnterpriseUser)
		userRoute.PUT("/:id", controller.UpdateEnterpriseUser)
		userRoute.GET("/:user_id/agents/:agent_id/messages", controller.GetUserMessages)
		userRoute.PUT("/batch/admin", controller.SetUserAsAdmin)
		userRoute.DELETE("/batch/admin", controller.UnsetUserAsAdmin)
		userRoute.POST("/internal/batch", controller.BatchAddInternalUsers)
		userRoute.PUT("/register/to/internal", controller.RegisterUserToInternal)
		userRoute.GET("/internal", controller.GetInternalUsers)
		userRoute.PATCH("/:id/status", controller.UpdateUserStatus)
		userRoute.PUT("/internal/:id", controller.UpdateInternalUser)
		userRoute.GET("/admin", controller.EnterpriseUsers)
	}

	groupRoute := apiRouter.Group("/groups")
	groupRoute.GET("type/current/:group_type", controller.GetGroups)
	groupRoute.Use(middleware.UserTokenAuth(model.RoleAdminUser))
	{
		groupRoute.POST("", controller.CreateGroup)
		groupRoute.GET("/:id", controller.GetGroup)
		groupRoute.PUT("/:id", controller.UpdateGroup)
		groupRoute.DELETE("/:id", controller.DeleteGroup)
		groupRoute.POST("type/:group_type", controller.BatchSubmitGroups)
		groupRoute.GET("type/:group_type", controller.GetGroups)
		groupRoute.POST("/:id/agents", controller.AddAgentsToGroup)
		groupRoute.DELETE("/:id/agents", controller.RemoveAgentsFromGroup)
		groupRoute.GET("/:id/agents", controller.GetGroupAgents)
		groupRoute.DELETE("/:id/users", controller.RemoveUsersFromGroup)
		groupRoute.GET("/:id/users", controller.GetGroupUsers)
		groupRoute.POST("/:id/users/batch", controller.BatchAddUsersToGroup)
	}

	aiLinkRoute := apiRouter.Group("/ai_links")
	aiLinkRoute.GET("/current", controller.GetCurrentSiteAILinks)
	aiLinkRoute.Use(middleware.UserTokenAuth(model.RoleAdminUser))
	{
		aiLinkRoute.POST("", controller.CreateAILink)
		aiLinkRoute.GET("", controller.GetAILinks)
		aiLinkRoute.GET("/:id", controller.GetAILink)
		aiLinkRoute.PUT("/:id", controller.UpdateAILink)
		aiLinkRoute.DELETE("/:id", controller.DeleteAILink)
	}

	settingRoute := apiRouter.Group("/settings")
	{
		settingRoute.POST("", middleware.UserTokenAuth(model.RoleGuestUser), controller.CreateSetting)
		settingRoute.GET("/:id", controller.GetSetting)
		settingRoute.PUT("/:id", middleware.UserTokenAuth(model.RoleGuestUser), controller.UpdateSetting)
		settingRoute.DELETE("/:id", middleware.UserTokenAuth(model.RoleGuestUser), controller.DeleteSetting)
		settingRoute.GET("", middleware.UserTokenAuth(model.RoleAdminUser), controller.GetSettings)
		settingRoute.GET("/group/:group_name", controller.GetSettingsByGroup)
	}

	channelGroup := apiRouter.Group("/channels")
	channelGroup.Use(middleware.UserTokenAuth(model.RoleAdminUser))
	{
		channelGroup.POST("", controller.CreateChannel)
		channelGroup.GET("", controller.GetChannels)
		channelGroup.GET("/:channel_id", controller.GetChannel)
		channelGroup.PUT("/:channel_id", controller.UpdateChannel)
		channelGroup.DELETE("/:channel_id", controller.DeleteChannel)
		channelGroup.GET("/test/:channel_id", controller.TestChannel)
		channelGroup.GET("/models", controller.ListAllModels)
	}

	agentGroup := apiRouter.Group("/agents")
	agentGroup.GET("/current", controller.GetCurrentAgents)
	agentGroup.Use(middleware.UserTokenAuth(model.RoleGuestUser))
	{
		agentGroup.POST("", controller.CreateAgent)
		agentGroup.GET("", controller.GetAgents)
		agentGroup.GET("/group", controller.GetAgentsByGroup)
		agentGroup.GET("/:agent_id", controller.GetAgent)
		agentGroup.PUT("/:agent_id", controller.UpdateAgent)
		agentGroup.DELETE("/:agent_id", controller.DeleteAgent)
		agentGroup.GET("/:agent_id/messages", controller.GetMessagesByUserAndAgent)
		agentGroup.PATCH("/:agent_id/status", controller.UpdateAgentStatus)
		agentGroup.GET("/internal_users", controller.GetInternalUserAgents)
	}

	conversationGroup := apiRouter.Group("/conversations")
	conversationGroup.Use(middleware.UserTokenAuth(model.RoleGuestUser))
	{
		conversationGroup.POST("", controller.CreateConversation)
		conversationGroup.GET("", controller.GetConversations)
		conversationGroup.GET("/:conversation_id", controller.GetConversation)
		conversationGroup.PUT("/:conversation_id", controller.UpdateConversation)
		conversationGroup.DELETE("/:conversation_id", controller.DeleteConversation)
		//conversationGroup.POST("/:conversation_id/messages", controller.CreateMessage)
		conversationGroup.GET("/:conversation_id/messages", controller.GetMessagesByConversation)
	}

	subscription := apiRouter.Group("/subscriptions")
	{
		subscription.GET("/settings", middleware.UserTokenAuth(model.RoleCommonUser), controller.GetSubscriptionList)
		subscription.
			POST("/batch", middleware.UserTokenAuth(model.RoleAdminUser), controller.BatchSubscriptionOperation)
	}

	providerRouter := apiRouter.Group("/providers")
	providerRouter.Use(middleware.UserTokenAuth(model.RoleAdminUser))
	{
		providerRouter.POST("", controller.CreateProvider)
		providerRouter.GET("", controller.GetProviders)
		providerRouter.PUT("/:id", controller.UpdateProvider)
		providerRouter.DELETE("/:id", controller.DeleteProvider)
	}

	callbackRouter := apiRouter.Group("/callback")
	{
		callbackRouter.GET("/cozecn/auth/:eid", controller.CozeCallBack)
		callbackRouter.GET("/cozecom/auth/:eid", controller.CozeCallBack)
	}

	cozeRouter := apiRouter.Group("/coze")
	cozeRouter.Use(middleware.UserTokenAuth(model.RoleAdminUser))
	{
		cozeRouter.GET("/workspaces", controller.GetCozeAllWorkspaces)
		cozeRouter.GET("/workspaces/:workspace_id/bots", controller.GetCozeAllBots)
	}

	AppBuilderRouter := apiRouter.Group("/appbuilder")
	AppBuilderRouter.Use(middleware.UserTokenAuth(model.RoleAdminUser))
	{
		AppBuilderRouter.GET("/bots", controller.GetAppBuilderAllBots)
	}

	apiV1Router := router.Group("/v1")
	apiV1Router.Use(middleware.CORS())
	apiV1Router.Use(middleware.Logger())
	apiV1Router.Use(middleware.RelayTokenAuth())
	{
		apiV1Router.POST("/chat/completions", controller.Relay)
	}

	paySettingRouter := apiRouter.Group("/pay_settings")
	paySettingRouter.GET("/type/:type", controller.GetPaySettingByType)
	paySettingRouter.Use(middleware.UserTokenAuth(model.RoleAdminUser))
	{
		paySettingRouter.GET("", controller.GetPaySettings)
		paySettingRouter.GET("/:id", controller.GetPaySetting)
		paySettingRouter.POST("", controller.CreatePaySetting)
		// paySettingRouter.PUT("/:id", controller.UpdatePaySetting)
		paySettingRouter.DELETE("/:id", controller.DeletePaySetting)
		paySettingRouter.PATCH("/:id/config", controller.UpdatePayConfig)
		paySettingRouter.PATCH("/:id/status", controller.UpdatePayStatus)
	}

	orderRouter := apiRouter.Group("/orders")
	{
		// Create order when scanning QR code
		orderRouter.POST("", middleware.UserTokenAuth(model.RoleCommonUser), controller.CreateOrder)
		// Only manual transfer orders can be added
		orderRouter.GET("", middleware.UserTokenAuth(model.RoleAdminUser), controller.GetOrders)
		orderRouter.GET("/:id", middleware.UserTokenAuth(model.RoleAdminUser), controller.GetOrder)
		orderRouter.PATCH("/:id/status", middleware.UserTokenAuth(model.RoleAdminUser), controller.UpdateOrderStatus) // Only manual transfers can be marked as paid
		orderRouter.DELETE("/:id", controller.DeleteOrder)                                                            // Only manual transfers can be deleted, but paid ones cannot be deleted
		orderRouter.GET("/status/:order_id", middleware.UserTokenAuth(model.RoleCommonUser), controller.QueryOrderStatus)
		// orderRouter.GET("/:id/confirm", middleware.UserTokenAuth(model.RoleCommonUser), controller.ConfirmManualPayment)
		orderRouter.GET("/user", middleware.UserTokenAuth(model.RoleAdminUser), controller.GetUserOrders)
	}

	paymentRouter := apiRouter.Group("/payment")
	{
		paymentRouter.GET("/available", controller.GetAvailablePayTypes)
		// Payment notification routes
		paymentRouter.POST("/wechat/notify/:id", controller.WechatPayNotify)
	}

	// Department routes
	departmentGroup := router.Group("/api/departments")
	departmentGroup.Use(middleware.UserTokenAuth(model.RoleAdminUser))
	{
		departmentGroup.POST("", controller.CreateDepartment)
		departmentGroup.GET("", controller.GetDepartments)
		departmentGroup.GET("/:did", controller.GetDepartment)
		departmentGroup.PUT("/:did", controller.UpdateDepartment)
		departmentGroup.DELETE("/:did", controller.DeleteDepartment)
		departmentGroup.GET("/children/:pdid", controller.GetChildDepartments)
		departmentGroup.GET("/tree", controller.GetDepartmentTree)
	}
}
