<template>
  <div class="h-screen flex">
    <Sider v-if="showSidebar"></Sider>
    <main ref="mainRef" class="flex-1 overflow-y-auto">
      <RouterView v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, provide } from 'vue'
import { useRoute } from 'vue-router'
import { useEnterpriseStore } from '@/stores/modules/enterprise'

import Sider from './sider.vue'

const mainRef = ref<HTMLElement>()
const route = useRoute()
const enterpriseStore = useEnterpriseStore()

const isSoftware = computed(() => enterpriseStore.template_style_info.style_type === 'software')

provide('mainRef', mainRef)

const showSidebar = computed(() => {
  const routes = ['Chat', 'Agent', 'Toolkit', 'Prompt', 'PromptDetail', 'Profile', 'Order']
  return routes.includes(route.name as string) && isSoftware.value
})

onMounted(() => {})
</script>

<style></style>
