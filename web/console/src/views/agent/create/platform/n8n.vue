<template>
  <div :class="[showChannelConfig ? '' : 'py-7']">
    <template v-if="showChannelConfig">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <h3 class="text-base text-[#1D1E1F]">
            {{ $t('n8n') }}
          </h3>

          <div class="flex-center text-[#9A9A9A] gap-1 ml-1 cursor-pointer" @click="handleOpenDialog">
            <svg-icon name="help" width="14" color="#999" />
            <span class="text-sm">{{ $t('how_get') }}</span>
          </div>
        </div>
      </div>
      <ElForm ref="channelFormRef" :model="channelForm" label-position="top" class="mt-3">
        <ElFormItem
          :label="$t('module.platform_model_webhook_url')"
          prop="base_url"
          :rules="generateInputRules({ message: 'form_input_placeholder', validator: ['text', 'link'] })"
        >
          <ElInput v-model="channelForm.base_url" size="large" :placeholder="$t('form_input_placeholder')" />
        </ElFormItem>
        <ElFormItem
          label="Value"
          prop="key"
          :rules="generateInputRules({ message: 'form_input_placeholder', validator: ['text'] })"
        >
          <ElInput v-model="channelForm.key" size="large" :placeholder="$t('form_input_placeholder')" />
        </ElFormItem>
      </ElForm>
    </template>

    <ElForm ref="agentFormRef" :model="store.form_data" label-width="104px" label-position="top">
      <template v-if="showChannelConfig">
        <div class="text-base text-[#1D1E1F] font-medium mt-6 mb-4">
          {{ $t('basic_info') }}
        </div>
        <AgentInfo v-model="store.form_data" />
      </template>
      <template v-else>
        <template v-if="store.agent_type === AGENT_TYPES.N8N_WORKFLOW">
          <FieldInput
            v-model:list="store.form_data.settings.input_fields"
            :title="$t('agent.input_variable')"
            allow-add
            type="input"
            :agent-type="store.agent_type"
          />
          <FieldInput
            v-model:list="store.form_data.settings.output_fields"
            :title="$t('agent.output_variable')"
            allow-add
            type="output"
            :agent-type="store.agent_type"
          />
          <RelateApp />
        </template>
        <template v-else>
          <BaseConfig />
          <RelateApp />
          <ExpandConfig />
        </template>
        <UseScope />
      </template>
    </ElForm>

    <ElDialog
      v-model="guideVisible"
      :title="$t('how_get')"
      :align-center="true"
      width="860px"
      destroy-on-close
      append-to-body
    >
      <ul class="flex flex-col gap-4 pb-4 box-border max-h-[84vh] overflow-y-auto">
        <li v-for="(item, index) in guideList" :key="index" class="flex flex-col gap-2 text-[#1D1E1F] text-sm">
          <div class="text-wrap break-words whitespace-pre-wrap" v-html="item.title" />
          <div v-for="(image, imageIndex) in item.imageList" :key="imageIndex" class="w-full">
            <ElImage
              :src="$getRealPath({ url: image })"
              class="w-full"
              fit="contain"
              :preview-teleported="true"
              :preview-src-list="[$getRealPath({ url: image })]"
            />
          </div>
        </li>
      </ul>
    </ElDialog>
  </div>
</template>

<script setup lang="ts">
import { inject, reactive, ref, watch, onMounted } from 'vue'
import AgentInfo from '../components/agent-info.vue'
import BaseConfig from '../components/base-config.vue'
import ExpandConfig from '../components/expand-config.vue'
import FieldInput from '../components/field-input.vue'
import UseScope from '../components/use-scope.vue'
import RelateApp from '../components/relate-agents.vue'

import { channelApi } from '@/api/modules/channel'

import { useAgentFormStore } from '../store'
import { generateInputRules } from '@/utils/form-rule'

import { AGENT_MODES, AGENT_TYPES, getAgentByAgentType } from '@/constants/platform/config'

defineProps({
  showChannelConfig: {
    type: Boolean,
    default: false,
  },
})

const store = useAgentFormStore()

const channelInfo = inject('channelConfig') || {}
const channelFormRef = ref()
const channelEditable = ref(false)
const channelForm = reactive({
  key: '',
  base_url: '',
  models: [],
  model: '',
  config: {
    agent_type: AGENT_MODES.COMPLETION,
  },
})

const agentFormRef = ref()
const guideVisible = ref(false)

const guideList = ref([
  {
    title: window.$t('platform_auth.n8n.tip', {
      url: '<a style="color: #586D9A;" href="https://n8n.io/" target="_blank">https://n8n.io/</a>',
    }),
    imageList: [],
  },
  {
    title: window.$t('platform_auth.n8n.tip_1'),
    imageList: ['/images/n8n-guide/guide-1.png', '/images/n8n-guide/guide-2.png'],
  },
  {
    title: window.$t('platform_auth.n8n.tip_2', { headerAuth: '<span style="color: #FA5151;"> Header Auth</span>' }),
    imageList: ['/images/n8n-guide/guide-3.png'],
  },
  {
    title: `${window.$t('platform_auth.n8n.tip_3', {
      authorization: '<span style="color: #FA5151;">authorization</span>',
    })}<ElIcon ref="copy_ref" @click="handleCopy(coze_auth_url)"><CopyDocument /></ElIcon>`,
    imageList: ['/images/n8n-guide/guide-4.png'],
  },
  {
    title: window.$t('platform_auth.n8n.tip_4', {
      select: '<span style="color: #FA5151;">When Last Node Finishes</span>',
    }),
    imageList: ['/images/n8n-guide/guide-5.png'],
  },
])

const handleOpenDialog = () => {
  guideVisible.value = true
}
const onChannelSave = async () => {
  const valid = await channelFormRef.value.validate()
  if (!valid) return
  const agent = getAgentByAgentType(store.agent_type)

  if (!channelForm.model) {
    const model = channelForm.base_url.split('/').pop()
    if (agent.mode === 'completion') {
      channelForm.model = `workflow-${model}`
    } else {
      channelForm.model = model
    }
  }

  const models = [channelForm.model]
  const name = 'n8n'
  const saveData = {
    channel_id: channelInfo.value.channel_id,
    key: channelForm.key,
    base_url: channelForm.base_url,
    config: channelForm.config,
    models,
    name,
  }
  const resultData = await channelApi.save({
    data: saveData,
  })
  Object.assign(channelInfo.value, resultData)
  if (!saveData.channel_id) saveData.channel_id = resultData.channel_id
  store.form_data.custom_config.channel_config = saveData
  store.form_data.model = models[0]
  channelEditable.value = true
}

const validateForm = async () => {
  channelFormRef.value && channelFormRef.value.validate()
  return agentFormRef.value && agentFormRef.value.validate()
}

watch(
  () => store.agent_data,
  ({ channel_config = {} } = {}) => {
    channelEditable.value = !!+channel_config.channel_id
    channelInfo.value.channel_id = +channel_config.channel_id || 0
    channelInfo.value.key = channelForm.key = channel_config.key || ''
    channelInfo.value.base_url = channelForm.base_url = channel_config.base_url || ''
    channelInfo.value.models = channelForm.models = channel_config.models || []
    channelInfo.value.model = channelForm.model = channelForm.models[0] || ''
    channelInfo.value.config = channelForm.config = {
      ...(channel_config.config || {}),
      agent_type: channel_config.config?.agent_type || 'chat',
    }
  },
  { immediate: true, deep: true }
)

const handleAgentTypeChange = (value: string) => {
  store.agent_type = value as AgentType
}

onMounted(() => {
  store.agent_type = AGENT_TYPES.N8N_WORKFLOW
})

defineExpose({
  validateForm,
  onChannelSave,
})
</script>

<style scoped></style>
