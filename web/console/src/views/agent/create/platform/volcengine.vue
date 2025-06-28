<script setup lang="ts">
import { inject, reactive, ref, watch } from 'vue'
import AgentInfo from '../components/agent-info.vue'
import BaseConfig from '../components/base-config.vue'
import ExpandConfig from '../components/expand-config.vue'
import UseScope from '../components/use-scope.vue'
import { useAgentFormStore } from '../store'
import { generateInputRules } from '@/utils/form-rule'
import { channelApi } from '@/api/modules/channel'

const props = defineProps({
  showChannelConfig: {
    type: Boolean,
    default: false,
  },
})

const agentFormStore = useAgentFormStore()

const channelInfo = inject('channelConfig') || {}
const channelFormRef = ref()
const channelEditable = ref(false)
const channelForm = reactive({
  key: '',
  base_url: '',
  models: [],
  model: '',
  config: {
    agent_type: 'chat',
  },
})

const agentFormRef = ref()

const onChannelSave = async () => {
  const valid = await channelFormRef.value.validate()
  if (!valid)
    return
  const models = [channelForm.model]
  const name = 'volcengine'
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
  if (!saveData.channel_id)
    saveData.channel_id = resultData.channel_id
  agentFormStore.form_data.custom_config.channel_config = saveData
  agentFormStore.form_data.model = models[0]
  channelEditable.value = true
}

const validateForm = async () => {
  channelFormRef.value && channelFormRef.value.validate()
  return agentFormRef.value && agentFormRef.value.validate()
}

watch(() => agentFormStore.agent_data, ({ channel_config = {} } = {}) => {
  channelEditable.value = !!+channel_config.channel_id
  channelInfo.value.channel_id = +channel_config.channel_id || 0
  channelInfo.value.key = channelForm.key = channel_config.key || ''
  channelInfo.value.base_url = channelForm.base_url = channel_config.base_url || 'https://ark.cn-beijing.volces.com'
  channelInfo.value.models = channelForm.models = channel_config.models || []
  channelInfo.value.model = channelForm.model = channelForm.models[0] || ''
  channelInfo.value.config = channelForm.config = {
    ...(channel_config.config || {}),
    agent_type: channel_config.config?.agent_type || 'chat',
  }
}, { immediate: true, deep: true })

defineExpose({
  validateForm,
  onChannelSave,
})
</script>

<template>
  <div :class="[showChannelConfig ? '' : 'py-7']">
    <template v-if="showChannelConfig">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <h3 class="text-base text-[#1D1E1F]">
            {{ $t('volcengine') }}
          </h3>
          <ElPopover content="Right Top prompts info" placement="right-start" width="480">
            <template #reference>
              <div class="flex-center text-[#9A9A9A] gap-1 ml-1">
                <svg-icon name="help" width="14" color="#999" />
                <span class="text-sm ">{{ $t('how_get') }}</span>
              </div>
            </template>
            <div
              class="whitespace-pre-wrap text-sm text-[#333] leading-6"
              v-html="$t('volcengine_agent_get_tip', {
                url: `<a class='text-[#5A6D9E] underline' href='https://www.volcengine.com/' target='_blank'>https://www.volcengine.com/</a>`,
                my_url: `<a class='text-[#5A6D9E] underline' href='https://console.volcengine.com/ark/region:ark+cn-beijing/assistant' target='_blank'>https://console.volcengine.com/ark/region:ark+cn-beijing/assistant</a>`,
              })"
            />
          </ElPopover>
        </div>
      </div>
      <ElForm ref="channelFormRef" :model="channelForm" label-position="top" class="mt-3">
        <ElFormItem
          :label="$t('module.platform_model_base_url')" prop="base_url"
          :rules="generateInputRules({ message: 'form_input_placeholder', validator: ['text', 'link'] })"
        >
          <ElInput
            v-model="channelForm.base_url" size="large" :placeholder="$t('form_input_placeholder')"
          />
        </ElFormItem>

        <ElFormItem
          :label="$t('api_botid_en')" prop="model"
          :rules="generateInputRules({ message: 'form_input_placeholder' })"
        >
          <ElInput
            v-model="channelForm.model" size="large" :placeholder="$t('form_input_placeholder')"
          />
        </ElFormItem>

        <ElFormItem
          :label="$t('api_key')" prop="key"
          :rules="generateInputRules({ message: 'form_input_placeholder', validator: ['text'] })"
        >
          <ElInput
            v-model="channelForm.key" size="large" :placeholder="$t('form_input_placeholder')"
          />
        </ElFormItem>

        <ElFormItem
          :label="$t('agent_type')" prop="config.agent_type"
          :rules="generateInputRules({ message: 'form_input_placeholder' })"
        >
          <ElSelect
            v-model="channelForm.config.agent_type" class="max-w-[360px]" size="large"
            :placeholder="$t('form_select_placeholder')" :disabled="channelEditable"
          >
            <ElOption value="chat" :label="$t('agent_type_chat')" />
            <!-- <ElOption value="completion" :label="$t('agent_type_completion')" />
						<ElOption value="workflow" :label="$t('agent_type_workflow')" /> -->
          </ElSelect>
        </ElFormItem>
      </ElForm>
    </template>

    <ElForm
      ref="agentFormRef" :model="agentFormStore.form_data" label-width="104px" label-position="top"
    >
      <template v-if="showChannelConfig">
        <div class="text-base text-[#1D1E1F] font-medium mt-6 mb-4">
          {{ $t('basic_info') }}
        </div>
        <AgentInfo v-model="agentFormStore.form_data" />
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
