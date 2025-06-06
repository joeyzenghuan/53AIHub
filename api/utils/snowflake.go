package utils

import (
	"strconv"
	"sync"
	"time"
)

// Snowflake ID generator
type Snowflake struct {
	mutex      sync.Mutex
	timestamp  int64
	workerId   int64
	sequence   int64
	startEpoch int64
}

// NewSnowflake creates a new Snowflake ID generator
func NewSnowflake(workerId int64) *Snowflake {
	// Use 2023-01-01 00:00:00 as start epoch
	startEpoch := int64(1672531200000)
	return &Snowflake{
		timestamp:  0,
		workerId:   workerId & 0x3FF, // 10-bit worker ID
		sequence:   0,
		startEpoch: startEpoch,
	}
}

// NextId generates the next ID
func (s *Snowflake) NextId() int64 {
	s.mutex.Lock()
	defer s.mutex.Unlock()

	currentTimestamp := time.Now().UnixNano() / 1e6 // Timestamp in milliseconds

	// If current time is less than last timestamp, system clock has moved backwards
	if currentTimestamp < s.timestamp {
		// Simple handling: use the last timestamp
		currentTimestamp = s.timestamp
	}

	// If generating ID in same millisecond, increment sequence
	if currentTimestamp == s.timestamp {
		s.sequence = (s.sequence + 1) & 0xFFF // 12-bit sequence
		// Sequence overflow in same millisecond
		if s.sequence == 0 {
			// Block until next millisecond
			currentTimestamp = s.waitNextMillis(currentTimestamp)
		}
	} else {
		// Reset sequence for different timestamp
		s.sequence = 0
	}

	// Update last timestamp
	s.timestamp = currentTimestamp

	// Combine timestamp, worker ID and sequence to generate 64-bit ID
	// timestamp bits | worker ID bits | sequence bits
	return ((currentTimestamp - s.startEpoch) << 22) | (s.workerId << 12) | s.sequence
}

// waitNextMillis blocks until next millisecond
func (s *Snowflake) waitNextMillis(lastTimestamp int64) int64 {
	timestamp := time.Now().UnixNano() / 1e6
	for timestamp <= lastTimestamp {
		timestamp = time.Now().UnixNano() / 1e6
	}
	return timestamp
}

// Global Snowflake generator instance
var defaultSnowflake = NewSnowflake(1) // Using worker ID = 1

// GenerateOrderId generates a unique order ID that complies with WeChat Pay requirements
// Must be 6-32 characters, can only contain numbers, letters and specific symbols
func GenerateOrderId() string {
	// Generate base ID using Snowflake algorithm
	snowflakeId := defaultSnowflake.NextId()

	// Convert to base36 string (contains numbers and letters)
	// Base36: 0-9 and a-z
	baseId := strconv.FormatInt(snowflakeId, 36)

	// Add prefix for better identification
	prefix := "AH"

	// Combine order ID
	orderId := prefix + baseId

	// Ensure length is between 6-32
	if len(orderId) < 6 {
		// Add timestamp if too short
		orderId = orderId + time.Now().Format("150405")
	} else if len(orderId) > 32 {
		// Truncate if too long
		orderId = orderId[:32]
	}

	return orderId
}
