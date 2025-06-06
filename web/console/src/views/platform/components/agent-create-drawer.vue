<script setup lang="ts">
import AgentForm from '@/views/agent/create/platform/index.vue'

import { nextTick, ref, provide, computed } from 'vue'
import type { AgentType } from '@/api/modules/agent'
import { agentApi, AGENT_TYPE_DIFY_AGENT, AGENT_TYPE_ICON_MAP } from '@/api/modules/agent'
import { CHANNEL_TYPE_VALUE_MAP, CHANNEL_TYPE_DIFY, CHANNEL_TYPE_53AI } from '@/api/modules/channel'
import { PROVIDER_TYPE_53AI, PROVIDER_TYPE_DIFY } from '@/api/modules/provider'
import { useAgentFormStore } from '@/views/agent/create/store'

const emits = defineEmits(['success'])

const agentFormStore = useAgentFormStore()

const agentFormRef = ref()
const visible = ref(false)
const agentType = ref(AGENT_TYPE_DIFY_AGENT)
const editable = ref(false)
const channelConfig = ref({})
provide('channelConfig', channelConfig)

const channelTypeKey = computed(() => {
	if (channelConfig.value.channel_type == CHANNEL_TYPE_VALUE_MAP.get(CHANNEL_TYPE_DIFY)) return CHANNEL_TYPE_DIFY
	else if (channelConfig.value.channel_type == CHANNEL_TYPE_VALUE_MAP.get(CHANNEL_TYPE_53AI)) return CHANNEL_TYPE_53AI
	return ''
})
provide('channelTypeKey', channelTypeKey)


async function open({ agent_type, data, agent_id }: { agent_type?: AgentType, data?: any, agent_id?: number } = {}) {
	agentFormStore.resetState()
	await nextTick()
	agentType.value = agent_type || AGENT_TYPE_DIFY_AGENT
	editable.value = !!+agent_id
	agentFormStore.agent_id = +agent_id || 0
	agentFormStore.agent_type = agentFormStore.form_data.custom_config.agent_type = agentType.value
	agentFormStore.form_data.logo = AGENT_TYPE_ICON_MAP.get(agent_type)
	agentFormStore.form_data.group_id = 0
	await agentFormStore.loadDetailData()
	agentFormStore.loadGroupOptions()
	agentFormStore.loadChannelOptions()
	agentFormStore.loadSubscriptionOptions()
	channelConfig.value = data.channel_config || {}
	channelConfig.value.name = channelConfig.value.name || data.label || ''
	if (!channelConfig.value.channel_type) {
		switch (data.value) {
			case PROVIDER_TYPE_DIFY:
				channelConfig.value.channel_type = CHANNEL_TYPE_VALUE_MAP.get(CHANNEL_TYPE_DIFY)
				break
			case PROVIDER_TYPE_53AI:
				channelConfig.value.channel_type = CHANNEL_TYPE_VALUE_MAP.get(CHANNEL_TYPE_53AI)
				break
		}
	}
	if (!agentFormStore.form_data.channel_type) agentFormStore.form_data.channel_type = channelConfig.value.channel_type || 0
	if (!agentFormStore.form_data.model) {
		await nextTick()
		agentFormStore.form_data.model = channelTypeKey.value
	}
	visible.value = true
}

async function close() {
	visible.value = false
}

async function onSave() {
	const comp_ref = agentFormRef.value
	let agent_id = ''
	if (comp_ref && comp_ref.save) {
		agentFormStore.saving = true
		const { data = {} } = await comp_ref.save().finally(() => {
			agentFormStore.saving = false
		})
		agent_id = data.agent_id
	}
	else if (comp_ref && comp_ref.validateForm) {
		const valid = await comp_ref.validateForm()
		if (!valid) return Promise.reject()
		await agentFormStore.saveAgentData()
		emits('success', { agent_id: agentFormStore.agent_id, action: editable.value ? 'update' : 'create' })
	}
	close()
	// if (agent_id) router.replace({ name: 'AgentCreate', query: { type: agentFormStore.agent_type, agent_id } })
}


defineExpose({
  open,
  close,
})
</script>

<template>
	<ElDrawer :title="$t('action_add')" v-model="visible" size="840px" destroy-on-close append-to-body
		:close-on-click-modal="false">
		<AgentForm ref="agentFormRef" :agent-type="agentType" show-channel-config />
		<template #footer>
			<div class="flex border-t pt-5 justify-end w-full">
				<ElButton size="large" @click="close">
					{{ $t('action_cancel') }}
				</ElButton>
				<ElButton v-if="!!channelConfig.channel_id" type="primary" size="large" :loading="agentFormStore.saving" @click="onSave">
					{{ $t('action_confirm') }}
				</ElButton>
			</div>
		</template>
	</ElDrawer>
</template>

<style scoped>

</style>
