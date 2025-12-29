# 53AIHub 架构文档

## 数据存储架构

53AIHub项目采用MySQL作为主数据库，Redis作为缓存层的双重数据存储架构。本文档详细介绍了这两个数据服务的具体使用场景和配置方式。

## MySQL 使用场景

### 1. 主要数据存储

MySQL作为项目的主要持久化数据库，用于存储所有核心业务数据：

#### 用户系统
- **用户信息**：用户账户、认证信息、用户配置
- **企业信息**：企业账户、企业配置、企业权限
- **部门信息**：组织架构、部门关系、成员绑定

#### AI功能模块
- **会话记录**：用户与AI的对话历史
- **消息记录**：详细的消息内容和元数据
- **模型配置**：AI模型参数和设置
- **渠道配置**：API渠道配置和管理

#### 订单系统
- **订单信息**：订单状态、金额、时间等
- **支付设置**：支付方式配置
- **订阅关系**：用户订阅状态和权限

#### 权限管理
- **组织架构**：企业内部组织结构
- **权限配置**：角色权限分配
- **资源权限**：资源访问控制

#### 文件管理
- **文件上传记录**：文件元数据和存储信息
- **导航内容**：系统导航配置

#### 系统管理
- **系统日志**：操作日志和审计记录
- **系统设置**：全局配置参数
- **验证码记录**：邮件验证码的持久化存储

### 2. 数据库切换机制

项目支持灵活的数据库配置：

```go
// 数据库选择逻辑
func GetDbConn() (*gorm.DB, error) {
    dsn := os.Getenv("SQL_DSN")
    switch {
    case dsn != "":
        // 使用MySQL
        return openMySQL(dsn)
    default:
        // 使用SQLite
        return openSQLite()
    }
}
```

- **未设置SQL_DSN**：系统默认使用SQLite作为数据库
- **设置SQL_DSN**：系统使用MySQL作为主数据库
- **ORM框架**：使用GORM进行数据库操作和迁移

## Redis 使用场景

### 1. 邮件验证码缓存

Redis用于存储邮件验证码，提供快速的读写性能：

```go
// 存储验证码（带过期时间）
RedisSet("email_verification:" + email, code, codeExpiration)

// 验证时优先从Redis获取
storedCode, err := RedisGet("email_verification:" + email)
if err != nil || storedCode == "" {
    // Redis不存在时回退到数据库查询
    var vc model.VerificationCode
    err = model.DB.Where("target = ? AND type = 'email' AND code = ? AND expires_at > ?", 
                         email, code, now).First(&vc).Error
}
```

**优势**：
- 快速验证码验证，减少数据库查询
- 自动过期机制，无需手动清理
- 提升用户体验

### 2. 订单过期管理（核心功能）

使用Redis Sorted Set实现高效的订单过期处理机制：

```go
const ExpiredOrderCacheKey = "order:expired_queue"

// 添加订单到过期队列
func AddOrderToExpirationQueue(eid int64, orderID string, expireTime int64) {
    combinedID := fmt.Sprintf("%d:%s", eid, orderID)
    RedisZAdd(ExpiredOrderCacheKey, expireTime, combinedID)
}

// 处理过期订单
func processExpiredOrdersWithRedis() {
    now := time.Now().UnixMilli()
    
    // 获取已过期的订单
    orderIDs, err := RedisZRangeByScore(ExpiredOrderCacheKey, 0, now)
    
    // 批量处理过期订单
    for _, orderIDWithEid := range orderIDs {
        // 更新订单状态为过期
        err = model.UpdateOrderStatus(eid, orderID, model.OrderStatusExpired)
        
        // 从队列中移除已处理的订单
        RedisZRem(ExpiredOrderCacheKey, orderIDWithEid)
    }
}
```

**技术优势**：
- 使用Sorted Set按时间排序，高效查询过期订单
- 支持分布式环境下的订单过期处理
- 减少数据库轮询，提升系统性能

### 3. 支付订单缓存

Redis用于临时缓存支付订单数据：

```go
// 临时缓存支付订单数据
RedisSet(order.OrderId, string(orderData), 2*time.Hour)

// 获取支付订单缓存
data, err := RedisGet(orderId)
```

**应用场景**：
- 支付流程中的临时数据存储
- 减少支付过程中的数据库查询
- 提供快速的订单状态查询

### 4. 优雅降级机制

Redis具有完善的容错和降级机制：

```go
func checkRedisEnabled() bool {
    if !RedisEnabled {
        logger.SysWarn("Redis operation attempted but Redis is not enabled")
        return false
    }
    return true
}

// 所有Redis操作都检查可用性
func RedisSet(key string, value string, expiration time.Duration) error {
    if !checkRedisEnabled() {
        return ErrRedisNotEnabled
    }
    // 执行Redis操作
}
```

**降级策略**：
- **配置检测**：启动时检测Redis连接配置
- **自动禁用**：连接失败时自动禁用Redis功能
- **数据库回退**：验证码等功能回退到数据库存储
- **日志记录**：记录Redis操作失败和降级情况

## 部署配置

### Docker Compose 配置

```yaml
version: '3.8'

services:
  web:
    image: joeyzenghuan123/53ai-hub:latest
    env_file: .env
    ports:
      - "3000:3000"
    environment:
      - REDIS_HOST=redis
      - MYSQL_HOST=mysql
    depends_on:
      - redis
      - mysql
    restart: unless-stopped

  redis:
    image: redis:6-alpine
    command: redis-server --requirepass your_redis_password
    volumes:
      - redis_data:/data
    restart: unless-stopped

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: 53ai_hub
      MYSQL_USER: agent
      MYSQL_PASSWORD: agentpassword
    volumes:
      - mysql_data:/var/lib/mysql
    restart: unless-stopped

volumes:
  redis_data:
  mysql_data:
```

### 环境变量配置

#### Redis相关
- `REDIS_CONN`：Redis连接字符串
  - 格式：`redis://username:password@host:port/db`
  - 为空时禁用Redis功能

#### MySQL相关
- `SQL_DSN`：MySQL连接字符串
  - 格式：`username:password@tcp(host:port)/database?charset=utf8mb4&parseTime=True&loc=Local`
  - 为空时使用SQLite

#### 连接池配置
- `SQL_MAX_IDLE_CONNS`：最大空闲连接数（默认100）
- `SQL_MAX_OPEN_CONNS`：最大打开连接数（默认1000）
- `SQL_MAX_LIFETIME`：连接最大生命周期（默认60秒）

## 性能优化建议

### Redis优化
1. **内存管理**：合理设置Redis内存限制和淘汰策略
2. **持久化配置**：根据数据重要性选择RDB或AOF
3. **连接池**：配置适当的连接池大小
4. **监控指标**：监控内存使用、命中率等关键指标

### MySQL优化
1. **索引优化**：为常用查询字段创建合适的索引
2. **连接池配置**：根据并发量调整连接池参数
3. **查询优化**：使用EXPLAIN分析慢查询
4. **分区表**：对大数据量表考虑分区策略

## 监控和维护

### 关键监控指标
- **Redis**：内存使用率、命中率、连接数、响应时间
- **MySQL**：连接数、查询响应时间、锁等待、磁盘I/O

### 备份策略
- **Redis**：RDB快照 + AOF日志
- **MySQL**：全量备份 + 增量日志备份

### 故障处理
- **Redis故障**：系统自动降级到数据库存储
- **MySQL故障**：需要快速恢复，建议主从复制
- **数据一致性**：定期检查Redis缓存与数据库的一致性

## Docker容器数据查看指南

在Docker部署环境中，可以通过以下命令查看和操作MySQL和Redis中的数据。

### 查看运行中的容器

```bash
docker ps
```

示例输出：
```
CONTAINER ID   IMAGE                             COMMAND                  CREATED      STATUS      PORTS                                       NAMES
881a4f14337a   joeyzenghuan123/53ai-hub:latest   "./53AIHub"              2 days ago   Up 2 days   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   53ai-hub-web-1
15228c1356d7   redis:6-alpine                    "docker-entrypoint.s…"   8 days ago   Up 8 days   6379/tcp                                    53ai-hub-redis-1
707cf11d01d9   mysql:8.0                         "docker-entrypoint.s…"   8 days ago   Up 8 days   3306/tcp, 33060/tcp                         53ai-hub-mysql-1
```

### MySQL 数据查看

#### 1. 进入MySQL容器
```bash
# 使用容器名称
docker exec -it 53ai-hub-mysql-1 mysql -u root -p

# 或使用容器ID
docker exec -it 707cf11d01d9 mysql -u root -p
```

输入密码后进入MySQL命令行界面。

#### 2. 常用MySQL查询命令

```sql
-- 查看所有数据库
SHOW DATABASES;

-- 使用53ai_hub数据库
USE 53ai_hub;

-- 查看所有表
SHOW TABLES;

-- 查看orders表结构
DESCRIBE orders;

-- 查看orders表中的所有数据
SELECT * FROM orders;

-- 查看orders表中最近的10条记录
SELECT * FROM orders ORDER BY created_at DESC LIMIT 10;

-- 查看特定状态的订单
SELECT * FROM orders WHERE status = 1;

-- 查看用户表数据
SELECT id, username, email, created_at FROM users;

-- 查看渠道配置
SELECT * FROM channels;

-- 查看系统设置
SELECT * FROM settings;

-- 查看会话记录
SELECT * FROM conversations ORDER BY created_at DESC LIMIT 5;

-- 统计各种数据
SELECT COUNT(*) as total_orders FROM orders;
SELECT COUNT(*) as total_users FROM users;
SELECT status, COUNT(*) as count FROM orders GROUP BY status;
```

#### 3. 退出MySQL
```sql
EXIT;
```

### Redis 数据查看

#### 1. 进入Redis容器
```bash
# 使用容器名称
docker exec -it 53ai-hub-redis-1 redis-cli

# 或使用容器ID
docker exec -it 15228c1356d7 redis-cli
```

如果Redis设置了密码，需要先认证：
```bash
AUTH your_redis_password
```

#### 2. 常用Redis查询命令

```bash
# 查看所有键
KEYS *

# 查看邮件验证码相关的键
KEYS email_verification:*

# 查看订单过期队列
ZRANGE order:expired_queue 0 -1

# 查看订单过期队列（带分数/时间戳）
ZRANGE order:expired_queue 0 -1 WITHSCORES

# 获取特定邮件验证码
GET email_verification:user@example.com

# 查看键的类型
TYPE order:expired_queue

# 查看键的过期时间
TTL email_verification:user@example.com

# 查看Redis信息
INFO

# 查看内存使用情况
INFO memory

# 查看连接数
INFO clients

# 查看数据库大小
DBSIZE

# 查看特定键的详细信息
OBJECT ENCODING order:expired_queue

# 查看Sorted Set中的元素数量
ZCARD order:expired_queue

# 查看当前时间戳范围内的过期订单
ZRANGEBYSCORE order:expired_queue 0 $(date +%s)000

# 删除特定键（谨慎操作）
# DEL email_verification:user@example.com
```

#### 3. 退出Redis
```bash
EXIT
```

### 实用脚本示例

#### 批量查看订单状态分布
```bash
# 在宿主机执行
docker exec -it 53ai-hub-mysql-1 mysql -u root -p53ai_hub -e "
SELECT 
    CASE status
        WHEN 0 THEN 'Pending'
        WHEN 1 THEN 'Paid'
        WHEN 2 THEN 'Expired'
        WHEN 3 THEN 'Cancelled'
        ELSE 'Unknown'
    END as status_name,
    COUNT(*) as count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 2) as percentage
FROM orders 
GROUP BY status
ORDER BY status;"
```

#### 查看Redis中的过期订单队列
```bash
# 在宿主机执行
docker exec -it 53ai-hub-redis-1 redis-cli -c "
AUTH your_redis_password
ZRANGE order:expired_queue 0 -1 WITHSCORES
"
```

#### 查看最近的用户注册
```bash
docker exec -it 53ai-hub-mysql-1 mysql -u root -p53ai_hub -e "
SELECT id, username, email, created_at 
FROM users 
ORDER BY created_at DESC 
LIMIT 10;"
```

### 数据导出

#### 导出MySQL数据
```bash
# 导出整个数据库
docker exec 53ai-hub-mysql-1 mysqldump -u root -p53ai_hub > backup.sql

# 导出特定表
docker exec 53ai-hub-mysql-1 mysqldump -u root -p53ai_hub orders > orders_backup.sql
```

#### 导出Redis数据
```bash
# 创建RDB快照
docker exec 53ai-hub-redis-1 redis-cli BGSAVE

# 复制RDB文件到宿主机
docker cp 53ai-hub-redis-1:/data/dump.rdb ./redis_backup.rdb
```

### 注意事项

1. **密码安全**：实际操作中替换示例中的密码为真实密码
2. **生产环境**：在生产环境中谨慎执行删除和修改操作
3. **权限控制**：确保只有授权人员能够访问数据库容器
4. **备份策略**：定期备份重要数据
5. **日志监控**：定期查看容器日志以发现潜在问题

```bash
# 查看容器日志
docker logs 53ai-hub-mysql-1 --tail 100
docker logs 53ai-hub-redis-1 --tail 100
docker logs 53ai-hub-web-1 --tail 100
```

## 总结

**MySQL** 是53AIHub项目的核心数据存储，承载所有业务数据的持久化存储，是系统运行的必需组件。

**Redis** 主要用于性能优化和缓存加速，包括：
- 邮件验证码的快速存取
- 订单过期队列的高效管理  
- 支付订单的临时缓存

Redis虽然不是系统运行的必需组件，但能显著提升系统性能，特别是在高并发场景下的订单管理和邮件验证等操作。系统设计了完善的降级机制，确保即使Redis不可用，系统仍能正常运行，只是性能会有所降低。

这种双重存储架构既保证了数据的可靠性（MySQL），又提供了高性能的缓存服务（Redis），是现代Web应用的典型架构模式。
