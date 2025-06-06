<script setup lang="ts">
import { ref, reactive } from 'vue'

const form_ref = ref()
const visible = ref(false)
const form = reactive({
	title: '',
	keywords: '',
	description: '',
})
const origin_data = ref({})

const open = ({ data = {} } = {}) => {
	const seo_setting_info = data.seo_setting_info || {}
	form.title = seo_setting_info.title || '快速成一个产品研发创意的agent'
	form.keywords = seo_setting_info.keywords || '53AI，产品创意生成，智能体'
	form.description = seo_setting_info.description || '没有产品研发创意？使用最新的AI agent 助你快速完成产品创意工作'
	origin_data.value = data
	visible.value = true
}
const close = () => {
	visible.value = false
	reset()
}
const reset = () => {
	form.title = ''
	form.keywords = ''
	form.description = ''
}
const handleConfirm = () => {
	form_ref.value.validate((valid) => {
		if (!valid) return
		if (!origin_data.value.seo_setting_info) origin_data.value.seo_setting_info = {}
		origin_data.value.seo_setting_info.title = form.title
		origin_data.value.seo_setting_info.keywords = form.keywords
		origin_data.value.seo_setting_info.description = form.description
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
	<ElDialog :title="$t('module.nav_seo_setting')" :close-on-click-modal="false" width="720px" append-to-body v-model="visible" @close="close">
		<ElForm ref="form_ref" :model="form" label-position="left" label-width="128px">
			<ElFormItem :label="$t('module.nav_seo_setting_title')">
				<ElInput v-model="form.title" maxlength="60" show-word-limit size="large" :placeholder="$t('form_input_placeholder')" />
			</ElFormItem>
			<ElFormItem :label="$t('module.nav_seo_setting_keywords')">
				<ElInput v-model="form.keywords" size="large" :placeholder="$t('form_input_placeholder')" />
				<div class="mt-2 text-xs text-[#999]">{{ $t('module.nav_seo_setting_keywords_tip') }}</div>
			</ElFormItem>
			<ElFormItem :label="$t('module.nav_seo_setting_description')">
				<ElInput v-model="form.description" type="textarea" :rows="5" size="large" resize="none" :placeholder="$t('form_input_placeholder')" />
			</ElFormItem>
		</ElForm>
		<template #footer>
			<div class="py-4 flex items-center justify-center">
				<ElButton class="w-[96px] h-[36px]" type="primary" @click="handleConfirm">{{ $t('action_confirm') }}</ElButton>
				<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">{{ $t('action_cancel') }}</ElButton>
			</div>
		</template>
	</ElDialog>
</template>

<style scoped lang="scss"></style>
