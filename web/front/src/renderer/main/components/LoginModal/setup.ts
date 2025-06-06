import { createApp, App } from 'vue'
import LoginModal from './index.vue'

import { setupI18n } from '../../locales'
import { setupGlobal } from '../../global'
import { setupDirective } from '../../directive'

// 定义组件实例接口，提高类型安全性
interface ModalInstance {
  destroy?: () => void;
  [key: string]: any;
}
let mountNode: HTMLElement | null = null
export default function (options: any = {}): ModalInstance {
  try {
    if (mountNode) {
      mountNode.remove()
      mountNode = null
    }

    mountNode = document.createElement('div')
    document.body.appendChild(mountNode)

    // 使用类型注解
    const app: App = createApp(LoginModal, options)

    // 链式调用设置函数
    setupGlobal(app)
    setupDirective(app)
    setupI18n(app)



    return app.mount(mountNode)
  } catch (error) {
    console.error('LoginModal setup failed:', error)
    // 返回一个带有空destroy方法的对象，避免调用时出错
    return {
      destroy: () => { }
    }
  }
}
