# Global 全局配置使用指南

## 概述

`src/global` 文件夹包含了 Vue 应用的全局配置，主要提供全局过滤器（Filters）和全局方法（Global Methods）的设置。这些功能可以在整个应用中使用，无需在每个组件中重复导入。

## 文件结构

```
src/global/
├── index.ts      # 入口文件，统一导出和配置
├── filters.ts    # 过滤器实现和类型定义
├── methods.ts    # 全局方法实现和类型定义
└── readme.md     # 使用指南（本文件）
```

## 功能模块

### 1. 全局过滤器 (Global Filters)

通过 `setupFilter` 函数设置，提供以下过滤器：

#### `addCommasToNumber`

- **功能**: 为数字添加千位分隔符
- **参数**: `number: number | string` - 要格式化的数字
- **返回**: `string` - 格式化后的字符串
- **使用示例**:

```vue
<template>
  <div>{{ $filters.addCommasToNumber(1234567) }}</div>
  <!-- 输出: 1,234,567 -->
</template>
```

#### `formatTime`

- **功能**: 格式化时间戳
- **参数**: `time: number` - 时间戳
- **返回**: `string` - 格式化后的时间字符串
- **使用示例**:

```vue
<template>
  <div>{{ $filters.formatTime(1640995200000) }}</div>
  <!-- 输出: 2022-01-01 00:00:00 -->
</template>
```

#### `formatDate`

- **功能**: 格式化日期，支持自定义格式
- **参数**:
  - `time: number` - 时间戳
  - `format: string` - 日期格式（可选，默认为 'YYYY-MM-DD hh:mm'）
- **返回**: `string` - 格式化后的日期字符串
- **使用示例**:

```vue
<template>
  <div>{{ $filters.formatDate(1640995200000) }}</div>
  <!-- 输出: 2022-01-01 00:00 -->

  <div>{{ $filters.formatDate(1640995200000, "YYYY年MM月DD日") }}</div>
  <!-- 输出: 2022年01月01日 -->
</template>
```

### 2. 全局方法 (Global Methods)

通过 `setupGlobal` 函数设置，提供以下全局方法：

#### `$noop`

- **功能**: 空操作函数，用于占位或默认回调
- **参数**: 无
- **返回**: `undefined`
- **使用示例**:

```vue
<script setup>
// 在组件中使用
const handleClick = () => {
  // 使用全局空操作函数
  $noop()
}
</script>
```

#### `$getRealPath`

- **功能**: 获取资源的真实路径
- **参数**: `{ url: string }` - 包含 URL 的对象
- **返回**: `string` - 完整的资源路径
- **使用示例**:

```vue
<script setup>
// 在组件中使用
const imagePath = $getRealPath({ url: "/images/logo.png" })
// 返回: base_path + '/images/logo.png'
</script>
```

#### `$numberInputKeydownHandler`

- **功能**: 数字输入框的键盘事件处理器，只允许数字、小数点和导航键
- **参数**: `e: KeyboardEvent` - 键盘事件对象
- **返回**: `void`
- **使用示例**:

```vue
<template>
  <input
    type="text"
    @keydown="$numberInputKeydownHandler"
    placeholder="请输入数字"
  />
</template>
```

## 安装和配置

### 1. 在 main.ts 中注册

```typescript
import { createApp } from "vue"
import App from "./App.vue"
import { setupGlobalConfig } from "@/global"

const app = createApp(App)

// 统一设置全局配置
setupGlobalConfig(app)

app.mount("#app")
```

或者分别设置：

```typescript
import { createApp } from "vue"
import App from "./App.vue"
import { setupFilter, setupGlobal } from "@/global"

const app = createApp(App)

// 分别设置全局过滤器和全局方法
setupFilter(app)
setupGlobal(app)

app.mount("#app")
```

### 2. 在组件中使用

#### 使用过滤器

```vue
<template>
  <div>
    <!-- 数字格式化 -->
    <p>价格: {{ $filters.addCommasToNumber(1234567) }}</p>

    <!-- 时间格式化 -->
    <p>时间: {{ $filters.formatTime(timestamp) }}</p>

    <!-- 日期格式化 -->
    <p>日期: {{ $filters.formatDate(timestamp, "YYYY-MM-DD") }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue"

const timestamp = ref(1640995200000)
</script>
```

#### 使用全局方法

```vue
<template>
  <div>
    <input
      v-model="numberValue"
      @keydown="$numberInputKeydownHandler"
      placeholder="请输入数字"
    />
    <img :src="$getRealPath({ url: '/images/icon.png' })" alt="图标" />
  </div>
</template>

<script setup>
import { ref } from "vue"

const numberValue = ref("")
</script>
```

## TypeScript 支持

所有全局方法和过滤器都支持 TypeScript 类型检查。在 Vue 3 中，全局方法可以直接调用，过滤器通过 `$filters` 对象调用，无需使用 `this`。类型定义与实现逻辑在同一文件中，便于维护：

```typescript
// 过滤器类型
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $filters: {
      addCommasToNumber: (number: number | string) => string
      formatTime: (time: number) => string
      formatDate: (time: number, format?: string) => string
    }
  }
}

// 全局方法类型 - Vue 3 Composition API
declare global {
  interface Window {
    $noop: () => void
    $getRealPath: (params: { url: string }) => string
    $numberInputKeydownHandler: (e: KeyboardEvent) => void
  }
}

// 在 Composition API 中使用的类型声明
declare module "vue" {
  interface ComponentCustomProperties {
    $noop: () => void
    $getRealPath: (params: { url: string }) => string
    $numberInputKeydownHandler: (e: KeyboardEvent) => void
  }
}
```

## 最佳实践

### 1. 过滤器使用建议

- 在 Vue 3 中，过滤器通过 `$filters.xxx()` 的方式调用
- 优先使用过滤器进行数据格式化，保持模板的简洁性
- 对于复杂的格式化逻辑，考虑使用计算属性
- 过滤器是纯函数，不应该有副作用

### 2. 全局方法使用建议

- 全局方法应该只包含通用的工具函数
- 避免在全局方法中包含业务逻辑
- 使用 TypeScript 类型定义确保类型安全
- 在 Vue 3 Composition API 中，全局方法可以直接调用，无需使用 `this`

### 3. 性能优化

- 过滤器会在每次数据变化时重新计算，对于复杂计算考虑使用计算属性
- 全局方法会被挂载到每个组件实例上，注意内存使用

## 扩展指南

### 添加新的过滤器

```typescript
// 在 setupFilter 函数中添加
export function setupFilter(app) {
  app.config.globalProperties.$filters = {
    // 现有过滤器...

    // 新增过滤器
    formatCurrency(value: number, currency = "CNY") {
      return new Intl.NumberFormat("zh-CN", {
        style: "currency",
        currency,
      }).format(value)
    },
  }
}
```

### 添加新的全局方法

```typescript
// 在 setupGlobal 函数中添加
export function setupGlobal(app) {
  const globalMethods = {
    // 现有方法...

    // 新增方法
    $debounce: (func: Function, delay: number) => {
      let timeoutId: NodeJS.Timeout
      return (...args: any[]) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func.apply(null, args), delay)
      }
    },
  }

  Object.assign(app.config.globalProperties, globalMethods)
  Object.assign(window, globalMethods)
}
```

## 注意事项

1. **命名规范**: 全局方法以 `$` 开头，避免与组件属性冲突
2. **类型安全**: 使用 TypeScript 确保类型安全
3. **测试**: 为全局功能编写单元测试
4. **文档**: 及时更新文档，说明新功能的使用方法
5. **兼容性**: 确保全局功能在不同浏览器中正常工作

## 相关文件

- `src/global/filters.ts` - 过滤器实现和类型定义
- `src/global/methods.ts` - 全局方法实现和类型定义
- `src/utils/config.ts` - 基础路径配置
- `src/utils/moment.ts` - 时间格式化工具
- `src/main.ts` - 应用入口文件
