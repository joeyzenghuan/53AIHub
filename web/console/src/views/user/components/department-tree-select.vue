<script setup lang="ts">
import { ref, onMounted, getCurrentInstance, watch } from 'vue'
import { departmentApi } from '@/api/modules/department'

const { proxy } = getCurrentInstance()

const props = withDefaults(defineProps<{
	modelValue: number
}>(), {
	modelValue: ''
})

const emits = defineEmits<{
	(e: 'update:modelValue', value: any): void
	(e: 'change', result: { value: any }): void
}>()

const selectValue = ref(props.modelValue)
const treeData = ref([])

const fetchDepartmentTree = async () => {
	if (treeData.value.length) return
	treeData.value = await departmentApi.fetch_department_tree()
}
const filterNodeMethod = (value, data) => data.label.includes(value)
const handleChange = (value: number) => {
	emits('update:modelValue', selectValue.value)
	emits('change', { value: selectValue.value })
	proxy.$forceUpdate()
}

onMounted(async () => {
	await fetchDepartmentTree()
})

watch(() => props.modelValue, (value) => {
	selectValue.value = value
})
</script>

<template>
	<div>
		<ElTreeSelect check-strictly show-checkbox check-on-click-node size="large" clearable filterable
			collapse-tags collapse-tags-tooltip :filter-node-method="filterNodeMethod" :render-after-expand="false"
			:placeholder="$t('internal_user.account.department_placeholder')" :data="treeData" :default-expanded-keys="[0]"
			v-model="selectValue" @change="handleChange">
			<template #default="{ data }">
				<div>{{ data.label }}</div>
			</template>
		</ElTreeSelect>
	</div>
</template>

<style scoped lang="scss">
</style>

