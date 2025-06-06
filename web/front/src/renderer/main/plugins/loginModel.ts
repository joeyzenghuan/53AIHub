import { createApp, h, ref, onMounted } from 'vue'
import LoginModal from '../components/LoginModal/index.vue'

import { setupI18n } from '../locales'
import { setupGlobal } from '../global'
import { setupDirective } from '../directive'


export default function () {
  try {
    const container = document.createElement('div')
    document.body.appendChild(container)
    let instance = {}
    const app = createApp({
      setup() {
        const component_instance = ref(null)
        onMounted(() => {
          if (component_instance.value) instance = component_instance.value
        })
        return () => h(LoginModal, { ref: component_instance })
      }
    })
    setupGlobal(app)
    setupDirective(app)
    setupI18n(app)
    app.mount(container)
    instance.destroy = () => {
      app.unmount()
      container.remove()
    }
    return instance
  } catch (error) {
    console.error(error)
    return {}
  }
}
