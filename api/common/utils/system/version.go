package system

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"

	"github.com/53AI/53AIHub/common/logger"
)

const (
	// VersionCheckURL 版本检查URL
	VersionCheckURL = "https://update.53ai.net/checkversion/53aihub/"
)

// VersionCheckResponse 版本检查响应
type VersionCheckResponse struct {
	CurrentVersion string `json:"current_version"`
	LatestVersion  string `json:"latest_version"`
	HasUpdate      bool   `json:"has_update"`
	UpdateURL      string `json:"update_url"`
	ReleaseNotes   string `json:"release_notes"`
	WebsiteId      string `json:"websiteid"`
	ServerURL      string `json:"serverurl"`
	Action         string `json:"action"`
}

// CheckVersion 检查版本更新
func CheckVersion() (*VersionCheckResponse, error) {
	logger.SysLog("Checking for version updates...")

	// 获取机器信息
	machineInfo, err := GetMachineInfo()
	if err != nil {
		logger.SysLogf("Failed to get machine info: %v", err)
		return nil, fmt.Errorf("获取机器信息失败: %v", err)
	}

	// 准备请求数据
	requestData := map[string]interface{}{
		"machine_code": machineInfo.MachineCode,
		"version":      machineInfo.Version,
		"os":           machineInfo.OS,
		"arch":         machineInfo.Arch,
		"hostname":     machineInfo.Hostname,
		"timestamp":    time.Now().Unix(),
		"action":       "install",
	}

	// 序列化请求数据
	jsonData, err := json.Marshal(requestData)
	if err != nil {
		logger.SysLogf("Failed to marshal request data: %v", err)
		return nil, fmt.Errorf("序列化请求数据失败: %v", err)
	}

	// 创建 HTTP 客户端
	client := &http.Client{
		Timeout: 10 * time.Second,
	}

	// 发送 POST 请求
	resp, err := client.Post(VersionCheckURL, "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		logger.SysLogf("Failed to check version: %v", err)
		return nil, fmt.Errorf("无法连接到版本检查服务器: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		logger.SysLogf("Version check failed with status %d: %s", resp.StatusCode, string(body))
		return nil, fmt.Errorf("版本检查失败，状态码: %d", resp.StatusCode)
	}

	var versionResp VersionCheckResponse
	if err := json.NewDecoder(resp.Body).Decode(&versionResp); err != nil {
		logger.SysLogf("Failed to parse version response: %v", err)
		return nil, fmt.Errorf("解析版本响应失败: %v", err)
	}

	logger.SysLogf("Version check completed. Current: %s, Latest: %s, HasUpdate: %v",
		versionResp.CurrentVersion, versionResp.LatestVersion, versionResp.HasUpdate)

	return &versionResp, nil
}

// CheckVersionAsync 异步检查版本更新
func CheckVersionAndReturn() (*VersionCheckResponse, string, error) {
	if resp, err := CheckVersion(); err != nil {
		logger.SysLogf("Async version check failed: %v", err)
		return resp, "", err
	} else {
		logger.SysLog("Async version check completed.")
		if resp.HasUpdate {
			logger.SysLogf("New version: %s, URL: %s", resp.LatestVersion, resp.UpdateURL)
		}
		if resp.ReleaseNotes != "" {
			logger.SysLogf("Release Notes:\n%s", resp.ReleaseNotes)
		}
		if resp.Action == "install" {
			logger.SysLog("开始执行站点配置流程...")

			// 1. 检查 .env 文件中是否已有 WEBSITE_ID
			existingID, exists, err := checkWebsiteIdExists()
			if err != nil {
				logger.SysErrorf("检查 WEBSITE_ID 失败: %v", err)
			}
			if exists {
				logger.SysLogf("检测到已配置的 WEBSITE_ID: %s，跳过创建流程", existingID)
			} else {
				addWebsiteIdToEnv(resp.WebsiteId)
				// 生成统计脚本
				statisticScript := fmt.Sprintf(`<script src="%s/script.js" data-website-id="%s"></script>`, resp.ServerURL, resp.WebsiteId)
				logger.SysLogf("Successfully generated and saved statistic script")
				return resp, statisticScript, nil
			}

		}
		return resp, "", nil
	}
}

// checkWebsiteIdExists 检查 .env 文件中是否已有 WEBSITE_ID
func checkWebsiteIdExists() (string, bool, error) {
	envMap, err := readEnvFile()
	if err != nil {
		return "", false, err
	}
	id, exists := envMap["WEBSITE_ID"]
	return id, exists && id != "", nil
}

// addWebsiteIdToEnv 添加 WEBSITE_ID 到 .env 文件
func addWebsiteIdToEnv(websiteId string) error {
	envMap, err := readEnvFile()
	if err != nil {
		return fmt.Errorf("读取 .env 文件失败: %v", err)
	}

	// 检查是否已存在
	if existingID, exists := envMap["WEBSITE_ID"]; exists && existingID != "" {
		logger.SysLogf("WEBSITE_ID 已存在: %s，跳过添加", existingID)
		return nil
	}

	// 添加新的 WEBSITE_ID
	envMap["WEBSITE_ID"] = websiteId

	// 写回文件
	if err := writeEnvFile(envMap); err != nil {
		return fmt.Errorf("写入 .env 文件失败: %v", err)
	}

	logger.SysLogf("成功将 WEBSITE_ID=%s 添加到 %s", websiteId, EnvFilePath)
	return nil
}
