<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'

const props = withDefaults(defineProps<{
  list: any[]
  gap?: string | number
}>(), {
  gap: 2,
  list: () => [],
})
const scrollRef = ref()

const showBtn = ref<boolean>(true)

function scroll(targetScrollLeft: number) {
  const duration = 300 // 动画持续时间，单位为毫秒
  const startTime = performance.now()
  const element = scrollRef.value

  function step(timestamp) {
    const elapsedTime = timestamp - startTime
    const progress = Math.min(elapsedTime / duration, 1) // 计算完成度
    element.scrollLeft = easeInOutCubic(progress) * (targetScrollLeft - element.scrollLeft) + element.scrollLeft

    if (progress < 1)
      requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

// 缓动函数，实现动画平滑开始和结束
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

const handleScrollLeft = () => {
  scroll(scrollRef.value.scrollLeft - 200)
}
const handleScrollRight = () => {
  scroll(scrollRef.value.scrollLeft + 200)
}

const onChange = () => {
  nextTick(() => {
    showBtn.value = scrollRef.value.scrollWidth > scrollRef.value.offsetWidth
  })
}

const resize = () => {
  onChange()
}

onMounted(() => {
  window.addEventListener('resize', resize)
})
onUnmounted(() => {
  window.removeEventListener('resize', resize)
})

watch(() => props.list.length, (_) => {
  onChange()
}, { immediate: true })
</script>

<template>
  <div class="flex items-center gap-1">
    <el-icon v-if="showBtn" class="flex-none icon cursor-pointer" @click="handleScrollLeft">
      <ArrowLeft />
    </el-icon>
    <div ref="scrollRef"
      class="flex-1 flex flex-nowrap overflow-x-auto scrollbar--none whitespace-nowrap traslation-all"
      :class="[`gap-${gap}`]">
      <slot />
    </div>
    <el-icon v-if="showBtn" class="flex-none icon cursor-pointer" @click="handleScrollRight">
      <ArrowRight />
    </el-icon>
    <!-- 右箭头 -->
  </div>
</template>

<style scoped></style>
