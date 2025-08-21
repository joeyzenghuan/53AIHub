package tasks

import (
	"time"

	"github.com/53AI/53AIHub/common/logger"
	"github.com/53AI/53AIHub/model"
	"github.com/53AI/53AIHub/service"
)

// StartChannelUpdateKeyTask starts the channel key update task
// Executes immediately once, and then every 24 hours
func StartChannelUpdateKeyTask() {
	go func() {
		// Execute immediately once
		updateCozeCnKey()

		// Set to execute every 24 hours
		ticker := time.NewTicker(24 * time.Hour)
		defer ticker.Stop()

		for range ticker.C {
			updateCozeCnKey()
		}
	}()
	logger.SysLog("Channel key update task started, executing immediately once, then every 24 hours")
}

// updateCozeCnKey refreshes tokens for all authorized Coze providers
func updateCozeCnKey() {
	// Get all authorized providers with provider_type = 1 (CozeCn)
	providers, err := model.GetProvidersByTypeAndAuthStatus(model.ProviderTypeCozeCn, true)
	if err != nil {
		logger.SysError("Failed to get authorized Coze providers: " + err.Error())
		return
	}

	if len(providers) == 0 {
		logger.Debug(nil, "No authorized Coze providers found")
		return
	}

	successCount := 0
	failCount := 0

	// Process each provider
	for _, provider := range providers {
		// Skip coze-studio providers as they use fixed AccessToken
		if provider.ProviderType == model.ProviderTypeCozeStudio {
			logger.SysLogf("Skipping coze-studio provider token refresh: %d name: %s", provider.ProviderID, provider.Name)
			continue
		}

		logger.SysLogf("Refreshing provider token: %d name: %s", provider.ProviderID, provider.Name)

		// Create service instance
		ser := service.CozeService{
			Provider: provider,
		}

		// Check and refresh token
		err := ser.HandlerAccessTokenByRefreshToken()
		if err != nil {
			logger.SysErrorf("Failed to refresh provider token: %d error: %v", provider.ProviderID, err)
			failCount++
			continue
		}
	}

	logger.SysLogf("Channel key update completed. Success: %d Failed: %d", successCount, failCount)
}
