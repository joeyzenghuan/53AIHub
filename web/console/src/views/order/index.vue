<script setup lang="ts">
import { ArrowDown, Search, CircleCheck } from '@element-plus/icons-vue'
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
import OrderAddDialog from './components/order-add-dialog.vue'

import {
  ORDER_STATUS_ALL,
  ORDER_STATUS_EXPIRED,
  ORDER_STATUS_LABEL_MAP,
  ORDER_STATUS_NOT_CONFIRM,
  ORDER_STATUS_PAID,
  ORDER_STATUS_PENDING,
  orderApi,
} from '@/api'
import { PAYMENT_TYPE, PAYMENT_TYPE_LABEL_MAP } from '@/constants/payment'
import eventBus from '@/utils/event-bus'

const add_ref = ref()
const filter_form = reactive({
  status: ORDER_STATUS_ALL,
  pay_type: PAYMENT_TYPE.ALL,
  keyword: '',
  offset: 0,
  limit: 10,
})
const order_status_options = [ORDER_STATUS_ALL, ORDER_STATUS_NOT_CONFIRM, ORDER_STATUS_PENDING, ORDER_STATUS_PAID, ORDER_STATUS_EXPIRED].map(value => ({
  value,
  label: ORDER_STATUS_LABEL_MAP.get(value) || ORDER_STATUS_LABEL_MAP.get(ORDER_STATUS_ALL),
}))
const order_payment_type_options = [PAYMENT_TYPE.ALL, PAYMENT_TYPE.WECHAT, PAYMENT_TYPE.MANUAL].map(value => ({
  value,
  label: PAYMENT_TYPE_LABEL_MAP.get(value) || PAYMENT_TYPE_LABEL_MAP.get(PAYMENT_TYPE.ALL),
}))
const tableData = ref([])
const tableTotal = ref(0)
const tableLoading = ref(false)

const active_status_option = computed(() => {
  return order_status_options.find(opt => opt.value === filter_form.status) || {}
})
const active_payment_type_option = computed(() => {
  return order_payment_type_options.find(opt => opt.value === filter_form.pay_type) || {}
})

onMounted(async () => {
  refresh()
  eventBus.on('user-login-success', refresh)
})
onUnmounted(() => {
  eventBus.off('user-login-success', refresh)
})
const refresh = () => {
  filter_form.offset = 0
  loadList()
}
const loadList = async () => {
  tableLoading.value = true
  const { total = 0, 	list = [] } = await orderApi.list({ params: filter_form }).finally(() => {
    tableLoading.value = false
  })
  tableTotal.value = total
  tableData.value = list
}
const handleSizeChange = (size: number) => {
  filter_form.limit = size
  refresh()
}
const handleCurrentChange = (page: number) => {
  filter_form.offset = (page - 1) * filter_form.limit
  loadList()
}
const handleStatusCommand = (command: string) => {
  filter_form.status = command
  refresh()
}
const handlePaymentCommand = (command: string) => {
  filter_form.pay_type = command
  refresh()
}
const handleAdd = ({ data = {} } = {}) => {
  add_ref.value.open({ data })
}
const handleDelete = async ({ data = {} } = {}) => {
  await ElMessageBox.confirm(window.$t('module.operation_order_delete_confirm'), window.$t('tip'))
	await orderApi.delete_order({ id: data.id })
  ElMessage.success(window.$t('action_delete_success'))
  loadList()
}
const handleConfirm = async ({ data = {} } = {}) => {
  await ElMessageBox.confirm(window.$t('order.confirm_tip'), window.$t('tip'))
	await orderApi.confirm_order({ id: data.id })
	ElMessage.success(window.$t('action_confirm_success'))
	data.status = ORDER_STATUS_PAID
}
</script>

<template>
  <Layout class="px-[60px] py-8">
    <Header :title="$t('module.operation_order')" />
    <div class="flex-1 flex flex-col bg-white p-6 mt-3 box-border  max-h-[calc(100vh-100px)] overflow-auto">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <ElDropdown placement="bottom" @command="handleStatusCommand">
            <div
              class="!border-none !outline-none h-9 flex-center px-5 gap-1.5 rounded-2xl bg-[#F6F7F8] text-xs text-[#1D1E1F] cursor-pointer"
            >
              {{ $t(active_status_option.label || '') }}
              <ElIcon size="14" color="#9EA5B6">
                <ArrowDown />
              </ElIcon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="opt in order_status_options" :key="opt.value" :command="opt.value">
                  {{
                    $t(opt.label) }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </ElDropdown>
          <ElDropdown placement="bottom" @command="handlePaymentCommand">
            <div
              class="!border-none !outline-none h-9 flex-center px-5 gap-1.5 rounded-2xl bg-[#F6F7F8] text-xs text-[#1D1E1F] cursor-pointer"
            >
              {{ $t(active_payment_type_option.label || '') }}
              <ElIcon size="14" color="#9EA5B6">
                <ArrowDown />
              </ElIcon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="opt in order_payment_type_options" :key="opt.value" :command="opt.value">
                  {{
                    $t(opt.label) }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </ElDropdown>
        </div>
        <div class="flex-center gap-3">
          <ElInput
            v-model="filter_form.keyword" style="max-width: 268px" size="large" clearable :suffix-icon="Search"
            :placeholder="$t('module.operation_order_search_placeholder')" @change="refresh"
          />
          <ElButton class="min-w-[96px]" type="primary" size="large" @click="handleAdd">
						{{ $t('action_add') }}
					</ElButton>
        </div>
      </div>

      <div v-loading="tableLoading" class="flex-1 overflow-y-auto bg-white rounded-lg mt-4">
        <TablePlus
          :data="tableData" :total="tableTotal" style="width: 100%"
          header-row-class-name="rounded overflow-hidden" header-cell-class-name="!bg-[#F6F7F8] !h-[60px] !border-none"
          @page-size-change="handleSizeChange" @page-current-change="handleCurrentChange"
        >
          <ElTableColumn :label="$t('order_id')" min-width="160" prop="order_id" show-overflow-tooltip />
          <ElTableColumn
            :label="$t('order_subscription')" min-width="140" prop="subscription_name"
            show-overflow-tooltip
          >
            <template #default="{ row }">
              <span :class="{ 'text-[#9B9B9B]': !row.subscription_name }">
                {{ row.subscription_name }}*{{ row.duration }}{{ $t(row.time_unit) }}
              </span>
            </template>
          </ElTableColumn>
          <ElTableColumn :label="$t('order_amount')" min-width="140" prop="amount" show-overflow-tooltip>
            <template #default="{ row }">
              <span :class="{ 'text-[#9B9B9B]': !row.amount }">
                {{ row.currency || 'CNY' }}&nbsp;{{ ((+row.amount || 0) / 100).toFixed(2) }}
              </span>
            </template>
          </ElTableColumn>
          <ElTableColumn :label="$t('order_status')" min-width="120" show-overflow-tooltip>
            <template #default="{ row }">
							<div class="flex items-center gap-1">
								<ElTag
									class="!border-none" :type="row.status == ORDER_STATUS_NOT_CONFIRM ? 'danger'
										: row.status == ORDER_STATUS_PENDING ? 'primary'
											: row.status == ORDER_STATUS_EXPIRED ? 'warning'
												: 'success'"
								>
									{{ $t(ORDER_STATUS_LABEL_MAP.get(row.status) || '') }}
								</ElTag>
								<ElIcon v-if="row.status == ORDER_STATUS_NOT_CONFIRM" size="16" color="#2563EB" class="cursor-pointer" @click="handleConfirm({ data: row })">
									<CircleCheck />
								</ElIcon>
							</div>
            </template>
          </ElTableColumn>
          <ElTableColumn :label="$t('order_create_time')" width="160" show-overflow-tooltip>
            <template #default="{ row }">
              <span :class="{ 'text-[#9B9B9B]': !row.created_time }">
                {{ row.created_time.slice(0, 16) || '--' }}
              </span>
            </template>
          </ElTableColumn>
          <ElTableColumn :label="$t('user')" width="160" prop="nickname" show-overflow-tooltip>
            <template #default="{ row }">
              <span :class="{ 'text-[#9B9B9B]': !row.nickname }">
                {{ row.nickname || '--' }}
              </span>
            </template>
          </ElTableColumn>
          <ElTableColumn :label="$t('order_payment_type')" prop="pay_type" width="120" show-overflow-tooltip>
            <template #default="{ row }">
              {{ $t(PAYMENT_TYPE_LABEL_MAP.get(row.pay_type) || '') }}
            </template>
          </ElTableColumn>
          <ElTableColumn :label="$t('operation')" width="100" fixed="right" align="right">
						<template #default="{ row }">
							<template v-if="ORDER_PAYMENT_TYPE_MANUAL == row.payment_type && row.status == ORDER_STATUS_NOT_CONFIRM">
								<ElButton class="text-[#5A6D9E] !bg-transparent" type="text" @click="handleAdd({ data: row })">
									{{ $t('action_edit') }}
								</ElButton>
								<ElButton class="text-[#5A6D9E] !bg-transparent" type="text" @click="handleDelete({ data: row })">
									{{ $t('action_delete') }}
								</ElButton>
							</template>
							<span v-else class="text-[#9B9B9B]">
								--
							</span>
						</template>
					</ElTableColumn>
        </TablePlus>
      </div>
    </div>
  </Layout>
  <OrderAddDialog ref="add_ref" @success="loadList" />
</template>

<style scoped>

</style>
