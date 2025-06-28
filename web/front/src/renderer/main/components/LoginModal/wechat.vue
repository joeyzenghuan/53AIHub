<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { API_HOST  } from '@/api/host'

// const WECHAT_LOGIN_URL = `https://work.wescrm.com/wechat_oauth_login.html?plain=1&height=280&appid=wxbe904d4182458106&suiteid=53aihub&api=${encodeURIComponent(API_HOST + '/api/saas/wechat/redirect')}`
const WECHAT_LOGIN_URL = `https://work.wescrm.com/wechat_oauth_login.html?plain=1&height=280&appid=wxbe904d4182458106&suiteid=53aihub&api=${encodeURIComponent(API_HOST + '/api/saas/wechat/redirect')}&redirect_url=${encodeURIComponent(location.origin + '/oauth_login.html')}`

const props = withDefaults(defineProps<{
  width?: string
  height?: string
}>(), {
  width: '100%',
  height: '280px'
})

const emits = defineEmits(['oauthSuccess'])

const iframeRef = ref()
const loading = ref(false)

let timer: any = null
onMounted(() => {
  loading.value = true
  timer = setInterval(() => {
    const contentWindow = (iframeRef.value.contentWindow && iframeRef.value.contentWindow[0]) || iframeRef.value.contentWindow
    if (contentWindow) {
      let oauthLoginData = null
      try {
        oauthLoginData = contentWindow.sessionStorage.getItem('oauth_login_data')
        oauthLoginData = JSON.parse(oauthLoginData)
      } catch (error) {
        oauthLoginData = null
      }
      if (oauthLoginData) messageHandler({ data: oauthLoginData })
    }
  }, 2000)
  // window.addEventListener('message', messageHandler)
})
onBeforeUnmount(() => {
  // window.removeEventListener('message', messageHandler)
  clearInterval(timer)
})
const messageHandler = (res: any = {}) => {
  const data = res.data || {}
  const params = data.params || {}
  const from = data.from || params.from || ''
  const action = data.action || params.action || ''
  const state = data.state || params.state || ''
  const openid = data.openid || params.openid || ''
  const nickname = data.nickname || params.nickname || ''
  const unionid = data.unionid || params.unionid || ''
  const access_token = data.access_token || params.access_token || ''
  // if (!['53hub', '53aihub', 'wescrm'].includes(from))
  //   return
  clearInterval(timer)

  if (openid || access_token) {
    emits('oauthSuccess', { openid, nickname, unionid, access_token })
    return
  }
}

const handleLoad = () => {
  loading.value = false
}
</script>

<template>
  <div class="w-full" v-loading="loading">
    <iframe ref="iframeRef" @load="handleLoad" class="-translate-x-1.5 scale-[1] overflow-hidden" :style="{ height, width }" scrolling="no" :src="WECHAT_LOGIN_URL" frameborder="0" />
  </div>
</template>

<style>
</style>