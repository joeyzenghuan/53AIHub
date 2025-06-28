<script setup lang="ts">
import { ref, onMounted } from 'vue'

const iframeRef = ref()

const ready = ref(false)
const getReady = () => new Promise((resolve) => {
	if (ready.value) return resolve()
	window.addEventListener('message', (e) => {
		const data = e.data || {}
		const action = data.action || ''
		if (action === 'ueditor-ready') {
			ready.value = true
			resolve()
		}
	})
})

onMounted(() => {
	window.addEventListener('message', (e) => {
		const data = e.data || {}
		const action = data.action || ''
		if (action === 'ueditor-ready') ready.value = true
	})
})

defineExpose({
	setValue: async (value: string) => {
		await getReady()
		iframeRef.value.contentWindow.postMessage({ action: 'setValue', value }, '*')
	},
	getHtml: async () => {
		await getReady()
		return new Promise((resolve) => {
			iframeRef.value.contentWindow.postMessage({ action: 'getHtml' }, '*')
			window.addEventListener('message', (e) => {
				const data = e.data || {}
				const action = data.action || ''
				if (action === 'getHtml') resolve(data.value)
			})
		})
	}
})
</script>

<template>
	<iframe ref="iframeRef" class="w-full h-full" :src="$getRealPath({ url: '/UEditor/index.html' })" />
</template>

<style scoped lang="scss"></style>