<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  message: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="flex items-start justify-end mb-4 group">
    <!-- 消息内容 -->
    <div class="max-w-[100%] text-right">
      <!-- header 插槽 -->
      <slot name="header"></slot>

      <!-- 气泡 -->
      <slot name="content">
        <div
          class="bg-[#FFFFFF] text-base text-primary rounded-xl p-4 shadow text-left break-words whitespace-pre-wrap">
          <p>{{ message }}</p>
        </div>
      </slot>

      <!-- footer 插槽 -->

      <div class="flex items-center gap-3 mt-2 invisible group-hover:visible">
        <slot name="footer"></slot>
      </div>
    </div>

    <!-- 头像 -->
    <!-- <div class="flex-shrink-0 ml-3">
      <div class="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white" v-if="!avatar">
        <span>用户</span>
      </div>
      <img v-else :src="avatar" alt="Avatar" class="w-8 h-8 rounded-full" />
    </div> -->
  </div>
</template>

<style scoped>
/* 可以添加额外的自定义样式 */
</style>
