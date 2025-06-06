import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HubUiX from 'hub-ui-x'

import App from './App.vue'
import { setupI18n } from './locales'
import { setupRouter } from './router'
import { setupGlobal } from './global'
import { setupDirective } from './directive'
import { setupPlugins } from './plugins'
const pinia = createPinia()

import SvgIcon from '@/components/SvgIcon.vue'

import './assets/styles/global.css' // 引入css文件
import './assets/styles/element-plus.css' // 引入css文件
import './assets/styles/tailwind.css' // 引入css文件
import './assets/styles/custom.css' // 引入css文件

import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-notification.css'
import 'element-plus/theme-chalk/el-message-box.css'
import 'element-plus/theme-chalk/el-overlay.css'
import 'element-plus/theme-chalk/el-dialog.css'

import 'hub-ui-x/dist/hub-ui-x.css'

import 'virtual:svg-icons-register'


async function bootstrap() {
  const app = createApp(App)
  setupGlobal(app)
  setupI18n(app)
  setupDirective(app)
  setupRouter(app)
  setupPlugins(app)
  app.component('SvgIcon', SvgIcon)
  app.use(pinia);
  app.use(HubUiX)
  app.mount('#app')
}

bootstrap()
