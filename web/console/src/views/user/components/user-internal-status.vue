<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'

import { getCurrentInstance } from 'vue'
import type { InternalUserStatus } from '@/api/modules/user'
import {
  INTERNAL_USER_STATUS_DISABLED,
  INTERNAL_USER_STATUS_ENABLED,
  INTERNAL_USER_STATUS_LABEL_MAP,
  INTERNAL_USER_STATUS_UNDEFINED,
  userApi,
} from '@/api/modules/user'

const props = withDefaults(defineProps<{
  modelValue: InternalUserStatus
  actionDisabled?: boolean
  userData?: any
  buttonClass?: string
  size?: 'small' | 'default' | 'large'
}>(), {
  modelValue: INTERNAL_USER_STATUS_UNDEFINED,
  actionDisabled: false,
  userData: () => ({}),
  buttonClass: '',
  size: 'default',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: InternalUserStatus): void
  (e: 'change', result: { value: InternalUserStatus }): void
}>()

const { proxy } = getCurrentInstance() as any

const TAG_TYPE_MAP = new Map<InternalUserStatus, string>([
  [INTERNAL_USER_STATUS_UNDEFINED, 'info'],
  [INTERNAL_USER_STATUS_ENABLED, 'success'],
  [INTERNAL_USER_STATUS_DISABLED, 'danger'],
])

const handleStatusChange = async (value: InternalUserStatus) => {
  if (!props.actionDisabled) {
    await userApi.update_user_status({ user_id: props.userData.user_id, status: value })
    ElMessage.success(window.$t('action_save_success'))
  }
  emit('update:modelValue', value)
  emit('change', { value })
  proxy.$forceUpdate()
}
</script>

<template>
  <div class="flex items-center">
    <ElTag
      :type="TAG_TYPE_MAP.get(modelValue)"
      :effect="modelValue === INTERNAL_USER_STATUS_UNDEFINED ? 'plain' : 'light'" :size="size"
    >
      {{ $t(INTERNAL_USER_STATUS_LABEL_MAP.get(modelValue) || '') }}
    </ElTag>
    <ElDropdown
      v-if="[INTERNAL_USER_STATUS_ENABLED, INTERNAL_USER_STATUS_DISABLED].includes(modelValue)" trigger="click"
      @command="handleStatusChange"
    >
      <span>
        <ElButton class="!px-2 ml-2" :class="buttonClass" :size="size === 'default' ? 'small' : 'default'" :icon="ArrowDown" />
      </span>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem
            :command="modelValue === INTERNAL_USER_STATUS_ENABLED ? INTERNAL_USER_STATUS_DISABLED : INTERNAL_USER_STATUS_ENABLED"
          >
            {{ $t(modelValue === INTERNAL_USER_STATUS_ENABLED ? 'internal_user.action.disabled'
              : 'internal_user.action.enable') }}
          </ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>
