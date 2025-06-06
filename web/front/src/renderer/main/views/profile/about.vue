<script setup lang="ts">
import { ref, onMounted } from 'vue'

const version = ref('')
const handleCheck = () => {
  window.$chat53ai.$updater({ type: 'check' }).then((res) => {
    if (!res) {
      ElMessage.success(window.$t('updater.noUpdate'))
    }
  })
}

onMounted(() => {
  window.$chat53ai.$updater({ type: 'version' }).then((res) => {
    version.value = res
  })
})
</script>

<template>
  <div class="border h-[310px] rounded-md flex-center flex-col gap-3">
    <img class="w-[68px]" src="https://chat.53ai.com/images/logo-square.png" alt="" />
    <h2 class="text-base text-[#1D1E1F]">53AI 魔法菜单</h2>
    <p class="text-sm text-[#9A9A9A]">{{ $t('updater.currentVersion', { version }) }}</p>
    <el-button type="primary" @click="handleCheck">{{ $t('updater.checkUpdate') }}</el-button>
  </div>
</template>

<style scoped></style>
