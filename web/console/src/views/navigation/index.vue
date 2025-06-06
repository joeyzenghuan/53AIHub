<script setup lang="ts">
import PcNavigationPane from './components/pc-navigation-pane.vue'
import MobileNavigationPane from './components/pc-navigation-pane.vue'
// import MobileNavigationPane from './components/mobile-navigation-pane.vue'

import { ref } from 'vue'

const tab_active_name = ref('pc')

const handlePreview = () => {}
const handleTabClick = () => {}
</script>

<template>
	<Layout class="px-[60px] py-8">
		<Header :title="$t('module.navigation')">
			<template #right>
				<el-button class="bg-transparent w-[96px] h-[36px] text-[#1D1E1F]" plain @click="handlePreview">
					预览
				</el-button>
			</template>
		</Header>

		<ElTabs class="mt-2" v-model="tab_active_name" @tab-click="handleTabClick">
			<ElTabPane :label="$t('module.pc_navigation')" name="pc" lazy>
				<PcNavigationPane />
			</ElTabPane>
			<ElTabPane :label="$t('module.mobile_navigation')" name="mobile" lazy>
				<MobileNavigationPane />
			</ElTabPane>
		</ElTabs>
	</Layout>
</template>

<style scoped lang="scss"></style>
