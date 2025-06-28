<script setup lang="ts">
import { ArrowLeft, ArrowRight, Close } from '@element-plus/icons-vue'
import AgentDetailView from '@/views/chat/index.vue'

import { onMounted, ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNavigationStore } from '@/stores/modules/navigation'
import SvgIcon from '@/components/SvgIcon.vue'

const navigationStore = useNavigationStore()

const agentDetailRef = ref<InstanceType<typeof AgentDetailView>>()

const detailData = computed(() => {
  return agentDetailRef.value?.detailData || {}
})

onMounted(() => {
  navigationStore.fetchNavigations()
})
</script>

<template>
  <section class="flex flex-col w-11/12 lg:w-4/5 py-6 px-4 mx-auto box-border" style="min-height: calc(100vh - 166px);">
    <div class="relative w-full flex-none flex items-center gap-4 box-border">
      <ElBreadcrumb class="flex-1 w-0" :separatorIcon="ArrowRight">
        <ElBreadcrumbItem v-if="navigationStore.homeNavigation.menu_path" :to="navigationStore.homeNavigation.menu_path"
          replace>
          <span class="text-regular font-normal hover-text-theme">
            {{ navigationStore.homeNavigation.name }}
          </span>
        </ElBreadcrumbItem>
        <ElBreadcrumbItem v-if="navigationStore.agentNavigation.menu_path"
          :to="navigationStore.agentNavigation.menu_path" replace>
          <span class="text-regular font-normal hover-text-theme">
            {{ navigationStore.agentNavigation.name }}
          </span>
        </ElBreadcrumbItem>
        <ElBreadcrumbItem>
          <span class="text-primary inline-block truncate max-w-[10em] md:max-w-[30rem]" :title="detailData.name">
            {{ detailData.name }}
          </span>
        </ElBreadcrumbItem>
      </ElBreadcrumb>
      <ElButton link @click="agentDetailRef?.showUseCase()">
        <SvgIcon class="mr-1.5" name="layout-split" size="18" />
        {{ $t('chat.usage_guide') }}
      </ElButton>
    </div>
    <div class="flex-1 box-border mt-4">
      <AgentDetailView ref="agentDetailRef" hideMenuHeader hideFooter showRecommend useCaseFixed showHistory />
    </div>
  </section>
</template>

<style scoped></style>
