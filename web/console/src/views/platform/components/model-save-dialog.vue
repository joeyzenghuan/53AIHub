<script setup lang="ts">
import { ref } from 'vue'

import type { FormInstance } from 'element-plus'
import { getFormConfig } from '@/constants/platform/model'
import type { FormConfig } from '@/constants/platform/model'

import { generateInputRules } from '@/utils/form-rule'

import { useChannelStore } from '@/stores'
import type { ModelConfig, ModelOption } from '@/constants/platform/config'
import { getModelByChannelType } from '@/constants/platform/config'

const emit = defineEmits<{
  (e: 'success'): void
}>()
const channel_store = useChannelStore()
const form_ref = ref<FormInstance>()

const visible = ref(false)

const model_schemas = ref<FormConfig[]>([])
const model_options = ref<ModelOption[]>([])
const model_config = ref<ModelConfig>({})

// 模型是否单选
const select_single_model = ref(false)
const default_form = {
  type: 0,
  priority: 0,
  weight: 0,
  key: '',
  name: '',
  other: '',
  base_url: '',
  models: [],
  model_mapping: '',
  config: {},
}
const form = ref<{
  [key: string]: any
}>({ ...default_form })

const loading = ref(false)

const clearForm = () => {
  form.value = { ...default_form }
}
const initForm = (data: any = {}) => {
  form.value.type = data.channel_type
  model_schemas.value = getFormConfig(form.value.type)
  for (const schema of model_schemas.value) {
    if (schema.type === 'select' && schema.prop === 'models') {
      select_single_model.value = !schema.multiple || false
      if (schema.multiple)
        form.value.models = (data.models || '').toString().split(',').filter(Boolean)
      else
        form.value.models = (data.models || '').toString()
    }
  }
}

const assignForm = (data: any = {}) => {
  if (!data.channel_id)
    return
  form.value.base_url = data.base_url
  form.value.key = data.key
  form.value.name = data.name
  form.value.other = data.other
  form.value.models = select_single_model.value ? (data.models || '').toString() : data.models
  form.value.weight = data.weight
  form.value.priority = data.priority
  form.value.config = data.config || {}
  form.value.model_mapping = data.model_mapping || ''
  form.value.channel_id = data.channel_id
}

const loadModelList = async () => {
  loading.value = true
  const model_list = await channel_store.loadModelList({ owner: model_config.value.owner }).finally(() => {
    loading.value = false
  })
  model_options.value = model_list.map((item: ModelOption) => {
    item.value = item.id || ''
    item.label = item.label || item.value
    item.icon = item.icon || ''
    if (!form.value.channel_id && Array.isArray(form.value.models))
      form.value.models.push(item.value)
    return item
  })
}

const open = async (data: any = {}) => {
  model_config.value = getModelByChannelType(data.channel_type) || {}
  clearForm()
  initForm(data)
  assignForm(data)

  visible.value = true
  loadModelList()
}

const close = () => {
  visible.value = false
}

const handleModelChange = (value: string) => {
  if (Array.isArray(form.value.models)) {
    if (form.value.models.includes(value))
      form.value.models = form.value.models.filter(item => item !== value)
    else
      form.value.models.push(value)
  }
  else {
    form.value.models = value
  }
}

const handleSave = () => {
  return form_ref.value?.validate()
    .then(() => {
      return channel_store.save({
        data: {
          ...form.value,
        },
      })
        .then(() => {
          ElMessage.success(window.$t('action_save_success'))
          emit('success')
          close()
        })
    })
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <ElDialog
    v-model="visible" :title="$t('action_setting') + (model_config?.label ? $t(model_config.label) : '')" :close-on-click-modal="false"
    width="600px" destroy-on-close append-to-body @close="() => close()"
  >
    <ElForm ref="form_ref" :model="form" label-position="top" require-asterisk-position="right">
      <template v-for="config in model_schemas" :key="config.prop">
        <ElFormItem
          v-if="config.type === 'input'"
          :label="$t(config.label)"
          :prop="config.prop"
          :required="config.required"
          :rules="generateInputRules({ message: 'form_input_placeholder' })"
        >
          <ElInput
            v-model="form[config.prop]"
            size="large"
            :placeholder="$t(config.placeholder || '')"
          />
        </ElFormItem>
        <ElFormItem
          v-else-if="config.type === 'url'"
          :label="$t(config.label)"
          :prop="config.prop"
          :required="config.required"
          :rules="generateInputRules({ message: 'form_input_placeholder', validator: ['text', 'link'] })"
        >
          <ElInput
            v-model="form[config.prop]"
            size="large"
            :placeholder="$t(config.placeholder || '')"
          />
        </ElFormItem>
        <ElFormItem
          v-else-if="config.type === 'select'"
          :label="$t(config.label)"
          :prop="config.prop"
          :required="config.required"
          :rules="generateInputRules({ message: 'form_select_placeholder' })"
        >
          <template v-if="config.multiple">
            <ul
              v-loading="loading"
              class="w-full max-h-[42vh] pr-1 flex flex-col gap-2 box-border overflow-auto"
            >
              <div v-if="!model_options.length" class="text-[#9A9A9A] w-full text-center py-4">
                {{
                  $t('module.platform_model_models_empty') }}
              </div>
              <li v-for="opt in model_options" :key="opt.value" class="w-full flex items-center gap-1.5">
                <img
                  v-if="opt.icon" class="flex-none w-[20px] h-[20px] object-contain"
                  :src="$getRealPath({ url: `/images/platform/${opt.icon}.png` })"
                >
                <label class="text-sm text[#1D1E1F]">{{ opt.label }}</label>
                <div class="flex-1" />
                <ElSwitch :model-value="form.models.includes(opt.value)" size="small" @change="handleModelChange(opt.value)" />
              </li>
            </ul>
          </template>
          <ElSelect
            v-else
            v-model="form[config.prop]"
            size="large"
            :placeholder="$t(config.placeholder || '')"
            filterable
          >
            <ElOption v-for="opt in model_options" :key="opt.id" :label="opt.label" :value="opt.id" />
          </ElSelect>
        </ElFormItem>
      </template>
    </ElForm>
    <template #footer>
      <div class="pb-4 flex items-center justify-center">
        <ElButton v-debounce class="w-24 h-9" type="primary" @click="handleSave">
          {{
            $t('action_save') }}
        </ElButton>
        <ElButton class="w-24 h-9 text-[#1D1E1F]" type="info" plain @click="close">
          {{ $t('action_cancel')
          }}
        </ElButton>
      </div>
    </template>
  </ElDialog>
</template>
