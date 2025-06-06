<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useSettingStore } from '@/stores/modules/setting'

const setting_store = useSettingStore()
const loading = ref(false)

const head = reactive({
  setting_id: 0,
  key: 'third_party_statistic_header',
  value: '',
})
const css = reactive({
  setting_id: 0,
  key: 'third_party_statistic_css',
  value: '',
})

onMounted(async () => {
  loading.value = true
  const data = await setting_store.loadListData().finally(() => {
    loading.value = false
  })

  const head_setting = data.find(item => item.key === head.key)
  const css_setting = data.find(item => item.key === css.key)
  Object.assign(head, head_setting)
  Object.assign(css, css_setting)
})

const handleSave = async () => {
  await Promise.all([
    setting_store.save(head.setting_id, { key: head.key, value: head.value }).then((res) => {
      head.setting_id = res.setting_id || 0
    }),
    setting_store.save(css.setting_id, { key: css.key, value: css.value }).then((res) => {
      css.setting_id = res.setting_id || 0
    }),
  ])
  ElMessage.success(window.$t('action_save_success'))
}
</script>

<template>
  <Layout class="px-[60px] py-8">
    <Header :title="$t('module.statistics')" />

    <div class="flex-1 flex flex-col bg-white p-6 mt-3 box-border">
      <div class="flex-1 max-h-[calc(100vh-240px)] overflow-auto">
        <h1 class="font-semibold text-[#1D1E1F]">
          {{ $t('module.statistics_header_title') }}
        </h1>
        <div class="text-[#9A9A9A] text-sm mt-4">
          {{ $t('module.statistics_header_desc') }}
        </div>
        <div class="text-[#9A9A9A] text-sm mt-6">
          {{ $t('module.statistics_textarea_label_1') }}
        </div>
        <ElInput
          v-model="head.value"
					v-loading="loading"
					class="mt-3 !w-[600px]"
					style="--el-input-bg-color: #F7F8FA"
					type="textarea"
					resize="none"
					:placeholder="$t('module.statistics_textarea_label_1_example')"
					:rows="8"
        />
        <div class="text-[#9A9A9A] text-sm mt-6">
          {{ $t('module.statistics_textarea_label_2') }}
        </div>
        <ElInput
          v-model="css.value" v-loading="loading" class="mt-3 !w-[600px]" style="--el-input-bg-color: #F7F8FA" type="textarea" resize="none"
          :rows="8" :placeholder="$t('module.statistics_textarea_label_2_example')"
        />
      </div>

      <ElDivider />
      <ElButton v-debounce class="h-[36px] w-[96px]" type="primary" size="large" @click="handleSave">
        {{ $t('action_save') }}
      </ElButton>
    </div>
  </Layout>
</template>

<style scoped lang="scss"></style>
