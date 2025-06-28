<script setup lang="ts">
import { Check, Close, Search } from '@element-plus/icons-vue'
import { onMounted, reactive, ref } from 'vue'
import { departmentApi, getRootDepartmentData } from '@/api/modules/department'
import {
  INTERNAL_USER_STATUS_ALL,
  userApi,
} from '@/api/modules/user'

const props = withDefaults(defineProps<{
  modelValue?: any[]
  type?: 'general' | 'department' | 'user'
  defaultFirstValue?: boolean
  multiple?: boolean
}>(), {
  modelValue: () => [],
  type: 'general',
  defaultFirstValue: true,
  multiple: true,
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: any[]): void
  (e: 'change', result: { value: any[] }): void
  (e: 'confirm', result: { value: any[] }): void
}>()

const treeData = ref([])
const rootData = ref({})
const loading = ref(false)
const selectedValue = ref(JSON.parse(JSON.stringify(props.modelValue)))
const visible = ref(false)

const setModelValue = ({ value = [] } = {}) => {
  value = JSON.parse(JSON.stringify(value))
  selectedValue.value = value
  emits('update:modelValue', value)
  emits('change', { value })
}
const fetchDepartmentTree = async () => {
  loading.value = true
  treeData.value = await departmentApi.fetch_department_tree().finally(() => {
    loading.value = false
  })
  rootData.value = treeData.value[0]
}

const treeRef = ref()
const filterForm = reactive({
  keyword: '',
})

const open = () => {
  selectedValue.value = JSON.parse(JSON.stringify(props.modelValue)).map((item = {}) => {
    item.value = +item.value || +item.did || +item.user_id || 0
    item.label = item.label || item.name || ''
    return item
  })
  visible.value = true
}
const close = () => {
  visible.value = false
}
const handleKeywordChange = () => {
  treeRef.value.filter(filterForm.keyword)
}
const filterNode = (value: string, data: any) => {
  if (!value)
    return true
  return data.name.includes(value)
}
const handleRemove = (item: any) => {
  selectedValue.value = selectedValue.value.filter(i => i.value !== item.value)
}
const handleNodeClick = (data: any) => {
  if (props.type === 'user' && !data.user_id)
    return

  if (props.multiple) {
    if (selectedValue.value.some(i => i.value === data.value))
      selectedValue.value = selectedValue.value.filter(i => i.value !== data.value)
    else
      selectedValue.value.push(data)
  }
  else {
    selectedValue.value = [data]
  }
}
const allUserData = ref([])
const fetchInternalUserData = async () => {
  const params = {
    status: INTERNAL_USER_STATUS_ALL,
    // keyword: filterForm.keyword,
    offset: 0,
    limit: 10000,
  }
  const { list = [] } = await userApi.fetch_internal_user(params)
  allUserData.value = list.map((item = {}) => {
    item.value = +item.user_id || 0
    item.label = item.nickname || item.name || ''
    return item
  })
}

const handleClear = () => {
  setModelValue({ value: [] })
}
const handleConfirm = () => {
  setModelValue({ value: selectedValue.value })
  emits('confirm', { value: selectedValue.value })
  close()
}

onMounted(async () => {
  if (['general', 'department', 'user'].includes(props.type)) {
    rootData.value = await getRootDepartmentData()
    if (props.defaultFirstValue && !props.modelValue.length)
      setModelValue({ value: [rootData.value] })
    await Promise.all([
      fetchDepartmentTree(),
      ['general', 'user'].includes(props.type) ? fetchInternalUserData() : Promise.resolve(),
    ])
    if (['general', 'user'].includes(props.type)) {
      const findData = (data: any = {}) => {
        data.children = data.children.map((item, index) => {
          item = findData(item)
          return item
        })
        allUserData.value.forEach((item) => {
          const dept_id_list = item.dept_id_list || []
          if (
            dept_id_list.includes(data.did)
						|| (!dept_id_list.length && data.did == 0)
          )
            data.children.push(JSON.parse(JSON.stringify(item)))
        })
        return data
      }
      treeData.value = treeData.value.map((item, index) => {
        item = findData(item)
        return item
      })
    }
  }
})

defineExpose({
  open,
  close,
})
</script>

<template>
  <div class="relative">
    <div v-if="$slots.trigger" @click="open">
      <slot name="trigger" />
    </div>
    <ul v-if="!$slots.trigger" class="w-full flex items-center flex-wrap gap-2">
      <li
        v-for="item in modelValue" :key="item.value"
        class="flex items-center gap-2 px-2 box-border border border-[#E5E5E5] rounded-sm text-[#666]"
      >
        <SvgIcon name="department" width="16px" height="16px" color="#57A1FF" />
        {{ item.name }}
      </li>
      <ElButton type="primary" link @click="open">
        {{ $t(!modelValue.length ? 'action_add' : 'action_modify') }}
      </ElButton>
    </ul>
    <ElDialog
      v-model="visible" :title="$t('action_select')" width="650px" :close-on-click-modal="false"
      destroy-on-close append-to-body
    >
      <div class="flex h-[400px]">
        <div class="flex-1 w-0 pr-4 box-border flex flex-col border-r border-[#E5E5E5]">
          <ElInput
            v-model="filterForm.keyword" class="w-full h-[36px]" size="default" clearable :prefix-icon="Search"
            :placeholder="type === 'user' ? $t('internal_user.organization.user_search_placeholder') : $t('internal_user.organization.department_search_placeholder')" @change="handleKeywordChange"
          />
          <ElTree
            ref="treeRef" class="mt-4 flex-1 h-0 box-border pr-1 overflow-auto" node-key="value" :data="treeData"
            :default-expanded-keys="[0]" :expand-on-click-node="false" :filter-node-method="filterNode"
            @node-click="handleNodeClick"
          >
            <template #default="{ data }">
              <div class="w-full flex items-center gap-2 group">
                <SvgIcon
                  :name="+data.user_id ? 'member' : 'department'" width="16px" height="16px"
                  :color="selectedValue.some(i => i.value === data.value) ? '#3664EF' : '#999'"
                />
                <div
                  class="flex-1 w-0 text-sm truncate"
                  :class="[selectedValue.some(i => i.value === data.value) ? 'text-[#3664EF]' : 'text-[#333]']"
                  :title="data.label"
                >
                  {{ data.label }}
                </div>
                <ElIcon v-if="selectedValue.some(i => i.value === data.value)" color="#3664EF">
                  <Check />
                </ElIcon>
              </div>
            </template>
          </ElTree>
        </div>
        <div class="flex-1 w-0 pl-4 box-border flex flex-col">
          <div class="h-10 flex items-center justify-between">
            <h4>
              {{ $t('internal_user.scope.selected_title') }}
            </h4>
            <!-- <ElButton type="primary" :disabled="!selectedValue.length" link @click="handleClear">
              {{ $t('action_clear') }}
            </ElButton> -->
          </div>
          <div class="flex-1 h-0 w-full mt-3 bg-[#FBF8FB] rounded overflow-auto">
            <ul class="box-border p-4 flex items-start flex-wrap gap-2">
              <li
                v-for="item in selectedValue" :key="item.value"
                class="py-1 bg-white px-2 box-border border border-[#E5E5E5] rounded-sm"
              >
                <SvgIcon class="inline-block mr-1" :name="+item.user_id ? 'member' : 'department'" width="16px" height="16px" color="#939499" />
                {{ item.label }}
                <ElButton
                  class="ml-1 !outline-none !border-none !bg-[#C4C4C4] !size-4" style="zoom: 0.9;" :icon="Close"
                  type="info" size="small" circle @click="handleRemove(item)"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="py-4 flex items-center justify-end">
          <ElButton size="large" @click.stop="close">
            {{ $t('action_cancel') }}
          </ElButton>
          <ElButton size="large" type="primary" @click="handleConfirm">
            {{ $t('action_confirm') }}
          </ElButton>
        </div>
      </template>
    </ElDialog>
  </div>
</template>

<style scoped lang="scss">
</style>
