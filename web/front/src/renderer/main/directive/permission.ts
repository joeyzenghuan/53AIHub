import { checkPermission, type AuthOptions } from '@/utils/permission'

const handler = (el: any, binding: any) => {
  el._authParams = binding.value

  if (!el._authHandler) {
    el._authHandler = async function (event: Event) {
      const params: AuthOptions = el._authParams || {}
      const passed = await checkPermission(params)

      if (!passed) {
        // 阻止原始的点击事件
        event.stopPropagation()
        event.preventDefault()
        return false
      }

      // 如果检查通过，让原始的点击事件继续执行
      return true
    }
  }

  // 移除旧的监听器
  el.removeEventListener('click', el._authHandler, true)
  // 添加新的监听器，使用捕获阶段以便在其他点击处理器之前执行
  el.addEventListener('click', el._authHandler, true)
}

export default {
  mounted: handler,
  updated: handler,
  unmounted: (el: any) => {
    if (el._authHandler) {
      el.removeEventListener('click', el._authHandler, true)
    }
  }
}
