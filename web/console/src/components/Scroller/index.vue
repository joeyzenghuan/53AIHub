<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { debounce } from '@/utils/functions/debounce'

const props = withDefaults(defineProps<{
  disableTop?: boolean
  disableBottom?: boolean
  threshold?: number
  debounceTime?: number
}>(), {
  disableTop: false,
  disableBottom: false,
  threshold: 50,
  debounceTime: 200,
})

const emit = defineEmits<{
  (e: 'load-top', done: () => void): void
  (e: 'load-bottom', done: () => void): void
}>()

const containerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const topLoading = ref(false)
const bottomLoading = ref(false)
const lastScrollTop = ref(0)
let previousScrollHeight = 0

const checkPosition = debounce(() => {
  if (!containerRef.value)
    return

  const { scrollTop, scrollHeight, clientHeight } = containerRef.value
  const currentScroll = scrollTop

  // 判断滚动方向
  const isScrollingDown = currentScroll > lastScrollTop.value
  lastScrollTop.value = currentScroll

  // 触发条件判断
  const isAtTop = currentScroll <= props.threshold
  const isAtBottom = currentScroll + clientHeight >= scrollHeight - props.threshold

  if (!isScrollingDown && isAtTop && !props.disableTop) {
    topLoading.value = true
    emit('load-top', () => {
      topLoading.value = false
    })
  }

  if (isScrollingDown && isAtBottom && !props.disableBottom) {
    bottomLoading.value = true
    emit('load-bottom', () => {
      bottomLoading.value = false
    })
  }
}, props.debounceTime)

const handleScroll = () => {
  checkPosition()
}

const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  containerRef.value?.scrollTo({
    top: 0,
    behavior,
  })
}

const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
  if (!containerRef.value)
    return
  const { scrollHeight, clientHeight } = containerRef.value
  containerRef.value.scrollTo({
    top: scrollHeight - clientHeight,
    behavior,
  })
}

// 滚动位置保持相关方法
const prepareTopLoad = () => {
  if (containerRef.value)
    previousScrollHeight = containerRef.value.scrollHeight
}

const adjustScrollPosition = () => {
  nextTick(() => {
    if (!containerRef.value)
      return
    const newScrollHeight = containerRef.value.scrollHeight
    const diff = newScrollHeight - previousScrollHeight
    if (diff > 0)
      containerRef.value.scrollTop += diff
  })
}

defineExpose({
  scrollToTop,
  scrollToBottom,
  prepareTopLoad,
  adjustScrollPosition,
})
</script>

<template>
  <div
    ref="containerRef"
    class="scroll-container"
    @scroll.passive="handleScroll"
  >
    <div ref="contentRef" class="scroll-content">
      <!-- 顶部加载提示 -->
      <div
        v-if="!disableTop"
        class="load-indicator top-indicator"
        :data-visible="topLoading"
      >
        <slot name="top-loading" :loading="topLoading">
          <div class="loader">
            <div class="loader-spinner" />
          </div>
        </slot>
      </div>

      <!-- 主要内容 -->
      <slot />

      <!-- 底部加载提示 -->
      <div
        v-if="!disableBottom"
        class="load-indicator bottom-indicator"
        :data-visible="bottomLoading"
      >
        <slot name="bottom-loading" :loading="bottomLoading">
          <div class="loader">
            <div class="loader-spinner" />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroll-container {
  height: 100%;
  overflow-y: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.scroll-content {
  min-height: 100%;
  position: relative;
}

.load-indicator {
  height: 0;
  transition: opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.9);

  &.top-indicator {
    position: sticky;
    top: 20px;
    z-index: 1;
  }

  &.bottom-indicator {
    position: sticky;
    bottom: 20px;
  }

  &[data-visible="true"] {
    opacity: 1;
  }

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .loader-spinner {
    width: 24px;
    height: 24px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-top-color: #007aff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
