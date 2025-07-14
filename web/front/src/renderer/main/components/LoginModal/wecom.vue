<template>
  <div :style="{ height, width }" class="flex flex-col justify-center items-center">
    <div class="w-[220px] h-[220px] border relative rounded-lg overflow-hidden">
      <img :src="$getPublicPath('/images/login/wecom_login.png')" alt="" />
      <div class="absolute inset-0 bg-white bg-opacity-90 flex justify-center items-center">
        <ElButton type="danger" @click="handleLogin"> {{ $t('login.immediate_login') }} </ElButton>
      </div>
    </div>
    <p class="text-sm text-regular mt-3 text-opacity-60">{{ $t('login.login_by_wecom') }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useBasicLayout } from '@/hooks/useBasicLayout'

const { isInMobile } = useBasicLayout()

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
  const redirect_url = encodeURIComponent(
    encodeURIComponent(`${window.location.origin}/?login_way=wecom_login`)
  )
  if (isInMobile.value) {
    window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize'
      .concat(`?appid=${process.env.VITE_GLOB_SUITEID}`)
      .concat('&response_type=code')
      .concat('&scope=snsapi_base')
      .concat('&state=1')
      .concat('#wechat_redirect')
      .concat(
        '&redirect_uri=' +
          `https%3A%2F%2Fhubapi.53ai.com%2Fapi%2Fsaas%2Fwecom%2Fcallback%2Flogin%3Fsuiteid%3D${process.env.VITE_GLOB_SUITEID}%26redirect_url%3D${redirect_url}`
      )
  } else {
    window.location.href = 'https://login.work.weixin.qq.com/wwlogin/sso/login/'
      .concat('?login_type=ServiceApp')
      .concat('&appid=ww4f0a0a97cee0f030')
      .concat('&state=WWLogin')
      .concat('&redirect_type=callback')
      .concat(
        `&redirect_uri=https%3A%2F%2Fwork.wescrm.com%2F%3Fsuiteid%3D${process.env.VITE_GLOB_SUITEID}%26redirect_url%3D${redirect_url}`
      )
  }
}
</script>

<style></style>
