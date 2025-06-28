<script setup lang="ts">
import DialogueRecordView from '@/components/DialogueRecord/index.vue'

import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()

const pageTitle = computed(() => {
	return window.$t((route.meta || {}).title || 'dialogue_record')
})

onMounted(() => {
})
</script>

<template>
	<Layout class="px-[60px] py-8">
		<Header :title="pageTitle" />
		<div class="mt-5">
			<DialogueRecordView type="user" :user_id="route.params.user_id" />
		</div>
	</Layout>
</template>


<style scoped lang="scss">
</style>
