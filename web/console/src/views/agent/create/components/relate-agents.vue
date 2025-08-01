<template>
  <div class="flex items-center mb-3">
    <div class="flex-1 text-base text-[#1D1E1F] font-medium">
      {{ $t('agent.relate_app.title') }}
    </div>
    <el-button link @click="handleAdd">
      <el-icon class="mr-1"><Plus /></el-icon>
      {{ $t('action_add') }}
    </el-button>
  </div>
  <p v-if="relateAgents.length === 0" class="text-sm text-[#9A9A9A]">
    {{ $t('agent.relate_app.desc') }}
  </p>

  <div class="flex flex-col">
    <template v-for="item in relateAgents" :key="item.id">
      <div class="flex py-4 items-center gap-2 border-b">
        <el-image class="size-10 rounded" :src="item.logo" lazy />
        <div class="flex-1 overflow-hidden">
          <div class="text-sm text-[#1D1E1F] truncate">{{ item.name }}</div>
          <div class="text-xs text-[#9A9A9A] mt-1 truncate">
            {{ item.description }}
          </div>
        </div>
        <div class="flex">
          <el-button link @click="handleSetting(item)">
            <svg-icon name="setting" />
          </el-button>
          <el-button link class="!ml-1" @click="handleDelete(item.agent_id)">
            <svg-icon name="del" />
          </el-button>
        </div>
      </div>
    </template>
  </div>
  <RelateAgentsDialog ref="relateAgentsDialogRef" @select="handleSelect" />
  <RelateAgentsSetting ref="relateAgentsSettingRef" @save="handleSave" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import RelateAgentsDialog from './relate-agents-dialog.vue'
import RelateAgentsSetting from './relate-agents-setting.vue'

import { useAgentFormStore } from '../store'

import { BACKEND_AGENT_TYPE } from '@/constants/platform/config.ts'

const agentFormStore = useAgentFormStore()

const relateAgentsDialogRef = ref()
const relateAgentsSettingRef = ref()

const relateAgents = computed(() => {
  return agentFormStore.form_data.settings.relate_agents || []
})

const handleAdd = () => {
  relateAgentsDialogRef.value.open(relateAgents.value)
}

const handleSetting = (item: Agent.RelateAgent) => {
  relateAgentsSettingRef.value.open(item)
}

const handleDelete = (agent_id: number) => {
  agentFormStore.form_data.settings.relate_agents = relateAgents.value.filter(item => item.agent_id !== agent_id)
}

const handleSelect = (item: Agent.State) => {
  let input_fields = item.settings.input_fields || []
  const is_workflow = BACKEND_AGENT_TYPE.WORKFLOW === item.backend_agent_type
  if (!is_workflow) {
    input_fields = [
      {
        id: 'input',
        type: 'text',
        label: '输入',
        variable: 'input'
      }
    ]
  }
  const data = {
    agent_id: item.agent_id,
    name: item.name,
    logo: item.logo,
    description: item.description,
    input_fields,
    execution_rule: 'auto',
    is_workflow,
    field_mapping: input_fields.reduce((acc, field) => {
      acc[field.id] = ''
      return acc
    }, {}),
  } as Agent.RelateAgent
  handleSetting(data)
}

const handleSave = (item: Agent.RelateAgent) => {
  const index = relateAgents.value.findIndex(data => data.agent_id === item.agent_id)
  if (index !== -1) {
    relateAgents.value[index] = item
  } else {
    relateAgents.value.push(item)
  }
}
</script>

<style scoped lang="scss"></style>
