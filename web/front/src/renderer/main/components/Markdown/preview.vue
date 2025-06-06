<script setup lang="ts">
import { ref, onUnmounted, watch, nextTick } from 'vue'
import { mrakdownPreivew } from './helper'

const props = withDefaults(
  defineProps<{
    content?: string
    typewriter?: boolean // 添加打字机模式属性
    typingSpeed?: number // 打字速度控制
  }>(),
  {
    content: ``,
    typewriter: false, // 默认关闭打字机效果
    typingSpeed: 50 // 默认打字速度，每秒字符数
  }
)

const contentRef = ref<HTMLDivElement>()
const displayedContent = ref('') // 用于存储当前显示的内容
const typingTimer = ref<number | null>(null)
const isTyping = ref(false)

// 平滑打字效果函数
const smoothTyping = (newContent: string, typingSpeed: number) => {
  if (typingTimer.value) {
    clearTimeout(typingTimer.value)
  }

  isTyping.value = true
  const currentLength = displayedContent.value.length

  // 如果新内容比当前显示的短，直接更新（可能是内容被删除了）
  if (newContent.length <= currentLength) {
    displayedContent.value = newContent
    mrakdownPreivew(contentRef.value!, displayedContent.value)
    isTyping.value = false
    return
  }

  // 计算需要添加的字符数
  const charsToAdd = newContent.length - currentLength

  // 计算打字间隔时间（毫秒）
  const typingInterval = Math.max(10, Math.floor(1000 / typingSpeed))

  // 逐字添加内容
  let charIndex = 0

  const typeNextChar = () => {
    if (charIndex < charsToAdd) {
      // 每次添加一个字符
      displayedContent.value = newContent.substring(0, currentLength + charIndex + 1)
      mrakdownPreivew(contentRef.value!, displayedContent.value)

      // 滚动到底部
      if (contentRef.value) {
        contentRef.value.scrollTop = contentRef.value.scrollHeight
      }

      charIndex++
      typingTimer.value = window.setTimeout(typeNextChar, typingInterval)
    } else {
      isTyping.value = false
    }
  }

  typeNextChar()
}

watch(
  [() => props.content, () => props.typewriter],
  ([content, newLoading], [oldLoading]) => {
    // 当从打字机模式切换到非打字机模式时，需要更快的显示内容
    if (!newLoading && oldLoading) {
      smoothTyping(content, props.typingSpeed * 2)
    } else if (!newLoading && !oldLoading) {
      // 如果一直是非打字机模式，直接显示内容
      nextTick(() => {
        if (!contentRef.value) return
        displayedContent.value = content
        mrakdownPreivew(contentRef.value, content)
      })
    } else {
      // 打字机模式下平滑显示内容
      smoothTyping(content, props.typingSpeed)
    }
  },
  { immediate: true }
)

// 组件卸载时清除定时器
onUnmounted(() => {
  if (typingTimer.value) {
    clearTimeout(typingTimer.value)
  }
})
</script>

<template>
  <div
    ref="contentRef"
    class="markdown-preview vditor-reset"
    :class="{
      'typewriter-mode': typewriter,
      'is-typing': isTyping
    }"
  >
    <slot name="loading" v-if="!content && typewriter">
      <span class="text-base text-[#1D1E1F] animate-bounce">{{ $t('common.loading') }}... </span>
    </slot>
  </div>
</template>

<style>
/* .markdown-preview.typewriter-mode {
  overflow-y: auto;
  max-height: 100%;
  transition: all 0.2s ease;
  position: relative;
} */
</style>
