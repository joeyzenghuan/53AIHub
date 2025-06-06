<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  autoScroll: {
    type: Boolean,
    default: true
  },
  messages: {
    type: Array as () => Conversation.Message[],
    default: () => []
  },
  enableLoadMore: {
    type: Boolean,
    default: false
  },
  enableLoadNew: {
    type: Boolean,
    default: false
  },
  contentClass: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['loadMore', 'loadNew'])

// 聊天容器引用
const contentRef = ref<HTMLElement | null>(null)
// 是否用户手动滚动标志
const userScrolled = ref(false)
// 存储 MutationObserver 实例
const observer = ref<MutationObserver | null>(null)
// 顶部加载状态
const isLoadingMore = ref(false)
// 底部加载状态
const isLoadingNew = ref(false)

// 监听滚动事件
const handleScroll = () => {
  if (!contentRef.value) return

  const { scrollTop, scrollHeight, clientHeight } = contentRef.value

  // 检测滚动到顶部 - 加载更早的消息
  if (scrollTop < 50 && !isLoadingMore.value && props.enableLoadMore) {
    isLoadingMore.value = true
    emit('loadMore', () => {
      isLoadingMore.value = false
    })
  }

  // 如果用户向上滚动，标记为用户已滚动
  if (scrollHeight - scrollTop - clientHeight > 50) {
    userScrolled.value = true
  }

  // 如果用户滚动到底部，重置标志并可能加载新消息
  if (scrollHeight - scrollTop - clientHeight < 10) {
    userScrolled.value = false

    // 检测滚动到底部 - 加载更新的消息
    if (!isLoadingNew.value && props.enableLoadNew) {
      isLoadingNew.value = true
      emit('loadNew', () => {
        isLoadingNew.value = false
      })
    }
  }
}

// 滚动到底部方法
const scrollToBottom = async () => {
  await nextTick()
  if (!contentRef.value) return

  contentRef.value.scrollTop = contentRef.value.scrollHeight
}

// 监听子元素变化，自动滚动
const observeContentChanges = () => {
  if (!contentRef.value) return

  observer.value = new MutationObserver(() => {
    if (props.autoScroll && !userScrolled.value) {
      scrollToBottom()
    }
  })

  observer.value.observe(contentRef.value, {
    childList: true,
    subtree: true,
    characterData: true
  })
}

// 监听消息列表变化，自动滚动到底部
watch(
  () => props.messages,
  () => {
    if (props.autoScroll && !userScrolled.value) {
      scrollToBottom()
    }
  },
  { deep: true }
)

// 组件挂载时初始化
onMounted(() => {
  observeContentChanges()
  scrollToBottom()

  // 添加滚动事件监听器
  contentRef.value?.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  // 移除滚动事件监听器
  contentRef.value?.removeEventListener('scroll', handleScroll)
  // 断开 MutationObserver 连接
  observer.value?.disconnect()
})

defineExpose({
  scrollToBottom
})
</script>

<template>
  <div ref="contentRef" class="overflow-y-auto h-full" @scroll="handleScroll">
    <!-- 顶部加载指示器 -->
    <div v-if="isLoadingMore" class="text-center py-2 text-gray-500 text-sm">
      <span>{{ $t('common.load_more') }}...</span>
    </div>
    <transition-group name="message" tag="div" :class="[contentClass]">
      <!-- 使用传入的消息数据渲染 -->
      <template v-for="(message, index) in messages" :key="message.id">
        <slot name="item" :message="message" :index="index"></slot>
      </template>
    </transition-group>
    <!-- 底部加载指示器 -->
    <div v-if="isLoadingNew" class="text-center py-2 text-gray-500 text-sm">
      <span>{{ $t('common.load_new') }}...</span>
    </div>
  </div>
</template>

<style scoped>
.message-enter-active,
.message-leave-active {
  transition: all 0.3s ease;
}

.message-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.message-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.message-move {
  transition: transform 0.3s ease;
}
</style>
