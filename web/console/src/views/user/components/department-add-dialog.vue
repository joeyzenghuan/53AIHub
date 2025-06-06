<script setup lang="ts">
import { reactive, ref } from 'vue'
import { generateInputRules } from '@/utils/form-rule'
import { departmentApi } from '@/api/modules/department'

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
const parentDid = ref(0)
const parentChildren = ref([])

let successCallback = null
const open = ({
	data = {},
	parentDid: _parentDid = 0,
	parentChildren: _parentChildren = [],
	success = null
} = {}) => {
	reset()
	successCallback = success
	editable.value = !!data.did
	formData.name = data.name || ''
	originData.value = data
	parentDid.value = _parentDid
	parentChildren.value = _parentChildren
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
		did: originData.value.did,
		name: formData.name,
		pdid: +parentDid.value || +originData.value.pdid || 0,
		sort: originData.value.sort || (DEFAULT_SORT - parentChildren.value.length),
	}
	submitting.value = true
	await departmentApi.save(data).finally(() => {
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
	<ElDialog v-model="visible" :title="$t(editable ? 'internal_user.department.edit' : 'internal_user.department.create')" :close-on-click-modal="false"
		width="600px" destroy-on-close append-to-body @close="close">
		<ElForm ref="formRef" :model="formData" label-position="top">
			<ElFormItem :label="$t('internal_user.department.name')" prop="name"
				:rules="generateInputRules({ message: 'internal_user.department.name_placeholder' })">
				<ElInput v-model="formData.name" size="large" maxlength="20" show-word-limit
					:placeholder="$t('internal_user.department.name_placeholder')" />
			</ElFormItem>
		</ElForm>
		<template #footer>
			<div class="py-4 flex items-center justify-center">
				<ElButton class="w-[96px] h-[36px]" type="primary" :loading="submitting" @click="handleSave">
					{{ $t('action_save') }}
				</ElButton>
				<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">
					{{ $t('action_cancel') }}
				</ElButton>
			</div>
		</template>
	</ElDialog>
</template>

<style scoped lang="scss">
</style>
