package middleware

import (
	"fmt"
	"time"

	"github.com/53AI/53AIHub/common/session"
	"github.com/gin-gonic/gin"
)

func Logger() gin.HandlerFunc {
	return func(c *gin.Context) {
		// 保存请求协议和域名
		if c.Request.URL.Scheme != "" {
			c.Set(session.SESSION_REQUEST_PROTOCOL, c.Request.URL.Scheme)
		} else {
			c.Set(session.SESSION_REQUEST_PROTOCOL, "http")
		}
		c.Set(session.SESSION_REQUEST_DOMAIN, c.Request.Host)

		// 记录请求开始时间
		start := time.Now()

		// 处理请求
		c.Next()

		// 计算请求耗时
		duration := time.Since(start)

		// 记录日志
		fmt.Printf("Method: %s | Path: %s | Status: %d | Duration: %v\n",
			c.Request.Method,
			c.Request.URL.Path,
			c.Writer.Status(),
			duration,
		)
	}
}
