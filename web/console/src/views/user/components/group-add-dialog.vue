<script setup lang="ts">
import { reactive, ref } from 'vue'
import { generateInputRules } from '@/utils/form-rule'
import { groupApi, GROUP_TYPE_INTERNAL_USER } from '@/api/modules/group'

const emits = defineEmits<{
	(e: 'success'): void
}>()

const DEFAULT_SORT = 999999

const formRef = ref()
const visible = ref(false)
const editable = ref(false)
const formData = reactive({
  name: '',
})
const originData = ref({})
const submitting = ref(false)

let successCallback = null
const open = ({
	data = {},
	success = null
} = {}) => {
	reset()
	successCallback = success
	editable.value = !!data.group_id
	formData.name = data.group_name || ''
	originData.value = data
	visible.value = true
}
const close = () => {
  visible.value = false
}
const reset = () => {
	formData.name = ''
}
const handleSave = async () => {
	const valid = await formRef.value.validate()
	if (!valid) return
	let data = {
		group_id: originData.value.group_id,
		group_type: GROUP_TYPE_INTERNAL_USER,
		group_name: formData.name,
		sort: +originData.value.sort || 0,
	}
	submitting.value = true
	await groupApi.single_save(data).finally(() => {
		submitting.value = false
	})
	if (typeof successCallback === 'function') successCallback({ data })
	emits('success')
	ElMessage.success(window.$t('action_save_success'))
	close()
}

defineExpose({
  open,
  close,
  reset,
})
</script>

<template>
	<ElDialog v-model="visible" :title="$t(editable ? 'action_edit' : 'action_create')" :close-on-click-modal="false"
		width="600px" destroy-on-close append-to-body @close="close">
		<ElForm ref="formRef" :model="formData" label-position="top">
			<ElFormItem class="is-required" :label="$t('name')" prop="name"
				:rules="generateInputRules({ message: 'form_input_placeholder' })">
				<ElInput v-model="formData.name" size="large" maxlength="20" show-word-limit
					:placeholder="$t('form_input_placeholder')" />
			</ElFormItem>
		</ElForm>
		<template #footer>
			<div class="py-4 flex items-center justify-center">
				<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">
					{{ $t('action_cancel') }}
				</ElButton>
				<ElButton class="w-[96px] h-[36px]" type="primary" :loading="submitting" @click="handleSave">
					{{ $t('action_confirm') }}
				</ElButton>
			</div>
		</template>
	</ElDialog>
</template>

<style scoped lang="scss">
</style>
