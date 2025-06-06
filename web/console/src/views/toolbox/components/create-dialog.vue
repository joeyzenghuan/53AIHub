<script setup lang="ts">
import UploadImage from '@/components/Upload/image.vue'

import { ref, reactive, onMounted, inject, nextTick, computed } from 'vue'
import { deepCopy } from '@/utils'
import { generateInputRules } from '@/utils/form-rule'
import { aiLinkApi } from '@/api/modules/ai-link'

const props = withDefaults(defineProps<{
	groupType: GroupType
}>(), {
	groupType: 1,
})

const emits = defineEmits<{
	(e: 'success'): any
}>()

const groupOptions = inject('groupOptions', [])

const formRef = ref()

const visible = ref(false)
const editable = ref(false)
const submitting = ref(false)
const originInfo = ref({})
const formData = reactive({
	logo: '',
	name: '',
	url: '',
	description: '',
	group_id: '',
})

onMounted(() => { })

const showGroupOptions = computed(() =>  groupOptions.value.filter(item => +item.group_id > 0))

const open = async ({ data = {} } = {}) => {
	reset()
	await nextTick()
	editable.value = !!+data.ai_link_id
	formData.logo = data.logo || ''
	formData.name = data.name || ''
	formData.url = data.url || ''
	formData.description = data.description || ''
	formData.group_id = data.group_id || formData.group_id || ''
	originInfo.value = data
	visible.value = true
}
const close = async () => {
	visible.value = false
}
const reset = () => {
	formData.logo = ''
	formData.name = ''
	formData.url = ''
	formData.description = ''
	formData.group_id = (showGroupOptions.value[0] || {}).group_id || ''
	submitting.value = false
}
const onSave = async () => {
	if (submitting.value) return
	const valid = await formRef.value.validate()
	if (!valid) return Promise.reject()
	submitting.value = true
	await aiLinkApi.save({
		data: {
			...formData,
			ai_link_id: originInfo.value.ai_link_id,
		}
	}).catch(() => {
		submitting.value = false
	})
	emits('success')
	ElMessage.success(window.$t('action_save_success'))
	close()
}

defineExpose({
	open,
	close,
	reset
})
</script>

<template>
	<ElDialog v-model="visible" :title="$t(editable ? 'action_edit' : 'action_add')" width="740px" destroy-on-close
		:close-on-click-modal="false">
		<ElForm ref="formRef" label-width="108px" label-position="left" :model="formData">
			<ElFormItem :label="$t('icon')" prop="logo" :rules="generateInputRules({ message: 'form_upload_placeholder' })">
				<UploadImage v-model="formData.logo" class="w-12 h-12" />
			</ElFormItem>
			<ElFormItem :label="$t('website_name')" prop="name"
				:rules="generateInputRules({ message: 'form_input_placeholder' })">
				<ElInput v-model="formData.name" size="large" show-word-limit maxlength="20"
					:placeholder="$t('form_input_placeholder')" />
			</ElFormItem>
			<ElFormItem label="URL" prop="url" :rules="generateInputRules({ message: 'form_input_placeholder', validator: ['url'] })">
				<ElInput v-model="formData.url" size="large" placeholder="http://" />
			</ElFormItem>
			<ElFormItem :label="$t('description')" prop="description">
				<ElInput size="large" v-model="formData.description" type="textarea" resize="none" rows="5" maxlength="200" show-word-limit
					:placeholder="$t('form_input_placeholder')" />
			</ElFormItem>
			<ElFormItem :label="$t('group')" prop="group_id"
				:rules="generateInputRules({ message: 'form_select_placeholder' })">
				<ElSelect v-model="formData.group_id" size="large">
					<ElOption v-for="item in showGroupOptions" :key="item.group_id" :value="item.group_id" :label="$t(item.group_name)" />
				</ElSelect>
			</ElFormItem>
		</ElForm>
		<template #footer>
			<div class="py-4 flex items-center justify-center">
				<ElButton class="w-[96px] h-[36px]" type="primary" :loading="submitting" @click="onSave">
					{{ $t('action_save') }}
				</ElButton>
				<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">
					{{ $t('action_cancel') }}
				</ElButton>
			</div>
		</template>
	</ElDialog>
</template>

<style scoped></style>
