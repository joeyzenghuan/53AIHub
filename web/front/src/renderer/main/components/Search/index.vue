<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

import { debounce } from '@/utils/functions/debounce'

const props = withDefaults(
  defineProps<{
    placeholder?: string
    size?: string
  }>(),
  {
    placeholder: '',
    size: 'large'
  }
)

const emits = defineEmits<{
  (e: 'input', value: any): void
  (e: 'change', value: any): void
}>()

const inputRef = ref()

const input = ref('')
const searching = ref(false)

const handleFocus = () => {
  searching.value = true
  nextTick(() => {
    inputRef.value.focus()
  })
}
const handleBlur = () => {
  if (input.value) return
  searching.value = false
}

const onInput = debounce(() => {
  emits('input', input.value)
}, 600)
const onChange = debounce(() => {
  emits('change', input.value)
}, 0)
</script>

<template>
  <ElInput
    v-if="searching"
    ref="inputRef"
    v-model="input"
    style="max-width: 230px"
    :size="size"
    clearable
    :prefix-icon="Search"
    :placeholder="placeholder"
    class="input-with-search"
    @blur="handleBlur"
    @input="onInput"
    @change="onChange"
  />
  <div
    v-else
    class="flex items-center gap-1 cursor-pointer text-[#576D9C] h-[40px]"
    @click="handleFocus"
  >
    <SvgIcon name="search" width="16" />
    <span class="text-sm">{{ $t('action.search') }}</span>
  </div>
</template>

<style>
.input-with-search .el-input-group__prepend {
  padding: 0 10px;

  --el-fill-color-light: transparent;
}

.input-with-search .el-input-group__append {
  padding: 0 12px;
  cursor: pointer;
}
</style>
