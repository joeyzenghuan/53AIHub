package service

import (
	"fmt"

	"github.com/53AI/53AIHub/common/utils/appbuilder"
	"github.com/53AI/53AIHub/model"
)

type AppBuilderService struct {
	Provider *model.Provider
}

func (a *AppBuilderService) GetApiSdk() *appbuilder.AppBuilderApi {
	baseUrl := model.GetBaseURLByProviderType(a.Provider.ProviderType)
	return &appbuilder.AppBuilderApi{
		BaseUrl:   baseUrl,
		AuthToken: a.Provider.AccessToken,
	}
}

// GetAllDescribeApps retrieves all apps by paginating through DescribeApps API
// It will keep calling the API with marker from previous response until all apps are loaded
// maxKeys is set to 100 which is the maximum allowed value
func (a *AppBuilderService) GetAllDescribeApps() ([]appbuilder.AppInfo, error) {
	api := a.GetApiSdk()
	var allApps []appbuilder.AppInfo
	marker := ""
	maxKeys := 100
	maxAttempts := 10
	attempt := 0

	for {
		attempt++
		if attempt > maxAttempts {
			return allApps, fmt.Errorf("maximum API call attempts (%d) reached", maxAttempts)
		}

		resp, err := api.DescribeApps(marker, maxKeys)
		if err != nil {
			return nil, err
		}

		if len(resp.Data) == 0 {
			break
		}

		allApps = append(allApps, resp.Data...)

		if !resp.IsTruncated {
			break
		}
		marker = resp.NextMarker
	}

	return allApps, nil
}
