<script setup lang="ts">
import { Check } from '@element-plus/icons-vue'
import { computed, getCurrentInstance, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import UploadLogo from '@/components/Upload/image.vue'
import UploadIco from '@/components/Upload/image.vue'
import ServiceDialog from '@/views/login/components/service-dialog.vue'

import { useEnterpriseStore, useUserStore } from '@/stores'
import { WEBSITE_TYPE_DESC_MAP, WEBSITE_TYPE_ENTERPRISE, WEBSITE_TYPE_INDEPENDENT, WEBSITE_TYPE_INDUSTRY, WEBSITE_TYPE_LABEL_MAP } from '@/stores/modules/enterprise'
import { generateInputRules } from '@/utils/form-rule'
import eventBus from '@/utils/event-bus'
import { useEnv } from '@/hooks/useEnv'

const { proxy: _this } = getCurrentInstance()

const { isOpLocalEnv } = useEnv()
const enterprise_store = useEnterpriseStore()
const user_store = useUserStore()
const form_ref = ref()
const service_visible = ref(false)
const service_title = ref('')
const loading = ref(true)
const submitting = ref(false)
const enterprise_info = computed(() => enterprise_store.info)

const form = reactive({
  logo: enterprise_info.value.logo || '',
  ico: enterprise_info.value.ico || '',
  name: enterprise_info.value.display_name || '',
  keywords: enterprise_info.value.keywords || [],
  language: (enterprise_info.value.language !== 'En' && enterprise_info.value.language) || 'zh-cn',
  desc: enterprise_info.value.description || '',
  copyright: enterprise_info.value.copyright || '',
  website_type: enterprise_info.value.type || WEBSITE_TYPE_INDEPENDENT,
	template_type: (enterprise_info.value.template_type != 1 && enterprise_info.value.template_type) || 'website',
  layout_type: (enterprise_info.value.layout_type != 1 && enterprise_info.value.layout_type) || 'loose',
})
const rules = reactive({
  logo: generateInputRules({ message: 'module.website_info_logo_placeholder' }),
  icon: generateInputRules({ message: 'module.website_info_logo_placeholder' }),
  name: generateInputRules({ message: 'module.website_info_name_placeholder' }),
})
const language_options = ref([
  { label: '中文-CN', value: 'zh-cn' },
  { label: '中文-TW', value: 'zh-tw' },
  { label: '英文-EN', value: 'en' },
  { label: '日文-JP', value: 'jp' },
])
const template_options = ref([
  { label: 'software_style', value: 'software' },
  { label:'website_style', value: 'website' },
])
const layout_options = ref([
  { label: '宽松', value: 'loose', desc: '布局宽松铺满屏幕，自适应用户的分辨率' },
  { label: '居中', value: 'center', desc: '布局紧凑且内容居中' },
])
const preview_url = ref('')

const handleUpgrade = () => {
  service_visible.value = true
  service_title.value = $t('action_upgrade')
}
const handleRenew = () => {
  service_visible.value = true
  service_title.value = $t('action_renew')
}
const handleViewExample = ({ value = '' } = {}) => {
  preview_url.value = _this.$getRealPath({ url: `/images/info/template-${value}.png` })
}
const handleTemplateEdit = ({ value = '' } = {}) => {
  ElMessage.warning(window.$t('feature_coming_soon'))
}
const handleSave = async () => {
  const valid = await form_ref.value.validate()
  if (!valid)
    return
  submitting.value = true
  await enterprise_store.update({
    data: {
      eid: enterprise_info.value.eid,
      logo: form.logo,
      ico: form.ico,
      display_name: form.name,
      language: form.language,
      description: form.desc,
      keywords: JSON.stringify(form.keywords),
      copyright: form.copyright,
      type: form.website_type,
      template_type: form.template_type,
      layout_type: form.layout_type,
    },
  }).finally(() => {
    submitting.value = false
  })
  ElMessage.success(window.$t('action_save_success'))
  enterprise_store.loadSelfInfo()
}
const loadedHandler = () => {
  loading.value = false
}

onMounted(() => {
  eventBus.on('enterprise-info-loaded', loadedHandler)
})
onUnmounted(() => {
  eventBus.off('enterprise-info-loaded', loadedHandler)
})

watch(() => enterprise_info.value, () => {
  form.logo = enterprise_info.value.logo || ''
  form.ico = enterprise_info.value.ico || ''
  form.name = enterprise_info.value.display_name || ''
  form.keywords = JSON.parse(enterprise_info.value.keywords || '[]')
  form.language = (enterprise_info.value.language !== 'En' && enterprise_info.value.language) || 'zh-cn'
  form.desc = enterprise_info.value.description || ''
  form.copyright = enterprise_info.value.copyright || ''
  form.website_type = enterprise_info.value.type || WEBSITE_TYPE_INDEPENDENT
  form.template_type = (enterprise_info.value.template_type != 1 && enterprise_info.value.template_type) || 'website'
  if (!['software', 'website'].includes(form.template_type)) form.template_type = 'website'
  form.layout_type = (enterprise_info.value.layout_type != 1 && enterprise_info.value.layout_type) || 'loose'
  if (+enterprise_info.value.eid)
    loadedHandler()
}, {
  immediate: true,
  deep: true,
})
</script>

<template>
  <Layout class="px-[60px] py-8">
    <Header :title="$t('module.website_info')" />
    <!-- <div class="flex-none mt-5 bg-white py-6 px-8 rounded overflow-hidden">
			<div class="text-[#4F5052] font-semibold">{{ $t('version') }}</div>
			<div class="mt-3 flex items-baseline gap-2 text-sm text-[#4F5052]">
				<span class="text-[#1D1E1F] font-semibold text-xl">{{ $t(`website_version.${enterprise_info.version}`) }}</span>
				<span>{{ $t('expired_time') }}: {{ (enterprise_info.expired_time || '').substr(0, 16) }}</span>
				<div class="flex-1"></div>
				<ElButton class="flex-none h-[36px] min-w-[96px]" type="default" size="large" @click.stop="handleUpgrade">
					{{ $t('action_upgrade') }}
				</ElButton>
				<ElButton class="flex-none h-[36px] min-w-[96px]" type="primary" size="large" @click.stop="handleRenew">
					{{ $t('action_renew') }}
					</ElButton>
			</div>
		</div> -->
    <div v-loading="loading" class="mt-5 flex-1 flex flex-col bg-white py-6 px-8 box-border">
      <ElForm
        ref="form_ref" class="flex-1 max-h-[calc(100vh-264px)] overflow-auto" :model="form" :rules="rules"
        label-position="top"
      >
        <h1 class="text-[#1D1E1F] font-semibold">
          {{ $t('basic_info') }}
        </h1>
        <ElFormItem class="mt-8" :label="$t('module.website_info_logo')" prop="logo">
          <div class="mt-4 w-full flex items-center gap-4">
            <ElImage
              v-if="form.logo" class="h-[70px] rounded overflow-hidden" :src="form.logo"
              :preview-src-list="[form.logo]" fit="contain"
            />
            <UploadLogo
              v-model="form.logo" class="w-auto h-auto" show-text
              :text="$t(form.logo ? 'action_modify' : 'action_upload')"
            />
          </div>
          <div class="mt-2 w-full text-sm text-[#9A9A9A]">
            {{ $t('module.website_info_logo_tip') }}
          </div>
        </ElFormItem>
        <ElFormItem class="mt-8" :label="$t('module.website_info_ico')" prop="ico">
          <div class="mt-4 w-full flex items-center gap-4">
            <ElImage
              v-if="form.ico" class="h-[24px] rounded overflow-hidden" :src="form.ico"
              :preview-src-list="[form.ico]" fit="contain"
            />
            <UploadIco
              v-model="form.ico" class="w-auto h-auto" show-text cropper-disabled :allow-type-list="['ico']"
              :text="$t(form.ico ? 'action_modify' : 'action_upload')"
            />
          </div>
          <div class="mt-2 w-full text-sm text-[#9A9A9A]">
            {{ $t('module.website_info_ico_tip') }}
          </div>
        </ElFormItem>
        <ElFormItem :label="$t('module.website_info_name')" prop="name">
          <ElInput
            v-model="form.name" class="max-w-[660px]" :placeholder="$t('module.website_info_name_placeholder')"
            size="large" clearable maxlength="120" show-word-limit
          />
        </ElFormItem>
        <ElFormItem :label="$t('module.website_info_keyword')" prop="keywords">
          <ElInputTag
            v-model="form.keywords" class="max-w-[660px]" draggable size="large"
            :placeholder="$t('module.website_info_keyword_placeholder')" :max="10" :maxlength="20"
          />
        </ElFormItem>
        <ElFormItem :label="$t('module.website_info_desc')">
          <ElInput
            v-model="form.desc" class="max-w-[660px]" size="large" type="textarea" :rows="5" resize="none"
            clearable maxlength="200" show-word-limit :placeholder="$t('module.website_info_desc_placeholder')"
          />
        </ElFormItem>
        <ElFormItem :label="$t('module.website_info_copyright')" prop="copyright">
          <ElInput
            v-model="form.copyright" class="max-w-[660px]"
            :placeholder="$t('module.website_info_copyright_placeholder')" size="large" clearable maxlength="200"
            show-word-limit
          />
        </ElFormItem>
        <ElFormItem :label="$t('module.website_info_language')">
          <ElSelect v-model="form.language" class="max-w-[660px]" size="large">
            <ElOption
              v-for="item in language_options" :key="item.value"
              :label="$t(`language_option_label.${item.value}`)" :value="item.value"
            />
          </ElSelect>
        </ElFormItem>
        <ElFormItem v-if="!isOpLocalEnv" :label="$t('module.website_info_type')" prop="website_type">
          <ul class="flex items-center flex-wrap gap-4">
            <li
              v-for="value in [WEBSITE_TYPE_INDEPENDENT, WEBSITE_TYPE_ENTERPRISE, WEBSITE_TYPE_INDUSTRY]" :key="value"
              class="relative w-[300px] px-5 py-4 bg-[#F5F5F5] flex flex-col cursor-pointer gap-2 border rounded box-border overflow-hidden text-sm hover:border-[#3664EF] hover:text-[#3664EF]"
              :class="[form.website_type === value ? 'border-[#3664EF] text-[#3664EF]' : 'text-[#1D1E1F]']"
              @click.stop="form.website_type = value"
            >
              <div
                v-if="form.website_type === value"
                class="absolute -top-6 -right-6 rotate-45 w-12 h-12 flex items-center justify-center bg-[#3664EF] text-white z-[9]"
              >
                <ElIcon class="-rotate-45 translate-y-3.5 translate-x-0" color="#fff" :size="16">
                  <Check />
                </ElIcon>
              </div>
              <div class="text-base">
                {{ $t(WEBSITE_TYPE_LABEL_MAP.get(value)) }}
              </div>
              <div class="text-sm text-[#939499]">
                {{ $t(WEBSITE_TYPE_DESC_MAP.get(value)) }}
              </div>
            </li>
          </ul>
        </ElFormItem>
        <ElFormItem v-if="false" :label="$t('module.website_info_template')">
					<ul class="flex flex-wrap gap-4">
						<li v-for="item in template_options" :key="item.value"
							class="w-[172px] p-1.5 bg-[#F5F5F5] flex flex-col cursor-pointer items-center gap-2 border rounded box-border overflow-hidden text-sm hover:border-[#3664EF] hover:text-[#3664EF]"
							:class="[form.template_type === item.value ? 'border-[#3664EF] text-[#3664EF]' : 'text-[#4F5052]']"
							@click.stop="form.template_type = item.value">
							<div class="text-sm p-1.5">{{ $t(item.label) }}</div>
							<ElImage class="w-full" :src="$getRealPath({ url: `/images/info/template-${item.value}.png` })"
								fit="contain" />
							<div class="flex items-center justify-between w-full">
								<ElButton class="!p-0 text-[#9A9A9A] bg-transparent" type="text" size="small"
									@click.stop="handleViewExample({ value: item.value })">{{ $t('action_view_example') }}</ElButton>
								<!-- <ElButton class="!p-0 text-[#9A9A9A] bg-transparent opacity-60 pointer-events-none" type="text" size="small"
									@click.stop="handleTemplateEdit({ value: item.value })">{{ $t('action_edit') }}</ElButton> -->
							</div>
						</li>
					</ul>
				</ElFormItem>
        <!-- <ElFormItem :label="$t('module.website_info_layout')">
					<ul class="flex flex-wrap gap-8">
						<li v-for="item in layout_options" :key="item.value"
							class="w-[252px] flex flex-col cursor-pointer box-border overflow-hidden text-sm group hover:text-[#3664EF]"
							:class="[form.layout_type === item.value ? 'text-[#3664EF]' : 'text-[#4F5052] opacity-60 pointer-events-none']"
							@click.stop="form.layout_type = item.value">
							<div class="w-full h-[158px] px-2.5 py-3.5 border rounded box-border  group-hover:border-[#3664EF]"
								:class="[form.layout_type === item.value ? 'border-[#3664EF]' : '']">
								<ElImage class="w-full" :src="$getRealPath({ url: `/images/info/layout-${item.value}.png` })"
									fit="contain" />
							</div>
							<div class="text-sm mt-3">{{ $t(`layout_option_label.${item.value}`) }}</div>
							<div class="text-xs mt-2 text-[#9A9A9A]">{{ $t(`layout_option_desc.${item.value}`) }}</div>
						</li>
					</ul>
				</ElFormItem> -->
        <div class="w-full h-8" />
      </ElForm>
      <ElDivider />
      <ElButton class="h-[36px] w-[96px]" type="primary" size="large" :loading="submitting" @click="handleSave">
        {{
          $t('action_save') }}
      </ElButton>
    </div>
  </Layout>
  <ElImageViewer v-if="preview_url" :url-list="[preview_url]" @close="preview_url = ''" />
  <ServiceDialog v-model:visible="service_visible" :title="service_title" />
</template>

<style scoped lang="scss">
::v-deep(.el-textarea__inner) {
	padding: 14px 16px;
}
</style>
