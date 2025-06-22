package utils

import (
	"math/rand"
	"time"
)

var randomGenerator *rand.Rand

func init() {
	source := rand.NewSource(time.Now().UnixNano())
	randomGenerator = rand.New(source)
}

func GetRandomInt64(n int64) int64 {
	if n <= 0 {
		return 0
	}
	return randomGenerator.Int63n(n)
}
