package ai53

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"
	"strings"
)

type AI53Api struct {
	BaseUrl   string
	AuthToken string
}

type AppResponse struct {
	BotID              string   `json:"bot_id"`
	Name               string   `json:"name"`
	Nickname           string   `json:"nickname"`
	Description        *string  `json:"description"`
	Logo               string   `json:"logo"`
	OpeningStatement   string   `json:"opening_statement"`
	SuggestedQuestions []string `json:"suggested_questions"`
	UpdatedAt          int64    `json:"updated_at"`
}

func (a *AI53Api) GetBaseURL() string {
	url := a.BaseUrl
	url = strings.TrimSuffix(url, "/")
	url = strings.TrimSuffix(url, "/v3")
	return url
}

func (a *AI53Api) GetApps(offset, limit int) ([]AppResponse, error) {
	url := a.GetBaseURL() + "/v3/apps"
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}

	q := req.URL.Query()
	q.Add("offset", strconv.Itoa(offset))
	q.Add("limit", strconv.Itoa(limit))
	req.URL.RawQuery = q.Encode()

	req.Header.Set("Authorization", "Bearer "+a.AuthToken)
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode >= 400 {
		return nil, fmt.Errorf("API request failed with status %d", resp.StatusCode)
	}

	body, _ := io.ReadAll(resp.Body)
	// logger.SysLogf("AI53 GetApps response: %s", string(body))

	var result []AppResponse
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}

	return result, nil
}
