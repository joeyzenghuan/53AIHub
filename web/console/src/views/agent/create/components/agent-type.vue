<template>
  <div class="flex items-center gap-4 mb-4">
    <div
      v-for="item in options"
      :key="item.value"
      class="flex-1 border rounded px-4 py-3"
      :class="[
        item.value === modelValue ? 'border-[#007AFF] bg-[#2563EB] bg-opacity-5' : 'border-[#E5E5E5]',
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
      ]"
      @click="handleChange(item.value)"
    >
      <div class="flex items-center gap-2">
        <div class="size-4 flex items-center justify-center">
          <svg-icon v-if="item.icon" :name="item.icon" />
        </div>
        <p class="flex-1 text-sm text-[#1D1E1F] font-medium">{{ item.label }}</p>
        <el-icon v-if="modelValue === item.value" class="size-4 text-[#2563EB]"><SuccessFilled /></el-icon>
      </div>
      <p class="text-xs text-[#9A9A9A] mt-2">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SuccessFilled } from '@element-plus/icons-vue';
import { nextTick } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue: string
    options: { icon?: string; label: string; description: string; value: string }[]
    disabled?: boolean
  }>(),
  {
    modelValue: '',
    options: () => [],
    disabled: false,
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()

const handleChange = (value: string) => {
  if (props.disabled) return
  emit('update:modelValue', value)
  nextTick(() => emit('change', value))
}
</script>

<style scoped lang="scss"></style>
