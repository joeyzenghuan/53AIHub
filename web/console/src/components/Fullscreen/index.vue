<template>
  <Teleport :to="target" :disabled="!isFullscreen">
    <div
      ref="contentRef"
      :class="[containerClasses, $attrs.class]"
      :style="containerStyle"
      @keydown.esc="handleEscapeKey"
    >
      <slot :is-fullscreen="isFullscreen" :toggle-fullscreen="toggleFullscreen" />
    </div>
  </Teleport>
  <div v-if="isFullscreen" :style="placeholderStyle" />
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch, readonly } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { useZIndex } from 'element-plus'

// 类型定义
type FullscreenProps = {
  /** 传送目标元素选择器 */
  target?: string
  /** 是否使用 flex 布局 */
  flex?: boolean
  /** 自定义 z-index 值 */
  zIndex?: number
  /** 是否启用 ESC 键退出全屏 */
  escapeToExit?: boolean
  /** 全屏状态 */
  modelValue?: boolean
}

type FullscreenEmits = {
  /** 全屏状态变化事件 */
  (e: 'update:modelValue', value: boolean): void
  /** 全屏切换事件 */
  (e: 'toggle', value: boolean): void
}

const props = withDefaults(defineProps<FullscreenProps>(), {
  target: 'body',
  flex: false,
  zIndex: 0,
  escapeToExit: true,
  modelValue: false,
})

const emit = defineEmits<FullscreenEmits>()

const { nextZIndex } = useZIndex()

// 响应式数据
const contentRef = ref<HTMLElement>()
const isFullscreen = ref(props.modelValue)
const nodeHeight = ref(0)

// 计算属性
const containerClasses = computed(() => ({
  'fullscreen-container': isFullscreen.value,
  'fullscreen-flex': props.flex && isFullscreen.value,
}))

const containerStyle = computed(() => ({
  zIndex: props.zIndex || nextZIndex(),
}))

const placeholderStyle = computed(() => ({
  height: `${nodeHeight.value}px`,
}))

// 方法
const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
  emit('update:modelValue', isFullscreen.value)
  emit('toggle', isFullscreen.value)
}

const handleEscapeKey = (event: KeyboardEvent) => {
  if (props.escapeToExit && event.key === 'Escape' && isFullscreen.value) {
    toggleFullscreen()
  }
}

// 监听器
watch(
  () => props.modelValue,
  newValue => {
    isFullscreen.value = newValue
  }
)

// 生命周期
let stopResizeObserver: (() => void) | undefined

onMounted(async () => {
  await nextTick()
  if (contentRef.value) {
    stopResizeObserver = useResizeObserver(contentRef, ([entry]) => {
      nodeHeight.value = entry.target.scrollHeight
    })
  }
})

onUnmounted(() => {
  if (stopResizeObserver) {
    stopResizeObserver()
  }
})

// 暴露给父组件的方法
defineExpose({
  toggleFullscreen,
  isFullscreen: readonly(isFullscreen),
})
</script>

<style scoped>
.fullscreen-container {
  @apply fixed inset-0 p-4 bg-black/25 overflow-y-auto;
  backdrop-filter: blur(2px);
}

.fullscreen-container:deep(> *) {
  @apply w-full h-full bg-white rounded-lg shadow-2xl;
  margin-top: 0 !important;
  animation: fullscreen-enter 0.2s ease-out;
}

.fullscreen-flex {
  @apply flex overflow-hidden;
}

.fullscreen-flex:deep(> *) {
  @apply flex-1;
}

@keyframes fullscreen-enter {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .fullscreen-container {
    @apply p-2;
  }

  .fullscreen-container:deep(> *) {
    @apply rounded-none;
  }
}
</style>
