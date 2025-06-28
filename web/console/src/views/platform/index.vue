<script setup lang="ts">
import { Delete, Remove, Setting } from '@element-plus/icons-vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import AuthorizeDialog from './components/authorize-dialog.vue'
import ToolSettingDialog from './components/tool-setting-dialog.vue'
import ModelSettingDialog from './components/model-setting-dialog.vue'
import AgentListDrawer from './components/agent-list-drawer.vue'

import {
  PROVIDER_VALUE,
} from '@/constants/platform/provider'
import type { ProviderConfig } from '@/constants/platform/config'
import { getProviderIdsByAuth, getProvidersByAuth } from '@/constants/platform/config'
import eventBus from '@/utils/event-bus'
import { agentApi, channelApi, providerApi } from '@/api'
import { useEnv } from '@/hooks/useEnv'
import TipConfirm from '@/components/TipConfirm/setup'

interface ProviderOption extends ProviderConfig {
  connected: boolean
  authed_time: string
  client_id: string
  client_secret: string
  agent_total: number
  channel_loading: boolean
}

// 创建通用的provider初始化函数
const createProviderOption = (item: ProviderConfig): ProviderOption => ({
  ...item,
  connected: false,
  authed_time: '',
  client_id: '',
  client_secret: '',
  agent_total: 0,
  channel_loading: !item.auth,
  value: item.id,
})

const { isLocalEnv, isOpLocalEnv } = useEnv()

const auth_providers = ref<ProviderOption[]>(getProvidersByAuth(true).map(createProviderOption))
const agent_providers = ref<ProviderOption[]>(getProvidersByAuth(false).map(createProviderOption))

const agent_provider_ids = getProviderIdsByAuth(false)

const authorize_ref = ref()
const tool_setting_ref = ref()
const model_setting_ref = ref()
const agent_list_drawer_ref = ref()
const provider_loading = ref(false)
const tool_options = ref([
  {
    value: 'search_online',
    label: 'module.platform_search_online',
    desc: 'module.platform_search_online_desc',
    icon: 'search-online',
    enable: true,
    api_key: 'sk-5f90820c429943bb99aaa18804a0e385',
  },
])
const channel_list = ref([])
const channel_loading = ref(false)

const provider_group_list = computed(() => {
  const list = [
    ...auth_providers.value,
    ...agent_providers.value,
  ]

  return list.reduce((acc, item) => {
    let group = acc.find(row => row.label === item.category)
    if (!group) {
      group = {
        label: item.category,
        children: [],
      }
      acc.push(group)
    }

    group.children.push(item)
    return acc
  }, [])
})

const loadProviderList = async () => {
  provider_loading.value = true
  try {
    const list = await providerApi.list()
    auth_providers.value = auth_providers.value.map((item) => {
      const providerData = list.find(row => item.value === row.provider_type)
      if (providerData) {
        return {
          ...item,
          ...providerData,
          connected: true,
          client_id: providerData.configs?.client_id || '',
          client_secret: providerData.configs?.client_secret || '',
        }
      }
      return item
    })
  }
  finally {
    provider_loading.value = false
  }
}

const loadAgentListCount = async () => {
  for (const provider of agent_providers.value) {
    const { count = 0 } = await agentApi.list({
      params: { channel_types: provider.value, limit: 1 },
    })
    provider.agent_total = count
    provider.channel_loading = false
  }
}

const loadModelList = async () => {
  channel_loading.value = true
  try {
    const list = await channelApi.list()
    channel_list.value = list
      .filter(item => ![...agent_provider_ids, 1002].includes(+item.channel_type))
      .map(item => ({ ...item, deleting: false }))
  }
  finally {
    channel_loading.value = false
  }
}

const refresh = () => {
  loadProviderList()
  loadModelList()
  loadAgentListCount()
}
const handleProviderAuthorize = ({ data = {} } = {}) => {
  if ([PROVIDER_VALUE.COZE_CN].includes(data.value) && isLocalEnv.value && isOpLocalEnv.value) {
    return TipConfirm({
      title: window.$t('local_config_limited_tip'),
      content: window.$t('local_config_limited_desc', { url: window.location.href }),
      confirmButtonText: window.$t('know_it'),
      showCancelButton: false,
    }).open()
  }
  if (data.auth)
    authorize_ref.value.open({ data })
  else
    agent_list_drawer_ref.value.open({ data, type: data.value })
}
const handleProviderAdd = ({ data = {} } = {}) => {
  agent_list_drawer_ref.value.create({ data, type: data.value })
}
const handleProviderDelete = async ({ data = {} } = {}) => {
  if (!data.provider_id)
    return

  await ElMessageBox.confirm(window.$t('module.platform_delete_confirm'))
  await providerApi.delete({ data: { provider_id: data.provider_id } })
  ElMessage.success(window.$t('action_delete_success'))
  loadProviderList()
}
const handleToolEnableChange = (opt = {}) => {
  ElMessage.success(window.$t(opt.enable ? 'enabled' : 'disabled'))
}

const handleModelCreate = ({ data = {} } = {}) => {
  model_setting_ref.value.open({ data })
}
const handleModelDelete = async ({ data = {}, index = 0 } = {}) => {
  await ElMessageBox.confirm(window.$t('module.platform_model_delete_confirm'))
  data.deleting = true

  try {
    await channelApi.delete({ data: { channel_id: data.channel_id } })
    await loadModelList()
    ElMessage.success(window.$t('action_delete_success'))
  }
  finally {
    data.deleting = false
  }
}

let model_edit_index = 0
let model_edit_parent_index = 0
const onModelEdit = ({ data = {}, index = 0, parent_data = {}, parent_index = 0 } = {}) => {
  model_edit_index = index
  model_edit_parent_index = parent_index
  model_setting_ref.value.open({ data: { ...parent_data, ...data, id: data.value }, action: 'model_edit' })
}
const onModelDelete = async ({ data = {}, index = 0, parent_data = {}, parent_index = 0 } = {}) => {
  const isRealDelete = parent_data.model_options?.length === 1
  const confirmMsg = isRealDelete
    ? 'module.platform_model_delete_confirm_v2'
    : 'module.platform_model_delete_confirm'

  await ElMessageBox.confirm(window.$t(confirmMsg))

  if (isRealDelete) {
    channel_loading.value = true
    try {
      await channelApi.delete({ data: { channel_id: parent_data.channel_id } })
      await loadModelList()
    }
    finally {
      channel_loading.value = false
    }
  }
  else {
    parent_data.model_options?.splice(index, 1)
    parent_data.models = parent_data.model_options?.map(item => item.value)
    await channelApi.save({
      data: {
        channel_id: parent_data.channel_id,
        key: parent_data.api_key,
        base_url: parent_data.base_url,
        config: parent_data.config || {},
        models: parent_data.model_options?.map(item => item.value).join(','),
        name: parent_data.type,
      },
    })
  }
  ElMessage.success(window.$t('action_delete_success'))
}
const onModelSettingSuccess = ({ action = '', data = {} } = {}) => {
  if (action === 'model_edit') {
    channel_list.value[model_edit_parent_index].model_options[model_edit_index].label = data.name
    return
  }
  loadModelList()
}
const onAgentListChange = ({ data = {}, count = 0 } = {}) => {
  const provider = agent_providers.value.find(item => item.value === data.value)
  if (provider)
    provider.agent_total = count
}

onMounted(() => {
  refresh()
  eventBus.on('user-login-success', refresh)
})
onUnmounted(() => {
  eventBus.off('user-login-success', refresh)
})
</script>

<template>
  <Layout class="px-[60px] py-8">
    <Header :title="$t('module.platform')" />
    <div class="flex-1 flex flex-col bg-white p-6 mt-3 box-border  max-h-[calc(100vh-100px)] overflow-auto">
      <template v-for="group in provider_group_list" :key="group.label">
        <h2 class="font-semibold text-[#1D1E1F] mb-6">
          {{ $t(group.label) }}
        </h2>
        <ul v-loading="provider_loading" class="flex flex-wrap gap-4 mb-8">
          <li
            v-for="opt in group.children" :key="opt.value"
            v-loading="opt.channel_loading"
            class="flex-none min-w-[246px] w-[24%] h-[178px] flex flex-col border rounded box-border overflow-hidden"
          >
            <div class="flex items-center gap-4 p-5 box-border">
              <img
                class="flex-none size-10 overflow-hidden"
                :src="$getRealPath({ url: `/images/platform/${opt.icon}.png` })"
              >
              <div class="text-[#1B2B51] font-semibold">
                {{ $t(opt.label) }}
              </div>
            </div>
            <div class="text-xs text-[#4F5052] px-5 box-border">
              <template v-if="!opt.auth">
                {{ $t('connecting_agent_total', { total: opt.agent_total }) }}
              </template>
              <template v-else-if="opt.connected && opt.authed_time">
                {{ $t('connected') }} · {{ $t('authorized_at') }} {{ opt.authed_time.slice(0, 16) }}
              </template>
              <template v-else-if="opt.connected">
                {{ $t('connecting') }}
              </template>
              <template v-else>
                {{ $t('not_connected') }}
              </template>
            </div>
            <div class="flex-1 w-full" />
            <div class="w-full h-[44px] flex border-t box-border">
              <template v-if="!opt.auth">
                <ElButton
                  class="flex-1 h-[46px] text-[#3664EF] !border-none !outline-none rounded-none" type="text"
                  size="default" @click.stop="handleProviderAuthorize({ data: opt })"
                >
                  {{ $t('action_manage') }}
                </ElButton>
                <ElDivider class="!h-full" direction="vertical" />
                <ElButton
                  class="flex-1 h-[46px] text-[#919499] !border-none !outline-none rounded-none" type="text"
                  size="default" @click.stop="handleProviderAdd({ data: opt })"
                >
                  {{ $t('action_add') }}
                </ElButton>
              </template>
              <template v-else-if="opt.connected">
                <ElButton
                  class="flex-1 h-[46px] text-[#3664EF] !border-none !outline-none rounded-none" type="text"
                  size="default" @click.stop="handleProviderAuthorize({ data: opt })"
                >
                  {{ $t('action_edit') }}
                </ElButton>
                <ElDivider class="!h-full" direction="vertical" />
                <ElButton
                  class="flex-1 h-[46px] text-[#919499] !border-none !outline-none rounded-none" type="text"
                  size="default" @click.stop="handleProviderDelete({ data: opt })"
                >
                  {{ $t('action_delete') }}
                </ElButton>
              </template>
              <template v-else>
                <ElButton
                  class="flex-1 h-[46px] bg-[#F3F6FE] text-[#3664EF] !border-none !outline-none rounded-none"
                  type="default" size="default" @click.stop="handleProviderAuthorize({ data: opt })"
                >
                  {{ $t('action_authorize') }}
                </ElButton>
              </template>
            </div>
          </li>
        </ul>
      </template>

      <h2 class="w-full flex items-center font-semibold text-[#1D1E1F] mb-6">
        <div class="flex-1">
          {{ $t('module.platform_model') }}
        </div>
      </h2>
      <ul v-loading="channel_loading" class="w-full flex flex-col gap-4 mb-8">
        <li
          v-for="(opt, opt_index) in channel_list" :key="opt.value"
          class="w-full p-5 border rounded box-border overflow-hidden bg-[#F8F9FA]"
        >
          <div class="flex items-center gap-4">
            <img
              class="flex-none w-[40px] h-[40px] object-contain rounded-full overflow-hidden"
              :src="$getRealPath({ url: `/images/platform/${opt.icon}.png` })"
            >
            <div class="flex-1 text-[#1B2B51] font-semibold">
              {{ $t(opt.label) }}
            </div>
            <ElButton class="flex-none !px-5" type="default" size="large" @click.stop="handleModelCreate({ data: opt })">
              {{ $t('action_setting') }}
            </ElButton>
            <ElButton
              class="flex-none !ml-0 !px-3" type="default" size="large" :loading="opt.deleting"
              @click.stop="handleModelDelete({ data: opt, index: opt_index })"
            >
              <ElIcon size="14">
                <Delete />
              </ElIcon>
            </ElButton>
          </div>
          <div class="w-full flex flex-col bg-white rounded overflow-hidden gap-4 mt-6 px-5">
            <div v-if="!opt.model_options || !opt.model_options.length" class="text-[#9A9A9A] text-sm py-5">
              {{
                $t('module.platform_model_models_empty') }}
            </div>
            <ElCollapse v-else :model-value="['models']" class="w-full !border-none">
              <ElCollapseItem name="models">
                <template #title>
                  <span class="text-[#4F5052] text-sm">
                    {{ $t('module.platform_model_models_total', {
                      total:
                        opt.model_options.length,
                    }) }}
                  </span>
                </template>
                <ul class="w-full flex flex-col gap-y-5 box-border overflow-auto">
                  <li
                    v-for="(model, model_index) in opt.model_options" :key="model.value"
                    class="w-full box-border flex items-center gap-2"
                  >
                    <img
                      v-if="model.icon" class="flex-none w-[20px] h-[20px] object-contain"
                      :src="$getRealPath({ url: `/images/platform/${model.icon}.png` })"
                    >
                    <label class="flex-none text-sm text[#1D1E1F]">{{ model.label }}</label>
                    <ElIcon
                      class="flex-none cursor-pointer hover:opacity-70" size="14"
                      @click="onModelEdit({ data: model, index: model_index, parent_data: opt, parent_index: opt_index })"
                    >
                      <Setting />
                    </ElIcon>
                    <div class="flex-1" />
                    <ElIcon
                      class="flex-none cursor-pointer hover:opacity-70" size="16" color="#F04F4D"
                      @click="onModelDelete({ data: model, index: model_index, parent_data: opt, parent_index: opt_index })"
                    >
                      <Remove />
                    </ElIcon>
                  </li>
                </ul>
              </ElCollapseItem>
            </ElCollapse>
          </div>
        </li>
        <ElButton class="flex-none !border-none w-[106px]" type="primary" plain size="large" @click="handleModelCreate">
          + {{ $t('action_add') }}
        </ElButton>
      </ul>
    </div>
  </Layout>

  <AuthorizeDialog ref="authorize_ref" @success="loadProviderList" />
  <ToolSettingDialog ref="tool_setting_ref" />
  <ModelSettingDialog ref="model_setting_ref" @success="onModelSettingSuccess" />
  <AgentListDrawer ref="agent_list_drawer_ref" @change="onAgentListChange" />
</template>

<style scoped lang="scss">
::v-deep(.el-collapse-item__arrow) {
  margin-left: 6px;
}
</style>
