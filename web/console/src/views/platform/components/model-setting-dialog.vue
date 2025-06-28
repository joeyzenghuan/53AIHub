<script setup lang="ts">
import { reactive, ref } from 'vue'
import { deepCopy } from '@/utils'
import { useChannelStore } from '@/stores'
import { CHANNEL_TYPE_OPTIONS } from '@/api/modules/channel'
import { generateInputRules } from '@/utils/form-rule'
import type { FormConfig } from '@/constants/platform/model-schema-config'
import { getFormConfig } from '@/constants/platform/model-schema-config'

interface ModelOption {
  id: string
  value: string
  label: string
  icon?: string
}

interface ChannelOption {
  value: string
  label: string
  icon: string
  add_visible?: boolean
  is_add?: boolean
}

interface FormData {
  type: string
  key: string
  organization_id: string
  name: string
  other: string
  base_url: string
  models: string[] | string
  [key: string]: any
}

interface ModelData {
  id?: string
  value?: string
  label?: string
  icon?: string
  models?: string[]
  config?: {
    model_alias_map?: Record<string, string>
  }
  channel_id?: string
  key?: string
  base_url?: string
  type?: string
  other?: string
  name?: string
  organization_id?: string
}

interface ChannelListItem {
  name: string
  value: string
}

const emits = defineEmits<{
  (e: 'success', result: { action: 'add' | 'edit' | 'model_edit'; data: any }): void
}>()

const channel_store = useChannelStore()
const form_ref = ref()
const model_form_ref = ref()
const visible = ref(false)
const add_visible = ref(false)
const loading = ref(false)
const submitting = ref(false)
const form = reactive<FormData>({
  type: '',
  key: '',
  organization_id: '',
  name: '',
  other: '',
  base_url: '',
  channel_type: 0,
  models: [],
})
const origin_data = ref<ModelData>({})
const channel_options = ref<ChannelOption[]>(deepCopy(CHANNEL_TYPE_OPTIONS))
const model_options = ref<ModelOption[]>([])
const model_visible = ref(false)
const model_form = reactive({
  id: '',
  name: '',
  channel_type: 0,
})

const model_schemas = ref<FormConfig[]>([])

const reset = ({ action = '' } = {}) => {
  if (action === 'model_edit') {
    model_form.id = ''
    model_form.name = ''
    return
  }
  form.type = ''
  form.key = ''
  form.name = ''
  form.base_url = ''
  form.organization_id = ''
  form.base_url = ''
  form.channel_type = 0
  form.models = []
  form.other = ''
}

const open = async ({ data = {} as ModelData, action = '' } = {}) => {
  if (action === 'model_edit') {
    model_form.id = data.id || data.value || ''
    model_form.name = data.label || data.name || ''
    model_form.channel_type = data.channel_type
    model_visible.value = true
    origin_data.value = data
    return
  }
  if (!data.channel_id && !data.value) {
    loading.value = true
    add_visible.value = true
    const channel_list = await channel_store.loadListData({ reset: true }).finally(() => {
      loading.value = false
    }) as ChannelListItem[]
    channel_options.value.forEach((item: ChannelOption) => {
      item.is_add = channel_list.some((opt: ChannelListItem) => opt.name === item.value)
    })
    return
  }
  reset()
  model_schemas.value = getFormConfig(data.channel_type)

  form.type = data.type || data.value || ''
  form.channel_type = data.channel_type
  for (const config of model_schemas.value) {
    if (config.type === 'select') {
      if (config.multiple)
        form.models = (data.models || '').toString().split(',').filter(Boolean)
      else
        form.models = (data.models || '').toString()
    }
    else {
      form[config.prop] = data[config.prop] || config.default || ''
    }
  }

  origin_data.value = data
  visible.value = true
  loading.value = true

  const is_azure = data.channel_type === 3
  const model_list = await channel_store.loadModelList({ owner: is_azure ? 'all' : form.type }).finally(() => {
    loading.value = false
  }) as ModelOption[]
  const { config: { model_alias_map = {} } = {} } = data
  model_options.value = model_list.map((item: ModelOption) => {
    item.value = item.id || ''
    item.label = model_alias_map[item.value] || item.label || item.id || ''
    if (action === 'add' && !is_azure)
      form.models.push(item.value)

    item.icon = item.icon || ''
    return item
  })
}

const close = ({ action = '' } = {}) => {
  if (action === 'model_edit')
    model_visible.value = false
  if (action === 'add')
    add_visible.value = false
  visible.value = false
  reset({ action })
}

const handleAdd = ({ data = {} as ModelData } = {}) => {
  open({ data, action: 'add' })
}

const handleModelChange = (value: string) => {
  if (Array.isArray(form.models)) {
    if (form.models.includes(value))
      form.models = form.models.filter(item => item !== value)
    else
      form.models.push(value)
  }
  else {
    form.models = value
  }
}

const onSave = ({ action = '' } = {}) => {
  if (action === 'model_edit') {
    model_form_ref.value.validate(async (valid: boolean) => {
      if (!valid)
        return
      let { id = '', name = '', channel_type } = model_form
      name = name.trim()
      const config = origin_data.value.config || {}
      config.model_alias_map = {
        ...(config.model_alias_map || {}),
        [id]: name,
      }
      if (!config.model_alias_map[id])
        delete config.model_alias_map[id]
      if (!Object.keys(config.model_alias_map).length)
        delete config.model_alias_map
      const data = {
        channel_id: origin_data.value.channel_id,
        config,
        key: origin_data.value.key,
        base_url: origin_data.value.base_url,
        models: origin_data.value.models,
        name: origin_data.value.type,
        other: origin_data.value.other,
        type: channel_type,
      }
      submitting.value = true
      await channel_store.save({ data }).finally(() => {
        submitting.value = false
      })
      emits('success', { action: 'model_edit', data: { id, name: name || id } })
      ElMessage.success(window.$t('action_save_success'))
      close({ action })
    })
    return
  }
  form_ref.value.validate(async (valid: boolean) => {
    if (!valid)
      return
    const { name, type = '', key = '', base_url = '', other, models } = form
    const data = {
      channel_id: origin_data.value.channel_id,
      config: origin_data.value.config || {},
      key,
      base_url,
      models,
      name: name || type,
      other,
      type: form.channel_type,
    }
    const saveAction = data.channel_id ? 'edit' : 'add'
    submitting.value = true
    await channel_store.save({ data }).finally(() => {
      submitting.value = false
    })
    emits('success', { action: saveAction as 'add' | 'edit', data })
    ElMessage.success(window.$t('action_save_success'))
    close({ action: saveAction })
  })
}

defineExpose({
  open,
  close,
  reset,
})
</script>

<template>
  <ElDialog
    v-model="add_visible" :title="$t('module.platform_model_add')" :close-on-click-modal="false" width="700px"
    destroy-on-close append-to-body @close="() => close({ action: 'add' })"
  >
    <ul v-loading="loading" class="flex flex-col gap-3 mb-8 pb-1 overflow-auto max-h-[60vh] pr-1">
      <li
        v-for="opt in channel_options" :key="opt.value"
        class="flex items-center gap-4 py-5 px-6 border rounded box-border"
        :class="[!opt.add_visible ? 'opacity-50' : '']"
      >
        <img class="flex-none w-[40px] h-[40px] object-contain" :src="$getRealPath({ url: `/images/platform/${opt.icon}.png` })">
        <div class="flex-1 text-[#1B2B51] font-semibold">
          {{ $t(opt.label) }}
        </div>
        <ElButton
          v-if="opt.add_visible" class="flex-none !border-none !px-5 text-[#3664EF] bg-[#F6F7F8]"
          :class="opt.is_add ? '!text-[#9A9A9A] !bg-[#F6F7F8]' : ''" type="primary" plain size="large"
          :disabled="opt.is_add" @click="handleAdd({ data: opt })"
        >
          {{ $t(opt.is_add ? 'action_add_success' : 'action_add') }}
        </ElButton>
      </li>
    </ul>
  </ElDialog>
  <ElDialog
    v-model="visible" :title="$t('action_setting') + $t(origin_data.label || '')" :close-on-click-modal="false"
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
            <ElOption v-for="opt in model_options" :key="opt.id" :label="opt.id" :value="opt.id" />
          </ElSelect>
        </ElFormItem>
      </template>
    </ElForm>
    <template #footer>
      <div class="pb-4 flex items-center justify-center">
        <ElButton class="w-24 h-9" type="primary" :loading="submitting || loading" @click="() => onSave()">
          {{
            $t('action_save') }}
        </ElButton>
        <ElButton class="w-24 h-9 text-[#1D1E1F]" type="info" plain @click="() => close()">
          {{ $t('action_cancel')
          }}
        </ElButton>
      </div>
    </template>
  </ElDialog>
  <ElDialog
    v-model="model_visible" :title="$t('module.platform_model_models_edit')" :close-on-click-modal="false"
    width="600px" destroy-on-close append-to-body @close="() => close({ action: 'model_edit' })"
  >
    <ElForm ref="model_form_ref" :model="model_form" label-position="top">
      <ElFormItem :label="$t('module.platform_model_models_id')" prop="id" class="is-required" :rules="generateInputRules({ message: 'form_input_placeholder' })">
        <ElInput v-model="model_form.id" size="large" disabled :placeholder="$t('form_input_placeholder')" />
      </ElFormItem>
      <ElFormItem :label="$t('module.platform_model_models_name')" prop="name">
        <ElInput v-model="model_form.name" size="large" :placeholder="$t('form_input_placeholder')" />
      </ElFormItem>
    </ElForm>
    <template #footer>
      <div class="pb-4 flex items-center justify-center">
        <ElButton
          class="w-24 h-9" type="primary" :loading="submitting || loading"
          @click="() => onSave({ action: 'model_edit' })"
        >
          {{ $t('action_save') }}
        </ElButton>
        <ElButton
          class="w-24 h-9 text-[#1D1E1F]" type="info" plain
          @click="() => close({ action: 'model_edit' })"
        >
          {{ $t('action_cancel')
          }}
        </ElButton>
      </div>
    </template>
  </ElDialog>
</template>

<style scoped lang="scss">
</style>
