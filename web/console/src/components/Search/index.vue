<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

import { debounce } from '@/utils/functions/debounce'

const props = withDefaults(defineProps<{
  placeholder?: string
  size?: string
	disabled?: boolean
}>(), {
	placeholder: 'form_input_placeholder',
  size: 'default',
	disabled: false,
})

const emits = defineEmits<{
	(e: 'input', value: any): void
	(e: 'change', value: any): void
}>()

const inputRef = ref()

const input = ref('')
const searching = ref(false)

const handleFocus = () => {
	if (props.disabled) return
  searching.value = true
  nextTick(() => {
    inputRef.value.focus()
  })
}
const handleBlur = () => {
  if (input.value)
    return
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
  <el-input
    v-if="searching"
    ref="inputRef"
    v-model="input"
    style="max-width: 230px"
    size="default"
    clearable
    :prefix-icon="Search"
    :placeholder="$t(placeholder)"
    class="input-with-search"
		:disabled="disabled"
    @blur="handleBlur"
    @input="onInput"
		@change="onChange"
  />
  <div v-else class="flex items-center gap-1" :class="[disabled ? 'text-[#999] cursor-not-allowed' : 'cursor-pointer text-[#576D9C]']" @click="handleFocus">
    <svg-icon name="search" width="16" />
    <span class="text-sm ">{{ $t('action_search') }}</span>
  </div>
</template>

<style>
.input-with-search  .el-input-group__prepend {
	padding: 0 10px;
	--el-fill-color-light: transparent;
}
.input-with-search  .el-input-group__append {
	padding: 0 12px;
	cursor: pointer;

}
</style>
