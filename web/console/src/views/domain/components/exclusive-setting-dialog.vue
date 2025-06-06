<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useEnv } from '@/hooks/useEnv'
import { domainApi } from '@/api/modules/domain'

const emits = defineEmits<{
	(e: 'success'): void
}>()

const { isDevEnv } = useEnv()
const form_ref = ref()
const visible = ref(false)
const form = reactive({
	domain: '',
})
const origin_data = ref({})
const submitting = ref(false)

const domainValidator = ({ rule, value, callback } = {}) => {
	value = (value || '').trim()
	if (!/^[a-z0-9-]{5,}$/.test(value)) return callback(new Error(window.$t('module.domain_exclusive_validator_1')))
	callback()
}

const open = ({ data = {} } = {}) => {
	form.domain = data.domain_name || ''
	origin_data.value = data
	visible.value = true
}
const close = () => {
	visible.value = false
	reset()
}
const reset = () => {
	form.domain = ''
}
const handleConfirm = async () => {
	const valid = await form_ref.value.validate()
	if (!valid) return
	submitting.value = true
	await domainApi.saas_exclusive_save(origin_data.value.id, {
		domain: `${form.domain}${isDevEnv.value ? '.hub' : ''}.53ai.com`,
	}).finally(() => {
		submitting.value = false
	})
	ElMessage.success(window.$t('action_save_success'))
	emits('success')
	close()
}

defineExpose({
	open,
	close,
	reset
})
</script>

<template>
	<ElDialog :title="$t('module.domain_exclusive')" :close-on-click-modal="false" width="700px" destroy-on-close
		append-to-body v-model="visible" @close="close">
		<ElForm ref="form_ref" :model="form" label-position="top" @submit.prevent="() => {}">
			<ElFormItem prop="domain" :rules="[{
	validator: (rule, value, callback) => domainValidator({ rule, value, callback }),
				trigger: 'blur'
			}]">
				<ElInput v-model="form.domain" size="large" show-word-limit maxlength="20" :placeholder="$t('module.domain_exclusive')">
					<template #prepend>
						http://
					</template>
					<template #append>
						{{ isDevEnv ? '.hub' : '' }}.53ai.com
					</template>
				</ElInput>
			</ElFormItem>
		</ElForm>
		<template #footer>
			<div class="py-4 flex items-center justify-center">
				<ElButton class="w-[96px] h-[36px]" type="primary" @click="handleConfirm">{{ $t('action_save') }}</ElButton>
				<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">{{ $t('action_cancel')
					}}</ElButton>
			</div>
		</template>
	</ElDialog>
</template>

<style scoped lang="scss">
</style>
