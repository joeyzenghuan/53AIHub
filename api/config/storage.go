package config

import "github.com/53AI/53AIHub/common/utils/env"

var StorageType = env.String("STORAGE", "local")
var StorageBasePath = env.String("BASE_PATH", "static/uploads")
var AliyunOssAccessKeyID = env.String("ALIYUN_OSS_ACCESS_KEY_ID", "")
var AliyunOssAccessKeySecret = env.String("ALIYUN_OSS_ACCESS_KEY_SECRET", "")
var AliyunOssEndpoint = env.String("ALIYUN_OSS_ENDPOINT", "")
var AliyunOssBucketName = env.String("ALIYUN_OSS_BUCKET_NAME", "")
