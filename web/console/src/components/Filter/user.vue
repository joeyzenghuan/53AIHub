<template>
  <DeptMemberPicker v-model="user" :multiple="multiple" :default-first-value="defaultFirstValue" v-bind="{ ...$attrs }" @confirm="handleUserAddConfirm">
    <template #trigger>
      <div
        class="border rounded h-10 min-w-44 flex items-center px-5 gap-1.5 text-xs text-[#1D1E1F] overflow-hidden cursor-pointer"
      >

        <p class="flex-1 text-xs text-[#1D1E1F] truncate">{{ label }}</p>
        <ElIcon size="14" color="#9EA5B6">
          <ArrowDown />
        </ElIcon>
      </div>
    </template>
  </DeptMemberPicker>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { ArrowDown } from '@element-plus/icons-vue';

withDefaults(defineProps<{
  modelValue: string | number | null | any[]
  multiple?: boolean
  defaultFirstValue?: boolean
}>(), {
  modelValue: '',
  multiple: false,
  defaultFirstValue: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void
  (e: 'change', value: string | number | null): void
}>()

const user = ref([])

const label = computed(() => {
  return user.value.map(item => item.label).join(',') || window.$t('all')
})

const handleUserAddConfirm = (data: any) => {
  user.value = data.value
  emit('update:modelValue', data.value)
  emit('change', data.value)
}
</script>

<style>

</style>
