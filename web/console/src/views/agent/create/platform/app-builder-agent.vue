<script setup lang="ts">
import { ref } from 'vue'
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
</script>

<template>
  <div :class="[showChannelConfig ? '' : 'py-7']">
    <ElForm ref="form_ref" :model="store.form_data" label-width="104px" label-position="top">
      <template v-if="showChannelConfig">
        <div class="text-base text-[#1D1E1F] font-medium mb-4">
          {{ $t('app_builder') }}
        </div>

        <div class="text-base text-[#1D1E1F] font-medium mb-4">
          {{ $t('select_agent') }}
        </div>
        <!-- :label="$t('agent')" -->
        <ElFormItem prop="custom_config.app_builder_bot_id" :rules="generateInputRules({ message: 'form_select_placeholder' })">
          <SelectPlus v-model="store.form_data.custom_config.app_builder_bot_id" :use-i18n="false" size="large" :options="store.app_builder_bot_options" />
        </ElFormItem>

        <div class="text-base text-[#1D1E1F] font-medium mb-4">
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

</style>
