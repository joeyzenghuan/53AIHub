<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
// import Vditor from 'vditor'
// import 'vditor/dist/index.css'
// import { markdownEditor } from './helper'

import { api_host, lib_host } from '@/utils/config'
import loadLib from '@/utils/loadLib'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    height?: string
    maxlength?: number
    showWordLimit?: boolean
    preview?: boolean
    bgColor?: string
    type?: 'full' | 'simple'
  }>(),
  {
    modelValue: '',
    height: '300px',
    bgColor: '#fff',
    type: 'full',
  },
)

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const vditorRef = ref(null)

const loading = ref(false)
const vditor = ref<null>(null)

const getUploadConfig = () => {
  const access_token = localStorage.getItem('access_token') || ''
  return {
    url: `${api_host}/api/upload`,
    multiple: false,
    headers: {
      authorization: `Bearer ${access_token}`,
    },
    max: 15 * 1024 * 1024,
    fieldName: 'file',
    filename: name => name,
    format(files: File[], response: string) {
      const result = JSON.parse(response)
      const data = result.data || {}
      return JSON.stringify({
        msg: '',
        code: 0,
        data: {
          errFiles: [],
          succMap: {
            [`${files[0].name}`]: `${api_host}/api/preview/${data.preview_key || ''}`,
          },
        },
      })
    },
  }
}
const setVditor = async () => {
  if (vditor.value)
    vditor.value.destroy()

  loading.value = true

  await loadLib('vditor')
  const options: any = {
    height: props.height,
    cache: {
      enable: false,
    },
    cdn: `${lib_host}/js/vditor`,
    toolbar: props.type === 'full' ? [
      'undo',
      'redo',
      '|',
      {
        name: 'insert',
        toolbar: [
          'image',
          // 'upload',
          // 'table',
          'link',
          // 'video',
          'code',
          'inline-code',
          'line',
          'insert-before',
          'insert-after',
          // '-',
          // 'echarts',
          // 'math',
          // 'mermaid',
          // 'mindmap',
          // 'mermaid-sequence',
          // 'mermaid-gantt',
        ],
      },
      '|',
      'headings',
      'bold',
      'italic',
      'strike',
      '|',
      'list',
      'ordered-list',
      'outdent',
      'indent',
      '|',
      'quote',
      '|',
      'copy',
      'edit-mode',
      'fullscreen',
    ] : [
      {
        name: 'insert',
        toolbar: [
          'image',
          // 'upload',
          // 'table',
          'link',
          // 'video',
          'code',
          'inline-code',
          'line',
          'insert-before',
          'insert-after',
          // '-',
          // 'echarts',
          // 'math',
          // 'mermaid',
          // 'mindmap',
          // 'mermaid-sequence',
          // 'mermaid-gantt',
        ],
      },
      '|',
      'headings',
      'bold',
      'italic',
      'strike',
      '|',
      'list',
      'ordered-list',
      'quote',
      '|',
      'copy',
      'fullscreen',
    ],
    toolbarConfig: {
      hide: props.preview,
    },
    after: () => {
      // loading.value = false
      vditor.value!.setValue(props.modelValue)
    },
    input: (value: string) => {
      emits('update:modelValue', value)
    },
    blur: (value: string) => {
      emits('update:modelValue', value)
    },
    upload: getUploadConfig(),
    image: {
      accept: 'image/*',
      ...getUploadConfig(),
    },
    video: {
      accept: 'video/*',
      ...getUploadConfig(),
    },
    mode: 'wysiwyg',
    counter: {
      enable: !!props.maxlength,
      max: props.maxlength,
    },
  }
  // if (currentMode.value === 'wysiwyg') {
  //   options.mode = 'wysiwyg'
  // }
  // else if (currentMode.value === 'ir') {
  //   options.mode = 'ir'
  // }
  // else if (currentMode.value === 'sv') {
  //   options.mode = 'sv'
  //   options.preview = {
  //     mode: 'editor',
  //   }
  // }
  options.preview = options.preview || {
    markdown: {
      toc: true,
      mark: true,
      footnotes: true,
      autoSpace: true,
    },
    math: {
      engine: 'MathJax',
      inlineDigit: true,
    },
    actions: [],
  }
  setTimeout(() => {
    vditor.value = new Vditor(vditorRef.value, options)
  }, 100)
}

// 监听外部传入的值变化
watch(
  () => props.modelValue,
  (newValue) => {
    if (vditor.value && newValue !== vditor.value.getValue())
      vditor.value.setValue(newValue)
  },
)

onMounted(() => {
  setVditor()
})

onUnmounted(() => {
  if (vditor.value)
    vditor.value.destroy()
})
</script>

<template>
  <div>
    <div
      ref="vditorRef"
      v-loading="loading"
      class="w-full vditor-custom"
      :class="[props.preview ? 'vditor-preview !border-none !bg-transparent' : '']"
      :style="{ 'height': props.height, '--panel-background-color': props.bgColor }"
    />
  </div>
</template>

<style>
.vditor-custom .vditor-toolbar {
  padding-left: 0 !important;
}
.vditor-custom .vditor-reset {
	padding: 10px 24px !important;
}
.vditor-custom .vditor-toolbar--hide{
  display: none;
}
.vditor-preview .vditor-reset {
	padding: 0 !important;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	/* -webkit-line-clamp: 8; */
}
</style>
