<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import DepartmentTree from '../components/department-tree.vue'
import MemberView from './member.vue'

import { getRootDepartmentData } from '@/api/modules/department'
import { ENTERPRISE_SYNC_FROM } from '@/constants/enterprise'

import wecomInstance from '@/utils/wecom'

import { useSso } from '@/hooks/useSso'

const { syncValue, loadSyncSetting } = useSso()

const memberViewRef = ref()

const loading = ref(true)

const organizationData = ref({})

const handleNodeClick = ({ data = {} } = {}) => {
  organizationData.value = data
  memberViewRef.value?.refresh()
}

onMounted(async () => {
  loading.value = true
  await loadSyncSetting()
  if (syncValue.value.value === ENTERPRISE_SYNC_FROM.WECOM)
    wecomInstance()
  organizationData.value = await getRootDepartmentData()

  loading.value = false
})
onUnmounted(() => {
})
</script>

<template>
  <ElContainer v-loading="loading" class="bg-white h-full">
    <ElAside class="border-r border-[#e5e5e5]">
      <DepartmentTree v-if="!loading" :sync-from="syncValue.value" @node-click="handleNodeClick" />
    </ElAside>
    <ElMain class="!p-0">
      <MemberView v-if="!loading" ref="memberViewRef" :department="organizationData" :filter-params="{ keyword: organizationData.nickname }" :sync-from="syncValue.value" />
    </ElMain>
  </ElContainer>
</template>

<style scoped></style>
