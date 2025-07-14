package huawei_cloud

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"errors"
	"fmt"
	"math"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
)

type IMessageResp struct {
	ResultCode string
	ResultMsg  string
}

const (
	TIMESTAMP = "timestamp"
	NONCE     = "nonce"
	SIGNATURE = "signature"
	TIME_DIFF = 60 * time.Second
)

func VerifySignature(c *gin.Context, accessKey string) error {
	// 从请求中获取时间戳
	timestamp := c.Query("timestamp")
	if timestamp == "" {
		return errors.New("缺少时间戳")
	}

	// 获取请求体
	body, err := c.GetRawData()
	if err != nil {
		return errors.New("获取请求体失败")
	}

	// 验证时间
	if !validateReqTime(timestamp) {
		return errors.New("时间戳无效")
	}

	// 获取随机字符串
	nonce := c.Query("nonce")
	if nonce == "" {
		return errors.New("缺少随机字符串")
	}

	// 获取签名
	signature := c.Query("signature")
	if signature == "" {
		return errors.New("缺少签名")
	}

	// 生成签名并验证
	generatedSig := generateSignature(accessKey, body, timestamp, nonce)
	if !strings.EqualFold(signature, generatedSig) {
		return errors.New("签名验证失败")
	}

	return nil
}

func generateSignature(accessKey string, body []byte, timestamp string, nonce string) string {
	// 计算请求体HMAC-SHA256哈希
	bodyHash := hmacSHA256(body, accessKey)

	// 构建规范请求字符串
	canonicalRequest := fmt.Sprintf("%s%s%s%s",
		accessKey, nonce, timestamp, strings.ToLower(hex.EncodeToString(bodyHash)))

	// 计算最终签名
	signature := hmacSHA256([]byte(canonicalRequest), accessKey)
	return strings.ToLower(hex.EncodeToString(signature))
}

// 辅助函数：计算HMAC-SHA256
func hmacSHA256(data []byte, key string) []byte {
	h := hmac.New(sha256.New, []byte(key))
	h.Write(data)
	return h.Sum(nil)
}

func validateReqTime(timestamp string) bool {
	reqTime, err := strconv.ParseInt(timestamp, 10, 64)
	if err != nil {
		return false
	}

	// 华为云时间戳是毫秒级，转换为秒
	reqTime = reqTime / 1000
	currentTime := time.Now().Unix()

	// 允许60秒的时间差
	return math.Abs(float64(currentTime-reqTime)) <= 60
}
