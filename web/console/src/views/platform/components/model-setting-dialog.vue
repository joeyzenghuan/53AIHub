<script setup lang="ts">
import { ref, reactive } from 'vue'
import { deepCopy } from '@/utils'
import { useChannelStore } from '@/stores'
import { CHANNEL_TYPE_OPTIONS, CHANNEL_TYPE_DEEP_SEEK, CHANNEL_TYPE_OPEN_AI } from '@/api/modules/channel'
import { generateInputRules } from '@/utils/form-rule'

const emits = defineEmits<{
	(e: 'success', result: { action: 'add' | 'edit' | 'model_edit', data: any }): void
}>()

const channel_store = useChannelStore()
const form_ref = ref()
const model_form_ref = ref()
const visible = ref(false)
const add_visible = ref(false)
const loading = ref(false)
const submitting = ref(false)
const form = reactive({
	type: '',
	api_key: '',
	organization_id: '',
	base_url: '',
	models: []
})
const origin_data = ref({})
const channel_options = ref(deepCopy(CHANNEL_TYPE_OPTIONS))
const model_options = ref([])
const model_visible = ref(false)
const model_form = reactive({
	id: '',
	name: ''
})

const open = async ({ data = {}, action = '' } = {}) => {
	if (action === 'model_edit') {
		model_form.id = data.id || data.value || ''
		model_form.name = data.name || data.label || ''
		model_visible.value = true
		origin_data.value = data
		return
	}
	if (!data.channel_id && !data.value) {
		loading.value = true
		add_visible.value = true
		const channel_list = await channel_store.loadListData({ reset: true }).finally(() => {
			loading.value = false
		})
		channel_options.value.forEach(item => {
			item.is_add = channel_list.some(opt => opt.name === item.value)
		})
		return
	}
	form.type = data.type || data.value || ''
	form.api_key = data.api_key || ''
	form.base_url = data.base_url || ''
	form.organization_id = data.organization_id || ''
	form.models = (typeof data.models === 'string' && data.models.split(',')) || data.models || []
	origin_data.value = data
	visible.value = true
	loading.value = true
	const model_list = await channel_store.loadModelList({ owner: form.type }).finally(() => {
		loading.value = false
	})
	const { config: { model_alias_map = {} } = {} } = data
	model_options.value = model_list.map(item => {
		item.value = item.id || ''
		item.label = model_alias_map[item.value] || item.label || item.id || ''
		item.checked = form.models.includes(item.value) || false
		if (action === 'add') item.checked = true
		item.icon = item.icon  || ''
		return item
	})
	if (CHANNEL_TYPE_DEEP_SEEK === form.type) {
		if (!form.base_url) form.base_url = 'https://api.deepseek.com'
	}
}
const close = ({ action = '' } = {}) => {
	if (action === 'model_edit') model_visible.value = false
	if (action === 'add') add_visible.value = false
	visible.value = false
	reset({ action })
}
const reset = ({ action = '' } = {}) => {
	if (action === 'model_edit') {
		model_form.id = ''
		model_form.name = ''
		return
	}
	form.type = ''
	form.api_key = ''
	form.base_url = ''
	form.organization_id = ''
	form.base_url = ''
	form.models = []
}
const handleAdd = ({ data = {} } = {}) => {
	open({ data, action: 'add' })
}
const onSave = ({ action = '' } = {}) => {
	if (action === 'model_edit') {
		model_form_ref.value.validate(async (valid) => {
			if (!valid) return
			let { id = '', name = '' } = model_form
			name = name.trim()
			const config = origin_data.value.config || {}
			config.model_alias_map = {
				...(config.model_alias_map || {}),
				[id]: name,
			}
			if (!config.model_alias_map[id]) delete config.model_alias_map[id]
			if (!Object.keys(config.model_alias_map).length) delete config.model_alias_map
			const data = {
				channel_id: origin_data.value.channel_id,
				key: origin_data.value.api_key,
				base_url: origin_data.value.base_url,
				config,
				models: origin_data.value.models,
				name: origin_data.value.type,
			}
			submitting.value = true
			await channel_store.save({ data }).finally(() => {
				submitting.value = false
			})
			emits('success', { action, data: { id, name: name || id } })
			ElMessage.success(window.$t('action_save_success'))
			close({ action })
		})
		return
	}
	form_ref.value.validate(async (valid) => {
		if (!valid) return
		const { type = '', api_key = '', base_url = '' } = form
		const channel_option = channel_options.value.find(item => item.value === type) || {}
		const data = {
			channel_id: origin_data.value.channel_id,
			key: api_key,
			base_url,
			config: origin_data.value.config || {},
			models: model_options.value.filter(item => item.checked).map(item => item.value).join(','),
			name: type,
		}
		action = data.channel_id ? 'edit' : 'add'
		submitting.value = true
		await channel_store.save({ data }).finally(() => {
			submitting.value = false
		})
		emits('success', { action, data })
		ElMessage.success(window.$t('action_save_success'))
		close({ action })
	})
}

defineExpose({
	open,
	close,
	reset
})
</script>

<template>
	<ElDialog :title="$t('module.platform_model_add')" :close-on-click-modal="false" width="700px" destroy-on-close
		append-to-body v-model="add_visible" @close="close({ action: 'add' })">
		<ul class="flex flex-col gap-3 mb-8 pb-1 overflow-auto max-h-[60vh] pr-1" v-loading="loading">
			<li v-for="opt in channel_options" :key="opt.value"
				class="flex items-center gap-4 py-5 px-6 border rounded box-border"
				:class="[!opt.add_visible ? 'opacity-50' : '']">
				<img class="flex-none w-[40px] h-[40px] object-contain" :src="$getRealPath({ url: `/images/platform/${opt.icon}.png` })" />
				<div class="flex-1 text-[#1B2B51] font-semibold">{{ $t(opt.label) }}</div>
				<ElButton v-if="opt.add_visible" class="flex-none !border-none !px-5 text-[#3664EF] bg-[#F6F7F8]"
					:class="opt.is_add ? '!text-[#9A9A9A] !bg-[#F6F7F8]' : ''" type="primary" plain size="large"
					:disabled="opt.is_add" @click="handleAdd({ data: opt })">
					{{ $t(opt.is_add ? 'action_add_success' : 'action_add') }}
				</ElButton>
			</li>
		</ul>
	</ElDialog>
	<ElDialog :title="$t('action_setting') + $t(origin_data.label || '')" :close-on-click-modal="false" width="600px"
		destroy-on-close append-to-body v-model="visible" @close="close">
		<ElForm ref="form_ref" :model="form" label-position="top">
			<ElFormItem :label="$t('module.platform_tool_api_key')" prop="api_key" class="is-required"
				:rules="generateInputRules({ message: 'form_input_placeholder' })">
				<ElInput v-model="form.api_key" size="large" :placeholder="$t('module.platform_tool_api_key_placeholder')" />
			</ElFormItem>
			<template v-if="[CHANNEL_TYPE_DEEP_SEEK].includes(form.type)">
				<ElFormItem :label="$t('module.platform_model_api_endpoint')" prop="base_url" class="is-required" :rules="generateInputRules({ message: 'form_input_placeholder', validator: ['text', 'link'] })">
					<ElInput v-model="form.base_url" size="large"
						:placeholder="$t('module.platform_model_api_endpoint_placeholder')" />
				</ElFormItem>
			</template>
			<template v-else-if="[CHANNEL_TYPE_OPEN_AI].includes(form.type)">
				<!--<ElFormItem :label="$t('module.platform_model_organization_id')" prop="organization_id" class="is-required" :rules="generateInputRules({ message: 'form_input_placeholder' })">
					<ElInput v-model="form.organization_id" size="large"
						:placeholder="$t('module.platform_model_organization_id_placeholder')" />
				</ElFormItem> -->
				<ElFormItem :label="$t('module.platform_model_base_url')" prop="base_url" class="is-required" :rules="generateInputRules({ message: 'form_input_placeholder' })">
					<ElInput v-model="form.base_url" size="large"
						:placeholder="$t('module.platform_model_base_url_placeholder')" />
				</ElFormItem>
			</template>
			<ElFormItem class="is-required" :label="$t('module.platform_model_models')" prop="models">
				<ul class="w-full max-h-[42vh] min-h-[200px] pr-1 flex flex-col gap-2 box-border overflow-auto"
					v-loading="loading">
					<div v-if="!model_options.length" class="text-[#9A9A9A] w-full text-center py-4">{{
						$t('module.platform_model_models_empty') }}</div>
					<li class="w-full flex items-center gap-1.5" v-for="opt in model_options" :key="opt.value">
						<img v-if="opt.icon" class="flex-none w-[20px] h-[20px] object-contain"
							:src="$getRealPath({ url: `/images/platform/${opt.icon}.png` })" />
						<label class="text-sm text[#1D1E1F]">{{ opt.label }}</label>
						<div class="flex-1"></div>
						<ElSwitch v-model="opt.checked" size="small" />
					</li>
				</ul>
			</ElFormItem>
		</ElForm>
		<template #footer>
			<div class="pb-4 flex items-center justify-center">
				<ElButton class="w-[96px] h-[36px]" type="primary" :loading="submitting || loading" @click="onSave">{{
					$t('action_save') }}
				</ElButton>
				<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">{{ $t('action_cancel')
					}}</ElButton>
			</div>
		</template>
	</ElDialog>
	<ElDialog :title="$t('module.platform_model_models_edit')" :close-on-click-modal="false" width="600px"
		destroy-on-close append-to-body v-model="model_visible" @close="close({ action: 'model_edit' })">
		<ElForm ref="model_form_ref" :model="model_form" label-position="top">
			<ElFormItem :label="$t('module.platform_model_models_id')" prop="id" class="is-required" :rules="generateInputRules({ message: 'form_input_placeholder' })">
				<ElInput v-model="model_form.id" size="large" disabled :placeholder="$t('form_input_placeholder')" />
			</ElFormItem>
			<ElFormItem :label="$t('module.platform_model_models_name')" prop="name">
				<ElInput v-model="model_form.name" size="large" :placeholder="$t('form_input_placeholder')" />
			</ElFormItem>
		</ElForm>
		<template #footer>
			<div class="pb-4 flex items-center justify-center">
				<ElButton class="w-[96px] h-[36px]" type="primary" :loading="submitting || loading"
					@click="onSave({ action: 'model_edit' })">{{ $t('action_save') }}
				</ElButton>
				<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain
					@click.stop="close({ action: 'model_edit' })">{{ $t('action_cancel')
					}}</ElButton>
			</div>
		</template>
	</ElDialog>
</template>

<style scoped lang="scss">
</style>
