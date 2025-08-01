<template>
	<Layout class="px-[60px] py-8">
		<Header :title="$t(route.meta.title)" />
		<div class="flex-1 flex flex-col bg-white px-10 py-8 mt-3 box-border max-h-[calc(100vh-100px)] overflow-auto">
			<div class="flex items-center justify-between">
				<ElInput v-model="filterForm.keyword" style="max-width: 268px" size="large" clearable :suffix-icon="Search"
					:placeholder="$t('navigation.search_placeholder')" @change="refresh" />
			</div>

			<div v-loading="tableLoading" class="flex-1 overflow-y-auto bg-white rounded-lg mt-4">
				<TablePlus v-model:data="tableData" :sortable="!filterForm.keyword" :total="tableTotal" style="width: 100%"
					header-row-class-name="rounded overflow-hidden" header-cell-class-name="!bg-[#F6F7F8] !h-[60px] !border-none"
					:pagination="false" @page-size-change="handleSizeChange" @page-current-change="handleCurrentChange"
					@sortable-change="handleSortableChange">
					<ElTableColumn :label="$t('name')" min-width="160" prop="name" show-overflow-tooltip />
					<ElTableColumn :label="$t('type')" width="100" prop="type" show-overflow-tooltip>
						<template #default="{ row }">
							<span :class="{ 'text-[#9B9B9B]': !row.type_label }">
								{{ $t(row.type_label) || '--' }}
							</span>
						</template>
					</ElTableColumn>
					<ElTableColumn :label="$t('jump_path')" min-width="160" prop="jump_path" show-overflow-tooltip>
						<template #default="{ row }">
							<span :class="{ 'text-[#9B9B9B]': !row.jump_path }">
								{{ row.jump_path || '--' }}
							</span>
						</template>
					</ElTableColumn>
					<ElTableColumn :label="$t('open_method')" width="100" prop="target" show-overflow-tooltip>
						<template #default="{ row }">
							<span :class="{ 'text-[#9B9B9B]': !row.target_label }">
								{{ $t(row.target_label) || '--' }}
							</span>
						</template>
					</ElTableColumn>
					<ElTableColumn :label="$t('navigation_is_open')" width="140" prop="status" show-overflow-tooltip>
						<template #default="{ row }">
							<ElSwitch v-model="row.status" :active-value="1" :inactive-value="0"
								@change="onStatusChange({ data: row })" />
						</template>
					</ElTableColumn>
					<ElTableColumn :label="$t('operation')" width="100" fixed="right" align="right">
						<template #default="{ row }">
							<div class="flex items-center justify-end gap-4">
								<ElTooltip v-if="row.type == NAVIGATION_TYPE.CUSTOM" placement="top" :content="$t('page_edit')">
									<span>
										<SvgIcon class="cursor-pointer" name="editor" color="#5A6D9E" width="16" @click="handlePageEdit({ data: row })" />
									</span>
								</ElTooltip>
								<ElTooltip placement="top" :content="$t('action_setting')">
									<span>
										<SvgIcon class="cursor-pointer" name="web-setting" color="#5A6D9E" width="16"
											@click="handleAdd({ data: row })" />
									</span>
								</ElTooltip>
								<ElTooltip placement="top" :content="$t('action_delete')">
									<ElIcon
										:class="[row.type == NAVIGATION_TYPE.SYSTEM ? 'text-[#BDC5D8] cursor-not-allowed' : 'text-[#5A6D9E] cursor-pointer']"
										@click="handleDelete({ data: row })">
										<Delete />
									</ElIcon>
								</ElTooltip>
							</div>
						</template>
					</ElTableColumn>
				</TablePlus>
				<ElButton class="mt-4 !border-none" type="primary" size="large" plain :disabled="tableData.length >= add_limit"
					@click="handleAdd">
					+ {{ $t('action_add') }}（{{ tableData.length }}/{{ add_limit }}）
				</ElButton>
			</div>
		</div>

		<NavCreateDrawer ref="navCreateRef" @success="refresh" />
	</Layout>
</template>

<script setup lang="ts">
import { Search, Delete } from '@element-plus/icons-vue'

import { reactive, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavCreateDrawer from './components/nav-create-drawer.vue'
import eventBus from '@/utils/event-bus'
import { navigationApi } from '@/api/modules/navigation'

import { NAVIGATION_TYPE } from '@/constants/navigation'


const route = useRoute()
const router = useRouter()

const navCreateRef = ref()
const filterForm = reactive({
	keyword: '',
	offset: 0,
	limit: 10,
})
const tableData = ref([])
const tableTotal = ref(0)
const tableLoading = ref(false)

const refresh = () => {
	filterForm.offset = 0
	fetchNavigationData()
}
const fetchNavigationData = async () => {
	tableLoading.value = true
	const { total = 0, list = [] } = await navigationApi.list(filterForm).catch(() => {
		tableLoading.value = false
	})
	if (!list.length) {
		await navigationApi.init()
		fetchNavigationData()
		return
	}
	tableTotal.value = total
	tableData.value = list.filter(item => item.name.includes(filterForm.keyword))
	tableLoading.value = false
}
const handleSizeChange = (size: number) => {
	filterForm.limit = size
	refresh()
}
const handleCurrentChange = (page: number) => {
	filterForm.offset = (page - 1) * filter_form.limit
	fetchNavigationData()
}
const onStatusChange = async ({ data: { navigation_id, status } }: { data: { navigation_id: number; status: boolean } }) => {
	await navigationApi.update_status({ navigation_id, status })
	ElMessage.success(window.$t(+status ? 'action_enable_success' : 'action_disable_success'))
}
const add_limit = 8
const handleAdd = ({ data = {} } = {}) => {
	navCreateRef.value.open({ data, navigationList: tableData.value })
}
const handlePageEdit = ({ data = {} } = {}) => {
	router.push({
		name: 'NavigationWebSetting',
		params: {
			navigation_id: data.navigation_id
		}
	})
}
const handleDelete = async ({ data = {} } = {}) => {
	if (data.type == NAVIGATION_TYPE.SYSTEM) return
  await ElMessageBox.confirm(window.$t('navigation.delete_confirm'), window.$t('tip'))
	await navigationApi.delete({ navigation_id: data.navigation_id })
  ElMessage.success(window.$t('action_delete_success'))
	fetchNavigationData()
}
const handleSortableChange = async ({ data = [], targetIndex, originIndex } = {}) => {
	const sortList = data.map((item, index) => ({ id: item.navigation_id, sort: 9999 - index }))
	await navigationApi.update_sort(sortList)
	ElMessage.success(window.$t('action_sort_success'))
	// fetchNavigationData()
}

onMounted(async () => {
	refresh()
	eventBus.on('user-login-success', refresh)
})
onUnmounted(() => {
	eventBus.off('user-login-success', refresh)
})
</script>

<style scoped lang="scss"></style>
