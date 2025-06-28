<script setup lang="ts">
import { ref, reactive, nextTick, computed } from 'vue'
import { navigationApi, NAVIGATION_TYPE, NAVIGATION_TYPE_LABEL_MAP, NAVIGATION_TARGET, NAVIGATION_TARGET_LABEL_MAP } from '@/api/modules/navigation'
import { generateInputRules } from '@/utils/form-rule'
import { useEnterpriseStore, useUserStore } from '@/stores'
import { useEnv } from '@/hooks/useEnv'
import { useRouter } from 'vue-router'

const enterpriseStore = useEnterpriseStore()
const router = useRouter()

const emits = defineEmits(['success'])

const { isOpLocalEnv } = useEnv()
const enterpriseInfo = computed(() => enterpriseStore.info)
const domainUrl = computed(() => `${isOpLocalEnv.value ? window.location.origin : enterpriseInfo.value.domain}/#`)

const formRef = ref()
const editable = ref(false)
const visible = ref(false)
const submitting = ref(false)
const formData = reactive({
	type: NAVIGATION_TYPE.EXTERNAL,
	name: '',
	jump_path: '',
	target: NAVIGATION_TARGET.SELF,
	seo_title: '',
	seo_keywords: '',
	seo_description: '',
})
const originData = ref({})
const navigationList = ref([])

const open = async ({ data = {}, navigationList: _navigationList = [] } = {}) => {
	reset()
	await nextTick()
	const config = data.config || {}
	formData.type = +data.type || NAVIGATION_TYPE.EXTERNAL
	formData.name = data.name || ''
	formData.jump_path = data.jump_path || ''
	formData.target = data.target || config.target || NAVIGATION_TARGET.SELF
	formData.seo_title = config.seo_title || ''
	formData.seo_keywords = config.seo_keywords || ''
	formData.seo_description = config.seo_description || ''
	editable.value = !!data.navigation_id
	originData.value = data
	navigationList.value = _navigationList
	visible.value = true
}
const close = () => {
	visible.value = false
}
const reset = () => {
	formData.type = NAVIGATION_TYPE.EXTERNAL
	formData.name = ''
	formData.jump_path = ''
	formData.target = NAVIGATION_TARGET.SELF
	formData.seo_title = ''
	formData.seo_keywords = ''
	formData.seo_description = ''
}
const handleTypeChange = () => {
	formData.jump_path = ''
	formRef.value.clearValidate('jump_path')
}
const handleSave = async () => {
	const valid = await formRef.value.validate()
	if (!valid) return
	submitting.value = true
	const data = {
		navigation_id: originData.value.navigation_id,
		type: formData.type,
		name: formData.name,
		jump_path: formData.jump_path,
		sort: originData.value.sort || (9999 - navigationList.value.length),
		config: {
			target: formData.target,
			seo_title: formData.seo_title,
			seo_keywords: formData.seo_keywords.replace(/，/g, ','),
			seo_description: formData.seo_description,
		}
	}
	const result = await navigationApi.save(data).finally(() => {
		submitting.value = false
	})
	ElMessage.success(window.$t('action_save_success'))
	emits('success', { data: formData })
	close()
	if (!editable.value && formData.type == NAVIGATION_TYPE.CUSTOM) {
		router.push({
			name: 'NavigationWebSetting',
			params: {
				navigation_id: result.navigation_id || originData.value.navigation_id
			}
		})
	}
}

defineExpose({
	open,
	close,
	reset
})
</script>

<template>
	<ElDrawer size="700px" :title="$t(editable ? 'action_edit' : 'action_create')" :close-on-click-modal="false"
		append-to-body destroy-on-close v-model="visible" @close="close">
		<ElForm ref="formRef" class="px-4" :model="formData" label-position="top">
			<h1 class="font-semibold text-[#1D1E1F] mb-6">{{ $t('basic_info') }}</h1>
			<ElFormItem :label="$t('type')">
				<ElRadioGroup v-model="formData.type" size="large" @change="handleTypeChange">
					<ElRadio v-for="value in [NAVIGATION_TYPE.SYSTEM, NAVIGATION_TYPE.EXTERNAL, NAVIGATION_TYPE.CUSTOM]"
						:key="value" :value="value"
						:disabled="formData.type === NAVIGATION_TYPE.SYSTEM || value === NAVIGATION_TYPE.SYSTEM || editable">
						{{ $t(NAVIGATION_TYPE_LABEL_MAP.get(value)) }}
					</ElRadio>
				</ElRadioGroup>
			</ElFormItem>
			<ElFormItem :label="$t('name')" prop="name" :rules="[{ required: true, message: $t('form_input_placeholder') }]">
				<ElInput v-model="formData.name" size="large" :maxlength="20" show-word-limit
					:placeholder="$t('form_input_placeholder')" />
			</ElFormItem>
			<ElFormItem class="is-required" :label="$t('jump_path')" prop="jump_path"
				:rules="[
					...generateInputRules({ message: 'form_input_placeholder', validator: ['text', formData.type === NAVIGATION_TYPE.EXTERNAL ? 'url' : 'path'] }),
					{
						validator: (rule, value, callback) => {
							if (formData.type == NAVIGATION_TYPE.CUSTOM && navigationList.some(item => item.jump_path === value && item.navigation_id !== originData.navigation_id)) {
								return callback(new Error($t('form_path_same_tip')))
							}
							callback()
						},
						trigger: 'blur'
					}
				]">
				<ElInput v-if="formData.type === NAVIGATION_TYPE.SYSTEM" :modelValue="domainUrl + formData.jump_path"
					size="large" :placeholder="$t('form_input_placeholder')" disabled />
				<ElInput v-else-if="formData.type === NAVIGATION_TYPE.EXTERNAL" v-model="formData.jump_path" size="large"
					:placeholder="$t('form_input_placeholder')" />
				<ElInput v-else v-model="formData.jump_path" size="large" :placeholder="$t('form_input_placeholder')">
					<template #prepend>{{ domainUrl }}</template>
				</ElInput>
			</ElFormItem>
			<ElFormItem :label="$t('open_method')" prop="target">
				<ElRadioGroup v-model="formData.target" size="large">
					<ElRadio v-for="value in [NAVIGATION_TARGET.SELF, NAVIGATION_TARGET.BLANK]" :key="value" :value="value">
						{{ $t(NAVIGATION_TARGET_LABEL_MAP.get(value)) }}
					</ElRadio>
				</ElRadioGroup>
			</ElFormItem>
			<ElDivider />
			<h1 class="font-semibold text-[#1D1E1F] mb-6">{{ $t('module.nav_seo_setting') }}</h1>
			<ElFormItem :label="$t('module.nav_seo_setting_title')">
				<ElInput v-model="formData.seo_title" maxlength="60" show-word-limit size="large"
					:placeholder="$t('form_input_placeholder')" />
			</ElFormItem>
			<ElFormItem :label="$t('module.nav_seo_setting_keywords')">
				<ElInput v-model="formData.seo_keywords" size="large" :placeholder="$t('form_input_placeholder')" />
				<div class="mt-2 text-xs text-[#999]">{{ $t('module.nav_seo_setting_keywords_tip') }}</div>
			</ElFormItem>
			<ElFormItem :label="$t('module.nav_seo_setting_description')">
				<ElInput v-model="formData.seo_description" type="textarea" :rows="5" maxlength="100" show-word-limit
					size="large" resize="none" :placeholder="$t('form_input_placeholder')" />
			</ElFormItem>
		</ElForm>
		<template #footer>
			<div class="flex border-t pt-5 justify-end w-full">
				<ElButton size="large" @click="close">
					{{ $t('action_cancel') }}
				</ElButton>
				<ElButton type="primary" size="large" :loading="submitting" @click="handleSave">
					{{ $t('action_save') }}
				</ElButton>
			</div>
		</template>
	</ElDrawer>
</template>

<style scoped lang="scss"></style>
