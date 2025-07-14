<template>
  <section class="h-full overflow-hidden flex flex-col w-11/12 lg:w-4/5 pt-6 px-4 mx-auto box-border">
    <div class="relative flex-none flex items-center gap-4 box-border">
      <ElBreadcrumb class="flex-1 w-0" :separator-icon="ArrowRight">
        <ElBreadcrumbItem v-if="navigationStore.homeNavigation.menu_path" :to="navigationStore.homeNavigation.menu_path" replace>
          <span class="text-regular leading-6 font-normal hover-text-theme">
            {{ navigationStore.homeNavigation.name }}
          </span>
        </ElBreadcrumbItem>
        <ElBreadcrumbItem v-if="navigationStore.agentNavigation.menu_path" :to="navigationStore.agentNavigation.menu_path" replace>
          <span class="text-regular leading-6 font-normal hover-text-theme">
            {{ navigationStore.agentNavigation.name }}
          </span>
        </ElBreadcrumbItem>
        <ElBreadcrumbItem>
          <span class="text-primary leading-6 inline-block truncate max-w-[10em] md:max-w-[30rem]" :title="detailData.name">
            {{ detailData.name }}
          </span>
        </ElBreadcrumbItem>
      </ElBreadcrumb>
      <ElButton link @click="agentDetailRef?.showUseCase()">
        <SvgIcon class="mr-1.5" name="layout-split" size="18" />
        {{ $t('chat.usage_guide') }}
      </ElButton>
    </div>
    <div class="flex-1 box-border mt-4 overflow-hidden">
      <AgentDetailView ref="agentDetailRef" hide-menu-header hide-footer show-recommend use-case-fixed show-history />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'

import { onMounted, ref, computed } from 'vue'
import AgentDetailView from '@/views/chat/index.vue'
import { useNavigationStore } from '@/stores/modules/navigation'
import SvgIcon from '@/components/SvgIcon.vue'

const navigationStore = useNavigationStore()

const agentDetailRef = ref<InstanceType<typeof AgentDetailView>>()

const detailData = computed(() => {
  return agentDetailRef.value?.detailData || { name: '' }
})

onMounted(() => {
  navigationStore.fetchNavigations()
})
</script>

<style scoped></style>
