import type { Ref } from 'vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface toolReturn {
  tooltipVisible: Ref<boolean>
}

export default function useTooltip(): toolReturn {
  const tooltipVisible = ref(false)
  const findParent = (el: any): boolean => {
    if (el.classList && el.classList.contains('el-popper'))
      return true
    if (el.parentNode)
      return findParent(el.parentNode)
    return false
  }

  const hidePromptTooltip = (e) => {
    if (!findParent(e.target))
      tooltipVisible.value = false
  }

  onMounted(() => {
    document.addEventListener('click', hidePromptTooltip)
  })

  onBeforeUnmount(() => {
    // 移除监听器
    document.removeEventListener('click', hidePromptTooltip)
  })
  return {
    tooltipVisible,
  }
}
