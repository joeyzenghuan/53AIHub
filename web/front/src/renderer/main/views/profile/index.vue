<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { useRoute } from 'vue-router'

import { useUserStore } from '@/stores/modules/user'
import { useEnterpriseStore } from '@/stores/modules/enterprise'

import About from './about.vue'
import Common from './common.vue'
import Password from './password.vue'
import UserInfo from './userinfo.vue'

const userStore = useUserStore()
const enterpriseStore = useEnterpriseStore()

const props = withDefaults(
  defineProps<{
    type?: string
  }>(),
  {
    type: 'glider'
  }
)

const route = useRoute()

// 添加响应式状态
const isMobileView = ref(false)
const showMobileMenu = ref(false)

const menus = computed(() => [
  {
    label: '划词菜单栏',
    value: 'glider',
    icon: 'mouse',
    visible: userStore.is_login && window.$isElectron
  },
  {
    label: '网页工具栏',
    value: 'toolbar',
    icon: 'web',
    visible: userStore.is_login && window.$isElectron
  },
  {
    label: '通用设置',
    value: 'common',
    icon: 'setting2',
    visible: window.$isElectron
  },
  {
    label: window.$t('profile.info'),
    value: 'userinfo',
    icon: 'person',
    visible: userStore.is_login
  },
  {
    label: window.$t('profile.change_password'),
    value: 'password',
    icon: 'lock',
    visible: userStore.is_login
  },
  {
    label: '关于',
    value: 'about',
    icon: 'info',
    visible: window.$isElectron
  }
])

const currentMenu = computed(() => {
  return menus.value.find((item) => item.value === page.value) || {}
})

const page = ref('')
const handleSelect = (item: any) => {
  page.value = item.value
  // 在移动视图下，选择菜单项后关闭菜单
  if (isMobileView.value) {
    showMobileMenu.value = false
  }
}

// 切换移动端菜单显示状态
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

// 检测窗口大小变化
const checkScreenSize = () => {
  isMobileView.value = window.innerWidth < 768
  if (!isMobileView.value) {
    showMobileMenu.value = false
  }
}

onMounted(() => {
  const visibleMenus = menus.value.filter((item) => item.visible).map((item) => item.value)
  const type = props.type || (route.query.type as string) || 'userinfo'
  page.value = visibleMenus.includes(type) ? type : visibleMenus[0]

  enterpriseStore.loadInfo()

  // 初始检测屏幕尺寸
  checkScreenSize()

  // 监听窗口大小变化
  window.addEventListener('resize', checkScreenSize)
})
</script>

<template>
  <div class="h-full flex flex-col md:flex-row bg-[#F4F6F9]">
    <!-- 移动端菜单按钮 -->
    <div class="md:hidden flex items-center justify-between px-4 py-2 bg-white">
      <div class="flex items-center gap-2 text-primary">
        <svg-icon size="16" name="setting"></svg-icon>
        <span class="text-[18px]">{{ $t('action.setting') }}</span>
      </div>
      <div @click="toggleMobileMenu" class="cursor-pointer p-2">
        <svg-icon size="20" name="menu"></svg-icon>
      </div>
    </div>

    <!-- 侧边菜单 - 响应式 -->
    <div
      class="w-full md:w-[250px] md:flex-none py-5 bg-white border-t md:block md:border-none"
      :class="[isMobileView && !showMobileMenu ? 'hidden' : '']"
    >
      <div class="h-15 hidden md:flex items-center gap-2 px-6 mb-2 text-primary">
        <svg-icon size="16" name="setting"></svg-icon>
        <span class="text-[22px]">{{ $t('action.setting') }}</span>
      </div>
      <div class="py-2 flex flex-col gap-1">
        <template v-for="item in menus" :key="item.value">
          <div
            class="h-10 flex items-center gap-3 px-6 cursor-pointer hover-bg-primary-light-9 hover-text-theme"
            v-if="item.visible"
            :class="[page === item.value ? 'text-theme bg-primary-light-9' : 'text-regular']"
            @click="handleSelect(item)"
          >
            <svg-icon size="16" :name="item.icon || 'setting'"></svg-icon>
            <span class="text-sm">{{ item.label }}</span>
          </div>
        </template>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="flex-1 bg-[#F4F6F9] py-4 md:py-8 px-4 md:max-w-[750px] mx-auto flex flex-col">
      <div class="flex-none text-sm text-primary font-semibold">{{ currentMenu.label }}</div>
      <div class="flex-1 p-4 md:p-8 bg-[#FFFFFF] rounded-xl mt-4 overflow-y-auto">
        <UserInfo v-if="page === 'userinfo'"></UserInfo>
        <Password v-else-if="page === 'password'"></Password>
        <Toolbar v-else-if="page === 'toolbar'"></Toolbar>
        <Glider v-else-if="page === 'glider'"></Glider>
        <About v-else-if="page === 'about'"></About>
        <Common v-else-if="page === 'common'"></Common>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .h-full {
    min-height: 100vh;
  }
}
</style>
