import { createApp, h } from 'vue'
import { ElMessageBox, ElTooltip, ElButton, ElIcon } from 'element-plus'
import { WarningFilled } from '@element-plus/icons-vue'
import ServiceDialog from '@/components/ServiceDialog/index.vue'
import { useEnterpriseStore } from '@/stores/modules/enterprise'

let serviceMountNode: HTMLElement | null = null

export interface VersionOptions {
  // 模块
  module: string
  // 数量
  count?: number
  content: string
  mode?: 'dialog' | 'tooltip' // 新增模式选择
  effect?: 'dark' | 'light' // tooltip 主题
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end' // tooltip 位置
  onClick?: () => void
}

/**
 * 显示服务弹窗
 * @param content 提示内容
 */
const showServiceDialog = () => {
  if (serviceMountNode) {
    serviceMountNode.remove()
    serviceMountNode = null
  }

  serviceMountNode = document.createElement('div')
  document.body.appendChild(serviceMountNode)

  const serviceApp = createApp(ServiceDialog, {
    visible: true,
    title: window.$t('version.scan_consult'),
    'onUpdate:visible': (visible: boolean) => {
      if (!visible && serviceMountNode) {
        setTimeout(() => {
          if (serviceMountNode) {
            serviceMountNode.remove()
            serviceMountNode = null
          }
        }, 300)
      }
    }
  })

  // 设置全局$t函数
  serviceApp.config.globalProperties.$t = window.$t || ((key) => key)

  serviceApp.mount(serviceMountNode)
}

/**
 * 显示升级提示弹窗
 * @param content 提示内容
 */
const showUpgradeDialog = (content: string) => {
  ElMessageBox.confirm(content, window.$t('version.upgrade_tip'), {
    confirmButtonText: window.$t('action_upgrade'),
    cancelButtonText: window.$t('action_cancel'),
    customClass: 'version-upgrade-dialog',
    type: 'warning',
    center: true
  })
    .then(() => {
      // 点击升级时显示服务弹窗
      showServiceDialog()
    })
    .catch(() => {
      // 用户取消
      console.log('用户取消了升级')
    })
}

/**
 * 创建带有升级按钮的 tooltip 内容
 * @param content 基础内容
 * @returns VNode
 */
const createTooltipContent = (content?: string) => {
  const baseText = content || window.$t('version.not_support')

  return h('div', { class: 'version-tooltip-content' }, [
    h(ElIcon, { color: '#F0A105', size: '16px' }, h(WarningFilled, {})),
    h('div', {}, baseText),
    h(
      ElButton,
      {
        type: 'primary',
        size: 'small',
        link: true,
        onClick: () => showServiceDialog()
      },
      () => window.$t('version.upgrade')
    )
  ])
}

/**
 * 显示版本限制 tooltip
 * @param el 目标元素
 * @param content 提示内容
 * @param options tooltip 选项
 */
const showVersionTooltip = (
  el: HTMLElement,
  content: string,
  options: { effect?: string; placement?: string } = {}
) => {
  // 已存在就不创建
  if (el._versionTooltip) return

  // 如果是字符串且需要升级按钮，创建带按钮的内容
  const finalContent = createTooltipContent(content)

  let hideTimer: NodeJS.Timeout | null = null

  // 挂载到元素
  const mountNode = document.createElement('div')
  mountNode.style.cssText =
    'position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: auto; z-index: 99; '

  // 确保元素有相对定位
  if (getComputedStyle(el).position === 'static') {
    el.style.position = 'relative'
  }

  // 创建 tooltip 实例
  const tooltipApp = createApp({
    render() {
      return h(
        ElTooltip,
        {
          placement: options.placement || 'top-end',
          effect: options.effect || 'light',
          trigger: 'manual',
          visible: true
        },
        {
          default: () => h('span', { style: 'display: inline-block; width: 100%; height: 100%;' }),
          content: () => finalContent
        }
      )
    }
  })

  el.appendChild(mountNode)
  tooltipApp.mount(mountNode)

  // 保存引用以便清理
  el._versionTooltip = {
    app: tooltipApp,
    mountNode,
    hideTimer,
    destroy() {
      if (hideTimer) {
        clearTimeout(hideTimer)
      }
      tooltipApp.unmount()
      if (mountNode.parentNode) {
        mountNode.parentNode.removeChild(mountNode)
      }
    }
  }
}

/**
 * 检查版本权限
 * @param module 模块
 * @param count 数量
 * @returns boolean 是否满足版本要求
 */
export const checkVersion = (module: string, count?: number) => {
  const enterpriseStore = useEnterpriseStore()
  const features = enterpriseStore.version.features
  if (module in features) {
    const feature = features[module]
    return feature.max > (count || 0)
  }
  return true
}

/**
 * 统一的版本权限检查函数
 * @param options 版本检查选项
 * @param el 目标元素（tooltip 模式时需要）
 * @returns boolean 是否通过版本检查
 */
export const checkVersionPermission = (options: VersionOptions, el?: HTMLElement) => {
  const { module, count, content, mode = 'dialog', effect, placement, onClick } = options

  if (!checkVersion(module, count)) {
    if (mode === 'tooltip' && el) {
      // 显示 tooltip 提示
      showVersionTooltip(el, content, { effect, placement })
    } else {
      // 显示升级提示弹窗
      showUpgradeDialog(typeof content === 'string' ? content : window.$t('version.not_support'))
    }
    return false
  }

  // 如果版本检查通过，执行回调
  if (onClick) {
    onClick()
  }

  return true
}

/**
 * 导出 tooltip 相关函数供外部使用
 */
export { showVersionTooltip }
