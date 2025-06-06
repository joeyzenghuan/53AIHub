<script setup lang="ts">
import { CircleCheckFilled } from '@element-plus/icons-vue'

import { ref, reactive, onMounted, nextTick } from 'vue'
import { useUserStore, useEnterpriseStore } from '@/stores'
import { generateInputRules } from '@/utils/form-rule'

const emits = defineEmits<{
	(e: 'login'): void
}>()

const user_store = useUserStore()
const enterprise_store = useEnterpriseStore()
const form_ref = ref()
const verification_code_input_ref = ref()
const active_step = ref(0)
const form = reactive({
	username: '',
	verification_code: '',
	password: '',
	website_name: '',
	contact_name: '',
})
const submitting = ref(false)

onMounted(() => {
	const { access_token } = user_store.info
	if (access_token) active_step.value = 1
})

const reset = () => {
	form.username = ''
	form.verification_code = ''
	form.password = ''
	form.website_name = ''
	form.contact_name = ''
}
const onNextStep = async () => {
	const valid = await form_ref.value.validate()
	if (!valid) return
	switch (active_step.value) {
		case 0:
			submitting.value = true
			const valid = await verification_code_input_ref.value.validateCode()
			if (!valid) return submitting.value = false
			await user_store.login({
				data: {
					username: form.username,
					password: form.password,
					verify_code: form.verification_code,
				},
				hideError: false
			}).catch((err) => {
				submitting.value = false
				return Promise.reject(err)
			})
			const { list = [] } = await enterprise_store.loadListData({ data: { status: 0 } }).catch((err) => {
				submitting.value = false
				return Promise.reject(err)
			})
			submitting.value = false
			if (list.length > 0) return ElMessage.warning($t('login.apply_open_repetition'))
			active_step.value++
			ElMessage.success($t('action_save_success'))
			break
		case 1:
			submitting.value = true
			await enterprise_store.apply({
				data: {
					contact_name: form.contact_name,
					enterprise_name: form.website_name,
					phone: form.username,
					email: '',
				}
			}).finally(() => {
				submitting.value = false
			})
			active_step.value++
			ElMessage.success($t('login.application_complete'))
			onLogin()
			break
	}
	reset()
}
const onLogin = () => {
	emits('login')
}

defineExpose({
	reset
})
</script>

<template>
	<ElForm ref="form_ref" class="relative max-w-[500px] w-full" :model="form" label-position="top">
		<h4 class="text-3xl text-[#1D1E1F] font-bold text-center mb-10">
			{{ $t('apply_open') }}
		</h4>
		<ElSteps class="mb-8" :active="active_step" align-center>
			<ElStep
				v-for="(step_label, step_index) in ['login.verify_identity', 'login.enterprise_info', 'login.application_complete']"
				:key="step_index">
				<template #icon>
					<div class="w-9 h-9 bg-[#F2F3F3] rounded-full flex items-center justify-center">
						<div class="w-7 h-7 rounded-full text-white text-sm flex items-center justify-center"
							:class="[step_index < active_step ? 'bg-[#82A2F7]' : active_step === step_index ? 'bg-[#3664F0]' : 'bg-[#CFD1D6]']">
							{{ step_index + 1 }}
						</div>
					</div>
				</template>
				<template #title>
					<span
						:class="[step_index < active_step ? 'text-[#B3C7FA]' : active_step === step_index ? 'text-[#3664EF]' : 'text-[#9A9A9A]']">
						{{ $t(step_label) }}
					</span>
				</template>
			</ElStep>
		</ElSteps>

		<template v-if="active_step === 0">
			<ElFormItem prop="username"
				:rules="generateInputRules({ message: 'login.mobile_placeholder', validator: ['text', 'mobile'] })">
				<template #label>
					<span class="text-[#1D1E1F]">{{ $t('account') }}</span>
				</template>
				<ElInput style="--el-input-bg-color: #F1F2F3; --el-input-border-color: transparent; --el-input-height: 44px;"
					v-model="form.username" size="large" autocomplete="new-username" name="prevent_autofill_username"
					:placeholder="$t(`login.mobile_placeholder`)" clearable />
			</ElFormItem>
			<ElFormItem class="relative" prop="verification_code"
				:rules="generateInputRules({ message: 'verification_code_placeholder' })">
				<template #label>
					<span class="text-[#1D1E1F]">{{ $t('verification_code') }}</span>
				</template>
				<VerificationCodeInput ref="verification_code_input_ref" :account="form.username"
					v-model="form.verification_code" />
			</ElFormItem>
			<ElFormItem class="relative" prop="password" :rules="[...generateInputRules({ message: 'login.password_placeholder', validator: ['password'] }), {
				min: 8,
				max: 20,
				message: $t('login.password_length'),
				trigger: 'blur'
			}]">
				<template #label>
					<span class="text-[#1D1E1F]">{{ $t('password') }}</span>
				</template>
				<ElInput style="--el-input-bg-color: #F1F2F3; --el-input-border-color: transparent; --el-input-height: 44px;"
					v-model="form.password" size="large" type="password" show-password clearable autocomplete="new-password"
					name="prevent_autofill_password" :placeholder="$t('login.password_placeholder')" />
			</ElFormItem>
			<ElButton type="primary" round :loading="submitting" class="w-full mt-6 !h-10"
				:disabled="!form.username || !form.password || !form.verification_code" @click.stop="onNextStep">
				{{ $t('action_next_step') }}
			</ElButton>
		</template>
		<template v-else-if="active_step === 1">
			<ElFormItem class="is-required" prop="website_name"
				:rules="generateInputRules({ message: 'login.website_name_placeholder' })">
				<template #label>
					<span class="text-[#1D1E1F]">{{ $t('login.website_name') }}</span>
				</template>
				<ElInput style="--el-input-bg-color: #F1F2F3; --el-input-border-color: transparent; --el-input-height: 44px;"
					v-model="form.website_name" size="large" autocomplete="new-username" name="prevent_autofill_username"
					:placeholder="$t(`login.website_name_placeholder`)" clearable />
			</ElFormItem>
			<ElFormItem class="is-required" prop="contact_name"
				:rules="generateInputRules({ message: 'login.contact_name_placeholder' })">
				<template #label>
					<span class="text-[#1D1E1F]">{{ $t('login.contact_name') }}</span>
				</template>
				<ElInput style="--el-input-bg-color: #F1F2F3; --el-input-border-color: transparent; --el-input-height: 44px;"
					v-model="form.contact_name" size="large" autocomplete="new-username" name="prevent_autofill_username"
					:placeholder="$t(`login.contact_name_placeholder`)" clearable />
			</ElFormItem>
			<ElButton type="primary" round class="w-full mt-6 !h-10" :loading="submitting" :disabled="!form.website_name || !form.contact_name"
				@click.stop="onNextStep">
				{{ $t('login.complete_registration_and_login') }}
			</ElButton>
		</template>
		<template v-else>
			<div
				class="h-[424px] p-10 box-border bg-[#EFF9FF] rounded-lg flex flex-col items-center justify-center text-center">
				<div class="flex items-center justify-center gap-2">
					<ElIcon color="#4CBF65" size="28">
						<CircleCheckFilled />
					</ElIcon>
					<span class="text-[#1D1E1F] text-2xl font-bold">{{ $t('apply_success') }}</span>
				</div>
				<div class="text-[#666] text-sm mt-4">{{ $t('apply_success_desc') }}</div>
				<img class="w-[148px] object-contain mt-14" src="//chat.53ai.com/images/upgrade-qrcode.png" />
			</div>
		</template>
		<ElButton type="primary" text class="!p-0 mt-4 !mx-auto relative left-1/2 -translate-x-1/2 !bg-transparent"
			@click="onLogin">
			{{ $t('login.back_to_login') }}
		</ElButton>
	</ElForm>
</template>

<style scoped lang="scss">
::v-deep(.el-step__line) {
	left: 70% !important;
	right: -30% !important;
	background-color: #E9EBEE !important;
}
::v-deep(.el-step__title) {
	margin-top: 8px;
	font-weight: 400 !important;
}
::v-deep(.el-step__head.is-finish .el-step__line) {
	background-color: #3664EF !important;
	// background-color: #82A2F6 !important;
}
::v-deep(.el-step__head.is-process .el-step__line) {
	// background-color: #3664EF !important;
}
</style>
