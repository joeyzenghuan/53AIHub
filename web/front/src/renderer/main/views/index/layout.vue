<template>
  <div class="flex flex-col min-h-screen">
    <MainHeader type="homepage" :needLogin="false" :siderButton="false" :mainClass="['w-11/12 lg:w-4/5']">
      <template #before_suffix>
        <a href="/#/" class="flex items-center gap-2 overflow-hidden">
          <img :alt="enterpriseStore.display_name" :title="enterpriseStore.display_name" class="min-w-11 h-11 rounded"
            :src="enterpriseStore.logo" />
          <span class="text-2xl font-semibold nav-text truncate">
            {{ enterpriseStore.display_name }}
          </span>
        </a>
        <ElMenu class="flex-1 menu" router mode="horizontal" :default-active="route.path">
          <ElMenuItem index="/index">
            {{ $t('module.index') }}
          </ElMenuItem>
          <ElMenuItem index="/index/agent">
            {{ $t('module.agent') }}
          </ElMenuItem>
          <ElMenuItem index="/index/toolbox">
            {{ $t('module.tool') }}
          </ElMenuItem>
        </ElMenu>
      </template>
    </MainHeader>
    <!-- !['Index', 'HomeIndex'].includes(route.name) &&  -->
    <ElCarousel class="w-full"
      v-if="!['Index', 'HomeIndex'].includes(route.name) && enterpriseStore.banner_info.url_list && enterpriseStore.banner_info.url_list.length"
      :arrow="enterpriseStore.banner_info.url_list.length > 1 ? 'always' : 'never'"
      :indicator-position="enterpriseStore.banner_info.url_list.length > 1 ? 'outside' : 'none'" :interval="enterpriseStore.banner_info.interval
        ? parseInt(enterpriseStore.banner_info.interval * 1000)
        : 5000
        ">
      <ElCarouselItem v-for="url in enterpriseStore.banner_info.url_list || []" :key="url" class="w-full">
        <img :src="url" class="h-[256px] md:h-[300px] lg:h-[356px] object-cover mx-auto" />
      </ElCarouselItem>
    </ElCarousel>

    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </RouterView>

    <!-- 底部布局 -->
    <footer class="mt-auto py-8 md:py-10 lg:py-12 page-footer-bg page-footer-text">
      <div class="w-11/12 lg:w-4/5 mx-auto" v-if="false">
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
      <div class="border-t border-dashed border-white border-opacity-10 my-6 md:my-8 lg:my-10" v-if="false"></div>
      <div class="w-11/12 lg:w-4/5 mx-auto flex flex-col md:flex-row items-center">
        <div class="flex-1 w-full md:w-auto mb-6 md:mb-0">
          <div class="flex flex-col md:flex-row md:items-center mb-4" v-if="false">
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
          <div class="mt-4 text-sm md:text-base text-white text-opacity-50 space-y-2" v-if="false">
            <p>广州：广州市科学城科学大道科学大学科技园B栋5楼 联系电话：020-1234-5678</p>
            <p>深圳：深圳市南山区某某大厦1234室 联系电话：0755-1234-5678</p>
            <p>上海：上海市某某区某某路1234号 联系电话：021-1234-5678</p>
          </div>
        </div>
        <div class="text-center" v-if="false">
          <img alt="企业AI专家微信公众号二维码" title="扫码关注公众号" class="size-24 md:size-28 mx-auto mb-2" />
          <p class="text-sm md:text-base text-white text-opacity-50">微信扫码</p>
          <p class="text-sm md:text-base text-white text-opacity-50">和创始人交个朋友</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed, ref, inject } from 'vue'
import { Search } from '@element-plus/icons-vue'
import MainHeader from '@/layout/main-header.vue'
import { useEnterpriseStore } from '@/stores/modules/enterprise'
import { useRoute } from 'vue-router'

const mainRef = inject<Ref<HTMLElement>>('mainRef')

const enterpriseStore = useEnterpriseStore()
const route = useRoute()

onMounted(() => {
  mainRef.value?.scrollTo(0, 0)
})
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