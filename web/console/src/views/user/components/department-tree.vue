<script setup lang="ts">
import { Plus, Search, MoreFilled } from '@element-plus/icons-vue'
import DepartmentAddDialog from './department-add-dialog.vue'

import { onMounted, reactive, ref, computed } from 'vue'
import { departmentApi } from '@/api/modules/department'
import {
	userApi,
	INTERNAL_USER_STATUS_ALL,
} from '@/api/modules/user'

const props = withDefaults(defineProps<{
}>(), {
})

const emit = defineEmits<{
	(e: 'node-click', result: { data: any }): void
}>()

const treeRef = ref()
const filterForm = reactive({
	keyword: '',
})

const departmentAddRef = ref()
const treeData = ref([])
const memberData = ref([])
const loading = ref(false)
const isSearch = computed(() => !!filterForm.keyword)
const rootData = ref({})

const refresh = async () => {
	memberData.value = []
	if (isSearch.value) {
		treeRef.value.filter(filterForm.keyword)
		return fetchDepartmentList()
	}
	return fetchDepartmentTree()
}
const fetchDepartmentList = async () => {
	loading.value = true
	const { list = [] } = await userApi.fetch_internal_user({
		status: INTERNAL_USER_STATUS_ALL,
		keyword: filterForm.keyword,
		offset: 0,
		limit: 10000
	}).finally(() => {
		loading.value = false
	})
	memberData.value = list.map((item = {}) => {
		item.name = rootData.value.name
		return item
	})
}
const fetchDepartmentTree = async () => {
	loading.value = true
	treeData.value = await departmentApi.fetch_department_tree().finally(() => {
		loading.value = false
	})
	rootData.value = treeData.value[0]
}
const handleCommand = async (command: string, data: any, index: number) => {
	const parentNode = treeRef.value.getNode(data.pdid) || {}
	const parentData = parentNode.data || {}
	const parentChildren = parentData.children || []
	const prevData = parentChildren[index - 1] || {}
	const nextData = parentChildren[index + 1] || {}
	switch (command) {
		case 'add_children':
			departmentAddRef.value.open({
				parentDid: data.did,
				parentChildren: data.children,
				success: refresh
			})
			break
		case 'update_name':
			departmentAddRef.value.open({
				data,
				success: ({ data: newData = {} } = {}) => {
					data.name = data.label = newData.name
				}
			})
			break
		case 'move_up':
			loading.value = true
			await Promise.all([
				departmentApi.save({ did: data.did, name: data.name, pdid: data.pdid, sort: prevData.sort }),
				departmentApi.save({ did: prevData.did, name: prevData.name, pdid: prevData.pdid, sort: data.sort })
			]).finally(() => {
				loading.value = false
			})
			ElMessage.success(window.$t('action_save_success'))
			refresh()
			break
		case 'move_down':
			loading.value = true
			await Promise.all([
				departmentApi.save({ did: data.did, name: data.name, pdid: data.pdid, sort: nextData.sort }),
				departmentApi.save({ did: nextData.did, name: nextData.name, pdid: nextData.pdid, sort: data.sort })
			]).finally(() => {
				loading.value = false
			})
			ElMessage.success(window.$t('action_save_success'))
			refresh()
			break
		case 'delete':
			await ElMessageBox.confirm(window.$t('internal_user.department.delete_confirm'), window.$t('tip'))
			loading.value = true
			await departmentApi.delete(data.did).finally(() => {
				loading.value = false
			})
			ElMessage.success(window.$t('action_delete_success'))
			refresh()
			break
	}
}

const defaultExpandedKeys = ref([0])
const handleNodeExpand = (data: any, node: any, comp: any) => {
	defaultExpandedKeys.value.push(data.did)
}
const handleNodeCollapse = (data: any, node: any, comp: any) => {
	defaultExpandedKeys.value = defaultExpandedKeys.value.filter(key => key !== data.did)
}
const filterNode = (value: string, data: any) => {
	if (!value) return true
	return data.name.includes(value)
}
const handleNodeClick = (data: any) => {
	emit('node-click', { data })
}

onMounted(() => {
	fetchDepartmentTree()
})

defineExpose({
	refresh
})
</script>

<template>
	<div class="px-4 py-6 flex flex-col h-full">
		<div class="flex items-center gap-2">
			<ElInput class="flex-1 h-[36px]" v-model="filterForm.keyword" size="default" clearable :prefix-icon="Search"
				:placeholder="$t('internal_user.organization.search_placeholder')" @change="refresh" />
			<ElIcon size="18" color="#333333" class="cursor-pointer" @click="handleCommand('add_children', treeData[0], 0)">
				<Plus />
			</ElIcon>
		</div>
		<div v-loading="loading" class="mt-4 min-h-[300px] flex-1 h-0 overflow-auto">
			<ElTree ref="treeRef" node-key="did" :data="treeData" :class="[memberData.length ? 'hidden-empty-block' : '']"
				:default-expanded-keys="isSearch ? [] : defaultExpandedKeys" :filter-node-method="filterNode"
				@node-expand="handleNodeExpand" @node-collapse="handleNodeCollapse" @node-click="handleNodeClick">
				<template #default="{ node, data }">
					<div class="w-full flex items-center gap-2 group">
						<SvgIcon name="department" width="16px" height="16px" color="#57A1FF" />
						<div class="flex-1 w-0 text-[#333] text-sm truncate" :title="data.label">{{ data.label }}</div>
						<ElDropdown v-if="!isSearch" @command="handleCommand($event, data, data.index)">
							<span>
								<ElIcon class="text-[#999] rotate-90 mr-2 cursor-pointer invisible group-hover:visible">
									<MoreFilled />
								</ElIcon>
							</span>
							<template #dropdown>
								<ElDropdownMenu>
									<ElDropdownItem command="add_children">{{ $t('internal_user.department.add_children') }}
									</ElDropdownItem>
									<template v-if="data.did">
										<ElDropdownItem command="update_name">{{ $t('internal_user.department.update_name') }}
										</ElDropdownItem>
										<ElDropdownItem v-if="data.index > 0" command="move_up">{{ $t('internal_user.department.move_up') }}
										</ElDropdownItem>
										<ElDropdownItem v-if="data.lastIndex > data.index" command="move_down">{{
											$t('internal_user.department.move_down') }}</ElDropdownItem>
										<ElDropdownItem command="delete">{{ $t('internal_user.department.delete') }}</ElDropdownItem>
									</template>
								</ElDropdownMenu>
							</template>
						</ElDropdown>
					</div>
				</template>
			</ElTree>
			<ul v-if="isSearch" class="pb-4 w-full box-border">
				<li v-for="item in memberData" :key="item.did"
					class="w-full box-border flex items-center gap-2 cursor-pointer p-2  hover:bg-[#f5f7fa]"
					@click="handleNodeClick(item)">
					<SvgIcon name="member" width="16px" height="16px" />
					<div class="flex-1 w-0 text-[#333] text-sm truncate" :title="item.nickname">
						{{ item.nickname }}
					</div>
				</li>
			</ul>
		</div>
		<DepartmentAddDialog ref="departmentAddRef" />
	</div>
</template>

<style scoped>
::v-deep(.hidden-empty-block .el-tree__empty-block) {
	display: none;
}
</style>