<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue'
import AgentInfo from '../components/agent-info.vue'
import ExpandConfig from '../components/expand-config.vue'

import { useAgentFormStore } from '../store'
// import LimitConfig from '../components/limit-config.vue'
import { generateInputRules } from '@/utils/form-rule'

const { proxy: _this } = getCurrentInstance()

const store = useAgentFormStore()

const form_ref = ref()

const validateForm = async () => form_ref.value.validate()

defineExpose({
  validateForm,
})
</script>

<template>
  <div class="py-7">
    <ElForm ref="form_ref" :model="store.form_data" label-width="104px" label-position="top">
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
      <ExpandConfig />
      <template v-if="store.subscription_options.length">
        <div class="text-base text-[#1D1E1F] font-medium mt-10 mb-4">
          {{ $t('permission_setting') }}
        </div>
        <ElFormItem label-width="0">
          <ElCheckboxGroup v-model="store.form_data.user_group_ids">
            <ElCheckbox v-for="item in store.subscription_options" :key="item.value" :label="item.value">
              <span class="text-[#1D1E1F]">{{ item.label }}</span>
            </ElCheckbox>
          </ElCheckboxGroup>
        </ElFormItem>
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
