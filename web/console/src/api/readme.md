# API 架构开发指南

本文档介绍 53AIHub-console 项目的 API 架构设计，包括核心配置文件和模块开发规范。

## 📁 目录结构

```
src/api/
├── index.ts              # 模块统一导出入口
├── config.ts             # Axios 配置和拦截器
├── errorHandler.ts       # 统一错误处理
├── code.ts               # 响应状态码和错误码定义
├── signature.ts          # 签名生成工具
├── types.ts              # 基础类型定义
├── readme.md             # 本文档
└── modules/              # 业务模块目录
    ├── banner/           # Banner 模块示例
    ├── user/             # 用户管理模块
    ├── agent/            # 代理管理模块
    └── ...               # 其他业务模块
```

## 🔧 核心配置文件

### 1. `config.ts` - Axios 配置和拦截器

负责创建和配置 Axios 实例，包含请求和响应拦截器。

**主要功能：**

- 创建 Axios 实例并配置基础 URL
- 请求拦截器：自动添加认证 token、签名参数
- 响应拦截器：统一处理响应数据格式
- 支持重试机制和特殊签名配置

**关键特性：**

```typescript
// 自动添加认证 token
const access_token = localStorage.getItem("access_token") || ""
if (access_token) config.headers.set("Authorization", `Bearer ${access_token}`)

// 支持 ibos 签名
if (config.ibos_sign) {
  const { token, platform, createtime } = generateIbosSignParams()
  config.headers.set("token", token)
  config.headers.set("platform", platform)
  config.headers.set("createtime", createtime)
}

// 支持验证码签名
if (config.code_sign) config.params = generateSignParams(config.params)
```

**使用方式：**

```typescript
import service from "@/api/config"

// 基础请求
const response = await service.get("/api/endpoint")

// 带签名的请求
const response = await service.get("/api/endpoint", { ibos_sign: true })

// 带重试的请求
const response = await service.get("/api/endpoint", {
  retryConfig: { retry: 3, retryDelay: 1000 },
})
```

### 2. `errorHandler.ts` - 统一错误处理

提供统一的错误处理机制，包括错误消息国际化、token 过期处理等。

**主要功能：**

- 解析错误响应数据
- 根据错误码和状态码显示对应的国际化消息
- 自动处理 token 过期情况
- 支持自定义错误消息映射

**错误处理流程：**

```typescript
export function handleError(error: ErrorResponse): Promise<never> {
  // 1. 解析错误状态和响应数据
  const status = error.response?.status || 500
  const code = resData?.code
  const message = resData?.message

  // 2. 根据错误类型获取对应消息
  const messageMatch = RESPONSE_MESSAGE_MAP.get(message || "")

  // 3. 特殊错误处理（如 token 过期）
  if (code === ResponseCode.TOKEN_EXPIRED_ERROR) {
    localStorage.removeItem("access_token")
    window.location.reload(true)
  }

  // 4. 显示错误消息
  if (message) ElMessage.warning(message)

  return Promise.reject(error)
}
```

**使用方式：**

```typescript
import { handleError } from "@/api/errorHandler"

// 在所有 API 调用中使用
service
  .get("/api/endpoint")
  .then(res => res.data)
  .catch(handleError)
```

### 3. `code.ts` - 响应状态码和错误码定义

定义系统中使用的所有响应状态码、业务错误码和对应的消息映射。

**包含内容：**

- **ResponseCode**: 业务逻辑错误码（如 0=成功，1=参数错误）
- **ResponseStatus**: HTTP 状态码（如 200=成功，400=请求错误）
- **消息映射**: 错误码到国际化消息的映射关系

**错误码分类：**

```typescript
export enum ResponseCode {
  SUCCESS = 0, // 成功
  PARAM_ERROR = 1, // 参数错误
  DATABASE_ERROR = 2, // 数据库错误
  NETWORK_ERROR = 3, // 网络错误
  SYSTEM_ERROR = 4, // 系统错误
  AUTH_ERROR = 5, // 认证错误
  NOT_FOUND_ERROR = 6, // 资源不存在
  UNAUTHORIZED_ERROR = 7, // 未授权
  FILE_ERROR = 8, // 文件错误
  FORBIDDEN_ERROR = 9, // 禁止访问
  AGENT_ERROR = 10, // 代理错误
  TOKEN_EXPIRED_ERROR = 11, // Token 过期
  VERIFICATION_CODE_ERROR = -14, // 验证码错误
}
```

**消息映射：**

```typescript
export const RESPONSE_CODE_MESSAGE_MAP = new Map([
  [ResponseCode.SUCCESS, "response_code.success"],
  [ResponseCode.PARAM_ERROR, "response_code.param_error"],
  // ... 其他映射
])
```

### 4. `signature.ts` - 签名生成工具

提供两种签名生成方式：普通签名和 ibos 签名。

**普通签名 (generateSignParams)：**

```typescript
export function generateSignParams(params = {}) {
  const authkey = "c3a39e4eeacf4542d6a488e19037fa45"
  params = Object.assign({}, params, {
    timestamp: Math.floor(Date.now() / 1000),
    platform: "web",
  })

  const strForSign = serialize(params)
  const sign = md5(strForSign + authkey)

  return { sign, method: "md5", ...params }
}
```

**ibos 签名 (generateIbosSignParams)：**

```typescript
export function generateIbosSignParams() {
  const authkey = "c3a39e4eeacf4542d6a488e19037fa45"
  const platform = "web"
  const createtime = Math.floor(Date.now() / 1000)
  const token = md5(authkey + createtime)
  return { token, platform, createtime }
}
```

**使用方式：**

```typescript
import { generateSignParams, generateIbosSignParams } from "@/api/signature"

// 在请求配置中使用
const config = {
  ibos_sign: true, // 自动添加 ibos 签名
  code_sign: true, // 自动添加普通签名
}
```

### 5. `types.ts` - 基础类型定义

定义 API 响应的基础类型结构。

```typescript
export interface BaseResponse<T = any> {
  code: number // 响应状态码
  message: string // 响应消息
  data: T // 响应数据
}
```

### 6. `index.ts` - 模块统一导出

统一导出所有业务模块，方便在项目中引入使用。

```typescript
export * from "./modules/common"
export * from "./modules/setting"
export * from "./modules/domain"
export * from "./modules/channel"
export * from "./modules/order"
export * from "./modules/provider"
export * from "./modules/subscription"
export * from "./modules/agent"
export * from "./modules/ai-link"
export * from "./modules/auth"
export * from "./modules/template-style"
export * from "./modules/user"
export * from "./modules/department"
```

**使用方式：**

```typescript
// 统一导入所有模块
import { userApi, agentApi, bannerApi } from "@/api"

// 或者单独导入特定模块
import { userApi } from "@/api/modules/user"
```

## 🚀 新模块开发指南

本文档介绍如何基于现有架构开发新的 API 模块，参考 `modules/banner` 模块的实现模式。

## 目录结构

每个新模块应包含以下文件：

```
src/api/modules/your-module/
├── index.ts          # 主要 API 方法
├── your-module.d.ts  # TypeScript 类型定义
└── transform.ts      # 数据转换工具（可选）
```

## 文件模板

### 1. 类型定义文件 (`your-module.d.ts`)

```typescript
// 定义模块的主要数据类型
export interface YourModule {
  id: string
  name: string
  // ... 其他属性
}

// 定义原始数据格式（如果需要转换）
export type RawYourModule = string | object

// 定义创建/更新时的数据类型
export interface CreateYourModuleRequest {
  name: string
  // ... 其他必填属性
}

export interface UpdateYourModuleRequest
  extends Partial<CreateYourModuleRequest> {
  id: string
}
```

### 2. 主要 API 文件 (`index.ts`)

```typescript
import service from "@/api/config"
import { handleError } from "@/api/errorHandler"

import type {
  YourModule,
  CreateYourModuleRequest,
  UpdateYourModuleRequest,
} from "./your-module.d"

export const yourModuleApi = {
  // 获取列表
  getList(params?: Record<string, unknown>): Promise<YourModule[]> {
    return service
      .get("/api/your-module", { params })
      .then(res => res.data.list)
      .catch(handleError)
  },

  // 获取单个项目
  getById(id: string): Promise<YourModule> {
    return service
      .get(`/api/your-module/${id}`)
      .then(res => res.data)
      .catch(handleError)
  },

  // 创建
  create(data: CreateYourModuleRequest): Promise<YourModule> {
    return service
      .post("/api/your-module", data)
      .then(res => res.data)
      .catch(handleError)
  },

  // 更新
  update(id: string, data: UpdateYourModuleRequest): Promise<YourModule> {
    return service
      .put(`/api/your-module/${id}`, data)
      .then(res => res.data)
      .catch(handleError)
  },

  // 删除
  delete(id: string): Promise<void> {
    return service
      .delete(`/api/your-module/${id}`)
      .then(() => {})
      .catch(handleError)
  },
}

export default yourModuleApi
```

### 3. 数据转换文件 (`transform.ts`) - 可选

当需要处理复杂的数据转换时使用：

```typescript
import { YOUR_MODULE_CONFIG } from "@/constants/your-module"
import type { YourModule, RawYourModule } from "./your-module.d"

// 获取默认值
export const getDefaultYourModule = (): YourModule => ({
  id: "",
  name: "",
  // ... 其他默认值
})

// 转换原始数据
export function transformYourModule(rawData: RawYourModule): YourModule {
  try {
    if (typeof rawData === "string") {
      const parsed = JSON.parse(rawData)
      return {
        id: parsed.id || "",
        name: parsed.name || "",
        // ... 转换其他字段
      }
    }

    return rawData as YourModule
  } catch (error) {
    console.warn("Failed to transform your module data:", error)
    return getDefaultYourModule()
  }
}
```

## 开发规范

### 1. 命名约定

- **文件名**: 使用 kebab-case（如 `your-module.ts`）
- **API 对象**: 使用 camelCase + Api 后缀（如 `yourModuleApi`）
- **类型**: 使用 PascalCase（如 `YourModule`）
- **常量**: 使用 UPPER_SNAKE_CASE（如 `YOUR_MODULE_CONFIG`）

### 2. 错误处理

- 所有 API 调用必须使用 `handleError` 进行错误处理
- 使用 `.catch(handleError)` 捕获并统一处理错误

### 3. 类型安全

- 为所有 API 方法定义明确的返回类型
- 使用 TypeScript 接口定义请求和响应数据结构
- 避免使用 `any` 类型

### 4. 响应处理

- 使用 `.then(res => res.data)` 提取响应数据
- 根据 API 响应结构调整数据提取逻辑
- 处理嵌套数据结构（如 `res.data.list`）

### 5. 参数处理

- 使用可选参数对象处理查询参数
- 为必填参数定义明确的类型
- 使用 `Record<string, unknown>` 处理动态查询参数

## 使用示例

### 在组件中使用

```typescript
import { yourModuleApi } from "@/api/modules/your-module"

// 在 setup 中使用
const {
  data: yourModules,
  pending,
  error,
} = await useAsyncData("your-modules", () => yourModuleApi.getList())

// 创建新项目
const handleCreate = async (formData: CreateYourModuleRequest) => {
  try {
    const result = await yourModuleApi.create(formData)
    ElMessage.success("创建成功")
    // 刷新列表
    await refresh()
  } catch (error) {
    // 错误已在 handleError 中处理
    console.error("创建失败:", error)
  }
}
```

### 在 Store 中使用

```typescript
// stores/modules/your-module.ts
import { yourModuleApi } from "@/api/modules/your-module"

export const useYourModuleStore = defineStore("yourModule", () => {
  const yourModules = ref<YourModule[]>([])

  const fetchYourModules = async () => {
    try {
      const data = await yourModuleApi.getList()
      yourModules.value = data
    } catch (error) {
      console.error("获取数据失败:", error)
    }
  }

  return {
    yourModules,
    fetchYourModules,
  }
})
```

## 最佳实践

1. **模块化**: 每个模块独立管理，避免跨模块依赖
2. **类型优先**: 先定义类型，再实现 API 方法
3. **错误处理**: 统一使用 `handleError` 处理所有错误
4. **数据转换**: 复杂的数据转换逻辑放在 `transform.ts` 中
5. **常量管理**: 模块相关的常量放在 `constants` 目录下
6. **测试友好**: 设计易于测试的 API 接口

## 参考模块

- **banner**: 简单的 CRUD 操作，包含数据转换
- **user**: 复杂的用户管理，包含多种 API 方法
- **agent**: 代理管理，包含文件上传等特殊操作

通过遵循这些规范，可以确保新模块与现有架构保持一致，提高代码质量和可维护性。
