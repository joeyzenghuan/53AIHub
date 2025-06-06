<script setup lang="ts">
import MarkdownPreview from '@/components/Markdown/preview.vue'
import { ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    message: string
    reasoning?: string
    avatar?: string
    loading?: boolean
    alwaysShowFooter?: boolean
  }>(),
  {
    message: '',
    reasoning: '',
    avatar: '',
    loading: false,
    alwaysShowFooter: false
  }
)

// 添加一个变量来跟踪 loading 是否曾经为 true
const wasLoading = ref(props.loading)

// 监听 loading 属性的变化
watch(() => props.loading, (newValue) => {
  if (newValue === true) {
    wasLoading.value = true
  }
})
</script>

<template>
  <div class="flex items-start mb-4 group">
    <!-- 头像 -->
    <!-- <div class="flex-shrink-0 mr-3">
      <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white" v-if="!avatar">
        <span>AI</span>
      </div>
      <img v-else :src="avatar" alt="Avatar" class="w-8 h-8 rounded-full" />
    </div> -->

    <!-- 消息内容 -->
    <div class="max-w-[100%]">
      <!-- header 插槽 -->
      <slot name="header"></slot>
      <!-- 气泡 -->
      <div class="bg-[#F7F7F7] text-base text-primary rounded-xl p-4 bubble-robot">
        <details v-if="reasoning" :open="wasLoading || !message">
          <summary>
            <svg style="width: 16px; height: 16px">
              <use xlink:href="#icon-star-link" fill="rgba(24, 43, 80, 0.8)"></use>
            </svg>
            <span class="flex-1">{{
              message ? $t('chat.completion_completed') : $t('chat.completion_thinking')
            }}</span>
          </summary>
          <MarkdownPreview :content="reasoning" :typewriter="loading"></MarkdownPreview>
        </details>
        <MarkdownPreview :content="message" :typewriter="loading">
          <template #loading>
            <div class="loading-dots">
              <div class="dot dot1"></div>
              <div class="dot dot2"></div>
            </div>
          </template>
        </MarkdownPreview>
      </div>

      <!-- footer 插槽 -->
      <div
        class="flex items-center gap-3 mt-2"
        :class="{
          'invisible group-hover:visible': !alwaysShowFooter
        }"
      >
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style>
.bubble-robot details {
  padding: 6px 12px;
  background-color: white !important;
  font-size: 14px;
  color: #182b50;
  margin-bottom: 8px;
}

.bubble-robot details .vditor-reset {
  font-size: 14px;
  margin-top: 8px;
}

.bubble-robot details summary {
  cursor: pointer;
  color: rgba(24, 43, 80, 0.8);
  display: flex;
  align-items: center;
  gap: 4px;
}

.bubble-robot details summary::marker {
  content: '';
}

.bubble-robot details summary:after {
  content: '➤';
  display: inline-block;
  transition: transform 0.2s;
  transform: rotate(270deg);
  font-size: 12px;
}

.bubble-robot details summary + p {
  margin-top: 10px;
}

.bubble-robot details[open] summary:after {
  transform: rotate(90deg);
}

.bubble-robot details:not([open]) > *:not(summary) {
  display: none !important;
}
</style>
<style scoped>
/* 加载动画小球样式 */
.loading-dots {
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  height: 24px;
  width: 40px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--el-color-primary-light-8);
  position: absolute;
  animation: moveDot 2.5s infinite;
}

.dot1 {
  animation-delay: 0s;
}

.dot2 {
  animation-delay: 0.3s;
}

@keyframes moveDot {
  0% {
    left: 0;
    background-color: var(--el-color-primary-light-9);
  }

  40% {
    left: calc(100% - 8px);
    background-color: var(--el-color-primary-light-7);
  }

  50% {
    left: calc(100% - 8px);
    background-color: var(--el-color-primary-light-5);
  }

  90% {
    left: 0;
    background-color: var(--el-color-primary-light-3);
  }

  100% {
    left: 0;
    background-color: var(--el-color-primary-light-9);
  }
}
</style>
