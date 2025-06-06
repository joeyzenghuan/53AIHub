import type { Ref } from 'vue'
import { nextTick, ref } from 'vue'

type ScrollElement = HTMLDivElement | null

interface ScrollReturn {
  scrollRef: Ref<ScrollElement>
  scrollToBottom: () => Promise<void>
  scrollToTop: () => Promise<void>
  scrollTo: (selector: string, diff?: number) => Promise<void>
  scrollToVal: (value: number) => Promise<void>
  scrollToBottomIfAtBottom: () => Promise<void>
}

export function useScroll(): ScrollReturn {
  const scrollRef = ref<ScrollElement>(null)

  const scrollToBottom = async () => {
    await nextTick()
    if (scrollRef.value)
      scrollRef.value.scrollTop = scrollRef.value.scrollHeight
  }

  const scrollToTop = async () => {
    await nextTick()
    if (scrollRef.value)
      scrollRef.value.scrollTop = 0
  }

  const scrollToBottomIfAtBottom = async () => {
    await nextTick()
    if (scrollRef.value) {
      const threshold = 100 // 阈值，表示滚动条到底部的距离阈值
      const distanceToBottom = scrollRef.value.scrollHeight - scrollRef.value.scrollTop - scrollRef.value.clientHeight
      if (distanceToBottom <= threshold)
        scrollRef.value.scrollTop = scrollRef.value.scrollHeight
    }
  }

  const scrollTo = async (selector: string, diff = 0) => {
    await nextTick()
    const node = document.querySelector(selector)
    if (scrollRef.value && node)
      scrollRef.value.scrollTop = node.offsetTop + diff
    await nextTick()
  }
  const scrollToVal = async (value: number) => {
    await nextTick()
    if (scrollRef.value)
      scrollRef.value.scrollTop = value
  }

  return {
    scrollRef,
    scrollToBottom,
    scrollToTop,
    scrollTo,
    scrollToVal,
    scrollToBottomIfAtBottom,
  }
}
