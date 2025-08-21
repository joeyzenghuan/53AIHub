<template>
  <ElDialog v-model="visible" :title="$t('action_add')" width="870px">
    <div class="bg-[#F7F7FA] -mx-7 -mt-5 px-7 py-4 mb-4">
      <div
        v-if="showAddManual"
        class="flex items-center justify-center h-15 text-[#2563EB] bg-white text-sm cursor-pointer hover:bg-[#F2F4F8]"
        @click="handleAdd"
      >
        + {{ $t('commom.add_manual') }}
      </div>
      <div class="text-base text-[#1D1E1F] font-medium mt-6 mb-4">
        {{ $t('commom.add_market') }}
      </div>

      <StoreView @add="handleAdd" />
    </div>
  </ElDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import StoreView from './store-view.vue';

const emit = defineEmits(['add'])

withDefaults(
  defineProps<{
    showAddManual?: boolean
  }>(),
  {
    showAddManual: true,
  }
)

const visible = ref(false)

const open = () => {
  visible.value = true
}

const close = () => {
  visible.value = false
}

const handleAdd = (data?: AI_LINK.State) => {
  emit('add', data)
  close()
}

defineExpose({
  open,
  close,
})
</script>

<style></style>
