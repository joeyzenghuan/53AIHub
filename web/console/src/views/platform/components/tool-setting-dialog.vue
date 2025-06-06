<script setup lang="ts">
import { ref, reactive } from 'vue'

const form_ref = ref()
const visible = ref(false)
const form = reactive({
	api_key: '',
})
const origin_data = ref({})

const textValidator = ({ rule, value, callback, message } = {}) => {
	value = (value || '').trim()
	if (!value) return callback(new Error(window.$t(message)))
	callback()
}

const open = ({ data = {} } = {}) => {
	form.api_key = data.api_key || ''
	origin_data.value = data
	visible.value = true
}
const close = () => {
	visible.value = false
	reset()
}
const reset = () => {
	form.api_key = ''
}
const handleConfirm = () => {
	form_ref.value.validate((valid) => {
		if (!valid) return
		ElMessage.success(window.$t('action_save_success'))
		close()
	})
}

defineExpose({
	open,
	close,
	reset
})
</script>

<template>
	<ElDialog :title="$t('action_setting') + $t(origin_data.label || '')" :close-on-click-modal="false" width="600px"
		destroy-on-close append-to-body v-model="visible" @close="close">
		<ElForm ref="form_ref" :model="form" label-position="top" @submit.prevent="() => {}">
			<ElFormItem :label="$t('module.platform_tool_api_key')" prop="api_key" :rules="[{ required: true, message: $t('module.platform_tool_api_key_placeholder') },{
	validator: (rule, value, callback) => textValidator({ rule, value, callback, message: 'module.platform_tool_api_key_placeholder' }),
				trigger: 'blur'
			}]">
				<ElInput v-model="form.api_key" size="large" :placeholder="$t('module.platform_tool_api_key_placeholder')" />
			</ElFormItem>
		</ElForm>
		<template #footer>
			<div class="py-4 flex items-center justify-center">
				<ElButton class="w-[96px] h-[36px]" type="primary" @click="handleConfirm">{{ $t('action_confirm') }}</ElButton>
				<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">{{ $t('action_cancel')
					}}</ElButton>
			</div>
		</template>
	</ElDialog>
</template>

<style scoped lang="scss">
</style>
