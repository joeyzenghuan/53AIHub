package storage

import (
	"os"
	"path/filepath"
	"testing"
)

func TestSaveFile(t *testing.T) {
	// 创建 LocalStorage 实例
	tempDir := "../../static/uploads"
	localStorage := &LocalStorage{
		BasePath: "../../static/uploads",
	}

	fileContent := []byte("测试文件内容")
	fileName := "test.txt"
	err := localStorage.Save(fileContent, fileName)
	if err != nil {
		t.Errorf("保存文件失败: %v", err)
	}

	filePath := filepath.Join(tempDir, fileName)
	_, err = os.Stat(filePath)
	if err != nil {
		t.Errorf("文件不存在: %v", err)
	}

	localStorage.BasePath = "/invalid/path"
	err = localStorage.Save(fileContent, fileName)
	if err == nil {
		t.Errorf("创建目录失败时应返回错误")
	}
}
