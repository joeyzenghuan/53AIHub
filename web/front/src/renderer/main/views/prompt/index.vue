<template>
  <div class="h-full bg-white flex flex-col">
    <MainHeader sticky>
      <template #before_suffix>
        <div class="text-base text-primary font-bold line-clamp-1 max-md:flex-1 max-md:text-center">
          {{ navigationStore.promptNavigation.name || $t('module.prompt') }}
        </div>
      </template>

      <template #after_prefix>
        <!-- <span class="flex items-center gap-1 text-sm cursor-pointer md:hidden" @click="$router.back()">
          <svg-icon name="return" size="18" stroke></svg-icon>
        </span> -->
      </template>
    </MainHeader>
    <PromptView class="flex-1" />
    <MFooter />
  </div>
</template>

<script setup lang="ts">
import PromptView from './view.vue'
import MainHeader from '@/layout/header.vue'
import MFooter from '@/layout/m-footer.vue'
import { useNavigationStore } from '@/stores/modules/navigation'

const navigationStore = useNavigationStore()
</script>

<style scoped></style>
