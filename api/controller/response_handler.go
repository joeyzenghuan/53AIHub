package controller

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"
	"strings"

	"github.com/53AI/53AIHub/common/logger"
	"github.com/gin-gonic/gin"
)

// GetResponseContent 获取响应内容
func GetResponseContent(c *gin.Context, isStream bool, resp *http.Response) (string, string) {
	if resp == nil {
		return "", ""
	}

	if !isStream {
		respBody, err := io.ReadAll(resp.Body)
		if err != nil {
			logger.Errorf(c.Request.Context(), "read response body failed: %s", err.Error())
			return "", ""
		}
		// 重置响应体，以便后续处理
		resp.Body = io.NopCloser(bytes.NewBuffer(respBody))

		// 尝试解析不同格式的响应内容
		var openaiResp struct {
			Choices []struct {
				Message struct {
					Content string `json:"content"`
				} `json:"message"`
				Text             string `json:"text"`
				ReasoningContent string `json:"reasoning_content"`
			} `json:"choices"`
			Text             string `json:"text"`
			ReasoningContent string `json:"reasoning_content"`
		}

		if err := json.Unmarshal(respBody, &openaiResp); err != nil {
			logger.Errorf(c.Request.Context(), "unmarshal response failed: %s", err.Error())
			return string(respBody), ""
		}

		// 优先检查 message.content (chat completions)
		if len(openaiResp.Choices) > 0 {
			if openaiResp.Choices[0].Message.Content != "" {
				return openaiResp.Choices[0].Message.Content, openaiResp.Choices[0].ReasoningContent
			}
			if openaiResp.Choices[0].Text != "" {
				return openaiResp.Choices[0].Text, openaiResp.Choices[0].ReasoningContent
			}
			if openaiResp.Choices[0].ReasoningContent != "" {
				return "", openaiResp.Choices[0].ReasoningContent
			}
		}
		if openaiResp.Text != "" {
			return openaiResp.Text, openaiResp.ReasoningContent
		}
		if openaiResp.ReasoningContent != "" {
			return "", openaiResp.ReasoningContent
		}
		return string(respBody), ""
	}

	// 对于流式响应，从上下文中获取收集器
	collector, exists := c.Get("stream_response_collector")
	if exists {
		if streamCollector, ok := collector.(*StreamResponseCollector); ok {
			return streamCollector.GetContent()
		}
	}

	return "", ""
}

// StreamResponseCollector 用于收集流式响应
type StreamResponseCollector struct {
	content          strings.Builder
	reasoningContent strings.Builder
}

func NewStreamResponseCollector() *StreamResponseCollector {
	return &StreamResponseCollector{
		content:          strings.Builder{},
		reasoningContent: strings.Builder{},
	}
}

func (c *StreamResponseCollector) Collect(chunk []byte) {
	data := string(chunk)
	lines := strings.Split(data, "\n")

	for _, line := range lines {
		if strings.HasPrefix(line, "data: ") {
			dataContent := strings.TrimPrefix(line, "data: ")
			if dataContent == "[DONE]" {
				continue
			}

			var streamResp struct {
				Choices []struct {
					Delta struct {
						Content          *string `json:"content"`
						ReasoningContent *string `json:"reasoning_content"`
					} `json:"delta"`
				} `json:"choices"`
			}

			if err := json.Unmarshal([]byte(dataContent), &streamResp); err == nil {
				if len(streamResp.Choices) > 0 {
					delta := streamResp.Choices[0].Delta
					if delta.Content != nil && *delta.Content != "" {
						c.content.WriteString(*delta.Content)
					}
					if delta.ReasoningContent != nil && *delta.ReasoningContent != "" {
						c.reasoningContent.WriteString(*delta.ReasoningContent)
					}
				}
			}
		}
	}
}

func (c *StreamResponseCollector) GetContent() (string, string) {
	return c.content.String(), c.reasoningContent.String()
}

// StreamResponseInterceptor 用于拦截和收集流式响应
type StreamResponseInterceptor struct {
	gin.ResponseWriter
	collector *StreamResponseCollector
}

// Write 实现 ResponseWriter 接口
func (w *StreamResponseInterceptor) Write(b []byte) (int, error) {
	// 收集响应内容
	w.collector.Collect(b)
	// 同时转发给客户端
	return w.ResponseWriter.Write(b)
}

// WriteHeader 实现 ResponseWriter 接口
func (w *StreamResponseInterceptor) WriteHeader(statusCode int) {
	w.ResponseWriter.WriteHeader(statusCode)
}

// Flush 实现 Flusher 接口
func (w *StreamResponseInterceptor) Flush() {
	if flusher, ok := w.ResponseWriter.(http.Flusher); ok {
		flusher.Flush()
	}
}

// SetupStreamInterceptor 设置流式响应拦截器
func SetupStreamInterceptor(c *gin.Context) *StreamResponseCollector {
	collector := NewStreamResponseCollector()
	c.Set("stream_response_collector", collector)

	// 创建并设置拦截器
	interceptor := &StreamResponseInterceptor{
		ResponseWriter: c.Writer,
		collector:      collector,
	}
	c.Writer = interceptor

	return collector
}
