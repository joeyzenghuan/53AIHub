<template>
  <el-dialog v-model="visible" class="el-dialog--footer-center" :title="$t('action.setting')" width="600px">
    <el-form label-width="100px" label-position="top">
      <el-form-item :label="$t('agent.relate_app.input_mapping')">
        <div class="w-full border rounded">
          <div class="flex items-center gap-2 px-5 py-4 border-b border-dashed">
            <img :src="agent.logo" class="size-8" />
            <p class="flex-1 text-sm text-[#1D1E1F] truncate">{{ agent.name }}</p>
          </div>
          <div class="py-4 px-5 max-h-[300px] overflow-y-auto">
            <template v-for="(field, index) in agent.input_fields" :key="index">
              <div>
                <div class="flex items-center justify-between mb-1">
                  <div class="text-sm text-[#1D1E1F]">{{ field.label }}</div>
                  <span class="text-[#2563EB] cursor-pointer" @click.stop="handleSelectVariable(index)">{#}</span>
                </div>
                <div class="h-28 border rounded p-2">
                  <PromptInput
                    ref="promptInputRef"
                    v-model="agent.field_mapping[field.id]"
                    :placeholder="$t('form.set_variable_placeholder')"
                    style="height: 100%"
                    :variables="variables"
                    :agent-info="agentInfo"
                  />
                </div>
              </div>
            </template>
          </div>
        </div>
      </el-form-item>
      <el-form-item :label="$t('agent.relate_app.execution_rule')">
        <div class="w-full flex items-center gap-4">
          <div
            class="flex-1 h-10 flex items-center gap-2 px-3 border rounded cursor-pointer"
            :class="{ 'border-[#2563EB] text-[#2563EB]': agent.execution_rule === 'auto' }"
            @click="handleExecutionRule('auto')"
          >
            <div class="size-4 flex items-center justify-center">
              <svg-icon v-if="agent.execution_rule === 'auto'" name="check" />
              <svg-icon v-else name="circle" />
            </div>
            {{ $t('agent.relate_app.auto_execution') }}
          </div>
          <div
            class="flex-1 h-10 flex items-center gap-2 px-3 border rounded cursor-pointer"
            :class="{ 'border-[#2563EB] text-[#2563EB]': agent.execution_rule === 'manual' }"
            @click="handleExecutionRule('manual')"
          >
            <div class="size-4 flex items-center justify-center">
              <svg-icon v-if="agent.execution_rule === 'manual'" name="check" />
              <svg-icon v-else name="circle" />
            </div>
            {{ $t('agent.relate_app.manual_execution') }}
          </div>
        </div>
      </el-form-item>
    </el-form>

    <template #footer>
      <ElButton class="w-[96px] h-[36px]" type="primary" @click="handleSave">
        {{ $t('action_confirm') }}
      </ElButton>
      <ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click="close">
        {{ $t('action_cancel') }}
      </ElButton>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import { useAgentFormStore } from '../store'
import { deepCopy } from '@/utils'
import PromptInput from '@/components/Prompt/input.vue'
import { AGENT_MODES } from '@/constants/platform/config'

const store = useAgentFormStore()

const emit = defineEmits<{
  (e: 'save', value: Agent.RelateAgent): void
}>()

const variables = computed(() => {
  const isChatAgent = store.agent_option_data.mode === AGENT_MODES.CHAT
  if (isChatAgent) {
    return [
      {
        label: window.$t('output_variable'),
        children: [{ label: '{#text#}', value: '{#text#}' }],
      },
    ]
  }
  return [
    {
      label: window.$t('output_variable'),
      children: store.form_data.settings.output_fields.map(item => ({
        label: `{#${item.label}#}`,
        value: `{#${item.variable}#}`,
      })),
    },
  ]
})

const visible = ref(false)
const agent = ref<Agent.RelateAgent>({} as Agent.RelateAgent)
const agentInfo = ref({
  icon: '',
  name: '',
})

const promptInputRef = ref()
const open = (item: Agent.RelateAgent) => {
  agent.value = deepCopy(item)
  visible.value = true
  agentInfo.value.icon = store.form_data.logo
  agentInfo.value.name = store.form_data.name
}

const close = () => {
  visible.value = false
}
const handleSelectVariable = (index: number) => {
  promptInputRef.value[index].showTooltip()
}

const handleExecutionRule = (rule: 'auto' | 'manual') => {
  agent.value.execution_rule = rule
}

const handleSave = () => {
  emit('save', agent.value)

  close()
}

defineExpose({
  open,
  close,
})
</script>
