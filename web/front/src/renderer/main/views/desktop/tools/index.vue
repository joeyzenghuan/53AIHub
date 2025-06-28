<script setup lang="ts">
import Toolbox from './toolbox.vue'
import MainHeader from '@/layout/header.vue'
import MFooter from '@/layout/m-footer.vue'
</script>

<template>
  <div class="h-full bg-white flex flex-col">
    <MainHeader sticky>
      <template #before_suffix>
        <div class="text-base text-primary font-bold line-clamp-1 max-md:flex-1 max-md:text-center">{{ $t('module.toolbox') }}</div>
      </template>

      <template #after_prefix>
        <!-- <span class="flex items-center gap-1 text-sm cursor-pointer md:hidden" @click="$router.back()">
          <svg-icon name="return" size="18" stroke></svg-icon>
        </span> -->
      </template>
    </MainHeader>
    <Toolbox></Toolbox>
    <MFooter />
  </div>
</template>

<style scoped></style>
