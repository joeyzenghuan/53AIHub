<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

import Sortable from 'sortablejs'

const props = withDefaults(defineProps<{
  modelValue: any[]
  props?: any
  dragBg?: string
  identity?: string
  customSortableId?: string
  forceRender?: boolean
  infiniteScrollImmediate?: boolean
  infiniteScrollDistance?: number
  disabled?: boolean
}>(), {
  dragBg: '#ECF5FF',
  modelValue: () => [],
  identity: 'id',
  props: {
    handle: '.sort-icon',
    animation: 150,
  },
  customSortableId: '',
  forceRender: false,
  infiniteScrollImmediate: false,
  infiniteScrollDistance: 20,
  disabled: false,
})

const emits = defineEmits<{
  (event: 'update:modelValue', data: any): any
  (event: 'change', args: {
    action: 'sort' | 'remove' | 'add'
    value: any
    prevValue?: any
    originSortableId: string
    targetSortableId: string
    originData?: any
    targetData?: any
    originIndex?: number | string
    targetIndex?: number | string
  }): any
  (event: 'start', data: any): any
  (event: 'end', data: any): any
  (event: 'scroll', args: {
    scrollTop: number
  }): any
}>()
const id = `sort_${Math.random().toString(36).substr(2, 9)}`

const list = ref([])
const renderFlag = ref(false)
const sortableId = computed(() => props.customSortableId || id)

onMounted(() => {
  if (!props.disabled)
    initSortable()
})
onUnmounted(() => {
  destroySortable()
})

let _sortableInstance: any = null
let _removing = false
const initSortable = () => {
  const sortableEl = document.querySelector(`#${sortableId.value}`)
  if (!sortableEl)
    return
  _sortableInstance = Sortable.create(sortableEl, {
    onStart: (event = {}) => {
      const { target, oldIndex } = event
      emits('start', event)
      target.children[oldIndex].style.background = props.props.dragBg
    },
    onEnd: (event = {}) => {
      const { from = {}, to = {}, target, newIndex: targetIndex, oldIndex: originIndex } = event
      emits('end', event)
      if (target.children && target.children[targetIndex])
        target.children[targetIndex].style.background = 'transparent'
      if (targetIndex === originIndex)
        return
      if (_removing)
        return _removing = false
      const value = list.value
      const prevValue = JSON.parse(JSON.stringify(value))
      const originData = value.splice(originIndex, 1)[0]
      const targetData = value[targetIndex]
      value.splice(targetIndex, 0, originData)
      emits('update:modelValue', value)
      emits('change', {
        action: 'sort',
        prevValue,
        value,
        originSortableId: from.id,
        targetSortableId: to.id,
        originData,
        targetData,
        originIndex,
        targetIndex,
      })
    },
    onAdd: (event = {}) => {
      const { from = {}, to = {}, target, newIndex: targetIndex, oldIndex: originIndex } = event
      if (target.children && target.children[targetIndex])
        target.children[targetIndex].style.background = 'transparent'
      const value = list.value
      emits('change', {
        action: 'add',
        value,
        originSortableId: from.id,
        targetSortableId: to.id,
        originIndex,
        targetIndex,
      })
    },
    onRemove: (event = {}) => {
      const { from = {}, to = {}, target, newIndex: targetIndex, oldIndex: originIndex } = event
      if (target.children && target.children[targetIndex])
        target.children[targetIndex].style.background = 'transparent'
      const value = list.value
      _removing = true
      emits('change', {
        action: 'remove',
        value,
        originSortableId: from.id,
        targetSortableId: to.id,
        originIndex,
        targetIndex,
      })
    },
    ...props.props,
  })
}
const destroySortable = () => {
  if (_sortableInstance) {
    _sortableInstance.destroy()
 	 	_sortableInstance = null
  }
}
let _scrollTop = 0
const handleScroll = (event) => {
  const sortableEl = document.querySelector(`#${sortableId.value}`)
  if (sortableEl)
    _scrollTop = sortableEl?.scrollTop || 0
  emits('scroll', { scrollTop: _scrollTop })
}

watch(() => props.modelValue, async (val = []) => {
  const { forceRender = false } = props
  if (forceRender) {
    // 强制重新渲染，修复部分移动分组问题
    destroySortable()
    list.value = []
    renderFlag.value = true
    await nextTick()
    renderFlag.value = false
    await nextTick()
    initSortable()
  }
  list.value = val
  if (forceRender) {
    // 强制重新渲染后恢复滚动位置
    await nextTick()
  	const sortableEl = document.querySelector(`#${sortableId.value}`)
    if (sortableEl)
      sortableEl.scrollTop = _scrollTop
  }
}, { immediate: true, deep: true })
</script>

<template>
  <div
    v-if="!renderFlag"
    :id="sortableId"
    v-infinite-scroll="handleScroll"
    :infinite-scroll-immediate="infiniteScrollImmediate"
    :infinite-scroll-distance="infiniteScrollDistance"
  >
    <slot name="header" />
    <template v-for="(item, index) in list" :key="item[identity] || index">
      <slot name="item" :item="item" :index="index" />
    </template>
    <slot name="footer" />
  </div>
</template>

<style>

</style>
