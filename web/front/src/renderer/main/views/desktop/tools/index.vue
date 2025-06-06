<script setup lang="ts">
import Toolbox from './toolbox.vue'
import MainHeader from '@/layout/main-header.vue'
</script>

<template>
  <div class="h-full bg-white flex flex-col">
    <MainHeader>
      <template #before_suffix>
        <div class="text-base text-primary font-bold line-clamp-1">{{ $t('module.toolbox') }}</div>
      </template>

      <template #after_prefix>
        <div class="flex items-center gap-1 text-sm text-secondary">
          <svg-icon name="index"></svg-icon>
          <router-link :to="{ name: 'Home' }">{{ $t('common.back_home') }}</router-link>
        </div>
      </template>
    </MainHeader>
    <Toolbox></Toolbox>
  </div>
</template>

<style scoped></style>
