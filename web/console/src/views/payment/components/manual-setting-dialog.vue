<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'

import { ref, reactive } from 'vue'

const form_ref = ref()
const visible = ref(false)
const form = reactive({
	pay_qrcode: '',
})
const origin_data = ref({})

const textValidator = ({ rule, value, callback, message } = {}) => {
	value = (value || '').trim()
	if (!value) return callback(new Error(window.$t(message)))
	callback()
}

const open = ({ data = {} } = {}) => {
	form.pay_qrcode = data.pay_qrcode || ''
	origin_data.value = data
	visible.value = true
}
const close = () => {
	visible.value = false
	reset()
}
const reset = () => {
	form.pay_qrcode = ''
}
const handleChange = (file) => {
	const reader = new FileReader()
	reader.readAsDataURL(file.raw)
	reader.onload = () => {
		form.pay_qrcode = reader.result
	}
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
	<ElDialog :title="$t('manual_pay')" :close-on-click-modal="false" width="700px" destroy-on-close append-to-body v-model="visible"
		@close="close">
		<ElForm ref="form_ref" :model="form" label-position="top">
			<ol class="w-full flex flex-col gap-3 bg-[#F6F9FC] p-5 mb-6 box-border text-sm text-[#4F5052]">
				<li>{{ $t('module.payment_manual_tip') }}</li>
			</ol>
			<ElFormItem :label="$t('module.payment_manual_pay_qrcode')" prop="pay_qrcode" :rules="[{
				validator: (rule, value, callback) => textValidator({ rule, value, callback, message: 'module.payment_manual_pay_qrcode_placeholder' }),
				trigger: 'blur'
			}]">
				<ElUpload ref="upload_ref" drag :show-file-list="false" :auto-upload="false" accept="image/*" :limit="1" :on-change="handleChange">
					<div class="w-full h-full flex flex-col items-center justify-center gap-2">
						<img v-if="form.pay_qrcode" :src="form.pay_qrcode" class="absolute top-0 left-0 w-full h-full object-cover" />
						<template v-else>
							<ElIcon color="#9A9A9A" size="20">
								<Plus />
							</ElIcon>
							<span class="text-[#9A9A9A] text-sm">{{ $t('action_upload') }}</span>
						</template>
					</div>
				</ElUpload>
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
::v-deep(.el-upload-dragger) {
	position: relative;
	width: 148px;
	height: 148px;
	box-sizing: border-box;
	border-style: solid;
	background-color: #F7F9FA;
}
</style>
