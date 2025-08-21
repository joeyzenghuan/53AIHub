import { App } from 'vue'
import { setupFilter } from './filters'
import { setupGlobal } from './methods'

/**
 * 统一设置全局配置
 * @param app Vue 应用实例
 */
export function setupGlobalConfig(app: App) {
  setupFilter(app)
  setupGlobal(app)
}

// 重新导出所有模块
export * from './filters'
export * from './methods'
