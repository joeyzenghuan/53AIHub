<template>
  <div class="h-screen flex">
    <Sider v-if="userStore.is_login && showSidebar"></Sider>
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
import { useUserStore } from '@/stores/modules/user'

import Sider from './sider.vue'

const mainRef = ref<HTMLElement>()
const route = useRoute()
const userStore = useUserStore()
provide('mainRef', mainRef)

const showSidebar = computed(() => !['Index', 'HomeIndex', 'HomeLayout', 'HomeAgent', 'HomeToolbox', 'Profile'].includes(route.name))

onMounted(() => {
})
</script>

<style></style>
