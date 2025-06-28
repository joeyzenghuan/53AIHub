<script setup name="Agent" lang="ts">
import { nextTick, onMounted, onUnmounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import CreateDrawer from '@/views/agent/create/drawer.vue'

import { deepCopy } from '@/utils'
import eventBus from '@/utils/event-bus'

import {
  AGENT_APP_OPTIONS,
  AGENT_TYPE,
  agentApi,
} from '@/api/modules/agent'
import { PROVIDER_VALUE, providerApi } from '@/api/modules/provider'
import { subscriptionApi } from '@/api/modules/subscription'
import { GROUP_TYPE_AGENT } from '@/api/modules/group'

interface SubscriptionItem {
  group_id: number
  group_name: string
}

interface ProviderItem {
  provider_type: string
  [key: string]: any
}

const router = useRouter()
const groupTabsRef = ref()
const createDrawerRef = ref()

const filter_form = reactive({
  group_id: '-1',
  keyword: '',
  page: 1,
  page_size: 10,
})
const table_data = ref<Agent.State[]>([])
const table_total = ref(0)
const table_loading = ref(false)
const add_visible = ref(false)
const agent_app_options = ref(deepCopy(AGENT_APP_OPTIONS))
const subscriptionList = ref<SubscriptionItem[]>([])

const loadSubscriptionList = async () => {
  if (!subscriptionList.value.length)
    subscriptionList.value = await subscriptionApi.list({ params: { offset: 0, limit: 1000 } })
}

const loadListData = async () => {
  table_loading.value = true
  await loadSubscriptionList()

  try {
    const { count = 0, agents = [] } = await agentApi.list({
      params: {
        group_id: filter_form.group_id,
        keyword: filter_form.keyword,
        offset: (filter_form.page - 1) * filter_form.page_size,
        limit: filter_form.page_size,
      },
    })

    table_total.value = count
    table_data.value = []
    await nextTick()

    table_data.value = agents.map((item: Partial<Agent.State> = {}) => {
      const agent = item as Agent.State
      agent.user_group_ids = agent.user_group_ids || []
      agent.user_group_names = agent.user_group_ids.map((value) => {
        const subscription = subscriptionList.value.find(row => row.group_id === value)
        return subscription?.group_name || ''
      }).filter(group_name => !!group_name)

      return agent
    })
  }
  finally {
    table_loading.value = false
  }
}

const refresh = async () => {
  filter_form.page = 1
  await loadListData()
}

const onTableSizeChange = (size: number) => {
  filter_form.page_size = size
  refresh()
}

const onTableCurrentChange = (current: number) => {
  filter_form.page = current
  loadListData()
}

const onAgentDelete = async ({ data: { agent_id } }: { data: { agent_id: number } }) => {
  await ElMessageBox.confirm(window.$t('agent_delete_confirm'), window.$t('action_delete'))
  await agentApi.delete({ data: { agent_id } })
  ElMessage.success(window.$t('action_delete_success'))
  loadListData()
}

const coze_cn_is_auth = ref(false)
const app_builder_is_auth = ref(false)

const loadProviderList = async () => {
  const list = await providerApi.list() as ProviderItem[]
  coze_cn_is_auth.value = !!list.find(item => item.provider_type === PROVIDER_VALUE.COZE_CN)
  app_builder_is_auth.value = !!list.find(item => item.provider_type === PROVIDER_VALUE.APP_BUILDER)
}

const checkAuth = (value: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    if ((!coze_cn_is_auth.value && AGENT_TYPE.COZE_AGENT_CN === value)
        || (!app_builder_is_auth.value && AGENT_TYPE.APP_BUILDER === value)) {
      reject(new Error('Authentication required'))
      return ElMessageBox.confirm(
        window.$t(AGENT_TYPE.APP_BUILDER === value ? 'app_builder_not_auth' : 'coze_cn_not_auth', window.$t('tip')),
        window.$t('tip'),
        {
          confirmButtonText: window.$t('action_go'),
          cancelButtonText: window.$t('action_cancel'),
          type: 'warning',
        },
      ).then(() => {
        router.push({
          name: 'Platform',
        })
      })
    }

    resolve()
  })
}

const handleAgentPrepare = async (data: { value: string; channel_type: number }) => {
  await checkAuth(data.value)
  createDrawerRef.value.open({
    agent_type: data.value,
    group_id: +filter_form.group_id > 0 ? filter_form.group_id : undefined,
    data: { channel_config: { channel_type: data.channel_type } },
  })
  add_visible.value = false
}

const onAgentAdd = async (value: string, data: Partial<Agent.State> = {}) => {
  await checkAuth(value)
  loadListData()
  await router.push({
    name: 'AgentCreate',
    query: data.agent_id
      ? {
          type: data.agent_type,
          agent_id: data.agent_id,
        }
      : {
          type: value,
          group_id: +filter_form.group_id > 0 ? filter_form.group_id : undefined,
        },
  })
}

const onAgentStatusChange = async ({ data: { agent_id, enable } }: { data: { agent_id: number; enable: boolean } }) => {
  await agentApi.updateStatus({ data: { agent_id, enable } })
  ElMessage.success(window.$t(enable ? 'action_enable_success' : 'action_disable_success'))
}

// 添加onAddOpened函数修复错误
const onAddOpened = () => {
  // 抽屉打开时的处理逻辑
}

onMounted(() => {
  refresh()
  loadProviderList()
  eventBus.on('user-login-success', refresh)
  eventBus.on('agent-change', loadListData)
})

onUnmounted(() => {
  eventBus.off('user-login-success', refresh)
  eventBus.off('agent-change', loadListData)
})
</script>

<template>
  <Layout class="px-[60px] py-8">
    <Header :title="$t('module.agent')">
      <template #right>
        <el-button type="primary" size="large" @click="add_visible = true">
          + {{ $t('action_add') }}
        </el-button>
      </template>
    </Header>

    <div class="flex items-center justify-between mt-5">
      <div class="flex-1 w-0">
        <GroupTabs
          ref="groupTabsRef" v-model="filter_form.group_id" :group-type="GROUP_TYPE_AGENT"
          @change="refresh"
        />
      </div>
      <div class="flex-none flex-center gap-3 ml-8">
        <Search v-model="filter_form.keyword" placeholder="module.agent_search_placeholder" @change="refresh" />
        <div
          class="flex items-center gap-1 whitespace-nowrap cursor-pointer text-[#576D9C]"
          @click="groupTabsRef.open"
        >
          <svg-icon name="cate-manage" width="14px" height="14px" />
          <div class="text-sm ">
            {{ $t('group') }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto bg-white rounded-lg px-5 py-5 mt-4">
      <TablePlus
        header-row-class-name="rounded overflow-hidden"
        header-cell-class-name="!bg-[#F6F7F8] !h-[60px] !border-none" :data="table_data" :total="table_total"
        :loading="table_loading" :page="filter_form.page" :limit="filter_form.page_size"
        @page-size-change="onTableSizeChange" @page-current-change="onTableCurrentChange"
      >
        <ElTableColumn prop="date" :label="$t('module.agent')" min-width="180" show-overflow-tooltip>
          <template #default="{ row }">
            <div class="flex items-center gap-2 w-full">
              <img class="flex-none w-8 h-8 rounded-full overflow-hidden" :src="row.logo" alt="">
              <div class="flex-1 w-0 text-sm flex flex-col">
                <div class="text-[#2563EB] truncate">
                  {{ row.name || '--' }}
                </div>
                <div v-show="row.description" class="text-xs text-[#808080] truncate">
                  {{ row.description || '' }}
                </div>
              </div>
            </div>
          </template>
        </ElTableColumn>
        <ElTableColumn :label="$t('usage_range')" min-width="140" show-overflow-tooltip>
          <template #default="{ row }">
            <span :class="!row.user_group_names.length ? 'text-[#999]' : ''">
              {{ row.user_group_names.join('、') || '--' }}
            </span>
          </template>
        </ElTableColumn>
        <ElTableColumn :label="$t('type')" width="140" show-overflow-tooltip>
          <template #default="{ row = {} }">
            {{ $t(row.agent_type_label) || '--' }}
          </template>
        </ElTableColumn>
        <ElTableColumn :label="$t('sort')" width="80" show-overflow-tooltip>
          <template #default="{ row = {} }">
            {{ row.sort }}
          </template>
        </ElTableColumn>
        <ElTableColumn :label="$t('action_enable')" width="80">
          <template #default="{ row }">
            <ElSwitch v-model="row.enable" @change="onAgentStatusChange({ data: row })" />
          </template>
        </ElTableColumn>
        <ElTableColumn :label="$t('operation')" width="120" align="right" fixed="right">
          <template #default="{ row }">
            <el-button type="primary" link @click="onAgentAdd(row.agent_type, row)">
              {{ $t('action_edit') }}
            </el-button>
            <el-button type="primary" link @click="onAgentDelete({ data: row })">
              {{ $t('action_delete') }}
            </el-button>
          </template>
        </ElTableColumn>
      </TablePlus>
    </div>
  </Layout>

  <el-drawer v-model="add_visible" :title="$t('action_add')" size="650px" @opened="onAddOpened">
    <ul class="w-full min-h-[300px] overflow-y-auto">
      <li v-for="(item, itemIndex) in agent_app_options" :key="itemIndex">
        <h4 class="text-sm text-[#939499]">
          {{ $t(item.title) }}
        </h4>
        <ul class="flex flex-col gap-5 pt-4 pb-6">
          <li
            v-for="row in item.children" :key="row.value"
            class="h-[72px] px-6 rounded flex items-center gap-3 bg-[#F8F9FA] cursor-pointer hover:shadow"
          >
            <img class="flex-none size-10 rounded-lg" :src="row.icon" alt="">
            <div class="flex-1 text-base text-[#1D1E1F] truncate">
              {{ $t(row.label) }}
            </div>
            <ElButton
              type="primary" plain class="border-none"
              @click="handleAgentPrepare(row)"
            >
              {{ $t('action_add') }}
            </ElButton>
          </li>
        </ul>
      </li>
    </ul>
  </el-drawer>

  <CreateDrawer ref="createDrawerRef" @success="row => onAgentAdd(row.agent_type, row)" />
</template>

<style lang="scss" scoped>
::v-deep(.el-table__cell) {
  padding: 14px 0;
}
</style>
