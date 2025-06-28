import Upgrade from '@/components/Upgrade/index.vue'
import LoginModal from '@/components/LoginModal/setup.ts'

import { createApp } from 'vue'
import { setupI18n } from '../locales'
import { setupGlobal } from '../global'
import { setupDirective } from './index'

import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/modules/user'

let mountNode: HTMLElement | null = null
export const checkPermission = async ({ group_ids = [], onclick = () => {} } = {}) => {
  const isLoggedIn = localStorage.getItem('access_token') // 或其他判断用户是否登录的方法
  if (!isLoggedIn) return LoginModal().open()

  const userStore = useUserStore()
  const user_group_ids = userStore.info.group_ids || []
  const is_internal = userStore.info.is_internal

  const is_permission = Boolean(user_group_ids.length && group_ids.some((id) => user_group_ids.includes(id)))
  if (!is_permission) {
    if (is_internal) return ElMessage.warning(window.$t('authority.agent_not_permission'))

    if (mountNode) {
      mountNode.remove()
      mountNode = null
    }
    mountNode = document.createElement('div')
    document.body.appendChild(mountNode)
    const upgradeApp = createApp(Upgrade, {})
    setupGlobal(upgradeApp)
    setupDirective(upgradeApp)
    setupI18n(upgradeApp)
    const upgradeInstance = upgradeApp.mount(mountNode)

    // const valid = await upgradeInstance.validateUpgrade()
    // if (!valid) ElMessage.warning(window.$t('authority.payment_not_setting'))
    upgradeInstance.open()
    return
  }
  onclick()
}
const handler = (el: any, binding: any) => {
  el._permissionParams = binding.value
  if (!el._permissionHandler) {
    el._permissionHandler = function (event) {
      // event.stopPropagation()
      // event.preventDefault()
      const group_ids = el._permissionParams.group_ids || []
      const onclick = el._permissionParams.onclick || (() => {})
      checkPermission({ group_ids, onclick })
    }
  }
  el.removeEventListener('click', el._permissionHandler)
  el.addEventListener('click', el._permissionHandler)
}
export default {
  mounted: handler,
  updated: handler,
  unmounted: (el: any) => {
    el.removeEventListener('click', el._permissionHandler)
  },
}
