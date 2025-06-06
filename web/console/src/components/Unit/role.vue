<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'

import unit from './index.ts'

const props = withDefaults(defineProps<{
  value: string | number
  plain?: boolean
}>(), {
  value: '',
  plain: false,
})

const name = ref<string>('')

watch(() => props.value, (val) => {
  if (typeof val === 'undefined')
    return

  nextTick(() => {
    unit.getRoleList().then((res) => {
      const role = res.find(item => item.role_id === Number(val))
      name.value = role?.name || ''
    })
  })
}, { immediate: true })
</script>

<template>
  <span v-if="plain">
    {{ name }}
  </span>
  <div v-else class="h-[30px] px-2 inline-flex items-center gap-1 border rounded-sm whitespace-nowrap">
    <svg-icon name="role" width="16px" />
    <span class="text-xs text-[#182B50]">{{ name }}</span>
  </div>
</template>

<style>

</style>
