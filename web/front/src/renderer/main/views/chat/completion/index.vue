<template>
  <div class="h-full bg-[#F5F6F7] flex flex-col">
    <div class="flex-none h-14 px-4 bg-white flex items-center gap-2">
      <div class="size-6 rounded-md flex-center cursor-pointer hover:bg-[#ECEDEE]">
        <el-icon><ArrowLeft /></el-icon>
      </div>
      <h2 class="text-base text-[#1D1E1F]">竞品分析</h2>
    </div>
    <div class="flex-1 flex flex-col md:flex-row gap-3 p-3 overflow-hidden">
      <div
        class="w-full lg:w-2/5 md:w-2/5 h-[auto] md:h-full bg-white rounded flex flex-col mb-3 md:mb-0"
      >
        <h3 class="flex-none h-14 flex items-center px-4 md:px-7 text-base text-[#1D1E1F] border-b">
          {{ $t('chat.input') }}
        </h3>
        <div class="flex-1 p-4 md:p-7 overflow-y-auto">
          <el-form class="completion-form" label-position="top" require-asterisk-position="right">
            <el-form-item label="123" required>
              <el-input size="large"></el-input>
            </el-form-item>
            <el-form-item label="123" required>
              <el-input size="large"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="border-t px-4 md:px-7 py-4 md:py-5">
          <el-button class="w-full" type="primary">{{ $t('chat.start_generate') }}</el-button>
        </div>
      </div>
      <div class="flex-1 h-[500px] md:h-full bg-white rounded relative">
        <div class="absolute right-2 h-14 flex items-center z-10">
          <div
            class="px-2 h-9 rounded flex-center gap-1 text-sm text-[#1D1E1F] cursor-pointer hover:bg-[#ECEDEE]"
          >
            <el-icon><CopyDocument /></el-icon>
            {{ $t('action.copy') }}
          </div>
          <div
            class="px-2 h-9 rounded flex-center gap-1 text-sm text-[#1D1E1F] cursor-pointer hover:bg-[#ECEDEE]"
          >
            <el-icon><Download /></el-icon>
            {{ $t('common.download') }}
          </div>
        </div>
        <el-tabs class="completion-tabs">
          <el-tab-pane :label="$t('chat.output')">
            <!-- 输出 -->
            <el-empty
              class="h-full"
              :image="$getPublicPath('/images/chat/completion_empty.png')"
              :description="$t('chat.completion_empty_desc')"
            ></el-empty>
          </el-tab-pane>
          <el-tab-pane :label="$t('chat.usage_guide')" lazy>
            <Helper></Helper>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { ArrowLeft, Download, CopyDocument } from '@element-plus/icons-vue'

const Helper = defineAsyncComponent(() => import('../helper.vue'))
</script>

<style>
.completion-form .el-form-item__label {
  text-indent: 12px;
  position: relative;
}

.completion-form .el-form-item__label::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 16px;
  background: #2563eb;
}

.completion-tabs {
  --el-tabs-header-height: 56px;
  --el-font-size-base: 16px;

  height: 100%;
}

.completion-tabs .el-tabs__header {
  margin-bottom: 0;
}

.completion-tabs .el-tab-pane {
  height: 100%;
}

.completion-tabs .el-tabs__nav-scroll {
  padding: 0 20px;
}

.completion-tabs .el-tabs__nav-wrap::after {
  height: 1px;
}
</style>
