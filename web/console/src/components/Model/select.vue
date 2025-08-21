<template>
  <SelectPlus v-model="value" size="large" :use-i18n="false" :options="options" @change="onModelChange">
    <template #item_after="{ data }">
      <el-tooltip v-if="(data as any).vision" :content="$t('support_image')" placement="top">
        <div class="flex-center inline-flex align-middle ml-1 w-4 h-4 bg-[#FDF8EB] rounded-sm">
          <el-icon size="10px" color="#F0A105">
            <View />
          </el-icon>
        </div>
      </el-tooltip>
    </template>
  </SelectPlus>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { View } from '@element-plus/icons-vue'
import { loadModelList } from './index'

// 定义类型，兼容 SelectPlus 组件的接口
interface ModelOption {
  value: string
  label: string
  icon?: string
  vision?: boolean
}

interface ChannelOption {
  value: string
  label: string
  icon?: string
  options: ModelOption[]
}

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string, option: ChannelOption | ModelOption): void
}>()

const options = ref<ChannelOption[]>([])

const value = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

const onModelChange = (result: { value: string; option: any }) => {
  emit('update:modelValue', result.value)
  emit('change', result.value, result.option)
}

const loadChannelOptions = async () => {
  try {
    const modelList = await loadModelList()

    options.value = modelList.reduce((acc: ChannelOption[], item: any) => {
      const channelOption: ChannelOption = {
        value: item.channel_type,
        label: window.$t(item.label),
        icon: (window as any).$getRealPath({ url: `/images/platform/${item.icon}.png` }),
        options: [],
      }

      const modelOptions = (item.model_options || []).map((option: any = {}) => ({
        value: `${item.channel_id}_${option.value}`,
        label: option.label,
        icon: (window as any).$getRealPath({ url: `/images/platform/${option.icon}.png` }),
        vision: option.vision || false,
      }))

      const existingModel = acc.find(res => res.value === item.channel_type)
      if (existingModel) {
        existingModel.options.push(...modelOptions)
      } else {
        channelOption.options = modelOptions
        acc.push(channelOption)
      }
      return acc
    }, [])
  } catch (error) {
    console.error('Failed to load channel options:', error)
  }
}

onMounted(() => {
  loadChannelOptions()
})
</script>
