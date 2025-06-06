<script setup lang="ts">
import AgentForm from './platform/index.vue'


</script>

<template>
  <el-drawer :title="$t('action_add')" size="840px">
    <AgentForm agent-type="dify_agent" />

    <template #footer>
      <el-button size="large">
        {{ $t('action_cancel') }}
      </el-button>
      <el-button type="primary" size="large">
        {{ $t('action_confirm') }}
      </el-button>
    </template>
  </el-drawer>
</template>

<style scoped>

</style>
