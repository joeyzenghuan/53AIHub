<template>
  <ElSelect v-bind="$attrs" :filterable="filterable" :size="size" @change="onChange">
    <template v-if="selected_option.icon" #prefix>
      <div class="w-[24px] h-[24px] inline-block">
        <img v-if="iconType === 'image'" :src="selected_option.icon" class="h-full inline-block object-cover" />
        <ElIcon v-else-if="iconType === 'icon'" class="text-lg">
          <component :is="selected_option.icon" />
        </ElIcon>
      </div>
    </template>

    <slot>
      <template v-for="item in options" :key="item.value">
        <ElOptionGroup v-if="item.options" :label="getLabel(item.label)">
          <ElOption v-for="row in item.options" :key="row.value" :label="getLabel(row.label)" :value="row.value">
            <div class="flex items-center gap-2">
              <div class="flex-none size-6 flex items-center justify-center">
                <img v-if="iconType === 'image'" :src="row.icon" class="h-full inline-block object-cover" />
                <ElIcon v-else-if="iconType === 'icon'" class="text-lg">
                  <component :is="row.icon" />
                </ElIcon>
              </div>
              <span class="flex-1 truncate">{{ getLabel(row.label) }}</span>
              <slot name="item_after" :data="row" />
            </div>
          </ElOption>
        </ElOptionGroup>
        <ElOption v-else :label="getLabel(item.label)" :value="item.value">
          <div class="size-6 inline-block mr-2">
            <img v-if="iconType === 'image'" :src="item.icon" class="h-full inline-block object-cover" />
            <ElIcon v-else-if="iconType === 'icon'" class="size-6 text-lg">
              <component :is="item.icon" />
            </ElIcon>
          </div>
          <span>{{ getLabel(item.label) }}</span>
        </ElOption>
      </template>
    </slot>
  </ElSelect>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, nextTick } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import { ElIcon } from 'element-plus'

interface OptionItem {
  value: string
  label: string
  icon?: string
}

interface GroupOptionItem extends OptionItem {
  options?: OptionItem[]
}

const props = withDefaults(
  defineProps<{
    iconType?: 'image' | 'svg' | 'icon'
    options?: GroupOptionItem[]
    filterable?: boolean
    size?: 'large' | 'default' | 'small'
    useI18n?: boolean
  }>(),
  {
    iconType: 'image',
    options: () => [],
    filterable: true,
    size: 'large',
    useI18n: true,
  }
)

const emits = defineEmits<{
  (e: 'change', result: { value: string; option: GroupOptionItem | OptionItem }): void
}>()

const instance = getCurrentInstance()
if (!instance) throw new Error('SelectPlus must be used within setup')

const { proxy } = instance as ComponentInternalInstance & { proxy: { $attrs: any; $t: (key: string) => string } }

// 处理标签文本
const getLabel = (label: string) => {
  if (!props.useI18n) return label
  return proxy.$t(label)
}

const selected_option = computed<GroupOptionItem | OptionItem>(() => {
  const value = proxy.$attrs.modelValue
  let option: GroupOptionItem | OptionItem = { value: '', label: '' }
  props.options.forEach(item => {
    if (item.options) {
      item.options.forEach(row => {
        if (row.value === value) option = row
      })
    } else if (item.value === value) option = item
  })
  return option
})

const onChange = (value: string) => {
  nextTick(() => {
    emits('change', { value, option: selected_option.value })
  })
}
</script>

<style scoped>
/* 输入框样式 */

/* 选项图标样式 */
.option-icon {
  margin-right: 8px;
  vertical-align: middle;
}

.option-label {
  vertical-align: middle;
}

/* 清除按钮调整 */
:deep(.el-icon-circle-close) {
  right: 25px; /* 避免与原生清除按钮重叠 */
}

.el-select :deep(.el-input__prefix) {
  display: flex;
  align-items: center;
}
</style>
