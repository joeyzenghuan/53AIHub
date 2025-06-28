<script setup lang="ts">
import { defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const AccountView = defineAsyncComponent(() => import('./account.vue'))
const GroupView = defineAsyncComponent(() => import('./group.vue'))
const OrganizationView = defineAsyncComponent(() => import('./organization.vue'))

const route = useRoute()
const tabActiveName = ref('account')

onMounted(async () => {
})
onUnmounted(() => {
})
</script>

<template>
  <Layout class="px-[60px] py-8">
    <Header :title="$t(route.meta.title)" />
    <ElTabs v-model="tabActiveName" class="mt-2 flex-1 h-0">
      <ElTabPane :label="$t('internal_user.account.title')" name="account" lazy>
        <AccountView v-if="tabActiveName === 'account'" />
      </ElTabPane>
      <ElTabPane :label="$t('internal_user.group.title')" name="group" lazy>
        <GroupView v-if="tabActiveName === 'group'" />
      </ElTabPane>
      <ElTabPane :label="$t('internal_user.organization.title')" name="organization" lazy>
        <OrganizationView v-if="tabActiveName === 'organization'" />
      </ElTabPane>
    </ElTabs>
  </Layout>
</template>

<style scoped lang="scss">
::v-deep(.el-tab-pane) {
	height: 100%;
}
</style>
