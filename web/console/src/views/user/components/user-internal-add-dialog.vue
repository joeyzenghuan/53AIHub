<script setup lang="ts">
import { SemiSelect } from '@element-plus/icons-vue'
import DepartmentTreeSelect from './department-tree-select.vue'

import { reactive, ref, inject } from 'vue'
import { generateInputRules } from '@/utils/form-rule'
import {
	userApi,
} from '@/api/modules/user'

const emits = defineEmits<{
	(e: 'success'): void
}>()

const organizationData = inject('organizationData') || ref({})

const formRef = ref()
const visible = ref(false)
const formData = reactive({
	users: []
})
const submitting = ref(false)
const allUserList = ref([])

let successCallback = null
const open = ({ success } = {}) => {
	fetchAllUser()
	formData.users = []
	handleAdd()
	successCallback = success
  visible.value = true
}
const close = () => {
  visible.value = false
}
const fetchAllUser = async () => {
	const { list = [] } = await userApi.fetch_internal_user({
		offset: 0,
		limit: 10000
	})
	allUserList.value = list
}
const handleAdd = () => {
	const lastUser = formData.users[formData.users.length - 1] || {}
	formData.users.push({
		nickname: '',
		username: '',
		password: lastUser.password || '',
		did: lastUser.did || organizationData.value.did || 0,
	})
}
const handleRemove = (index: number) => {
	formData.users.splice(index, 1)
}
const checkSameMobile = (rule, value, callback) => {
	if (allUserList.value.some(item => item.username === value))
		return callback(new Error(window.$t('internal_user.account.same_member_exists_tip')))
	const field = rule.fullField || rule.field || ''
	let index = Number(field.split('.')[1])
	const sameIndexList = []
	formData.users.forEach((item, itemIndex) => {
		if (itemIndex !== index && item.username === value) sameIndexList.push(itemIndex + 1)
	})
	if (sameIndexList.length > 0) return callback(new Error(window.$t('internal_user.account.same_mobile_exists_tip', { index: sameIndexList.join('、') })))
	callback()
}
const handleConfirm = async () => {
	const valid = await formRef.value.validate()
	if (!valid) return
	const users = JSON.parse(JSON.stringify(formData.users)).map(item => {
		item.did = item.did || 0
		return item
	})
	submitting.value = true
	const { data: { failed = [] } = {} } = await userApi.batch_save_internal_user({
		users,
	}).finally(() => {
		submitting.value = false
	})
	if (failed && failed.length) {
		const registerList = failed.filter(item => item.existing_type == 1).map(item => {
			const data = users.find(user => user.username === item.username) || {}
			item.did = data.did || 0
			return item
		})
		await ElMessageBox.confirm(
			window.$t('internal_user.account.register_to_internal_confirm',
				{
					mobile: registerList.map(item => item.message).join('、')
				}),
			window.$t('tip'))
			.then(() => {
				return userApi.register_to_internal({
					user_departments: registerList.map(item => ({
						did: item.did,
						user_id: item.user_id
					}))
				})
			})
			.catch(() => Promise.resolve())
	}
	if (typeof successCallback === 'function') successCallback()
	emits('success')
	ElMessage.success(window.$t('action_save_success'))
	close()
}

defineExpose({
  open,
  close,
})
</script>

<template>
	<ElDialog v-model="visible" :title="$t('action_add')" :close-on-click-modal="false" width="920px" destroy-on-close
		append-to-body @close="close">
		<ElForm class="w-full" ref="formRef" :model="formData" label-position="top">
			<ElFormItem class="w-full" v-for="(item, itemIndex) in formData.users" :key="item.did">
				<div class="w-full flex-center gap-4 relative">
					<ElFormItem class="flex-1 w-0" :label="$t('internal_user.account.name')" :prop="`users.${itemIndex}.nickname`"
						:rules="generateInputRules({ message: 'internal_user.account.name_placeholder' })">
						<ElInput v-model="item.nickname" size="large" :placeholder="$t('internal_user.account.name_placeholder')" />
					</ElFormItem>
					<ElFormItem class="flex-1 w-0" :prop="`users.${itemIndex}.username`" :rules="[
							...generateInputRules({ message: 'internal_user.account.mobile_placeholder', validator: ['text', 'mobile'] }),
							{
								validator: checkSameMobile,
								trigger: 'blur'
							}
						]">
						<template #label>
							<span class="text-[#1D1E1F]">{{ $t('internal_user.account.mobile') }}</span>
						</template>
						<ElInput v-model="item.username" size="large" autocomplete="new-username" name="prevent_autofill_username"
							:placeholder="$t(`internal_user.account.mobile_placeholder`)" clearable />
					</ElFormItem>
					<ElFormItem class="flex-1 w-0" :label="$t('password')" :prop="`users.${itemIndex}.password`" :rules="[...generateInputRules({ message: 'internal_user.account.password_placeholder', validator: ['password'] }), {
						min: 8,
						max: 20,
						message: $t('login.password_length'),
						trigger: 'blur'
					}]">
						<ElInput v-model="item.password" size="large"
							:placeholder="$t('internal_user.account.password_placeholder')" clearable
							@blur="formRef.validateField('password')" />
					</ElFormItem>
					<ElFormItem v-if="false" class="flex-1 w-0" :label="$t('internal_user.account.department')"
						:prop="`users.${itemIndex}.did`">
						<DepartmentTreeSelect v-model="item.did" />
					</ElFormItem>
					<ElButton v-if="formData.users.length > 1" class="!size-4 translate-y-4" type="danger" circle size="small"
						:icon="SemiSelect" @click="handleRemove(itemIndex)" />
				</div>
			</ElFormItem>
		</ElForm>
		<ElButton type="primary" link @click="handleAdd">
			+ {{ $t('internal_user.account.add') }}
		</ElButton>
		<template #footer>
			<div class="py-4 flex items-center justify-center">
				<ElButton class="w-[96px] h-[36px]" type="primary" :loading="submitting" @click="handleConfirm">
					{{ $t('action_confirm') }}
				</ElButton>
				<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">
					{{ $t('action_cancel') }}
				</ElButton>
			</div>
		</template>
	</ElDialog>
</template>

<style scoped lang="scss">
</style>
