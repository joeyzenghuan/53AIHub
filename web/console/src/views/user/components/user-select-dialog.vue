<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'

import { computed, nextTick, reactive, ref } from 'vue'
import { useUserStore } from '@/stores/modules/user'
import {
  USER_ROLE_ADMIN,
  USER_ROLE_CREATOR,
  userApi,
} from '@/api/modules/user'

const emits = defineEmits<{
  (e: 'success', result: { value: any[] }): void
}>()

const user_store = useUserStore()

const tableRef = ref()
const visible = ref(false)
const loading = ref(false)
const filterForm = reactive({
  keyword: '',
  page: 1,
  pageSize: 10,
})
const tableData = ref([])
const tableTotal = ref(0)
const tabActiveName = ref('register')
const registerCheckedList = ref([])
const internalCheckedList = ref([])

const checkedList = computed(() => {
  let list = [...registerCheckedList.value, ...internalCheckedList.value]
  list = list.filter(item => ![USER_ROLE_ADMIN, USER_ROLE_CREATOR].includes(Number(item.role)))
  return list
})

let successCallback = null
const open = ({ value = [], success = null } = {}) => {
  filterForm.keyword = ''
  registerCheckedList.value = []
  internalCheckedList.value = []
  visible.value = true
  tabActiveName.value = 'register'
  refresh()
  successCallback = success
}
const close = () => {
  visible.value = false
}
const fetchUserList = async () => {
  loading.value = true
  const params = {
    keyword: filterForm.keyword,
    offset: (filterForm.page - 1) * filterForm.pageSize,
    limit: filterForm.pageSize,
  }
  const { total = 0, list = [] } = await (tabActiveName.value === 'register' ? user_store.loadListData : userApi.fetch_internal_user)(
    tabActiveName.value === 'register' ? { data: params } : params,
  ).catch(() => {
    loading.value = false
  })
  tableData.value = []
  await nextTick()
  tableData.value = [...list].map((item = {}) => {
    return item
  })
  tableTotal.value = +total || 0
  if (checkedList.value.length) {
    await nextTick()
    checkedList.value.forEach((item = {}) => {
      const row = tableData.value.find((row: any) => row.user_id === item.user_id)
      if (row)
        tableRef.value.toggleRowSelection(row)
    })
  }
  await nextTick()
  tableData.value.forEach((item = {}) => {
    const disabled = [USER_ROLE_ADMIN, USER_ROLE_CREATOR].includes(Number(item.role))
    if (disabled && !checkedList.value.find((row: any) => row.user_id === item.user_id))
      tableRef.value.toggleRowSelection(item)
  })
  loading.value = false
}
const refresh = () => {
  nextTick(() => {
    filterForm.page = 1
    return fetchUserList()
  })
}
const onPageSizeChange = (pageSize: number) => {
  filterForm.pageSize = pageSize
  refresh()
}
const onPageChange = (page: number) => {
  filterForm.page = page
  fetchUserList()
}
const onSelectionChange = (selection: any[]) => {
  if (loading.value)
    return
  if (tabActiveName.value === 'register')
    registerCheckedList.value = [...selection]
	 else
    internalCheckedList.value = [...selection]
}
const selectable = (data: any = {}) => {
  const disabled = [USER_ROLE_ADMIN, USER_ROLE_CREATOR].includes(Number(data.role))
  return !disabled
}
const onConfirm = () => {
  const value = JSON.parse(JSON.stringify(checkedList.value))
  if (typeof successCallback === 'function')
    successCallback({ value })
  emits('success', { value })
  close()
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <ElDialog
    v-model="visible" :title="$t('action_select')" :close-on-click-modal="false" width="800px" destroy-on-close
    append-to-body align-center @close="close"
  >
    <div class="w-full flex items-center justify-between">
      <ElTabs v-model="tabActiveName" @tab-click="refresh">
        <ElTabPane :label="$t('register_user.title')" name="register" lazy />
        <ElTabPane :label="$t('internal_user.title')" name="internal" lazy />
      </ElTabs>
      <ElInput
        v-model="filterForm.keyword" style="width: 220px" size="default" clearable :suffix-icon="Search"
        :placeholder="$t('module.operation_user_search_placeholder')" @change="refresh"
      />
    </div>
    <TablePlus
      ref="tableRef" class="mt-5" :data="tableData" :total="tableTotal" :page="filterForm.page"
      :limit="filterForm.pageSize" style="width: 100%" header-row-class-name="rounded overflow-hidden"
      header-cell-class-name="!bg-[#F6F7F8] !h-[60px] !border-none" :loading="loading"
      @page-size-change="onPageSizeChange" @page-current-change="onPageChange" @selection-change="onSelectionChange"
    >
      <ElTableColumn type="selection" width="40" :selectable="selectable" />
      <ElTableColumn :label="$t('user')" min-width="140" prop="nickname" show-overflow-tooltip />
      <!-- <el-table-column :label="$t('account')" min-width="140" prop="username" show-overflow-tooltip>
				<template #default="{ row }">
					<span :class="{ 'text-[#9B9B9B]': !row.username }">{{ row.username || '--' }}</span>
				</template>
			</el-table-column> -->
      <ElTableColumn :label="$t('mobile')" min-width="140" prop="mobile" show-overflow-tooltip>
        <template #default="{ row }">
          <span :class="{ 'text-[#9B9B9B]': !row.mobile }">{{ row.mobile || '--' }}</span>
        </template>
      </ElTableColumn>
      <ElTableColumn :label="$t('email')" min-width="140" prop="email" show-overflow-tooltip>
        <template #default="{ row }">
          <span :class="{ 'text-[#9B9B9B]': !row.email }">{{ row.email || '--' }}</span>
        </template>
      </ElTableColumn>
      <ElTableColumn :label="$t('register_time')" width="160" prop="register_time">
        <template #default="{ row }">
          <span :class="{ 'text-[#9B9B9B]': !row.register_time }">{{ (row.register_time || '').slice(0, 16) || '--'
          }}</span>
        </template>
      </ElTableColumn>
    </TablePlus>

    <template #footer>
      <div class="py-4 flex items-center justify-between">
        <div
          class="text-sm text-[#768097] text-left"
          v-html="$t('selected_tip', { total: `<span class='text-[#3664EF]'>${checkedList.length}</span>` })"
        />
        <div class="flex-center">
          <ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">
            {{ $t('action_cancel') }}
          </ElButton>
          <ElButton
            class="w-[96px] h-[36px]" type="primary" :loading="loading" :disabled="!checkedList.length"
            @click="onConfirm"
          >
            {{ $t('action_confirm') }}
          </ElButton>
        </div>
      </div>
    </template>
  </ElDialog>
</template>

<style scoped lang="scss">
::v-deep(.el-tabs__content), ::v-deep(.el-tabs__nav-wrap:after) {
	display: none;
}
::v-deep(.el-tabs__header) {
	margin-bottom: 0 !important;
}
::v-deep(.el-tabs--top>.el-tabs__header .el-tabs__item:last-child) {
	padding-left: 0;
}
</style>
