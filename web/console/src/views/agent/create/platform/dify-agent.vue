<script setup lang="ts">
import { inject, reactive, ref, watch } from 'vue'
import AgentInfo from '../components/agent-info.vue'
// import LimitConfig from '../components/limit-config.vue'

import { useAgentFormStore } from '../store'
import { generateInputRules } from '@/utils/form-rule'
import { channelApi } from '@/api/modules/channel'
import md5 from '@/utils/md5'

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
  // let models = channelForm.models || []
  // if (!models.length) models = [channelTypeKey.value]
  const models = [md5(`${channelForm.key}_${channelForm.base_url}`)]
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
  channelInfo.value.base_url = channelForm.base_url = channel_config.base_url || 'https://api.dify.ai/v1'
  channelInfo.value.models = channelForm.models = channel_config.models || []
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
            {{ $t('dify') }}
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
              v-html="$t('dify_agent_get_tip', { url: `<a class='text-[#5A6D9E] underline' href='https://dify.ai/zh' target='_blank'>https://dify.ai/zh</a>` })"
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
          :label="$t('api_host')" prop="base_url"
          :rules="generateInputRules({ message: 'form_input_placeholder', validator: ['text', 'link'] })"
        >
          <ElInput
            v-model="channelForm.base_url" size="large" :placeholder="$t('form_input_placeholder')"
            :disabled="channelEditable"
          />
        </ElFormItem>
        <ElFormItem
          :label="$t('api_screet')" prop="key"
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
    <div v-if="false" class="border rounded p-5 mb-7">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <h3 class="text-base text-[#1D1E1F]">
            火山方舟
          </h3>
          <svg-icon name="help" width="14" />
          <span class="text-sm text-[#9A9A9A]">{{ $t('how_get') }}</span>
        </div>
        <el-button type="primary" link>
          <svg-icon name="edit" width="16" class="mr-2" />
          {{ $t('action_edit') }}
        </el-button>
      </div>
      <el-form label-position="top" class="mt-3">
        <el-form-item :label="$t('api_key')">
          <el-input size="large" :placeholder="$t('form_input_placeholder')" />
        </el-form-item>
        <el-form-item :label="$t('api_botid')">
          <el-input size="large" :placeholder="$t('form_input_placeholder')" />
        </el-form-item>
        <el-form-item :label="$t('app_type')">
          <el-select size="large" :placeholder="$t('form_select_placeholder')">
            <el-option value="chat">
              对话型应用
            </el-option>
            <el-option value="completion">
              workflow型应用
            </el-option>
            <el-option value="completion">
              工作流编排对话型应用
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-button type="primary" class="px-9" size="large">
        {{ $t('action_save') }}
      </el-button>
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

        <!-- <div class="text-base text-[#1D1E1F] font-medium mt-10 mb-6">
					{{ $t('select_agent') }}
				</div>
				<el-form-item :label="$t('workspace')">
					<el-select size="large">
						<el-option value="1">
							市场
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :label="$t('agent')">
					<el-select size="large">
						<el-option value="1">
							市场
						</el-option>
					</el-select>
				</el-form-item>
				<div class="text-base text-[#1D1E1F] font-medium mt-10 mb-6">
					{{ $t('permission_setting') }}
				</div>
				<el-form-item :label="$t('visible_range')">
					<el-select size="large">
						<el-option value="1">
							市场
						</el-option>
					</el-select>
				</el-form-item>
				<div class="border-t mb-4" />
				<LimitConfig /> -->
      </ElForm>
    </template>
  </div>
</template>

<style scoped>
::v-deep(.el-input-number--large) {
	width: 60px;
}
</style>
