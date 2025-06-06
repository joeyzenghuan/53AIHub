<script setup lang="ts">
import { SuccessFilled } from '@element-plus/icons-vue'
import QrcodeVue from 'qrcode.vue'

import { ref, inject, nextTick, onUnmounted } from 'vue'
import { subscriptionApi, setOrderCache } from '@/api/modules/subscription'
import md5 from '@/utils/md5'
import { useUserStore } from '@/stores/modules/user'

const emit = defineEmits(['success'])

const userStore = useUserStore()

const active_subscription_info = inject('active_subscription_info')
const active_time_info = inject('active_time_info')
const active_payment = inject('active_payment')

const visible = ref(false)
const loading = ref(false)
const pay_url = ref('')
const success_visible = ref(false)
const order_info = ref({})

onUnmounted(() => {
  clearOrderStatusTimer()
})

function getOrderParams() {
  return {
    user_id: userStore.info.user_id,
    nickname: userStore.info.nickname,
    subscription_id: active_subscription_info.value.group_id,
    subscription_name: active_subscription_info.value.group_name,
    pay_type: active_payment.value,
    amount: Math.round(Number(active_time_info.value.amount || 0).toFixed(2) * 10000) / 100,
    currency: active_time_info.value.currency,
    duration: 1,
    time_unit: active_time_info.value.time_unit,
  }
}
async function open() {
  pay_url.value = ''
  visible.value = true
  order_info.value = await subscriptionApi.createOrder({
    params: getOrderParams()
  })
  await nextTick()
  queryOrderStatus()
  pay_url.value = order_info.value.code_url
  loading.value = false
}
function close() {
  visible.value = false
  clearOrderStatusTimer()
}
let timer = null
function queryOrderStatus() {
  getOrderStatus()
  clearOrderStatusTimer()
  timer = setInterval(() => {
    getOrderStatus()
  }, 5000)
}
function clearOrderStatusTimer() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}
function getOrderStatus() {
  return subscriptionApi.getOrderStatus({ order_id: order_info.value.payment_order_id }).then((data) => {
    // NOTPAY or SUCCESS
    if (data.originalStatus === 'SUCCESS') {
      setOrderCache({ key: md5(JSON.stringify(getOrderParams())), value: {} })
      clearOrderStatusTimer()
      success_visible.value = true
    }
  })
}
function paySuccess() {
  success_visible.value = false
  close()
  emit('success')
}

defineExpose({
  open,
  close
})
</script>

<template>
  <div>
    <ElDialog header-class="!px-5 !py-3" footer-class="!hidden" append-to-body destroy-on-close width="640px"
      :title="$t('subscription.order_title')" :close-on-click-modal="false" v-model="visible" @closed="close">
      <div class="flex flex-col items-center justify-center" v-loading="loading">
        <h4 class="text-sm text-[#4F5052]">{{ $t('subscription.pay_amount') }}</h4>
        <div class="mt-2 text-2xl font-bold text-[#3664EF]">
          <span class="text-base mr-1">{{ active_time_info.currency_symbol || '￥' }}</span>
          <span>{{ Number(active_time_info.amount || 0).toFixed(2) }}</span>
        </div>
        <div class="mt-3 w-[200px] h-[200px] rounded-lg flex items-center justify-center">
          <QrcodeVue ref="qrcode_ref" v-if="pay_url" :value="pay_url" :size="180" level="H" />
        </div>
        <div class="mt-3 text-lg text-[#000]">
          {{ $t('subscription.pay_by_wechat') }}
        </div>
        <div class="mt-2 text-xs text-[#666666]"
          v-html="$t('subscription.pay_policy', { policy: `<a style='color: #2F74FF;' href='#' target='_blank'>《隐私政策协议》</a>` })" />
      </div>
      <ElButton class="relative mt-8 mb-6 left-1/2 -translate-x-1/2 !px-8 !bg-[#F6F7F8] !text-[#333]" type="info" plain
        size="large" @click="close">{{
          $t('action.cancel') }}
      </ElButton>
    </ElDialog>
    <ElDialog center append-to-body destroy-on-close width="400px" :close-on-click-modal="false"
      v-model="success_visible" @closed="paySuccess">
      <div class="mt-8 flex flex-col items-center justify-center gap-4">
        <ElIcon size="58" color="#3ABA52">
          <SuccessFilled />
        </ElIcon>
        <span class="text-2xl text-[#000]">{{ $t('subscription.pay_success') }}</span>
      </div>
      <template #footer>
        <ElButton class="mt-8 mb-6 !px-8" type="primary" size="large" @click="paySuccess">
          {{ $t('action.ok_v2') }}
        </ElButton>
      </template>
    </ElDialog>
  </div>
</template>

<style scoped></style>
