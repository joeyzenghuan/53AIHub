<script setup lang="ts">
import UEditor from '@/components/UEditor/index.vue'

import { reactive, ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import eventBus from '@/utils/event-bus'
import { navigationApi, NAVIGATION_TYPE } from '@/api/modules/navigation'
import { useEnterpriseStore } from '@/stores'
import loadLib from '@/utils/loadLib'
import { lib_host } from '@/utils/config'

const enterpriseStore = useEnterpriseStore()
const enterpriseInfo = computed(() => enterpriseStore.info)

const ueditorRef = ref()
const route = useRoute()
const router = useRouter()
const loading = ref(false)
const detailData = ref({})
const navigationList = ref([])

const fetchNavigationData = async () => {
	const { navigation_id } = route.params
	loading.value = true
	const data = await navigationApi.detail({ navigation_id }).finally(() => {
		loading.value = false
	})
	data.updated_time = (new Date(data.updated_time || Date.now()).toLocaleString()).replace(/\//g, '-')
	const contentData = data.content || {}
	data.content_update_time = (new Date(contentData.updated_time || Date.now()).toLocaleString()).replace(/\//g, '-')
	ueditorRef.value.setValue(contentData.html_content || '')
	detailData.value = data
}
const handleSave = async () => {
	const html = await ueditorRef.value.getHtml()
	loading.value = true
	await navigationApi.save_content({ navigation_id: +route.params.navigation_id, html_content: html }).finally(() => {
		loading.value = false
	})
	ElMessage.success($t('action_save_success'))
	router.replace({ name: 'Navigation' })
}

onMounted(async () => {
	loading.value = true
	// await loadLib('ueditor')
	navigationApi.list({}).then(({ list = [] } = {}) => {
		navigationList.value = list
	})
	fetchNavigationData()
	eventBus.on('user-login-success', fetchNavigationData)
})
onUnmounted(() => {
	eventBus.off('user-login-success', fetchNavigationData)
})
</script>

<template>
	<Layout class="fixed top-0 left-0 w-screen h-screen z-[9] bg-[#F4F6FA]">
		<h1
			class="w-full px-[56px] h-[70px] flex items-center gap-3 shadow box-border bg-white sticky top-0 left-0 right-0 z-[9]">
			<SvgIcon name="web-edit" style="zoom: 1.2" color="#858585" width="24" />
			<div class="flex-1 flex flex-col gap-0.5">
				<span>{{ detailData.name || $t(route.meta.title) }}</span>
				<span class="text-xs text-[#9A9BA0]">{{ $t('last_edit') }}: {{ (detailData.content_update_time || '').slice(0, 15)
					}}</span>
			</div>
			<ElButton class="!ml-0 !min-w-[96px] !h-9" type="info" plain size="large" @click="router.replace({ name: 'Navigation' })">{{
				$t('action_cancel') }}</ElButton>
			<ElButton class="!ml-0 !min-w-[96px] !h-9" type="primary" size="large" :loading="loading" @click="handleSave">{{ $t('action_save') }}
			</ElButton>
		</h1>
		<div class="flex-1 flex flex-col w-5/6 max-w-[1084px] rounded box-border my-5 mx-auto bg-white"
			v-loading="loading">
			<div class="w-full h-[76px] px-8 box-border flex items-center gap-4 border-b">
				<ElImage :src="enterpriseInfo.logo" class="flex-none size-10 rounded" fit="cover" />
				<h2 class="flex-none text-[#1D1E1F] font-semibold">{{ enterpriseInfo.display_name || '--' }}</h2>
				<ElMenu class="flex-1 w-0 overflow-hidden ml-2 !border-none" mode="horizontal">
					<ElMenuItem class="!cursor-auto !opacity-100" v-for="item in navigationList" :key="item.navigation_id"
						:index="item.jump_path" disabled>
						<span class="!text-base !text-[#1D1E1F]">{{ item.name }}</span>
					</ElMenuItem>
				</ElMenu>
			</div>
			<div class="flex-1 w-full p-2 box-border">
				<UEditor ref="ueditorRef" />
			</div>
			<div
				class="w-full h-[64px] px-[56px] box-border flex items-center bg-[#22252E] rounded-sm text-sm text-[#989A9D]">
				{{ enterpriseInfo.copyright }}
			</div>
		</div>
	</Layout>
</template>

<style scoped lang="scss"></style>
