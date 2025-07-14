<template>
	<Layout class="px-[60px] py-8">
		<Header back :title="detailData.name || $t('action_edit')" class="mb-5">
			<template #title_suffix>
				<ElButton class="bg-transparent !p-0 !size-6" size="default" :icon="EditPen" @click="handleEdit" />
			</template>
		</Header>
		<ElTabs v-model="tabActiveName" class="flex-1 prompt-tabs el-tabs--full">
			<ElTabPane :label="$t('prompt.config')" name="config" lazy>
				<div id="app-config-full-screen-hook" v-loading="loading" class="relative h-full px-8 bg-white flex flex-col">
					<div class="flex-1 flex flex-col overflow-hidden">
						<ElForm ref="formRef" class="py-6" :model="formData" label-position="top" label-width="120px">
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
									<PromptInput v-model="formData.content" style="flex: none; height: calc(100vh - 400px);" show-line show-token
										@change="formRef.validateField('content')" />
								</div>
							</ElFormItem>
						</ElForm>
					</div>
          <div v-if="false" class="mt-6 pb-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm text-[#1D1E1F]">应用场景</h3>
              <ElButton link type="primary" size="large" @click="handleAddScene">默认设置</ElButton>
            </div>
            <div class="flex flex-wrap gap-2">
              <div class="h-10 flex items-center gap-2 px-3 border rounded">
                <img class="size-6">
                <p class="text-sm text-[#1D1E1F]">豆包</p>
                <el-icon>
                  <Close />
                </el-icon>
              </div>
              <div class="h-10 flex items-center gap-2 px-3 border rounded">
                <img class="size-6">
                <p class="text-sm text-[#1D1E1F]">豆包</p>
                <el-icon>
                  <Close />
                </el-icon>
              </div>

              <ElButton class="border-dashed bg-transparent" plain type="primary" size="large" @click="handleAddScene">+添加</ElButton>
            </div>
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
  <el-dialog>
    <ElTable ref="table_ref" class="w-full rounded" :data="nav_list"
			:header-cell-style="{ background: '#F6F7F8', height: '60px' }" :cell-style="{ height: '66px' }"
			height="calc(100vh - 296px)">
			<ElTableColumn width="40">
				<div class="pr-3 sort-icon cursor-move">
					<svg-icon name="drag" width="24px" height="32px" color="#a1a5af" />
				</div>
			</ElTableColumn>
			<ElTableColumn prop="name" :label="$t('module.nav_name')" min-width="120" show-overflow-tooltip />
			<ElTableColumn :label="$t('module.nav_type')" show-overflow-tooltip min-width="100">
				<template #default="{ row = {} }">
				</template>
			</ElTableColumn>
			<ElTableColumn :label="$t('module.nav_target')" show-overflow-tooltip min-width="100">
				<template #default="{ row = {} }">
				</template>
			</ElTableColumn>
			<ElTableColumn :label="$t('module.nav_visible')" width="120">
				<template #default="scope">
				</template>
			</ElTableColumn>
			<ElTableColumn :label="$t('module.nav_operation')" align="right" width="180" fixed="right">
				<template #default="{ row = {}, $index }">
					<ElButton class="h-auto !p-0 leading-none text-[#576D9C]" type="text" size="default"
						@click.stop="handleCreate({ data: row })">
						{{ $t('action_edit') }}
					</ElButton>
					<ElButton class="h-auto !p-0 leading-none text-[#576D9C]" type="text" size="default"
						@click.stop="handlePreview({ data: row })">
						{{ $t('action_preview') }}
					</ElButton>
					<ElButton class="h-auto !p-0 leading-none text-[#576D9C]" type="text" size="default"
						@click.stop="handleSeoSetting({ data: row })">
						{{ $t('module.nav_operation_seo') }}
					</ElButton>
					<ElButton class="h-auto !p-0 leading-none text-[#576D9C]" type="text" size="default"
						@click.stop="handleDelete({ data: row, index: $index })">
						{{ $t('action_delete') }}
					</ElButton>
				</template>
			</ElTableColumn>
		</ElTable>
  </el-dialog>
</template>

<script setup lang="ts">
import { EditPen, Close } from '@element-plus/icons-vue'
import { nextTick, onMounted, ref, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PromptInput from '@/components/Prompt/input.vue'
import CreateDrawer from './create-drawer.vue'
import GuideView from './guide.vue'

import eventBus from '@/utils/event-bus'
import { useFormDataStore } from './store'

const route = useRoute()
const router = useRouter()

const formDataStore = useFormDataStore()
const {formData} = formDataStore
const {detailData} = formDataStore
const {loading} = formDataStore
const {submitting} = formDataStore
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

<style scoped>
.prompt-tabs :deep(.el-tabs__nav-wrap) {
	padding: 0 40px;
}
.is-error .prompt-input-wrapper {
	border-color: #F56C6C;
}
</style>
