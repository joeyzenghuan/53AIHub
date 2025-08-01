<template>
  <div class="text-base text-[#1D1E1F] font-medium mt-10 mb-4">
    {{ $t('permission_setting') }}
  </div>
  <ElFormItem
    :hidden="!(enterprise.info.is_independent || enterprise.info.is_industry)"
    :label="$t('register_user.title')"
  >
    <GroupSelect
      v-model="store.form_data.subscription_group_ids"
      type="checkbox"
      :group-type="GROUP_TYPE.USER"
      :default-all="store.is_new"
      multiple
    />
  </ElFormItem>
  <ElFormItem
    :hidden="!(enterprise.info.is_enterprise || enterprise.info.is_industry)"
    :label="$t('internal_user.title')"
    prop="user_group_ids"
  >
    <GroupSelect
      v-model="store.form_data.user_group_ids"
      type="picker"
      :group-type="GROUP_TYPE.INTERNAL_USER"
      multiple
    />
  </ElFormItem>
</template>

<script setup lang="ts">
import { useAgentFormStore } from '../store'

import { GROUP_TYPE } from '@/constants/group'
import { useEnterpriseStore } from '@/stores/modules/enterprise'

const store = useAgentFormStore()

const enterprise = useEnterpriseStore()
</script>
