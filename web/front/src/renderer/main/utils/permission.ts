import { createApp } from 'vue'
import { ElMessage } from 'element-plus'
import type { ComponentPublicInstance } from 'vue'
import { setupI18n } from '../locales'
import { setupGlobal } from '../global'
import { setupDirective } from '../directive'
import { useUserStore } from '@/stores/modules/user'

let mountNode: HTMLElement | null = null
let loginMountNode: HTMLElement | null = null

export interface AuthOptions {
  checkLogin?: boolean
  checkVersion?: boolean
  groupIds?: number[]
  onClick?: () => void
}

interface UpgradeInstance extends ComponentPublicInstance {
  open: () => void
}

interface LoginInstance extends ComponentPublicInstance {
  open: () => void
}

/**
 * 创建并显示登录弹窗
 */
const showLoginModal = async (): Promise<void> => {
  if (loginMountNode) {
    loginMountNode.remove()
    loginMountNode = null
  }
  loginMountNode = document.createElement('div')
  document.body.appendChild(loginMountNode)

  const LoginModal = (await import('@/components/LoginModal/index.vue')).default
  const loginApp = createApp(LoginModal, {})
  setupGlobal(loginApp)
  setupDirective(loginApp)
  setupI18n(loginApp)
  const loginInstance = loginApp.mount(loginMountNode) as LoginInstance
  loginInstance.open()
}

/**
 * 创建并显示升级弹窗
 */
const showUpgradeModal = async (): Promise<void> => {
  if (mountNode) {
    mountNode.remove()
    mountNode = null
  }
  mountNode = document.createElement('div')
  document.body.appendChild(mountNode)

  const Upgrade = (await import('@/components/Upgrade/index.vue')).default
  const upgradeApp = createApp(Upgrade, {})
  setupGlobal(upgradeApp)
  setupDirective(upgradeApp)
  setupI18n(upgradeApp)
  const upgradeInstance = upgradeApp.mount(mountNode) as UpgradeInstance
  upgradeInstance.open()
}

/**
 * 检查登录状态
 */
const checkLoginStatus = (): boolean => {
  const isLoggedIn = localStorage.getItem('access_token')
  if (!isLoggedIn) {
    showLoginModal()
    return false
  }
  return true
}

/**
 * 检查版本权限
 */
const checkVersionPermission = (groupIds?: number[]): boolean => {
  if (!groupIds) return true
  // if (groupIds.length === 0) return true

  const userStore = useUserStore()
  const userGroupIds = userStore.info.group_ids || []
  const isInternal = userStore.info.is_internal
  const hasPermission = Boolean(
    userGroupIds.length && groupIds.some((id) => userGroupIds.includes(id))
  )

  if (!hasPermission) {
    if (isInternal) {
      ElMessage.warning(window.$t('authority.agent_not_permission'))
      return false
    }
    showUpgradeModal()
    return false
  }

  return true
}

/**
 * 统一的认证检查函数
 * @param options 认证选项
 * @returns Promise<boolean> 是否通过认证
 */
export const checkPermission = (options: AuthOptions = {}): boolean => {
  const { groupIds, onClick } = options

  // 检查登录状态
  if (!checkLoginStatus()) {
    return false
  }

  // 检查版本权限
  if (!checkVersionPermission(groupIds)) {
    return false
  }

  // 如果所有检查都通过，执行回调
  if (onClick) {
    onClick()
  }

  return true
}
