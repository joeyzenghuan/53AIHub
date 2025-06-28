<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import ServiceDialog from '@/views/login/components/service-dialog.vue'

import { useEnterpriseStore, useUserStore } from '@/stores'
import { useEnv } from '@/hooks/useEnv'

const { isOpLocalEnv } = useEnv()
const enterprise_store = useEnterpriseStore()
const user_store = useUserStore()
const year = new Date().getFullYear()
const loading = ref(false)
const home_info = ref({})
const service_visible = ref(false)

const user_info = computed(() => user_store.info)
const enterprise_info = computed(() => enterprise_store.info)
const is_saas_login = computed(() => user_store.is_saas_login)
const domain_url = computed(() => isOpLocalEnv.value ? `${window.location.origin}/#/index` : enterprise_info.value.domain)

const formatNumber = (num = 0) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

onMounted(async () => {
  loading.value = true
  home_info.value = await enterprise_store.loadHomeInfo().finally(() => {
    loading.value = false
  })
})
</script>

<template>
  <div class="h-full flex flex-col px-[60px] py-8">
    <Header :title="$t('module.homepage')">
      <template #right>
        <LanguageDropdown />
      </template>
    </Header>

    <div
      v-loading="loading"
      class="flex-1 overflow-y-auto flex bg-white mt-4 py-[67px] box-border px-[76px] rounded-lg"
    >
      <div class="flex-1">
        <div class="flex items-center gap-4">
          <img class="h-[70px] object-contain" :src="enterprise_info.logo" alt="">
          <h3 class="text-2xl text-[#1D1E1F] font-semibold">
            {{ enterprise_info.name }}
          </h3>
          <SvgIcon
            v-router.push="{ name: 'Info' }" class="cursor-pointer hover:opacity-60" name="edit"
            color="#2563EB"
          />
        </div>
        <div class="text-sm text-[#9A9A9A] mt-3">
          {{ enterprise_info.description || '' }}
        </div>
        <div class="mt-10 flex flex-col gap-8">
          <div class="flex items-center gap-8">
            <div class="flex-none w-[64px] text-base text-[#9A9A9A]">
              {{ isOpLocalEnv ? $t('website_home') : $t('website_domain') }}
            </div>
            <div v-if="is_saas_login || isOpLocalEnv" class="flex items-center gap-2">
              <ElLink
                style="--el-link-text-color: #1D1E1F; --el-link-font-size: 16px" target="_blank"
                :href="`${domain_url}?access_token=${user_info.access_token}&eid=${enterprise_info.eid}`"
              >
                {{ domain_url }}
                <SvgIcon class="cursor-pointer ml-1" name="blank" width="16" color="#2563EB" />
              </ElLink>
              <SvgIcon
                v-if="!isOpLocalEnv" v-router.push="{ name: 'Domain' }" class="cursor-pointer hover:opacity-60	" name="edit"
                width="16" color="#2563EB"
              />
            </div>
          </div>
          <div v-if="is_saas_login" class="flex items-center gap-8">
            <div class="flex-none w-[64px] text-base text-[#9A9A9A]">
              {{ $t('version') }}
            </div>
            <div class="flex items-center gap-3">
              <div class="text-base text-[#2563EB]">
                {{ $t(`website_version.${enterprise_info.version}`) }}
              </div>
            </div>
          </div>
          <div class="flex items-center gap-8">
            <div class="flex-none w-[64px] text-base text-[#9A9A9A]">
              {{ $t('agent') }}
            </div>
            <div class="flex items-center gap-3">
              <div class="text-base text-[#2563EB]">
                {{ formatNumber(+home_info.agent_count || 0) }}
              </div>
            </div>
          </div>
          <div class="flex items-center gap-8">
            <div class="flex-none w-[64px] text-base text-[#9A9A9A]">
              {{ $t('user_count') }}
            </div>
            <div class="flex items-center gap-3">
              <div class="text-base text-[#2563EB]">
                {{ formatNumber(+home_info.user_count || 0) }}
              </div>
            </div>
          </div>
          <div class="flex items-center gap-8">
            <div class="flex-none w-[64px] text-base text-[#9A9A9A]">
              {{ $t('create_time') }}
            </div>
            <div class="flex items-center gap-3">
              <div class="text-base text-[#1D1E1F]">
                {{ (enterprise_info.created_time || '').substr(0, 16) }}
              </div>
            </div>
          </div>
          <div v-if="is_saas_login" class="flex items-center gap-8">
            <div class="flex-none w-[64px] text-base text-[#9A9A9A]">
              {{ $t('service_expired_time') }}
            </div>
            <div class="flex items-center gap-3">
              <div class="text-base text-[#1D1E1F]">
                {{ (enterprise_info.expired_time || '').substr(0, 16) }}
              </div>
              <el-button link type="primary" @click="service_visible = true">
                {{ $t('action_renew_v2') }}
              </el-button>
            </div>
          </div>
        </div>
        <div class="w-full h-[67px]" />
      </div>
      <div class="ml-[48px] pt-[68px] flex flex-col items-end">
        <div class="flex flex-col gap-3 w-[238px]">
          <div class="flex justify-between text-sm text-[#4F5052]">
            <span>{{ $t('configuration_completion') }}</span>
            <span>100%</span>
          </div>
          <el-progress :percentage="100" :show-text="false" />
        </div>
        <div class="w-[312px] h-[220px] mt-[74px] flex flex-col items-center justify-center bg-[#F5F7FA] group">
          <img class="w-10 h-8 mb-8 transition-all duration-300 ease-in-out group-hover:hidden" :src="$getRealPath({ url: '/images/index/wechat.png' })" alt="">
          <img class="w-[120px] h-[120px] mb-2 transition-all duration-300 ease-in-out group-hover:block hidden" :src="$getRealPath({ url: '/images/index/qrcode.png' })" alt="">
          <h6 class="text-xl text-[#1D1E1F] font-medium mb-2">
            {{ $t('join_group') }}
          </h6>
          <p class="text-sm text-[#1D1E1F]">
            {{ $t('join_group_desc') }}
          </p>
        </div>
        <!-- <img class="w-[312px] h-[220px] mt-[74px]" :src="$getRealPath({ url: '/images/intro.png' })" alt=""> -->
      </div>
    </div>
    <div class="text-sm text-[#9A9A9A] text-center py-11">
      {{ $t('copyright_desc', { year }) }}
    </div>

    <ServiceDialog v-model:visible="service_visible" :title="$t('action_renew_v2')" />
  </div>
</template>

<style scoped>

</style>
