<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'

import { markdownEditor } from './helper'

const props = withDefaults(
  defineProps<{
    modelValue?: string
  }>(),
  {
    modelValue: `# Markdown 示例

## 二级标题
这是一个简单的 Markdown 示例

### 三级标题
- 列表项1
- 列表项2
- 列表项3

**加粗文本** 和 *斜体文本*

[链接示例](https://example.com)

\`\`\`javascript
// 代码块示例
function hello() {
  console.log('Hello World')
}
\`\`\`
`
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const menuRef = ref(null)
const vditor = ref<Vditor | null>(null)
const currentMode = ref('wysiwyg')

const setVditor = () => {
  if (vditor.value) {
    vditor.value.destroy()
  }

  const options = {
    after: () => {
      vditor.value!.setValue(props.modelValue)
    },
    input: (value: string) => {
      emit('update:modelValue', value)
    }
  }
  if (currentMode.value === 'wysiwyg') {
    options.mode = 'wysiwyg'
  } else if (currentMode.value === 'ir') {
    options.mode = 'sv'
    options.preview = {
      mode: 'both'
    }
  } else if (currentMode.value === 'sv') {
    options.mode = 'sv'
    options.preview = {
      mode: 'editor'
    }
  }
  options.preview = options.preview || {}
  options.preview.actions = []
  setTimeout(() => {
    vditor.value = markdownEditor('vditor', options)
  }, 100)
}

// 监听外部传入的值变化
watch(
  () => props.modelValue,
  (newValue) => {
    if (vditor.value && newValue !== vditor.value.getValue()) {
      vditor.value.setValue(newValue)
    }
  }
)

// 切换编辑器模式的函数
const switchMode = (mode: 'wysiwyg' | 'ir' | 'sv') => {
  if (vditor.value && currentMode.value !== mode) {
    currentMode.value = mode
    setVditor()
  }
}

onMounted(() => {
  setVditor()
})

onUnmounted(() => {
  if (vditor.value) {
    vditor.value.destroy()
  }
})
</script>

<template>
  <div class="h-full relative">
    <div
      class="w-full !h-full vditor-custom"
      id="vditor"
      style="--toolbar-background-color: white"
    />

    <div class="absolute right-5 top-1">
      <div class="h-10 flex items-center border rounded px-2" ref="menuRef">
        <div
          class="text-[#4F5052] flex-center gap-2 px-2 cursor-pointer"
          :class="{ 'text-[#1e80ff]': currentMode === 'wysiwyg' }"
          @click="switchMode('wysiwyg')"
        >
          <div class="size-4 flex-center">
            <svg-icon name="edit"></svg-icon>
          </div>
          <span class="text-sm">{{ $t('common.preview') }}</span>
        </div>
        <div
          class="text-[#4F5052] flex-center gap-2 px-2 cursor-pointer border-l"
          :class="{ 'text-[#1e80ff]': currentMode === 'ir' }"
          @click="switchMode('ir')"
        >
          <div class="size-4 flex-center">
            <svg-icon name="layout-split"></svg-icon>
          </div>
          <span class="text-sm">{{ $t('common.split') }}</span>
        </div>
        <div
          class="text-[#4F5052] flex-center gap-2 px-2 cursor-pointer border-l"
          :class="{ 'text-[#1e80ff]': currentMode === 'sv' }"
          @click="switchMode('sv')"
        >
          <div class="size-4 flex-center">
            <svg-icon name="preview" size="16"></svg-icon>
          </div>
          <span class="text-sm">{{ $t('common.code') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.vditor-custom .vditor-toolbar {
  padding-top: 6px;
  padding-bottom: 6px;
  /* height: 54px;*/
}

.vditor-custom-menu .vditor-tooltipped {
  width: auto;
  padding: 0;
}
</style>
