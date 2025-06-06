<template>
  <div class="lg:w-4/5 py-6 md:py-8 lg:py-10 w-5/6 mx-auto box-border">
    <template v-if="mode === 'index'">
      <template v-if="state.keyword">
        <p class="text-sm md:text-base mt-3 line-clamp-2 text-regular">
          {{ $t('module.agent') }}
        </p>
      </template>
      <template v-else>
        <h2 class="text-xl md:text-2xl font-bold" style="color: var(--el-text-color-primary, #1d1e1f)">
          {{ $t('index.agent_recommend') }}
        </h2>
        <p class="text-sm md:text-base mt-3 line-clamp-2 text-regular">
          {{ $t('index.agent_recommend_desc') }}
        </p>
      </template>
    </template>
    <div v-if="mode !== 'index'" class="flex flex-col gap-5 md:flex-row items-start md:items-center justify-between ">
      <el-tabs class="flex-1 index-tabs mb-4 md:mb-0 overflow-hidden" v-model="state.group_id"
        @tab-change="onTabChange">
        <template v-for="item in agentStore.categorys" :key="item.group_id">
          <el-tab-pane :label="item.group_name" :name="item.group_id"></el-tab-pane>
        </template>
      </el-tabs>
      <div>
        <el-input v-model="state.keyword" size="large" style="width: 268px"
          :placeholder="$t('action.search') + $t('module.agent')" :suffix-icon="Search" />
      </div>
    </div>
    <!-- 功能卡片网格 -->
    <TransitionGroup name="list" tag="div"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-5 md:mt-8">
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
      <template v-else-if="showAgentList.length === 0">
        <div class="col-span-full flex flex-col items-center justify-center">
          <el-empty :description="$t('common.no_data')" :image="$getPublicPath('/images/chat/completion_empty.png')" />
        </div>
      </template>
      <template v-else v-for="item in showAgentList" :key="item.agent_id">
        <!-- :style="{
        backgroundImage: `url(${$getPublicPath('/images/index/card_bg.png')})`
        }" -->
        <router-link :to="{ name: 'Chat', query: { agent_id: item.agent_id } }"
          class="flex items-start p-4 rounded-lg overflow-hidden bg-cover cursor-pointer border border-[#ECECEC] hover:shadow-md transition-all duration-300">
          <el-image class="flex-none size-[50px] mr-4 rounded-full" :src="item.logo" fit="contain" />
          <div class="flex-1 overflow-hidden">
            <h3 class="text-base font-medium mb-1 mt-1 line-clamp-1 text-primary" :title="item.name"
              v-html="item.name.replace(state.keyword, `<span class='text-theme'>${state.keyword}</span>`)">
            </h3>
            <p class="text-sm text-opacity-60 line-clamp-2 text-regular" :title="item.description"
              v-html="item.description.replace(state.keyword, `<span class='text-theme'>${state.keyword}</span>`)" />
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
        </router-link>
      </template>
    </TransitionGroup>
    <router-link v-if="mode === 'index' && !state.keyword"
      class="block w-[240px] h-[40px] leading-[40px] border border-primary box-border text-center text-theme mt-[54px] rounded-[24px] mx-auto hover-bg-primary-light-9 transition-all duration-300"
      :to="{ path: '/index/agent' }">
      {{ $t('action.view_more') }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useAgentStore } from '@/stores/modules/agent'

const props = withDefaults(defineProps<{
  mode?: 'default' | 'index'
}>(), {
  mode: 'default'
})

const agentStore = useAgentStore()
const loading = ref(false)

const state: {
  keyword: string
  group_id: number
} = reactive({
  keyword: '',
  group_id: 0
})

const showAgentList = computed(() => {
  if (!state.keyword) {
    let list = state.group_id === 0
      ? agentStore.agentList
      : agentStore.agentList.filter((item) => item.group_id === state.group_id)
    if (props.mode === 'index') list = list.slice(0, 6)
    return list
  } else {
    const keyword = state.keyword.toLowerCase().trim()
    return agentStore.agentList.filter((item) => {
      const matchKeyword =
        item.name.toLowerCase().includes(keyword) ||
        (item.description && item.description.toLowerCase().includes(keyword))
      return (state.group_id === 0 || item.group_id === state.group_id) && matchKeyword
    })
  }
})

const onTabChange = (group_id: number) => {
  state.group_id = group_id
}

onMounted(() => {
  agentStore.loadCategorys()
  agentStore.loadAgentList()
})

defineExpose({
  search: (keyword: string) => {
    state.keyword = keyword
  }
})
</script>

<style scoped>
.router-link-active {
  @apply ring-2 ring-blue-500;
}
</style>

<style>
@media (max-width: 768px) {
  .index-tabs .el-tabs__nav {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>