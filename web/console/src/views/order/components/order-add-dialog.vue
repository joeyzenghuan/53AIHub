<script setup lang="ts">
import { ref, reactive } from 'vue'

const form_ref = ref()
const visible = ref(false)
const editable = ref(false)
const form = reactive({
	order_id: '',
	user_list: [],
	subscription_version: '1',
	subscription_duration: '1',
	subscription_unit: '1',
	amount: '0.00',
	amount_unit: '1'
})
const origin_data = ref({})
const user_options = ref([
	{
		value: '1',
		label: '张三'
	},
	{
		value: '2',
		label: '李四'
	},
	{
		value: '3',
		label: '王五'
	},
	{
		value: '4',
		label: '赵六'
	},
	{
		value: '5',
		label: '孙七'
	},

])
const subscription_options = ref([
	{
		value: '1',
		label: '专业版'
	},
	{
		value: '2',
		label: '旗舰版'
	},
])
const subscription_unit_options = ref([
	{
		value: '1',
		label: '月'
	},
	{
		value: '2',
		label: '年'
	},
])
const amount_unit_options = ref([
	{
		value: '1',
		label: 'CNY'
	},
	{
		value: '2',
		label: 'USD'
	},
])

const textValidator = ({ rule, value, callback, message } = {}) => {
	value = (value || '').trim()
	if (!value) return callback(new Error(window.$t(message)))
	callback()
}

const open = ({ data = {} } = {}) => {
	form.order_id = data.order_id || 'AH2015032000200'
	form.user_list = data.user_list || []
	form.subscription_version = data.subscription_version || '1'
	form.subscription_duration = data.subscription_duration || '1'
	form.subscription_unit = data.subscription_unit || '1'
	form.amount = +data.amount || '0.00'
	form.amount_unit = data.amount_unit || '1'
	editable.value = !!data.order_id
	origin_data.value = data
	visible.value = true
}
const close = () => {
	visible.value = false
	reset()
}
const reset = () => {
	form.order_id = ''
	form.user_list = []
	form.subscription_version = ''
	form.subscription_duration = ''
	form.subscription_unit = ''
	form.amount = ''
	form.amount_unit = ''
}
const handleConfirm = () => {
	form_ref.value.validate((valid) => {
		if (!valid) return
		ElMessage.success(window.$t('action_save_success'))
		close()
	})
}

defineExpose({
	open,
	close,
	reset
})
</script>

<template>
	<ElDialog :title="$t(editable ? 'action_edit' : 'action_add')" :close-on-click-modal="false" width="700px"
		destroy-on-close append-to-body v-model="visible" @close="close">
		<ElForm ref="form_ref" :model="form" label-position="top">
			<ElFormItem class="mt-5" :label="$t('order_no')">
				<ElInput v-model="form.order_id" size="large" disabled :placeholder="$t('form_input_placeholder')" />
			</ElFormItem>
			<ElFormItem :label="$t('user')" prop="user_list" :rules="[{ validator: (rule, value, callback) => {
	if (!value.length) return callback(new Error($t('form_select_placeholder') + $t('user')))
				callback()
			}, trigger: 'blur' }]">
				<ElSelect v-model="form.user_list" filterable :collapse-tags="false" collapse-tags-tooltip multiple size="large"
					:placeholder="$t('form_select_placeholder') + $t('user')">
					<ElOption v-for="opt in user_options" :key="opt.value" :label="opt.label" :value="opt.value" />
				</ElSelect>
				<div class="text-[#9A9A9A] text-sm mt-2">{{ $t('module.operation_order_user_tip') }}</div>
			</ElFormItem>
			<ElFormItem :label="$t('order_subscription_version')">
				<ElRadioGroup v-model="form.subscription_version" size="large">
					<ElRadio v-for="opt in subscription_options" :key="opt.value" :label="opt.value">{{ opt.label }}</ElRadio>
				</ElRadioGroup>
			</ElFormItem>
			<ElFormItem :label="$t('order_subscription_duration')">
				<ElInputNumber v-model="form.subscription_duration" :min="1" :controls="false" class="!w-[108px] mr-4"
					size="large" :placeholder="$t('form_input_placeholder')" />
				<ElRadioGroup v-model="form.subscription_unit" size="large">
					<ElRadio v-for="opt in subscription_unit_options" :key="opt.value" :label="opt.value">{{ opt.label }}
					</ElRadio>
				</ElRadioGroup>
			</ElFormItem>
			<ElFormItem :label="$t('order_amount')">
				<ElSelect class="!w-[108px] amount-unit-select" v-model="form.amount_unit" size="large">
					<ElOption v-for="opt in amount_unit_options" :key="opt.value" :label="opt.label" :value="opt.value" />
				</ElSelect>
				<ElInputNumber class="flex-1 amount-input" v-model="form.amount" :min="0" :precision="2" :controls="false" size="large"
					:placeholder="$t('form_input_placeholder')" />
			</ElFormItem>
		</ElForm>
		<template #footer>
			<div class="py-4 flex items-center justify-center">
				<ElButton class="w-[96px] h-[36px]" type="primary" @click="handleConfirm">{{ $t('action_confirm') }}</ElButton>
				<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">{{ $t('action_cancel')
					}}</ElButton>
			</div>
		</template>
	</ElDialog>
</template>

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
