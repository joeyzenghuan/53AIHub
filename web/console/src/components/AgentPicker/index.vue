<script setup lang="ts">
import { Close, Check, Search } from '@element-plus/icons-vue'
import { ref, onMounted, computed, reactive, nextTick } from 'vue'
import { GROUP_TYPE_AGENT } from '@/api/modules/group'
import {
	agentApi,
} from '@/api/modules/agent'

const props = withDefaults(defineProps<{
	modelValue?: any[]
}>(), {
	modelValue: () => [],
})

const emits = defineEmits<{
	(e: 'update:modelValue', value: any[]): void
	(e: 'change', result: { value: any[] }): void
	(e: 'confirm', result: { value: any[] }): void
	(e: 'remove', result: { value: any[] }): void
}>()

const tableRef = ref()
const selectedValue = ref(JSON.parse(JSON.stringify(props.modelValue)))
const visible = ref(false)
const tableData = ref([])
const tableTotal = ref(0)
const loading = ref(false)
const filterForm = reactive({
	group_id: '-1',
	keyword: '',
	page: 1,
	pageSize: 10,
})
const checkedListMap = ref(new Map([]))

const checkedList = computed(() => {
	let list = Array.from(checkedListMap.value.values()).flat()
	list = list.filter((item, index, self) =>
		index === self.findIndex((t) => t.agent_id === item.agent_id) &&
		!props.modelValue.find((row: any) => row.agent_id === item.agent_id)
	)
	return list
})

const setModelValue = ({ value = [] } = {}) => {
	value = JSON.parse(JSON.stringify(value))
	selectedValue.value = value
	emits('update:modelValue', value)
	emits('change', { value })
}
const fetchAgentData = async () => {
	loading.value = true
	const { count = 0, agents = [] } = await agentApi.list({
		params: {
			group_id: filterForm.group_id,
			keyword: filterForm.keyword,
			offset: (filterForm.page - 1) * filterForm.pageSize,
			limit: filterForm.pageSize,
		}
	}).catch(() => {
		loading.value = false
	})
	tableTotal.value = count
	tableData.value = []
	await nextTick()
	tableData.value = agents.map((item = {}) => {
		item.value = +item.agent_id || 0
		item.label = item.name || ''
		return item
	})
	await nextTick()
	if (checkedList.value.length) {
		await nextTick()
		checkedList.value.forEach((item = {}) => {
			const row = tableData.value.find((row: any) => row.agent_id === item.agent_id)
			if (row) tableRef.value.toggleRowSelection(row)
		})
	}
	await nextTick()
	tableData.value.forEach((item = {}) => {
		const disabled = !!props.modelValue.find((row: any) => row.agent_id === item.agent_id)
		if (disabled && !checkedList.value.find((row: any) => row.agent_id === item.agent_id)) tableRef.value.toggleRowSelection(item)
	})
	loading.value = false
}
const open = async () => {
	checkedListMap.value = new Map([])
	selectedValue.value = JSON.parse(JSON.stringify(props.modelValue)).map((item = {}) => {
		item.value = +item.value || +item.agent_id || 0
		item.label = item.label || item.name || ''
		return item
	})
	visible.value = true
	await nextTick()
	refresh()
}
const close = () => {
	visible.value = false
}
const refresh = () => {
	filterForm.page = 1
	return fetchAgentData()
}
const onPageSizeChange = (pageSize: number) => {
	filterForm.pageSize = pageSize
	refresh()
}
const onPageChange = (page: number) => {
	filterForm.page = page
	fetchAgentData()
}
const onSelectionChange = (selection: any[]) => {
	if (loading.value) return
	checkedListMap.value.set(filterForm.group_id, [...selection])
}
const selectable = (data: any = {}) => {
	const disabled = !!props.modelValue.find((row: any) => row.agent_id === data.agent_id)
	return !disabled
}
const handleRemove = (item: any) => {
	selectedValue.value = selectedValue.value.filter(i => i.value !== item.value)
	emits('remove', { value: [item] })
}
const handleConfirm = () => {
	const value = JSON.parse(JSON.stringify(checkedList.value))
	setModelValue({ value })
	emits('confirm', { value })
	close()
}

onMounted(async () => {
})

defineExpose({
	open,
	close
})
</script>

<template>
	<div class="relative">
		<div v-if="$slots.trigger" @click="open">
			<slot name="trigger" />
		</div>
		<div v-if="!$slots.trigger" class="w-full flex items-center flex-wrap gap-2">
			<ElButton type="default" class="!bg-transparent !border-dashed border-[#3664EF] text-[#3664EF]" plain size="large"
				@click="open">
				+ {{ $t('action_add') }}
			</ElButton>
			<ElTag v-for="item in modelValue" :key="item.value" size="large" effect="plain" type="info" closable
				class="!h-[40px]" @close="handleRemove(item)">
				<img class="size-6 inline-block object-contain rounded-full overflow-hidden" :src="item.logo || ''" />
				<label class="text-[#333] inline-block mt-2 ml-2">{{ item.label }}</label>
			</ElTag>
		</div>
		<ElDialog v-model="visible" :title="$t('action_select')" :close-on-click-modal="false" width="800px"
			destroy-on-close append-to-body align-center @close="close">
			<div class="w-full flex items-center justify-between gap-4">
				<div class="flex-1 w-0">
					<GroupTabs ref="group_tabs_ref" v-model="filterForm.group_id" :group-type="GROUP_TYPE_AGENT"
						@change="refresh" />
				</div>
				<ElInput v-model="filterForm.keyword" style="width: 220px" size="large" clearable :suffix-icon="Search"
					:placeholder="$t('module.agent_search_placeholder')" @change="refresh" />
			</div>
			<TablePlus ref="tableRef" class="mt-5" :page="filterForm.page" :limit="filterForm.pageSize" :data="tableData"
				:total="tableTotal" style="width: 100%"
				header-row-class-name="rounded overflow-hidden" header-cell-class-name="!bg-[#F6F7F8] !h-[60px] !border-none"
				:loading="loading" max-height="54vh" @pageSizeChange="onPageSizeChange" @pageCurrentChange="onPageChange"
				@selection-change="onSelectionChange">
				<ElTableColumn type="selection" width="40" :selectable="selectable" />
				<ElTableColumn prop="date" :label="$t('module.agent')" min-width="260" show-overflow-tooltip>
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
				<ElTableColumn :label="$t('type')" width="200" show-overflow-tooltip>
					<template #default="{ row = {} }">
						{{ $t(row.agent_type_label) || '--' }}
					</template>
				</ElTableColumn>
			</TablePlus>

			<template #footer>
				<div class="py-4 flex items-center justify-between">
					<div class="text-sm text-[#768097] text-left"
						v-html="$t('selected_tip', { total: `<span class='text-[#3664EF]'>${checkedList.length}</span>` })" />
					<div class="flex-center">
						<ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click.stop="close">
							{{ $t('action_cancel') }}
						</ElButton>
						<ElButton class="w-[96px] h-[36px]" type="primary" :loading="loading" :disabled="!checkedList.length"
							@click="handleConfirm">
							{{ $t('action_confirm') }}
						</ElButton>
					</div>
				</div>
			</template>
		</ElDialog>
	</div>
</template>

<style scoped lang="scss">
::v-deep(.el-tabs__content),
::v-deep(.el-tabs__nav-wrap:after) {
	display: none;
}

::v-deep(.el-tabs__header) {
	margin-bottom: 0 !important;
}

::v-deep(.el-tabs--top>.el-tabs__header .el-tabs__item:last-child) {
	padding-left: 0;
}
</style>

