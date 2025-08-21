package n8n

import (
	"encoding/json"
	"testing"

	"github.com/songquanpeng/one-api/relay/meta"
)

func TestN8nWorkflowAdaptor_ConvertWorkflowRequest(t *testing.T) {
	// 创建测试适配器
	adaptor := &N8nWorkflowAdaptor{
		meta: &meta.Meta{
			ChannelId:       1,
			ActualModelName: "workflow-test-id",
			APIKey:          "test-key",
			BaseURL:         "http://localhost:5678",
		},
	}

	// 测试基本参数转换
	t.Run("基本参数转换", func(t *testing.T) {
		parameters := map[string]interface{}{
			"query":   "你是谁",
			"context": "测试上下文",
			"number":  42,
		}

		request, err := adaptor.ConvertWorkflowRequest("test-workflow-id", parameters)
		if err != nil {
			t.Fatalf("转换请求失败: %v", err)
		}

		if request == nil {
			t.Fatal("请求为空")
		}

		// 验证参数是否正确传递
		requestMap := map[string]interface{}(*request)
		if requestMap["query"] != "你是谁" {
			t.Errorf("query 参数不匹配，期望: 你是谁, 实际: %v", requestMap["query"])
		}

		if requestMap["number"] != 42 {
			t.Errorf("number 参数不匹配，期望: 42, 实际: %v", requestMap["number"])
		}
	})

	// 测试复杂参数结构
	t.Run("复杂参数结构", func(t *testing.T) {
		parameters := map[string]interface{}{
			"simple": "text",
			"array":  []interface{}{"item1", "item2"},
			"object": map[string]interface{}{
				"nested": "value",
				"count":  10,
			},
		}

		request, err := adaptor.ConvertWorkflowRequest("test-workflow-id", parameters)
		if err != nil {
			t.Fatalf("转换复杂参数失败: %v", err)
		}

		requestMap := map[string]interface{}(*request)

		// 验证数组参数
		if array, ok := requestMap["array"].([]interface{}); ok {
			if len(array) != 2 || array[0] != "item1" {
				t.Errorf("数组参数不匹配")
			}
		} else {
			t.Error("数组参数类型错误")
		}

		// 验证对象参数
		if obj, ok := requestMap["object"].(map[string]interface{}); ok {
			if obj["nested"] != "value" {
				t.Errorf("嵌套对象参数不匹配")
			}
		} else {
			t.Error("对象参数类型错误")
		}
	})
}

func TestN8nWorkflowAdaptor_ProcessResponse(t *testing.T) {
	adaptor := &N8nWorkflowAdaptor{
		meta: &meta.Meta{
			ChannelId:       1,
			OriginModelName: "workflow-test",
		},
	}

	// 测试标准 n8n 响应格式
	t.Run("标准响应格式", func(t *testing.T) {
		// 模拟 n8n 响应数据
		n8nResponse := []map[string]interface{}{
			{
				"output": "我是DeepSeek Chat，由深度求索公司开发的智能助手！",
				"query":  "你是谁",
			},
		}

		responseJSON, _ := json.Marshal(n8nResponse)

		// 这里我们测试响应转换逻辑
		outputData := adaptor.convertN8nResponseToOutputData(n8nResponse)

		if outputData["output"] != "我是DeepSeek Chat，由深度求索公司开发的智能助手！" {
			t.Errorf("输出内容不匹配")
		}

		if outputData["query"] != "你是谁" {
			t.Errorf("查询内容不匹配")
		}

		t.Logf("响应转换成功，输出字段数: %d", len(outputData))
		t.Logf("响应JSON长度: %d bytes", len(responseJSON))
	})

	// 测试空响应
	t.Run("空响应处理", func(t *testing.T) {
		emptyResponse := []map[string]interface{}{}
		outputData := adaptor.convertN8nResponseToOutputData(emptyResponse)

		if outputData["output"] != "" {
			t.Errorf("空响应应该返回空字符串")
		}
	})

	// 测试多项响应
	t.Run("多项响应处理", func(t *testing.T) {
		multiResponse := []map[string]interface{}{
			{"output": "第一个输出", "step": 1},
			{"output": "第二个输出", "step": 2},
		}

		outputData := adaptor.convertN8nResponseToOutputData(multiResponse)

		// 多项响应应该包含 items 和 count 字段
		if items, ok := outputData["items"].(N8nWorkflowResponse); ok {
			if len(items) != 2 {
				t.Errorf("多项响应项目数不匹配，期望: 2, 实际: %d", len(items))
			}
		} else {
			t.Errorf("多项响应应该包含 items 字段，实际类型: %T, 值: %v", outputData["items"], outputData["items"])
		}

		if count, ok := outputData["count"].(int); ok {
			if count != 2 {
				t.Errorf("多项响应计数不匹配，期望: 2, 实际: %d", count)
			}
		} else {
			t.Errorf("多项响应应该包含 count 字段，实际类型: %T, 值: %v", outputData["count"], outputData["count"])
		}

		// 验证第一项的输出内容
		if items, ok := outputData["items"].(N8nWorkflowResponse); ok && len(items) > 0 {
			if output, exists := items[0]["output"]; exists {
				if output != "第一个输出" {
					t.Errorf("第一项输出内容不匹配，期望: 第一个输出, 实际: %v", output)
				}
			}
		}
	})
}

func TestExtractWorkflowID(t *testing.T) {
	tests := []struct {
		name     string
		input    string
		expected string
	}{
		{
			name:     "标准workflow格式",
			input:    "workflow-d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
			expected: "d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
		},
		{
			name:     "直接UUID格式",
			input:    "d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
			expected: "d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
		},
		{
			name:     "简单名称",
			input:    "my-workflow",
			expected: "my-workflow",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := extractWorkflowID(tt.input)
			if result != tt.expected {
				t.Errorf("extractWorkflowID(%s) = %s, 期望 %s", tt.input, result, tt.expected)
			}
		})
	}
}

func TestValidateN8nWorkflowID(t *testing.T) {
	tests := []struct {
		name     string
		input    string
		expected bool
	}{
		{
			name:     "有效UUID",
			input:    "d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
			expected: true,
		},
		{
			name:     "有效短ID",
			input:    "my-workflow-123",
			expected: true,
		},
		{
			name:     "空字符串",
			input:    "",
			expected: false,
		},
		{
			name:     "太短的ID",
			input:    "abc",
			expected: false,
		},
		{
			name:     "无连字符",
			input:    "abcdefghijk",
			expected: false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := ValidateN8nWorkflowID(tt.input)
			if result != tt.expected {
				t.Errorf("ValidateN8nWorkflowID(%s) = %v, 期望 %v", tt.input, result, tt.expected)
			}
		})
	}
}

func TestGetN8nWorkflowURL(t *testing.T) {
	tests := []struct {
		name       string
		baseURL    string
		workflowID string
		expected   string
	}{
		{
			name:       "标准URL",
			baseURL:    "http://localhost:5678",
			workflowID: "d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
			expected:   "http://localhost:5678/webhook/d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
		},
		{
			name:       "带尾部斜杠的URL",
			baseURL:    "http://localhost:5678/",
			workflowID: "test-workflow",
			expected:   "http://localhost:5678/webhook/test-workflow",
		},
		{
			name:       "HTTPS URL",
			baseURL:    "https://n8n.example.com",
			workflowID: "my-workflow-123",
			expected:   "https://n8n.example.com/webhook/my-workflow-123",
		},
		{
			name:       "webhook-test URL",
			baseURL:    "http://192.168.1.218:5678/webhook-test",
			workflowID: "d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
			expected:   "http://192.168.1.218:5678/webhook-test/d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
		},
		{
			name:       "webhook URL",
			baseURL:    "http://192.168.1.218:5678/webhook",
			workflowID: "d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
			expected:   "http://192.168.1.218:5678/webhook/d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
		},
		{
			name:       "webhook-test URL 带尾部斜杠",
			baseURL:    "http://192.168.1.218:5678/webhook-test/",
			workflowID: "test-workflow",
			expected:   "http://192.168.1.218:5678/webhook-test/test-workflow",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := GetN8nWorkflowURL(tt.baseURL, tt.workflowID)
			if result != tt.expected {
				t.Errorf("GetN8nWorkflowURL(%s, %s) = %s, 期望 %s",
					tt.baseURL, tt.workflowID, result, tt.expected)
			}
		})
	}
}

func TestN8nWorkflowAdaptor_GetRequestURL(t *testing.T) {
	tests := []struct {
		name        string
		baseURL     string
		modelName   string
		expectedURL string
	}{
		{
			name:        "标准baseURL",
			baseURL:     "http://192.168.1.218:5678",
			modelName:   "workflow-d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
			expectedURL: "http://192.168.1.218:5678/webhook/d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
		},
		{
			name:        "webhook-test baseURL",
			baseURL:     "http://192.168.1.218:5678/webhook-test",
			modelName:   "workflow-d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
			expectedURL: "http://192.168.1.218:5678/webhook-test/d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
		},
		{
			name:        "webhook baseURL",
			baseURL:     "http://192.168.1.218:5678/webhook",
			modelName:   "workflow-d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
			expectedURL: "http://192.168.1.218:5678/webhook/d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
		},
		{
			name:        "带尾部斜杠的webhook-test",
			baseURL:     "http://192.168.1.218:5678/webhook-test/",
			modelName:   "workflow-test-id",
			expectedURL: "http://192.168.1.218:5678/webhook-test/test-id",
		},
		{
			name:        "带尾部斜杠的标准URL",
			baseURL:     "http://192.168.1.218:5678/",
			modelName:   "workflow-test-id",
			expectedURL: "http://192.168.1.218:5678/webhook/test-id",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			adaptor := &N8nWorkflowAdaptor{}
			meta := &meta.Meta{
				BaseURL:         tt.baseURL,
				ActualModelName: tt.modelName,
			}
			adaptor.Init(meta)

			result, err := adaptor.GetRequestURL(meta)
			if err != nil {
				t.Fatalf("GetRequestURL() 返回错误: %v", err)
			}

			if result != tt.expectedURL {
				t.Errorf("GetRequestURL() = %s, 期望 %s", result, tt.expectedURL)
			}
		})
	}
}

// 基准测试
func BenchmarkConvertWorkflowRequest(b *testing.B) {
	adaptor := &N8nWorkflowAdaptor{
		meta: &meta.Meta{
			ChannelId:       1,
			ActualModelName: "workflow-test",
		},
	}

	parameters := map[string]interface{}{
		"query":   "测试查询",
		"context": "测试上下文",
		"data": map[string]interface{}{
			"nested": []interface{}{"item1", "item2", "item3"},
		},
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, err := adaptor.ConvertWorkflowRequest("test-workflow", parameters)
		if err != nil {
			b.Fatal(err)
		}
	}
}
