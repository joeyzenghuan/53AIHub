<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

import FilterSelect from '@/components/Filter/select.vue'
import FilterDateRange from '@/components/Filter/date-range.vue'
import FilterUser from '@/components/Filter/user.vue'

import { systemLogApi } from '@/api/modules/system-log'
import { getSimpleDateFormatString } from '@/utils/moment'

const add_ref = ref()
const filter_form = reactive({
  action: null,
  module: null,
  time: [],
  offset: 0,
  limit: 10,
  user_id: [],
})

const actions = ref([])
const modules = ref([])

const tableData = ref([])
const tableTotal = ref(0)
const tableLoading = ref(false)

const loadList = async () => {
  const params = { ...filter_form }
  if (params.time && params.time.length) {
    params.start_time = params.time[0]
    params.end_time = params.time[1]
    delete params.time
  }
  if (params.user_id.length)
    params.user_id = params.user_id.map(item => item.user_id).join(',')

  const { data = {} } = await systemLogApi.list(params)
  tableData.value = data.system_logs.map((item) => {
    item.action_time = getSimpleDateFormatString({ date: item.action_time, format: 'YYYY-MM-DD hh:mm' })
    return item
  })
  tableTotal.value = data.count
}

const loadActions = async () => {
  const { data = [] } = await systemLogApi.actions()
  actions.value = data
}

const loadModules = async () => {
  const { data = [] } = await systemLogApi.modules()
  modules.value = data
}

const getActionLabel = (action: number) => {
  return actions.value.find(item => item.value === action)?.text || action
}
const getModuleLabel = (module: number) => {
  return modules.value.find(item => item.value === module)?.text || module
}

const onRefresh = () => {
  filter_form.offset = 0
  loadList()
}

const handleSizeChange = (size: number) => {
  filter_form.limit = size
  onRefresh()
}
const handleCurrentChange = (page: number) => {
  filter_form.offset = (page - 1) * filter_form.limit
  loadList()
}
onMounted(async () => {
  tableLoading.value = true
  await loadList().finally(() => {
    tableLoading.value = false
  })
  loadActions()
  loadModules()
  // await Promise.all([])
})
</script>

<template>
  <Layout class="px-[60px] py-8">
    <Header :title="$t('module.system_log')" />
    <div class="flex-1 flex flex-col bg-white p-6 mt-3 box-border  max-h-[calc(100vh-100px)] overflow-auto">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <FilterDateRange v-model="filter_form.time" size="default" :value-format="date => new Date(date).getTime()" @change="onRefresh" />
          <FilterSelect v-model="filter_form.action" show-all :options="actions" :prop="{ value: 'value', label: 'text' }" @change="onRefresh" />
          <FilterSelect v-model="filter_form.module" show-all :options="modules" :prop="{ value: 'value', label: 'text' }" @change="onRefresh" />
          <FilterUser v-model="filter_form.user_id" type="user" @change="onRefresh" />
          <!-- <DeptMemberPicker @confirm="handleUserAddConfirm">
            <template #trigger>
              <ElButton class="min-w-[100px]" type="primary" size="large">
                + {{ $t('action_add') }}
              </ElButton>
            </template>
          </DeptMemberPicker> -->
        </div>
      </div>

      <div v-loading="tableLoading" class="flex-1 overflow-y-auto bg-white rounded-lg mt-4">
        <TablePlus
          :data="tableData" :total="tableTotal" style="width: 100%"
          header-row-class-name="rounded overflow-hidden" header-cell-class-name="!bg-[#F6F7F8] !h-[60px] !border-none"
          @page-size-change="handleSizeChange" @page-current-change="handleCurrentChange"
        >
          <ElTableColumn :label="$t('system_log.log_time')" min-width="160" prop="action_time" />
          <ElTableColumn :label="$t('system_log.log_action')" min-width="100" prop="action" show-overflow-tooltip>
            <template #default="{ row }">
              <span :class="{ 'text-[#9B9B9B]': !row.action }">
                {{ getActionLabel(row.action) }}
              </span>
            </template>
          </ElTableColumn>
          <ElTableColumn
            :label="$t('system_log.log_module')" min-width="100" prop="module"
            show-overflow-tooltip
          >
            <template #default="{ row }">
              <span :class="{ 'text-[#9B9B9B]': !row.module }">
                {{ getModuleLabel(row.module) }}
              </span>
            </template>
          </ElTableColumn>
          <ElTableColumn :label="$t('system_log.log_operator')" min-width="100" prop="nickname" show-overflow-tooltip>
            <template #default="{ row }">
              <span :class="{ 'text-[#9B9B9B]': !row.nickname }">
                {{ row.nickname }}
              </span>
            </template>
          </ElTableColumn>
          <ElTableColumn :label="$t('system_log.log_label')" prop="content" min-width="140" show-overflow-tooltip />
          <ElTableColumn :label="$t('system_log.log_ip')" min-width="120" show-overflow-tooltip>
            <template #default="{ row }">
              <span :class="{ 'text-[#9B9B9B]': !row.ip }">
                {{ row.ip }}
              </span>
            </template>
          </ElTableColumn>

          <!-- <ElTableColumn :label="$t('operation')" width="100" fixed="right" align="right">
						<template #default="{ row }">
							<template v-if="ORDER_PAYMENT_TYPE_MANUAL === row.payment_type">
								<ElButton class="text-[#5A6D9E]" type="text" @click="handleAdd({ data: row })">
									{{ $t('action_edit') }}
								</ElButton>
								<ElButton class="text-[#5A6D9E]" type="text" @click="handleDelete({ data: row })">
									{{ $t('action_delete') }}
								</ElButton>
							</template>
							<span v-else class="text-[#9B9B9B]">
								--
							</span>
						</template>
					</ElTableColumn> -->
        </TablePlus>
      </div>
    </div>
  </Layout>
  <OrderAddDialog ref="add_ref" />
</template>

<style scoped>

</style>
