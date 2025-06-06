package appbuilder

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"

	"github.com/53AI/53AIHub/common/logger"
)

type AppBuilderApi struct {
	BaseUrl   string
	AuthToken string
}

// AppInfo represents application information
// @Description Application information structure
type AppInfo struct {
	// ID is the unique identifier of the application
	// @Example "app_1234567890"
	ID string `json:"id"`

	// Name is the display name of the application
	// @Example "My Awesome App"
	Name string `json:"name"`

	// Description provides details about the application
	// @Example "This is a sample application for demonstration purposes"
	Description string `json:"description"`

	// AppType indicates the type of the application
	// @Example "chatbot"
	AppType string `json:"appType"`

	// IsPublished shows whether the application is published
	// @Example true
	IsPublished bool `json:"isPublished"`

	// UpdateTime is the last update timestamp in Unix time format
	// @Example 1672531200
	UpdateTime int64 `json:"updateTime"`
}

type DescribeAppsResponse struct {
	RequestId   string    `json:"requestId"`
	Data        []AppInfo `json:"data"`
	Marker      string    `json:"marker"`
	IsTruncated bool      `json:"isTruncated"`
	NextMarker  string    `json:"nextMarker"`
	MaxKeys     int       `json:"maxKeys"`
}

func (a *AppBuilderApi) DescribeApps(marker string, maxKeys int) (*DescribeAppsResponse, error) {
	url := a.BaseUrl + "/v2/app?Action=DescribeApps"
	var payload interface{}
	if marker == "" {
		payload = map[string]interface{}{
			"maxKeys": maxKeys,
		}
	} else {
		payload = map[string]interface{}{
			"marker":  marker,
			"maxKeys": maxKeys,
		}
	}

	headers := map[string]string{
		"Content-Type":  "application/json",
		"Authorization": "Bearer " + a.AuthToken,
	}

	resp, err := a.doRequest("POST", url, payload, headers)
	if err != nil {
		return nil, err
	}

	payloadBytes, _ := json.Marshal(payload)
	logger.SysLogf("AppBuilder DescribeApps request: URL: %s, Payload: %s", url, string(payloadBytes))
	logger.SysLogf("AppBuilder DescribeApps response: Body: %s", string(resp))
	var result DescribeAppsResponse
	err = json.Unmarshal(resp, &result)
	if err != nil {
		return nil, err
	}

	return &result, nil
}

type ConversationResponse struct {
	RequestId      string `json:"request_id"`
	ConversationId string `json:"conversation_id"`
}

type ErrorResponse struct {
	RequestId string `json:"request_id"`
	Code      string `json:"code"`
	Message   string `json:"message"`
}

func (a *AppBuilderApi) CreateConversation(appId string) (*ConversationResponse, error) {
	url := a.BaseUrl + "/v2/app/conversation"
	payload := map[string]interface{}{
		"app_id": appId,
	}

	headers := map[string]string{
		"Content-Type":  "application/json",
		"Authorization": "Bearer " + a.AuthToken,
	}

	resp, err := a.doRequest("POST", url, payload, headers)
	if err != nil {
		return nil, err
	}

	payloadBytes, _ := json.Marshal(payload)
	logger.SysLogf("AppBuilder CreateConversation request: URL: %s, Payload: %s", url, string(payloadBytes))
	logger.SysLogf("AppBuilder CreateConversation response: Body: %s", string(resp))

	if strings.Contains(string(resp), "code") {
		var errorResp ErrorResponse
		err = json.Unmarshal(resp, &errorResp)
		if err != nil {
			return nil, err
		}
		return nil, fmt.Errorf("API error: %s (%s)", errorResp.Message, errorResp.Code)
	}

	var result ConversationResponse
	err = json.Unmarshal(resp, &result)
	if err != nil {
		return nil, err
	}

	return &result, nil
}

func (a *AppBuilderApi) doRequest(method, url string, payload interface{}, headers map[string]string) ([]byte, error) {
	payloadBytes, err := json.Marshal(payload)
	if err != nil {
		return nil, err
	}

	req, err := http.NewRequest(method, url, bytes.NewBuffer(payloadBytes))
	if err != nil {
		return nil, err
	}

	for key, value := range headers {
		req.Header.Set(key, value)
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	if resp.StatusCode >= 400 {
		return nil, fmt.Errorf("request failed with status %d: %s", resp.StatusCode, string(body))
	}

	return body, nil
}
