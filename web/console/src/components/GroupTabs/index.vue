<template>
  <ElDropdown v-if="type === 'dropdown'" ref="dropdownRef" trigger="click" placement="bottom-start" @visible-change="handleDropdownVisibleChange">
    <div>
      <ElButton size="large" type="info" plain class="!border-none !outline-none !bg-[--el-button-bg-color]">
        <span class="text-sm text-[#1D1E1F]">
          {{ selectedOptions.length ? (selectedOptions[0].group_name || '--') : $t('all_group') }}
        </span>
        <ElTooltip v-if="selectedOptions.length > 1" effect="light">
          <div class="inline-block bg-[#F6F7F8] leading-[24px] px-2 border rounded ml-2 text-[#9A9A9A]">
            +{{ selectedOptions.length - 1 }}
          </div>
          <template #content>
            <label
              v-for="opt in selectedOptions.slice(1)" :key="opt.group_id"
              class="inline-block bg-[#F6F7F8] leading-[24px] px-2 border rounded ml-2 my-2 text-[#9A9A9A]"
            >
              {{ opt.group_name }}
            </label>
          </template>
        </ElTooltip>
        <ElIcon class="ml-2" size="16" color="#A4AABA">
          <ArrowDown />
        </ElIcon>
      </ElButton>
    </div>
    <template #dropdown>
      <ElDropdownMenu class="!w-[220px] !px-4 !py-2 box-border overflow-y-auto overflow-x-hidden">
        <div v-if="!tabOptions.length" class="text-center text-[#A4AABA] text-sm py-8">
          {{ $t('no_data') }}
        </div>
        <ElCheckboxGroup v-else v-model="selectedValue" class="max-h-[60vh] overflow-y-auto overflow-x-hidden">
          <ElCheckbox v-for="opt in tabOptions" :key="opt.group_id" class="inline-block w-full" :label="opt.group_id">
            <span class="text-sm text-[#333435]">
              {{ opt.group_name }}
            </span>
          </ElCheckbox>
        </ElCheckboxGroup>
        <ElDivider class="!my-2" />
        <div>
          <div class="w-full flex items-center justify-between">
            <div class="cursor-pointer text-[#5A6D9E] text-sm hover:opacity-80" @click="groupRef.open">
              {{ $t('group_management') }}
            </div>
            <div>
              <ElButton class="h-[28px]" size="small" @click="handleDropdownCancel">
                {{ $t('action_cancel') }}
              </ElButton>
              <ElButton class="h-[28px]" type="primary" size="small" @click="handleDropdownConfirm">
                {{ $t('action_confirm') }}
              </ElButton>
            </div>
          </div>
        </div>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
  <ElTabs v-else-if="type === 'tabs-pure'" v-model="activeTab" class="group-tabs" type="card" @tab-change="onTabChange">
    <ElTabPane v-for="opt in options" :key="opt.group_id" :label="opt.group_name" :name="opt.group_id" :disabled="disabled || opt.disabled"  />
  </ElTabs>
  <ElTabs v-else v-model="activeTab" class="group-tabs" type="card" @tab-change="onTabChange">
    <ElTabPane v-for="opt in tabOptions" :key="opt.group_id" :label="$t(opt.group_name)" :name="opt.group_id" :disabled="disabled || opt.disabled" />
  </ElTabs>
  <GroupDialog v-if="groupType" ref="groupRef" :group-type="groupType" @change="onGroupChange" />
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue';

import { computed, nextTick, ref } from 'vue';
import type { Group } from '@/api/modules/group';
import type { GroupType } from '@/constants/group';

const props = withDefaults(defineProps<{
  type?: 'tabs' | 'dropdown' | 'tabs-pure'
  groupType?: GroupType
  modelValue?: string | number | string [] | number [] | null
  options?: Group[]
	disabled?: boolean
}>(), {
  type: 'tabs',
  modelValue: null,
  groupType: 1,
  options: [],
	disabled: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', result: { value: string }): void
  (e: 'get-options', result: { options: Group[] }): void
}>()

const dropdownRef = ref<InstanceType<typeof ElDropdown>>()
const groupRef = ref<InstanceType<typeof GroupDialog>>()
const activeTab = ref(props.modelValue)
const tabOptions = ref<Group[]>(props.options)
const selectedValue = ref(props.modelValue)

const selectedOptions = computed(() => {
  return tabOptions.value.filter(item => selectedValue.value.includes(item.group_id))
})

const setModelValue = (value: string | number | string [] | number []) => {
  value = JSON.parse(JSON.stringify(value))
  emit('update:modelValue', value)
  emit('change', { value })
}
const onTabChange = () => {
  setModelValue(activeTab.value)
}
const onGroupChange = async ({ value = [] } = {}) => {
  if (props.type === 'tabs-pure')
    return
  tabOptions.value = []
  await nextTick()
  tabOptions.value = [...value]
  if (['tabs'].includes(props.type)) {
    tabOptions.value.unshift({ group_id: '-1', group_name: 'all' })
    if (!tabOptions.value.find(item => item.group_id === activeTab.value)) {
      activeTab.value = tabOptions.value[0].group_id
      onTabChange()
    }
  }
  emit('get-options', { options: tabOptions.value })
}
const handleDropdownCancel = () => {
  selectedValue.value = JSON.parse(JSON.stringify(props.modelValue || []))
  dropdownRef.value?.handleClose()
}
const handleDropdownConfirm = async () => {
  setModelValue(selectedValue.value)
  await nextTick()
  dropdownRef.value?.handleClose()
}
const handleDropdownVisibleChange = (visible: boolean) => {
  if (!visible)
    handleDropdownCancel()
}

defineExpose({
  open: () => {
    groupRef.value?.open()
  },
  getData: () => {
    return tabOptions.value
  },
})
</script>

<style lang="scss" scoped>
.group-tabs {
	::v-deep(.el-tabs__header) {
		margin-bottom: 0;
	}

	::v-deep(.el-tabs__content) {
		display: none;
	}

	::v-deep(.el-tabs__header),
	::v-deep(.el-tabs__nav),
	::v-deep(.el-tabs__item) {
		border: none;
	}
	::v-deep(.el-tabs__item) {
		border-radius: 4px;
		background-color: #fff;
		color: #1D1E1F;
	}

	::v-deep(.el-tabs__item + .el-tabs__item) {
		margin-left: 12px;
	}

	::v-deep(.el-tabs__item.is-active) {
		background-color: #E0EAFF;
		color: #2563EB;
	}
	::v-deep(.el-tabs__item.is-disabled) {
		opacity: 0.7;
	}
}
</style>
