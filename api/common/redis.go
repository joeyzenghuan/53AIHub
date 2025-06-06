package common

import (
	"context"
	"errors"
	"strconv"
	"time"

	"github.com/53AI/53AIHub/common/logger"
	"github.com/53AI/53AIHub/config"
	"github.com/go-redis/redis/v8"
)

var RDB redis.Cmdable
var RedisEnabled = true
var ErrRedisNotEnabled = errors.New("redis is not enabled")

// InitRedisClient
func InitRedisClient() error {
	if config.REDIS_CONN == "" {
		RedisEnabled = false
		logger.SysLog("REDIS_CONN not set, Redis is not enabled")
		return nil
	}

	logger.SysLog("Redis is enabled")
	opt, err := redis.ParseURL(config.REDIS_CONN)
	if err != nil {
		logger.FatalLog("Redis connection error: " + err.Error())
	}
	RDB = redis.NewClient(opt)

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	_, err = RDB.Ping(ctx).Result()
	if err != nil {
		logger.FatalLog("Redis test failed: " + err.Error())
	}
	return err
}

// checkRedisEnabled checks if Redis is enabled and logs a warning if not
// Returns true if Redis is enabled, false otherwise
func checkRedisEnabled() bool {
	if !RedisEnabled {
		logger.SysWarn("Redis operation attempted but Redis is not enabled")
		return false
	}
	return true
}

func IsRedisEnabled() bool {
	return RedisEnabled
}

func RedisSet(key string, value string, expiration time.Duration) error {
	if !checkRedisEnabled() {
		return ErrRedisNotEnabled
	}
	ctx := context.Background()
	return RDB.Set(ctx, key, value, expiration).Err()
}

func RedisGet(key string) (string, error) {
	if !checkRedisEnabled() {
		return "", ErrRedisNotEnabled
	}
	ctx := context.Background()
	return RDB.Get(ctx, key).Result()
}

func RedisDel(key string) error {
	if !checkRedisEnabled() {
		return ErrRedisNotEnabled
	}
	ctx := context.Background()
	return RDB.Del(ctx, key).Err()
}

func RedisDecrease(key string, value int64) error {
	if !checkRedisEnabled() {
		return ErrRedisNotEnabled
	}
	ctx := context.Background()
	return RDB.DecrBy(ctx, key, value).Err()
}

// RedisZAdd adds a member to a sorted set
// key: the key of the sorted set
// score: the score used for ordering
// member: the member to be added
// Returns the number of new members added and any error that occurred
func RedisZAdd(key string, score int64, member string) (int64, error) {
	if !checkRedisEnabled() {
		return 0, ErrRedisNotEnabled
	}
	ctx := context.Background()
	z := redis.Z{
		Score:  float64(score),
		Member: member,
	}
	return RDB.ZAdd(ctx, key, &z).Result()
}

// RedisZRangeByScore gets elements within a score range from a sorted set
// key: the key of the sorted set
// min: minimum score
// max: maximum score
// Returns all members in the specified range and any error that occurred
func RedisZRangeByScore(key string, min, max int64) ([]string, error) {
	if !checkRedisEnabled() {
		return nil, ErrRedisNotEnabled
	}
	ctx := context.Background()
	opt := &redis.ZRangeBy{
		Min: strconv.FormatInt(min, 10),
		Max: strconv.FormatInt(max, 10),
	}
	return RDB.ZRangeByScore(ctx, key, opt).Result()
}

// RedisZRem removes a member from a sorted set
// key: the key of the sorted set
// member: the member to be removed
// Returns the number of members removed and any error that occurred
func RedisZRem(key string, member string) (int64, error) {
	if !checkRedisEnabled() {
		return 0, ErrRedisNotEnabled
	}
	ctx := context.Background()
	return RDB.ZRem(ctx, key, member).Result()
}

// RedisZRemRangeByScore removes all elements within a score range from a sorted set
// key: the key of the sorted set
// min: minimum score
// max: maximum score
// Returns the number of members removed and any error that occurred
func RedisZRemRangeByScore(key string, min, max int64) (int64, error) {
	if !checkRedisEnabled() {
		return 0, ErrRedisNotEnabled
	}
	ctx := context.Background()
	return RDB.ZRemRangeByScore(ctx, key, strconv.FormatInt(min, 10), strconv.FormatInt(max, 10)).Result()
}

// RedisZCount counts the number of elements within a score range in a sorted set
// key: the key of the sorted set
// min: minimum score
// max: maximum score
// Returns the count of members in the specified range and any error that occurred
func RedisZCount(key string, min, max int64) (int64, error) {
	if !checkRedisEnabled() {
		return 0, ErrRedisNotEnabled
	}
	ctx := context.Background()
	return RDB.ZCount(ctx, key, strconv.FormatInt(min, 10), strconv.FormatInt(max, 10)).Result()
}

// RedisExists checks if a key exists
// key: the key to check
// Returns the number of existing keys and any error that occurred
func RedisExists(key string) (int64, error) {
	if !checkRedisEnabled() {
		return 0, ErrRedisNotEnabled
	}
	ctx := context.Background()
	return RDB.Exists(ctx, key).Result()
}

// RedisExpire sets an expiration time for a key
// key: the key to set expiration for
// expiration: the expiration duration
// Returns whether the expiration was set successfully and any error that occurred
func RedisExpire(key string, expiration time.Duration) (bool, error) {
	if !checkRedisEnabled() {
		return false, ErrRedisNotEnabled
	}
	ctx := context.Background()
	return RDB.Expire(ctx, key, expiration).Result()
}
