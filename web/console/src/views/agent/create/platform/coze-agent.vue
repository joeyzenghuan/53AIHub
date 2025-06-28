<script setup lang="ts">
import { ref, watch } from 'vue'
import AgentInfo from '../components/agent-info.vue'
import BaseConfig from '../components/base-config.vue'
import ExpandConfig from '../components/expand-config.vue'
import UseScope from '../components/use-scope.vue'

import { useAgentFormStore } from '../store'
// import LimitConfig from '../components/limit-config.vue'
import { generateInputRules } from '@/utils/form-rule'
const props = defineProps({
  showChannelConfig: {
    type: Boolean,
    default: false,
  },
})

const store = useAgentFormStore()

const form_ref = ref()

const validateForm = async () => form_ref.value.validate()

defineExpose({
  validateForm,
})

let first_load = true
watch(() => store.form_data.custom_config.coze_workspace_id, (workspace_id) => {
  if (!first_load)
    store.loadCozeBotOptions(workspace_id)

  first_load = false
})
</script>

<template>
  <div :class="[showChannelConfig ? '' : 'py-7']">
    <ElForm ref="form_ref" :model="store.form_data" label-width="104px" label-position="top">
      <template v-if="showChannelConfig">
        <div class="text-base text-[#1D1E1F] font-medium mb-4">
          {{ $t('coze_cn') }}
        </div>
        <ElFormItem
          :label="$t('workspace')" prop="custom_config.coze_workspace_id"
          :rules="generateInputRules({ message: 'form_select_placeholder' })"
        >
          <SelectPlus
            v-model="store.form_data.custom_config.coze_workspace_id" size="large"
            :options="store.coze_workspace_options"
          />
        </ElFormItem>
        <ElFormItem
          :label="$t('agent')" prop="custom_config.coze_bot_id"
          :rules="generateInputRules({ message: 'form_select_placeholder' })"
        >
          <SelectPlus
            v-model="store.form_data.custom_config.coze_bot_id" size="large"
            :options="store.coze_bot_options"
          />
        </ElFormItem>
        <div class="text-base text-[#1D1E1F] font-medium mt-8 mb-4">
          {{ $t('basic_info') }}
        </div>
        <AgentInfo v-model="store.form_data" />
      </template>
      <template v-if="!showChannelConfig">
        <BaseConfig />
        <ExpandConfig />
        <UseScope />
      </template>
      <!-- <div class="border-t mb-4" />
      <LimitConfig /> -->
    </ElForm>
  </div>
</template>

<style scoped>
::v-deep(.el-input-number--large) {
	width: 60px;
}
</style>
