<script setup lang="ts">
import { Close } from '@element-plus/icons-vue'

import { ref, reactive, onMounted, onUnmounted, nextTick } from 'vue'
// import { useUserStore } from '@/stores'
// import { generateInputRules } from '@/utils/form-rule'
// import eventBus from '@/utils/event-bus'

const props = withDefaults(defineProps<{
	title: string
	content: string
	confirmButtonText: string
	showConfirmButton: boolean
	cancelButtonText: string
	showCancelButton: boolean
}>(), {
	title: '',
	content: '',
	confirmButtonText: window.$t('action_confirm'),
	showConfirmButton: true,
	cancelButtonText: window.$t('action_cancel'),
	showCancelButton: true,
})

const emit = defineEmits<{
	(e: 'confirm'): void
}>()

const visible = ref(false)

onMounted(() => {
})
onUnmounted(() => {
})

const open = async ({ data = {} } = {}) => {
	visible.value = true
}
const close = () => {
	visible.value = false
}
const onConfirm = () => {
	emit('confirm')
	close()
}

defineExpose({
	open,
	close,
})
</script>

<template>
	<ElDialog header-class="hidden" width="520px" :style="{
			'--el-dialog-border-radius': '16px',
    }" :close-on-click-modal="false" :show-close="false" destroy-on-close append-to-body center align-center
		v-model="visible">
		<header class="p-2 flex items-center justify-between">
			<h1 class="text-lg font-semibold text-[#1D1E1F]">{{ title }}</h1>
			<ElIcon class="font-bold" :size="20" color="#9A9A9A" @click="close">
				<Close />
			</ElIcon>
		</header>
		<section class="p-2 text-base text-[#535456]">
			{{ content }}
		</section>
		<template #footer>
			<div class="flex items-center justify-center my-2">
				<ElButton v-if="showCancelButton" size="large" @click="close">
					{{ cancelButtonText }}
				</ElButton>
				<ElButton v-if="showConfirmButton" class="!px-8" type="primary" size="large" @click="close">
					{{ confirmButtonText }}
				</ElButton>
			</div>
		</template>
	</ElDialog>
</template>

<style scoped lang="scss">
</style>
