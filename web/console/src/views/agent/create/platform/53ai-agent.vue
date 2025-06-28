<script setup lang="ts">
import { ref } from 'vue'
import AgentInfo from '../components/agent-info.vue'
import BaseConfig from '../components/base-config.vue'
import ExpandConfig from '../components/expand-config.vue'
import UseScope from '../components/use-scope.vue'
import { useAgentFormStore } from '../store'
import { generateInputRules } from '@/utils/form-rule'

const props = defineProps({
  showChannelConfig: {
    type: Boolean,
    default: false,
  },
})

const store = useAgentFormStore()

const agentFormRef = ref()

const validateForm = async () => {
  return agentFormRef.value && agentFormRef.value.validate()
}

// 53ai 的 agent 选择后，需要设置 那边的开场白和建议问题
const onBotChange = (data: { value: string; option: any }) => {
  if (!store.agent_id) {
    store.form_data.logo = data.option.logo
    store.form_data.name = data.option.name
    store.form_data.description = data.option.description || ''
  }
  store.form_data.custom_config.chat53ai_agent_id = data.value
  store.form_data.settings.opening_statement = data.option.opening_statement
  store.form_data.settings.suggested_questions = data.option.suggested_questions.map((item) => {
    return {
      id: Math.random().toString(36).substring(2, 15),
      content: item,
    }
  })
}

defineExpose({
  validateForm,
})
</script>

<template>
  <div :class="[showChannelConfig ? '' : 'py-7']">
    <ElForm
      ref="agentFormRef" :model="store.form_data" label-width="104px" label-position="top"
    >
      <template v-if="showChannelConfig">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-1">
            <h3 class="text-base text-[#1D1E1F]">
              {{ $t('53ai') }}
            </h3>
          </div>
        </div>

        <div class="text-base text-[#1D1E1F] font-medium mb-4">
          {{ $t('select_agent') }}
        </div>
        <!-- :label="$t('agent')" -->
        <ElFormItem prop="custom_config['chat53ai_agent_id']" :rules="generateInputRules({ message: 'form_select_placeholder' })">
          <SelectPlus v-model="store.form_data.custom_config.chat53ai_agent_id" :use-i18n="false" size="large" :options="store.chat53ai_agent_options" @change="onBotChange" />
        </ElFormItem>

        <div class="text-base text-[#1D1E1F] font-medium mt-6 mb-4">
          {{ $t('basic_info') }}
        </div>
        <AgentInfo v-model="store.form_data" />
      </template>
      <template v-else>
        <BaseConfig />
        <ExpandConfig />
        <UseScope />
      </template>
    </ElForm>
  </div>
</template>

<style scoped>
::v-deep(.el-input-number--large) {
	width: 60px;
}
</style>
