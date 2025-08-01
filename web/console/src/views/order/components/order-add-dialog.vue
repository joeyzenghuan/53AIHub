<template>
	<ElDialog v-model="visible" :title="$t(editable ? 'action_edit' : 'action_add')" :close-on-click-modal="false"
		width="700px" destroy-on-close append-to-body @close="close">
		<ElForm ref="form_ref" v-loading="loading" :model="form" label-position="top">
			<ElFormItem :label="$t('user')" prop="user_id" :rules="[{ validator: (rule, value, callback) => {
	if (!value) return callback(new Error($t('form_select_placeholder') + $t('user')))
				callback()
			}, trigger: 'blur' }]">
				<ElSelect v-if="editable" v-model="origin_data.user_id" filterable clearable :collapse-tags="false" collapse-tags-tooltip size="large"
					:placeholder="$t('form_select_placeholder') + $t('user')" :disabled="true">
					<ElOption :label="origin_data.nickname" :value="origin_data.user_id" />
				</ElSelect>
				<ElSelect v-else v-model="form.user_id" filterable clearable :collapse-tags="false" collapse-tags-tooltip size="large"
					:placeholder="$t('form_select_placeholder') + $t('user')">
					<ElOption v-for="opt in user_options" :key="opt.value" :label="opt.label" :value="opt.value" />
				</ElSelect>
			</ElFormItem>
			<ElFormItem :label="$t('order_subscription_version')">
				<GroupSelect v-model="form.subscription_id" default-first type="radio" @change="computedAmount" />
			</ElFormItem>
			<ElFormItem :label="$t('order_subscription_duration')">
				<ElInputNumber v-model="form.subscription_duration" :min="1" :controls="false" class="!w-[108px] mr-4"
					size="large" :placeholder="$t('form_input_placeholder')" @change="computedAmount" />
				<ElRadioGroup v-model="form.subscription_unit" size="large" @change="computedAmount">
					<ElRadio v-for="opt in subscription_unit_options" :key="opt.value" :label="opt.value">{{ opt.label }}
					</ElRadio>
				</ElRadioGroup>
			</ElFormItem>
			<ElFormItem :label="$t('order_amount')">
				<div class="border border-[#DCDFE6] border-r-0 h-10 px-5 rounded-s flex-center">{{ active_time_option.currency }}</div>
				<ElInputNumber v-model="form.amount" class="flex-1 amount-input" :min="0" :precision="2" :controls="false" size="large"
					:placeholder="$t('form_input_placeholder')">
				</ElInputNumber>
			</ElFormItem>
		</ElForm>
		<template #footer>
			<div class="py-4 flex items-center justify-center">
				<ElButton class="w-[96px] h-[36px]" type="primary" :loading="submitting" @click="handleConfirm">{{ $t('action_confirm') }}</ElButton>
				<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">{{ $t('action_cancel')
					}}</ElButton>
			</div>
		</template>
	</ElDialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import GroupSelect from '@/components/GroupSelect/index.vue'

import { useUserStore } from '@/stores/modules/user'
import { orderApi } from '@/api/modules/order'
import { subscriptionApi } from '@/api/modules/subscription'

const emits = defineEmits(['success'])

const userStore = useUserStore()

const form_ref = ref()
const visible = ref(false)
const editable = ref(false)
const loading = ref(false)
const submitting = ref(false)
const form = reactive({
	user_id: '',
	subscription_id: '',
	subscription_duration: 1,
	subscription_unit: 'month',
	amount: null,
})
const origin_data = ref({})
const user_options = ref([])
const subscription_unit_options = ref([
	{
		value: 'month',
		label: window.$t('month')
	},
	{
		value: 'year',
		label: window.$t('year')
	},
])

const active_subscription_option = computed(() => {
	const option = subscription_options.value.find(item => item.group_id === form.subscription_id) || {}
	const { month_info = {}, year_info = {} } = option
	return option
})
const active_time_option = computed(() => {
	const { month_info = {}, year_info = {} } = active_subscription_option.value
	const option = form.subscription_unit === 'month' ? month_info : year_info
	return option
})
const active_user_option = computed(() => {
	const option = user_options.value.find(item => item.value === form.user_id) || {}
	return option
})

const textValidator = ({ rule, value, callback, message } = {}) => {
	value = (value || '').trim()
	if (!value) return callback(new Error(window.$t(message)))
	callback()
}

const open = async ({ data = {} } = {}) => {
	editable.value = !!data.id
	origin_data.value = data
	visible.value = true
	loading.value = true

	await Promise.all([fetchUserData(), fetchSubscriptionData()]).catch(() => {
		loading.value = false
	})

	if (editable.value) {
		// const { data: detailData = {} } = await orderApi.detail({ id: data.id }).catch(() => {
		// 	loading.value = false
		// })
		const detailData = data
		form.user_id = detailData.user_id || ''
		form.subscription_id = detailData.service_id || ''
		form.subscription_duration = Number(detailData.duration) || 1
		form.subscription_unit = detailData.time_unit || 'month'
		form.amount = detailData.amount ? Number((Number(detailData.amount) / 100).toFixed(2)) : null
		origin_data.value = detailData
	}
	loading.value = false
}
const close = () => {
	visible.value = false
	reset()
}
const reset = () => {
	form.user_id = ''
	form.subscription_id = ''
	form.subscription_duration = 1
	form.subscription_unit = 'month'
	form.amount = null
}
const handleConfirm = async () => {
	const valid = await form_ref.value.validate()
	if (!valid) return
	const data = {
		id: origin_data.value.id,
		user_id: form.user_id,
		nickname: active_user_option.value.label,
		subscription_id: form.subscription_id,
		subscription_name: active_subscription_option.value.group_name,
		time_unit: form.subscription_unit,
		duration: form.subscription_duration,
		currency: active_time_option.value.currency,
		amount: Number(form.amount * 100)
	}
	if (editable.value) {
		data.user_id = origin_data.value.user_id
		data.nickname = origin_data.value.nickname
	}
	submitting.value = true
	await orderApi.save(data).finally(() => {
		submitting.value = false
	})
	ElMessage.success(window.$t('action_save_success'))
	close()
	emits('success')
}
const fetchUserData = async () => {
	if (user_options.value.length) return Promise.resolve()
	const { list = [] } = await userStore.loadListData({ data: { limit: 1000 } })
	user_options.value = list.map(item => {
		return {
			value: +item.user_id || 0,
			label: item.nickname || ''
		}
	})
}
const subscription_options = ref([])
const fetchSubscriptionData = async () => {
	if (subscription_options.value.length) return Promise.resolve()
	subscription_options.value = await subscriptionApi.list({ params: { limit: 1000 } })
}
const computedAmount = () => {
	const { amount = 0 } = active_time_option.value
	form.amount = Number(Number(amount) * form.subscription_duration)
}

onMounted(() => {
})

defineExpose({
	open,
	close,
	reset
})
</script>

<style scoped lang="scss">
::v-deep(.el-input-number .el-input__inner) {
	text-align: left;
}
::v-deep(.amount-unit-select .el-select__wrapper) {
	border-right-width: 0 !important;
	border-top-right-radius: 0 !important;
	border-bottom-right-radius: 0 !important;
}

::v-deep(.amount-input .el-input__wrapper) {
	border-top-left-radius: 0 !important;
	border-bottom-left-radius: 0 !important;
}
</style>
