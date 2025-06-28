<script setup lang="ts">
import { ref, reactive } from 'vue'
import { getPasswordRules } from '@/utils/form-rules'
import userApi from '@/api/modules/user'

const props = withDefaults(defineProps<{
  hideSubmit?: boolean
}>(), {
  hideSubmit: false
})
const emits = defineEmits(['success'])

const formRef = ref(null)

const form = reactive({
  newPassword: '',
  confirmPassword: ''
})

const rules = reactive({
  newPassword: [getPasswordRules()],
  confirmPassword: [
    {
      required: true,
      message: window.$t('form.input_placeholder') + window.$t('form.new_password_confirm'),
      trigger: 'blur'
    },
    {
      validator: (_rule, value, callback) => {
        if (value !== form.newPassword) {
          callback(new Error(window.$t('form.password_not_match')))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
})

const handleSubmit = () => {
  return formRef.value.validate().then(async (valid) => {
    if (!valid) return
    console.log('valid')
    await userApi
      .updatePassword({
        new_password: form.newPassword,
        confirm_password: form.confirmPassword
      })
      .then(() => {
        ElMessage.success(window.$t('status.success'))
        emits('success')
      })
  })
}
</script>

<template>
  <el-form ref="formRef" label-position="top" :model="form" :rules="rules">
    <template v-if="false">
      <el-form-item :label="$t('form.select_verify')">
        <el-radio-group>
          <el-radio label="1">{{ $t('form.email_verify') }}</el-radio>
          <el-radio label="2">{{ $t('form.mobile_verify') }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="$t('form.email')">
        <el-input size="large"></el-input>
      </el-form-item>
      <el-form-item :label="$t('form.mobile')">
        <el-input size="large"></el-input>
      </el-form-item>
      <el-form-item :label="$t('form.verify_code')">
        <el-input size="large">
          <template #append>
            <el-button size="large" type="primary">{{ $t('form.get_verify_code') }}</el-button>
          </template>
        </el-input>
      </el-form-item>
    </template>

    <el-form-item :label="$t('form.new_password')" prop="newPassword">
      <el-input
        v-model="form.newPassword"
        v-trim
        type="password"
        size="large"
        show-password
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item :label="$t('form.new_password_confirm')" prop="confirmPassword">
      <el-input
        v-model="form.confirmPassword"
        v-trim
        type="password"
        size="large"
        show-password
        clearable
      ></el-input>
    </el-form-item>
  </el-form>
  <ElButton v-if="!hideSubmit" v-debounce class="!w-full rounded-3xl mt-5" size="large" type="primary" :disabled="!form.newPassword.trim() || !form.confirmPassword.trim()" @click="handleSubmit">
    {{ $t('action.update_password') }}
  </ElButton>
</template>

<style scoped></style>
