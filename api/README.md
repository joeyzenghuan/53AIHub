# 53AIHub 后端接口

53AIHub 是一个强大的 AI 代理管理平台，支持多种 AI 模型的接入和管理。本指南将帮助您快速上手并开始使用 53AIHub。

## 目录

- [53AIHub 后端接口](#53aihub-后端接口)
  - [目录](#目录)
  - [环境要求](#环境要求)
  - [快速开始](#快速开始)
    - [使用 Docker Compose 启动](#使用-docker-compose-启动)
    - [使用 Go 源码编译启动](#使用-go-源码编译启动)
    - [源代码编译启动](#源代码编译启动)
    - [使用预编译文件启动](#使用预编译文件启动)
  - [配置说明](#配置说明)
  - [常见问题排查](#常见问题排查)
    - [1. 服务无法启动](#1-服务无法启动)
    - [2. 数据库问题](#2-数据库问题)
    - [3. 微信支付配置](#3-微信支付配置)
    - [4. Token 编码器初始化失败](#4-token-编码器初始化失败)

## 环境要求

- Docker 和 Docker Compose (如使用容器化部署)
- Go 1.24+ (如从源码编译)

## 快速开始

1. 克隆仓库到本地

```bash
git clone https://github.com/53AI/53AIHub.git
cd 53AIHub
```

### 使用 Docker Compose 启动


2. 进入 docker 目录并启动服务

```bash
cd docker
docker-compose up -d
```

这将启动 53AIHub 应用 (端口 3000 可在docker-compose.yml中修改)。

服务将在 `http://localhost:3000` 上运行。

### 使用 Go 源码编译启动

1. 确保你本地有 Go 语言环境和构建工具，以及node和npm环境
2. 先进入web目录构建前端的网页前台与管理后台(**非常重要**)
3. 再进入本目录，执行构建
```bash
make build-windows-cgo
```
4. 构建完成后，可执行文件将生成在 `bin` 目录下。
5. 运行可执行文件

### 源代码编译启动

1. 安装依赖并编译

```bash
go mod tidy
go build -o bin/53aihub main.go
```

3. 启动 53AIHub 服务

```bash
./bin/53aihub
```

服务将在默认端口上运行（通常是 3000，可通过.evn文件的 PORT 环境变量修改）。

### 使用预编译文件启动

1. 从 GitHub Releases 页面下载预编译文件

访问 [GitHub Releases](https://github.com/53AI/53AIHub/releases) 下载适合您操作系统的预编译文件。

2. 解压下载的文件

```bash
# Linux/MacOS
tar -xzvf 53aihub-[版本号]-[系统].tar.gz

# Windows
# 使用解压软件解压 53aihub-[版本号]-windows.zip
```

3. 启动 53AIHub

- Linux/MacOS:
  
  ```bash
  chmod +x 53aihub
  ./53aihub
  ```
- Windows:
  双击 `53aihub.exe` 文件启动

服务将在默认端口上`3000`运行。

## 配置说明

53AIHub 默认不需要任何配置即可启动，它使用以下默认配置：

- 数据库：SQLite（默认，无需配置）
- 端口：默认为 3000（可通过.env的 PORT 环境变量修改）

如果需要特定功能，可以配置以下环境变量：

- `SQL_DSN`: 数据库连接字符串，默认使用 SQLite
- `PORT`: 服务监听端口，默认为 3000
- `LOG_LEVEL`: 日志级别，可选值为 DEBUG、INFO（默认）
- `API_HOST`: API 主机地址，如需支持微信支付，必须配置此项

## 常见问题排查

### 1. 服务无法启动

- 检查端口是否被占用
- 查看日志文件中的错误信息

```bash
cat logs/53aihub.log
```

### 2. 数据库问题

默认情况下，53AIHub 使用 SQLite 数据库，无需额外配置。如果您配置了 MySQL 数据库但连接失败：

- 确认 MySQL 服务是否正常运行
- 检查数据库连接参数是否正确
- 确认数据库用户是否有足够的权限

### 3. 微信支付配置

如需支持微信支付功能，必须配置 `API_HOST` 环境变量：

```bash
export API_HOST="http://your-domain.com"
```

或在启动时指定：

```bash
API_HOST="http://your-domain.com" ./53aihub
```

### 4. Token 编码器初始化失败

错误信息示例：

```
panic: runtime error: invalid memory address or nil pointer dereference
```

可能原因：

- billingratio.ModelRatio 为 nil
- logger 未正确初始化

解决方法：

- 确保在使用 logger 前已正确初始化

如果您遇到其他问题，请提交 GitHub Issue 获取支持。

```

```

