<script setup lang="ts">
import { ref } from 'vue'
import { View } from '@element-plus/icons-vue'
import AgentInfo from '../components/agent-info.vue'
import BaseConfig from '../components/base-config.vue'
import ExpandConfig from '../components/expand-config.vue'
import UseScope from '../components/use-scope.vue'
import { useAgentFormStore } from '../store'
import PromptInput from '@/components/Prompt/input.vue'
// import LimitConfig from '../components/limit-config.vue'
import { copyToClip } from '@/utils/copy'
import { generateInputRules } from '@/utils/form-rule'

const props = defineProps({
  showChannelConfig: {
    type: Boolean,
    default: false,
  },
})

const store = useAgentFormStore()

const form_ref = ref()

const onOptimize = () => {
  return ElMessage.warning(window.$t('feature_coming_soon'))
}
const onGenerate = () => {
  return ElMessage.warning(window.$t('feature_coming_soon'))
}

const onModelChange = (data) => {
  const option = data.option
  if (!option.vision)
    store.form_data.custom_config.image_parse.enable = false
}
const onCopy = async (text = '') => {
  await copyToClip(text)
  ElMessage.success(window.$t('action_copy_success'))
}
const validateForm = async () => form_ref.value.validate()

defineExpose({
  validateForm,
})
</script>

<template>
  <div :class="[showChannelConfig ? '' : 'py-7']">
    <ElForm ref="form_ref" :model="store.form_data" label-width="104px" label-position="top">
      <template v-if="showChannelConfig">
        <h3 class="text-base text-[#1D1E1F] mb-3">
          {{ $t('agent_app.prompt') }}
        </h3>

        <div class="text-base text-[#1D1E1F] font-medium mb-4">
          {{ $t('access_model') }}
        </div>
        <ElFormItem label-width="0" prop="model" :rules="generateInputRules({ message: 'form_select_placeholder' })">
          <SelectPlus v-model="store.form_data.model" size="large" :options="store.model_options" @change="onModelChange">
            <template #item_after="{ data }">
              <el-tooltip v-if="data.vision" :content="$t('support_image')" placement="top">
                <div class="flex-center inline-flex align-middle ml-1 w-4 h-4 bg-[#FDF8EB] rounded-sm ">
                  <el-icon size="10px" color="#F0A105">
                    <View />
                  </el-icon>
                </div>
              </el-tooltip>
            </template>
          </SelectPlus>
        </ElFormItem>

        <div class="text-base text-[#1D1E1F] font-medium mb-4">
          {{ $t('basic_info') }}
        </div>
        <AgentInfo v-model="store.form_data" />
      </template>
      <template v-else>
        <div class="text-base text-[#1D1E1F] font-medium mb-4">
          {{ $t('role_instruction') }}
        </div>
        <ElFormItem label-width="0" class="mb-10">
          <!-- target="#app-config-full-screen-hook" -->
          <Fullscreen class="w-full" :z-index="9">
            <template #default="{ isopen, handler }">
              <div class="border rounded w-full flex flex-col !bg-[#FAFBFC] overflow-auto relative">
                <div
                  class="min-h-10 pl-3 pr-2 border-b flex items-center justify-between rounded-t bg-[#FBFBFC]"
                  :class="[isopen ? 'sticky top-0 left-0 right-0 z-10' : '']"
                >
                  <div class="flex-1 text-sm text-[#4F5052] truncate" :title="$t('role_instruction_desc')">
                    *{{ $t('role_instruction_desc') }}
                  </div>
                  <div class="flex items-center gap-1">
                    <el-tooltip placement="top" :content="$t('optimize_tip')">
                      <span
                        class="flex-center gap-1 text-[#2563EB] text-sm px-1 cursor-pointer opacity-60 pointer-events-none"
                        @click.stop="onOptimize"
                      >
                        <svg-icon name="hglt" width="18px" />
                        {{ $t('optimize') }}
                      </span>
                    </el-tooltip>
                    <div class="flex-none h-4 w-px border-r border-[#E1E2E6]" />
                    <el-tooltip placement="top" :content="$t('generate_tip')">
                      <span class="text-[#182B50] px-1 cursor-pointer opacity-60 pointer-events-none" @click.stop="onGenerate">
                        <svg-icon name="magic-stick" width="18px" />
                      </span>
                    </el-tooltip>
                    <el-tooltip placement="top" :content="$t('action_copy')">
                      <span class="text-[#182B50] px-1 cursor-pointer" @click.stop="onCopy(store.form_data.prompt)">
                        <svg-icon name="copy" width="18px" />
                      </span>
                    </el-tooltip>
                    <el-tooltip placement="top" :content="$t(!isopen ? 'action_amplify' : 'action_shrink')">
                      <span class="text-[#182B50] px-1 cursor-pointer" @click.stop="handler">
                        <svg-icon :name="!isopen ? 'amplify' : 'shrink'" width="18px" />
                      </span>
                    </el-tooltip>
                  </div>
                </div>
                <PromptInput v-model="store.form_data.prompt" style="height: 280px; min-height: max-content;" show-line />
              </div>
            </template>
          </Fullscreen>
        </ElFormItem>
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
