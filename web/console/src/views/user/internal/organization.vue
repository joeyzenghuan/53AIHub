<script setup lang="ts">
import DepartmentTree from '../components/department-tree.vue'
import AccountView from './account.vue'

import { onMounted, reactive, ref, onUnmounted, provide } from 'vue'
import {
	userApi,
} from '@/api/modules/user'
import { getRootDepartmentData } from '@/api/modules/department'

const organizationData = ref({})
provide('organizationData', organizationData)

const handleNodeClick = ({ data = {} } = {}) => {
	organizationData.value = data
}

onMounted(async () => {
	organizationData.value = await getRootDepartmentData()
})
onUnmounted(() => {
})
</script>

<template>
	<ElContainer class="bg-white h-full">
		<ElAside class="border-r border-[#e5e5e5]">
			<DepartmentTree @node-click="handleNodeClick" />
		</ElAside>
		<ElMain class="!p-0">
			<AccountView />
		</ElMain>
	</ElContainer>
</template>

<style scoped></style>
