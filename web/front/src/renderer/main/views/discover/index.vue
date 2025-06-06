<template>
  <div class="flex flex-col h-full overflow-hidden">
    <MainHeader>
      <template #before_suffix>
        <div class="text-base text-primary font-bold line-clamp-1">{{ $t('module.find') }}</div>
      </template>
      <template #after_prefix>
        <div class="flex items-center gap-1 text-sm text-[#666666]">
          <svg-icon name="index"></svg-icon>
          <router-link  :to="{ name: 'Home' }">{{
            $t('common.back_home')
          }}</router-link>
        </div>
      </template>
    </MainHeader>
    <div class="flex-1 overflow-y-auto">
      <div class=" w-11/12 lg:w-4/5 mx-auto py-6 md:py-8 lg:py-10">
        <!-- 功能选择标签 -->
        <div
          class="flex flex-col gap-5 md:flex-row items-start md:items-center justify-between mt-4 md:mt-6"
        >
          <el-tabs
            class="flex-1 index-tabs mb-4 md:mb-0 overflow-hidden"
            v-model="state.group_id"
            @tab-change="onTabChange"
          >
            <template v-for="item in agentStore.categorys" :key="item.group_id">
              <el-tab-pane :label="item.group_name" :name="item.group_id"></el-tab-pane>
            </template>
          </el-tabs>
          <div>
            <el-input
              v-model="state.keyword"
              size="large"
              style="width: 240px"
              :placeholder="$t('action.search') + $t('module.agent')"
              :suffix-icon="Search"
            />
          </div>
        </div>

        <!-- 功能卡片网格 -->
        <TransitionGroup
          name="list"
          tag="div"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-6 md:mt-10"
        >
          <template v-if="loading">
            <div
              v-for="i in 6"
              :key="i"
              class="flex items-start p-4 bg-[#FFF8FF] rounded-lg animate-pulse"
            >
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
            <div class="col-span-full flex flex-col items-center justify-center py-10">
              <el-empty
                :description="$t('common.no_data')"
                :image="$getPublicPath('/images/chat/completion_empty.png')"
              />
            </div>
          </template>
          <template v-else v-for="item in showAgentList" :key="item.agent_id">
            <router-link
              :to="{ name: 'Chat', query: { agent_id: item.agent_id } }"
              class="flex items-start p-4 rounded-lg overflow-hidden bg-cover cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#F8F0FF]"
              :style="{
                backgroundImage: `url(${$getPublicPath('/images/index/card_bg.png')})`
              }"
            >
              <el-image class="flex-none w-[70px] mr-4 rounded-full" :src="item.logo" />
              <div class="flex-1 overflow-hidden">
                <h3 class="text-base font-medium text-primary mb-1 mt-1 line-clamp-1">
                  {{ item.name }}
                </h3>
                <p class="text-sm text-regular  text-opacity-60 line-clamp-2">
                  {{ item.description || '- -' }}
                </p>
                <div class="mt-4 flex items-center justify-between">
                  <div class="flex items-center text-gray-400 text-sm">
                    <div class="size-[14px] flex-center">
                      <svg-icon name="hot"></svg-icon>
                    </div>
                    <span class="ml-1">{{
                      $t('index.use_history', { count: +item.conversation_count || 0 })
                    }}</span>
                  </div>
                </div>
              </div>
            </router-link>
          </template>
        </TransitionGroup>
      </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import MainHeader from '@/layout/main-header.vue'
import { useEnterpriseStore } from '@/stores/modules/enterprise'

import { useAgentStore } from '@/stores/modules/agent'

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
    return state.group_id === 0
      ? agentStore.agentList
      : agentStore.agentList.filter((item) => item.group_id === state.group_id)
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
</script>

<style scoped>
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
