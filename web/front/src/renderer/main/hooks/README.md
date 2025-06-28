# Hooks 使用文档

本文档详细介绍了项目中可用的自定义Hooks，包括它们的功能、使用方法和示例代码。

## 目录

- [useBasicLayout](#usebasiclayout) - 响应式布局判断
- [useEnv](#useenv) - 环境变量判断
- [useMobile](#usemobile) - 手机号验证与验证码处理
- [useScroll](#usescroll) - 滚动容器控制

## 详细说明

### useBasicLayout

**功能说明**：提供响应式布局判断，基于Tailwind CSS的断点系统，用于判断当前屏幕尺寸。

**使用场景**：需要根据不同屏幕尺寸调整UI布局时。

**使用方法**：

```vue
<script setup>
import { useBasicLayout } from '@/renderer/main/hooks/useBasicLayout'

const { isLgScreen, isMdScreen, isSmScreen } = useBasicLayout()
</script>

<template>
  <div>
    <div v-if="isSmScreen">小屏幕布局</div>
    <div v-else-if="isMdScreen">中屏幕布局</div>
    <div v-else>大屏幕布局</div>
  </div>
</template>
```

**返回值说明**：
- `isLgScreen` - 是否小于大屏幕尺寸（< 1024px）
- `isMdScreen` - 是否小于中屏幕尺寸（< 768px）
- `isSmScreen` - 是否小于小屏幕尺寸（< 640px）

**实现原理**：
基于VueUse的`useBreakpoints`和Tailwind CSS的断点配置，提供响应式的屏幕尺寸判断。

### useEnv

**功能说明**：提供环境变量判断，用于区分不同运行环境。

**使用场景**：需要根据不同环境执行不同逻辑时。

**使用方法**：

```vue
<script setup>
import { useEnv } from '@/renderer/main/hooks/useEnv'

const { isOpLocalEnv } = useEnv()

// 根据环境执行不同逻辑
if (isOpLocalEnv.value) {
  // 本地环境特定逻辑
} else {
  // 其他环境逻辑
}
</script>
```

**返回值说明**：
- `isOpLocalEnv` - 是否为本地运营环境（VITE_PLATFORM === 'op-local'）

**实现原理**：
通过读取Vite环境变量`import.meta.env.VITE_PLATFORM`判断当前运行环境。

### useMobile

**功能说明**：提供手机号验证和验证码处理功能，包括验证码发送、倒计时等。

**使用场景**：需要处理手机验证码登录、注册等场景。

**使用方法**：

```vue
<script setup>
import useMobile from '@/renderer/main/hooks/useMobile'

const { codeCount, codeRule, sendcode } = useMobile()

// 发送验证码
const handleSendCode = () => {
  const mobile = '13800138000' // 从表单获取手机号
  sendcode(mobile)
}
</script>

<template>
  <div>
    <el-input v-model="form.mobile" placeholder="请输入手机号" />
    <el-input
      v-model="form.code"
      placeholder="请输入验证码"
      :rules="[codeRule]"
    />
    <el-button
      @click="handleSendCode"
      :disabled="codeCount > 0"
    >
      {{ codeCount > 0 ? `${codeCount}秒后重试` : '发送验证码' }}
    </el-button>
  </div>
</template>
```

**返回值说明**：
- `codeCount` - 验证码倒计时计数（0表示可以发送验证码）
- `codeRule` - 验证码格式校验规则（用于表单验证）
- `sendcode` - 发送验证码的方法，接收手机号参数

**实现原理**：
- 提供中国手机号格式验证
- 发送验证码并自动处理60秒倒计时
- 提供验证码格式校验（4位数字）

### useScroll

**功能说明**：提供滚动容器的控制功能，包括滚动到顶部、底部、指定元素等。

**使用场景**：需要控制滚动容器行为，如聊天窗口、长列表等。

**使用方法**：

```vue
<script setup>
import { useScroll } from '@/renderer/main/hooks/useScroll'

const {
  scrollRef,
  scrollToBottom,
  scrollToTop,
  scrollTo,
  scrollToVal,
  scrollToBottomIfAtBottom
} = useScroll()

// 滚动到底部
const handleScrollToBottom = () => {
  scrollToBottom()
}

// 滚动到指定元素
const handleScrollToElement = () => {
  scrollTo('#target-element', -20) // 第二个参数是偏移量
}
</script>

<template>
  <div ref="scrollRef" class="scroll-container">
    <!-- 滚动内容 -->
    <div v-for="item in items" :key="item.id">
      {{ item.content }}
    </div>
    <div id="target-element">目标元素</div>

    <!-- 控制按钮 -->
    <button @click="handleScrollToBottom">滚动到底部</button>
    <button @click="scrollToTop">滚动到顶部</button>
    <button @click="handleScrollToElement">滚动到目标元素</button>
  </div>
</template>

<style>
.scroll-container {
  height: 400px;
  overflow-y: auto;
}
</style>
```

**返回值说明**：
- `scrollRef` - 滚动容器的ref引用
- `scrollToBottom` - 滚动到底部的方法
- `scrollToTop` - 滚动到顶部的方法
- `scrollTo` - 滚动到指定选择器元素的方法，可设置偏移量
- `scrollToVal` - 滚动到指定滚动值的方法
- `scrollToBottomIfAtBottom` - 如果当前接近底部，则滚动到底部的方法（常用于新消息追加时）

**实现原理**：
- 使用Vue的ref和nextTick确保DOM更新后再滚动
- 提供多种滚动控制方法，满足不同场景需求
- 智能判断是否在底部，优化用户体验

## 在项目中使用

这些hooks遵循Vue Composition API的设计理念，可以在setup函数或`<script setup>`中直接导入使用。

```js
// 在组件中使用多个hooks
import { useBasicLayout } from '@/renderer/main/hooks/useBasicLayout'
import { useEnv } from '@/renderer/main/hooks/useEnv'
import useMobile from '@/renderer/main/hooks/useMobile'
import { useScroll } from '@/renderer/main/hooks/useScroll'

// 使用hooks
const { isSmScreen } = useBasicLayout()
const { isOpLocalEnv } = useEnv()
const { sendcode } = useMobile()
const { scrollToBottom } = useScroll()
```
