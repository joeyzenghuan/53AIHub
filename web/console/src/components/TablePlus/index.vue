<script setup lang="ts">
import { h, nextTick, onMounted, ref, useSlots, onUnmounted, watch, getCurrentInstance, computed } from 'vue'
import { Setting } from '@element-plus/icons-vue'
import { ElTableColumn } from 'element-plus'

import Sortable from 'sortablejs'
import createSlots from './create-slots'

import api from '@/apis'

const { proxy } = getCurrentInstance()
const tableData = computed(() => proxy.$attrs.data || [])
const props = withDefaults(defineProps<{
  type?: string
  page?: number
  limit?: number
  total?: number
  prefix?: string
  pagination?: boolean
  // 固定显示那几个字段
  fixedFields?: any[]
  hiddenProps?: any[]
  // 需要插入到那个后面
	insertIndex?: number
	loading?: boolean
	sortable?: boolean
}>(), {
  type: '',
  page: 1,
  limit: 10,
  total: 0,
  prefix: '',
  fixedFields: () => [],
  hiddenProps: () => [],
  pagination: true,
	loading: false,
	sortable: false,
})

const emits = defineEmits<{
  (event: 'pageSizeChange', data: any): any
	(event: 'pageCurrentChange', data: any): any
	(event: 'sortableChange', data: any): any
	(event: 'update:data', data: any): any
}>()

const MAX_SHOW_NUM = 30

const tableRef = ref()

const slots = useSlots()

const showSlots = ref([])
const visibleSlots = createSlots({
  mountedCallFun() {

  },
  updatedCallFun() {

  },
  unmountedCallFun() {

  },
})

const showFieldVisible = ref(false)
const allFieldList = ref([])
const showFieldList = ref([])

const onSizeChange = (...args) => {
  emits('pageSizeChange', ...args)
}
const onCurrentChange = (...args) => {
  emits('pageCurrentChange', ...args)
}

const createColumnVNode = (column) => {
  return h(ElTableColumn, {
    prop: column.prop,
    label: column.label,
    showOverflowTooltip: true,
    formatter: (row, column, cellValue) => {
      return cellValue || '--'
    },
  })
}

const handleSetting = () => {
  showFieldVisible.value = true
}

const handleFieldChange = (check: boolean, item: any) => {
  if (check)
    showFieldList.value.push({ ...item })
  else
    showFieldList.value = showFieldList.value.filter(i => i.id !== item.id)
}

const loadUserMemoryFieldList = async () => {
  const form_relation_id = props.type.split('user_memory_list_')[1] || 0
  let data = []
  let use_key_list = []
  data = []
  use_key_list = []
  const defaultSlotList = slots.default()
  allFieldList.value = data
  if (props.fixedFields && props.fixedFields.length) {
    props.fixedFields.forEach((key = '') => {
      if (!use_key_list.includes(key))
        use_key_list.unshift(key)
    })
  }
  if (use_key_list && use_key_list.length)
    showFieldList.value = use_key_list.map(key => data.find(item => item.field_key === key)).filter(item => item).map(item => ({ ...item }))
  else
    showFieldList.value = data.map(item => ({ ...item }))

  const list = showFieldList.value.map((item) => {
    return createColumnVNode({ prop: props.prefix + item.field_key, label: item.field_name })
  })

  let newSlotList = []
  if (Number(props.insertIndex) > -1) {
    const prevSlotList = defaultSlotList.slice(0, props.insertIndex)
    const nextSlotList = defaultSlotList.slice(props.insertIndex)
    newSlotList = [...prevSlotList, ...list, ...nextSlotList]
  }
  else {
    newSlotList = [...list, ...defaultSlotList]
  }
  if (props.hiddenProps && props.hiddenProps.length)
    newSlotList = newSlotList.filter(({ props: { prop: _prop = '' } = {} }: any = {}) => !props.hiddenProps.includes(_prop))
  showSlots.value = newSlotList
}
const handleCancel = () => {
  showFieldVisible.value = false
}
const handleConfirm = async () => {
  if (/^user_memory_list/im.test(props.type)) {
    await api.console.user_setting.save(props.type, {
      value: JSON.stringify(showFieldList.value.map(item => item.field_key)),
    })
    loadUserMemoryFieldList()
  }
  ElMessage.success('已设置')
  showFieldVisible.value = false
}

let sortableInstance: any = null
const initSortable = () => {
	if (!props.sortable || !tableData.value.length) return
	const sortable_el = tableRef.value.$el.querySelector('.el-table__body tbody')
	sortableInstance = Sortable.create(sortable_el, {
		onStart: (event = {}) => {
			const { target, oldIndex } = event
			target.children[oldIndex].style.background = '#ECF5FF'
		},
		onEnd: async (event = {}) => {
			const { from = {}, to = {}, target, newIndex: targetIndex, oldIndex: originIndex } = event
			if (target.children && target.children[targetIndex])
				target.children[targetIndex].style.background = 'transparent'
			if (targetIndex === originIndex) return
			const list = JSON.parse(JSON.stringify(tableData.value))
			const originData = list.splice(originIndex, 1)[0]
			list.splice(targetIndex, 0, originData)
			emits('update:data', [])
			await nextTick()
			emits('update:data', list)
			emits('sortableChange', { data: list, targetIndex, originIndex })
		},
	})
}
const destroySortable = () => {
	if (sortableInstance) {
		sortableInstance.destroy()
		sortableInstance = null
	}
}

onMounted(() => {
  nextTick(() => {
    if (/^user_memory_list/im.test(props.type)) {
      loadUserMemoryFieldList()
    }
    else {
      const slotList = slots.default()
      showSlots.value = slotList
    }
  })
})
onUnmounted(() => {
  destroySortable()
})

watch(() => tableData.value, async (val) => {
	destroySortable()
	await nextTick()
	initSortable()
}, {
	deep: true,
	immediate: true,
})
defineExpose({
  toggleRowSelection(...args) {
    tableRef.value.toggleRowSelection(...args)
  },
  refresh: () => {
    loadUserMemoryFieldList()
  },
})
</script>

<template>
	<!-- 继承属性 -->
	<ElTable ref="tableRef" v-loading="loading" v-bind="{ ...$attrs }">
		<ElTableColumn v-if="sortable" width="40">
			<div class="pr-3 sort-icon cursor-move">
				<SvgIcon name="drag" width="20px" height="28px" color="#C7C7C7" />
			</div>
		</ElTableColumn>
		<visibleSlots :vnode="showSlots" />
		<ElTableColumn v-if="allFieldList.length" class-name="table-setting" prop="system_setting" label="" width="20"
			align="center" fixed="right">
			<template #header="scope">
				<div class="cursor-pointer" @click="handleSetting">
					<el-icon>
						<Setting />
					</el-icon>
				</div>
			</template>
		</ElTableColumn>
		<template v-if="$slots.empty" #empty>
			<slot name="empty" />
		</template>
	</ElTable>

	<Pagination v-if="pagination" layout="sizes, prev, pager, next, jumper" :page="page" :page-size="limit" :total="total"
		@size-change="onSizeChange" @current-change="onCurrentChange" />

	<el-dialog v-model="showFieldVisible" title="列表显示设置" width="660px">
		<div class="flex border-b pb-4" style="height: 350px;">
			<div class="flex-1 flex flex-col overflow-y-auto">
				<div class="flex-none text-sm mb-3">
					<span class="text-[#182B50]">
						需显示的字段
					</span>
					<span class="text-[#182B5066]">
						（最多展示{{ MAX_SHOW_NUM }}个）
					</span>
				</div>
				<div class="flex-1 overflow-y-auto">
					<div class="el-checkbox-group">
						<template v-for="field in allFieldList" :key="field.field_key">
							<el-checkbox
								:disabled="fixedFields.includes(field.field_key) || (showFieldList.length === 1 && field.field_key === showFieldList[0].field_key)"
								:checked="Boolean(showFieldList.find(item => item.field_key === field.field_key))"
								:value="field.field_key" @change="handleFieldChange($event, field)">
								{{ field.field_name }}
							</el-checkbox>
						</template>
					</div>
				</div>
			</div>
			<div class="border-l mx-4" />
			<div class="flex-1 flex flex-col">
				<div class="flex-none text-sm mb-3">
					<span class="text-[#182B50]">
						显示顺序
					</span>
					<span class="text-[#182B5066]">
						（拖动分组调整分组顺序）
					</span>
				</div>
				<Sortable v-model="showFieldList" identity="id" class="flex-1 w-full flex flex-col gap-1 overflow-y-auto">
					<template #item="{ item, index }">
						<div class="flex-none h-8 flex items-center">
							<div class="pr-3 sort-icon cursor-move">
								<svg-icon name="drag" width="16px" height="32px" color="#a1a5af" />
							</div>
							<div class="flex-1 text-sm text-[#182B50] truncate">
								{{ item.field_name }}
							</div>
						</div>
					</template>
				</Sortable>
			</div>
		</div>

		<template #footer>
			<el-button size="large" type="default" @click="handleCancel">
				取消
			</el-button>
			<el-button v-debounce size="large" type="primary" @click="handleConfirm">
				保存
			</el-button>
		</template>
	</el-dialog>
</template>

<style>
.table-setting .cell{
	padding: 0 6px 0 0;
}
</style>

<style scoped>
::v-deep(.el-checkbox-group) {
	display: flex;
	flex-wrap: wrap;
}
::v-deep(.el-checkbox-group .el-checkbox) {
	flex: 0 0 50%;
  margin-right: 0;
	overflow: hidden;
}
::v-deep(.el-checkbox-group .el-checkbox__label) {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
