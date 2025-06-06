<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const props = withDefaults(defineProps<{
  back?: boolean
  title?: string
}>(), {
  back: false,
  title: '',
})
const router = useRouter()
const handleBack = () => {
  const back = window.history.state.back
  if (back) {
    router.go(-1)
  }
  else {
    // 如果没有上一页，则返回到一级目录
    router.push('/')
  }
}
</script>

<template>
  <div class="flex-none flex items-center justify-between gap-3">
    <div class="flex-1 flex items-center gap-3">
      <div v-if="back" class="w-7 h-7 flex-center cursor-pointer" @click="handleBack">
        <el-icon size="18">
          <ArrowLeft />
        </el-icon>
      </div>
      <h2 class="text-[26px] text-[#1D1E1F] font-semibold">
        {{ title }}
      </h2>
    </div>
    <slot name="right" />
  </div>
</template>

<style scoped>

</style>
