package dify

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"

	"github.com/songquanpeng/one-api/common/logger"
	"github.com/songquanpeng/one-api/relay/meta"
)

// DifyInfoAdaptor DIFY 应用信息适配器
type DifyInfoAdaptor struct{}

// AppInfoResponse DIFY 应用基本信息响应
type AppInfoResponse struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`
	Mode        string   `json:"mode"`
	AuthorName  string   `json:"author_name"`
}

// AppParametersResponse DIFY 应用参数配置响应
type AppParametersResponse struct {
	UserInputForm    []UserInputFormItem    `json:"user_input_form"`
	FileUpload       FileUploadConfig       `json:"file_upload"`
	SystemParameters SystemParametersConfig `json:"system_parameters"`
}

// UserInputFormItem 用户输入表单项
type UserInputFormItem struct {
	TextInput *TextInputConfig `json:"text-input,omitempty"`
	Paragraph *ParagraphConfig `json:"paragraph,omitempty"`
	Select    *SelectConfig    `json:"select,omitempty"`
}

// TextInputConfig 文本输入控件配置
type TextInputConfig struct {
	Label    string `json:"label"`
	Variable string `json:"variable"`
	Required bool   `json:"required"`
	Default  string `json:"default"`
}

// ParagraphConfig 段落文本输入控件配置
type ParagraphConfig struct {
	Label    string `json:"label"`
	Variable string `json:"variable"`
	Required bool   `json:"required"`
	Default  string `json:"default"`
}

// SelectConfig 下拉控件配置
type SelectConfig struct {
	Label    string   `json:"label"`
	Variable string   `json:"variable"`
	Required bool     `json:"required"`
	Default  string   `json:"default"`
	Options  []string `json:"options"`
}

// FileUploadConfig 文件上传配置
type FileUploadConfig struct {
	Image ImageUploadConfig `json:"image"`
}

// ImageUploadConfig 图片上传配置
type ImageUploadConfig struct {
	Enabled         bool     `json:"enabled"`
	NumberLimits    int      `json:"number_limits"`
	Detail          string   `json:"detail,omitempty"`
	TransferMethods []string `json:"transfer_methods"`
}

// SystemParametersConfig 系统参数配置
type SystemParametersConfig struct {
	FileSizeLimit      int `json:"file_size_limit"`
	ImageFileSizeLimit int `json:"image_file_size_limit"`
	AudioFileSizeLimit int `json:"audio_file_size_limit"`
	VideoFileSizeLimit int `json:"video_file_size_limit"`
}

// GetAppInfo 获取 DIFY 应用基本信息
func (a *DifyInfoAdaptor) GetAppInfo(meta *meta.Meta) (*AppInfoResponse, error) {
	url, err := a.buildInfoURL(meta.BaseURL)
	if err != nil {
		return nil, err
	}

	logger.SysLogf("🚀 请求DIFY应用信息")
	logger.SysLogf("┌─────────────────────────────────────────────────────────────")
	logger.SysLogf("│ 📡 请求URL: %s", url)
	logger.SysLogf("│ 🔑 API Key: %s", maskAPIKey(meta.APIKey))
	logger.SysLogf("│ 📝 请求方法: GET")
	logger.SysLogf("└─────────────────────────────────────────────────────────────")

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("创建请求失败: %v", err)
	}

	req.Header.Set("Authorization", "Bearer "+meta.APIKey)
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		logger.SysErrorf("❌ DIFY应用信息请求失败: %v", err)
		return nil, fmt.Errorf("请求失败: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		logger.SysErrorf("❌ DIFY应用信息请求失败 - 状态码: %d", resp.StatusCode)
		return nil, fmt.Errorf("请求失败，状态码: %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("读取响应失败: %v", err)
	}

	logger.SysLogf("✅ DIFY应用信息请求成功 - 状态码: %d", resp.StatusCode)
	logger.SysLogf("📦 响应内容: %s", string(body))

	var appInfo AppInfoResponse
	if err := json.Unmarshal(body, &appInfo); err != nil {
		return nil, fmt.Errorf("解析响应失败: %v", err)
	}

	return &appInfo, nil
}

// GetAppParameters 获取 DIFY 应用参数配置
func (a *DifyInfoAdaptor) GetAppParameters(meta *meta.Meta) (*AppParametersResponse, error) {
	url, err := a.buildParametersURL(meta.BaseURL)
	if err != nil {
		return nil, err
	}

	logger.SysLogf("🚀 请求DIFY应用参数")
	logger.SysLogf("┌─────────────────────────────────────────────────────────────")
	logger.SysLogf("│ 📡 请求URL: %s", url)
	logger.SysLogf("│ 🔑 API Key: %s", maskAPIKey(meta.APIKey))
	logger.SysLogf("│ 📝 请求方法: GET")
	logger.SysLogf("└─────────────────────────────────────────────────────────────")

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("创建请求失败: %v", err)
	}

	req.Header.Set("Authorization", "Bearer "+meta.APIKey)
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		logger.SysErrorf("❌ DIFY应用参数请求失败: %v", err)
		return nil, fmt.Errorf("请求失败: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		logger.SysErrorf("❌ DIFY应用参数请求失败 - 状态码: %d", resp.StatusCode)
		return nil, fmt.Errorf("请求失败，状态码: %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("读取响应失败: %v", err)
	}

	logger.SysLogf("✅ DIFY应用参数请求成功 - 状态码: %d", resp.StatusCode)
	logger.SysLogf("📦 响应内容: %s", string(body))

	var appParams AppParametersResponse
	if err := json.Unmarshal(body, &appParams); err != nil {
		return nil, fmt.Errorf("解析响应失败: %v", err)
	}

	return &appParams, nil
}

// buildInfoURL 构建应用信息接口URL
func (a *DifyInfoAdaptor) buildInfoURL(baseURL string) (string, error) {
	// 去掉可能的 /v1 后缀以避免重复
	baseURL = strings.TrimSuffix(baseURL, "/v1")
	// 确保 baseURL 不以 / 结尾
	baseURL = strings.TrimSuffix(baseURL, "/")

	return baseURL + "/v1/info", nil
}

// buildParametersURL 构建应用参数接口URL
func (a *DifyInfoAdaptor) buildParametersURL(baseURL string) (string, error) {
	// 去掉可能的 /v1 后缀以避免重复
	baseURL = strings.TrimSuffix(baseURL, "/v1")
	// 确保 baseURL 不以 / 结尾
	baseURL = strings.TrimSuffix(baseURL, "/")

	return baseURL + "/v1/parameters", nil
}

// maskAPIKey 遮蔽API密钥的敏感部分
func maskAPIKey(apiKey string) string {
	if len(apiKey) <= 8 {
		return "****"
	}
	return apiKey[:4] + "****" + apiKey[len(apiKey)-4:]
}
