<script setup lang="ts">
import { Edit, Delete, Plus } from '@element-plus/icons-vue'

import { ref, reactive, onMounted, onUnmounted } from 'vue'
import eventBus from '@/utils/event-bus'
import { deepCopy } from '@/utils'
import { generateInputRules } from '@/utils/form-rule'
import { subscriptionApi } from '@/api/modules/subscription'
import { img_host } from '@/utils/config'

const form_ref = ref()
const loading = ref(false)
const subscription_list = ref([])
const unit_options = ref([{
	value: 'CNY',
	label: 'CNY'
}, {
	value: 'USD',
	label: 'USD'
	}])
const advanced_agent_bot_options = ref([
	{
		icon: 'advanced-bot',
		label: '销售促单实战演练',
		includes: ['pro', 'flagship']
	},
	{
		icon: 'advanced-bot',
		label: '小红书爆款文案生成',
		includes: ['pro', 'flagship']
	},
	{
		icon: 'advanced-bot',
		label: '尽调助手',
		includes: ['pro', 'flagship']
	},
	{
		icon: 'advanced-bot',
		label: '世界500强企业分析',
		includes: ['flagship']
	},
	{
		icon: 'advanced-bot',
		label: '客户挖掘助理',
		includes: ['flagship']
	},
])

onMounted(async () => {
	refresh()
	eventBus.on('user-login-success', refresh)
})
onUnmounted(() => {
	eventBus.off('user-login-success', refresh)
})

let origin_subscription_list = []
const refresh = async () => {
	loading.value = true
	origin_subscription_list = await subscriptionApi.list().finally(() => {
		loading.value = false
	})
	subscription_list.value = [...origin_subscription_list]
}

const onAdd = () => {
	const new_subscription_data = deepCopy(origin_subscription_list[0])
	new_subscription_data.delete = false
	new_subscription_data.group_id = 0
	new_subscription_data.setting_id = 0
	new_subscription_data.sort = 0
	new_subscription_data.group_name = ''
	new_subscription_data.logo_url = img_host + `/subscription/vip-${subscription_list.value.length + 1}.png`
	new_subscription_data.ai_enabled = false
	new_subscription_data.relations = []
	new_subscription_data.year_info.amount = '0.00'
	new_subscription_data.year_info.currency = 'CNY'
	new_subscription_data.year_info.relation_id = 0
	new_subscription_data.year_info.time_unit = 'year'
	new_subscription_data.year_info.type = 1
	new_subscription_data.month_info.amount = '0.00'
	new_subscription_data.month_info.currency = 'CNY'
	new_subscription_data.month_info.relation_id = 0
	new_subscription_data.month_info.time_unit = 'month'
	new_subscription_data.month_info.type = 1
	new_subscription_data.point_month_info.amount = '0'
	new_subscription_data.point_month_info.currency = ''
	new_subscription_data.point_month_info.relation_id = 0
	new_subscription_data.point_month_info.time_unit = 'month'
	new_subscription_data.point_month_info.type = 2
	new_subscription_data.agents = []
	subscription_list.value.push(new_subscription_data)
}
let deleted_subscription_list = []
const onRemove = async ({ data = {}, index = 0 } = {}) => {
	if (data.group_id) await ElMessageBox.confirm(window.$t('module.subscription_delete_confirm'))
	data.delete = true
	if (data.group_id) deleted_subscription_list.push(data)
	subscription_list.value.splice(index, 1)
}
const onIconChange = (value = '', data) => {
	data.logo_url = img_host + `/subscription/vip-${value}.png`
}
// const handleChange = (file, key) => {
// 	if (!file || !file.raw) return
// 	const reader = new FileReader()
// 	reader.readAsDataURL(file.raw)
// 	reader.onload = () => {
// 		form[key].icon = reader.result
// 	}
// }
const onAIAssistantOpen = ({ type = '' } = {}) => {
	// window.open('#', '_blank')
}
const handleSave = () => {
	form_ref.value.validate(async (valid) => {
		if (!valid) return
		const items = subscription_list.value.map((item = {}, index) => {
			const result = {
				delete: false,
				group_id: item.group_id || 0,
				setting_id: item.setting_id || 0,
				ai_enabled: !!+item.ai_enabled,
				sort: subscription_list.value.length - index,
				group_name: item.group_name || '',
				logo_url: item.logo_url || '',
				relations: [{
					amount: Math.round(item.year_info.amount * 10000) / 100,
					currency: item.year_info.currency,
					relation_id: item.year_info.relation_id || 0,
					time_unit: item.year_info.time_unit,
					type: item.year_info.type
				}, {
					amount: Math.round(item.month_info.amount * 10000) / 100,
					currency: item.month_info.currency,
					relation_id: item.month_info.relation_id || 0,
					time_unit: item.month_info.time_unit,
					type: item.month_info.type
				}, {
					amount: Number(item.point_month_info.amount || 0),
					currency: item.point_month_info.currency,
					relation_id: item.point_month_info.relation_id || 0,
					time_unit: item.point_month_info.time_unit,
					type: item.point_month_info.type
				}]
			}
			return result
		})
		if (deleted_subscription_list.length) {
			items.push(...deleted_subscription_list)
			deleted_subscription_list = []
		}
		await subscriptionApi.save({ data: { items } })
		ElMessage.success(window.$t('action_save_success'))
		refresh()
	})
}
</script>

<template>
	<Layout class="px-[60px] !overflow-y-auto relative">
		<Header class="sticky top-0 left-0 right-0 z-10 pt-8 pb-4 bg-[#F6F7F8]" :title="$t('module.subscription')" />
		<div class="flex flex-col bg-white px-6 pt-6 box-border">
			<h1 class="flex-none text-sm text-[#4F5052]">{{ $t('module.subscription_header_title') }}</h1>
			<div class="overflow-x-auto">
				<ElForm ref="form_ref" class="mt-6 pb-1 pr-1 overflow-hidden flex gap-4 w-max" :model="subscription_list"
					label-position="top" v-loading="loading">
					<div v-for="(item, index) in subscription_list" :key="index"
						class="flex-none w-[334px] bg-[#F9F9FC] p-4 box-border">
						<ElFormItem>
							<div class="w-full flex items-center gap-2.5">
								<!-- <ElUpload :show-file-list="false" :auto-upload="false" accept="image/*" :limit="1"
									:on-change="(file) => handleChange(file, key)">
									<div
										class="w-[36px] h-[36px] relative flex flex-col items-center justify-center translate-y-1.5 group">
										<img :src="form[key].icon" class="w-full h-full object-cover" />
										<div
											class="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											<ElIcon color="#fff" size="16">
												<Edit />
											</ElIcon>
										</div>
									</div>
								</ElUpload> -->
								<ElDropdown placement="bottom" trigger="click" @command="onIconChange($event, item)">
									<img
										:src="!/\.png$/.test(item.logo_url) ? $getRealPath({ url: `/images/subscription/${item.logo_url}.png` }) : item.logo_url"
										class="flex-none w-[36px] h-[36px] object-cover" />
									<template #dropdown>
										<ElDropdownMenu>
											<ElDropdownItem v-for="i in [1, 2, 3, 4, 5]" :key="i" :command="i">
												<img :src="img_host + `/subscription/vip-${i}.png`"
													class="w-[36px] h-[36px] object-cover" />
											</ElDropdownItem>
										</ElDropdownMenu>
									</template>
								</ElDropdown>
								<ElFormItem class="flex-1" :prop="`${index}.group_name`"
									:rules="generateInputRules({ message: 'form_input_placeholder' })">
									<ElInput v-model="item.group_name" size="large" :placeholder="$t('form_input_placeholder')"
										show-word-limit maxlength="10" />
								</ElFormItem>
								<ElIcon class="flex-none cursor-pointer" :class="[subscription_list.length < 2 ? 'invisible' : '']"
									size="16" color="#F04F4D" @click="onRemove({ data: item, index })">
									<Delete />
								</ElIcon>
							</div>
						</ElFormItem>
						<ElFormItem :label="$t('module.subscription_charge')">
							<div class="w-full flex items-center gap-2">
								<ElSelect class="flex-none !w-[86px]" size="large" v-model="item.year_info.currency">
									<ElOption v-for="item in unit_options" :key="item.value" :label="item.label" :value="item.value" />
								</ElSelect>
								<ElInputNumber class="charge-price-input flex-1" v-model="item.year_info.amount" size="large"
									:controls="false" :precision="2" :min="0" :max="999999999999"
									:placeholder="$t('form_input_placeholder')" @keydown="$numberInputKeydownHandler" />
								<div class="flex-none text-sm text-[#1D1E1F]">/{{ $t('yearly') }}</div>
							</div>
							<div class="mt-3 w-full flex items-center gap-2">
								<ElSelect class="flex-none !w-[86px]" size="large" v-model="item.month_info.currency">
									<ElOption v-for="item in unit_options" :key="item.value" :label="item.label" :value="item.value" />
								</ElSelect>
								<ElInputNumber class="charge-price-input flex-1" v-model="item.month_info.amount" size="large"
									:controls="false" :precision="2" :min="0" :max="999999999999"
									:placeholder="$t('form_input_placeholder')" @keydown="$numberInputKeydownHandler" />
								<div class="flex-none text-sm text-[#1D1E1F]">/{{ $t('monthly') }}</div>
							</div>
						</ElFormItem>
						<ElFormItem :label="$t('module.subscription_points')">
							<div class="w-full flex items-center gap-2">
								<ElInputNumber class="charge-point-input flex-1" v-model="item.point_month_info.amount" size="large"
									:controls="false" :precision="0" :min="0" :max="999999999999"
									:placeholder="$t('form_input_placeholder')" @keydown="$numberInputKeydownHandler" />
								<div class="flex-none text-sm text-[#1D1E1F]">/{{ $t('monthly') }}</div>
							</div>
						</ElFormItem>
						<ElDivider />
						<template v-if="item.agents && item.agents.length">
							<ElFormItem class="!mb-0" :label="$t('module.subscription_agent_bots')">
								<template v-for="(agent, agent_index) in item.agents" :key="agent_index">
									<div class="w-full flex items-center gap-2 mb-3">
										<img :src="agent.logo"
											class="flex-none w-[18px] h-[18px] object-contain rounded-full overflow-hidden" />
										<div class="flex-1 truncate text-sm text-[#4F5052]">{{ agent.name }}</div>
									</div>
								</template>
							</ElFormItem>
							<ElDivider />
						</template>
						<!--		<template v-if="key !== 'free'">
							<ElFormItem class="!mb-0" :label="$t('module.subscription_advanced_agent_bots')">
								<template v-for="(opt, opt_index) in advanced_agent_bot_options" :key="opt_index">
									<div v-if="opt.includes.includes(key)" class="w-full flex items-center gap-2 mb-3">
										<SvgIcon class="flex-none" :name="opt.icon" width="18" height="18" />
										<div class="flex-1 truncate text-sm text-[#4F5052]">{{ opt.label }}</div>
									</div>
								</template>
							</ElFormItem>
							<ElDivider />
						</template>-->
						<ElFormItem class="!mb-0">
							<template #label>
								<div class="flex items-center gap-1">
									{{ $t('module.subscription_ai_assistant') }}
									<ElTooltip :content="$t('module.subscription_ai_assistant_tip')" placement="bottom">
										<SvgIcon class="flex-none" name="question" color="#A0A7B8" width="14" height="14" />
									</ElTooltip>
									<div class="flex-1"></div>
									<ElSwitch class="ml-2" v-model="item.ai_enabled" size="small" />
								</div>
							</template>
							<div class="flex flex-wrap items-center gap-2">
								<ElButton class="!p-2" type="default" plain size="default" :disabled="!item.ai_enabled"
									@click="onAIAssistantOpen({ type: 'windows' })">
									<SvgIcon class="mr-1.5" :class="{ 'opacity-50': !item.ai_enabled }" name="windows" width="14"
										height="14" />
									<span class="text-xs">Windows</span>
								</ElButton>
								<ElButton class="!p-2 !ml-0" type="default" plain size="default" :disabled="!item.ai_enabled"
									@click="onAIAssistantOpen({ type: 'ios' })">
									<SvgIcon class="mr-1.5" :class="{ 'opacity-50': !item.ai_enabled }" name="ios" width="14"
										height="14" />
									<span class="text-xs">macOS</span>
								</ElButton>
								<ElButton class="!p-2 !ml-0" type="default" plain size="default" :disabled="!item.ai_enabled"
									@click="onAIAssistantOpen({ type: 'chrome' })">
									<SvgIcon class="mr-1.5" :class="{ 'opacity-50': !item.ai_enabled }" name="chrome" width="14"
										height="14" />
									<span class="text-xs">Google</span>
								</ElButton>
							</div>
						</ElFormItem>
					</div>
					<div v-if="subscription_list.length < 5"
						class="flex-none w-[200px] bg-[#F9F9FC] flex items-center justify-center p-4 box-border cursor-pointer hover:opacity-70"
						@click="onAdd">
						<ElIcon size="16" color="#4F5052">
							<Plus />
						</ElIcon>
					</div>
				</ElForm>
			</div>
		</div>
		<div class="sticky bottom-0 left-0 right-0 z-10 bg-[#F6F7F8] pb-8 box-border">
			<div class="bg-white px-6 pt-2 pb-6">
				<ElDivider />
				<ElButton class="h-[36px] w-[96px]" type="primary" size="large" @click="handleSave">{{ $t('action_save') }}
				</ElButton>
			</div>
		</div>
	</Layout>
</template>

<style scoped lang="scss">
.charge-price-input, .charge-point-input {
	::v-deep(.el-input__inner) {
		text-align: left;
	}
}
::v-deep(.el-divider--horizontal) {
	margin: 20px 0;
}
::v-deep(.el-form-item__label) {
	width: 100%;
	padding-right: 0;
}
</style>
