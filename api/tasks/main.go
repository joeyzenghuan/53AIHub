package tasks

import (
	"time"
)

func Start() {
	StartOrderExpirationTask(1 * time.Minute)
	StartChannelUpdateKeyTask()
}