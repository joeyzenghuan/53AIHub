# 自定义指令使用文档

本文档详细介绍了项目中可用的自定义指令，包括它们的功能、使用方法和示例代码。

## 目录

- [v-trim](#v-trim) - 输入框内容自动去除空格
- [v-copy](#v-copy) - 点击复制内容
- [v-tooltip](#v-tooltip) - 文本提示气泡
- [v-debounce](#v-debounce) - 防抖点击处理

## 指令详情

### v-trim

**功能说明**：自动去除输入框（input/textarea）内容的首尾空格。

**使用场景**：用户输入数据时，自动清除不必要的空格，提高数据质量。

**使用方法**：

```vue
<!-- 基本用法 - 失焦或内容变化时去除空格 -->
<input v-trim />
<textarea v-trim></textarea>

<!-- 立即模式 - 输入时立即去除空格 -->
<input v-trim.immediate />
```

**参数说明**：
- `.immediate` - 修饰符，启用时会在输入过程中立即去除空格，而不是等待失焦或变化事件

### v-copy

**功能说明**：点击元素时复制指定内容到剪贴板。

**使用场景**：需要用户复制文本、链接或代码片段时。

**使用方法**：

```vue
<!-- 复制静态文本 -->
<button v-copy="'要复制的文本'">点击复制</button>

<!-- 复制动态内容 -->
<div v-copy="dynamicContent">点击复制</div>
```

**参数说明**：
- `value` - 要复制的内容，可以是静态字符串或动态绑定的变量

**注意事项**：
- 复制成功后会显示提示消息

### v-tooltip

**功能说明**：为元素添加悬浮提示气泡，基于Element Plus的ElTooltip组件实现。

**使用场景**：内容溢出或需要额外说明时，提供悬浮提示。

**使用方法**：

```vue
<!-- 自动判断是否显示提示（内容溢出时显示） -->
<div v-tooltip>这是一段可能会溢出的文本</div>

<!-- 强制显示提示 -->
<div v-tooltip="true">总是显示提示</div>

<!-- 自定义提示内容 -->
<div v-tooltip="{ content: '自定义提示内容' }">鼠标悬浮查看提示</div>

<!-- 完整配置 -->
<div v-tooltip="{
  content: '自定义提示内容',
  placement: 'bottom',
  effect: 'light',
  trigger: 'click'
}">点击查看提示</div>
```

**参数说明**：
- 不传参数 - 自动判断内容是否溢出，溢出时显示提示
- `true` - 强制显示提示
- 对象配置：
  - `content` - 提示内容，默认为元素的innerHTML
  - `placement` - 提示位置，可选值：'top'(默认)、'bottom'、'left'、'right'等
  - `effect` - 主题，可选值：'dark'(默认)、'light'
  - `trigger` - 触发方式，可选值：'hover'(默认)、'click'、'focus'

### v-debounce

**功能说明**：为点击事件添加防抖处理，避免重复点击，并提供加载状态反馈。

**使用场景**：表单提交、API调用等需要防止重复操作的场景。

**使用方法**：

```vue
<!-- 基本用法 - 用于普通元素 -->
<button v-debounce="handleClick">点击提交</button>

<!-- 用于Element Plus的ElButton组件 -->
<el-button v-debounce @click="handleSubmit">提交</el-button>

<!-- 使用对象形式传入处理函数 -->
<button v-debounce="{ handler: handleClick }">点击提交</button>
```

**工作原理**：
- 点击后立即禁用元素并显示加载状态
- 如果处理函数返回Promise，则等待Promise完成后恢复
- 否则等待1秒后自动恢复可点击状态
- 对于ElButton组件，会自动处理loading状态

**注意事项**：
- 对于ElButton组件，会自动处理组件的loading属性
- 对于普通元素，会添加disabled属性来防止重复点击

## 在项目中使用

这些指令已在项目初始化时通过`setupDirective`函数注册，可以直接在模板中使用。

```js
// 指令已在此处注册
import { setupDirective } from '@/renderer/main/directive'

// 在应用初始化时调用
setupDirective(app)
```
