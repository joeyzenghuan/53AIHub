<script setup lang="ts">
import { CopyDocument, Delete, Setting } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import ExclusiveSettingDialog from './components/exclusive-setting-dialog.vue'
import IndependentSettingDialog from './components/independent-setting-dialog.vue'
import { VERSION_MODULE } from '@/constants/enterprise'

import { copyToClip } from '@/utils/copy'
import { useEnv } from '@/hooks/useEnv'
import domainApi from '@/api/modules/domain'

const { isDevEnv } = useEnv()
const exclusive_setting_ref = ref()
const independent_setting_ref = ref()
const exclusive_domain = ref('')
const independent_domain = ref('')
const independent_https_enable = ref(false)
const loading = ref(false)
const exclusive_info = ref({})
const independent_info = ref({})

const loadListData = async () => {
  loading.value = true
  const { data: { exclusive_domains = [], independent_domains = [] } = {} } = await domainApi.saas_list().finally(() => {
    loading.value = false
  })
  exclusive_info.value = exclusive_domains[0] || {}
  let domain_name = (exclusive_info.value.domain || '')
    .trim()
    .replace(/^https?:\/\//, '')
    .replace(/\.53ai\.com$/, '')
  if (isDevEnv.value) domain_name = domain_name.replace(/\.hub$/, '')
  exclusive_domain.value = `https://${domain_name}${isDevEnv.value ? '.hub' : ''}.53ai.com`
  exclusive_info.value.domain_name = domain_name

  independent_info.value = independent_domains[0] || {}
  try {
    independent_info.value.config = JSON.parse(independent_info.value.config)
  } catch (error) {
    // console.error(error)
    independent_info.value.config = {}
  }
  domain_name = (independent_info.value.domain || '').trim().replace(/^https?:\/\//, '')
  if (domain_name) {
    independent_https_enable.value = Boolean(+independent_info.value.config.enable_https)
    independent_domain.value = `http${independent_https_enable.value ? 's' : ''}://${domain_name}`
    independent_info.value.domain_name = domain_name
  }
}
const handleCopy = async ({ text }: { text: string }) => {
  if (!text) return
  await copyToClip(text)
  ElMessage.success(window.$t('action_copy_success'))
}

const handleSetting = ({ type }: { type: 'exclusive' | 'independent' }) => {
  switch (type) {
    case 'exclusive':
      exclusive_setting_ref.value.open({ data: { ...exclusive_info.value, domain: exclusive_domain.value } })
      break
    default:
      independent_setting_ref.value.open({ data: { ...independent_info.value } })
      break
  }
}
const handleDelete = async ({ type }: { type: 'exclusive' | 'independent' }) => {
  switch (type) {
    case 'independent':
      await ElMessageBox.confirm(window.$t('module.domain_independent_delete_confirm'))
      await domainApi.saas_independent_delete(independent_info.value.id)
      independent_https_enable.value = false
      independent_domain.value = ''
      independent_info.value = {}
      ElMessage.success(window.$t('action_delete_success'))
      break
  }
}

onMounted(() => {
  loadListData()
})
</script>

<template>
  <Layout class="px-[60px] py-8">
    <Header :title="$t('module.domain')" />

    <div class="flex-1 flex flex-col bg-white p-6 mt-3 box-border">
      <div v-loading="loading" class="flex-1 max-h-[calc(100vh-100px)] overflow-auto">
        <h1 class="font-semibold text-[#1D1E1F]">
          {{ $t('module.domain_exclusive') }}
        </h1>
        <div class="mt-4 border rounded overflow-hidden p-6">
          <label class="text-[#1D1E1F] text-sm">{{ $t('module.domain_exclusive_label') }}</label>
          <div class="w-full mt-4 flex items-center gap-3">
            <ElInput
              v-model="exclusive_domain"
              class="!max-w-[600px]"
              type="text"
              :placeholder="$t('form_input_placeholder')"
              disabled
              size="large"
            />
            <ElButton class="flex-none text-[#3664EF]" type="default" size="large" @click.stop="handleCopy({ text: exclusive_domain })">
              <ElIcon :size="16" class="mr-2" color="#3664EF">
                <CopyDocument />
              </ElIcon>
              {{ $t('action_copy') }}
            </ElButton>
            <div class="flex-1 h-2" />
            <ElButton class="flex-none text-[#5A6D9E] !p-0" type="text" size="large" @click.stop="handleSetting({ type: 'exclusive' })">
              <ElIcon :size="16" class="mr-2" color="#5A6D9E">
                <Setting />
              </ElIcon>
              {{ $t('action_setting') }}
            </ElButton>
          </div>
        </div>
        <h1 class="mt-8 font-semibold text-[#1D1E1F]">
          {{ $t('module.domain_independent') }}
        </h1>
        <div class="mt-4 border rounded overflow-hidden p-6" v-version="{ module: VERSION_MODULE.INDEPENDENT_DOMAIN, mode: 'tooltip' }">
          <label class="text-[#1D1E1F] text-sm">
            {{ $t('module.domain_independent_label') }}
            <template v-if="independent_domain">
              <ElTag class="ml-3 !border-none !bg-[#E3F6E0] !text-[#09BB07]" type="success" size="default">
                {{ $t('effective') }}
              </ElTag>
              <ElTag
                v-if="independent_https_enable"
                class="ml-3 !border-none !bg-[#E3F6E0] !text-[#09BB07] flex items-center"
                type="success"
                size="default"
              >
                <SvgIcon class="!inline-block" name="global" width="12" height="12" />
                {{ $t('https_enabled') }}
              </ElTag>
            </template>
          </label>
          <div class="w-full mt-4 flex items-center gap-3">
            <template v-if="independent_domain">
              <ElInput
                v-model="independent_domain"
                class="!max-w-[600px]"
                type="text"
                :placeholder="$t('form_input_placeholder')"
                disabled
                size="large"
              />
              <ElButton class="flex-none text-[#3664EF]" type="default" size="large" @click.stop="handleCopy({ text: independent_domain })">
                <ElIcon :size="16" class="mr-2" color="#3664EF">
                  <CopyDocument />
                </ElIcon>
                {{ $t('action_copy') }}
              </ElButton>
            </template>
            <div class="flex-1 text-sm text-[#9A9A9A]">
              {{ independent_domain ? '' : $t('module.domain_independent_desc') }}
            </div>
            <ElButton class="flex-none text-[#5A6D9E] !p-0" type="text" size="large" @click.stop="handleSetting({ type: 'independent' })">
              <ElIcon :size="16" class="mr-2" color="#5A6D9E">
                <Setting />
              </ElIcon>
              {{ $t('action_setting') }}
            </ElButton>
            <ElButton
              v-if="independent_domain"
              class="flex-none text-[#5A6D9E] !p-0 !ml-0"
              type="text"
              size="large"
              @click.stop="handleDelete({ type: 'independent' })"
            >
              <ElIcon :size="16" class="mr-2" color="#5A6D9E">
                <Delete />
              </ElIcon>
              {{ $t('action_delete') }}
            </ElButton>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  <ExclusiveSettingDialog ref="exclusive_setting_ref" @success="loadListData" />
  <IndependentSettingDialog ref="independent_setting_ref" @success="loadListData" />
</template>

<style scoped lang="scss"></style>
