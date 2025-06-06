<script setup lang="ts">
import { ref } from 'vue'
import PromptView from './prompt.vue'
import CozeAgentView from './coze-agent.vue'
import CozeWorkflowView from './coze-workflow.vue'
import DifyAgentView from './dify-agent.vue'
import DifyWorkflowView from './dify-workflow.vue'
import MainAgentView from './53ai-agent.vue'
import MainWorkflowView from './53ai-workflow.vue'
import AppBuilderAgentView from './app-builder-agent.vue'

import { AGENT_TYPE_53AI_AGENT, AGENT_TYPE_APP_BUILDER, AGENT_TYPE_COZE_AGENT_CN, AGENT_TYPE_DIFY_AGENT, AGENT_TYPE_PROMPT } from '@/api/modules/agent'

defineProps<{
  agentType: string
}>()

const viewRef = ref()

defineExpose({
  get save() {
    return viewRef.value.save
  },
  get validateForm() {
    return viewRef.value.validateForm
  },

})
</script>

<template>
  <template v-if="agentType === AGENT_TYPE_PROMPT">
    <PromptView ref="viewRef" />
  </template>
  <template v-else-if="agentType === AGENT_TYPE_COZE_AGENT_CN">
    <CozeAgentView ref="viewRef" />
  </template>
  <template v-else-if="agentType === 'coze-workflow'">
    <CozeWorkflowView ref="viewRef" />
  </template>
  <template v-else-if="agentType === AGENT_TYPE_DIFY_AGENT">
    <DifyAgentView ref="viewRef" />
  </template>
  <template v-else-if="agentType === 'dify-workflow'">
    <DifyWorkflowView ref="viewRef" />
  </template>
  <template v-else-if="agentType === AGENT_TYPE_53AI_AGENT">
    <MainAgentView ref="viewRef" />
  </template>
  <template v-else-if="agentType === '53ai-workflow'">
    <MainWorkflowView ref="viewRef" />
  </template>
  <template v-else-if="agentType === AGENT_TYPE_APP_BUILDER">
    <AppBuilderAgentView ref="viewRef" />
  </template>
</template>
