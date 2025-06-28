import { defineStore } from 'pinia'
import { useBasicLayout } from '@/hooks/useBasicLayout'

const { isMdScreen } = useBasicLayout()


export const useGlobalStore = defineStore('global', {
  state: () => ({
    // 侧边栏是否可见
    siderVisible: true,
    // 侧边栏是否隐藏
    siderCollapsed: false,
  }),

  getters: {
    isMdScreen: () => isMdScreen.value,
  },
  actions: {
    toggleSider() {
      if (this.isMdScreen) {
        this.siderCollapsed = !this.siderCollapsed
        return
      }
      this.siderVisible = !this.siderVisible
      if (this.siderVisible) {
        this.siderCollapsed = false
      }
    },
    hoverSider(visible: boolean) {
      if (this.isMdScreen && !visible) {
        return
      }
      if (!this.siderVisible) {
        this.siderCollapsed = visible
      }
    },
  }
})
