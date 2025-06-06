<script setup lang="ts">
import { onMounted } from 'vue'

import Sider from './Sider.vue'

onMounted(async () => {

})
</script>

<template>
	<el-container class="h-full z-40 bg-[#F6F7F8] overflow-hidden">
		<Sider />
		<el-main class="h-full relative" style="--el-main-padding: 0;">
			<RouterView v-slot="{ Component, route }">
				<KeepAlive :include="route.path.includes('/agent') ? ['Agent'] : []">
					<component :is="Component" :key="route.path" />
				</KeepAlive>
			</RouterView>
		</el-main>
	</el-container>
</template>

<style>

</style>
