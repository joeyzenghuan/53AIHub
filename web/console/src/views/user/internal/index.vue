<script setup lang="ts">
import { ArrowDown, Search } from '@element-plus/icons-vue'
import { onMounted, reactive, ref, onUnmounted } from 'vue'
import AccountView from './account.vue'
import GroupView from './group.vue'
import OrganizationView from './organization.vue'

import { useUserStore } from '@/stores'
import { useRoute } from 'vue-router'
import { groupApi, GROUP_TYPE_USER } from '@/api/modules/group'
import eventBus from '@/utils/event-bus'

const route = useRoute()
const tabActiveName = ref('account')

onMounted(async () => {
})
onUnmounted(() => {
})
</script>

<template>
	<Layout class="px-[60px] py-8">
		<Header :title="$t(route.meta.title)" />
		<ElTabs class="mt-2 flex-1 h-0" v-model="tabActiveName">
			<ElTabPane :label="$t('internal_user.account.title')" name="account" lazy>
				<AccountView v-if="tabActiveName === 'account'" />
			</ElTabPane>
			<ElTabPane :label="$t('internal_user.group.title')" name="group" lazy>
				<GroupView v-if="tabActiveName === 'group'" />
			</ElTabPane>
			<ElTabPane :label="$t('internal_user.organization.title')" name="organization" lazy>
				<OrganizationView v-if="tabActiveName === 'organization'" />
			</ElTabPane>
		</ElTabs>
	</Layout>
</template>

<style scoped lang="scss">
::v-deep(.el-tab-pane) {
	height: 100%;
}
</style>
