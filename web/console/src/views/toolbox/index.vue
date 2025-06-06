<script setup lang="ts">
import { MoreFilled } from '@element-plus/icons-vue'
import CreateDialog from './components/create-dialog.vue'
import ToolBox from './toolbox.vue'

import { ref, onMounted, onUnmounted, reactive, provide, computed } from 'vue'
import eventBus from '@/utils/event-bus'
import { aiLinkApi } from '@/api/modules/ai-link'
import { GROUP_TYPE_AI_LINK } from '@/api/modules/group'

const groupTabsRef = ref()
const createRef = ref()
const filterForm = reactive({
	group_id: 0,
	keyword: '',
})
const aiLinkList = ref([])
const loading = ref(false)

const showGroupOptions = computed(() => {
	let options = groupOptions.value.filter(item => +item.group_id > 0 && item.children && item.children.length)
	if (+filterForm.group_id > 0) {
		options = options.filter(item => item.group_id === +filterForm.group_id)
	}
	return options
})

onMounted(() => {
  refresh()
  eventBus.on('user-login-success', refresh)
})
onUnmounted(() => {
  eventBus.off('user-login-success', refresh)
})

const refresh = async () => {
	await loadListData()
}

const loadListData = async () => {
	loading.value = true
	const data = await aiLinkApi.list({ params: filterForm }).finally(() => {
		loading.value = false
	})
	aiLinkList.value = data
	setAiLinkToGroup()
}
const onCreate = ({ data = {} } = {}) => {
	if (+filterForm.group_id > 0) data.group_id = +filterForm.group_id
	createRef.value.open({ data })
}
const groupOptions = ref([])
provide('groupOptions', groupOptions)
const onGetOptions = ({ options = [] } = {}) => {
	groupOptions.value = options.map(item => ({
		...item,
		children: [],
	}))
	setAiLinkToGroup()
}
const setAiLinkToGroup = () => {
	groupOptions.value.forEach(item => {
		item.children = aiLinkList.value.filter(aiLink => aiLink.group_id === item.group_id)
	})
}
const onUrlOpen = ({ data = {} } = {}) => {
  window.open(data.url, '_blank')
}
const onCommand = async (command, data = {}) => {
	switch (command) {
		case 'edit':
			onCreate({ data })
			break
		case 'del':
			await ElMessageBox.confirm(window.$t('action_delete_confirm'), window.$t('action_delete_tip'))
			await aiLinkApi.delete({ data: { ai_link_id: data.ai_link_id } })
			ElMessage.success(window.$t('action_delete_success'))
			refresh()
			break
	}
}
</script>

<template>
	<Layout class="px-[60px] py-8">
		<Header :title="$t('module.ai_toolbox')">
			<template #right>
				<el-button type="primary" @click="onCreate">
					+{{ $t('action_add') }}
				</el-button>
			</template>
		</Header>
		<div class="flex-none flex items-center justify-between mt-5">
			<div class="flex-1 w-0">
				<GroupTabs ref="groupTabsRef" v-model="filterForm.group_id" :group-type="GROUP_TYPE_AI_LINK" @change="refresh"
					@get-options="onGetOptions" />
			</div>
			<div class="flex-none flex-center gap-3 ml-8">
				<Search v-model="filterForm.keyword" placeholder="module.ai_toolbox_search_placeholder" @change="refresh" />
				<div class="flex items-center gap-1 whitespace-nowrap cursor-pointer text-[#576D9C]" @click="groupTabsRef.open">
					<svg-icon name="cate-manage" width="14px" height="14px" />
					<div class="text-sm ">
						{{ $t('group') }}
					</div>
				</div>
			</div>
		</div>

		<div v-loading="loading" class="mt-6 flex-1 overflow-y-auto relative">
			<ElEmpty v-if="!aiLinkList.length" class="mt-10" :description="$t('no_data')" />
			<ul v-else>
				<li v-for="group in showGroupOptions" :key="group.group_id">
					<div v-show="!+filterForm.group_id || +filterForm.group_id < 0" :id="`toolbox_group_${group.group_id}`" class="text-[#4F5052] text-opacity-60 text-sm mb-4">
						{{ group.group_name }}
					</div>
					<ul class="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mb-9">
						<li
							v-for="item in group.children"
							:key="item.ai_link_id"
							class="h-[72px] bg-white border rounded p-4 flex items-center gap-2 cursor-pointer hover:shadow group"
							role="button"
							:aria-label="item.name"
							@click="onUrlOpen({ data: item })"
						>
							<img class="w-10 h-10 object-cover rounded-full overflow-hidden" :src="item.logo" />
							<div class="flex-1 w-0">
								<div class="flex items-center justify-between">
									<div class="text-sm text-[#1D1E1F] font-semibold line-clamp-1">
										{{ item.name }}
									</div>
									<ElDropdown trigger="click" @command="onCommand($event, item)">
										<div class="w-5 h-5 flex-center rounded invisible group-hover:visible hover:bg-[#F2F4F8]"
											@click.stop="() => { }">
											<ElIcon size="12">
												<MoreFilled />
											</ElIcon>
										</div>
										<template #dropdown>
											<ElDropdownMenu>
												<ElDropdownItem command="edit">
													{{ $t('action_edit') }}
												</ElDropdownItem>
												<ElDropdownItem command="del">
													<span class="text-[#FA5151]">
														{{ $t('action_delete') }}
													</span>
												</ElDropdownItem>
											</ElDropdownMenu>
										</template>
									</ElDropdown>
								</div>
								<div class="text-sm text-[#1D1E1F] text-opacity-60 line-clamp-1">
									{{ item.description }}
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>

		<!-- <ToolBox class="mt-4" /> -->

		<CreateDialog ref="createRef" @success="refresh" />
	</Layout>
</template>

<style scoped>

</style>
