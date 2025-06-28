<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FormView from './form.vue'
import { useFormDataStore } from './store'
import eventBus from '@/utils/event-bus'

const formRef = ref()
const router = useRouter()
const editable = ref(false)
const visible = ref(false)
const formDataStore = useFormDataStore()
const detailData = formDataStore.detailData
const submitting = formDataStore.submitting

const open = async ({ group_ids = [] } = {}) => {
  editable.value = !!detailData.value.prompt_id
  if (!editable.value)
    formDataStore.reset()
  // formDataStore.set({
  // 	group_ids
  // })
  visible.value = true
}
const close = () => {
  visible.value = false
}
const handleSave = async () => {
  const valid = await formRef.value.validate()
  if (!valid)
    return Promise.reject()
  const data = await formDataStore.save()
  eventBus.emit(`prompt-${editable.value ? 'update' : 'create'}`, { data })
  close()
  if (!editable.value) {
    router.push({
      name: 'PromptCreate',
      query: {
        prompt_id: data.prompt_id,
      },
    })
  }
  else { formDataStore.fetchDetail() }
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <ElDrawer
    v-model="visible" :title="editable ? $t('action_edit') : $t('action_add')" size="760px" destroy-on-close append-to-body
    :close-on-click-modal="false"
  >
    <FormView ref="formRef" />
    <template #footer>
      <div class="flex border-t pt-5 justify-end w-full">
        <ElButton size="large" @click="close">
          {{ $t('action_cancel') }}
        </ElButton>
        <ElButton type="primary" size="large" :loading="submitting" @click="handleSave">
          {{ $t('action_confirm') }}
        </ElButton>
      </div>
    </template>
  </ElDrawer>
</template>
