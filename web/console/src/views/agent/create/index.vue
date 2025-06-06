<script setup lang="ts">
import { computed, nextTick, onMounted, provide, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useAgentFormStore } from './store'
import AgentForm from './platform/index.vue'
import ChatView from './response/chat.vue'
import CompletionView from './response/completion.vue'
import GuideView from './guide.vue'
import {
  AGENT_TYPE_53AI_AGENT,
  AGENT_TYPE_APP_BUILDER,
  AGENT_TYPE_COZE_AGENT_CN,
  AGENT_TYPE_DIFY_AGENT,
  AGENT_TYPE_ICON_MAP,
} from '@/api/modules/agent'
import { CHANNEL_TYPE_53AI, CHANNEL_TYPE_DIFY, CHANNEL_TYPE_VALUE_MAP } from '@/api/modules/channel'
import { PROVIDER_TYPE_53AI, PROVIDER_TYPE_DIFY, PROVIDER_TYPE_LABEL_MAP } from '@/api/modules/provider'
import eventBus from '@/utils/event-bus'

const route = useRoute()
const router = useRouter()
const agentFormStore = useAgentFormStore()

const agentFormRef = ref<InstanceType<typeof AgentForm>>()
const active_tab_name = ref('first')
const channelConfig = ref({})
provide('channelConfig', channelConfig)

const channelTypeKey = computed(() => {
  if (channelConfig.value.channel_type == CHANNEL_TYPE_VALUE_MAP.get(CHANNEL_TYPE_DIFY))
    return CHANNEL_TYPE_DIFY
  else if (channelConfig.value.channel_type == CHANNEL_TYPE_VALUE_MAP.get(CHANNEL_TYPE_53AI))
    return CHANNEL_TYPE_53AI
  return ''
})
provide('channelTypeKey', channelTypeKey)
const saveButtonVisible = computed(() => {
  return ![AGENT_TYPE_53AI_AGENT, AGENT_TYPE_DIFY_AGENT].includes(agentFormStore.agent_type) || channelConfig.value.channel_id
})

const onSave = async () => {
  if (agentFormStore.saving)
    return
  const comp_ref = agentFormRef.value
  let agent_id = ''
  if (comp_ref && comp_ref.save) {
    agentFormStore.saving = true
    const { data = {} } = await comp_ref.save().catch(() => {
      agentFormStore.saving = false
    })
    agent_id = data.agent_id
  }
  else if (comp_ref && comp_ref.validateForm) {
    const valid = await comp_ref.validateForm()
    if (!valid)
      return Promise.reject()
    await agentFormStore.saveAgentData().catch(() => {
      agentFormStore.saving = false
    })
    agentFormStore.saving = true
    agent_id = agentFormStore.agent_id
  }
  eventBus.emit('agent-change', { agent_id })
  if (agent_id)
    await router.replace({ name: 'AgentCreate', query: { type: agentFormStore.agent_type, agent_id } })
  agentFormStore.saving = false
}

let first_load = true
watch(() => agentFormStore.form_data.custom_config.coze_workspace_id, (workspace_id) => {
  if (!first_load)
    agentFormStore.loadCozeBotOptions(workspace_id)
})

onMounted(async () => {
  agentFormStore.resetState()
  await nextTick()
  const agent_type = route.query.type as string || 'prompt'
  agentFormStore.agent_id = Number(route.query.agent_id as string)
  agentFormStore.agent_type = agent_type
  agentFormStore.form_data.logo = AGENT_TYPE_ICON_MAP.get(agent_type)
  agentFormStore.form_data.group_id = Number(route.query.group_id as string)
  agentFormStore.form_data.custom_config.agent_type = agent_type
  await agentFormStore.loadDetailData()
  agentFormStore.loadGroupOptions()
  agentFormStore.loadChannelOptions()
  agentFormStore.loadSubscriptionOptions()
  switch (agentFormStore.agent_type) {
    case AGENT_TYPE_COZE_AGENT_CN:
      agentFormStore.loadCozeWorkspaceOptions().then(() => {
        agentFormStore.loadCozeBotOptions(agentFormStore.form_data.custom_config.coze_workspace_id)
        first_load = false
      })
      break
    case AGENT_TYPE_APP_BUILDER:
      agentFormStore.loadAppBuilderBotOptions()
      break
  }
  switch (agent_type) {
    case AGENT_TYPE_DIFY_AGENT:
      channelConfig.value.name = PROVIDER_TYPE_LABEL_MAP.get(PROVIDER_TYPE_DIFY)
      channelConfig.value.channel_type = CHANNEL_TYPE_VALUE_MAP.get(CHANNEL_TYPE_DIFY)
      break
    case AGENT_TYPE_53AI_AGENT:
      channelConfig.value.name = PROVIDER_TYPE_LABEL_MAP.get(PROVIDER_TYPE_53AI)
      channelConfig.value.channel_type = CHANNEL_TYPE_VALUE_MAP.get(CHANNEL_TYPE_53AI)
      break
  }
  if (!agentFormStore.form_data.channel_type)
    agentFormStore.form_data.channel_type = channelConfig.value.channel_type || 0
  if (!agentFormStore.form_data.model) {
    await nextTick()
    agentFormStore.form_data.model = channelTypeKey.value
  }
})
</script>

<template>
  <Layout class="px-[60px] py-8">
    <Header back :title="$t(agentFormStore.agent_option_data.label)" class="mb-5" />
    <el-tabs v-model="active_tab_name" class="flex-1 agent-tabs el-tabs--full">
      <el-tab-pane :label="$t('app_config')" name="first" lazy>
        <div id="app-config-full-screen-hook" v-loading="loading" class="relative h-full flex bg-white">
          <div class="flex-1 flex flex-col overflow-hidden">
            <AgentForm ref="agentFormRef" class="flex-1 py-7 px-4 overflow-y-auto" :agent-type="agentFormStore.agent_type" />

            <div v-if="saveButtonVisible" class="border-t px-4 py-5">
              <el-button type="primary" size="large" :loading="agentFormStore.saving" @click="onSave">
                {{ $t('action_save') }}
              </el-button>
            </div>
          </div>
          <div class="flex-none w-px border-r" />
          <template v-if="agentFormStore.agent_option_data.response === 'chat'">
            <ChatView class="flex-1 overflow-hidden" />
          </template>
          <template v-else-if="agentFormStore.agent_option_data.response === 'completion'">
            <CompletionView class="flex-1 py-7" />
          </template>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="$t('usage_guide')" name="second" lazy>
        <GuideView>
          <template v-if="saveButtonVisible" #footer>
            <div class="border-t px-4 py-5 mt-8 sticky bottom-0 left-0 right-0 bg-white z-10">
              <el-button type="primary" size="large" :loading="agentFormStore.saving" @click="onSave">
                {{ $t('action_save') }}
              </el-button>
            </div>
          </template>
        </GuideView>
      </el-tab-pane>
    </el-tabs>
  </Layout>
</template>

<style scoped>
.agent-tabs :deep(.el-tabs__nav-wrap) {
	padding: 0 40px;
}
</style>
