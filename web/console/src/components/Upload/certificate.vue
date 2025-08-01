<template>
	<div>
		<ElUpload v-if="!file_list.length" action="#" :limit="1" :on-change="onFileChange" :auto-upload="false"
			:show-file-list="false" accept=".pem" :disabled="uploading">
			<ElButton class="!border-none !outline-none" type="primary" plain :loading="uploading">{{ $t('action_select_file') }}</ElButton>
		</ElUpload>
		<ul v-else>
			<li v-for="(item, index) in file_list" :key="item.id" class="flex items-center gap-2 text-[#9A9A9A] text-sm">
				<SvgIcon name="certificate" width="16" />
				<span>{{ item.name || '--' }}</span>
				<ElIcon :size="16" class="cursor-pointer text-[#333]" @click="onFileDelete({ data: item, index })">
					<Delete />
				</ElIcon>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue';

import { ref, nextTick, watch } from 'vue';
import uploadApi from '@/api/modules/upload';

const props = defineProps<{
	modelValue: string
	fileName: string
}>()

const emits = defineEmits(['change', 'update:modelValue', 'update:fileName'])

const file_list = ref([])
const uploading = ref(false)

async function uploadFile(dataFile: File) {
	uploading.value = true
	try {
		const res = await uploadApi.upload(dataFile).finally(() => {
			uploading.value = false
		})
		return res.data
	}
	catch (error) {
		uploading.value = false
		return {}
	}
}
async function onFileChange(file: any, fileList: any) {
	// if (!(file.name.endsWith('.pem') || file.name.endsWith('.crt'))) {
	if (!file.name.endsWith('.pem')) {
		ElMessage.warning(window.$t('upload_pem_file_tip'))
		return
	}
	const data = await uploadFile(file.raw)
	Object.assign(file, data)
	file_list.value = [file]
	emits('update:modelValue', file.key)
	emits('update:fileName', file.name)
	await nextTick()
	emits('change', { fileList: file_list.value })
}
function onFileDelete({ data, index }: { data: any, index: number }) {
	file_list.value.splice(index, 1)
}

watch(() => props.modelValue, () => {
	if (props.modelValue) {
		file_list.value = [{
			name: props.fileName,
			key: props.modelValue,
		}]
	}
}, {
	immediate: true
})
watch(() => props.fileName, () => {
	if (props.modelValue) {
		file_list.value = [{
			name: props.fileName,
			key: props.modelValue,
		}]
	}
}, {
	immediate: true
})
</script>

<style scoped>

</style>

