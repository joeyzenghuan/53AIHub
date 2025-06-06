import { p as defineStore } from "./main-zTjO05wq.js";
const useGlobalStore = defineStore("global", {
  state: () => ({
    // 侧边栏是否可见
    siderVisible: true,
    // 侧边栏是否隐藏
    siderCollapsed: false
  }),
  getters: {},
  actions: {
    toggleSider() {
      this.siderVisible = !this.siderVisible;
      if (this.siderVisible) {
        this.siderCollapsed = false;
      }
    },
    hoverSider(visible) {
      if (!this.siderVisible) {
        this.siderCollapsed = visible;
      }
    }
  }
});
export {
  useGlobalStore as u
};
