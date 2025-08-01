<template>
  <ElSkeleton animated :loading="loading">
    <template #default>
      <ul class="flex flex-wrap items-center gap-4">
        <label v-if="!hideLabel" class="inline-block text-sm text-regular" :class="[labelPosition === 'top' ? 'w-full -mb-1' : '']">
          {{ label }}:
        </label>
        <span v-if="!subscriptionList.length && !userGroupList.length" class="text-sm text-placeholder">
          {{ emptyText }}
        </span>
        <template v-if="enterpriseStore.is_independent || enterpriseStore.is_industry">
          <li
            v-for="item in subscriptionList"
            :key="item.group_id"
            class="flex items-center gap-1 text-sm"
            :class="[modelValue.includes(item.group_id) ? 'text-primary' : 'hidden']"
          >
            <img
              :src="
                modelValue.includes(item.group_id)
                  ? !/\.png$/.test(item.logo)
                    ? $getPublicPath(`/images/subscription/${item.logo}.png`)
                    : item.logo
                  : $getPublicPath(`/images/subscription/vip-0.png`)
              "
              class="flex-none size-6 rounded-full overflow-auto"
            />
            {{ item.group_name }}
          </li>
        </template>
        <template v-if="userGroupList.length && (enterpriseStore.is_enterprise || enterpriseStore.is_industry)">
          <!-- <ElDivider class="!mx-0" direction="vertical" /> -->
          <template v-if="hasVisibleItems">
            <ElDivider class="!mx-0" direction="vertical" />
          </template>
          <li
            v-for="item in userGroupList"
            :key="item.group_id"
            class="flex items-center gap-1 text-sm"
            :class="modelValue.includes(item.group_id) ? 'text-primary' : 'hidden'"
          >
            <SvgIcon name="user-group" class="flex-none size-6" :class="[modelValue.includes(item.group_id) ? 'text-theme' : 'text-placeholder']" />
            {{ item.group_name }}
          </li>
        </template>
      </ul>
    </template>
    <template #template>
      <div class="flex items-center gap-4">
        <ElSkeletonItem v-for="i in 6" :key="i" class="!w-[80px] !h-[24px]" variant="h1" />
      </div>
    </template>
  </ElSkeleton>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { subscriptionApi } from '@/api/modules/subscription'
import groupApi from '@/api/modules/group'
import { useEnterpriseStore } from '@/stores/modules/enterprise'

const enterpriseStore = useEnterpriseStore()

const props = withDefaults(
  defineProps<{
    modelValue?: (string | number)[]
    label?: string
    labelPosition?: 'left' | 'top'
    hideLabel?: boolean
    emptyText?: string
  }>(),
  {
    modelValue: () => [],
    label: window.$t('authority.use_range'),
    labelPosition: 'left',
    hideLabel: false,
    emptyText: '--'
  }
)

// 计算是否有可见的 subscriptionList 或 userGroupList 项
const hasVisibleItems = computed(() => {
  const hasVisibleSubscriptionItems = subscriptionList.value.some((item) => props.modelValue.includes(item.group_id))
  const hasVisibleUserGroupItems = userGroupList.value.some((item) => props.modelValue.includes(item.group_id))
  return hasVisibleSubscriptionItems && hasVisibleUserGroupItems
})

const loading = ref(false)
const subscriptionList = ref([])
const fetchSubscriptionData = async () => {
  const { list = [] } = await subscriptionApi.list()
  console.log('subscriptionList.value:', subscriptionList.value)
  subscriptionList.value = list
}

const userGroupList = ref([])
const fetchUserGroupList = async () => {
  const { data = [] } = await groupApi.list(4)
  userGroupList.value = data
}

onMounted(async () => {
  loading.value = true
  await Promise.all([fetchSubscriptionData(), fetchUserGroupList()]).finally(() => {
    loading.value = false
  })
})
</script>

<style scoped></style>
