<script setup lang="ts" name="SvgIcon">
import { computed } from 'vue'

interface SvgProps {
  name: string // 图标的名称 ==> 必传
  color?: string
  size?: number | string
}

// 接收父组件参数并设置默认值
const props = withDefaults(defineProps<SvgProps>(), {
  name: '',
  size: 16
})

const symbolId = computed(() => `#icon-${props.name}`)
</script>

<template>
  <svg
    :style="{ width: size + 'px', height: size + 'px' }"
    :class="{ 'custom-color': color }"
    aria-hidden="true"
  >
    <use :xlink:href="symbolId" />
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

.custom-color {
  fill: v-bind(color);
  stroke: v-bind(color);
}
</style>
