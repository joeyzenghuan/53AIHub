<script setup lang="ts">
import { Close } from '@element-plus/icons-vue'

import { ref, reactive, onMounted, onUnmounted, nextTick } from 'vue'
import { useUserStore } from '@/stores'
import { generateInputRules } from '@/utils/form-rule'
import eventBus from '@/utils/event-bus'
import { RESPONSE_CODE_UNAUTHORIZED_ERROR } from '@/utils/request/code'

const user_store = useUserStore()
const form_ref = ref()
const agree_ref = ref()
const policy_ref = ref()
const visible = ref(false)
const form = reactive({
	username: '',
	password: ''
	// username: 'liuzimu',
	// password: 'password123',
})

onMounted(() => {
	// visible.value = true
	eventBus.on('user-login-open', open)
})
onUnmounted(() => {
	eventBus.off('user-login-open', open)
})

const open = async ({ data = {} } = {}) => {
	visible.value = true
	await nextTick()
	const agree_el = agree_ref.value.$el
	const agree_hook_el = form_ref.value.$el.querySelector('.agree-hook')
	agree_hook_el.appendChild(agree_el)
	const policy_el = policy_ref.value.$el
	const policy_hook_el = form_ref.value.$el.querySelector('.policy-hook')
	policy_hook_el.appendChild(policy_el)
}
const close = () => {
	visible.value = false
	reset()
}
const reset = () => {
	form.username = ''
	form.password = ''
}
const onLogin = () => {
	form_ref.value.validate(async (valid) => {
		if (!valid) return
		const { data } = await user_store.login({ data: form, hideError: true }).catch((err) => {
			if (err.code == RESPONSE_CODE_UNAUTHORIZED_ERROR && err.origin_message == 'unauthorized: user not found') {
				onRegister()
			} else ElMessage.warning(window.$t(err.message))
			return Promise.reject(err)
		})
		ElMessage.success(window.$t('action_login_success'))
		close()
		reset()
	})
}
const onRegister = () => {
	form_ref.value.validate(async (valid) => {
		if (!valid) return
		await user_store.register({ data: form })
		// ElMessage.success(window.$t('action_register_success'))
		ElMessage.success(window.$t('action_login_success'))
		close()
		reset()
	})
}
const onForgetPassword = () => {
	ElMessage.warning(window.$t('feature_coming_soon'))
}
const onAgree = () => {
	ElMessage.warning(window.$t('feature_coming_soon'))
}
const onPolicy = () => {
	ElMessage.warning(window.$t('feature_coming_soon'))
}

defineExpose({
	open,
	close,
	reset
})
</script>

<template>
	<ElDialog
		header-class="hidden"
		width="504px"
		:style="{
			'--el-dialog-border-radius': '16px',
      backgroundImage: `url('/images/login_bg.png')`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
    }"
		:close-on-click-modal="false"
		:show-close="false"
		destroy-on-close
		append-to-body
		center
		v-model="visible"
		@close="close"
	>
    <div class="pt-8 pb-4 relative">
			<ElIcon class="absolute top-2 right-1" :size="20" color="#9A9A9A" @click="close">
				<Close />
			</ElIcon>
			<h4 class="text-3xl text-[#1D1E1F] font-bold text-center mb-3">
				{{ $t('login.password_login') }}
      </h4>
      <p class="text-sm text-[#9A9A9A] text-center">{{ $t('login.unregistered_account_desc') }}</p>
			<ElForm ref="form_ref" class="mt-8" :model="form" label-position="top">
				<ElFormItem prop="username" :rules="generateInputRules({ message: 'login.account_placeholder' })">
					<template #label>
						<span class="text-[#1D1E1F]">{{ $t('account') }}</span>
					</template>
					<ElInput style="--el-input-bg-color: #F1F2F3; --el-input-border-color: transparent; --el-input-height: 44px;" v-model="form.username" size="large" :placeholder="$t('login.account_placeholder')" clearable />
				</ElFormItem>
				<ElFormItem class="relative" prop="password" :rules="generateInputRules({ message: 'login.password_placeholder' })">
					<template #label>
						<span class="text-[#1D1E1F]">{{ $t('password') }}</span>
					</template>
					<ElInput style="--el-input-bg-color: #F1F2F3; --el-input-border-color: transparent; --el-input-height: 44px;" v-model="form.password" size="large" type="password" show-password clearable
						:placeholder="$t('login.password_placeholder')" />
					<ElButton type="text" class="text-[#9A9A9A] bg-transparent text-sm absolute right-0 -bottom-8" @click="onForgetPassword">
						{{ $t('login.forget_password') }}
					</ElButton>
				</ElFormItem>
        <ElButton type="primary" round v-debounce class="w-full mt-8 !h-10" :disabled="!form.username || !form.password" @click="onLogin">
          {{ $t('action_login') }}
        </ElButton>
				<div class="text-xs text-[#9A9A9A] text-center mt-5" v-html="$t('login.agree_and_policy', {
					agree: `<span class=\'agree-hook\'></span>`,
					policy: `<span class=\'policy-hook\'></span>`,
				})" />
				<ElButton ref="agree_ref" type="text" class="text-[#4F5052] text-xs bg-transparent mx-1 -mt-0.5 underline underline-offset-4" @click="onAgree">
					{{ $t('login.agree') }}
				</ElButton>
				<ElButton ref="policy_ref" type="text" class="text-[#4F5052] text-xs bg-transparent mx-1 -mt-0.5 underline underline-offset-4" @click="onPolicy">
					{{ $t('login.policy') }}
				</ElButton>
			</ElForm>
    </div>
	</ElDialog>
</template>

<style scoped lang="scss">
</style>
