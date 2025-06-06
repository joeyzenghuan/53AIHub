package storage

import (
	"bytes"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"io"
	"mime/multipart"
	"os"
	"path"
	"path/filepath"
	"sync"

	"github.com/53AI/53AIHub/config"
	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

var StorageInstance Storage = NewStorage()

type Storage interface {
	Save(file []byte, fileName string) error
	Exists(fileName string) bool
	Delete(fileName string) error
	Load(fileName string) ([]byte, error)
	GetBasePath() string
}

type LocalStorage struct {
	BasePath string
	mu       sync.RWMutex
}

type AliyunOSSStorage struct {
	client          *oss.Client
	bucket          *oss.Bucket
	Endpoint        string
	AccessKeyID     string
	AccessKeySecret string
	BucketName      string
	BasePath        string
}

func NewStorage() Storage {
	switch config.StorageType {
	case "aliyun_oss":
		client, err := oss.New(config.AliyunOssEndpoint, config.AliyunOssAccessKeyID, config.AliyunOssAccessKeySecret)
		if err != nil {
			panic(fmt.Errorf("failed to create oss client: %w", err))
		}
		bucket, err := client.Bucket(config.AliyunOssBucketName)
		if err != nil {
			panic(fmt.Errorf("failed to get oss bucket: %w", err))
		}
		return &AliyunOSSStorage{
			client:          client,
			bucket:          bucket,
			Endpoint:        config.AliyunOssEndpoint,
			AccessKeyID:     config.AliyunOssAccessKeyID,
			AccessKeySecret: config.AliyunOssAccessKeySecret,
			BucketName:      config.AliyunOssBucketName,
			BasePath:        config.StorageBasePath,
		}
	default:
		return &LocalStorage{BasePath: config.StorageBasePath}
	}
}

func (l *LocalStorage) Save(file []byte, fileName string) error {
	l.mu.Lock()
	defer l.mu.Unlock()

	if err := os.MkdirAll(path.Dir(fileName), 0755); err != nil {
		return fmt.Errorf("create dir error: %w", err)
	}

	if err := os.WriteFile(fileName, file, 0666); err != nil {
		return fmt.Errorf("write file error: %w", err)
	}

	return nil
}

func (l *LocalStorage) Exists(fileName string) bool {
	l.mu.RLock()
	defer l.mu.RUnlock()
	_, err := os.Stat(fileName)
	return !os.IsNotExist(err)
}

func (l *LocalStorage) Delete(fileName string) error {
	l.mu.Lock()
	defer l.mu.Unlock()
	err := os.Remove(fileName)
	if err != nil {
		return fmt.Errorf("remove file error: %w", err)
	}
	return nil
}

func (l *LocalStorage) Load(fileName string) ([]byte, error) {
	l.mu.RLock()
	defer l.mu.RUnlock()
	data, err := os.ReadFile(fileName)
	if err != nil {
		return nil, fmt.Errorf("read file error: %w", err)
	}
	return data, nil
}

func GetFileHash(file multipart.File) (string, error) {
	hash := sha256.New()
	if _, err := io.Copy(hash, file); err != nil {
		return "", err
	}

	if seeker, ok := file.(io.Seeker); ok {
		if _, err := seeker.Seek(0, io.SeekStart); err != nil {
			return "", fmt.Errorf("file seek error: %w", err)
		}
	}

	hashInBytes := hash.Sum(nil)
	return hex.EncodeToString(hashInBytes), nil
}

func (l *LocalStorage) GetBasePath() string {
	return l.BasePath
}

func (a *AliyunOSSStorage) Save(file []byte, fileName string) error {
	objectName := filepath.ToSlash(fileName)
	reader := bytes.NewReader(file)

	err := a.bucket.PutObject(objectName, reader)
	if err != nil {
		return fmt.Errorf("oss upload error: %w", err)
	}
	return nil
}

func (a *AliyunOSSStorage) Load(fileName string) ([]byte, error) {
	objectName := filepath.ToSlash(fileName)
	reader, err := a.bucket.GetObject(objectName)
	if err != nil {
		return nil, fmt.Errorf("oss file download error: %w", err)
	}
	defer reader.Close()
	return io.ReadAll(reader)
}

func (a *AliyunOSSStorage) Exists(fileName string) bool {
	objectName := filepath.ToSlash(fileName)
	exist, err := a.bucket.IsObjectExist(objectName)
	return err == nil && exist
}

func (a *AliyunOSSStorage) Delete(fileName string) error {
	objectName := filepath.ToSlash(fileName)
	if err := a.bucket.DeleteObject(objectName); err != nil {
		return fmt.Errorf("oss file delete error: %w", err)
	}
	return nil
}

func (a *AliyunOSSStorage) GetBasePath() string {
	return a.BasePath
}
