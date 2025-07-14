<script setup lang="ts">
import { reactive, ref } from 'vue'
import UserStatus from './user-internal-status.vue'
import OpenData from '@/components/OpenData/index.vue'

import { generateInputRules } from '@/utils/form-rule'
import {
  INTERNAL_USER_STATUS_UNDEFINED,
  userApi,
} from '@/api/modules/user'

const emits = defineEmits<{
  (e: 'success'): void
}>()

const formRef = ref()
const visible = ref(false)
const formData = reactive({
  name: '',
  nickname: '',
  mobile: '',
  department: [],
  status: INTERNAL_USER_STATUS_UNDEFINED,
})
const submitting = ref(false)
const allUserList = ref([])
const originalData = ref({})

let successCallback = null
const open = ({ data = {}, success } = {}) => {
  const memberBindingInfo = (data.memberbindings || [])[0] || {}
  formData.name = memberBindingInfo.name || ''
  formData.nickname = data.nickname || ''
  formData.mobile = data.mobile || ''
  formData.department = data.departments || []
  formData.status = +data.status || INTERNAL_USER_STATUS_UNDEFINED
  originalData.value = data
  successCallback = success
  visible.value = true
}
const close = () => {
  visible.value = false
}
const handleSave = async () => {
  const valid = await formRef.value.validate()
  if (!valid)
    return
  submitting.value = true
  const { data: { failed = [] } = {} } = await userApi.update_internal_user({
    user_id: originalData.value.user_id,
    department: formData.department.map(item => item.value),
    mobile: formData.mobile,
    nickname: formData.nickname,
    status: formData.status,
  }).finally(() => {
    submitting.value = false
  })
  if (failed && failed.length) {
    const registerList = failed.filter(item => item.existing_type == 1).map((item) => {
      const data = users.find(user => user.username === item.username) || {}
      item.did = data.did || 0
      return item
    })
    await ElMessageBox.confirm(
      window.$t('internal_user.account.register_to_internal_confirm',
        {
          mobile: registerList.map(item => item.username).join('、'),
        }),
      window.$t('tip'))
      .then(() => {
        userApi.register_to_internal({
          user_departments: registerList.map(item => ({
            did: item.did,
            user_id: item.user_id,
          })),
        })
      })
      .catch(() => Promise.resolve())
  }
  if (typeof successCallback === 'function')
    successCallback()
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
  <ElDrawer
    v-model="visible" :title="$t('internal_user.account.edit_member')" :close-on-click-modal="false"
    size="700px" destroy-on-close append-to-body @close="close"
  >
    <ElForm ref="formRef" class="w-full" :model="formData" label-position="top">
      <ElFormItem :label="$t('internal_user.account.name')">
        <ElInput
          v-model="formData.name" size="large" disabled
          :placeholder="$t('internal_user.account.name_placeholder')"
        />
        <!-- 如果绑定了企微，后面需要使用opendata来显示名称 -->
        <OpenData v-if="false" type="userName" :openid="formData.name" :text="formData.name || 11" />
        <div class="text-[#999] text-sm mt-2">
          {{ $t('internal_user.account.name_disabled_tip') }}
        </div>
      </ElFormItem>
      <ElFormItem
        class="is-required" :label="$t('internal_user.account.nickname')" prop="nickname"
        :rules="generateInputRules({ message: 'internal_user.account.nickname_placeholder' })"
      >
        <ElInput
          v-model="formData.nickname" size="large"
          :placeholder="$t('internal_user.account.nickname_placeholder')"
        />
      </ElFormItem>

      <ElFormItem
        class="is-required" :label="$t('internal_user.account.mobile')" prop="mobile" :rules="[
          ...generateInputRules({ message: 'internal_user.account.mobile_placeholder', validator: ['text', 'mobile'] }),
        ]"
      >
        <ElInput
          v-model="formData.mobile" size="large" autocomplete="new-mobile"
          :placeholder="$t(`internal_user.account.mobile_placeholder`)"
          :disabled="originalData.status !== INTERNAL_USER_STATUS_UNDEFINED" clearable
        />
        <div class="text-[#999] text-sm mt-2">
          {{ $t('internal_user.account.mobile_disabled_tip') }}
        </div>
      </ElFormItem>
      <ElFormItem :label="$t('internal_user.account.department')" prop="department">
        <DeptMemberPicker v-model="formData.department" type="department" />
      </ElFormItem>
      <ElFormItem :label="$t('internal_user.account.status')" prop="status">
        <UserStatus v-model="formData.status" :user-data="originalData" action-disabled size="large" />
      </ElFormItem>
    </ElForm>
    <template #footer>
      <div class="pt-4 flex items-center justify-end border-t border-[#E5E5E5]">
        <ElButton size="large" @click.stop="close">
          {{ $t('action_cancel') }}
        </ElButton>
        <ElButton size="large" type="primary" :loading="submitting" @click="handleSave">
          {{ $t('action_save') }}
        </ElButton>
      </div>
    </template>
  </ElDrawer>
</template>

<style scoped>
</style>
