<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { getMobileRules } from '@/utils/form-rules'
import commonApi from '@/api/modules/common'
import { ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'

import { useUserStore } from '@/stores/modules/user'
import useMobile from '@/hooks/useMobile'

const emits = defineEmits(['success', 'close'])

const userStore = useUserStore()
const { sendcode, codeRule, codeCount } = useMobile()
const { sendcode: newSendCode, codeRule: newCodeRule, codeCount: newCodeCount } = useMobile()

const formRef = ref<FormInstance>()

const isMobile = computed(() => {
  return /^1[3-9]\d{9}$/.test(form.new_mobile)
})

const form = reactive({
  old_code: '',
  new_mobile: '',
  new_code: ''
})

const rules = reactive({
  new_mobile: [getMobileRules()],
  old_code: [codeRule],
  new_code: [newCodeRule]
})

const isSendingOld = ref(false)
const isSendingNew = ref(false)

const handleGetOld_Code = () => {
  sendcode(userStore.info.mobile)
  if (codeCount) {
    isSendingOld.value = true
  } else {
    isSendingOld.value = false
  }
}

const handleGetNew_Code = () => {
  if (!isMobile.value) return
  newSendCode(form.new_mobile)
  if (newCodeCount) {
    isSendingNew.value = true
  } else {
    isSendingNew.value = false
  }
}

const handleClose = () => {
  // 重置表单
  form.new_code = ''
  form.old_code = ''
  form.new_mobile = ''
  emits('close')
}

// 暴露重置表单的方法
const resetForm = () => {
  form.new_code = ''
  form.old_code = ''
  form.new_mobile = ''
  // 重置表单验证状态
  formRef.value?.resetFields()
}

defineExpose({
  resetForm
})

const handleSubmit = () => {
  return formRef.value?.validate().then(async (valid) => {
    if (!valid) return
    console.log('valid')
    try {
      await userStore.getUserInfo()
      const id = userStore.info.user_id

      if (userStore.info.mobile) {
        await commonApi.verifycode({
          mobile: userStore.info.mobile,
          verifycode: form.old_code,
          type: '1'
        })

        await commonApi.verifycode({
          mobile: form.new_mobile,
          verifycode: form.new_code,
          type: '1'
        })

        await userStore.change_mobile(
          {
            new_code: form.new_code,
            new_mobile: form.new_mobile,
            old_code: form.old_code
          },
          id
        )
        ElMessage.success(window.$t('profile.change') + window.$t('status.success'))
      } else {
        await commonApi.verifycode({
          mobile: form.new_mobile,
          verifycode: form.new_code,
          type: '1'
        })

        await userStore.change_mobile(
          {
            new_code: form.new_code,
            new_mobile: form.new_mobile
          },
          id
        )
        ElMessage.success(window.$t('profile.bind') + window.$t('status.success'))
      }

      // 重置表单
      form.new_code = ''
      form.old_code = ''
      form.new_mobile = ''
      emits('success')
    } catch (error) {}
  })
}
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
    <el-form-item prop="old_code" v-if="userStore.info.mobile">
      <el-input
        v-model="form.old_code"
        v-trim
        size="large"
        class="input_style"
        :placeholder="$t('form.input_placeholder') + $t('form.verify_code')"
      >
        <template #suffix>
          <el-button
            :disabled="isSendingOld"
            @click.stop="handleGetOld_Code"
            class="!bg-[#f5f5f5] border-0 pr-0"
          >
            <div class="text-base pl-3 border-ltext-[#9A9A9A] cursor-not-allowed" v-if="codeCount">
              {{ codeCount }}s
            </div>
            <div class="text-base pl-3 border-l text-[#2563EB]" v-else>
              {{ $t('form.get_verify_code') }}
            </div>
          </el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item
      :label="userStore.info.mobile ? $t('form.new_mobile') : $t('form.mobile')"
      prop="new_mobile"
    >
      <el-input
        v-model="form.new_mobile"
        v-trim
        size="large"
        class="input_style"
        :placeholder="
          userStore.info.mobile
            ? $t('form.input_placeholder') + $t('form.new_mobile')
            : $t('form.input_placeholder') + $t('form.mobile')
        "
        clearable
      />
    </el-form-item>

    <el-form-item :label="$t('form.verify_code')" prop="new_code">
      <el-input
        v-model="form.new_code"
        v-trim
        size="large"
        class="input_style"
        :placeholder="$t('form.input_placeholder') + $t('form.verify_code')"
      >
        <template #suffix>
          <el-button
            :disabled="isSendingNew"
            @click.stop="handleGetNew_Code"
            class="!bg-[#f5f5f5] border-0 pr-0"
          >
            <div
              class="text-base pl-3 border-ltext-[#9A9A9A] cursor-not-allowed"
              v-if="newCodeCount"
            >
              {{ newCodeCount }}s
            </div>
            <div class="text-base pl-3 border-l text-[#2563EB]" v-else>
              {{ $t('form.get_verify_code') }}
            </div>
          </el-button>
        </template>
      </el-input>
    </el-form-item>

    <!-- 更换/绑定按钮 -->
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