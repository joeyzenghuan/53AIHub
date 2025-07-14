<template>
  <div
    class="h-full bg-white flex flex-col overflow-y-auto"
    :class="[useCaseFixed && isUseCase ? 'fixed top-0 left-0 right-0 z-[9999]' : 'relative']"
  >
    <template v-if="!isUseCase">
      <MainHeader v-if="!hideMenuHeader" sticky>
        <template #before_suffix>
          <div class="text-base text-primary font-bold line-clamp-1 max-md:flex-1 max-md:text-center">
            {{ detailData.name || $t('module.prompt') }}
          </div>
        </template>
        <template #after_suffix>
          <!-- <div class="flex items-center gap-1 text-sm cursor-pointer md:hidden" @click="$router.back()">
            <svg-icon name="return" size="18" stroke></svg-icon>
          </div> -->
          <ElTooltip :content="$t('chat.usage_guide')">
            <div
              class="h-[26px] px-2 rounded-full items-center justify-center gap-1.5 text-sm text-primary cursor-pointer hover:bg-[#E1E2E3] hidden md:flex"
              @click="isUseCase = true"
            >
              <div class="size-4">
                <svg-icon name="layout-split" size="18"></svg-icon>
              </div>
            </div>
          </ElTooltip>
        </template>
      </MainHeader>
      <section class="w-full max-w-[1280px] py-6 px-3 md:px-8 lg:px-10 mx-auto box-border" :class="mainClass">
        <h1 class="text-2xl md:text-3xl font-semibold text-primary w-full flex items-center justify-between md:justify-start">
          <span>
            {{ detailData.name }}
          </span>
          <ElTooltip :content="$t('chat.usage_guide')">
            <div
              class="h-[26px] px-2 rounded-full flex items-center justify-center gap-1.5 text-sm text-primary cursor-pointer hover:bg-[#E1E2E3] md:hidden"
              @click="isUseCase = true"
            >
              <div class="size-4">
                <svg-icon name="layout-split" size="18"></svg-icon>
              </div>
            </div>
          </ElTooltip>
        </h1>
        <p class="text-placeholder my-4 text-wrap break-words whitespace-pre-wrap" v-text="detailData.description" />
        <AuthTagGroup :model-value="detailData.group_ids" />
        <h2
          v-if="!hideContentTitle"
          class="text-base md:text-xl font-semibold text-primary mt-8 w-full flex items-center justify-between md:justify-start"
        >
          <span>
            {{ $t('prompt.content') }}
          </span>
          <div class="md:hidden">
            <!-- <ElButton class="!border-none h-[36px]" type="primary" plain>{{ $t('action.add') }}</ElButton> -->
            <ElButton
              v-if="(detailData.group_ids || []).some((id) => (userStore.info.group_ids || []).includes(id))"
              v-copy="detailData.content"
              class="h-[36px]"
              type="primary"
            >
              {{ $t('action.copy') }}
            </ElButton>
            <ElButton v-copy="locationHref" class="!bg-[#F9FAFB] h-[36px] !ml-2" plain>
              {{ $t('action.share') }}
            </ElButton>
          </div>
        </h2>
        <section class="w-full mt-4 flex gap-8">
          <div class="flex-1 w-0 max-h-max relative overflow-hidden group">
            <div class="rounded-md bg-[#F9FAFB]">
              <template v-if="(detailData.group_ids || []).some((id) => (userStore.info.group_ids || []).includes(id))">
                <div class="absolute top-4 right-4 z-[2] invisible md:group-hover:visible">
                  <!-- <ElButton class="!border-none h-[36px]" type="primary" plain>{{ $t('action.add') }}</ElButton> -->
                  <ElButton v-copy="detailData.content" class="!bg-[#F9FAFB] h-[36px]" plain>
                    {{ $t('action.copy') }}
                  </ElButton>
                  <ElButton v-copy="locationHref" class="!bg-[#F9FAFB] h-[36px] !ml-2" plain>
                    {{ $t('action.share') }}
                  </ElButton>
                </div>
                <PromptInput :model-value="detailData.content" disabled style="min-height: max-content" show-line />
              </template>
              <div v-else class="relative border rounded">
                <div class="blur-md">
                  <PromptInput :model-value="virtualPrompt" disabled style="min-height: max-content" show-line />
                </div>
                <div class="absolute inset-0"></div>
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 px-5 bg-[#6F7275] rounded-full flex items-center gap-1">
                  <svg-icon name="lock" color="#fff"></svg-icon>
                  <span class="text-sm text-white">{{ $t('prompt.auth_tip') }}</span>
                </div>
              </div>
            </div>

            <template v-if="(detailData.group_ids || []).some((id) => (userStore.info.group_ids || []).includes(id))">
              <el-divider>
                <span class="text-sm text-regular">去使用这个提示词</span>
              </el-divider>
              <div class="flex items-center justify-center gap-4 max-md:flex-wrap">
                <a
                  v-copy="detailData.content"
                  class="w-20 h-16 flex flex-col items-center justify-center gap-2 cursor-pointer"
                  href="https://www.deepseek.com/"
                  target="_blank"
                >
                  <div class="size-8 rounded-full border overflow-hidden flex items-center justify-center">
                    <img src="https://hubapi.53ai.com/api/preview/b351a53c6f65b72728ec428b85e1c1df.png" class="size-6 rounded-full" />
                  </div>
                  <p class="text-primary text-sm">DeepSeek</p>
                </a>
                <a
                  v-copy="detailData.content"
                  class="w-20 h-16 flex flex-col items-center justify-center gap-2 cursor-pointer"
                  href="https://www.doubao.com/"
                  target="_blank"
                >
                  <div class="size-8 rounded-full border overflow-hidden flex items-center justify-center">
                    <img src="https://hubapi.53ai.com/api/preview/d98b75d99fba38975312841a3c85aa72.png" class="size-6 rounded-full" />
                  </div>
                  <p class="text-primary text-sm">豆包</p>
                </a>
                <a
                  v-copy="detailData.content"
                  class="w-20 h-16 flex flex-col items-center justify-center gap-2 cursor-pointer"
                  href="https://yuanbao.tencent.com/"
                  target="_blank"
                >
                  <div class="size-8 rounded-full border overflow-hidden flex items-center justify-center">
                    <img src="https://hubapi.53ai.com/api/preview/433b8834406d66420558b6f093f0fed1.png" class="size-6 rounded-full" />
                  </div>
                  <p class="text-primary text-sm">元宝</p>
                </a>
                <a
                  v-copy="detailData.content"
                  class="w-20 h-16 flex flex-col items-center justify-center gap-2 cursor-pointer"
                  href="https://kimi.moonshot.cn/"
                  target="_blank"
                >
                  <div class="size-8 rounded-full border overflow-hidden flex items-center justify-center">
                    <img src="https://hubapi.53ai.com/api/preview/5e6d9e9c76c4d092cd3576404d7705e0.png" class="size-6 rounded-full" />
                  </div>
                  <p class="text-primary text-sm">Kimi</p>
                </a>
                <a
                  v-copy="detailData.content"
                  class="w-20 h-16 flex flex-col items-center justify-center gap-2 cursor-pointer"
                  href="https://chat.baidu.com"
                  target="_blank"
                >
                  <div class="size-8 rounded-full border overflow-hidden flex items-center justify-center">
                    <img src="https://hubapi.53ai.com/api/preview/b5970a3697479df6b00d73ab827dabb2.png" class="size-6 rounded-full" />
                  </div>
                  <p class="text-primary text-sm">百度AI+</p>
                </a>
                <a
                  v-copy="detailData.content"
                  class="w-20 h-16 flex flex-col items-center justify-center gap-2 cursor-pointer"
                  href="https://chatgpt.com/"
                  target="_blank"
                >
                  <div class="size-8 rounded-full border overflow-hidden flex items-center justify-center">
                    <img src="https://hubapi.53ai.com/api/preview/bcade7d1cebca9273da445ffc8671711.png" class="size-6 rounded-full" />
                  </div>
                  <p class="text-primary text-sm">ChatGPT</p>
                </a>
              </div>
            </template>
          </div>
          <div v-if="showRecommend" class="flex-none w-2/6 box-border relative flex flex-col gap-4">
            <h2 class="flex-none text-base font-semibold text-regular">{{ $t('common.related_prompt') }}</h2>
            <div v-if="detailData.prompt_id" class="flex-1 overflow-y-auto flex flex-col gap-2.5">
              <template v-for="item in relatedPromptList" :key="item.agent_id">
                <router-link
                  class="flex-none h-24 rounded p-4 cursor-pointer group hover:shadow-md transition-all duration-300"
                  :style="{
                    backgroundImage: `url(${$getPublicPath('/images/index/card_bg_v4.png')})`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat'
                  }"
                  :to="{
                    name: route.path.includes('/index') ? 'HomePromptDetail' : 'PromptDetail',
                    params: { prompt_id: item.prompt_id }
                  }"
                >
                  <div class="flex items-center justify-between gap-2">
                    <span class="text-sm text-primary">{{ item.name }}</span>
                    <ElButton
                      v-if="(item.group_ids || []).some((id) => (userStore.info.group_ids || []).includes(id))"
                      v-copy="item.content"
                      size="small"
                      class="invisible group-hover:visible !px-2"
                    >
                      {{ $t('action.copy') }}
                    </ElButton>
                  </div>
                  <div class="text-sm text-regular line-clamp-2 mt-1.5" :title="item.description">
                    {{ item.description || '--' }}
                  </div>
                </router-link>
              </template>
            </div>
          </div>
        </section>
      </section>
    </template>

    <Transition name="slide">
      <div
        v-if="isUseCase"
        class="bg-white overflow-y-auto"
        :class="[useCaseFixed && isUseCase ? '' : 'absolute h-full top-0 left-0 right-0 bottom-0 z-[9999]']"
      >
        <MainHeader sticky hide-user :back="showBack">
          <template #before_suffix>
            <div class="mx-auto text-primary">
              {{ $t('chat.usage_guide') }}
            </div>
          </template>
          <template #after_suffix>
            <ElIcon class="text-regular cursor-pointer font-semibold" size="18" @click="isUseCase = false">
              <Close />
            </ElIcon>
          </template>
        </MainHeader>
        <section class="w-full max-w-[1280px] py-6 px-3 md:px-8 lg:px-10 mx-auto box-border" :class="guideClass">
          <h1 class="text-primary">{{ $t('chat.usage_case') }}</h1>
          <div class="columns-2 gap-5 space-y-5 mt-5 max-md:columns-1">
            <template v-for="(item, index) in useCaseList" :key="index">
              <div class="p-5 bg-[#F7F9FC] rounded relative group cursor-pointer break-inside-avoid">
                <div class="bg-white rounded p-5 relative">
                  <div class="text-sm text-secondary">
                    {{ $t('chat.input') }}
                  </div>
                  <div class="text-sm text-primary break-words mt-4">
                    <x-md-renderer :content="item.input_text" />
                  </div>
                  <div class="absolute right-8 -bottom-9">
                    <svg-icon :size="50" name="arrow-down" color="white" />
                  </div>
                </div>
                <div class="bg-[#E6EEFF] rounded p-5 mt-4">
                  <div class="flex items-center justify-between">
                    <div class="text-sm text-secondary">
                      {{ $t('chat.output') }}
                    </div>
                    <div v-copy="item.output_text" v-tooltip="{ content: $t('action.copy') }">
                      <svg-icon name="copy" color="#4F5052" />
                    </div>
                  </div>
                  <div class="text-sm text-primary break-words whitespace-pre-wrap mt-4">
                    <x-md-renderer :content="item.output_text" />
                  </div>
                </div>
              </div>
            </template>
          </div>
          <ElEmpty
            v-if="useCaseList.length === 0"
            :image-size="92"
            :description="$t('common.no_data')"
            :image="$getPublicPath('/images/chat/completion_empty.png')"
          />
          <h1 class="text-primary mt-8">{{ $t('chat.usage_scene') }}</h1>
          <div class="flex gap-6 py-6 max-md:flex-col max-md:gap-2">
            <template v-for="(item, index) in useSceneList" :key="index">
              <div class="flex-1 px-4 text-center pt-3 pb-10 relative cursor-pointer group">
                <img class="mx-auto max-w-[200px]" :src="item.image" />
                <h6 class="text-base text-primary mt-5 break-words">
                  {{ item.scene }}
                </h6>
                <p class="text-xs text-secondary mt-4 break-words">
                  {{ item.desc }}
                </p>
              </div>
            </template>
          </div>
          <ElEmpty
            v-if="useSceneList.length === 0"
            :image-size="92"
            :description="$t('common.no_data')"
            :image="$getPublicPath('/images/chat/completion_empty.png')"
          />
        </section>
      </div>
    </Transition>
    <MFooter v-if="!hideFooter" />
  </div>
</template>

<script setup lang="ts">
import { Close } from '@element-plus/icons-vue'
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import MainHeader from '@/layout/header.vue'
import MFooter from '@/layout/m-footer.vue'
import PromptInput from '@/components/Prompt/input.vue'
import AuthTagGroup from '@/components/AuthTagGroup/index.vue'

import { usePromptStore } from '@/stores/modules/prompt'
import { useUserStore } from '@/stores/modules/user'
import promptApi from '@/api/modules/prompt'

const locationHref = window.location.href
const route = useRoute()
const promptStore = usePromptStore()
const userStore = useUserStore()

withDefaults(
  defineProps<{
    hideMenuHeader?: boolean
    hideFooter?: boolean
    showRecommend?: boolean
    hideContentTitle?: boolean
    showBack?: boolean
    useCaseFixed?: boolean
    mainClass?: string
    guideClass?: string
  }>(),
  {
    hideMenuHeader: false,
    hideFooter: false,
    showRecommend: false,
    hideContentTitle: false,
    showBack: false,
    useCaseFixed: false
  }
)

const detailData = ref<Prompt.State>({})

const virtualPrompt = ref(`
我是一个虚拟助手，我可以回答用户的问题，也可以生成用户需要的内容。

## 我的能力范围
- 📝 文本创作：撰写文章、报告、邮件、创意文案等
- 🔍 信息分析：数据解读、趋势分析、问题诊断
- 💡 创意思维：头脑风暴、方案设计、创新建议
- 🎯 专业咨询：技术指导、业务建议、学习辅导
- 🌐 多语言支持：中英文翻译、多语言内容创作
- 🤖 代码助手：编程指导、代码审查、技术解答

## 交互方式
请直接告诉我您的需求，我会：
1. 仔细理解您的问题
2. 提供详细且实用的解答
3. 根据需要提供示例或步骤
4. 确保回答的准确性和相关性

## 注意事项
- 我会尽力提供准确信息，但建议您验证重要决策
- 对于专业领域问题，建议咨询相关专家
- 我的知识有时效性，最新信息请以官方渠道为准

## 交互方式
请直接告诉我您的需求，我会：
1. 仔细理解您的问题
2. 提供详细且实用的解答
3. 根据需要提供示例或步骤
4. 确保回答的准确性和相关性

## 注意事项
- 我会尽力提供准确信息，但建议您验证重要决策
- 对于专业领域问题，建议咨询相关专家
- 我的知识有时效性，最新信息请以官方渠道为准

现在，请告诉我您需要什么帮助？
`)
const isUseCase = ref(false)

const useCaseList = computed(() => {
  const use_cases = detailData.value.custom_config.use_cases || []
  return use_cases.filter((item) => item.type === 'case')
})
const useSceneList = computed(() => {
  const use_cases = detailData.value.custom_config.use_cases || []
  return use_cases.filter((item) => item.type === 'scene')
})

const relatedPromptList = computed(() => {
  return promptStore.promptList.filter((item) => item.prompt_id !== detailData.value.prompt_id).slice(0, 4)
})

const fetchPromptDetail = async () => {
  const { prompt_id } = route.params
  const { data = {} } = await promptApi.detail({ prompt_id })
  try {
    data.custom_config = JSON.parse(data.custom_config || '{}')
  } catch (error) {
    data.custom_config = {}
  }
  detailData.value = data
}

onMounted(async () => {
  promptStore.loadCategorys()
  promptStore.loadPromptList()
  fetchPromptDetail()
})

defineExpose({
  detailData,
  isUseCase,
  showUseCase: () => {
    isUseCase.value = true
  },
  hideUseCase: () => {
    isUseCase.value = false
  }
})
</script>

<style scoped>
::v-deep(.cm-gutters) {
  border-right-color: transparent;
  background-color: #f2f3f5 !important;
}

::v-deep(.cm-gutters),
::v-deep(.cm-content) {
  padding: 16px 0;
}

::v-deep(.cm-gutterElement) {
  background-color: transparent !important;
  height: 26px;
  margin-top: 0 !important;
}

::v-deep(.cm-line) {
  padding: 0 16px;
}

::v-deep(.cm-line),
::v-deep(.cm-gutterElement) {
  line-height: 26px;
}

::v-deep(.markdown-body) {
  background-color: transparent;
}
</style>
