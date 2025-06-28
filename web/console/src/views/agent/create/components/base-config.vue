<script setup lang="ts">
import { onMounted } from 'vue'
import { Delete } from '@element-plus/icons-vue'
import { useAgentFormStore } from '../store'
import MarkdownEditor from '@/components/Markdown/editor.vue'

const MAX_QUESTION_LENGTH = 10

const store = useAgentFormStore()

const handleAdd = () => {
  const question = store.form_data.settings.suggested_questions
  if (question.length >= MAX_QUESTION_LENGTH) {
    ElMessage.error(`${$t('max_add_tip', { max: MAX_QUESTION_LENGTH })}`)
    return
  }
  question.push({
    id: Date.now(),
    content: '',
  })
}

const handleDel = (id: number) => {
  store.form_data.settings.suggested_questions = store.form_data.settings.suggested_questions.filter(item => item.id !== id)
}

onMounted(() => {
  if (!store.form_data.settings.suggested_questions.length) {
    store.form_data.settings.suggested_questions = [{
      id: Date.now(),
      content: '',
    }]
  }
})
</script>

<template>
  <div class="text-base text-[#1D1E1F] font-medium mb-4">
    {{ $t('base_setting') }}
  </div>
  <div class="flex items-center justify-between gap-2 mb-2">
    <div class="text-sm text-[#4F5052]">
      {{ $t('opening_statement') }}
    </div>
  </div>
  <MarkdownEditor v-model="store.form_data.settings.opening_statement" type="simple" class="w-full mb-4" height="200px" />
  <div class="flex items-center justify-between gap-2 mb-2">
    <div class="text-sm text-[#4F5052]">
      {{ $t('suggested_questions') }}
    </div>
    <el-button link size="large" @click="handleAdd">
      +{{ $t('action_add') }}
    </el-button>
  </div>
  <Sortable v-model="store.form_data.settings.suggested_questions" identity="cid" class="w-full flex flex-col gap-4 mb-4">
    <template #item="{ item, index }">
      <div class="flex items-center border px-2 border-[#DCDFE6] rounded-sm">
        <div class="sort-icon cursor-move">
          <svg-icon name="drag" width="16px" height="32px" color="#a1a5af" />
        </div>
        <div class="flex-1">
          <el-input v-model="item.content" size="large" style="--el-input-border-color:none; --el-input-hover-border-color:none; --el-input-focus-border-color:none;" :placeholder="$t('form_input_placeholder')" class="w-full" />
        </div>
        <el-icon class="ml-4 cursor-pointer" color="rgba(24, 43, 80, 0.4)" @click="handleDel(item.id)">
          <Delete />
        </el-icon>
      </div>
    </template>
  </Sortable>
</template>

<style>

</style>
