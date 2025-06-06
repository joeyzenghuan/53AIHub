<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import HubUiX from 'hub-ui-x'
import eventBus from '@/utils/event-bus'

const { t, locale } = useI18n()

const lang_options = ref([
  { label: '中文（简体）', value: 'zh-cn' },
  { label: '中文（繁體）', value: 'zh-tw' },
  { label: 'English（US）', value: 'en' },
  { label: '日本語', value: 'ja' },
])
const current_lang_label = ref(lang_options.value.find(item => item.value === locale.value)?.label || '')

const onLanguageChange = (locale_value: string) => {
  localStorage.setItem('default_lang', locale_value)
  locale.value = locale_value
  current_lang_label.value = lang_options.value.find(item => item.value === locale_value)?.label || ''
  eventBus.emit('language-change', locale_value)

  HubUiX.setLang(locale_value)
}
</script>

<template>
  <ElDropdown trigger="click" @command="onLanguageChange">
    <div class="!outline-none !border-none flex-center gap-1 cursor-pointer">
      <SvgIcon name="language" />
      <span class="text-sm  cursor-pointer">
        {{ current_lang_label }}
      </span>
      <ElIcon>
        <ArrowDown />
      </ElIcon>
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem v-for="item in lang_options" :key="item.value" :command="item.value">
          {{ item.label }}
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<style lang="scss" scoped>

</style>
