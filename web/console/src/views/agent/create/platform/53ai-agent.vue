<script setup lang="ts">
import { inject, reactive, ref, watch } from 'vue'
import AgentInfo from '../components/agent-info.vue'
import ExpandConfig from '../components/expand-config.vue'

import { useAgentFormStore } from '../store'
import { generateInputRules } from '@/utils/form-rule'
import { channelApi } from '@/api/modules/channel'

const props = defineProps({
  showChannelConfig: {
    type: Boolean,
    default: true,
  },
})

const agentFormStore = useAgentFormStore()

const channelInfo = inject('channelConfig') || {}
const channelTypeKey = inject('channelTypeKey') || {}
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
const channelSubmitting = ref(false)

const agentFormRef = ref()

const onChannelSave = async () => {
  const valid = await channelFormRef.value.validate()
  if (!valid)
    return
  channelSubmitting.value = true
  const models = [channelForm.model]
  // let name = channelInfo.value.name || ''
  // if (!name) name = channelTypeKey.value
  const name = channelTypeKey.value
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
  }).finally(() => {
    channelSubmitting.value = false
  })
  Object.assign(channelInfo.value, resultData)
  if (!saveData.channel_id)
    saveData.channel_id = resultData.channel_id
  agentFormStore.form_data.custom_config.channel_config = saveData
  agentFormStore.form_data.model = models[0]
  ElMessage.success(window.$t('action_save_success'))
  channelEditable.value = true
}

const validateForm = async () => agentFormRef.value && agentFormRef.value.validate()

watch(() => agentFormStore.agent_data, ({ channel_config = {} } = {}) => {
  channelEditable.value = !!+channel_config.channel_id
  channelInfo.value.channel_id = +channel_config.channel_id || 0
  channelInfo.value.key = channelForm.key = channel_config.key || ''
  channelInfo.value.base_url = channelForm.base_url = channel_config.base_url || 'https://api.53ai.com/v3'
  channelInfo.value.models = channelForm.models = channel_config.models || []
  channelInfo.value.model = channelForm.model = channelForm.models[0] || ''
  channelInfo.value.config = channelForm.config = {
    ...(channel_config.config || {}),
    agent_type: channel_config.config?.agent_type || 'chat',
  }
}, { immediate: true, deep: true })

defineExpose({
  validateForm,
})
</script>

<template>
  <div class="pb-6">
    <div v-show="showChannelConfig" class="border rounded p-5 mb-7">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <h3 class="text-base text-[#1D1E1F]">
            {{ $t('53ai') }}
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
              v-html="$t('53ai_agent_get_tip', { url: `<a class='text-[#5A6D9E] underline' href='https://www.53ai.com' target='_blank'>https://www.53ai.com</a>` })"
            />
          </ElPopover>
        </div>
        <ElButton v-if="channelEditable" type="primary" link @click="channelEditable = false">
          <svg-icon name="edit" width="16" class="mr-2" />
          {{ $t('action_edit') }}
        </ElButton>
      </div>
      <ElForm ref="channelFormRef" :model="channelForm" label-position="top" class="mt-3">
        <ElFormItem
          :label="$t('53ai_api_endpoint')" prop="base_url"
          :rules="generateInputRules({ message: 'form_input_placeholder', validator: ['text', 'link'] })"
        >
          <ElInput
            v-model="channelForm.base_url" size="large" :placeholder="$t('form_input_placeholder')"
            :disabled="channelEditable"
          />
        </ElFormItem>
        <ElFormItem
          :label="$t('api_botid')" prop="model"
          :rules="generateInputRules({ message: 'form_input_placeholder' })"
        >
          <ElInput
            v-model="channelForm.model" size="large" :placeholder="$t('form_input_placeholder')"
            :disabled="channelEditable"
          />
        </ElFormItem>
        <ElFormItem
          :label="$t('53ai_api_screet')" prop="key"
          :rules="generateInputRules({ message: 'form_input_placeholder' })"
        >
          <ElInput
            v-model="channelForm.key" size="large" :placeholder="$t('form_input_placeholder')"
            :disabled="channelEditable"
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
      <div v-if="!channelEditable">
        <ElButton type="primary" class="px-9" size="large" :loading="channelSubmitting" @click.stop="onChannelSave">
          {{ $t('action_save') }}
        </ElButton>
        <ElButton v-if="channelInfo.channel_id" class="px-9" size="large" @click.stop="channelEditable = true">
          {{ $t('action_cancel') }}
        </ElButton>
      </div>
    </div>

    <template v-if="(showChannelConfig && channelInfo.channel_id) || !showChannelConfig">
      <div class="text-base text-[#1D1E1F] font-medium">
        {{ $t('basic_info') }}
      </div>
      <ElForm
        ref="agentFormRef" :model="agentFormStore.form_data" label-width="104px" label-position="top"
        class="mt-6"
      >
        <AgentInfo v-model="agentFormStore.form_data" />
        <ExpandConfig />
        <template v-if="agentFormStore.subscription_options.length">
          <div class="text-base text-[#1D1E1F] font-medium mt-10 mb-4">
            {{ $t('permission_setting') }}
          </div>
          <ElFormItem label-width="0">
            <ElCheckboxGroup v-model="agentFormStore.form_data.user_group_ids">
              <ElCheckbox v-for="item in agentFormStore.subscription_options" :key="item.value" :label="item.value">
                <span class="text-[#1D1E1F]">{{ item.label }}</span>
              </ElCheckbox>
            </ElCheckboxGroup>
          </ElFormItem>
        </template>
      </ElForm>
    </template>
  </div>
</template>

<style scoped>
::v-deep(.el-input-number--large) {
	width: 60px;
}
</style>
