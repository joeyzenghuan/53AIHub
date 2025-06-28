<script setup lang="ts">
import { ref } from 'vue'
import WujieVue from 'wujie-vue3'
import { useEnterpriseStore, useUserStore } from '@/stores'

const name = ref('km')
const url = ref('http://agent.hub.53ai.com/space')
// const url = ref('http://192.168.1.71:3002/space')

const user_store = useUserStore()
const enterprise_store = useEnterpriseStore()
</script>

<template>
  <WujieVue
    v-if="user_store.info.user_id && enterprise_store.info.eid"
    width="100%"
    height="100%"
    :props="{
      data: {
        userInfo: user_store.info,
        enterpriseInfo: enterprise_store.info,
      },
      methods: {
        logoff: user_store.logoff,
      },
    }"
    :name="name"
    :url="url"
    :sync="true"
  />
</template>

<style scoped>

</style>
