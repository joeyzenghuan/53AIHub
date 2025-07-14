<template>
  <ElDialog
    v-model="visible"
    class="el-dialog--center"
    :title="$t('common.tip')"
    :width="520"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @close="handleClose"
  >
    <div v-if="expireDay > 0" class="text-sm text-[#4F5052] pb-4">
      {{ $t('subscription.expire_time_desc', { group_name, day: expireDay, expire_time: expireTime }) }}
    </div>
    <div v-else class="text-sm text-[#4F5052] pb-4">
      {{ $t('subscription.expired_time_desc', { group_name, expire_time: expireTime }) }}
    </div>
    <template #footer>
      <ElButton class="w-24 h-9" size="large" type="primary" @click="handleConfirm">
        {{ $t('subscription.renew') }}
      </ElButton>
      <ElButton class="w-24h-9" size="large" @click="handleClose">
        {{ $t('common.later') }}
      </ElButton>
    </template>
    <Upgrade ref="upgrade_ref" />
  </ElDialog>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { ElDialog, ElButton } from 'element-plus'

import { useUserStore } from '@/stores/modules/user'
import userApi from '@/api/modules/user'

const Upgrade = defineAsyncComponent(() => import('@/components/Upgrade/index.vue'))

const userStore = useUserStore()

const upgrade_ref = ref<InstanceType<typeof Upgrade>>()

const visible = ref(false)
const group_name = ref('')
const expireDay = ref(0)
const expireTime = ref('')

const open = (data: { group_name: string; day: number; expire_time: string }) => {
  group_name.value = data.group_name
  expireDay.value = data.day
  expireTime.value = data.expire_time
  visible.value = true
}

// 调整
// const
// 直接调接口修改版本
const updateExpireTime = () => {
  // 调接口修改版本
  if (expireDay.value > 0) return
  // 调接口修改版本
  userApi.update_default_subscription(userStore.info.user_id).finally(() => userStore.getUserInfo())
}

const handleConfirm = () => {
  visible.value = false
  upgrade_ref.value.open()
  updateExpireTime()
}

const handleClose = () => {
  updateExpireTime()
  visible.value = false
}

defineExpose({
  open
})
</script>
