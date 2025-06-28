<script setup lang="ts">
import { useAgentFormStore } from '../store'

const store = useAgentFormStore()
</script>

<template>
  <template v-if="store.support_file || store.support_image">
    <div class="text-base text-[#1D1E1F] font-medium mb-4">
      {{ $t('expand_setting') }}
    </div>
    <div v-if="store.support_file" class="flex items-center gap-2">
      <div class="flex-1">
        <div class="text-sm text-[#1D1E1F]">
          {{ $t('agent_file_parse') }}
        </div>
      </div>
      <div class="flex-none text-sm text-[#1D1E1F]">
        {{ store.form_data.custom_config.file_parse.enable ? $t('action_open') : $t('action_close') }}
        <el-switch v-model="store.form_data.custom_config.file_parse.enable" />
      </div>
    </div>
    <div v-if="store.support_image" class="flex items-center gap-2 mt-4">
      <div class="flex-1">
        <div class="text-sm text-[#1D1E1F]">
          {{ $t('agent_image_parse') }}
        </div>
      </div>
      <div class="flex-none text-sm text-[#1D1E1F]">
        {{ store.form_data.custom_config.image_parse.enable ? $t('action_open') : $t('action_close') }}
        <el-switch v-model="store.form_data.custom_config.image_parse.enable" />
      </div>
    </div>
  </template>
</template>

<style scoped>

</style>
