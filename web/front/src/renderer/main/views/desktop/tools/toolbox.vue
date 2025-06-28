<script setup lang="ts">
import { reactive, ref, computed, onMounted } from 'vue'
import { CircleCheckFilled } from '@element-plus/icons-vue'
import { useScroll } from '@/hooks/useScroll'
import Search from '@/components/Search/index.vue'

import { useLinksStore } from '@/stores/modules/links'

const linksStore = useLinksStore()
const { scrollRef, scrollTo, scrollToTop } = useScroll()

const props = withDefaults(defineProps<{
  mode?: 'default' | 'index'
}>(), {
  mode: 'default'
})

const state = reactive({
  group_id: 0,
  keyword: ''
})

const MAX_AGENT_COUNT = 2

const loading = ref(false)
const isFocus = ref(false)
const question = ref('')
const models = ref([
  {
    name: '百度AI+',
    value: 'baiduai+',
    checked: true,
    url: 'https://chat.baidu.com/search?word=_word_'
  },
  {
    name: '纳米搜索',
    value: 'n',
    checked: true,
    url: 'https://www.n.cn/?q=_word_'
  },
  {
    name: '秘塔',
    value: 'metaso',
    checked: false,
    url: 'https://metaso.cn/?q=_word_'
  },
  {
    name: 'Perplexity',
    value: 'perplexity',
    checked: false,
    url: 'https://perplexity.ai/search?q=_word_'
  }
])
const quickOptions = [
  '👨‍💼 上班族预防病自救教程',
  '🍽️ 日报/周报让你头疼？点击领取模板',
  '🤔 遇到地震是该跑还是该躲？',
  '💰 有哪些可以不靠年终奖就能赚钱的门路？',
  '⚡ 针对时间管理的10大实用技巧',
  '🎨 自己做自媒体应该如何快速起步？'
]

const canSend = computed(() => {
  return question.value.trim().length > 0 && models.value.some((item) => item.checked)
})

const categorys = computed(() => {
  const categorysList = props.mode === 'index' ?
    linksStore.categorys.filter(item => item.group_id == 0) : linksStore.categorys
  return categorysList.filter(item => {
    if (item.group_id === 0 && props.mode !== 'index') return true
    let list = linksStore.links.filter(item => item.group_id === item.group_id) || []
    if (props.mode === 'index') {
      list = list.slice(0, 8)
    }
    return !list || list.length === 0 ? false : true
  })
})

const links = computed(() => {
  return linksStore.links.filter(item => {
    if (state.group_id === 0) return true
    return item.group_id === state.group_id
  })
})

const handleSelectModel = (item) => {
  const useModels = models.value.filter((item) => item.checked)
  if (!item.checked && useModels.length >= MAX_AGENT_COUNT) {
    ElMessage.warning(window.$t('toolbox.max_agent_count', { count: MAX_AGENT_COUNT }))
    return
  }

  item.checked = !item.checked
}

const handleSend = async () => {
  const useModels = models.value.filter((item) => item.checked)

  if (window.$isElectron) {
    window.$chat53ai.$win({
      type: 'new-tab',
      data: JSON.stringify({
        title: window.$t('toolbox.name') + '-' + question.value,
        urls: useModels.map((item) => {
          return item.url.replace('_word_', encodeURIComponent(question.value))
        })
      })
    })
  } else {
    useModels.forEach((item) => {
      window.open(item.url.replace('_word_', encodeURIComponent(question.value)))
    })
    // const tab = tabsStore.addTab({
    //   title: 'AI聚合问答-' + question.value,
    //   type: 'multibrowser'
    // })
    // useModels.forEach((item) => {
    //   tabsStore.addChildTab(tab.id, {
    //     defaultUrl: item.url.replace('_word_', encodeURIComponent(question.value))
    //   })
    // })
  }

  question.value = ''
}

const handleSelect = (e) => {
  const group_id = e.props.name
  if (group_id === 0) scrollToTop()
  else scrollTo(`#toolbox_cate_${group_id}`)
}

const handleSearch = () => {
  const trimmedValue = state.keyword.trim().toLowerCase()
  linksStore.links.forEach((item) => {
    item.visible = trimmedValue === '' || item.name.toLowerCase().includes(trimmedValue)
  })
}
const handleAdd = (item) => {
  window.open(item.url, '_blank')
}

onMounted(() => {
  loading.value = true
  linksStore.loadCategorys()
  linksStore.loadLinks()
    .finally(() => {
      loading.value = false
    })
})

defineExpose({
  search: (keyword: string) => {
    state.keyword = keyword
    handleSearch()
  }
})
</script>

<template>
  <template v-if="mode !== 'index' || !state.keyword || categorys.filter((item) => item.visible).length">
    <div class="flex-1 flex flex-col relative overflow-y-auto" v-loading="loading" ref="scrollRef"
      v-if="$isElectron && mode !== 'index'">
      <div class="w-4/6 mx-auto py-8 text-center">
        <h2 class="text-[40px] font-bold text-black">{{ $t('toolbox.title') }}</h2>
        <div class="bg-white rounded-lg p-4 mt-9 border" :class="[isFocus ? 'border-[#0672FF]' : '']">
          <el-input type="textarea" v-model="question" :placeholder="$t('toolbox.input_placeholder')" :rows="5"
            resize="none" style="
              --el-input-text-color: #182b50;
              --el-input-bg-color: transparent;
              --el-border-color: none;
              --el-input-focus-border: none;
              --el-input-hover-border: none;
              --el-input-hover-border-color: none;
              --el-input-focus-border-color: none;
            " @focus="isFocus = true" @blur="isFocus = false" @keyup.enter.exact="handleSend"
            @keyup.shift.enter.exact="() => { }">
          </el-input>
          <div class="flex items-center justify-between mt-4">
            <div class="flex-1 flex items-center gap-3">
              <div v-for="model in models" :key="model.value"
                class="h-9 px-2.5 flex-center gap-2 rounded-full border cursor-pointer min-w-[28px]" :class="[
                  model.checked
                    ? 'bg-[#EBF3FC] text-black border-[#0672FF]'
                    : 'text-[#AAA] bg-[#EBF4F7] border-[#EBF4F7]'
                ]" @click="handleSelectModel(model)">
                <img class="size-[22px] rounded-full"
                  :src="`https://chat.53ai.com/images/toolbox/${model.value}.png`" />
                <div class="flex items-center gap-2 overflow-hidden transition-all duration-300 flex-grow">
                  <span class="text-sm truncate">{{ model.name }}</span>
                  <el-icon color="#0672FF" v-if="model.checked">
                    <CircleCheckFilled />
                  </el-icon>
                </div>
              </div>
            </div>
            <div class="flex-center gap-5">
              <div class="text-[#182B50] text-opacity-40 text-sm">{{ question.length }}/300</div>
              <el-button class="w-8 h-8" type="primary" :disabled="!canSend" @click="handleSend"><svg-icon name="send"
                  size="14" /></el-button>
            </div>
          </div>
        </div>
        <div class="mt-7 flex flex-wrap gap-3 justify-center">
          <el-button v-for="(item, index) in quickOptions" :key="index" class="!border-[#D3EAF2] !text-gray-600 !ml-0"
            @click="question = item">
            {{ item }}
          </el-button>
        </div>
      </div>
      <div class="mt-10 mb-20"></div>
      <div class="flex items-center justify-between w-5/6 mx-auto">
        <el-tabs v-model="state.group_id" class="index-tabs flex-1 overflow-hidden"
          style="--el-tabs-header-height: 36px" @tab-click="handleSelect">
          <el-tab-pane v-for="item in categorys" :key="item.group_name" :label="item.group_name"
            :name="item.group_id" />
        </el-tabs>
        <div>
          <el-input v-model="state.keyword" style="--el-input-inner-height: 36px; width: 268px" :prefix-icon="Search"
            :placeholder="$t('toolbox.search_placeholder')" @input="handleSearch"></el-input>
        </div>
      </div>

      <div class="w-5/6 mx-auto mt-4">
        <template v-for="category in categorys?.filter((category) => category.group_id != 0)" :key="category.group_id">
          <div :id="`toolbox_cate_${category.group_id}`" v-show="category.visible" class="text-secondary text-sm py-4">
            {{ category.group_name }}
          </div>
          <div name="list" tag="div"
            class="grid grid-cols-4 gap-5 mb-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <div v-for="item in linksStore.appMap[category.group_id]" :key="item.key" v-show="item.visible"
              @click="handleAdd(item)"
              class="h-[80px] bg-white rounded px-5 flex items-center gap-2 cursor-pointer border border-[#ECECEC] hover:shadow">
              <ElImage class="size-[40px] rounded-full" fit="contain" lazy :src="item.logo" />
              <div class="flex-1 overflow-hidden">
                <div class="text-sm text-primary font-semibold truncate" :title="item.name">
                  {{ item.name }}
                </div>
                <div class="mt-1 text-xs truncate text-regular" :title="item.description">
                  {{ item.description }}
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="flex-1 flex flex-col overflow-y-auto py-6 md:py-8 lg:py-10" v-loading="loading" v-else>
      <div class=" w-11/12 lg:w-4/5 mx-auto">
        <template v-if="mode === 'index'">
          <template v-if="state.keyword">
            <p class="text-sm md:text-base mt-3 line-clamp-2 text-regular">
              {{ $t('module.toolbox') }}
            </p>
          </template>
          <template v-else>
            <h2 class="text-xl md:text-2xl font-bold" style="color: var(--el-text-color-primary, #1d1e1f)">
              {{ $t('index.toolbox_recommend') }}
            </h2>
            <p class="text-sm md:text-base mt-3 line-clamp-2 text-regular">
              {{ $t('index.toolbox_recommend_desc') }}
            </p>
          </template>
        </template>
        <div v-else class="flex md:flex-row flex-col-reverse gap-5 items-stretch md:items-center justify-between">
          <el-tabs v-model="state.group_id" class="index-tabs flex-1 overflow-hidden"
            style="--el-tabs-header-height: 36px" @tab-click="handleSelect">
            <el-tab-pane v-for="item in categorys" :key="item.group_name" :label="item.group_name"
              :name="item.group_id" />
          </el-tabs>
          <div>
            <Search v-model="state.keyword" :placeholder="$t('action.search') + $t('module.prompt')"
              @input="handleSearch" />
            <!-- <el-input v-model="state.keyword" size="large" class="w-full md:w-[240px] el-input--main"
              :prefix-icon="Search" :placeholder="$t('toolbox.search_placeholder')" @input="handleSearch"></el-input> -->
          </div>
        </div>

        <div>
          <div name="list" tag="div"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-6 md:mt-10"
            :class="[mode === 'index' ? 'mt-7' : '']">
            <div v-if="!links.filter(item => item.visible).length"
              class="col-span-full flex flex-col items-center justify-center">
              <el-empty :description="$t('common.no_data')"
                :image="$getPublicPath('/images/chat/completion_empty.png')" />
            </div>
            <div v-for="item in links" :key="item.id" v-show="item.visible" @click="handleAdd(item)"
              class="min-h-[80px] bg-white rounded px-5 py-4 flex items-center gap-2 cursor-pointer border border-[#ECECEC] hover:shadow">
              <ElImage class="size-[50px] rounded-full" fit="contain" lazy :src="item.logo" />
              <div class="flex-1 overflow-hidden">
                <div class="text-base font-medium text-primary mb-1 mt-1 line-clamp-1" :title="item.name"
                  v-html="item.name.replace(state.keyword, `<span class='text-theme'>${state.keyword}</span>`)" />
                <div class="text-sm text-regular text-opacity-60 line-clamp-2" :title="item.description">
                  {{ item.description }}
                </div>
              </div>
            </div>
          </div>
          <router-link v-if="mode === 'index' && !state.keyword"
            class="block w-[240px] h-[40px] leading-[40px] border border-primary box-border text-center text-theme mt-[54px] rounded-[24px] mx-auto hover-bg-primary-light-9 transition-all duration-300"
            :to="{ path: '/index/toolbox' }">
            {{ $t('action.view_more') }}
          </router-link>
        </div>
      </div>
    </div>
  </template>
</template>

<style scoped>
.tabs :deep(.el-tabs__header) {
  margin: 0;
}

.tabs :deep(.el-tabs__nav-wrap) {
  margin-bottom: 0;
}

.tabs :deep(.el-tabs__nav-wrap::after) {
  display: none;
}

.tabs :deep(.el-tabs__nav) {
  gap: 10px;
}

.tabs :deep(.el-tabs__item) {
  font-size: 16px;
  /* color: #000000; */
  text-align: center;
  padding: 0 16px !important;
  /* background-color: #fff; */
  border: 1px solid #ebf1f2;
}

.tabs :deep(.el-tabs__item.is-active) {
  color: #fff;
  background-color: var(--el-color-primary);
  border-color: var(--el-color-primary);
}

.tabs :deep(.el-tabs__active-bar) {
  display: none;
}

.tabs :deep(.el-tabs__nav-next),
.tabs :deep(.el-tabs__nav-prev) {
  line-height: 36px;
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
