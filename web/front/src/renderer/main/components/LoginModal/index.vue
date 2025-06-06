<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/modules/user'
import { useAgentStore } from '@/stores/modules/agent'
import { getMobileRules, getEmailRules, getPasswordRules } from '@/utils/form-rules'

import useEnv from '@/hooks/useEnv'
import useMobile from '@/hooks/useMobile'

import userApi from '@/api/modules/user'
import commonApi from '@/api/modules/common'

const { isOpLocalEnv } = useEnv()

const userStore = useUserStore()
const agentStore = useAgentStore()
const { sendcode, codeRule, codeCount } = useMobile()

const formRef = ref<FormInstance>()

const isVisible = ref(false)

const isMobile = computed(() => {
  return /^1[3-9]\d{9}$/.test(form.username)
})

const emit = defineEmits(['login', 'close'])

const rules = computed(() => {
  return {
    username: isOpLocalEnv.value ? [getEmailRules()] : [getMobileRules()],
    password: [getPasswordRules()],
    verify_code: [codeRule]
  }
})

const form = reactive({
  username: '',
  password: '',
  verify_code: ''
})
// 添加用户名验证缓存
const usernameCache = reactive(new Map())
const isRegister = ref(false)

const open = () => {
  isRegister.value = false
  isVisible.value = true
}

const close = () => {
  isVisible.value = false
  emit('close')
}

const onUsernameBlur = () => {
  if (!isMobile.value) return
  // 检查缓存中是否已有该用户名的验证结果
  if (usernameCache.has(form.username)) {
    const cachedResult = usernameCache.get(form.username)
    // 检查缓存是否过期（2分钟）
    if (Date.now() - cachedResult.timestamp < 2 * 60 * 1000) {
      isRegister.value = !cachedResult.exists
      return
    }
  }

  // 如果缓存不存在或已过期，则发起API请求
  userApi.checkUsername(form.username).then((res) => {
    isRegister.value = !res.data.exists
    // 更新缓存
    usernameCache.set(form.username, {
      exists: res.data.exists,
      timestamp: Date.now()
    })
  })
}

const handleGetCode = () => {
  if (!isMobile.value) return
  sendcode(form.username)
}

const handleSubmit = () => {
  return formRef.value?.validate().then(async (valid) => {
    if (!valid) return
    try {
      if (isRegister.value) {
        await commonApi.verifycode({
          mobile: form.username,
          verifycode: form.verify_code,
          type: '1'
        })

        await userStore.register({
          username: form.username,
          password: form.password,
          verify_code: form.verify_code
        })
      } else {
        await userStore.login({
          username: form.username,
          password: form.password
        })
      }
      ElMessage.success(window.$t('status.login_success'))
      agentStore.loadAgentList()
      close()
    } catch (error) {
      const response = error.response || {}
      const data = response.data || {}
      const message = data.message || ''
      if (message.includes('record not found')) {
        if (isOpLocalEnv.value) {
          await userStore.register({
            username: form.username,
            password: form.password
          })
          ElMessage.success(window.$t('status.login_success'))
          agentStore.loadAgentList()
        } else {
          isRegister.value = true
          ElMessage.warning(window.$t('status.not_found_account'))
        }
      }
      console.log(error)
    }
  })
}

// 添加表单验证状态检查方法

// 监听表单变化时进行验证
// watch([() => form.username, () => form.password, () => form.verify_code], () => {
//   validateForm()
// })

defineExpose({
  open,
  close
})
</script>

<template>
  <el-dialog v-model="isVisible" width="504px" destroy-on-close
    style="--el-dialog-border-radius: 16px; background-size: cover" :style="{
      backgroundImage: `url(${$getPublicPath('/images/login_bg.png')})`
    }" :close-on-click-modal="false" center>
    <div class="py-2">
      <h4 class="text-3xl text-[#1D1E1F] font-bold text-center mb-3">
        {{ $t('login.password_login') }}
      </h4>
      <p class="text-sm text-[#9A9A9A] text-center">{{ $t('login.unregistered_account_desc') }}</p>

      <!-- 账号输入 -->
      <el-form ref="formRef" label-position="top" :model="form" :rules="rules" class="px-2 mt-7"
        @keyup.enter="handleSubmit">
        <el-form-item :label="$t('form.account')" prop="username">
          <el-input v-if="isOpLocalEnv" v-model="form.username" v-trim size="large" style="
              --el-input-bg-color: #f5f5f5;
              --el-input-border-color: transparent;
              --el-input-height: 44px;
            " :placeholder="$t('form.input_placeholder') + $t('form.account')" clearable />
          <el-input v-else v-model="form.username" v-trim size="large" style="
              --el-input-bg-color: #f5f5f5;
              --el-input-border-color: transparent;
              --el-input-height: 44px;
            " :placeholder="$t('form.input_placeholder') + $t('form.account_alias')" clearable
            @blur="onUsernameBlur" />
        </el-form-item>
        <el-form-item :label="$t('form.password')" prop="password">
          <el-input v-model="form.password" v-trim size="large" :type="'password'" style="
              --el-input-bg-color: #f5f5f5;
              --el-input-border-color: transparent;
              --el-input-height: 44px;
            " :placeholder="$t('form.input_placeholder') + $t('form.password')" :show-password="true" clearable />
        </el-form-item>
        <el-form-item v-if="isRegister" :label="$t('form.verify_code')" prop="verify_code">
          <el-input v-model="form.verify_code" v-trim size="large" style="
              --el-input-bg-color: #f5f5f5;
              --el-input-border-color: transparent;
              --el-input-height: 44px;
            " :placeholder="$t('form.input_placeholder') + $t('form.verify_code')">
            <template #suffix>
              <div class="text-base pl-3 border-ltext-[#9A9A9A] cursor-not-allowed" v-if="codeCount">
                {{ codeCount }}s
              </div>
              <div class="text-base pl-3 border-l" v-else :class="[
                isMobile ? 'text-[#2563EB] cursor-pointer' : 'text-[#9A9A9A] cursor-not-allowed'
              ]" v-debounce @click.stop="handleGetCode">
                {{ $t('form.get_verify_code') }}
              </div>
            </template>
          </el-input>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-button type="primary" @click="handleSubmit" round v-debounce class="w-full mt-2 !h-10">
          {{ $t('action.login') }}
        </el-button>
      </el-form>
      <div class="text-xs text-[#9A9A9A] text-center mt-5">
        {{ $t('login.agree') }}
        <a class="text-[#4F5052] cursor-pointer">{{ $t('login.terms_of_service') }}</a>
        {{ $t('action.and') }}
        <a class="text-[#4F5052] cursor-pointer">{{ $t('login.privacy_policy') }}</a>
      </div>
    </div>
  </el-dialog>
</template>

<style scoped></style>
