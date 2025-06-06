<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { copyToClip } from '@/utils/copy'

const state: {
  url: string
} = reactive({
  url: '',
})

onMounted(async() => {
	state.url = sessionStorage.getItem('mobile_tip_url') || ''
})

const handleCopy = () => {
	if (!state.url) return
	copyToClip(state.url).then(() => {
		ElMessage.success('已复制')
	})
}
</script>

<template>
	<div class="w-full h-full overflow-y-auto overflow-x-hidden flex flex-col items-center justify-center bg-[#FCFDFF]">
		<div class="w-[244px] h-[195px] bg-[url('/images/mobile_tip.png')] bg-[length:100%_100%]" />
		<div class="mt-6 text-sm text-[#182B50]">
			请前往pc端查看文档详情
		</div>
		<div class="w-[85%] mt-4 py-3 px-3 box-border text-sm text-wrap break-words text-[#BA8550] border-x-[1px] border-y-[1px] border-solid border-[#EBEEF5] bg-[#fff]">
			{{ state.url || '' }}
		</div>
		<el-button v-if="state.url" class="mt-4" type="primary" size="large" @click.stop="handleCopy">
			复制链接
		</el-button>
	</div>
</template>

<style>
</style>
