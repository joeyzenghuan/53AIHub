<script setup lang="ts">
import { ref } from 'vue'
import AgentInfo from '../components/agent-info.vue'
import FieldSave from '../components/field-save.vue'
import LimitConfig from '../components/limit-config.vue'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const fieldSaveRef = ref()

const handleFieldAdd = () => {
  fieldSaveRef.value.open()
}
</script>

<template>
  <div class="py-7">
    <div class="text-base text-[#1D1E1F] font-medium">
      {{ $t('basic_info') }}
    </div>
    <el-form label-width="104px" label-position="left" class="mt-6">
      <AgentInfo />

      <div class="text-base text-[#1D1E1F] font-medium mt-10 mb-6">
        {{ $t('coze_workflow_link') }}
      </div>
      <el-form-item label-position="top" :label="$t('coze_workflow_link')">
        <el-input size="large" />
      </el-form-item>
      <el-form-item label-position="top" :label="$t('input_variable')">
        <div class="w-full border">
          <el-table :data="tableData" header-cell-class-name="!bg-[#F8F9FA] h-[46px]" header-row-class-name="" style="width: 100%">
            <el-table-column prop="date" width="50">
              <template #default="">
                <svg-icon name="drag" />
              </template>
            </el-table-column>
            <el-table-column prop="date" :label="$t('display_name')" />
            <el-table-column prop="name" :label="$t('variable_type')" />
            <el-table-column prop="address" :label="$t('action_enable')" width="90">
              <template #default="">
                <el-switch />
              </template>
            </el-table-column>
            <el-table-column prop="address" :label="$t('operation')" width="96">
              <template #default="">
                <div class="flex items-center gap-2 cursor-pointer">
                  <svg-icon name="edit" width="16" />
                  <svg-icon name="del" width="16" />
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div class="w-full h-[50px] flex items-center pl-5">
            <el-button link type="primary" @click="handleFieldAdd">
              +{{ $t('action_add') }}
            </el-button>
          </div>
        </div>
      </el-form-item>
      <el-form-item label-position="top" :label="$t('output_variable')">
        <div class="w-full border">
          <el-table :data="tableData" header-cell-class-name="!bg-[#F8F9FA] h-[46px]" header-row-class-name="" style="width: 100%">
            <el-table-column prop="date" width="50">
              <template #default="">
                <svg-icon name="drag" />
              </template>
            </el-table-column>
            <el-table-column prop="date" :label="$t('display_name')" />
            <el-table-column prop="name" :label="$t('variable_type')" />
            <el-table-column prop="address" :label="$t('action_enable')" width="90">
              <template #default="">
                <el-switch />
              </template>
            </el-table-column>
            <el-table-column prop="address" :label="$t('operation')" width="96">
              <template #default="">
                <div class="flex items-center gap-2 cursor-pointer">
                  <svg-icon name="edit" width="16" />
                  <svg-icon name="del" width="16" />
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div class="w-full h-[50px] flex items-center pl-5">
            <el-button link type="primary" @click="handleFieldAdd">
              +{{ $t('action_add') }}
            </el-button>
          </div>
        </div>
      </el-form-item>

      <div class="text-base text-[#1D1E1F] font-medium mt-10 mb-6">
        {{ $t('permission_setting') }}
      </div>
      <el-form-item :label="$t('visible_range')">
        <el-select size="large">
          <el-option value="1">
            市场
          </el-option>
        </el-select>
      </el-form-item>
      <div class="border-t mb-4" />
      <LimitConfig />
    </el-form>

    <FieldSave ref="fieldSaveRef" />
  </div>
</template>

<style scoped>

</style>
