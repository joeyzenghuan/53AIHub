<script setup lang="ts">
import { CopyDocument } from '@element-plus/icons-vue'

import { computed, nextTick, reactive, ref } from 'vue'
import { useEnterpriseStore } from '@/stores'
import { copyToClip } from '@/utils/copy'
import { api_host } from '@/utils/config'
import { providerApi, PROVIDER_TYPE_COZE_CN, PROVIDER_TYPE_APP_BUILDER } from '@/api/modules/provider'

const emits = defineEmits<{
  (e: 'success'): void
}>()
const enterprise_store = useEnterpriseStore()
const copy_ref = ref()
const form_ref = ref()
const visible = ref(false)
const form = reactive({
  client_id: '',
	client_secret: '',
	api_key: '',
})
const origin_data = ref({})
const saving = ref(false)

const coze_auth_url = computed(() => {
  const enterprise_info = enterprise_store.info
  return `${api_host}/api/callback/cozecn/auth/${enterprise_info.eid}`
})

const textValidator = ({ rule, value, callback, message } = {}) => {
  value = (value || '').trim()
  if (!value)
    return callback(new Error(window.$t(message)))
  callback()
}

const open = async ({ data = {} } = {}) => {
  form.client_id = data.client_id || ''
  form.client_secret = data.client_secret || ''
	form.api_key = data.api_key || ''
	origin_data.value = data
  visible.value = true
	await nextTick()
	const copy_el = copy_ref.value.$el
	const copy_hook_el = form_ref.value.$el.querySelector('.copy-hook')
	switch (data.value) {
		case PROVIDER_TYPE_COZE_CN:
			copy_hook_el.appendChild(copy_el)
			break
		case PROVIDER_TYPE_APP_BUILDER:
			form.api_key = data.access_token || ''
			break
	}
}
const close = () => {
  visible.value = false
  reset()
}
const reset = () => {
  form.client_id = ''
  form.client_secret = ''
	form.api_key = ''
}
const handleCopy = async ({ text }: { text: string }) => {
  if (!text)
    return
  await copyToClip(text)
  ElMessage.success(window.$t('action_copy_success'))
}
const handleConfirm = async () => {
	const valid = await form_ref.value.validate()
	if (!valid) return
	let data = {
		configs: {},
		name: origin_data.value.label,
		provider_type: origin_data.value.value,
		provider_id: origin_data.value.provider_id,
	}
	switch (origin_data.value.value) {
		case PROVIDER_TYPE_COZE_CN:
			if (!origin_data.value.provider_id || (form.client_id !== origin_data.value.client_id || form.client_secret !== origin_data.value.client_secret)) await ElMessageBox.confirm(window.$t('module.platform_auth_coze_confirm'), window.$t('tip'))
			data.configs = { client_id: form.client_id, client_secret: form.client_secret }
			break
		case PROVIDER_TYPE_APP_BUILDER:
			data.access_token = form.api_key
			break
	}
	saving.value = true
	const result = await providerApi.save({
		data,
	}).finally(() => {
		saving.value = false
	})
	if ([PROVIDER_TYPE_COZE_CN].includes(origin_data.value.value) && !+origin_data.value.is_authorized) {
		let auth_url = ''
		switch (origin_data.value.value) {
			case PROVIDER_TYPE_COZE_CN:
				auth_url = `https://www.coze.cn/api/permission/oauth2/authorize?response_type=code&client_id=${form.client_id}&redirect_uri=${encodeURIComponent(coze_auth_url.value)}&state=coze_auth`
				break
		}
		console.info('auth_url: ', auth_url)
		const auth_window = window.open(auth_url, '_blank', 'width=1000,height=800')
		window.addEventListener('message', ({ data = {} } = {}) => {
			// if (data.is_authorized == 'true' || data.is_authorized == 1) {
			if (data.provider_type == origin_data.value.value) {
				auth_window.close()
				ElMessage.success(window.$t('action_authorize_success'))
				emits('success')
			}
		})
	}
	ElMessage.success(window.$t('action_save_success'))
	emits('success')
	close()
}

defineExpose({
  open,
  close,
  reset,
})
</script>

<template>
	<ElDialog v-model="visible" :title="$t('action_authorize') + $t(origin_data.label || '')"
		:close-on-click-modal="false" width="720px" destroy-on-close append-to-body @close="close">
		<ElForm ref="form_ref" :model="form" label-position="top">
			<div class="w-full flex flex-col gap-3 bg-[#F6F9FC] p-5 mb-4 box-border text-sm text-[#4F5052]">
				<div class="whitespace-pre-wrap leading-7" v-html="origin_data.value == PROVIDER_TYPE_APP_BUILDER ? $t('platform_auth.app_builder.tip', {
						url: `<a class=\'text-[#5A6D9E]\' href=\'https://qianfan.cloud.baidu.com/appbuilder\' target=\'_blank\'>https://qianfan.cloud.baidu.com/appbuilder</a>`,
					}) : $t('platform_auth.coze_cn.tip', {
            url: `<a class=\'text-[#5A6D9E]\' href=\'https://www.coze.cn/open/oauth/apps\' target=\'_blank\'>https://www.coze.cn/open/oauth/apps</a>`,
            redirect_url: `<span class=\'text-[#F04F4D]\'>${coze_auth_url}</span><span class=\'copy-hook\'></span>`,
            client_id: `<span class=\'text-[#F04F4D]\'>${$t('module.platform_auth_client_id')}</span>`,
            client_secret: `<span class=\'text-[#F04F4D]\'>${$t('module.platform_auth_client_secret')}</span>`,
          })" />
				<ElIcon ref="copy_ref" v-show="[PROVIDER_TYPE_COZE_CN].includes(origin_data.value)"
					class="cursor-pointer ml-1 mt-1 text-[#4F5052] hover:text-[#3664EF]" :size="14"
					@click="handleCopy({ text: coze_auth_url })">
					<CopyDocument />
				</ElIcon>
			</div>
			<template v-if="origin_data.value == PROVIDER_TYPE_APP_BUILDER">
				<ElFormItem :label="$t('module.platform_tool_api_key')" prop="api_key" :rules="[{
	validator: (rule, value, callback) => textValidator({ rule, value, callback, message: 'module.platform_tool_api_key_placeholder' }),
					trigger: 'blur',
				}]">
					<ElInput v-model="form.api_key" size="large"
						:placeholder="$t('module.platform_tool_api_key_placeholder')" />
				</ElFormItem>
			</template>
			<template v-else>
				<ElFormItem :label="$t('module.platform_auth_client_id')" prop="client_id" :rules="[{
						validator: (rule, value, callback) => textValidator({ rule, value, callback, message: 'module.platform_auth_client_id_placeholder' }),
						trigger: 'blur',
					}]">
					<ElInput v-model="form.client_id" size="large"
						:placeholder="$t('module.platform_auth_client_id_placeholder')" />
				</ElFormItem>
				<ElFormItem :label="$t('module.platform_auth_client_secret')" prop="client_secret" :rules="[{
						validator: (rule, value, callback) => textValidator({ rule, value, callback, message: 'module.platform_auth_client_secret_placeholder' }),
						trigger: 'blur',
					}]">
					<ElInput v-model="form.client_secret" size="large"
						:placeholder="$t('module.platform_auth_client_secret_placeholder')" />
				</ElFormItem>
			</template>
		</ElForm>
		<template #footer>
			<div v-if="[PROVIDER_TYPE_COZE_CN].includes(origin_data.value)" class="text-center text-sm text-[#9A9A9A]">
				{{ $t('platform_auth.coze_cn.tip_1') }}
			</div>
			<div class="py-4 flex items-center justify-center">
				<ElButton class="w-[96px] h-[36px]" type="primary" :loading="saving" @click="handleConfirm">
					{{
					$t('action_confirm') }}
				</ElButton>
				<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">
					{{ $t('action_cancel')
					}}
				</ElButton>
			</div>
		</template>
	</ElDialog>
</template>

<style scoped lang="scss">
</style>
