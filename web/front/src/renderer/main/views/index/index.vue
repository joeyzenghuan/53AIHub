<template>
  <div class="relative w-full">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1920px] h-[700px] !max-w-none z-1" :style="{
      backgroundImage: `url(${$getPublicPath('/images/index/card_bg_v2.png')})`,
      backgroundSize: '1920px 700px',
      backgroundPosition: 'center -68px',
      backgroundRepeat: 'no-repeat',
    }" />
    <div class="relative z-2 w-full mt-[110px]">
      <h1 class="mx-auto text-center text-[60px] font-bold"
        v-html="$t('index.banner_title', { name: `<span class='text-[#007AFF]'>AI</span>` })">
      </h1>
      <p class="mx-auto text-center text-xl text-[#5E6881] mt-6">{{ $t('index.banner_desc') }}</p>
      <ElInput v-model="searchValue" :clearable="false"
        class="search-input relative left-1/2 -translate-x-1/2 max-w-[980px] w-[52%] h-[54px] mt-[76px]"
        style="--el-input-border-color: transparent" placeholder="输入您想查找的AI资源" @input="handleSearch">
        <template #prefix>
          <ElIcon class="text-[#939499]">
            <Search />
          </ElIcon>
        </template>
        <template #suffix>
          <ElButton type="primary" size="large" class="h-[36px] w-[94px] rounded-[32px]" @click="handleSearch">
            {{ $t('action.search') }}
          </ElButton>
        </template>
      </ElInput>
      <div class="mx-auto text-center text-base text-[#757880] mt-[42px] flex items-center justify-center gap-3">
        <span>{{ $t('index.hot_search') }}: </span>
        <div class="hover-text-theme cursor-pointer" @click="handleHotSearch('网页抓取')">网页抓取</div>
        <div class="hover-text-theme cursor-pointer" @click="handleHotSearch('文件操作')">文件操作</div>
        <div class="hover-text-theme cursor-pointer" @click="handleHotSearch('邮件发送')">邮件发送</div>
        <div class="hover-text-theme cursor-pointer" @click="handleHotSearch('图片处理')">图片处理</div>
        <div class="hover-text-theme cursor-pointer" @click="handleHotSearch('浏览器自动化')">浏览器自动化</div>
      </div>
      <AgentView mode="index" ref="agentRef" />
      <ToolboxView mode="index" ref="toolboxRef" />
      <div class="w-full h-[100px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import AgentView from './agent.vue'
import ToolboxView from '@/views/desktop/tools/toolbox.vue'

import { ref } from 'vue'

const agentRef = ref<InstanceType<typeof AgentView>>()
const toolboxRef = ref<InstanceType<typeof ToolboxView>>()
const searchValue = ref('')

const handleHotSearch = (keyword: string) => {
  searchValue.value = keyword
  handleSearch()
}

const handleSearch = () => {
  agentRef.value?.search(searchValue.value)
  toolboxRef.value?.search(searchValue.value)
}

</script>

<style scoped>
.search-input {
  /* background: rgba(255, 255, 255, 1); */
  background: transparent;
  box-shadow: 0px 4px 12px rgba(90, 188, 230, 0.12);
}

.search-input::after {
  content: '';
  display: block;
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  background: linear-gradient(90deg, rgba(125, 232, 220, 1) 0%, rgba(102, 150, 255, 1) 100%);
  position: absolute;
  z-index: -1;
  top: -3px;
  left: -3px;
  border-radius: 32px;
}

::v-deep(.search-input .el-input__wrapper) {
  box-shadow: none;
  border-radius: 32px;
}
</style>
