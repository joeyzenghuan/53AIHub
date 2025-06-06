<script setup lang="ts" name="SvgIcon">
import { computed } from 'vue'

interface SvgProps {
  name: string // 图标的名称 ==> 必传
  prefix?: string // 图标的前缀 ==> 非必传（默认为"icon"）
  width?: string
  height?: string
  color?: string
}

// 接收父组件参数并设置默认值
const props = withDefaults(defineProps<SvgProps>(), {
  prefix: 'icon',
  width: '20px',
  height: '20px',
  color: '',
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg :style="{ width, height, fill: color, stroke: color }" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<style scoped>
svg {
 width: 1em;
 height: 1em;
 overflow: hidden;
 vertical-align: -0.15em;
 fill: currentColor;
}
</style>
