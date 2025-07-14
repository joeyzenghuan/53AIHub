<template>
  <div>
    <div class="w-full flex justify-center items-center gap-1.5 text-xs text-placeholder my-4">
      <span>本网站由</span>
      <img :src="$getPublicPath(`/images/53ai-hub-v2.png`)" class="flex-none w-[72px] object-cover" />
      <span>提供技术支持</span>
    </div>
    <div v-if="fixed" class="h-14 md:hidden"></div>
    <div class="bg-white flex items-center border-t md:hidden" :class="{ 'fixed bottom-0 left-0 right-0 z-[9]': fixed }">
      <template v-for="item in footerList" :key="item.text">
        <div class="flex-1 flex items-center justify-center">
          <router-link
            :to="{ name: item.name }"
            class="h-14 px-2 flex flex-col items-center justify-center gap-1 cursor-pointer"
            :class="[$route.name === item.name ? 'text-theme' : 'text-primary']"
          >
            <svg-icon size="18" :name="item.icon" :stroke="item.stroke"></svg-icon>
            <p class="text-sm leading-none max-w-[100px] truncate">{{ item.title || $t(item.text) }}</p>
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useNavigationStore } from '@/stores/modules/navigation'

const navigationStore = useNavigationStore()

// 移动端底部导航栏
const footerList = ref([
  {
    name: 'Agent',
    text: 'module.agent',
    title: '',
    icon: 'app',
    stroke: true
  },
  {
    name: 'Prompt',
    text: 'module.prompt',
    title: '',
    icon: 'prompt',
    stroke: true
  },
  {
    name: 'Toolkit',
    text: 'module.toolbox',
    title: '',
    icon: 'toolkit',
    stroke: true
  }
])

onMounted(async () => {
  await navigationStore.fetchNavigations()
  footerList.value[0].title = navigationStore.agentNavigation.name || ''
  footerList.value[1].title = navigationStore.promptNavigation.name || ''
  footerList.value[2].title = navigationStore.toolkitNavigation.name || ''
})

withDefaults(
  defineProps<{
    fixed?: boolean
  }>(),
  {
    fixed: true
  }
)
</script>

<style scoped></style>
