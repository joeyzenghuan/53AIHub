package service

import (
	"github.com/53AI/53AIHub/common/utils/ai53"
	"github.com/53AI/53AIHub/model"
)

type AI53Service struct {
	Provider *model.Provider
}

func (a *AI53Service) GetApiSdk() *ai53.AI53Api {
	baseUrl := a.Provider.GetBaseURLByProviderType()
	return &ai53.AI53Api{
		BaseUrl:   baseUrl,
		AuthToken: a.Provider.AccessToken,
	}
}

func (a *AI53Service) GetAllBots() ([]ai53.AppResponse, error) {
	api := a.GetApiSdk()
	var allBots []ai53.AppResponse
	offset := 0
	limit := 100

	for {
		resp, err := api.GetApps(offset, limit)
		if err != nil {
			return nil, err
		}

		allBots = append(allBots, resp...)

		if len(resp) < limit {
			break
		}
		offset += limit
	}

	return allBots, nil
}
