<script setup lang="ts">
import { useBrowserSettingStore } from '@/stores/modules/browser-setting.ts'

const settingStore = useBrowserSettingStore()
</script>

<template>
  <div class="flex items-center justify-between pb-3">
    <div class="text-[#1D1E1F] text-sm font-semibold">通用设置</div>
  </div>
  <div class="h-10 flex items-center justify-between px-4 border rounded-md">
    <div class="text-sm text-[#1D1E1F]">开机自动启动</div>
    <el-switch v-model="settingStore.boot_up_enabled"></el-switch>
  </div>
  <div class="h-10 flex items-center justify-between px-4 border rounded-md mt-2">
    <div class="text-sm text-[#1D1E1F]">设置为默认浏览器</div>
    <el-switch v-model="settingStore.default_browser_enabled"></el-switch>
  </div>
  <div class="flex items-center justify-between py-3 mt-2">
    <div class="text-[#1D1E1F] text-sm font-semibold">默认搜索引擎</div>
  </div>
  <el-select v-model="settingStore.default_search_url" size="large">
    <el-option label="百度" value="https://www.baidu.com/s?wd=_word_"></el-option>
    <el-option label="百度AI" value="https://chat.baidu.com/search?word=_word_"></el-option>
  </el-select>
  <div class="flex items-center justify-between py-3 mt-2">
    <div class="text-[#1D1E1F] text-sm font-semibold">新标签页设置</div>
  </div>

  <el-input
    size="large"
    v-model="settingStore.default_tab_url"
    placeholder="请填写新标签页url"
  ></el-input>
  <!-- <div class="flex flex-col gap-2">
    <div class="h-10 flex items-center px-4 border rounded-md">
      <el-radio class="!mr-0"></el-radio>
      <div class="text-sm text-[#1D1E1F]">打开新标签页</div>
    </div>

    <div class="h-10 flex items-center px-4 border rounded-md">
      <el-radio class="!mr-0"></el-radio>
      <div class="text-sm text-[#1D1E1F]">打开特定网页</div>
    </div>
  </div> -->
</template>

<style scoped></style>
