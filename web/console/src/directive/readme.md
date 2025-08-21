# Vue 指令使用文档

本目录包含了项目中使用的所有 Vue 自定义指令，这些指令提供了常用的功能增强。

## 目录

- [debounce](#debounce) - 防抖指令
- [copy](#copy) - 复制指令
- [router](#router) - 路由指令
- [version](#version) - 版本控制指令
- [overflow-tooltip](#overflow-tooltip) - 溢出提示指令
- [truncate](#truncate) - 文本截断指令
- [tooltip](#tooltip) - 提示框指令

## debounce

防抖指令，用于防止按钮重复点击，并自动添加 loading 状态。

### 功能特性

- 自动防抖处理，避免重复点击
- 自动添加 loading 状态
- 支持 ElButton 组件和普通元素
- 可配置防抖延迟时间
- 自动清理资源，防止内存泄漏

### 使用方法

```vue
<template>
  <!-- 基础用法 -->
  <el-button v-debounce @click="handleClick">提交</el-button>

  <!-- 自定义延迟时间（毫秒） -->
  <el-button v-debounce="2000" @click="handleClick">提交</el-button>

  <!-- 普通元素 -->
  <div v-debounce="1000" @click="handleClick">点击提交</div>
</template>

<script setup>
const handleClick = async () => {
  // 模拟异步操作
  await new Promise(resolve => setTimeout(resolve, 2000))
  console.log("操作完成")
}
</script>
```

### 参数说明

| 参数  | 类型   | 默认值 | 说明                 |
| ----- | ------ | ------ | -------------------- |
| value | number | 1000   | 防抖延迟时间（毫秒） |

## copy

复制指令，点击元素时复制指定内容到剪贴板。

### 功能特性

- 一键复制内容到剪贴板
- 自动显示成功提示
- 支持动态内容

### 使用方法

```vue
<template>
  <!-- 复制固定文本 -->
  <el-button v-copy="'要复制的文本'">复制文本</el-button>

  <!-- 复制动态内容 -->
  <el-button v-copy="copyContent">复制内容</el-button>

  <!-- 复制变量值 -->
  <span v-copy="userInfo.email">{{ userInfo.email }}</span>
</template>

<script setup>
import { ref } from "vue"

const copyContent = ref("动态内容")
const userInfo = ref({
  email: "user@example.com",
})
</script>
```

### 参数说明

| 参数  | 类型   | 说明                 |
| ----- | ------ | -------------------- |
| value | string | 要复制到剪贴板的内容 |

## router

路由指令，用于处理路由跳转，防止重复点击。

### 功能特性

- 防止路由重复跳转
- 支持 push 和 back 操作
- 自动防抖处理

### 使用方法

```vue
<template>
  <!-- 路由跳转 -->
  <el-button v-router.push="/user/profile">跳转到用户资料</el-button>

  <!-- 带参数的路由跳转 -->
  <el-button v-router.push="{ path: '/user', query: { id: 123 } }"
    >跳转到用户</el-button
  >

  <!-- 返回上一页 -->
  <el-button v-router.back>返回</el-button>
</template>
```

### 修饰符说明

| 修饰符 | 说明                            |
| ------ | ------------------------------- |
| push   | 使用 router.push() 进行路由跳转 |
| back   | 使用 router.back() 返回上一页   |

### 参数说明

| 参数  | 类型             | 说明               |
| ----- | ---------------- | ------------------ |
| value | string \| object | 路由路径或路由对象 |

## version

版本控制指令，用于根据版本权限控制元素的显示和交互。

### 功能特性

- 版本权限检查
- 支持多种模式：tooltip、remove
- 自动显示版本提示
- 可配置版本要求

### 使用方法

```vue
<template>
  <!-- tooltip 模式：显示提示 -->
  <el-button
    v-version="{
      module: 'premium',
      count: 1,
      mode: 'tooltip',
      content: '需要高级版本',
      placement: 'top',
    }"
    @click="premiumFeature"
  >
    高级功能
  </el-button>

  <!-- remove 模式：直接移除元素 -->
  <div v-version="{ module: 'basic', count: 1, mode: 'remove' }">
    基础版本内容
  </div>

  <!-- 简化用法 -->
  <el-button v-version="{ module: 'pro', count: 2 }"> 专业功能 </el-button>
</template>
```

### 参数说明

| 参数      | 类型   | 默认值    | 说明                        |
| --------- | ------ | --------- | --------------------------- |
| module    | string | -         | 模块名称                    |
| count     | number | -         | 所需版本数量                |
| mode      | string | 'tooltip' | 模式：'tooltip' 或 'remove' |
| content   | string | -         | 提示内容                    |
| placement | string | 'top'     | 提示框位置                  |
| effect    | string | 'dark'    | 提示框主题                  |

## overflow-tooltip

溢出提示指令，当文本溢出时自动显示 tooltip。

### 功能特性

- 自动检测文本是否溢出
- 智能显示/隐藏 tooltip
- 支持特殊按钮文本处理

### 使用方法

```vue
<template>
  <!-- 基础用法 -->
  <div v-overflow-tooltip class="text-container">
    <el-tooltip content="这是一段很长的文本内容">
      这是一段很长的文本内容
    </el-tooltip>
  </div>

  <!-- 按钮文本处理 -->
  <div v-overflow-tooltip>
    <el-tooltip content="添加">
      <el-button>添加</el-button>
    </el-tooltip>
  </div>
</template>

<style scoped>
.text-container {
  width: 200px;
  overflow: hidden;
}
</style>
```

### 工作原理

- 自动检测文本是否超出容器宽度
- 对于操作按钮（添加、编辑、删除、查看），点击时临时禁用 tooltip
- 对于普通文本，鼠标悬停时根据溢出状态显示 tooltip

## truncate

文本截断指令，用于处理长文本的智能截断和显示。

### 功能特性

- 智能文本截断
- 支持显示总数和剩余数量
- 自动添加省略号
- 响应式处理

### 使用方法

```vue
<template>
  <!-- 基础用法 -->
  <div v-truncate class="tag-container">
    <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
  </div>

  <!-- 显示总数 -->
  <div v-truncate="{ node: '.tag', show_total: true }" class="tag-container">
    <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
  </div>

  <!-- 显示剩余数量 -->
  <div
    v-truncate="{ node: '.tag', show_remainder: true }"
    class="tag-container"
  >
    <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
  </div>

  <!-- 完整配置 -->
  <div
    v-truncate="{
      node: '.tag',
      show_total: true,
      show_remainder: true,
      show_tooltip: true,
      offset: 20,
    }"
    class="tag-container"
  >
    <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue"

const tags = ref([
  "Vue",
  "React",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
])
</script>

<style scoped>
.tag-container {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 4px 8px;
  background: #f0f0f0;
  border-radius: 4px;
  font-size: 12px;
}
</style>
```

### 参数说明

| 参数           | 类型    | 默认值 | 说明                 |
| -------------- | ------- | ------ | -------------------- |
| node           | string  | -      | 要截断的子元素选择器 |
| show_total     | boolean | false  | 是否显示总数         |
| show_remainder | boolean | false  | 是否显示剩余数量     |
| show_tooltip   | boolean | false  | 是否显示 tooltip     |
| offset         | number  | 12     | 偏移量（像素）       |

## tooltip

通用提示框指令，提供灵活的 tooltip 功能。

### 功能特性

- 自动判断是否显示 tooltip
- 支持自定义内容和配置
- 基于 Element Plus Tooltip 组件
- 响应式处理

### 使用方法

```vue
<template>
  <!-- 自动判断是否显示 -->
  <div v-tooltip class="text-container">这是一段可能溢出的文本内容</div>

  <!-- 强制显示 -->
  <div v-tooltip="true" class="text-container">强制显示提示</div>

  <!-- 自定义内容 -->
  <div v-tooltip="{ content: '自定义提示内容' }" class="text-container">
    自定义提示
  </div>

  <!-- 完整配置 -->
  <div
    v-tooltip="{
      content: '完整配置的提示',
      placement: 'bottom',
      effect: 'light',
      trigger: 'click',
    }"
    class="text-container"
  >
    完整配置
  </div>
</template>

<style scoped>
.text-container {
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
```

### 参数说明

| 参数      | 类型   | 默认值   | 说明       |
| --------- | ------ | -------- | ---------- |
| content   | string | 元素内容 | 提示内容   |
| placement | string | 'top'    | 提示框位置 |
| effect    | string | 'dark'   | 提示框主题 |
| trigger   | string | 'hover'  | 触发方式   |

### 配置选项

- **placement**: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
- **effect**: 'dark' | 'light'
- **trigger**: 'hover' | 'click' | 'focus' | 'manual'

## 全局注册

所有指令已在 `src/directive/index.ts` 中统一注册，在 `main.ts` 中调用 `setupDirective(app)` 即可全局使用。

```typescript
// main.ts
import { setupDirective } from "@/directive"

const app = createApp(App)
setupDirective(app)
app.mount("#app")
```

## 注意事项

1. **debounce 指令**：适用于按钮和可点击元素，会自动处理 loading 状态，使用通用定时器管理器防止内存泄漏
2. **copy 指令**：需要确保复制的内容不为空
3. **router 指令**：防止重复路由跳转，建议用于导航按钮
4. **version 指令**：需要配合版本检查工具使用
5. **overflow-tooltip 指令**：需要配合 ElTooltip 组件使用
6. **truncate 指令**：适用于标签、按钮等需要截断的场景
7. **tooltip 指令**：提供通用的提示框功能，可替代 overflow-tooltip

## 相关工具

- **定时器管理器**：`src/utils/timer-manager.ts` - 通用的定时器管理工具，防止内存泄漏
- **定时器管理器文档**：`src/utils/timer-manager.md` - 详细的使用说明和最佳实践

## 最佳实践

1. 根据具体需求选择合适的指令
2. 合理配置指令参数，避免过度使用
3. 注意指令的性能影响，特别是在列表渲染中
4. 保持指令使用的一致性，提高代码可维护性
