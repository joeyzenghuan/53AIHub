<script setup lang="ts">
import type { Group, GroupType } from '@/api/modules/group'
import { ref, nextTick } from 'vue'

const props = withDefaults(defineProps<{
	groupType: GroupType
	modelValue: string
	options: Group[]
}>(), {
	groupType: 1,
	modelValue: '',
	options: [],
})

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void
	(e: 'change', result: { value: string }): void
	(e: 'get-options', result: { value: Group[] }): void
}>()

const group_ref = ref<InstanceType<typeof GroupDialog>>()
const active_tab = ref(props.modelValue)
const tab_options = ref<Group[]>(props.options)

const onTabChange = () => {
	emit('update:modelValue', active_tab.value)
	emit('change', { value: active_tab.value })
}
const onGroupChange = async ({ value = [] } = {}) => {
	tab_options.value = []
	await nextTick()
	tab_options.value = [{ group_id: '-1', group_name: 'all' }, ...value]
	if (!tab_options.value.find(item => item.group_id === active_tab.value)) {
		active_tab.value = tab_options.value[0].group_id
		onTabChange()
	}
	emit('get-options', { options: tab_options.value })
}

defineExpose({
	open: () => {
		group_ref.value?.open()
	},
})
</script>

<template>
	<ElTabs v-model="active_tab" class="group-tabs" type="card" @tab-change="onTabChange">
		<ElTabPane v-for="opt in tab_options" :key="opt.group_id" :label="$t(opt.group_name)" :name="opt.group_id" />
	</ElTabs>
	<GroupDialog ref="group_ref" :groupType="groupType" @change="onGroupChange" />
</template>

<style lang="scss" scoped>
.group-tabs {
	::v-deep(.el-tabs__header) {
		margin-bottom: 0;
	}

	::v-deep(.el-tabs__content) {
		display: none;
	}

	::v-deep(.el-tabs__header),
	::v-deep(.el-tabs__nav),
	::v-deep(.el-tabs__item) {
		border: none;
	}
	::v-deep(.el-tabs__item) {
		border-radius: 4px;
		background-color: #fff;
		color: #1D1E1F;
	}

	::v-deep(.el-tabs__item + .el-tabs__item) {
		margin-left: 12px;
	}

	::v-deep(.el-tabs__item.is-active) {
		background-color: #E0EAFF;
		color: #2563EB;
	}
}
</style>
