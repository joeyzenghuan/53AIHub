<template>
  <div class="flex items-center gap-1">
    <div class="flex-1 text-base text-[#1D1E1F] font-medium mb-3">
      {{ title }}
    </div>
    <el-button v-if="allowAdd" link type="default" @click="handleFieldAdd">
      <el-icon class="mr-1"><Plus /></el-icon>
      {{ $t('action_add') }}
    </el-button>
    <el-button v-if="allowUpdate" v-debounce class="!ml-0" link type="primary" @click="handleFieldUpdate">
      <el-icon class="mr-1"><Refresh /></el-icon>
      {{ $t('action_update') }}
    </el-button>
  </div>
  <el-table :data="list" class="border mb-7" header-cell-class-name="!bg-[#F8F9FA] h-[46px]">
    <el-table-column prop="variable" :label="$t('agent.variable_name')" :show-overflow-tooltip="true" />
    <el-table-column prop="type" :label="$t('agent.variable_type')">
      <template #default="{ row }">
        {{ getLabel(row.type) }}
      </template>
    </el-table-column>
    <el-table-column prop="label" :label="$t('agent.variable_label')" :show-overflow-tooltip="true" />

    <el-table-column prop="operation" :label="$t('operation')" :width="70">
      <template #default="{ row, $index }">
        <div class="flex items-center gap-2 cursor-pointer">
          <svg-icon name="edit" width="16" @click="handleFieldEdit(row)" />
          <svg-icon v-if="allowAdd" name="del" width="16" @click="handleFieldDelete(row, $index)" />
        </div>
      </template>
    </el-table-column>
  </el-table>

  <FieldSave ref="fieldSaveRef" :type="type" :agent-type="agentType" @save="handleFieldSave" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Refresh, Plus } from '@element-plus/icons-vue';
import FieldSave from './field-input-setting.vue';
import { inputTypeList, outputTypeList } from '@/constants/agent';

const props = withDefaults(
  defineProps<{
    allowUpdate?: boolean
    allowAdd?: boolean
    title?: string
    list?: Agent.Field[]
    type?: 'input' | 'output'
    updateRequest?: () => Promise<Agent.Field[]>
    agentType?: string
  }>(),
  {
    allowUpdate: false,
    allowAdd: false,
    title: '',
    list: () => [],
    updateRequest: () => Promise.resolve([]),
    type: 'input',
    agentType: '',
  }
)

const emit = defineEmits<{
  (e: 'update:list', list: Agent.Field[]): void
}>()

const fieldSaveRef = ref<InstanceType<typeof FieldSave>>()

const getLabel = (type: string) => {
  return [...inputTypeList, ...outputTypeList].find(item => item.type === type)?.label
}

const handleFieldAdd = () => {
  fieldSaveRef.value?.open({})
}

const handleFieldUpdate = async () => {
  const list: Agent.Field[] = await props.updateRequest()
  const oldList = props.list.filter(item => !item.is_system)
  emit('update:list', [...oldList, ...list])
}

const handleFieldEdit = (row: Agent.Field) => {
  fieldSaveRef.value?.open(row)
}

const handleFieldDelete = (row: Agent.Field, index: number) => {
  const list = props.list.filter((item, i) => i !== index)
  emit('update:list', list)
}

const handleFieldSave = (value: Agent.Field) => {
  const list = [...props.list]
  const index = list.findIndex(item => item.id === value.id)
  if (index !== -1) {
    list[index] = value
  } else {
    list.push(value)
  }
  emit('update:list', list)
}
</script>
