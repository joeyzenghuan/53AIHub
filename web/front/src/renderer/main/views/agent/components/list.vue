<template>
  <div name="list" tag="div">
    <template v-if="loading">
      <div v-for="i in 6" :key="i" class="flex items-start p-4 bg-[#FFF8FF] rounded-lg animate-pulse">
        <div class="w-[70px] h-[70px] bg-gray-200 rounded-full mr-4"></div>
        <div class="flex-1">
          <div class="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div class="h-4 bg-gray-200 rounded w-full mb-1"></div>
          <div class="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
          <div class="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    </template>
    <template v-else-if="showList.length === 0">
      <div class="col-span-full flex flex-col items-center justify-center">
        <el-empty :description="$t('agent.no_data')" :image="$getPublicPath('/images/chat/completion_empty.png')" />
      </div>
    </template>
    <template v-else v-for="item in showList" :key="item.agent_id">
      <div
        class="relative flex items-start p-4 rounded-lg overflow-hidden bg-cover cursor-pointer border border-[#ECECEC] hover:shadow-md transition-all duration-300 bg-white"
        v-permission="{
          group_ids: item.user_group_ids,
          onclick: () => {
            router.push({ name: route.path.includes('/index') ? 'HomeChat' : 'Chat', query: { agent_id: item.agent_id } })
          }
        }">
        <el-image class="flex-none size-[50px] mr-4 rounded-full" :src="item.logo" fit="contain" />
        <div class="flex-1 overflow-hidden">
          <h3 class="text-base font-medium mb-1 mt-1 line-clamp-1 text-primary" :title="item.name"
            v-html="item.name.replace(keyword, `<span class='text-theme'>${keyword}</span>`)">
          </h3>
          <p class="text-sm text-opacity-60 line-clamp-2 text-regular" :title="item.description"
            v-html="item.description.replace(keyword, `<span class='text-theme'>${keyword}</span>`)" />
          <div class="mt-3 flex items-center justify-between">
            <div class="flex items-center text-sm text-placeholder">
              <div class="size-[14px] flex-center">
                <svg-icon name="hot"></svg-icon>
              </div>
              <span class="ml-1">
                {{ $t('index.use_history', { count: item.conversation_count || 0 }) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/modules/user'
import { useRouter, useRoute } from 'vue-router'

const props = withDefaults(defineProps<{
  list: Agent.State[]
  loading?: boolean
  keyword?: string
}>(), {
  list: [],
  loading: false,
  keyword: ''
})

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const showList = computed(() => {
  if (!props.keyword) return props.list

  return props.list.filter(item => {
    return item.name.toLowerCase().includes(props.keyword.toLowerCase()) ||
      item.description.toLowerCase().includes(props.keyword.toLowerCase())
  })
})
</script>

<style></style>
