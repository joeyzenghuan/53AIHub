<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useResizeObserver } from '@vueuse/core'

import { useZIndex } from 'element-plus'

const props = withDefaults(defineProps<{
  target?: string
  flex?: boolean
  zIndex?: number
}>(), {
  target: 'body',
  flex: false,
  zIndex: 0,
})

const emits = defineEmits<{
  (e: 'zoom', value: boolean): void
}>()

const { nextZIndex } = useZIndex()

const contentRef = ref<HTMLElement>()
const isopen = ref(false)
const nodeHeight = ref(0)

const containerClasses = computed(() => {
  return {
    'bg-black bg-opacity-25  overflow-y-auto content-container': isopen.value,
    'content-flex': props.flex,
  }
})
const containerStyle = computed(() => {
  return {
    zIndex: props.zIndex ? props.zIndex : nextZIndex(),
  }
})

const handler = () => {
  isopen.value = !isopen.value
  emits('zoom', isopen.value)
}

onMounted(() => {
  useResizeObserver(contentRef, ([entry]) => {
    nodeHeight.value = entry.target.scrollHeight
  })
})
</script>

<template>
  <Teleport :to="target" :disabled="!isopen">
    <div ref="contentRef" :class="[containerClasses, $attrs.class]" :style="containerStyle">
      <slot :isopen="isopen" :handler="handler" />
    </div>
  </Teleport>
  <div v-if="isopen" :style="{ height: `${nodeHeight}px` }" />
</template>

<style scoped>
.content-container {
  position: absolute;
  inset: 0;
  padding: 16px;
  background: rgba(0, 0, 0, 0.25);
}

.content-container:deep(> *) {
  width: 100% !important;
  height: 100% !important;
  background-color: #fff;
  margin-top: 0 !important;
}

.content-flex {
  display: flex;
  overflow: hidden;
  flex: 1;
}

.content-flex:deep(> *) {
  flex: 1;
}
</style>
