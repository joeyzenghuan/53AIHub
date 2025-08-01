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

func (a *AI53Api) GetWorkflows(offset, limit int) ([]AppResponse, error) {
	url := a.GetBaseURL() + "/v3/workflows"
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
	// logger.SysLogf("AI53 GetWorkflows response: %s", string(body))

	var result []AppResponse
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}

	return result, nil
}

// cleanBotId 清理 botId，去掉可能的前缀
func (a *AI53Api) cleanBotId(botId string) string {
	// 去掉 "bot-" 前缀
	if strings.HasPrefix(botId, "bot-") {
		return strings.TrimPrefix(botId, "bot-")
	}

	// 去掉 "workflow-" 前缀
	if strings.HasPrefix(botId, "workflow-") {
		return strings.TrimPrefix(botId, "workflow-")
	}

	// 直接返回原始 botId
	return botId
}

// GetAppParameters 获取 53AI 应用参数配置
func (a *AI53Api) GetAppParameters(botId string) (interface{}, error) {
	// 清理 botId (去掉可能的前缀)
	cleanBotId := a.cleanBotId(botId)

	// 构建 URL (使用 53AI 的 v3 端点)
	url := a.GetBaseURL() + "/v3/parameters"

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}

	req.Header.Set("Authorization", "Bearer "+a.AuthToken)
	req.Header.Set("Bot-Id", cleanBotId)
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

	var result interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, err
	}

	return result, nil
}
