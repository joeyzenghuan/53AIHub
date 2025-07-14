<template>
  <div ref="scrollRef" class="relative h-full flex flex-col overflow-y-auto overflow-x-hidden">
    <MainHeader type="homepage" :need-login="false" :sider-button="false" :back="false" sticky :main-class="['w-11/12 lg:w-4/5']">
      <template #before_suffix>
        <a href="/" class="flex flex-none items-center gap-2 overflow-hidden">
          <img :alt="enterpriseStore.display_name" :title="enterpriseStore.display_name" class="min-w-11 h-11 rounded" :src="enterpriseStore.logo" />
          <span class="text-2xl font-semibold nav-text truncate">
            {{ enterpriseStore.display_name }}
          </span>
        </a>
        <div class="flex-1 w-0 menu overflow-hidden">
          <ElSkeleton :loading="navigationStore.loading && false" animated>
            <template #template>
              <ElSkeletonItem v-for="i in 4" :key="i" variant="text" class="ml-4 mt-2 !w-[82px] !h-[42px]" />
            </template>
            <template #default>
              <ElMenu router mode="horizontal" :default-active="route.path">
                <ElMenuItem
                  v-for="item in navigationStore.navigations"
                  :key="item.navigation_id"
                  class="relative !cursor-pointer !opacity-100 hover-text-theme-important"
                  :index="item.menu_path"
                  :disabled="item.target === NAVIGATION_TARGET.BLANK || item.type === NAVIGATION_TYPE.EXTERNAL"
                >
                  {{ item.name }}
                  <div
                    v-if="item.target === NAVIGATION_TARGET.BLANK || item.type === NAVIGATION_TYPE.EXTERNAL"
                    class="absolute top-0 left-0 w-full h-full bg-transparent z-[10]"
                    @click="handleNavigationClick(item)"
                  />
                </ElMenuItem>
              </ElMenu>
            </template>
          </ElSkeleton>
        </div>
      </template>
    </MainHeader>
    <div
      v-if="
        !['Index', 'HomeIndex', 'HomePromptDetail', 'HomeAgentDetail', 'HomeChat'].includes(route.name) &&
        enterpriseStore.banner_info.url_list &&
        !!enterpriseStore.banner_info.url_list.length
      "
      class="w-full flex-none"
    >
      <ElCarousel
        class="!w-full"
        :arrow="enterpriseStore.banner_info.url_list.length > 1 ? 'always' : 'never'"
        :indicator-position="enterpriseStore.banner_info.url_list.length > 1 ? 'outside' : 'none'"
        :interval="enterpriseStore.banner_info.interval ? parseInt(enterpriseStore.banner_info.interval * 1000) : 5000"
      >
        <ElCarouselItem v-for="url in enterpriseStore.banner_info.url_list || []" :key="url" class="w-full">
          <img :src="url" class="h-[256px] md:h-[300px] lg:h-[356px] object-cover mx-auto" />
        </ElCarouselItem>
      </ElCarousel>
    </div>
    <div class="flex-1" :class="{ 'overflow-hidden': ['HomeChat'].includes(route.name) }">
      <RouterView v-slot="{ Component, route }" v-loading="is_redirect">
        <component :is="Component" :key="route.path" />
      </RouterView>
    </div>
    <!-- 底部布局 -->
    <footer class="mt-auto relative py-8 md:py-10 lg:py-12 page-footer-bg page-footer-text">
      <!-- <div  class="w-11/12 lg:w-4/5 mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:flex gap-6 md:gap-4">
          <div class="flex-1">
            <h4 class="text-lg md:text-xl font-medium mb-3 md:mb-4">产品服务</h4>
            <ul class="space-y-2 text-sm md:text-base text-white text-opacity-50">
              <li><a href="/product/work-ai">工作AI</a></li>
              <li><a href="/product/life-ai">生活AI</a></li>
              <li><a href="/product/enterprise-ai">企业AI</a></li>
              <li><a href="/product/custom-model">大模型定制</a></li>
              <li><a href="/product/magic-workshop">魔法工坊</a></li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-lg md:text-xl font-medium mb-3 md:mb-4">解决方案</h4>
            <ul class="space-y-2 text-sm md:text-base text-white text-opacity-50">
              <li><a href="/solution/application">【应用场景】解决方案</a></li>
              <li><a href="/solution/function">【功能场景】解决方案</a></li>
              <li><a href="/solution/industry">【行业场景】解决方案</a></li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-lg md:text-xl font-medium mb-3 md:mb-4">AI知识库</h4>
            <ul class="space-y-2 text-sm md:text-base text-white text-opacity-50">
              <li><a href="/knowledge/technology">前沿技术</a></li>
              <li><a href="/knowledge/application">应用场景</a></li>
              <li><a href="/knowledge/product">产品世界</a></li>
              <li><a href="/knowledge/practice">企业实践</a></li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-lg md:text-xl font-medium mb-3 md:mb-4">AI百宝箱</h4>
            <ul class="space-y-2 text-sm md:text-base text-white text-opacity-50">
              <li><a href="/download/windows">Windows版本</a></li>
              <li><a href="/download/mac">Mac OS版本</a></li>
              <li><a href="/download/mobile">移动版本</a></li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-lg md:text-xl font-medium mb-3 md:mb-4">关于我们</h4>
            <ul class="space-y-2 text-sm md:text-base text-white text-opacity-50">
              <li><a href="/about/company">公司介绍</a></li>
              <li><a href="/about/contact">联系合作</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div  class="border-t border-dashed border-white border-opacity-10 my-6 md:my-8 lg:my-10"></div> -->
      <div class="w-11/12 lg:w-4/5 mx-auto flex flex-col md:flex-row items-center">
        <div class="flex-1 w-full md:w-auto mb-6 md:mb-0">
          <div v-if="false" class="flex flex-col md:flex-row md:items-center mb-4">
            <span class="text-base text-white mb-2 md:mb-0">友情链接：</span>
            <div class="flex flex-wrap gap-3 md:space-x-4 text-sm md:text-base text-white text-opacity-50">
              <a href="/legal/statement">法律声明</a>
              <a href="/legal/privacy">隐私政策</a>
              <a href="/community/blackroom">小黑屋</a>
              <a href="/partner/recruit">代理招募</a>
            </div>
          </div>

          <!-- 版权信息 -->
          <div class="text-sm md:text-base">
            {{ enterpriseStore.copyright }}
            <!-- Copyright © 2012-{{ new Date().getFullYear() }} 深圳市某某科技有限公司 粤ICP备12345678号 -->
          </div>

          <!-- 地址信息 -->
          <div v-if="false" class="mt-4 text-sm md:text-base text-white text-opacity-50 space-y-2">
            <p>广州：广州市科学城科学大道科学大学科技园B栋5楼 联系电话：020-1234-5678</p>
            <p>深圳：深圳市南山区某某大厦1234室 联系电话：0755-1234-5678</p>
            <p>上海：上海市某某区某某路1234号 联系电话：021-1234-5678</p>
          </div>
        </div>
        <div v-if="false" class="text-center">
          <img alt="企业AI专家微信公众号二维码" title="扫码关注公众号" class="size-24 md:size-28 mx-auto mb-2" />
          <p class="text-sm md:text-base text-white text-opacity-50">微信扫码</p>
          <p class="text-sm md:text-base text-white text-opacity-50">和创始人交个朋友</p>
        </div>
      </div>
      <div class="w-full flex justify-center items-center gap-1.5 text-xs absolute bottom-5 left-0 right-0">
        <span>本网站由</span>
        <img :src="$getPublicPath(`/images/53ai-hub.png`)" class="flex-none w-[72px] object-cover" />
        <span>提供技术支持</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch, provide } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MainHeader from '@/layout/header.vue'
import { useEnterpriseStore } from '@/stores/modules/enterprise'
import { useNavigationStore } from '@/stores/modules/navigation'
import { NAVIGATION_TYPE, NAVIGATION_TARGET } from '@/constants/navigation'

// const mainRef = inject<Ref<HTMLElement>>('mainRef')

const enterpriseStore = useEnterpriseStore()
const navigationStore = useNavigationStore()
const route = useRoute()
const router = useRouter()

const scrollRef = ref<HTMLElement>()
provide('mainScrollRef', scrollRef)

const fetchNavigationData = async () => {
  await navigationStore.fetchNavigations()
  const customNavigations = navigationStore.navigations.filter((item) => item.type === NAVIGATION_TYPE.CUSTOM)
  const indexRoute = router.getRoutes().find((item) => item.name === 'Index')
  customNavigations.forEach((item) => {
    if (indexRoute) {
      indexRoute.children.push({
        path: item.menu_path,
        name: `Home${item.name}`,
        component: () => import(`@/views/custom/index.vue`)
      })
    }
  })
  router.addRoute(indexRoute)
}
const handleNavigationClick = (data: any) => {
  if (data.type === NAVIGATION_TYPE.EXTERNAL) {
    if (data.target === NAVIGATION_TARGET.BLANK) {
      window.open(data.url, '_blank')
    } else {
      window.location.href = data.url
    }
  } else if (data.target === NAVIGATION_TARGET.BLANK) {
    window.open(data.url, '_blank')
  }
}
const is_redirect = ref(false)
const handleRedirect = async () => {
  const from_home = route.query.from_home as string
  let redirect = route.query.redirect as string
  await fetchNavigationData()
  if (navigationStore.navigations.length) {
    if (+from_home || redirect) {
      is_redirect.value = true
      await nextTick()
      if (+from_home && !redirect) {
        const defaultNavigation = navigationStore.navigations.filter((item) => item.type !== NAVIGATION_TYPE.EXTERNAL)[0]
        if (defaultNavigation && defaultNavigation.menu_path !== route.path) redirect = defaultNavigation.menu_path
        else redirect = '/index'
      }
      if (redirect) await router.replace({ path: redirect as string })
      is_redirect.value = false
    }
  }
}
const setMeta = ({ key = '', value = '' }) => {
  const meta = document.querySelector(`meta[name="${key}"]`)
  if (meta) {
    meta.setAttribute('content', value)
  } else {
    const meta = document.createElement('meta')
    meta.setAttribute('name', key)
    meta.setAttribute('content', value)
    document.head.appendChild(meta)
  }
}

onMounted(async () => {
  // mainRef.value?.scrollTo(0, 0)
  // handleRedirect()
})

watch(
  () => route.query,
  () => {
    handleRedirect()
  },
  {
    immediate: true,
    deep: true
  }
)
watch(
  () => route.path,
  (path) => {
    const currentNavigation = navigationStore.navigations.find((item) => item.menu_path === path) || {}
    const config = currentNavigation.config || {}
    if (config.seo_title) setMeta({ key: 'title', value: config.seo_title })
    if (config.seo_keywords) setMeta({ key: 'keywords', value: config.seo_keywords })
    if (config.seo_description) setMeta({ key: 'description', value: config.seo_description })
  },
  {
    immediate: true
  }
)
</script>

<style scoped>
.router-link-active {
  @apply ring-2 ring-blue-500;
}

::v-deep(.el-menu) {
  background-color: transparent;
  border-bottom: none;
}

::v-deep(.el-menu-item),
::v-deep(.el-menu-item.is-active) {
  background-color: transparent !important;
  border-bottom: none;
}
</style>
