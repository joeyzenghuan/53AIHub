<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import AgentCreateDrawer from './agent-create-drawer.vue'

import { nextTick, reactive, ref } from 'vue'
import {
	PROVIDER_TYPE_53AI,
	PROVIDER_TYPE_DIFY,
	PROVIDER_TYPE_LABEL_MAP,
} from '@/api/modules/provider'
import { agentApi } from '@/api/modules/agent'
import { CHANNEL_TYPE_VALUE_MAP } from '@/api/modules/channel'
import { subscriptionApi } from '@/api/modules/subscription'
import { AGENT_TYPE_DIFY_AGENT, AGENT_TYPE_53AI_AGENT } from '@/api/modules/agent'

const emits = defineEmits(['change'])

const agentCreateRef = ref()
const visible = ref(false)
const filterForm = reactive({
	channel_types: PROVIDER_TYPE_DIFY,
	keyword: '',
	offset: 0,
	limit: 10,
})
const tableData = ref([])
const tableTotal = ref(0)
const tableLoading = ref(false)
const originData = ref({})
const subscriptionList = ref([])

const open = async ({ data = {}, type = PROVIDER_TYPE_DIFY } = {}) => {
	const { channel_config = {} } = data
	filterForm.channel_types = channel_config.channel_type || CHANNEL_TYPE_VALUE_MAP.get(type) || PROVIDER_TYPE_DIFY
	originData.value = data
	tableData.value = []
	await nextTick()
	visible.value = true
	refresh()
}
const close = () => {
	visible.value = false
}
const loadSubscriptionList = async () => {
	if (!subscriptionList.value.length) subscriptionList.value = await subscriptionApi.list({ params: { offset: 0, limit: 1000 } })
}
const refresh = () => {
	filterForm.offset = 0
  return loadListData()
}
const loadListData = async ({ channel_types = filterForm.channel_types } = {}) => {
	tableLoading.value = true
	await loadSubscriptionList()
  const { count = 0, agents = [] } = await agentApi.list({ params: { ...filterForm, channel_types } }).finally(() => {
    tableLoading.value = false
	})
	tableData.value = []
	await nextTick()
	tableData.value = agents.map((item = {}) => {
		item.user_group_ids = item.user_group_ids || []
		item.user_group_names = item.user_group_ids.map(value => (subscriptionList.value.find(row => row.group_id == value) || {}).group_name).filter(group_name => group_name)
		return item
	})
	tableTotal.value = count
	originData.value.agent_total = count
	return {
		count,
		agents,
	}
}
const onTableSizeChange = (size: number) => {
	filterForm.limit = size
	refresh()
}
const onTableCurrentChange = (page: number) => {
	filterForm.offset = (page - 1) * filterForm.limit
	loadListData()
}
const onAgentStatusChange = async ({ data: { agent_id, enable } }: { data: { agent_id: number; enable: boolean } }) => {
  await agentApi.updateStatus({ data: { agent_id, enable } })
  ElMessage.success(window.$t(enable ? 'action_enable_success' : 'action_disable_success'))
}
const onAgentDelete = async ({ data: { agent_id } = {} } = {}) => {
	await ElMessageBox.confirm(window.$t('agent_delete_confirm'), window.$t('action_delete'))
	await agentApi.delete({ data: { agent_id } })
	ElMessage.success(window.$t('action_delete_success'))
	loadListData()
}
const onAgentCreate = ({ data = {} } = {}) => {
	let agent_type = AGENT_TYPE_DIFY_AGENT
	if (filterForm.channel_types === CHANNEL_TYPE_VALUE_MAP.get(PROVIDER_TYPE_53AI)) agent_type = AGENT_TYPE_53AI_AGENT
	agentCreateRef.value.open({ agent_type, data: originData.value, agent_id: data.agent_id })
}
const onAgentCreateSuccess = ({ action = 'update' } = {}) => {
	if (action === 'create') return refresh()
	return loadListData()
}

defineExpose({
	open,
	close,
	loadListData,
	create: ({ data = {}, type = PROVIDER_TYPE_DIFY } = {}) => {
		const { channel_config = {} } = data
		filterForm.channel_types = channel_config.channel_type || CHANNEL_TYPE_VALUE_MAP.get(type) || PROVIDER_TYPE_DIFY
		originData.value = data
		onAgentCreate()
	},
})
</script>

<template>
	<ElDrawer :title="$t(PROVIDER_TYPE_LABEL_MAP.get(filterForm.channel_types))" v-model="visible" size="70%"
		destroy-on-close append-to-body :close-on-click-modal="false">
		<div class="flex items-center justify-between mb-4">
			<div>
				<ElInput :prefix-icon="Search" v-model="filterForm.keyword" :placeholder="$t('action_search')" size="large"
					@change="refresh" />
			</div>
			<ElButton type="primary" size="large" @click="onAgentCreate">
				{{ $t('action_add') }}
			</ElButton>
		</div>

		<TablePlus header-row-class-name="rounded overflow-hidden"
			header-cell-class-name="!bg-[#F6F7F8] !h-[60px] !border-none" :data="tableData" :total="tableTotal"
			:loading="tableLoading" :page="filterForm.offset + 1" :limit="filterForm.limit"
			@pageSizeChange="onTableSizeChange" @pageCurrentChange="onTableCurrentChange">
			<ElTableColumn prop="date" :label="$t('module.agent')" min-width="180" show-overflow-tooltip>
				<template #default="{ row }">
					<div class="flex items-center gap-2 w-full">
						<img class="flex-none w-8 h-8 rounded-full overflow-hidden" :src="row.logo" alt="">
						<div class="flex-1 w-0 text-sm flex flex-col">
							<div class="text-[#2563EB] truncate">{{ row.name || '--' }}</div>
							<div class="text-xs text-[#808080] truncate" v-show="row.description">{{ row.description || '' }}</div>
						</div>
					</div>
				</template>
			</ElTableColumn>
			<ElTableColumn :label="$t('usage_range')" min-width="140" show-overflow-tooltip>
				<template #default="{ row }">
					<span :class="!row.user_group_names.length ? 'text-[#999]' : ''">
						{{ row.user_group_names.join('、') || '--' }}
					</span>
				</template>
			</ElTableColumn>
			<ElTableColumn :label="$t('sort')" width="80" show-overflow-tooltip>
				<template #default="{ row = {} }">
					{{ row.sort }}
				</template>
			</ElTableColumn>
			<ElTableColumn :label="$t('action_enable')" width="80">
				<template #default="{ row }">
					<ElSwitch v-model="row.enable" @change="onAgentStatusChange({ data: row })" />
				</template>
			</ElTableColumn>
			<ElTableColumn :label="$t('operation')" width="120" align="right" fixed="right">
				<template #default="{ row }">
					<ElButton type="primary" link @click="onAgentCreate({ data: row })">
						{{ $t('action_edit') }}
					</ElButton>
					<ElButton type="primary" link @click="onAgentDelete({ data: row })">
						{{ $t('action_delete') }}
					</ElButton>
				</template>
			</ElTableColumn>
		</TablePlus>
	</ElDrawer>
	<AgentCreateDrawer ref="agentCreateRef" @success="onAgentCreateSuccess" />
</template>

<style scoped>
</style>
