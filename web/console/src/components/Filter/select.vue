<script setup lang="ts">
import { computed } from 'vue'
import { ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'

interface Option {
  [key: string]: string | number | null
  value: string | number | null
  label: string
}

const props = withDefaults(defineProps<{
  options: Option[]
  prop: {
    value: string
    label: string
  }
  modelValue: string | number | null
  showAll?: boolean
  allOption?: {
    value: null
    label: string
  }
}>(), {
  options: () => [],
  prop: () => ({
    value: 'value',
    label: 'label',
  }),
  modelValue: '',
  showAll: false,
  allOption: () => ({
    value: null,
    label: '全部',
  }),
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void
  (e: 'change', value: string | number | null): void
}>()

const mergedOptions = computed<Option[]>(() => {
  if (!props.showAll)
    return props.options

  return [
    {
      [props.prop.value]: props.allOption.value,
      [props.prop.label]: props.allOption.label,
    } as Option,
    ...props.options,
  ]
})

const label = computed(() => {
  return mergedOptions.value.find(opt => opt[props.prop.value] === props.modelValue)?.[props.prop.label] || ''
})

const handleCommand = (command: string | number | null) => {
  emit('update:modelValue', command)
  emit('change', command)
}
</script>

<template>
  <ElDropdown placement="bottom" trigger="click" :max-height="250" @command="handleCommand">
    <div
      class="!border-none !outline-none h-9 flex-center px-5 gap-1.5 rounded-2xl bg-[#F6F7F8] text-xs text-[#1D1E1F] cursor-pointer"
    >
      {{ label }}
      <ElIcon size="14" color="#9EA5B6">
        <ArrowDown />
      </ElIcon>
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem v-for="opt in mergedOptions" :key="opt[prop.value]" :command="opt[prop.value]">
          {{ opt[prop.label] }}
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<style>

</style>
