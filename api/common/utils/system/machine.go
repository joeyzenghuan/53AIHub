package system

import (
	"bufio"
	"crypto/md5"
	"fmt"
	"net"
	"os"
	"runtime"
	"strings"

	"github.com/53AI/53AIHub/common/logger"
)

const (
	EnvFilePath = ".env"
)

// MachineInfo 机器信息结构
type MachineInfo struct {
	MachineCode string `json:"machine_code"`
	OS          string `json:"os"`
	Arch        string `json:"arch"`
	Hostname    string `json:"hostname"`
	Version     string `json:"version"`
}

// GenerateMachineCode 生成唯一机器码
func GenerateMachineCode() (string, error) {
	// 获取系统信息
	hostname, _ := os.Hostname()

	// 获取网络接口MAC地址
	interfaces, err := net.Interfaces()
	if err != nil {
		logger.SysLogf("Failed to get network interfaces: %v", err)
		return "", err
	}

	var macAddresses []string
	for _, iface := range interfaces {
		// 跳过回环接口和虚拟接口
		if iface.Flags&net.FlagLoopback != 0 || iface.Flags&net.FlagUp == 0 {
			continue
		}

		mac := iface.HardwareAddr.String()
		if mac != "" && mac != "00:00:00:00:00:00" {
			macAddresses = append(macAddresses, mac)
		}
	}

	// 构建唯一标识字符串
	identifier := fmt.Sprintf("%s-%s-%s-%s",
		hostname,
		runtime.GOOS,
		runtime.GOARCH,
		strings.Join(macAddresses, "-"))

	// 生成MD5哈希作为机器码
	hash := md5.New()
	hash.Write([]byte(identifier))
	machineCode := fmt.Sprintf("%x", hash.Sum(nil))

	logger.SysLogf("Generated machine code: %s", machineCode)
	return machineCode, nil
}

// GetMachineInfo 获取完整的机器信息
func GetMachineInfo() (*MachineInfo, error) {
	// 从环境变量或生成新的机器码
	machineCode, err := GetOrGenerateMachineCode()
	if err != nil {
		return nil, err
	}

	hostname, _ := os.Hostname()
	version := GetVersion()

	return &MachineInfo{
		MachineCode: machineCode,
		OS:          runtime.GOOS,
		Arch:        runtime.GOARCH,
		Hostname:    hostname,
		Version:     version,
	}, nil
}

// GetOrGenerateMachineCode 获取或生成机器码
func GetOrGenerateMachineCode() (string, error) {
	// 先尝试从环境变量中获取
	existingCode := os.Getenv("MACHINE_CODE")
	if existingCode != "" {
		logger.SysLogf("Using existing machine code from environment: %s", existingCode)
		return existingCode, nil
	}

	// 尝试从.env文件中读取
	envMap, err := readEnvFile()
	if err != nil {
		logger.SysLogf("Failed to read .env file: %v", err)
	} else {
		if code, exists := envMap["MACHINE_CODE"]; exists && code != "" {
			logger.SysLogf("Using existing machine code from .env file: %s", code)
			return code, nil
		}
	}

	// 生成新的机器码
	machineCode, err := GenerateMachineCode()
	if err != nil {
		return "", err
	}

	// 保存到.env文件
	if err := saveMachineCodeToEnv(machineCode); err != nil {
		logger.SysLogf("Failed to save machine code to .env file: %v", err)
		// 不返回错误，因为机器码已经生成成功
	}

	return machineCode, nil
}

// GetVersion 获取版本信息
func GetVersion() string {
	// 尝试从版本文件读取
	if content, err := os.ReadFile("bin/version.txt"); err == nil {
		version := strings.TrimSpace(string(content))
		if version != "" {
			return version
		}
	}

	// 尝试从环境变量读取
	if version := os.Getenv("VERSION"); version != "" {
		return version
	}

	// 默认版本
	return "1.0.0"
}

// readEnvFile 读取.env文件
func readEnvFile() (map[string]string, error) {
	file, err := os.Open(EnvFilePath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	envMap := make(map[string]string)
	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}

		parts := strings.SplitN(line, "=", 2)
		if len(parts) == 2 {
			key := strings.TrimSpace(parts[0])
			value := strings.TrimSpace(parts[1])
			// 移除可能的引号
			value = strings.Trim(value, "\"'")
			envMap[key] = value
		}
	}

	return envMap, scanner.Err()
}

// writeEnvFile 写入.env文件
func writeEnvFile(envMap map[string]string) error {
	file, err := os.Create(EnvFilePath)
	if err != nil {
		return err
	}
	defer file.Close()

	writer := bufio.NewWriter(file)
	defer writer.Flush()

	for key, value := range envMap {
		_, err := writer.WriteString(fmt.Sprintf("%s=\"%s\"\n", key, value))
		if err != nil {
			return err
		}
	}

	return nil
}

// saveMachineCodeToEnv 保存机器码到.env文件
func saveMachineCodeToEnv(machineCode string) error {
	envMap, err := readEnvFile()
	if err != nil {
		// 如果文件不存在，创建新的映射
		envMap = make(map[string]string)
	}

	// 检查是否已存在
	if existingCode, exists := envMap["MACHINE_CODE"]; exists && existingCode != "" {
		logger.SysLogf("MACHINE_CODE already exists in .env file: %s, skipping update", existingCode)
		return nil
	}

	// 添加机器码
	envMap["MACHINE_CODE"] = machineCode

	// 写回文件
	if err := writeEnvFile(envMap); err != nil {
		return fmt.Errorf("failed to write .env file: %v", err)
	}

	logger.SysLogf("Successfully saved MACHINE_CODE=%s to %s", machineCode, EnvFilePath)
	return nil
}

// AppendToEnvFile 追加内容到.env文件（如果不存在的话）
func AppendToEnvFile(key, value string) error {
	envMap, err := readEnvFile()
	if err != nil {
		envMap = make(map[string]string)
	}

	// 检查是否已存在
	if existingValue, exists := envMap[key]; exists && existingValue != "" {
		logger.SysLogf("%s already exists in .env file: %s, skipping update", key, existingValue)
		return nil
	}

	// 添加新值
	envMap[key] = value

	// 写回文件
	if err := writeEnvFile(envMap); err != nil {
		return fmt.Errorf("failed to write .env file: %v", err)
	}

	logger.SysLogf("Successfully saved %s=%s to %s", key, value, EnvFilePath)
	return nil
}
