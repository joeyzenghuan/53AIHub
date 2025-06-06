<script setup lang="ts">
import { Search, MoreFilled } from '@element-plus/icons-vue'
import GroupAddDialog from '../components/group-add-dialog.vue'

import { onMounted, ref, reactive, computed } from 'vue'
import { groupApi, GROUP_TYPE_INTERNAL_USER } from '@/api/modules/group'
import { useEnterpriseStore } from '@/stores'

const enterpriseStore = useEnterpriseStore()

const groupAddRef = ref()
const filterForm = reactive({
	groupKeyword: '',
	groupId: 0,
	activeTabIndex: 0,
})
const groupData = ref([])
const groupLoading = ref(false)

const activeGroupInfo = computed(() => {
	return groupData.value.find(item => item.group_id === filterForm.groupId) || {}
})

const fetchGroupData = async () => {
	groupLoading.value = true
	const list = await groupApi.list({ params: { group_type: GROUP_TYPE_INTERNAL_USER } }).finally(() => {
		groupLoading.value = false
	})
	groupData.value = list.filter(item => item.group_name && item.group_name.includes(filterForm.groupKeyword))
	if (!filterForm.groupId) filterForm.groupId = (groupData.value[0] || {}).group_id || 0
}
const handleGroupClick = (data = {}) => {
	filterForm.groupId = data.group_id
	refresh()
}
const handleGroupCommand = async (command: string, data: any, index: number) => {
	switch (command) {
		case 'create':
		case 'rename':
			groupAddRef.value.open({
				data,
				success: () => {
					fetchGroupData()
				}
			})
			break
		case 'delete':
			await ElMessageBox.confirm(window.$t('group_delete_confirm'), window.$t('action_delete'))
			await groupApi.delete({ data: { group_id: data.group_id } })
			ElMessage.success(window.$t('action_delete_success'))
			fetchGroupData()
			break
	}
}

const handleTabChange = (index: number) => {
	filterForm.activeTabIndex = index
	refresh()
}
const refresh = () => {
	if (filterForm.activeTabIndex === 0) {
		userFilterForm.page = 1
		return fetchUserData()
	}
	else if (filterForm.activeTabIndex === 1) {
		return fetchAgentData()
	}
}

const userFilterForm = reactive({
	keyword: '',
	page: 1,
	pageSize: 10,
})
const userTableData = ref([])
const userTableTotal = ref(0)
const userLoading = ref(false)
const fetchUserData = async () => {
	userLoading.value = true
	const { total = 0, list = [] } = await groupApi.user_list({
		group_id: filterForm.groupId,
		keyword: userFilterForm.keyword,
		offset: (userFilterForm.page - 1) * userFilterForm.pageSize,
		limit: userFilterForm.pageSize,
	}).finally(() => {
		userLoading.value = false
	})
	userTableTotal.value = total
	userTableData.value = [...list]
}
const onUserPageChange = (page: number) => {
	userFilterForm.page = page
	fetchUserData()
}
const onUserPageSizeChange = (pageSize: number) => {
	userFilterForm.pageSize = pageSize
	refresh()
}
const handleUserAddConfirm = async ({ value = [] } = {}) => {
	const department_ids = value.filter(item => +item.did).map(item => +item.did)
	const user_ids = value.filter(item => +item.user_id).map(item => +item.user_id)
	const data = {
		group_id: filterForm.groupId,
		department_ids,
		user_ids,
	}
	await groupApi.batch_add_user(data)
	ElMessage.success(window.$t('action_add_success'))
	refresh()
}
const handleUserRemove = async (data = {}) => {
	await ElMessageBox.confirm(window.$t('internal_user.group.remove_user_confirm'), window.$t('tip'))
	await groupApi.remove_user({
		group_id: filterForm.groupId,
		permission_ids: [data.permission_id],
	})
	ElMessage.success(window.$t('action_remove_success'))
	fetchUserData()
}

const agentData = ref([])
const agentLoading = ref(false)
const fetchAgentData = async () => {
	agentLoading.value = true
	const { list = [] } = await groupApi.agent_list({
		group_id: filterForm.groupId,
		offset: 0,
		limit: 1000,
	}).finally(() => {
		agentLoading.value = false
	})
	agentData.value = list
}
const handleAgentAddConfirm = async ({ value = [] } = {}) => {
	const agent_ids = value.filter(item => +item.agent_id).map(item => +item.agent_id)
	const data = {
		group_id: filterForm.groupId,
		agent_ids,
	}
	await groupApi.batch_add_agent(data)
	ElMessage.success(window.$t('action_add_success'))
	refresh()
}
const handleAgentRemove = async ({ value = [] } = {}) => {
	const agent_ids = value.filter(item => +item.agent_id).map(item => +item.agent_id)
	await ElMessageBox.confirm(window.$t('internal_user.group.remove_agent_confirm'), window.$t('tip'))
	await groupApi.remove_agent({
		group_id: filterForm.groupId,
		agent_ids,
	})
	ElMessage.success(window.$t('action_remove_success'))
	fetchAgentData()
}

onMounted(async () => {
	await fetchGroupData()
	refresh()
})
</script>

<template>
	<ElContainer class="bg-white h-full">
		<ElAside width="280px" class="flex flex-col px-5 py-6 box-border border-r border-[#e5e5e5]">
			<div class="flex items-center gap-2">
				<ElInput class="flex-1 h-[36px]" v-model="filterForm.groupKeyword" size="default" clearable
					:prefix-icon="Search" :placeholder="$t('internal_user.group.search_placeholder')" @change="fetchGroupData" />
			</div>
			<ul v-loading="groupLoading" class="flex-1 h-0 w-full box-border mt-4 overflow-auto">
				<li v-for="(item, index) in groupData" :key="item.group_id"
					class="group w-full box-border flex items-center gap-2 cursor-pointer  hover:bg-[#f5f7fa]"
					@click="handleGroupClick(item)">
					<div class="flex-1 w-0 box-border text-sm truncate rounded-md py-2 px-4 hover:bg-[#F5F8FF]"
						:class="[filterForm.groupId === item.group_id ? 'text-[#3664EF]' : 'text-[#333]']" :title="item.group_name">
						{{ item.group_name || '--' }}
					</div>
					<ElDropdown @command="handleGroupCommand($event, item, index)">
						<span>
							<ElIcon class="text-[#999] rotate-90 mr-2 cursor-pointer invisible group-hover:visible">
								<MoreFilled />
							</ElIcon>
						</span>
						<template #dropdown>
							<ElDropdownMenu>
								<ElDropdownItem command="rename">
									{{ $t('action_rename') }}
								</ElDropdownItem>
								<ElDropdownItem command="delete">
									<span class="text-[#F56C6C]">
										{{ $t('action_delete') }}
									</span>
								</ElDropdownItem>
							</ElDropdownMenu>
						</template>
					</ElDropdown>
				</li>
				<ElEmpty v-if="!groupData.length" class="mt-10" :description="$t('no_data')" />
			</ul>
			<div class="w-full flex items-center gap-2 mt-4">
				<ElButton type="primary" plain size="large" class="mx-auto !border-none" @click="handleGroupCommand('create')">
					+{{ $t('internal_user.group.create') }}
				</ElButton>
			</div>
		</ElAside>
		<ElMain>
			<div class="h-[36px] flex items-center">
				<label class="cursor-pointer" :class="[filterForm.activeTabIndex === 0 ? 'text-[#3664EF]' : 'text-[#333]']"
					@click="handleTabChange(0)">
					{{ $t('internal_user.group.member') }}
				</label>
				<ElDivider direction="vertical" />
				<label class="cursor-pointer" :class="[filterForm.activeTabIndex === 1 ? 'text-[#3664EF]' : 'text-[#333]']"
					@click="handleTabChange(1)">
					{{ $t('internal_user.group.usable') }}
				</label>
			</div>
			<div v-if="filterForm.activeTabIndex === 0">
				<div class="flex items-center justify-between h-[40px] gap-4">
					<h1 :title="activeGroupInfo.group_name" class="truncate">{{ activeGroupInfo.group_name || '--' }}</h1>
					<div class="flex items-center gap-4">
						<ElInput v-model="userFilterForm.keyword" style="width: 268px" size="large" clearable :prefix-icon="Search"
							:placeholder="$t('internal_user.organization.search_placeholder')" @change="refresh" />
						<DeptMemberPicker @confirm="handleUserAddConfirm">
							<template #trigger>
								<ElButton class="min-w-[100px]" type="primary" size="large">
									{{ $t('action_add') }}
								</ElButton>
							</template>
						</DeptMemberPicker>
					</div>
				</div>
				<TablePlus class="mt-4" :data="userTableData" :total="userTableTotal" style="width: 100%"
					header-row-class-name="rounded overflow-hidden" header-cell-class-name="!bg-[#F6F7F8] !h-[60px] !border-none"
					:loading="userLoading" max-height="calc(100vh - 360px)" @pageCurrentChange="onUserPageChange"
					@pageSizeChange="onUserPageSizeChange">
					<ElTableColumn :label="$t('internal_user.account.name')" min-width="140" prop="nickname"
						show-overflow-tooltip>
						<template #default="{ row }">
							<SvgIcon class="inline-block mr-2" :name="row.resource_type === 'department' ? 'department' : 'member'"
								width="16px" height="16px" color="#999" />
							{{ row.nickname || row.name || '--' }}
						</template>
					</ElTableColumn>
					<ElTableColumn :label="$t('internal_user.account.mobile')" min-width="140" prop="mobile"
						show-overflow-tooltip>
						<template #default="{ row }">
							<span :class="{ 'text-[#9B9B9B]': !row.mobile }">{{ row.mobile || '--' }}</span>
						</template>
					</ElTableColumn>
					<ElTableColumn :label="$t('internal_user.account.department')" min-width="140" prop="department"
						show-overflow-tooltip>
						<template #default="{ row }">
							<span>{{ row.dept_names || enterpriseStore.info.name || '--' }}</span>
						</template>
					</ElTableColumn>
					<ElTableColumn :label="$t('operation')" width="80" fixed="right" align="right">
						<template #default="{ row }">
							<ElButton class="text-[#5A6D9E] !bg-transparent" type="text" :loading="row.deleting"
								@click="handleUserRemove(row)">
								{{ $t('action_remove') }}
							</ElButton>
						</template>
					</ElTableColumn>
				</TablePlus>
			</div>
			<div v-else-if="filterForm.activeTabIndex === 1">
				<div class="flex items-center gap-4 mt-2">
					<div class="h-[36px] leading-[36px] px-3 text-sm text-[#3664EF] bg-[#E9EFFF] rounded-md">
						{{ $t('agent') }}
					</div>
				</div>
				<AgentPicker class="mt-4" v-model="agentData" @confirm="handleAgentAddConfirm" @remove="handleAgentRemove" />
			</div>
		</ElMain>

		<GroupAddDialog ref="groupAddRef" />
	</ElContainer>
</template>