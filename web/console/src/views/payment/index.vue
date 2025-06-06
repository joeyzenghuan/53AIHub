<script setup lang="ts">
import { MoreFilled } from '@element-plus/icons-vue'
import WechatSettingDialog from './components/wechat-setting-dialog.vue'
import ManualSettingDialog from './components/manual-setting-dialog.vue'

import { ref, onMounted, onUnmounted } from 'vue'
import eventBus from '@/utils/event-bus'
import { PAYMENT_TYPE_WECHAT, settingApi } from '@/api/modules/setting'
import { useEnv } from '@/hooks/useEnv'
import TipConfirm from '@/components/TipConfirm/setup'

const { isLocalEnv, isOpLocalEnv } = useEnv()
const wechat_setting_ref = ref()
const manual_setting_ref = ref()
const wechat_setting_info = ref({})

onMounted(() => {
	refresh()
	eventBus.on('user-login-success', refresh)
})
onUnmounted(() => {
	eventBus.off('user-login-success', refresh)
})

const refresh = async () => {
	const list = await settingApi.paymentSettingList()
	wechat_setting_info.value = list.find(item => item.pay_type === PAYMENT_TYPE_WECHAT) || {}
}
const handleCommand = async (command, type = '') => {
	if (type != 'wechat') return ElMessage.warning(window.$t('feature_coming_soon'))
	if (isLocalEnv.value && isOpLocalEnv.value) return TipConfirm({
		title: window.$t('local_config_limited_tip'),
		content: window.$t('local_config_limited_desc', { url: window.location.href }),
		confirmButtonText: window.$t('know_it'),
		showCancelButton: false,
	}).open()
	switch (command) {
		case 'setting':
			if (type === 'wechat') wechat_setting_ref.value.open({ data: wechat_setting_info.value })
			// else if (type === 'manual') manual_setting_ref.value.open()
			break
		case 'enable':
			if (type === 'wechat') await settingApi.updatePaymentStatus(wechat_setting_info.value.pay_setting_id, true)
			ElMessage.success(window.$t('enabled'))
			refresh()
			break
		case 'disable':
			if (type === 'wechat')  await settingApi.updatePaymentStatus(wechat_setting_info.value.pay_setting_id, false)
			ElMessage.success(window.$t('disabled'))
			refresh()
			break
	}
}
</script>

<template>
	<Layout class="px-[60px] py-8">
		<Header :title="$t('module.payment')"></Header>

		<div class="flex-1 flex flex-col bg-white py-8 px-6 mt-3 box-border">
			<div class="flex-1 h-0 max-h-[calc(100vh-240px)] overflow-auto">
				<h1 class="font-semibold text-[#1D1E1F]">CNY</h1>
				<div class="w-full mt-5 flex items-center gap-5">
					<div class="flex-1 border border-[#E6E8EB] rounded-lg box-border p-5 pb-8 group">
						<div class="relative w-full flex items-center gap-3">
							<SvgIcon name="wechat" width="24" />
							<label class="font-semibold text-[#1D1E1F]">{{ $t('wechat_pay') }}</label>
							<ElTag v-if="wechat_setting_info.pay_status" class="!border-none !bg-[#E3F6E0] !text-[#09BB07]"
								type="success" size="default">
								{{ $t('enabled') }}
							</ElTag>
							<div class="flex-1"></div>
							<ElDropdown placement="bottom" @command="handleCommand($event, 'wechat')">
								<div
									class="!border-none !outline-none p-1 box-border cursor-pointer rounded overflow-hidden invisible group-hover:visible hover:bg-[#F0F0F0]">
									<ElIcon class="rotate-90" size="16">
										<MoreFilled />
									</ElIcon>
								</div>
								<template #dropdown>
									<el-dropdown-menu>
										<el-dropdown-item command="setting">{{ $t('action_setting') }}</el-dropdown-item>
										<template v-if="wechat_setting_info.pay_setting_id">
											<el-dropdown-item v-if="wechat_setting_info.pay_status" command="disable">
												{{ $t('action_disable') }}
											</el-dropdown-item>
											<el-dropdown-item v-else command="enable">
												{{ $t('action_enable') }}
											</el-dropdown-item>
										</template>
									</el-dropdown-menu>
								</template>
							</ElDropdown>
						</div>
						<div class="mt-3 text-sm text-[#4F5052]">
							{{ wechat_setting_info.pay_setting_id ? `${$t('setting')} · ${$t('updated_at')}
							${wechat_setting_info.updated_time.slice(0, 16)}` : $t('not_setting') }}
						</div>
					</div>
					<div class="flex-1 border border-[#E6E8EB] rounded-lg box-border p-5 pb-8 group opacity-60">
						<div class="relative w-full flex items-center gap-3">
							<SvgIcon name="manual-pay" width="24" />
							<label class="font-semibold text-[#1D1E1F]">{{ $t('manual_pay') }}</label>
							<div class="flex-1"></div>
							<ElDropdown placement="bottom" @command="handleCommand($event, 'manual')">
								<div
									class="!border-none !outline-none p-1 box-border cursor-pointer rounded overflow-hidden invisible group-hover:visible hover:bg-[#F0F0F0]">
									<ElIcon class="rotate-90" size="16">
										<MoreFilled />
									</ElIcon>
								</div>
								<template #dropdown>
									<el-dropdown-menu>
										<el-dropdown-item command="setting">{{ $t('action_setting') }}</el-dropdown-item>
										<el-dropdown-item command="enable">{{ $t('action_enable') }}</el-dropdown-item>
									</el-dropdown-menu>
								</template>
							</ElDropdown>
						</div>
						<div class="mt-3 text-sm text-[#4F5052]">
							{{ $t('not_setting') }}
						</div>
					</div>
				</div>
				<h1 class="mt-10 font-semibold text-[#1D1E1F] opacity-60">USD</h1>
				<div class="w-full mt-5 flex items-center gap-5 opacity-60">
					<div class="flex-1 border border-[#E6E8EB] rounded-lg box-border p-5 pb-8 group">
						<div class="relative w-full flex items-center gap-3">
							<SvgIcon name="paypal" width="24" />
							<label class="font-semibold text-[#1D1E1F]">{{ $t('paypal') }}</label>
							<div class="flex-1"></div>
							<ElDropdown placement="bottom" @command="handleCommand($event, 'paypal')">
								<div
									class="!border-none !outline-none p-1 box-border cursor-pointer rounded overflow-hidden invisible group-hover:visible hover:bg-[#F0F0F0]">
									<ElIcon class="rotate-90" size="16">
										<MoreFilled />
									</ElIcon>
								</div>
								<template #dropdown>
									<el-dropdown-menu>
										<el-dropdown-item command="setting">{{ $t('action_setting') }}</el-dropdown-item>
										<el-dropdown-item command="enable">{{ $t('action_enable') }}</el-dropdown-item>
									</el-dropdown-menu>
								</template>
							</ElDropdown>
						</div>
						<div class="mt-3 text-sm text-[#4F5052]">
							{{ $t('not_setting') }}
						</div>
					</div>
					<div class="flex-1 rounded-lg box-border p-5 pb-8 group"></div>
				</div>
			</div>
		</div>
	</Layout>

	<WechatSettingDialog ref="wechat_setting_ref" @success="refresh" />
	<ManualSettingDialog ref="manual_setting_ref" @success="refresh" />
</template>

<style scoped lang="scss"></style>
