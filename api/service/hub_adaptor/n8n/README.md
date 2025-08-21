# n8n 工作流适配器

n8n 是一个强大的工作流自动化平台，本适配器实现了与 n8n webhook 的完整集成，支持文件上传和复杂参数传递。

## 功能特性

### ✅ 核心功能
- **渠道类型**: ChannelApiTypeN8n = 1009
- **URL 格式**: `{baseurl}/webhook/{workflow_id}`
- **认证方式**: Authorization header（无 Bearer 前缀）
- **参数传递**: 支持任意 JSON 参数结构
- **响应处理**: 自动解析 n8n 数组格式响应

### ✅ 文件上传支持
- **格式识别**: 自动识别 `file_id:xxx` 格式参数
- **Base64 转换**: 将文件内容转换为 base64 编码
- **大小限制**: 10MB 文件大小限制（符合 n8n 最佳实践）
- **元信息保留**: 包含文件名、MIME类型、大小、扩展名等完整信息
- **递归处理**: 支持复杂参数结构中的文件参数（数组、对象嵌套）
- **错误处理**: 文件过大、读取失败等情况的优雅降级

## 配置说明

### 1. 创建 n8n 渠道
```json
{
  "type": 1009,
  "name": "n8n工作流",
  "base_url": "http://localhost:5678",
  "key": "your-api-key"
}
```

### 2. 创建工作流 Agent
```json
{
  "agent_type": "workflow",
  "model": "workflow-d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c",
  "name": "n8n智能助手"
}
```

## 使用示例

### 基本调用
```bash
curl --location --request POST '/v1/workflow/run' \
--header 'Authorization: Bearer {token}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "parameters": {
        "query": "你是谁"
    },
    "model": "workflow-d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c"
}'
```

### 复杂参数调用
```bash
curl --location --request POST '/v1/workflow/run' \
--header 'Authorization: Bearer {token}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "parameters": {
        "query": "分析这个文档",
        "document": "file_id:123",
        "options": {
            "language": "zh-CN",
            "format": "summary"
        },
        "images": ["file_id:456", "file_id:789"]
    },
    "model": "workflow-d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c"
}'
```

### 文件上传示例
当参数中包含 `file_id:xxx` 格式时，系统会自动：

1. **识别文件参数**: 检测 `file_id:123` 格式
2. **读取文件内容**: 从存储系统加载文件
3. **转换为 base64**: 编码文件内容
4. **构造文件对象**: 包含完整元信息

转换后的文件对象格式：
```json
{
  "filename": "document.pdf",
  "mimeType": "application/pdf",
  "data": "base64编码的文件内容",
  "size": 1024000,
  "extension": ".pdf",
  "originalId": 123
}
```

## n8n 工作流配置

### 1. 创建 Webhook 节点
在 n8n 中创建一个 Webhook 节点，配置如下：
- **HTTP Method**: POST
- **Path**: 任意路径（将作为 workflow_id）
- **Authentication**: None（通过 Header 验证）

### 2. 处理文件数据
在 n8n 工作流中，可以通过以下方式处理文件：

```javascript
// 获取文件数据
const fileData = $json.document;
if (fileData && fileData.data) {
  // 解码 base64 数据
  const buffer = Buffer.from(fileData.data, 'base64');
  
  // 获取文件信息
  const filename = fileData.filename;
  const mimeType = fileData.mimeType;
  const size = fileData.size;
  
  // 处理文件内容...
}
```

### 3. 返回响应
n8n 工作流应该返回数组格式的响应：
```json
[
  {
    "output": "处理结果",
    "query": "原始查询",
    "status": "success"
  }
]
```

## 响应格式

### n8n 原始响应
```json
[
  {
    "output": "我是DeepSeek Chat，由深度求索公司开发的智能助手！",
    "query": "你是谁"
  }
]
```

### 转换后的统一格式
```json
{
  "workflow_output_data": {
    "output": "我是DeepSeek Chat，由深度求索公司开发的智能助手！",
    "query": "你是谁"
  },
  "execute_id": "n8n-exec-102",
  "channel_id": 1,
  "model_name": "workflow-d3c8ffe7-f052-4f51-a7b3-2e226d0b4d0c"
}
```

## 错误处理

### 文件相关错误
- **文件过大**: 超过 10MB 限制时返回错误信息
- **文件不存在**: 无法找到指定 file_id 时的处理
- **读取失败**: 文件存储访问失败时的降级处理

### 网络相关错误
- **连接超时**: n8n 服务不可用时的错误处理
- **认证失败**: API Key 错误时的响应
- **工作流错误**: n8n 工作流执行失败时的错误信息

## 最佳实践

### 1. 文件处理
- 控制文件大小在 10MB 以内
- 使用合适的文件格式（PDF、图片、文档等）
- 在 n8n 中及时清理临时文件

### 2. 参数设计
- 使用清晰的参数名称
- 避免过深的嵌套结构
- 合理使用数组和对象参数

### 3. 错误处理
- 在 n8n 工作流中添加错误处理节点
- 返回有意义的错误信息
- 记录详细的执行日志

### 4. 性能优化
- 避免在工作流中进行耗时操作
- 使用异步处理大文件
- 合理设置超时时间

## 调试技巧

### 1. 查看日志
系统会记录详细的执行日志：
```
[INFO] n8n工作流请求转换 - WorkflowID: xxx, Parameters: {...}
[INFO] n8n工作流文件处理成功 - 原始ID: 123, 文件名: test.pdf
[INFO] n8n工作流处理完成 - ExecuteID: xxx, 输出字段数: 2
```

### 2. 测试工作流
可以直接使用 curl 测试 n8n webhook：
```bash
curl --location --request POST 'http://localhost:5678/webhook/your-workflow-id' \
--header 'Authorization: your-api-key' \
--header 'Content-Type: application/json' \
--data-raw '{"query": "测试"}'
```

### 3. 验证响应格式
确保 n8n 工作流返回正确的数组格式响应，包含必要的字段。

## 版本历史

- **v1.0.0**: 基础工作流集成
- **v1.1.0**: 添加文件上传支持
- **v1.2.0**: 完善错误处理和日志记录

## 技术支持

如遇到问题，请检查：
1. n8n 服务是否正常运行
2. webhook URL 是否正确配置
3. API Key 是否有效
4. 文件大小是否超过限制
5. 参数格式是否正确

更多技术细节请参考源码注释和测试用例。