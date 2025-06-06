<script lang="ts" setup>
import { computed, getCurrentInstance, nextTick, onMounted } from 'vue'
import { ElIcon } from 'element-plus'

const props = withDefaults(defineProps<{
  iconType?: 'image' | 'svg' | 'icon'
  options?: {
    value: string
    label: string
    icon?: string
    options?: {
      value: string
      label: string
      icon?: string
    }[]
  }[]
  filterable?: boolean
  size?: 'large' | 'default' | 'small'
}>(), {
  iconType: 'image',
  options: () => [],
  filterable: true,
  size: 'large',
})

const emits = defineEmits<{
  (e: 'change', result: { value: string; option: any }): void
}>()

const { proxy: _this } = getCurrentInstance()

const selected_option = computed(() => {
  const value = _this.$attrs.modelValue
  let option = {}
  props.options.forEach((item = {}) => {
    if (item.options) {
      item.options.forEach((row = {}) => {
        if (row.value === value)
          option = row
      })
    }
    else {
      if (item.value === value)
        option = item
    }
  })
  return option
})

const onChange = (value) => {
  nextTick(() => {
    emits('change', { value, option: selected_option.value })
  })
}

</script>

<template>
  <ElSelect
    v-bind="$attrs"
    :filterable="filterable"
    :size="size"
    @change="onChange"
  >
    <template v-if="selected_option.icon" #prefix>
      <div class="w-[24px] h-[24px] inline-block">
        <img v-if="iconType === 'image'" :src="selected_option.icon" class="h-full inline-block object-cover">
        <ElIcon v-else-if="iconType === 'icon'" class="text-lg">
          <component :is="selected_option.icon" />
        </ElIcon>
      </div>
    </template>

    <slot>
      <template v-for="item in options" :key="item.value">
        <ElOptionGroup v-if="item.options" :label="$t(item.label)">
          <ElOption
            v-for="row in item.options"
            :key="row.value"
            :label="$t(row.label)"
            :value="row.value"
          >
            <div class="flex items-center gap-2">
              <div class="flex-none size-6 flex items-center justify-center">
                <img v-if="iconType === 'image'" :src="row.icon" class="h-full inline-block object-cover">
                <ElIcon v-else-if="iconType === 'icon'" class="text-lg">
                  <component :is="row.icon" />
                </ElIcon>
              </div>
              <span class="flex-1 truncate">{{ $t(row.label) }}</span>
              <slot name="item_after" :data="row" />
            </div>
          </ElOption>
        </ElOptionGroup>
        <ElOption v-else :label="$t(item.label)" :value="item.value">
          <div class="size-6 inline-block mr-2">
            <img v-if="iconType === 'image'" :src="item.icon" class="h-full inline-block object-cover">
            <ElIcon v-else-if="iconType === 'icon'" class="size-6 text-lg">
              <component :is="item.icon" />
            </ElIcon>
          </div>
          <span>{{ $t(item.label) }}</span>
        </ElOption>
      </template>
    </slot>
  </ElSelect>
</template>

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
  right: 25px;  /* 避免与原生清除按钮重叠 */
}
</style>
