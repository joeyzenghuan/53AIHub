<script setup lang="ts">
import DialogueRecordView from '@/components/DialogueRecord/index.vue'

import { computed, onMounted, ref } from 'vue'

const visible = ref(false)

onMounted(() => {
})

const type = ref<'user' | 'agent'>('user')
const relatedId = ref<string | number>()
const open = ({ type: _type, relatedId: _relatedId }: { type: 'user' | 'agent', relatedId: string | number }) => {
	type.value = _type
	relatedId.value = _relatedId
	visible.value = true
}

const close = () => {
	visible.value = false
}

defineExpose({ open, close })
</script>

<template>
	<ElDrawer v-model="visible" :title="$t('dialogue_record')" size="880px" destroy-on-close append-to-body
		:close-on-click-modal="true">
		<DialogueRecordView className="!px-2 !py-2" :type="type" :relatedId="relatedId" />
	</ElDrawer>
</template>


<style scoped lang="scss"></style>
