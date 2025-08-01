<template>
	<Layout class="px-[60px] py-8">
		<Header back :title="detailData.name || $t('action_edit')" class="mb-5">
			<template #title_suffix>
				<ElButton class="bg-transparent !p-0 !size-6" size="default" :icon="EditPen" @click="handleEdit" />
			</template>
		</Header>
		<ElTabs v-model="tabActiveName" class="flex-1 prompt-tabs el-tabs--full">
			<ElTabPane :label="$t('prompt.config')" name="config" lazy>
				<div v-loading="loading" class="relative h-full overflow-y-auto px-8 bg-white ">
          <ElForm ref="formRef" class="pt-6 flex-1 overflow-hidden" :model="formData" label-position="top" label-width="120px">
            <ElFormItem :label="$t('prompt.content')" prop="content"
              :rules="[{ required: true, message: $t('form_input_placeholder') }]">
              <div class="border prompt-input-wrapper rounded w-full h-full flex flex-col !bg-white  relative overflow-y-auto">
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
                  </div>
                </div>
                <PromptInput v-model="formData.content" style="flex: none; min-height: 60vh; height: max-content;" show-line show-token
                  @change="formRef.validateField('content')" />
              </div>
            </ElFormItem>
          </ElForm>
          <div class="flex-none pb-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm text-[#1D1E1F]">应用场景</h3>
              <ElButton link type="primary" size="large" @click="handleOpenLinksDialog">
                <svg-icon name="cate-manage" width="14px" class="mr-1" />
                {{ $t('default_links.default_setting') }}
              </ElButton>
            </div>
            <div class="flex flex-wrap gap-2">
              <template v-for="(item, index) in formData.ai_links" :key="index">
                <div v-if="!item.delete" class="h-10 flex items-center gap-2 px-3 border rounded hover:shadow-md">
                  <img class="size-6 rounded-full" :src="item.ai_link.logo" />
                  <p class="text-sm text-[#1D1E1F]">{{ item.ai_link.name }}</p>
                  <el-icon class="cursor-pointer hover:opacity-50" @click.stop="handleDeleteLink(item)">
                    <Close />
                  </el-icon>
                </div>
              </template>

              <ElButton class="border-dashed bg-transparent" plain type="primary" size="large" @click="handleOpenStoreDialog">+{{ $t('action.add') }}</ElButton>
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
  <StoreDialog ref="storeDialogRef" :show-add-manual="false" @add="handleAddScene" />
  <LinksDialog ref="linksDialogRef" />
</template>

<script setup lang="ts">
import { EditPen, Close } from '@element-plus/icons-vue'
import { nextTick, onMounted, ref, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import CreateDrawer from '../components/create-drawer.vue'
import PromptInput from '@/components/Prompt/input.vue'
import LinksDialog from '../components/links-dialog.vue'
import StoreDialog from '@/views/toolbox/components/store-dialog.vue'

import GuideView from './guide.vue'

import eventBus from '@/utils/event-bus'
import { useFormDataStore } from './store'

const route = useRoute()

const formDataStore = useFormDataStore()
const {formData, detailData, loading, submitting} = formDataStore

const formRef = ref()

const createRef = ref()
const storeDialogRef = ref()
const linksDialogRef = ref()

const tabActiveName = ref('config')


const handleOpenLinksDialog = () => {
  linksDialogRef.value.open()
}
const handleOpenStoreDialog = () => {
  storeDialogRef.value.open()
}

const handleAddScene = (data: { data: DefaultLinkItem }) => {
  formDataStore.set({
    ai_links: [...formData.value.ai_links, {
      ai_link: { ...data.data },
      delete: false
    }]
  })
  // linksDialogRef.value.open()
}

const handleDeleteLink = (item: any) => {
  item.delete = true
}


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
