<script setup lang="ts">
import { ref, reactive } from 'vue'
import {
	domainApi,
	INDEPENDENT_RESOLVE_TYPE_CNAME,
	INDEPENDENT_RESOLVE_TYPE_CUSTOM,
	INDEPENDENT_SSL_CERT_TYPE_53AI,
	INDEPENDENT_SSL_CERT_TYPE_CUSTOM
} from '@/api/modules/domain'
import { generateInputRules } from '@/utils/form-rule'
import { useEnterpriseStore } from '@/stores/modules/enterprise'

const enterprise_store = useEnterpriseStore()

const emits = defineEmits<{
	(e: 'success'): void
}>()

const form_ref = ref()
const visible = ref(false)
const form = reactive({
	domain: '',
	resolve_type: INDEPENDENT_RESOLVE_TYPE_CNAME,
	enable_https: false,
	force_https: false,
	ssl_cert_type: INDEPENDENT_SSL_CERT_TYPE_53AI,
	ssl_certificate: '',
	ssl_private_key: '',
	subdir: 'chat',
	use_subdir: false,
})
const origin_data = ref({})
const submitting = ref(false)

const domainValidator = ({ rule, value, callback } = {}) => {
	value = (value || '').trim()
	// if (!/^[a-z0-9-]{5,}$/.test(value)) return callback(new Error(window.$t('module.domain_exclusive_validator_1')))
	callback()
}

const open = ({ data = {} } = {}) => {
	const config = data.config || {}
	form.domain = (data.domain || '').trim().replace(/^https?:\/\//, '')
	form.resolve_type = +config.resolve_type || INDEPENDENT_RESOLVE_TYPE_CNAME
	form.enable_https = Boolean(+config.enable_https)
	form.force_https = Boolean(+config.force_https)
	form.ssl_cert_type = +config.ssl_cert_type || INDEPENDENT_SSL_CERT_TYPE_53AI
	form.ssl_certificate = config.ssl_certificate || ''
	form.ssl_private_key = config.ssl_private_key || ''
	form.subdir = config.subdir || 'chat'
	form.use_subdir = Boolean(+config.use_subdir)
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
	await domainApi.saas_independent_save(origin_data.value.id, {
		domain: form.domain,
		config: {
			resolve_type: form.resolve_type,
			enable_https: form.enable_https,
			force_https: form.force_https,
			ssl_cert_type: form.ssl_cert_type,
			ssl_certificate: form.ssl_certificate,
			ssl_private_key: form.ssl_private_key,
			subdir: form.subdir,
			use_subdir: form.use_subdir,
		}
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
	<ElDialog :title="$t('module.domain_independent')" :close-on-click-modal="false" width="700px" destroy-on-close
		append-to-body align-center v-model="visible" @close="close">
		<ElForm ref="form_ref" :model="form" label-position="top" @submit.prevent="() => {}">
			<ElFormItem prop="domain" :rules="[{
	validator: (rule, value, callback) => domainValidator({ rule, value, callback }),
				trigger: 'blur'
			}]">
				<div class="flex items-center w-full">
					<ElInput class="flex-1" :class="[form.resolve_type === INDEPENDENT_RESOLVE_TYPE_CUSTOM && form.use_subdir ? 'has-subdir' : '']" v-model="form.domain" size="large" :maxlength="20" show-word-limit :placeholder="$t('module.domain_independent')">
						<template #prepend>
							https://
						</template>
					</ElInput>
					<ElFormItem
						v-if="form.resolve_type === INDEPENDENT_RESOLVE_TYPE_CUSTOM && form.use_subdir"
						prop="subdir"
						:rules="generateInputRules({ message: 'form_input_placeholder' })"
					>
						<ElInput
							class="flex-none w-[250px] h-[42px] subdir-input"
							v-model="form.subdir"
							size="large"
							:maxlength="10"
							show-word-limit
							:placeholder="$t('form_input_placeholder')"
						>
							<template #prepend>
								/
							</template>
						</ElInput>
					</ElFormItem>
				</div>
			</ElFormItem>
			<ElFormItem v-if="form.resolve_type === INDEPENDENT_RESOLVE_TYPE_CUSTOM">
				<div class="flex items-center text-sm text-[#4F5052]">
					<span>
						{{ $t('module.use_subdirectories') }}
					</span>
					<ElTooltip :content="$t('module.use_subdirectories_tip')">
						<svg-icon class="text-[#A4AABA] ml-1" name="help" width="14" />
					</ElTooltip>
					<ElSwitch class="ml-2" v-model="form.use_subdir" size="small" />
				</div>
			</ElFormItem>
			<ElFormItem>
				<ElRadioGroup class="w-full" v-model="form.resolve_type">
					<ElRadio class="flex-1 border py-6 px-4 rounded overflow-hidden"
						:class="[form.resolve_type === val ? 'border-[#3664EF]' : '']"
						v-for="val in [INDEPENDENT_RESOLVE_TYPE_CNAME, INDEPENDENT_RESOLVE_TYPE_CUSTOM]" :key="val" :value="val">
						{{ $t(`module.domain_independent_${val === INDEPENDENT_RESOLVE_TYPE_CNAME ? 'cname' : 'self'}`) }}
					</ElRadio>
				</ElRadioGroup>
			</ElFormItem>
			<template v-if="form.resolve_type === INDEPENDENT_RESOLVE_TYPE_CNAME">
				<ul class="w-full flex flex-col gap-3 bg-[#F6F9FC] p-5 mb-6 box-border text-sm text-[#4F5052]">
					<li>{{ $t('module.domain_independent_cname_desc') }}</li>
					<li>{{ $t('module.domain_independent_cname_desc_1') }}</li>
					<li>{{ $t('module.domain_independent_cname_desc_2') }}</li>
					<li>{{ $t('module.domain_independent_cname_desc_3') }}</li>
				</ul>
				<ElFormItem>
					<div class="flex items-center gap-2 text-sm text-[#4F5052]">
						<span>{{ $t('module.domain_independent_https') }}</span>
						<ElSwitch v-model="form.enable_https" size="small" />
						<template v-if="form.enable_https">
							<span class="ml-12">{{ $t('module.domain_independent_https_always') }}</span>
							<ElSwitch v-model="form.force_https" size="small" />
						</template>
					</div>
				</ElFormItem>
				<ElFormItem v-if="form.enable_https" :label="$t('module.domain_independent_ssl')">
					<ElRadioGroup v-model="form.ssl_cert_type">
						<ElRadio :value="INDEPENDENT_SSL_CERT_TYPE_53AI">{{ $t('module.domain_independent_ssl_option_1') }}
						</ElRadio>
						<ElRadio :value="INDEPENDENT_SSL_CERT_TYPE_CUSTOM">{{ $t('module.domain_independent_ssl_option_2') }}
						</ElRadio>
					</ElRadioGroup>
				</ElFormItem>
				<template v-if="form.enable_https && form.ssl_cert_type === INDEPENDENT_SSL_CERT_TYPE_CUSTOM">
					<ElFormItem class="is-required" :label="$t('module.domain_independent_ssl_certificate')"
						prop="ssl_certificate"
						:rules="generateInputRules({ message: 'module.domain_independent_ssl_certificate_placeholder' })">
						<ElInput type="textarea" resize="none" :rows="5"
							:placeholder="$t('module.domain_independent_ssl_certificate_placeholder')"
							v-model="form.ssl_certificate" />
					</ElFormItem>
					<ElFormItem class="is-required" :label="$t('module.domain_independent_ssl_private_key')"
						prop="ssl_private_key"
						:rules="generateInputRules({ message: 'module.domain_independent_ssl_private_key_placeholder' })">
						<ElInput type="textarea" resize="none" :rows="5"
							:placeholder="$t('module.domain_independent_ssl_private_key_placeholder')"
							v-model="form.ssl_private_key" />
					</ElFormItem>
				</template>
			</template>
			<template v-else>
				<ul class="w-full flex flex-col gap-3 bg-[#F6F9FC] p-5 mb-6 box-border text-sm text-[#4F5052]">
					<li>{{ $t('module.domain_independent_self_desc_1') }}</li>
					<li>{{ $t('module.domain_independent_self_desc_2') }}</li>
					<ElDivider class="!my-2" />
					<li>{{ $t('module.domain_independent_self_desc_3', { site_id: enterprise_store.info.eid }) }}</li>
				</ul>
			</template>
		</ElForm>
		<template #footer>
			<div class="py-4 flex items-center justify-center">
				<ElButton class="w-[96px] h-[36px]" type="primary" :loading="submitting" @click="handleConfirm">{{
					$t('action_save') }}</ElButton>
				<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">
					{{ $t('action_cancel') }}
				</ElButton>
			</div>
		</template>
	</ElDialog>
</template>

<style scoped lang="scss">
::v-deep(.has-subdir .el-input__wrapper) {
	border-top-right-radius: 0 !important;
	border-bottom-right-radius: 0 !important;
	box-shadow: none !important;
	border-style: solid;
	border-color: #DCDFE6;
	border-top-width: 1px;
	border-bottom-width: 1px;
	border-left-width: 1px;
	box-sizing: border-box;
}
::v-deep(.subdir-input .el-input-group__prepend) {
	border-radius: 0 !important;
	padding: 0 8px !important;
}
</style>
