<script setup lang="ts">
import { onMounted } from 'vue'
import Sider from './Sider.vue'
import { useEnterpriseStore } from '@/stores'

const enterpriseStore = useEnterpriseStore()

onMounted(async () => {

})
</script>

<template>
  <el-container class="h-full z-40 bg-[#F6F7F8] overflow-hidden">
    <Sider :sider-hidden="$route.meta.siderHidden" />
    <el-main v-if="enterpriseStore.info.id" class="h-full relative" style="--el-main-padding: 0;">
      <RouterView v-slot="{ Component, route }">
        <KeepAlive :include="route.path.includes('/prompt') ? ['Prompt'] : route.path.includes('/agent') ? ['Agent'] : []">
          <component :is="Component" :key="route.path" />
        </KeepAlive>
      </RouterView>
    </el-main>
  </el-container>
</template>

<style>

</style>
