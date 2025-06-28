<template>
  <div class="flex flex-col" :class="[hideHeader ? '' : 'h-full overflow-hidden']">
    <MainHeader sticky v-if="!hideHeader">
      <template #before_suffix>
        <div class="text-base text-primary font-bold line-clamp-1 max-md:flex-1 max-md:text-center">{{
          navigationStore.agentNavigation.name || $t('module.agent') }}</div>
      </template>
      <template #after_prefix>
        <!-- <span class="flex items-center gap-1 text-sm cursor-pointer md:hidden" @click="$router.back()">
          <svg-icon name="return" size="18" stroke></svg-icon>
        </span> -->
      </template>
    </MainHeader>
    <div :class="[hideHeader ? '' : 'flex-1 overflow-y-auto']">
      <div :class="[singleRow ? 'w-full pb-6' : 'w-11/12 lg:w-4/5 mx-auto py-6 md:py-8 lg:py-10']">
        <!-- 功能选择标签 -->
        <div v-if="!hideFilter"
          class="flex md:flex-row flex-col-reverse gap-5 items-stretch md:items-center justify-between">
          <el-tabs class="flex-1 index-tabs overflow-hidden" v-model="state.group_id" @tab-change="onTabChange">
            <template v-for="item in agentStore.categorys" :key="item.group_id">
              <el-tab-pane :label="item.group_name" :name="item.group_id"></el-tab-pane>
            </template>
          </el-tabs>
          <div class="w-full md:w-auto">
            <SearchInput class="hidden md:flex" v-model="state.keyword"
              :placeholder="$t('action.search') + $t('module.prompt')" />
            <ElInput v-model="state.keyword" size="large" class="w-full md:hidden el-input--main"
              :placeholder="$t('action.search') + $t('module.agent')" :prefix-icon="Search" />
          </div>
        </div>
        <!-- 功能卡片网格 -->
        <AgentList :loading="loading" :keyword="state.keyword" :list="showAgentList" class="grid grid-cols-1 gap-4"
          :class="[singleRow ? '' : 'sm:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-10 md:gap-5']">
        </AgentList>
      </div>
    </div>
    <MFooter v-if="!hideFooter" />
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import SearchInput from '@/components/Search/index.vue'

import MainHeader from '@/layout/header.vue'
import MFooter from '@/layout/m-footer.vue'
import AgentList from './components/list.vue'

import { useAgentStore } from '@/stores/modules/agent'
import { useNavigationStore } from '@/stores/modules/navigation'


const props = withDefaults(defineProps<{
  hideHeader?: boolean
  hideFilter?: boolean
  singleRow?: boolean
  hideFooter?: boolean
  showLimit?: number
  excludeIds?: (number | string)[]
}>(), {
  hideHeader: false,
  hideFilter: false,
  singleRow: false,
  hideFooter: false,
  excludeIds: () => []
})

const agentStore = useAgentStore()
const navigationStore = useNavigationStore()
const loading = ref(false)

const state: {
  keyword: string
  group_id: number
} = reactive({
  keyword: '',
  group_id: 0
})

const showAgentList = computed(() => {
  let list = state.group_id === 0
    ? agentStore.agentList
    : agentStore.agentList.filter((item) => item.group_id === state.group_id)
  if (props.excludeIds.length) list = list.filter((item) => !props.excludeIds.includes(item.agent_id))
  if (props.showLimit) list = list.slice(0, props.showLimit)
  return list
})

const onTabChange = (group_id: number) => {
  state.group_id = group_id
}

onMounted(() => {
  agentStore.loadCategorys()
  agentStore.loadAgentList()
})
</script>

<style scoped></style>

<style>
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
