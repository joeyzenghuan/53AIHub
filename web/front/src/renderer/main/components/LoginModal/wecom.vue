<template>
  <div :style="{ height, width }" class="flex flex-col justify-center items-center">
    <div class="w-[220px] h-[220px] border relative rounded-lg overflow-hidden">
      <img :src="$getPublicPath('/images/login/wecom_login.png')" alt="" />
      <div class="absolute inset-0 bg-white bg-opacity-90 flex justify-center items-center">
        <ElButton type="danger" @click="handleLogin"> 立即登录 </ElButton>
      </div>
    </div>
    <p class="text-sm text-regular mt-3 text-opacity-60">请使用企业微信扫码登录</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '280px'
  }
)

const handleLogin = () => {
  window.open(
    `https://login.work.weixin.qq.com/wwlogin/sso/login/?login_type=ServiceApp&appid=ww4f0a0a97cee0f030&state=WWLogin&redirect_type=callback&redirect_uri=https%3A%2F%2Fwork.wescrm.com%2F%3Fsuiteid%3D${
      process.env.VITE_GLOB_SUITEID
    }%26redirect_url%3D${encodeURIComponent(encodeURIComponent(window.location.origin))}`
  )
}
</script>

<style>
</style>
