<template>
  <ElDrawer
    v-model="visible"
    :title="editable ? $t('action_edit') : $t('action_add')"
    size="760px"
    destroy-on-close
    append-to-body
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

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FormView from './form.vue'
import { useFormDataStore } from '../create/store'
import eventBus from '@/utils/event-bus'
import { settingApi } from '@/api/modules/setting'

const formRef = ref()
const router = useRouter()
const editable = ref(false)
const visible = ref(false)
const formDataStore = useFormDataStore()
const { detailData } = formDataStore
const { submitting } = formDataStore

const loadDefaultLinks = async () => {
  const { data } = await settingApi.default_links.list()
  formDataStore.set({
    ai_links: data.map(item => {
      return {
        ai_link: { ...item },
        delete: false,
      }
    }),
  })
}
const open = async ({ group_ids = [] } = {}) => {
  editable.value = !!detailData.value.prompt_id

  if (!editable.value) {
    formDataStore.reset()
    loadDefaultLinks()
  }

  visible.value = true
}
const close = () => {
  visible.value = false
}
const handleSave = async () => {
  const valid = await formRef.value.validate()
  if (!valid) return Promise.reject()
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
  } else {
    formDataStore.fetchDetail()
  }
}

defineExpose({
  open,
  close,
})
</script>
