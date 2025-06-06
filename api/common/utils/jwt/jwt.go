package jwt

import (
	"time"

	"github.com/53AI/53AIHub/common/utils/env"
	"github.com/golang-jwt/jwt/v5"
)

var secretKey = []byte(env.String("JWT_SECRET", "secret"))

func UserGenerateJWT(userID int64, eid int64) (string, error) {
	claims := jwt.MapClaims{
		"user_id": userID,
		"eid":     eid,
		"exp":     time.Now().Add(168 * time.Hour).Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(secretKey)
}

func UserParseJWT(tokenString string) (int64, int64, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return secretKey, nil
	})

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		// 判断是否存在 eid，如果不存在则是 saas 用户 token，这里登录无效
		if _, ok := claims["eid"]; !ok {
			// 返回无效 token 错误
			return 0, 0, jwt.ErrTokenInvalidClaims
		}
		return int64(claims["user_id"].(float64)),
			int64(claims["eid"].(float64)), nil
	}
	return 0, 0, err
}
