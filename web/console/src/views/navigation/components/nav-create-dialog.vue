<script setup lang="ts">
import { ref, reactive } from 'vue'
import { NAV_TYPE_HOMEPAGE, NAV_TYPE_SINGLE, NAV_TYPE_AGENT, NAV_TYPE_LABEL_MAP, NAV_TARGET_SELF, NAV_TARGET_BLANK, NAV_TARGET_LABEL_MAP } from '../store'

const emits = defineEmits(['confirm'])

const editable = ref(false)
const form_ref = ref()
const visible = ref(false)
const form = reactive({
	type: NAV_TYPE_HOMEPAGE,
	nav_id: '',
	name: '',
	url: '',
	target: NAV_TARGET_BLANK,
	agent_class_id: '',
	agent_id: '',
})
const origin_data = ref({})
const nav_type_options = ref([NAV_TYPE_HOMEPAGE, NAV_TYPE_SINGLE, NAV_TYPE_AGENT].map(value => ({
	value,
	label: NAV_TYPE_LABEL_MAP.get(value),
})))
const nav_options = ref([
	{
		value: '首页',
		label: '首页',
		url: 'https://www.doubao.com/chat/',
	},
	{
		value: 'AI百宝箱',
		label: 'AI百宝箱',
		url: 'https://www.doubao.com/chat/',
	},
	{
		value: '亚马逊商品标题',
		label: '亚马逊商品标题',
		url: 'https://www.doubao.com/chat/',
	},
	{
		value: 'AI知识库',
		label: 'AI知识库',
		url: 'https://www.doubao.com/chat/',
	},
])
const nav_target_options = ref([NAV_TARGET_SELF, NAV_TARGET_BLANK].map(value => ({
	value,
	label: NAV_TARGET_LABEL_MAP.get(value),
})))
const nav_agent_class_options = ref([
	{
		value: 'DeepSeek',
		label: 'DeepSeek',
	},
	{
		value: 'Claude',
		label: 'Claude',
	},
	{
		value: 'Gemini',
		label: 'Gemini',
	},
	{
		value: 'GPT-4',
		label: 'GPT-4',
	},
])
const nav_agent_options = ref([
	{
		value: 'DeepSeek',
		label: 'DeepSeek',
		url: 'https://www.doubao.com/chat/',
	},
	{
		value: 'Claude',
		label: 'Claude',
		url: 'https://www.doubao.com/chat/',
	},
	{
		value: 'Gemini',
		label: 'Gemini',
		url: 'https://www.doubao.com/chat/',
	},
	{
		value: 'GPT-4',
		label: 'GPT-4',
		url: 'https://www.doubao.com/chat/',
	},
])

const open = ({ data = {} } = {}) => {
	editable.value = !!data.id
	form.type = data.type || NAV_TYPE_HOMEPAGE
	form.nav_id = data.name || ''
	form.url = data.url || ''
	form.target = data.target || NAV_TARGET_BLANK
	if (form.type !== NAV_TYPE_AGENT) form.target = NAV_TARGET_BLANK
	origin_data.value = data
	visible.value = true
}
const close = () => {
	visible.value = false
	reset()
}
const reset = () => {
	form.type = NAV_TYPE_HOMEPAGE
	form.nav_id = ''
	form.url = ''
	form.target = NAV_TARGET_BLANK
	form.agent_class_id = ''
	form.agent_id = ''
}
const handleNavChange = () => {
	form.url = nav_options.value.find(item => item.value === form.nav_id)?.url || ''
	form.name = nav_options.value.find(item => item.value === form.nav_id)?.label || ''
}
const handleAgentChange = () => {
	form.url = nav_agent_options.value.find(item => item.value === form.agent_id)?.url || ''
	form.name = nav_agent_options.value.find(item => item.value === form.agent_id)?.label || ''
}
const handleConfirm = () => {
	form_ref.value.validate((valid) => {
		if (!valid) return
		ElMessage.success(window.$t('action_save_success'))
		emits('confirm', { data: form })
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
	<ElDialog :title="$t(editable ? 'action_edit' : 'action_create')" :close-on-click-modal="false" width="680px"
		append-to-body v-model="visible" @close="close">
		<ElForm ref="form_ref" :model="form" label-position="left" label-width="78px">
			<ElFormItem :label="$t('module.nav_type')">
				<ElRadioGroup v-model="form.type" size="large">
					<ElRadio v-for="item in nav_type_options" :key="item.value" :label="item.value">{{ item.label }}</ElRadio>
				</ElRadioGroup>
			</ElFormItem>
			<ElFormItem v-if="form.type !== NAV_TYPE_AGENT" :label="$t('module.nav_name')">
				<ElSelect v-model="form.nav_id" size="large" :placeholder="$t('module.nav_name_placeholder')" @change="handleNavChange">
					<ElOption v-for="item in nav_options" :key="item.value" :label="item.label" :value="item.value" />
				</ElSelect>
			</ElFormItem>
			<ElFormItem v-else :label="$t('action_select')">
				<div class="w-full flex items-center gap-2">
					<ElSelect class="flex-none !w-[160px]" v-model="form.agent_class_id" size="large" :placeholder="$t('module.nav_agent_class_placeholder')">
						<ElOption v-for="item in nav_agent_class_options" :key="item.value" :label="item.label" :value="item.value" />
					</ElSelect>
					<ElSelect class="flex-1" v-model="form.agent_id" size="large" :placeholder="$t('module.nav_agent_placeholder')" @change="handleAgentChange">
						<ElOption v-for="item in nav_agent_options" :key="item.value" :label="item.label" :value="item.value" />
					</ElSelect>
				</div>
			</ElFormItem>
			<ElFormItem :label="$t('module.nav_url')">
				<ElInput v-model="form.url" disabled size="large" :placeholder="$t('form_select_placeholder')" />
			</ElFormItem>
			<ElFormItem :label="$t('module.nav_target')">
				<ElSelect v-model="form.target" :disabled="form.type !== NAV_TYPE_AGENT" size="large" :placeholder="$t('module.nav_target_placeholder')">
					<ElOption v-for="item in nav_target_options" :key="item.value" :label="item.label" :value="item.value" />
				</ElSelect>
			</ElFormItem>
		</ElForm>
		<template #footer>
			<div class="py-4 flex items-center justify-center">
				<ElButton class="w-[96px] h-[36px]" type="primary" @click="handleConfirm">{{ $t('action_confirm') }}</ElButton>
				<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">
					{{ $t('action_cancel') }}
					</ElButton>
			</div>
		</template>
	</ElDialog>
</template>

<style scoped lang="scss"></style>
