<script setup lang="ts">
import { FolderRemove, UserFilled } from '@element-plus/icons-vue'
import { nextTick, ref, watch } from 'vue'

import unit from './index.ts'

import { useUserStore } from '@/stores'

const props = withDefaults(defineProps<{
  type?: 'department' | 'member' | 'user' | 'wxUser'
  value: string | number
  plain?: boolean
}>(), {
  type: 'member',
  value: '',
  plain: false,
})
const userStore = useUserStore()

const name = ref<string>('')

watch(() => props.value, (val) => {
  if (typeof val === 'undefined')
    return

  nextTick(() => {
    if (props.type === 'department') {
      if (Number(props.value) === 0)
        name.value = userStore.enteriseinfo.abbreviation || userStore.enteriseinfo.name
    }
		else if (props.type === 'member') {
      unit.getAllData()
				.then((memberlist) => {
          const member = memberlist.find(item => item.id === Number(props.value))
          name.value = member ? member.name : '--'
        })
    }
    else if (['user', 'wxUser'].includes(props.type)) {
      unit.getAllData()
        .then((memberlist) => {
          const member = memberlist.find(item => item.wxuid === Number(props.value))
          name.value = (member && member.wxuid) ? member.name : '--'
        })
    }
  })
}, { immediate: true })
</script>

<template>
  <span v-if="plain">
    {{ name }}
  </span>
  <div v-else class="h-[30px] px-2 inline-flex items-center border rounded-sm whitespace-nowrap">
    <el-icon class="mr-2" size="16" color="#768096">
      <UserFilled v-if="['member', 'user', 'wxUser'].includes(type)" />
      <FolderRemove v-else />
    </el-icon>
    <span class="text-xs text-[#182B50]">{{ name }}</span>
  </div>
</template>

<style>

</style>
