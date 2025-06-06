<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, nextTick } from 'vue'
import { useUserStore } from '@/stores'
import { generateInputRules } from '@/utils/form-rule'
import { authApi } from '@/api/modules/auth'
import eventBus from '@/utils/event-bus'

const emits = defineEmits<{
  (e: 'login'): void
  (e: 'register'): void
}>()

const user_store = useUserStore()
const form_ref = ref()
const verification_code_input_ref = ref()
const form = reactive({
	username_type: 'mobile',
	username: '',
	verification_code: '',
	password: '',
	confirm_password: ''
})
const submitting = ref(false)
const account_exists = ref(true)

onMounted(() => {
	eventBus.on('language-change', onLanguageChange)
})
onUnmounted(() => {
	eventBus.off('language-change', onLanguageChange)
})

const onLanguageChange = () => {
	if (form_ref.value) {
		form_ref.value.clearValidate()
		// form_ref.value.validate()
	}
}

const reset = () => {
	form.username_type = 'mobile'
	form.username = ''
	form.verification_code = ''
	form.password = ''
	form.confirm_password = ''
}
const onUpdatePassword = async () => {
	let valid = await form_ref.value.validate()
	if (!valid) return
	submitting.value = true
	await checkAccount()
	if (!account_exists.value) {
		ElMessage.warning(window.$t('login.account_no_exists'))
		return submitting.value = false
	}
	valid = await verification_code_input_ref.value.validateCode()
	if (!valid) return submitting.value = false
	await user_store.resetPassword({
		data: {
			mobile: form.username,
			new_password: form.password,
			confirm_password: form.confirm_password,
			verify_code: form.verification_code
		}
	}).finally(() => {
		submitting.value = false
	})
	ElMessage.success($t('action_update_success'))
	reset()
	onLogin()
}
const onLogin = () => {
	emits('login')
}
const onRegister = () => {
	emits('register')
}
const onUsernameTypeChange = async () => {
	form.username = ''
	verification_code_input_ref.value.reset()
	await nextTick()
	form_ref.value.clearValidate('username')
	form_ref.value.clearValidate('verification_code')
}
const checkAccount = async () => {
	account_exists.value = true
	const valid = await form_ref.value.validateField('username')
	if (!valid) return
	const { exists = false } = await authApi.checkAccount({ data: { account: form.username } })
	account_exists.value = exists
	return exists
}

defineExpose({
	reset
})
</script>

<template>
	<ElForm ref="form_ref" class="relative max-w-[440px] w-full" :model="form" label-position="top">
		<h4 class="text-3xl text-[#1D1E1F] font-bold text-center mb-10">
			{{ $t('login.reset_password') }}
		</h4>
		<!-- <ElFormItem>
			<template #label>
				<span class="text-[#1D1E1F]">{{ $t('login.select_reset_password_way') }}</span>
			</template>
			<ElRadioGroup v-model="form.username_type" @change="onUsernameTypeChange">
				<ElRadio label="email">
					{{ $t('login.email_validate') }}
				</ElRadio>
				<ElRadio label="mobile">
					{{ $t('login.mobile_validate') }}
				</ElRadio>
			</ElRadioGroup>
		</ElFormItem> -->
		<ElFormItem prop="username"
			:rules="generateInputRules({ message: `login.${form.username_type}_placeholder`, validator: ['text', form.username_type]  })">
			<template #label>
				<span class="text-[#1D1E1F]">{{ $t(form.username_type) }}</span>
			</template>
			<ElInput style="--el-input-bg-color: #F1F2F3; --el-input-border-color: transparent; --el-input-height: 44px;"
				v-model="form.username" size="large" autocomplete="forgot-username" name="prevent_autofill_username"
				:placeholder="$t(`login.${form.username_type}_placeholder`)" clearable @blur="checkAccount" />
			<div v-if="!account_exists" class="absolute -bottom-5 left-0 text-red-500 text-xs">
				{{ $t('login.account_no_exists') }}
				<ElButton type="primary" link size="small" class="!p-0 !bg-transparent -ml-1" @click="onRegister">
					{{ $t('action_register') }}
				</ElButton>
			</div>
		</ElFormItem>
		<ElFormItem class="relative" prop="verification_code"
			:rules="generateInputRules({ message: 'verification_code_placeholder' })">
			<template #label>
				<span class="text-[#1D1E1F]">{{ $t('verification_code') }}</span>
			</template>
			<VerificationCodeInput ref="verification_code_input_ref" :account="form.username" :disabled="!account_exists"
				v-model="form.verification_code" />
		</ElFormItem>
		<ElFormItem class="relative" prop="password" :rules="[...generateInputRules({ message: 'login.new_password_placeholder', validator: ['password'] }), {
      min: 8,
      max: 20,
      message: $t('login.password_length'),
      trigger: 'blur'
		}]">
			<template #label>
				<span class="text-[#1D1E1F]">{{ $t('login.new_password') }}</span>
			</template>
			<ElInput style="--el-input-bg-color: #F1F2F3; --el-input-border-color: transparent; --el-input-height: 44px;"
				v-model="form.password" size="large" type="password" show-password clearable autocomplete="new-password"
				name="prevent_autofill_password" :placeholder="$t('login.new_password_placeholder')" />
		</ElFormItem>
		<ElFormItem class="relative" prop="confirm_password" :rules="[...generateInputRules({ message: 'login.confirm_password_placeholder', validator: ['password'] }), {
			min: 8,
			max: 20,
			message: $t('login.password_length'),
			trigger: 'blur'
		}, {
			validator: (rule, value, callback) => {
				if (value !== form.password) return callback(new Error($t('login.password_not_match')))
				callback()
			},
			trigger: 'blur'
		}]">
			<template #label>
				<span class="text-[#1D1E1F]">{{ $t('login.confirm_password') }}</span>
			</template>
			<ElInput style="--el-input-bg-color: #F1F2F3; --el-input-border-color: transparent; --el-input-height: 44px;"
				v-model="form.confirm_password" size="large" type="password" show-password clearable autocomplete="new-password"
				name="prevent_autofill_password" :placeholder="$t('login.confirm_password_placeholder')" />
		</ElFormItem>
		<ElButton type="primary" round class="w-full mt-6 !h-10"
			:disabled="!form.username || !form.password || !form.verification_code || !form.confirm_password"
			:loading="submitting" @click.stop="onUpdatePassword">
			{{ $t('login.update_password') }}
		</ElButton>
		<ElButton type="primary" text class="!p-0 mt-4 !mx-auto relative left-1/2 -translate-x-1/2 !bg-transparent"
			@click="onLogin">
			{{ $t('login.back_to_login') }}
		</ElButton>
	</ElForm>
</template>

<style scoped lang="scss">
</style>
