<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'
import PromptInput from './input.vue'

import api from '@/apis'
import { formatNormal, stream } from '@/utils/request/helper'

const emits = defineEmits<{
  (e: 'confirm', text: string): void
}>()

const resultRef = ref()
const visible = ref(false)
const state = reactive({
  prompt: '',
  result: '',
  type: '',
  loading: false,
  unexpect: '',
  expect: '',
})

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
      prompt_action: 'optimise',
      unexpect: state.unexpect,
      expect: state.expect,
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

const handleOptimize = async () => {
  await optimize(state.prompt)
}

const handleSuggest = async () => {
  await optimize(state.result || state.prompt)
}

const handleBack = () => {
  state.type = ''
}

const handleResultOptimize = () => {
  const prompt = (state.result || state.prompt).trim()
  if (!prompt)
    return ElMessage.warning('请先填写指令')

  state.type = 'suggestion'
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
  open(prompt = '') {
    state.prompt = prompt
    state.type = ''
    state.result = ''
    state.expect = ''
    state.unexpect = ''
    visible.value = true
  },
})
</script>

<template>
  <el-dialog v-model="visible" title="角色指令自动优化" class="el-dialog--p-0" :close-on-click-modal="false" width="1100px" append-to-body @close="handleClose">
    <div class="h-[450px] flex border-b">
      <div class="flex-1 px-7 py-5 flex flex-col overflow-hidden">
        <div class="flex-none text-sm text-[#182B50]">
          当前：
        </div>
        <div class="flex-1 border rounded bg-[#F9FAFB] mt-3 flex flex-col overflow-hidden">
          <div class="flex-none h-10 px-5 flex items-center text-sm text-[#182B5099] border-b">
            *用于对 AI 的回复做出一系列指令和约束
          </div>
          <div class="flex-1 overflow-y-auto">
            <PromptInput v-model="state.prompt" word-wrap show-line style="height: 100%;" />
          </div>
        </div>
      </div>

      <div class="flex-1 px-7 py-5 border-l flex flex-col overflow-hidden">
        <div v-if="state.type === 'suggestion'">
          <div class="flex items-center gap-2">
            <el-icon @click="handleBack">
              <ArrowLeft />
            </el-icon>
            <span class="text-sm text-[#182B50]">根据调试结果优化：</span>
          </div>
          <el-form label-position="top" class="mt-4">
            <el-form-item label="不符合预期的地方" required>
              <el-input v-model="state.unexpect" placeholder="请输入智能体表现哪里不符合预期" size="large" />
            </el-form-item>
            <el-form-item label="您的预期是什么" required>
              <el-input v-model="state.expect" placeholder="说说您的预期，我来帮您优化" size="large" />
            </el-form-item>
          </el-form>
          <el-button v-debounce :disabled="!(state.unexpect.trim() && state.expect.trim())" size="large" type="primary" @click="handleSuggest">
            开始优化
          </el-button>
        </div>
        <template v-else-if="state.type === 'result'">
          <div class="flex-none text-sm text-[#182B50]">
            优化后：
          </div>
          <div class="flex-1 border rounded bg-[#F9FAFB] mt-3 flex flex-col overflow-hidden">
            <div class="flex-none h-10 px-5 flex items-center text-sm text-[#182B5099] border-b">
              *用于对 AI 的回复做出一系列指令和约束
            </div>
            <div class="flex-1 overflow-hidden">
              <PromptInput ref="resultRef" v-model="state.result" word-wrap :disabled="state.loading" :placeholder="state.loading ? '生成中...' : '请输入'" show-line style="height: 100%;" />
            </div>
          </div>
        </template>

        <div v-else class="h-full flex-center">
          <el-empty image="/images/prompt-empty.png" :image-size="110" description="优化后的角色指令将会显示在这里" />
        </div>
      </div>
    </div>
    <template #footer>
      <div class="flex items-center justify-between mt-5">
        <div>
          <el-button :loading="state.loading" size="large" type="info" plain @click="handleOptimize">
            <svg-icon name="hglt" width="18px" />
            <span class="ml-1">自动优化</span>
          </el-button>
          <el-button :loading="state.loading" size="large" type="info" plain @click="handleResultOptimize">
            <svg-icon name="hglt2" width="18px" />
            <span class="ml-1">根据调试结果优化</span>
          </el-button>
        </div>
        <div v-if="state.result && !state.loading">
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
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>
