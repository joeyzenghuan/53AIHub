<script setup lang="ts">
import { Delete, EditPen } from '@element-plus/icons-vue'
import UploadAdd from '@/components/Upload/image.vue'
import UploadEdit from '@/components/Upload/image.vue'

import { ref, reactive, getCurrentInstance, computed, onMounted } from 'vue'
import { useEnterpriseStore, useUserStore } from '@/stores'
import { generateInputRules } from '@/utils/form-rule'
import { bannerApi } from '@/api/modules/banner'

const { proxy: _this } = getCurrentInstance()

const enterprise_store = useEnterpriseStore()
const user_store = useUserStore()

const UPLOAD_COUNT_LIMIT = 5
const form_ref = ref()
const loading = ref(true)
const submitting = ref(false)
const form = reactive({
	url_list: [],
	interval: 5,
})
const rules = reactive({
})
const add_disabled = computed(() => {
	return form.url_list.length >= UPLOAD_COUNT_LIMIT
})

const handleSave = async () => {
	const valid = await form_ref.value.validate()
	if (!valid) return
	submitting.value = true
	await bannerApi.saveBanner({
		...form
	}).finally(() => {
		submitting.value = false
	})
	ElMessage.success(window.$t('action_save_success'))
	fetchBannerData()
}
const fetchBannerData = async () => {
	loading.value = true
	const data = await bannerApi.getBanner().finally(() => {
		loading.value = false
	})
	form.url_list = data.url_list || []
	form.interval = data.interval || 5
}
const onUploadImageConfirm = ({ url = '' }, index) => {
	if (form.url_list[index]) form.url_list[index] = url
	else form.url_list.push(url)
}
const onImageDelete = (index: number) => {
	form.url_list.splice(index, 1)
}

onMounted(() => {
	fetchBannerData()
})
</script>

<template>
	<Layout class="px-[60px] py-8">
		<Header :title="$t('module.banner_diagram')"></Header>
		<div class="mt-5 flex-1 flex flex-col gap-4 bg-white py-6 px-8 box-border" v-loading="loading">
			<ElForm ref="form_ref" class="flex-1 max-h-[calc(100vh-288px)] overflow-auto" :model="form" :rules="rules"
				label-position="top">
				<ElFormItem :label="$t('banner.upload_image')">
					<div class="text-[#939499] text-xs w-full">{{ $t('banner.upload_image_tip') }}</div>
					<ul v-if="form.url_list.length > 0" class="mt-4 w-full flex flex-col gap-4">
						<li v-for="(url, index) in form.url_list" :key="index" class="w-full relative">
							<UploadEdit class="!w-full !h-[14vw]" v-model="form.url_list[index]" :cropperDisabled="true" @confirm="onUploadImageConfirm($event, index)">
								<template #mask-text>
									<ElIcon class="cursor-pointer" size="24" color="#fff">
										<EditPen />
									</ElIcon>
									<ElIcon class="cursor-pointer" size="24" color="#fff" @click="onImageDelete(index)">
										<Delete />
									</ElIcon>
								</template>
							</UploadEdit>
						</li>
					</ul>
					<UploadAdd class="w-auto h-auto" :cropperDisabled="true" :disabled="add_disabled"
						@confirm="onUploadImageConfirm">
						<ElButton class="mt-4 !border-none !outline-none" type="primary" plain size="large"
							:disabled="add_disabled">
							+ {{ $t('action_add') }}({{ form.url_list.length }}/{{ UPLOAD_COUNT_LIMIT }})
						</ElButton>
					</UploadAdd>
				</ElFormItem>
				<ElFormItem :label="$t('banner.interval')">
					<div class="text-[#939499] text-xs w-full">{{ $t('banner.interval_tip') }}</div>
					<ElInputNumber class="mt-4 !w-[300px]" v-model="form.interval" size="large" :controls="false" :min="1"
						:max="1000">
						<template #suffix>
							<span>{{ $t('second') }}</span>
						</template>
					</ElInputNumber>
				</ElFormItem>
				<div class="w-full h-8"></div>
			</ElForm>
			<ElDivider class="!mt-3" />
			<ElButton class="h-[36px] w-[96px]" type="primary" size="large" :loading="submitting" @click="handleSave">{{
				$t('action_save') }}
			</ElButton>
		</div>
	</Layout>
</template>

<style scoped lang="scss">
::v-deep(.el-input-number .el-input__inner) {
	text-align: left;
}
</style>
