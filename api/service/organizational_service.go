package service

import (
	"errors"

	"github.com/53AI/53AIHub/config"
	"github.com/53AI/53AIHub/model"
)

type SyncOrganizationParams struct {
	SuiteID string `json:"suite_id"`
}

func WeComRunSyncOrganization(e *model.Enterprise, params SyncOrganizationParams) error {
	if config.IS_SAAS {
		wc, err := model.GetWecomCorp(params.SuiteID, e.WecomCorpID)
		if err != nil {
			return err
		}
		if wc == nil {
			return errors.New("wecom corp not found")
		}
		return nil
	} else {
		return nil
	}
}
