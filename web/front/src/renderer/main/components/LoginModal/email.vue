<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { getEmailRules } from '@/utils/form-rules'
import commonApi from '@/api/modules/common'
import { ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'

import { useUserStore } from '@/stores/modules/user'
import useEmail from '@/hooks/useEmail'

// const props = withDefaults(
//   defineProps<{
//     hideSubmit?: boolean
//   }>(),
//   {
//     hideSubmit: false
//   }
// )
const emits = defineEmits(['success', 'close'])

const userStore = useUserStore()
const { sendEmailCode, emailCodeRule, emailCodeCount } = useEmail()

const formRef = ref<FormInstance>()

const isEmail = computed(() => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)
})

const form = reactive({
  email: '',
  verify_code: ''
})

const rules = computed(() => {
  return {
    email: [getEmailRules()],
    verify_code: [emailCodeRule]
  }
})

const isSending = ref(false)

const handleGetCode = () => {
  if (!isEmail.value) return
  isSending.value = true
  sendEmailCode(form.email)
    .finally(() => {
      isSending.value = false
    })
}

const handleClose = () => {
  emits('close')
}

const handleSubmit = () => {
  return formRef.value?.validate().then(async (valid) => {
    if (!valid) return
    console.log('valid')
    try {
      // 1. 先获取用户信息
      await userStore.getUserInfo()
      const id = userStore.info.user_id

      // 2. 调用验证邮箱接口
      await commonApi.verifyEmailcode(
        {
          email: form.email,
          code: form.verify_code // 保持与接口定义一致
        },
        id
      )
      if (userStore.info.email) {
        ElMessage.success(window.$t('profile.bind') + window.$t('status.success'))
      } else ElMessage.success(window.$t('profile.change') + window.$t('status.success'))
      emits('success')
    } catch (error) {}
  })
}

// 暴露重置表单的方法
const resetForm = () => {
  form.email = ''
  form.verify_code = ''
  // 重置表单验证状态
  formRef.value?.resetFields()
}

defineExpose({
  resetForm
})
</script>

<template>
  <el-form
    ref="formRef"
    label-position="top"
    :model="form"
    :rules="rules"
    :validate-on-rule-change="true"
    @keyup.enter="handleSubmit"
  >
    <el-form-item :label="$t('form.new_email')" prop="email">
      <el-input
        v-model="form.email"
        v-trim
        size="large"
        class="input_style"
        :placeholder="$t('form.input_placeholder') + $t('form.email')"
        clearable
      />
    </el-form-item>
    <el-form-item :label="$t('form.verify_code')" prop="verify_code">
      <el-input
        v-model="form.verify_code"
        v-trim
        size="large"
        class="input_style"
        :placeholder="$t('form.input_placeholder') + $t('form.verify_code')"
      >
        <template #suffix>
          <el-button
            :disabled="isSending || Boolean(emailCodeCount)"
            @click.stop="handleGetCode"
            class="!bg-[#f5f5f5] border-0 pr-0"
          >
            <div
              class="text-base pl-3 border-ltext-[#9A9A9A] cursor-not-allowed"
              v-if="emailCodeCount"
            >
              {{ emailCodeCount }}s
            </div>
            <div class="text-base pl-3 border-l text-[#2563EB]" v-else>
              {{ $t('form.get_verify_code') }}
            </div>
          </el-button>
        </template>
      </el-input>
    </el-form-item>

    <!-- 更换按钮 -->
    <div class="flex justify-end mt-7.5">
      <el-button class="w-24 h-9" @click="handleClose">
        {{ $t('action.cancel') }}
      </el-button>
      <el-button type="primary" @click="handleSubmit" class="w-24 h-9">
        {{ $t('action.ok') }}
      </el-button>
    </div>
  </el-form>
</template>

<style scoped></style>