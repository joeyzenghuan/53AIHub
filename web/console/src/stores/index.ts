import type { App } from 'vue'
import { createPinia } from 'pinia'

export const store = createPinia()

export function setupStore(app: App) {
  app.use(store)
}

// export * from './modules'
export * from './modules/user'
export * from './modules/group'
export * from './modules/channel'
export * from './modules/conversation'
export * from './modules/enterprise'
export * from './modules/setting'