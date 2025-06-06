import type { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const element = el.querySelector('input') || el.querySelector('textarea')
    if (!element) return

    const trimValue = () => {
      if (element.value) {
        element.value = element.value.trim()
        element.dispatchEvent(new Event('input', { bubbles: true }))
      }
    }

    // 将事件监听器存储在元素上，以便后续卸载时使用
    const handlers = {
      blur: trimValue,
      change: trimValue,
      input: () => {
        if (binding.modifiers.immediate) {
          trimValue()
        }
      }
    }
    
    Object.entries(handlers).forEach(([event, handler]) => {
      element.addEventListener(event, handler)
    })

    // 将handlers存储在元素上
    el._trimHandlers = { element, handlers }
  },

  unmounted(el: HTMLElement) {
    // 获取之前存储的handlers并清理事件
    const stored = (el as any)._trimHandlers
    if (stored) {
      const { element, handlers } = stored
      Object.entries(handlers).forEach(([event, handler]) => {
        element.removeEventListener(event, handler)
      })
      delete el._trimHandlers
    }
  }
}
