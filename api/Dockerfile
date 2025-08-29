FROM golang:1.24.1 as builder

# 设置工作目录
WORKDIR /app

# 设置GOPROXY为中国大陆代理
ENV GOPROXY=https://goproxy.cn,direct

# 复制go.mod和go.sum文件
COPY api/go.mod api/go.sum ./

# 下载依赖
RUN go mod download

# 复制api目录的源代码
COPY api/ .

# 构建应用 (使用纯Go构建，禁用CGO)
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o /app/53AIHub -ldflags '-X "github.com/53AI/53AIHub/config.VersionTime=$(date +%Y%m%d%H%M%S)" -w -s' ./main.go

# 使用精简的Alpine镜像作为运行时
FROM alpine:3.18

# 安装必要的运行时依赖
RUN apk --no-cache add ca-certificates tzdata

# 创建非root用户
RUN addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup

# 从构建阶段复制可执行文件
COPY --from=builder /app/53AIHub /app/53AIHub

# 更改文件所有者
RUN chown -R appuser:appgroup /app

# 切换到非root用户
USER appuser

# 设置工作目录
WORKDIR /app

# 暴露端口
EXPOSE 3000

# 设置启动命令
CMD ["./53AIHub"]