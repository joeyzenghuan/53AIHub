import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    // 侧边栏是否可见
    siderVisible: true,
    // 侧边栏是否隐藏
    siderCollapsed: false,
  }),

  getters: {

  },
  actions: {
    toggleSider() {
      this.siderVisible = !this.siderVisible
      if (this.siderVisible) {
        this.siderCollapsed = false
      }
    },
    hoverSider(visible: boolean) {
      if (!this.siderVisible) {
        this.siderCollapsed = visible
      }
    },
  }
})
