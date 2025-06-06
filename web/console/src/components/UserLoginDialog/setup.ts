import { createApp, h, ref, onMounted } from 'vue'
import LoginDialogComponent from './index.vue'

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
				return () => h(LoginDialogComponent, { ref: component_instance })
			}
		})
		app.config.globalProperties.$t = window.$t
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
