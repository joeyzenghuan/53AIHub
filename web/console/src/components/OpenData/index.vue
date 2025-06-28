<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { ENTERPRISE_SYNC_FROM, type EnterpriseSyncFrom } from '@/constants/enterprise'
import wecomInstance from '@/utils/wecom'

import { useSso } from '@/hooks/useSso'

type Type = 'userName' | 'memberName' | 'wxUserName' | 'departmentName'

const props = withDefaults(defineProps<{
  source?: EnterpriseSyncFrom
  type: Type
  openid?: any
  text?: string
}>(), {
  source: ENTERPRISE_SYNC_FROM.DEFAULT,
  type: 'userName',
  openid: '',
  text: '',
})

const { isSsoSync, loadSyncSetting } = useSso()

const values = computed(() => {
  if (props.openid) {
    const list = props.openid.split(',')
    return props.type === 'departmentName' ? list.filter(item => item > 0) : list
  }

  return []
})

onMounted(async () => {
  await loadSyncSetting()
})

watch([() => props.openid, () => props.source], () => {
  if (isSsoSync.value && props.openid) {
    wecomInstance().then(() => {
      window.WWOpenData.bind(document.querySelector('ww-open-data'))
    })
  }
})
</script>

<template>
  <slot name="prefix" />

  <template v-if="isSsoSync && values.length">
    <template v-for="(value, index) in values" :key="value">
      <ww-open-data :type="type" :openid="value" />
      <template v-if="index !== values.length - 1">
        ,
      </template>
    </template>
  </template>
  <template v-else>
    {{ text }}
  </template>
  <slot name="suffix" />
</template>

<style>

</style>
