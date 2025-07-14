import { checkVersionPermission, showVersionTooltip, checkVersion } from '@/utils/version'

const handler = (el, binding) => {
  el._versionParams = binding.value
  const params = el._versionParams || {}
  const isTooltipMode = params.mode === 'tooltip'
  const isRemoveMode = params.mode === 'remove'

  // remove 模式：直接检查版本并移除/显示元素
  if (isRemoveMode) {
    // 保存原始的 display 值
    if (!el._originalDisplay) {
      el._originalDisplay = getComputedStyle(el).display
    }

    const passed = checkVersionPermission(params, el)
    if (!passed) {
      // 版本检查不通过，直接从 DOM 中移除元素
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      }
      return
    }
    // 版本检查通过，确保元素正常显示
    if (el._originalDisplay && el._originalDisplay !== 'none') {
      el.style.display = el._originalDisplay
    } else {
      // 如果原始值是 none 或未知，使用默认值
      el.style.display = ''
    }

    // 版本检查通过，不需要添加任何事件监听器，直接返回
    return
  }

  // 点击事件处理器
  if (!el._versionHandler) {
    el._versionHandler = (event) => {
      const params = el._versionParams || {}
      const passed = checkVersionPermission(params, el)

      if (!passed) {
        // 阻止原始的点击事件
        event.stopPropagation()
        event.preventDefault()
        event.stopImmediatePropagation()
        return false
      }

      // 如果检查通过，让原始的点击事件继续执行
      return true
    }
  }

  // 鼠标悬停事件处理器（仅在 tooltip 模式下使用）
  if (isTooltipMode && !el._versionHoverHandler) {
    el._versionHoverHandler = {
      mouseenter() {
        const params = el._versionParams || {}
        const { content, effect, placement, module, count } = params

        // 检查版本，如果不通过则显示 tooltip
        if (!checkVersion(module, count)) {
          showVersionTooltip(el, content, { effect, placement })
        }
      },
      mouseleave() {
        // 鼠标离开时隐藏 tooltip
        if (el._versionTooltip) {
          setTimeout(() => {
            el._versionTooltip.destroy()
            delete el._versionTooltip
          }, 1000)
        }
      }
    }
  }

  // 移除旧的监听器
  const clickEvents = ['click', 'mousedown', 'mouseup', 'touchstart', 'touchend']
  clickEvents.forEach((eventType) => {
    el.removeEventListener(eventType, el._versionHandler, true)
  })

  if (el._versionHoverHandler) {
    el.removeEventListener('mouseenter', el._versionHoverHandler.mouseenter)
    el.removeEventListener('mouseleave', el._versionHoverHandler.mouseleave)
  }

  // 添加新的监听器
  if (isTooltipMode) {
    // tooltip 模式：添加悬停事件监听器和点击事件监听器（禁用点击）
    el.addEventListener('mouseenter', el._versionHoverHandler.mouseenter)
    el.addEventListener('mouseleave', el._versionHoverHandler.mouseleave)
    if (checkVersion(el._versionParams.module, el._versionParams.count)) {
      el.style.cursor = 'pointer'
      el.style.opacity = '1'
    } else {
      el.style.cursor = 'not-allowed'
      el.style.opacity = '0.5'
    }
    // 在 tooltip 模式下也要禁用点击事件
    clickEvents.forEach((eventType) => {
      el.addEventListener(eventType, el._versionHandler, true)
    })
  } else {
    // dialog 模式：添加点击事件监听器
    clickEvents.forEach((eventType) => {
      el.addEventListener(eventType, el._versionHandler, true)
    })
  }
}

export default {
  mounted: handler,
  updated: handler,
  beforeUnmount: (el) => {
    // 清理点击事件监听器
    if (el._versionHandler) {
      const clickEvents = ['click', 'mousedown', 'mouseup', 'touchstart', 'touchend']
      clickEvents.forEach((eventType) => {
        el.removeEventListener(eventType, el._versionHandler, true)
      })
      delete el._versionHandler
    }

    // 清理悬停事件监听器
    if (el._versionHoverHandler) {
      el.removeEventListener('mouseenter', el._versionHoverHandler.mouseenter)
      el.removeEventListener('mouseleave', el._versionHoverHandler.mouseleave)
      delete el._versionHoverHandler
    }

    // 清理参数和 tooltip 相关资源
    delete el._versionParams
    delete el._originalDisplay
    if (el._versionTooltip) {
      el._versionTooltip.destroy()
      delete el._versionTooltip
    }
  }
}
