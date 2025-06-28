<template>
  <div v-show="mode !== 'index' || !state.keyword || showPromptList.length"
    class="w-11/12 lg:w-4/5 mx-auto py-6 md:py-8 lg:py-10 box-border" :class="mainClass">
    <template v-if="mode === 'index'">
      <template v-if="state.keyword">
        <p class="text-sm md:text-base mt-3 line-clamp-2 text-regular">
          {{ $t('module.prompt') }}
        </p>
      </template>
      <template v-else>
        <h2 class="text-xl md:text-2xl font-bold" style="color: var(--el-text-color-primary, #1d1e1f)">
          {{ $t('index.prompt_recommend') }}
        </h2>
        <p class="text-sm md:text-base mt-3 line-clamp-2 text-regular">
          {{ $t('index.prompt_recommend_desc') }}
        </p>
      </template>
    </template>
    <div v-if="!hideFilter"
      class="flex md:flex-row flex-col-reverse gap-5 items-stretch md:items-center justify-between">
      <div class="flex-1 md:w-0 flex items-center gap-2">
        <ElTabs class="w-full index-tabs md:mb-0 overflow-hidden" v-model="state.group_id" @tab-change="onTabChange">
          <template v-for="item in promptStore.categorys" :key="item.group_id">
            <ElTabPane :label="item.group_name" :name="item.group_id" />
          </template>
        </ElTabs>
        <ElDropdown class="flex-none md:!hidden" @command="handleSortChange">
          <div class="flex items-center gap-1 text-regular">
            <SvgIcon name="sort" stroke />
            <span>{{ $t(`prompt.${sort_type}`) }}</span>
            <ElIcon :size="14" color="#aaa">
              <ArrowDown />
            </ElIcon>
          </div>
          <template #dropdown>
            <ElDropdownMenu>
              <ElDropdownItem v-for="opt in sortOptions" :key="opt.value" :command="opt.value">
                {{ $t(opt.label) }}
              </ElDropdownItem>
            </ElDropdownMenu>
          </template>
        </ElDropdown>
      </div>
      <div class="w-full md:w-auto flex-none flex md:flex-row-reverse items-center gap-2">
        <SearchInput class="flex-none hidden md:flex" v-model="state.keyword"
          :placeholder="$t('action.search') + $t('module.prompt')" />
        <ElInput v-model="state.keyword" size="large" class="w-full md:hidden el-input--main"
          :placeholder="$t('action.search') + $t('module.prompt')" :prefix-icon="Search" />
        <ElDivider class="flex-none !mx-0 !hidden md:!block" direction="vertical" />
        <ElDropdown class="flex-none !hidden md:!block" @command="handleSortChange">
          <div class="flex items-center gap-1 text-regular">
            <SvgIcon name="sort" stroke />
            <span>{{ $t(`prompt.${sort_type}`) }}</span>
            <ElIcon :size="14" color="#aaa">
              <ArrowDown />
            </ElIcon>
          </div>
          <template #dropdown>
            <ElDropdownMenu>
              <ElDropdownItem v-for="opt in sortOptions" :key="opt.value" :command="opt.value">
                {{ $t(opt.label) }}
              </ElDropdownItem>
            </ElDropdownMenu>
          </template>
        </ElDropdown>
      </div>
    </div>
    <!-- 功能卡片网格 -->
    <div :name="transition ? 'list' : ''" tag="div"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-5 md:mt-8"
      :class="[singleRow ? '!mt-0 !grid-cols-1' : '']">
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
      <template v-else-if="showPromptList.length === 0">
        <div class="col-span-full flex flex-col items-center justify-center">
          <ElEmpty :description="$t('common.no_data')" :image="$getPublicPath('/images/chat/completion_empty.png')" />
        </div>
      </template>
      <template v-else v-for="item in showPromptList" :key="item.prompt_id">
        <router-link :to="{
          name: route.path.includes('/index') ? 'HomePromptDetail' : 'PromptDetail',
          params: { prompt_id: item.prompt_id },
        }"
          class="group flex items-start p-4 min-h-[166px] box-border rounded overflow-hidden bg-cover cursor-pointer border-[#EFF1F3] hover:shadow-md transition-all duration-300"
          :style="{
            backgroundImage: `url(${$getPublicPath('/images/index/card_bg_v4.png')})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }">
          <div class="flex-1 overflow-hidden">
            <div class="w-full flex items-center justify-between gap-4">
              <h3 class="text-base font-medium line-clamp-1 text-primary" :title="item.name"
                v-html="item.name.replace(state.keyword, `<span class='text-theme'>${state.keyword}</span>`)">
              </h3>
              <ElButton v-if="(item.group_ids || []).some((id) => (userStore.info.group_ids || []).includes(id))"
                size="small" class="invisible group-hover:visible !px-2" @click.stop="handleCopy($event, item)">
                {{ $t('action.copy') }}
              </ElButton>
            </div>
            <div v-if="item.group_names.length > 0" class="w-full text-sm text-opacity-60 text-regular mt-3 truncate"
              :title="item.group_names.join(' ')">
              <span v-for="group_name in item.group_names" :key="group_name"
                class="px-2 py-1 box-border text-xs text-theme bg-[#ECF1FF] rounded-sm mr-2">
                {{ group_name }}
              </span>
            </div>
            <p class="text-sm text-opacity-60 line-clamp-2 text-placeholder mt-2 min-h-[40px]" :title="item.description"
              v-text="item.description" />
            <!-- <p class="text-sm text-opacity-60 line-clamp-2 text-regular mt-2 min-h-[40px]" :title="item.description"
              v-html="item.description.replace(state.keyword, `<span class='text-theme'>${state.keyword}</span>`)" /> -->
            <div class="mt-3 flex items-center justify-end gap-3 text-xs text-regular">
              <div class="flex items-center gap-1" @click.stop="handleApprove($event, item)">
                <SvgIcon class="size-[18px]" :class="[item.is_liked ? 'text-[#F3AB00]' : '']"
                  :name="item.is_liked ? 'approve-filled' : 'approve'" />
                <span>
                  {{ item.likes || 0 }}
                </span>
              </div>
              <div class="flex items-center gap-1">
                <SvgIcon class="size-[16px]" name="view" />
                <span>
                  {{ item.views || 0 }}
                </span>
              </div>
            </div>
          </div>
        </router-link>
      </template>
    </div>
    <router-link v-if="mode === 'index' && !state.keyword"
      class="block w-[240px] h-[40px] leading-[40px] border border-primary box-border text-center text-theme mt-6 rounded-[24px] mx-auto hover-bg-primary-light-9 transition-all duration-300"
      :to="{ path: '/index/prompt' }">
      {{ $t('action.view_more') }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown, Search } from '@element-plus/icons-vue'
import SearchInput from '@/components/Search/index.vue'

import { reactive, onMounted, computed, ref } from 'vue'
import { usePromptStore } from '@/stores/modules/prompt'
import promptApi from '@/api/modules/prompt'
import { copyToClip } from '@/utils/copy'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/modules/user'

const props = withDefaults(defineProps<{
  mode?: 'default' | 'index' | 'sidebar'
  hideFilter?: boolean
  singleRow?: boolean
  defaultSort?: 'default_sort' | 'likes_sort' | 'views_sort'
  showLimit?: number
  excludeIds?: number[]
  transition?: boolean
  mainClass?: string
}>(), {
  mode: 'default',
  defaultSort: 'default_sort',
  excludeIds: () => [],
  transition: true
})

const route = useRoute()
const promptStore = usePromptStore()
const userStore = useUserStore()
const loading = ref(false)

const sortOptions = [
  {
    label: 'prompt.default_sort',
    value: 'default_sort'
  },
  {
    label: 'prompt.likes_sort',
    value: 'likes_sort'
  },
  {
    label: 'prompt.views_sort',
    value: 'views_sort'
  }
]
const state: {
  keyword: string
  group_id: number
} = reactive({
  keyword: '',
  group_id: 0
})

const showPromptList = computed(() => {
  const keyword = state.keyword.toLowerCase().trim()
  const categorys = promptStore.categorys
  let promptList = promptStore.promptList.map((item = {}) => {
    item.group_ids = item.group_ids || []
    const group_options = categorys.filter((row = {}) => +row.group_id && item.group_ids.includes(row.group_id))
    item.group_names = group_options.map((row = {}) => row.group_name)
    return item
  })
  if (sort_type.value === 'likes_sort') {
    promptList = promptList.sort((a, b) => b.likes - a.likes)
  } else if (sort_type.value === 'views_sort') {
    promptList = promptList.sort((a, b) => b.views - a.views)
  }
  if (state.keyword) {
    promptList = promptList.filter((item) => {
      const matchKeyword = item.name.toLowerCase().includes(keyword)
      return (state.group_id === 0 || (+state.group_id && item.group_ids.includes(state.group_id))) && matchKeyword
    })
  } else {
    promptList = state.group_id === 0
      ? promptList
      : promptList.filter((item) => +state.group_id && item.group_ids.includes(state.group_id))
    if (props.mode === 'index') promptList = promptList.slice(0, props.showLimit || 6)
  }
  if (props.showLimit) promptList = promptList.slice(0, props.showLimit)
  if (props.excludeIds.length) promptList = promptList.filter((item) => !props.excludeIds.includes(item.prompt_id))
  return promptList
})

const sort_type = ref(props.defaultSort)
const handleSortChange = (value: string) => {
  sort_type.value = value
}
const onTabChange = (group_id: number) => {
  state.group_id = group_id
}
const handleApprove = async (e: Event, data: any) => {
  e.preventDefault()
  e.stopPropagation()
  await promptApi.approve({ prompt_id: data.prompt_id })
  data.is_liked = !data.is_liked
  data.likes = data.is_liked ? data.likes + 1 : data.likes - 1
  ElMessage.success(window.$t(data.is_liked ? 'status.approve_success' : 'status.approve_cancel'))
}
const handleCopy = async (e: Event, data: any) => {
  e.preventDefault()
  e.stopPropagation()
  await copyToClip(data.content)
  ElMessage.success(window.$t('common.copied'))
}

onMounted(() => {
  promptStore.loadCategorys()
  promptStore.loadPromptList()
})

defineExpose({
  search: (keyword: string) => {
    state.keyword = keyword
  },
  sort: (type: string) => {
    sort_type.value = type
  }
})
</script>

<style scoped>
.router-link-active {
  @apply ring-2 ring-blue-500;
}
</style>

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