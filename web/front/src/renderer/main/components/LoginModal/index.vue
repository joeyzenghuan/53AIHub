<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import { ref, reactive, watch, computed } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/modules/user'
import { useAgentStore } from '@/stores/modules/agent'
import { useEnterpriseStore } from '@/stores/modules/enterprise'
import { getMobileRules, getEmailRules, getAccountOrEmailRules,  getPasswordRules } from '@/utils/form-rules'
import SvgIcon from '@/components/SvgIcon.vue'

import useEnv from '@/hooks/useEnv'
import useMobile from '@/hooks/useMobile'

import commonApi from '@/api/modules/common'
import Register from './register.vue'
import ForgetPassword from './forgetPassword.vue'
import WechatView from './wechat.vue'
import WecomView from './wecom.vue'

const emit = defineEmits(['login', 'close'])


const { isOpLocalEnv } = useEnv()
const registerVisible = ref(false)
const forgetPasswordVisible = ref(false)

const userStore = useUserStore()
const agentStore = useAgentStore()
const enterpriseStore = useEnterpriseStore()

const { sendcode, codeRule, codeCount } = useMobile()

const formRef = ref<FormInstance>()

const isVisible = ref(false)

const isMobile = computed(() => {
  return /^1[3-9]\d{9}$/.test(form.username)
})
const LoginWay = {
  password_login: 'password_login',
  message_login: 'message_login',
  wechat_login: 'wechat_login',
  wecom_login: 'wecom_login',
  bind_mobile: 'bind_mobile',
}

const login_way = ref<keyof typeof LoginWay>(LoginWay.password_login)

const form = reactive({
  username: '',
  password: '',
  verify_code: ''
})

const rules = computed(() => {
  return {
    username: [
       login_way.value === LoginWay.password_login ? getAccountOrEmailRules() : getMobileRules()
    ],
    password: [getPasswordRules()],
    verify_code: [codeRule]
  }
})


const LoginWayList = computed(() => {
  return [
  {
    icon: 'wechat',
    label: 'wechat_login',
    value: LoginWay.wechat_login
  },
  {
    icon: 'wecom',
    label: 'wecom_login',
    value: LoginWay.wecom_login
  },
  {
    icon: 'safe',
    label: 'password_login',
    value: LoginWay.password_login
  },
  {
    icon: 'iphone',
    label: 'message_login',
    value: LoginWay.message_login
    },
  ].filter(item => {
    return isOpLocalEnv.value ? item.value === LoginWay.password_login : true
  }).filter(item => {
    return item.value === LoginWay.wecom_login? enterpriseStore.is_install_wecom : true
  })
})

const open = () => {
  isVisible.value = true
  clearFormValidation()
}

const close = () => {
  isVisible.value = false
  clearFormValidation()
  emit('close')
}

const isSending = ref(false)
const handleGetCode = () => {
  if (!isMobile.value) return
  sendcode(form.username)
}

const accountLogin = () =>{
  return userStore.login({
    username: form.username,
    password: form.password
  })
}

const smsLogin = () =>{
  return commonApi.verifycode({
    mobile: form.username,
    verifycode: form.verify_code,
    type: '1'
  })
}

const handleSubmit = () => {
  return formRef.value?.validate().then(async (valid) => {
    if (!valid) return
    try {
      if (['message_login', 'bind_mobile'].includes(login_way.value)) {
        await commonApi.verifycode({
          mobile: form.username,
          verifycode: form.verify_code,
          type: '1'
        })
        if (login_way.value === 'bind_mobile') {
          await userStore.bind_wechat({
            mobile: form.username,
            verify_code: form.verify_code,
            openid: oauth_data.value.openid,
            unionid: oauth_data.value.unionid,
            nickname: oauth_data.value.nickname
          })
        } else {
          await userStore.sms_login({
            mobile: form.username,
            verify_code: form.verify_code
          })
        }
      } else {
        await accountLogin()
      }
      ElMessage.success(window.$t('status.login_success'))
      agentStore.loadAgentList()
      close()
    } catch (error) {
      const response = error.response || {}
      const data = response.data || {}
      const message = data.message || ''
      if (message.includes('record not found')) {
        // 本地版自动注册
        if (isOpLocalEnv.value) {
          await userStore.register({
            username: form.username,
            password: form.password
          })
          ElMessage.success(window.$t('status.login_success'))
          agentStore.loadAgentList()
        } else {
          ElMessage.warning(window.$t('status.not_found_account'))
        }
      }
      console.log(error)
    }
  })
}

// 添加重置函数
const resetForm = () => {
  form.username = ''
  form.verify_code = ''
  form.password = ''
  clearFormValidation()
}

const oauth_data = ref<any>({})

const handleLoginWay = (value: LoginWay) => {
  login_way.value = value
  resetForm()
}

const handleClose = () => {
  isVisible.value = true
  registerVisible.value = false
  forgetPasswordVisible.value = false
  form.verify_code = ''
  login_way.value = LoginWay.password_login
}

const handleClosePaw = () => {
  forgetPasswordVisible.value = false
  registerVisible.value = true
}

const handleRegister = () => {
  isVisible.value = false
  registerVisible.value = true
  resetForm()
}

const handleForgetPassword = () => {
  isVisible.value = false
  forgetPasswordVisible.value = true
  resetForm()
}

// 添加清除表单验证的方法
const clearFormValidation = () => {
  if (formRef.value) {
    formRef.value.clearValidate()
  }
}
const handleOauthSuccess = async (data: any) => {
  await userStore.wechat_login({ openid: data.openid }).catch((err) => {
    oauth_data.value = data
    login_way.value = LoginWay.bind_mobile
    return Promise.reject(err)
  })
  ElMessage.success(window.$t('status.login_success'))
  agentStore.loadAgentList()
  close()
}

watch(() => codeCount.value, (newVal) => {
  isSending.value = newVal > 0
}, {
  immediate: true
})

defineExpose({
  open,
  close
})
</script>


<template>
  <!-- 登录弹窗 -->
  <el-dialog
    class="login-dialog"
    v-model="isVisible"
    destroy-on-close
    :style="{
      backgroundImage: `url(${$getPublicPath('/images/login_bg.png')})`
    }"
    :close-on-click-modal="false"
    :show-close="login_way !== 'bind_mobile'"
    center
  >
    <!-- 顶栏显示 -->
    <div v-if="login_way === 'bind_mobile'" class="flex justify-center mt-5">
      <h4 class="text-xl text-primary font-semibold w-full flex items-center">
        <ElIcon class="mr-1 cursor-pointer" size="18" color="#4E4F51" @click="handleLoginWay(LoginWay.wechat_login)">
          <ArrowLeft />
        </ElIcon>
        {{ $t('login.bind_mobile') }}
      </h4>
    </div>
    <div v-else class="flex justify-center mt-5">
      <h4 class="text-xl text-[#1D1E1F] font-bold text-center">
        {{ $t('login.' + login_way + '_title') }}
      </h4>
    </div>


    <template v-if="login_way === LoginWay.wechat_login || login_way === LoginWay.wecom_login">
      <WechatView v-if="login_way === LoginWay.wechat_login" height="292px" @oauth-success="handleOauthSuccess" />
      <WecomView v-else height="292px" />

      <div class="text-xs text-[#9A9A9A] text-center">
        {{ $t('login.agree') }}
        <a class="text-[#4F5052] cursor-pointer underline">{{ $t('login.terms_of_service') }}</a>
        {{ $t('action.and') }}
        <a class="text-[#4F5052] cursor-pointer underline">{{ $t('login.privacy_policy') }}</a>
      </div>
    </template>
    <template v-else>
      <!-- 密码登陆的form表单 -->
      <el-form
        v-if="login_way === LoginWay.password_login"
        ref="formRef"
        label-position="top"
        :model="form"
        :rules="rules"
        class="mt-7"
        @keyup.enter="handleSubmit"
      >
        <el-form-item :label="$t('form.account')" prop="username">
          <el-input
            v-if="isOpLocalEnv"
            v-model="form.username"
            v-trim
            size="large"
            class="input_style"
            :placeholder="$t('form.input_placeholder') + $t('form.email')"
            clearable
          />
          <el-input
            v-else
            v-model="form.username"
            v-trim
            size="large"
            class="input_style"
            :placeholder="
              $t('form.input_placeholder') + $t('form.account_alias') + '/' + $t('form.email')
            "
            clearable
          />
        </el-form-item>

        <!-- 密码的输入框 -->
        <el-form-item :label="$t('form.password')" prop="password">
          <el-input
            v-model="form.password"
            v-trim
            show-password
            size="large"
            class="input_style"
            :placeholder="$t('form.input_placeholder') + $t('form.password')"
          >
          </el-input>
        </el-form-item>
      </el-form>

      <!-- 短信登陆的form表单 -->
      <el-form
        ref="formRef"
        v-else-if="login_way === LoginWay.message_login || login_way === LoginWay.bind_mobile"
        label-position="top"
        :model="form"
        :rules="rules"
        class="mt-7"
        @keyup.enter="handleSubmit"
      >
        <el-form-item :label="$t('form.mobile')" prop="username">
          <el-input
            v-model="form.username"
            v-trim
            size="large"
            class="input_style"
            :placeholder="$t('form.input_placeholder') + $t('form.account_alias')"
            clearable
          />
        </el-form-item>

        <el-form-item :label="login_way === LoginWay.bind_mobile ? '' : $t('form.verify_code')" prop="verify_code">
          <el-input
            v-model="form.verify_code"
            v-trim
            size="large"
            class="input_style"
            :placeholder="$t('form.input_placeholder') + $t('form.verify_code')"
          >
            <template #suffix>
              <el-button
                :disabled="isSending"
                @click.stop="handleGetCode"
                class="!bg-[#f5f5f5] border-0 pr-0"
              >
                <div
                  class="text-sm pl-3 border-ltext-[#9A9A9A] cursor-not-allowed"
                  v-if="codeCount"
                >
                  {{ codeCount }}s
                </div>
                <div class="text-sm pl-3 border-l text-[#2563EB]" v-else>
                  {{ $t('form.get_verify_code') }}
                </div>
              </el-button>
            </template>
          </el-input>
        </el-form-item>
      </el-form>

      <div v-if="login_way !== 'bind_mobile'" class="flex items-center justify-between mt-3" >
        <!-- 底部协议 -->
        <div v-if="['password_login', 'message_login', 'wechat_login'].includes(login_way)" class="text-xs text-[#9A9A9A] flex">
          {{ $t('login.agree') }}
          <a class="text-[#4F5052] cursor-pointer underline">{{ $t('login.terms_of_service') }}</a>
          {{ $t('action.and') }}
          <a class="text-[#4F5052] cursor-pointer underline">{{ $t('login.privacy_policy') }}</a>
        </div>
        <div class="flex items-center justify-end">
          <el-button class="mr-1" link type="primary" @click="handleRegister">
            {{ $t('action.user_register') }}
          </el-button>
          <template v-if="!isOpLocalEnv">
            <div class="border-l border-[#E6E8EB] mr-1 h-4"></div>
            <el-button link type="primary" @click="handleForgetPassword">
              {{ $t('action.forget_password') }}
            </el-button>
          </template>
        </div>
      </div>

      <template v-if="login_way === 'bind_mobile'">
        <div class="flex items-center justify-end">
          <ElButton type="primary" :disabled="!form.verify_code && !form.username" @click="handleSubmit" size="large" v-debounce class="min-w-[96px]">
            {{ $t('action.ok') }}
          </ElButton>
        </div>
      </template>
      <el-button v-else type="primary" @click="handleSubmit" size="large" round v-debounce class="w-full mt-5">
        {{ $t('action.login') }}
      </el-button>
    </template>

    <!-- 其他登录方式 -->
    <template v-if="!isOpLocalEnv && login_way !== 'bind_mobile'">
      <ElDivider class="my-8">
        <span class="text-placeholder text-sm">
          {{ $t('login.other_login_way') }}
        </span>
      </ElDivider>
      <div class="flex items-center justify-center mt-5">
        <template v-for="item in LoginWayList" :key="item.value">
          <div
            class="flex-1 flex flex-col items-center justify-center gap-3 cursor-pointer"
            :class="item.value === login_way ? 'text-theme' : 'text-regular'"
            @click="handleLoginWay(item.value)">
            <div class="size-6">
              <svg-icon :name="item.icon" size="24" :stroke="item.value !== 'wecom_login'" />
            </div>
            <p class="text-sm">
              {{ $t(`login.${item.label}`) }}
            </p>
          </div>
        </template>
      </div>
    </template>
  </el-dialog>

  <!-- 注册弹窗 -->
  <el-dialog
    v-model="registerVisible"
    class="login-dialog"
    destroy-on-close
    :style="{
      backgroundImage: `url(${$getPublicPath('/images/login_bg.png')})`
    }"
    :close-on-click-modal="false"
    center
  >
    <Register ref="registerRef" @success="handleClose" @close="handleClose"> </Register>
  </el-dialog>

  <!-- 重置密码弹窗 -->
  <el-dialog
    v-model="forgetPasswordVisible"
    class="login-dialog"
    destroy-on-close
    :style="{
      backgroundImage: `url(${$getPublicPath('/images/login_bg.png')})`
    }"
    :close-on-click-modal="false"
    center
  >
    <ElButton class="absolute top-8 left-8 !text-[#B9BEC2]" type="info" link @click="handleClose">
      <ElIcon class="mr-1">
        <ArrowLeft />
      </ElIcon>
      {{ $t('action.back') }}
    </ElButton>

    <div class="pb-2">
      <h4 class="text-xl text-[#1D1E1F] font-bold text-center pb-8">
        {{ $t('form.reset_password') }}
      </h4>
      <ForgetPassword ref="forgetPasswordRef" @success="handleClose" @close="handleClosePaw" />
    </div>
  </el-dialog>
</template>

<style>
.login-dialog {
  --el-dialog-border-radius: 16px;
  --el-dialog-padding-primary: 32px;
  --el-dialog-width: 500px;
  background: linear-gradient(180deg, #eaf3ff 0%, #ffffff 20%) !important;
  background-size: cover;
}
.login-dialog .el-dialog__header {
  padding: 0;
}
.login-dialog .el-dialog__headerbtn {
  --el-color-info: #939499;
  top: 18px;
  right: 16px;
  font-size: 18px;
}
.input_style {
  --el-input-bg-color: #f5f5f5;
  --el-input-border-color: transparent;
  --el-input-height: 44px;
}
</style>
