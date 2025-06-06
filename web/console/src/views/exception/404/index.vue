<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}

onMounted(() => {
  ElMessage({
    type: 'warning',
    dangerouslyUseHTMLString: true,
		message: window.$t('no_permission_tip'),
    duration: 0,
    showClose: true,
  })
})
</script>

<template>
  <div class="flex h-full">
    <div class="px-4 m-auto space-y-4 text-center max-[400px]">
      <h1 class="text-4xl text-slate-800 dark:text-neutral-200">
        <!-- Sorry, page not found! -->
        {{ $t('not_found_tip') }}
      </h1>
      <p class="text-base text-slate-500 dark:text-neutral-400">
        <!-- Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling. -->
        <!-- 请检查路径是否正确？ -->
        <!-- 抱歉，我们找不到您要查找的页面。也许您输入的URL有误？一定要检查你的拼写。 -->
      </p>
      <div class="flex-center text-center">
        <div class="w-[300px]">
          <img src="../../../icons/404.svg" alt="404">
        </div>
      </div>
      <el-button size="large" type="primary" @click="goHome">
        {{ $t('go_home') }}
      </el-button>
    </div>
  </div>
</template>
