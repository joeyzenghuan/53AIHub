<script setup lang="ts">
import { EditPen } from '@element-plus/icons-vue'
import PromptInput from '@/components/Prompt/input.vue'
import CreateDrawer from './create-drawer.vue'
import GuideView from './guide.vue'

import { computed, nextTick, onMounted, provide, ref, watch, reactive, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { promptApi } from '@/api/modules/prompt'
import eventBus from '@/utils/event-bus'
import { useFormDataStore } from './store'

const route = useRoute()
const router = useRouter()

const formDataStore = useFormDataStore()
const formData = formDataStore.formData
const detailData = formDataStore.detailData
const loading = formDataStore.loading
const submitting = formDataStore.submitting
const formRef = ref()
const createRef = ref()
const tabActiveName = ref('config')

const handleEdit = async () => {
	formDataStore.formatFormData()
	await nextTick()
	createRef.value.open()
}
const handleSave = async () => {
	const valid = await formRef.value.validate()
	if (!valid) return
	const data = await formDataStore.save()
	eventBus.emit(`prompt-update`, { data })
	formDataStore.fetchDetail()
}

onMounted(async () => {
	const prompt_id = route.query.prompt_id as string
	if (prompt_id) formDataStore.fetchDetail({ prompt_id })
})

onUnmounted(() => {
	formDataStore.reset()
})
</script>

<template>
	<Layout class="px-[60px] py-8">
		<Header back :title="detailData.name || $t('action_edit')" class="mb-5">
			<template #title_suffix>
				<ElButton class="bg-transparent !p-0 !size-6" size="default" :icon="EditPen" @click="handleEdit" />
			</template>
		</Header>
		<ElTabs v-model="tabActiveName" class="flex-1 prompt-tabs el-tabs--full">
			<ElTabPane :label="$t('prompt.config')" name="config" lazy>
				<div id="app-config-full-screen-hook" v-loading="loading" class="relative h-full bg-white flex flex-col">
					<div class="flex-1 flex flex-col overflow-hidden">
						<ElForm class="py-6 px-8" :model="formData" ref="formRef" label-position="top" label-width="120px">
							<ElFormItem :label="$t('prompt.content')" prop="content"
								:rules="[{ required: true, message: $t('form_input_placeholder') }]">
								<!-- <Fullscreen class="w-full" :z-index="9">
								<template #default="{ isopen, handler }"></template>
							</Fullscreen> -->
								<div class="border prompt-input-wrapper rounded w-full flex flex-col !bg-white overflow-hidden relative">
									<div class="min-h-10 pl-3 pr-2 border-b flex items-center justify-between rounded-t bg-white">
										<div class="flex-1 text-sm text-[#4F5052] truncate" :title="$t('role_instruction_desc')">
											*{{ $t('role_instruction_desc') }}
										</div>
										<div class="flex items-center gap-1">
											<ElTooltip placement="top" :content="$t('optimize_tip')">
												<span
													class="flex-center gap-1 text-[#2563EB] text-sm px-1 cursor-pointer opacity-60 pointer-events-none"
													@click.stop="onOptimize">
													<svg-icon name="hglt" width="18px" />
													{{ $t('optimize') }}
												</span>
											</ElTooltip>
											<div class="flex-none h-4 w-px border-r border-[#E1E2E6]" />
											<ElTooltip placement="top" :content="$t('generate_tip')">
												<span class="text-[#182B50] px-1 cursor-pointer opacity-60 pointer-events-none"
													@click.stop="onGenerate">
													<svg-icon name="magic-stick" width="18px" />
												</span>
											</ElTooltip>
											<!-- <el-tooltip placement="top" :content="$t('action_copy')">
											<span class="text-[#182B50] px-1 cursor-pointer" @click.stop="onCopy(store.form_data.prompt)">
												<svg-icon name="copy" width="18px" />
											</span>
										</el-tooltip> -->
											<!-- <el-tooltip placement="top" :content="$t(!isopen ? 'action_amplify' : 'action_shrink')">
											<span class="text-[#182B50] px-1 cursor-pointer" @click.stop="handler">
												<svg-icon :name="!isopen ? 'amplify' : 'shrink'" width="18px" />
											</span>
										</el-tooltip> -->
										</div>
									</div>
									<PromptInput v-model="formData.content" style="flex: none; height: calc(100vh - 400px);" showLine showToken
										@change="formRef.validateField('content')" />
								</div>
							</ElFormItem>
						</ElForm>
					</div>
				</div>
			</ElTabPane>
			<ElTabPane :label="$t('prompt.guide')" name="guide" lazy>
				<GuideView />
			</ElTabPane>
		</ElTabs>
		<div class="border-t px-4 py-5 bg-white">
			<ElButton class="w-[96px]" type="primary" size="large" :loading="loading || submitting" @click.stop="handleSave">
				{{ $t('action_save') }}
			</ElButton>
		</div>
	</Layout>
	<CreateDrawer ref="createRef" />
</template>

<style scoped>
.prompt-tabs :deep(.el-tabs__nav-wrap) {
	padding: 0 40px;
}
.is-error .prompt-input-wrapper {
	border-color: #F56C6C;
}
</style>
