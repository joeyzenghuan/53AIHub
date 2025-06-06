<script setup lang="ts">
import { nextTick, reactive, ref } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import History from '@tiptap/extension-history'
import Placeholder from '@tiptap/extension-placeholder'
import Paragraph from '@tiptap/extension-paragraph'
import PromptInput from './input.vue'

import Test from './test/index.ts'
import { formatNormal, stream } from '@/utils/request/helper'

import api from '@/apis'
const emits = defineEmits<{
  (e: 'confirm', text: string): void
}>()

const resultRef = ref()
const visible = ref(false)
const state = reactive({
  type: 'custom',
  prompt: '',
  result: '',
  loading: false,
})

const menulist = ref([
  { type: 'custom', icon: 'magic-stick', title: '自定义', content: '' },
  { type: 'server', icon: 'service', title: '智能客服', content: '<p>创建一个<link value="房地产" defaultValue="房地产"></link>行业的<link value="售后客服" defaultValue="售后客服"></link></p>' },
  { type: 'expert', icon: 'people-safe', title: '专家顾问', content: '<p>创建一个拥有十年经验的<link value="人力资源" defaultValue="人力资源"></link>行业的<link value="专家顾问" defaultValue="专家顾问"></link></p>' },
  { type: 'creator', icon: 'edit', title: '内容创作', content: '<p>创建一个<link value="小红书文案" defaultValue="小红书文案" type="creator"></link>的<link value="编写" defaultValue="编写"></link>专家，目的是<link value="提炼产品卖点，提高市场营销效果" defaultValue="提炼产品卖点，提高市场营销效果"></link></p>' },
])

let controller
const optimize = async (prompt: string) => {
  prompt = prompt.trim()
  if (!prompt)
    return ElMessage.warning('请先填写指令')

  state.loading = true
  controller = new AbortController()
  state.result = ''
  state.type = 'result'
  try {
    await api.console.apps.prompt_optimise({
      prompt,
      prompt_action: 'generate',
    }, {
      hideError: true,
      signal: controller.signal,
      onDownloadProgress: (result) => {
        const list = stream(result)
        const data = formatNormal(list, { answerKey: 'answer', textKey: 'text' })
        state.result = data.answer.replace('```markdown', '').replace('```', '')

        resultRef.value?.scrollToBottom()
      },
    })
  }
  catch (error) {
    console.error(error)
  }
  finally {
    state.loading = false
    controller = null
    state.expect = ''
    state.unexpect = ''
  }
}

function jsonToString(jsonArray) {
  return jsonArray.map((item) => {
    if (item.type === 'paragraph') {
      if (!item.content)
        return ''
      return item.content.map((contentItem) => {
        if (contentItem.type === 'text')
          return contentItem.text
        else if (contentItem.type === 'link')
          return contentItem.attrs.value || contentItem.attrs.defaultValue

        return ''
      }).join('')
    }
    return ''
  }).join('\n')
}
const editor = useEditor({
  content: '',
  extensions: [
    Document,
    Text,
    Paragraph,
    History,
    Test,
    Placeholder.configure({
      placeholder: '创建一个广告文案的编写专家，目的是提炼产品价值，创造营销效果',
    }),
  ],
  onTransaction({
    editor,
  }) {
    const json = editor.getJSON()
    const data = jsonToString(json.content)
    state.prompt = data
  },
  editable: true,
})

const handleExample = (item) => {
  state.type = item.type
  editor.value.commands.setContent(item.content)
}

const handleGenerate = async () => {
  await optimize(state.prompt)
}
const handleClose = () => {
  if (controller)
    controller.abort()

  visible.value = false
}
const handleUse = () => {
  emits('confirm', state.result)
  visible.value = false
}

defineExpose({
  open() {
    state.type = 'custom'
    visible.value = true
    state.result = ''
    nextTick(() => {
      editor.value.commands.setContent('')
    })
  },
})
</script>

<template>
  <el-dialog v-model="visible" title="角色指令自动生成" class="el-dialog--p-0" :close-on-click-modal="false" width="1100px" append-to-body @close="handleClose">
    <div class="h-[450px] flex border-b">
      <div class="flex-1 px-7 py-5">
        <div class="flex-none text-sm text-[#182B50]">
          参考示例
        </div>
        <div class="mt-3 flex items-center gap-2">
          <template v-for="item in menulist" :key="item.type">
            <div
              class="h-8 rounded px-3 flex items-center gap-1 cursor-pointer border"
              :class="[state.type === item.type ? 'border-[#2563EB] text-[#2563EB] bg-[#F4F7FD]' : 'border-[#F3F3F4] text-[#182B50] bg-[#F3F3F4]']"
              @click="handleExample(item)"
            >
              <svg-icon :name="item.icon" width="18px" />
              {{ item.title }}
            </div>
          </template>
        </div>
        <EditorContent
          class="h-[162px] overflow-y-auto rounded border border-[#EBEEF5] mt-3"
          :editor="editor"
        />
        <el-button :disabled="!state.prompt.trim()" :loading="state.loading" class="mt-5" size="large" type="primary" @click="handleGenerate">
          <svg-icon name="magic-stick" width="18px" class="mr-1" />
          智能生成
        </el-button>
      </div>

      <div class="flex-1 px-7 py-5 border-l flex flex-col overflow-hidden">
        <template v-if="state.result || state.loading">
          <div class="flex-none text-sm text-[#182B50]">
            生成的角色指令
          </div>
          <div class="flex-1 border rounded bg-[#F9FAFB] mt-3 flex flex-col overflow-hidden">
            <div class="flex-none h-10 px-5 flex items-center text-sm text-[#182B5099] border-b">
              *用于对 AI 的回复做出一系列指令和约束
            </div>
            <div class="flex-1 overflow-y-auto">
              <PromptInput ref="resultRef" v-model="state.result" word-wrap :disabled="state.loading" :placeholder="state.loading ? '生成中...' : '请输入'" show-line style="height: 100%;" />
            </div>
          </div>
        </template>

        <div v-else class="h-full flex-center">
          <el-empty image="/images/prompt-empty.png" :image-size="110" description="生成后的的角色指令将会显示在这里" />
        </div>
      </div>
    </div>
    <template #footer>
      <div v-if="state.result && !state.loading" class="mt-5">
        <el-button size="large" @click="handleClose">
          取消
        </el-button>
        <el-button
          type="primary"
          size="large"
          @click="handleUse"
        >
          使用
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>
::v-deep(.tiptap) {
  height: 100%;
  padding: 12px;
}
::v-deep(.tiptap p.is-editor-empty:first-child::before) {
  color: #adb5bd;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}

::v-deep(.tiptap.ProseMirror-focused) {
  box-shadow: 0 0 0 1px rgba(37, 99, 235, 1) inset;
  outline: none;
}
</style>
