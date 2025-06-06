package middleware

import (
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
)

func Logger() gin.HandlerFunc {
	return func(c *gin.Context) {
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
