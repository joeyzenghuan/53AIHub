<template>
  <Layout class="px-[60px] py-8">
    <Header :title="$t('module.platform')" />
    <div class="flex-1 flex flex-col bg-white p-6 mt-3 box-border max-h-[calc(100vh-100px)] overflow-auto">
      <!-- 平台列表 -->
      <!-- #ifndef KM -->
      <template v-for="group in provider_group_list" :key="group.label">
        <h2 class="font-semibold text-[#1D1E1F] mb-6">
          {{ $t(group.label) }}
        </h2>
        <ul v-loading="provider_loading" class="flex flex-wrap gap-4 mb-8">
          <li
            v-for="opt in group.children"
            :key="opt.id"
            v-loading="opt.channel_loading"
            class="flex-none min-w-[246px] w-[24%] h-[178px] flex flex-col border rounded box-border overflow-hidden"
          >
            <div class="flex items-center gap-4 p-5 box-border">
              <img
                class="flex-none size-10 overflow-hidden"
                :src="$getRealPath({ url: `/images/platform/${opt.icon}.png` })"
              />
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
                  class="flex-1 h-[46px] text-[#3664EF] !border-none !outline-none rounded-none"
                  type="text"
                  size="default"
                  @click.stop="handleProviderAuthorize({ data: opt })"
                >
                  {{ $t('action_manage') }}
                </ElButton>
                <ElDivider class="!h-full" direction="vertical" />
                <ElButton
                  v-version="{ module: VERSION_MODULE.AGENT, count: all_total, content: $t('version.agent_limit') }"
                  class="flex-1 h-[46px] text-[#919499] !border-none !outline-none rounded-none"
                  type="text"
                  size="default"
                  @click.stop="handleAgentAdd({ data: opt })"
                >
                  {{ $t('action_add') }}
                </ElButton>
              </template>
              <template v-else-if="opt.connected">
                <ElButton
                  class="flex-1 h-[46px] text-[#3664EF] !border-none !outline-none rounded-none"
                  type="text"
                  size="default"
                  @click.stop="handleProviderAuthorize({ data: opt })"
                >
                  {{ $t('action_edit') }}
                </ElButton>
                <ElDivider class="!h-full" direction="vertical" />
                <ElButton
                  class="flex-1 h-[46px] text-[#919499] !border-none !outline-none rounded-none"
                  type="text"
                  size="default"
                  @click.stop="handleProviderDelete({ data: opt })"
                >
                  {{ $t('action_delete') }}
                </ElButton>
              </template>
              <template v-else>
                <ElButton
                  class="flex-1 h-[46px] bg-[#F3F6FE] text-[#3664EF] !border-none !outline-none rounded-none"
                  type="default"
                  size="default"
                  @click.stop="handleProviderAuthorize({ data: opt })"
                >
                  {{ $t('action_authorize') }}
                </ElButton>
              </template>
            </div>
          </li>
        </ul>
      </template>
      <!-- #endif -->

      <!-- 大模型列表 -->
      <h2 class="w-full flex items-center font-semibold text-[#1D1E1F] mb-6">
        <div class="flex-1">
          {{ $t('module.platform_model') }}
        </div>
      </h2>
      <ul v-loading="channel_loading" class="w-full flex flex-col gap-4 mb-8">
        <!-- v-for="(opt, opt_index) in group.children" :key="opt.channel_id" -->
        <template v-for="(group, group_indx) in channel_list" :key="group.channel_type">
          <li class="w-full p-5 border rounded box-border overflow-hidden bg-[#F8F9FA]">
            <div class="flex items-center gap-4">
              <img
                class="flex-none w-[40px] h-[40px] object-contain rounded-full overflow-hidden"
                :src="$getRealPath({ url: `/images/platform/${group.icon}.png` })"
              />
              <div class="flex-1 text-[#1B2B51] font-semibold">
                {{ $t(group.label) }}
              </div>
              <template v-if="!group.multiple">
                <ElButton class="flex-none !px-5" type="default" size="large" @click.stop="handleModelEdit(group.data)">
                  {{ $t('action_setting') }}
                </ElButton>
                <ElButton
                  v-debounce
                  class="flex-none !ml-0 !px-3"
                  type="default"
                  size="large"
                  @click.stop="handleModelDelete(group.data)"
                >
                  <ElIcon size="14">
                    <Delete />
                  </ElIcon>
                </ElButton>
              </template>
            </div>
            <div class="w-full flex flex-col bg-white rounded overflow-hidden gap-4 mt-6 px-5">
              <template v-if="!group.multiple">
                <ElCollapse :model-value="['models']" class="w-full !border-none">
                  <ElCollapseItem name="models">
                    <template #title>
                      <span class="text-[#4F5052] text-sm">
                        {{
                          $t('module.platform_model_models_total', {
                            total: group.data.model_options.length,
                          })
                        }}
                      </span>
                    </template>
                    <ul class="w-full flex flex-col gap-y-5 box-border overflow-auto">
                      <li
                        v-for="model in group.data.model_options"
                        :key="model.value"
                        class="w-full box-border flex items-center gap-2"
                      >
                        <img
                          v-if="model.icon"
                          class="flex-none w-[20px] h-[20px] object-contain"
                          :src="$getRealPath({ url: `/images/platform/${model.icon}.png` })"
                        />
                        <label class="flex-none text-sm text[#1D1E1F]">{{ model.label }}</label>
                        <ElIcon
                          class="flex-none cursor-pointer hover:opacity-70"
                          size="14"
                          @click="onModelEdit({ data: model, parent_data: group.data })"
                        >
                          <Setting />
                        </ElIcon>
                        <div class="flex-1" />
                        <ElIcon
                          class="flex-none cursor-pointer hover:opacity-70"
                          size="16"
                          color="#F04F4D"
                          @click="handleModelDelete(group.data, model)"
                        >
                          <Remove />
                        </ElIcon>
                      </li>
                    </ul>
                  </ElCollapseItem>
                </ElCollapse>
              </template>
              <template v-else>
                <!-- 同一个模型下有多个模型， azure 可以添加多个 -->
                <ElCollapse :model-value="['models']" class="w-full !border-none">
                  <ElCollapseItem name="models">
                    <template #title>
                      <span class="text-[#4F5052] text-sm">
                        {{
                          $t('module.platform_model_models_total', {
                            total: group.children.length,
                          })
                        }}
                      </span>
                    </template>
                    <ul class="w-full flex flex-col gap-y-5 box-border overflow-auto">
                      <div v-for="(opt, opt_index) in group.children" :key="opt.channel_id">
                        <li
                          v-for="(model, model_index) in opt.model_options"
                          :key="model.value"
                          class="w-full box-border flex items-center gap-2"
                        >
                          <img
                            v-if="model.icon"
                            class="flex-none w-[20px] h-[20px] object-contain"
                            :src="$getRealPath({ url: `/images/platform/${model.icon}.png` })"
                          />
                          <label class="flex-none text-sm text[#1D1E1F]">{{ model.label }}</label>
                          <ElIcon
                            class="flex-none cursor-pointer hover:opacity-70"
                            size="14"
                            @click="handleModelEdit(opt)"
                          >
                            <Setting />
                          </ElIcon>
                          <div class="flex-1" />
                          <ElIcon
                            class="flex-none cursor-pointer hover:opacity-70"
                            size="16"
                            color="#F04F4D"
                            @click="handleModelDelete(opt)"
                          >
                            <Remove />
                          </ElIcon>
                        </li>
                      </div>
                    </ul>
                  </ElCollapseItem>
                </ElCollapse>
              </template>
            </div>
          </li>
        </template>
        <ElButton class="flex-none !border-none w-[106px]" type="primary" plain size="large" @click="handleModelSelect">
          + {{ $t('action_add') }}
        </ElButton>
      </ul>
    </div>
  </Layout>

  <ModelSaveDialog ref="model_save_ref" @success="loadModelList" />
  <ModelSelectDialog ref="model_select_ref" :list="channel_list" @add="handleModelAdd" />
  <AuthorizeDialog ref="authorize_ref" @success="loadProviderList" />
  <ToolSettingDialog ref="tool_setting_ref" />
  <ModelSettingDialog ref="model_setting_ref" @success="loadModelList" />
  <AgentListDrawer ref="agent_list_drawer_ref" @change="onAgentListChange" />
</template>

<script setup lang="ts">
import { Delete, Remove, Setting } from '@element-plus/icons-vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import AuthorizeDialog from './components/authorize-dialog.vue'
import ToolSettingDialog from './components/tool-setting-dialog.vue'
import ModelSettingDialog from './components/model-setting-dialog.vue'
import AgentListDrawer from './components/agent-list-drawer.vue'
import ModelSaveDialog from './components/model-save-dialog.vue'
import ModelSelectDialog from './components/model-select-dialog.vue'

import { VERSION_MODULE } from '@/constants/enterprise'
import { PROVIDER_VALUE } from '@/constants/platform/provider'

import type { ModelConfig, ProviderConfig } from '@/constants/platform/config'
import { getModelByChannelType, getModelChannelTypes, getProvidersByAuth } from '@/constants/platform/config'
import eventBus from '@/utils/event-bus'
import { isInternalNetwork } from '@/utils'
import { agentApi, channelApi, providerApi } from '@/api'

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

const auth_providers = ref<ProviderOption[]>(getProvidersByAuth(true).map(createProviderOption))
const agent_providers = ref<ProviderOption[]>(getProvidersByAuth(false).map(createProviderOption))

const authorize_ref = ref()
const model_save_ref = ref()
const tool_setting_ref = ref()
const model_select_ref = ref()
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
const all_total = ref(0)

const provider_group_list = computed(() => {
  const list = [...auth_providers.value, ...agent_providers.value]

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
    auth_providers.value = auth_providers.value.map(item => {
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
  } finally {
    provider_loading.value = false
  }
}
const loadAllTotal = async () => {
  const { count = 0 } = await agentApi.list({
    params: {
      group_id: '-1',
      keyword: '',
      offset: 0,
      limit: 1,
    },
  })
  all_total.value = count
}
const loadAgentListCount = async () => {
  loadAllTotal()
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
      .filter(item => getModelChannelTypes().includes(+item.channel_type))
      .reduce((acc, item) => {
        let group = acc.find(row => row.channel_type === item.channel_type)
        if (!group) {
          const model = getModelByChannelType(item.channel_type)
          group = {
            label: item.label,
            icon: item.icon,
            channel_type: item.channel_type,
            multiple: model.multiple,
            data: item,
            children: [],
          }
          acc.push(group)
        }
        group.children.push(item)
        return acc
      }, [])
  } finally {
    channel_loading.value = false
  }
}

const refresh = () => {
  loadProviderList()
  loadModelList()
  loadAgentListCount()
}
const handleProviderAuthorize = ({ data = {} } = {}) => {
  if ([PROVIDER_VALUE.COZE_CN].includes(data.value) && isInternalNetwork()) {
    return TipConfirm({
      title: window.$t('local_config_limited_tip'),
      content: window.$t('local_config_limited_desc', { url: window.location.href }),
      confirmButtonText: window.$t('know_it'),
      showCancelButton: false,
    }).open()
  }
  if (data.auth) authorize_ref.value.open({ data })
  else agent_list_drawer_ref.value.open({ data, type: data.value })
}
const handleAgentAdd = ({ data = {} } = {}) => {
  agent_list_drawer_ref.value.create({ data, type: data.value })
}

const handleProviderDelete = async ({ data = {} } = {}) => {
  if (!data.provider_id) return

  await ElMessageBox.confirm(window.$t('module.platform_delete_confirm'))
  await providerApi.delete({ data: { provider_id: data.provider_id } })
  ElMessage.success(window.$t('action_delete_success'))
  setTimeout(() => {
    auth_providers.value = getProvidersByAuth(true).map(createProviderOption)
    loadProviderList()
  }, 1000)
}
const handleToolEnableChange = (opt = {}) => {
  ElMessage.success(window.$t(opt.enable ? 'enabled' : 'disabled'))
}

const handleModelSelect = () => {
  model_select_ref.value.open()
}

const handleModelAdd = (data: ModelConfig) => {
  model_save_ref.value.open({ channel_type: data.channelType })
}

const handleModelEdit = data => {
  model_save_ref.value.open(data)
}
const handleModelDelete = async (data, model) => {
  await ElMessageBox.confirm(window.$t('module.platform_model_delete_confirm'))
  const isChildRemove = model && data.model_options.length > 1
  if (isChildRemove) {
    await channelApi.save({
      data: {
        channel_id: data.channel_id,
        key: data.api_key,
        base_url: data.base_url,
        config: data.config || {},
        models: data.model_options
          ?.map(item => item.value)
          .filter(item => item !== model.value)
          .join(','),
        name: data.name,
        type: data.channel_type,
      },
    })
  } else {
    await channelApi.delete({ data: { channel_id: data.channel_id } })
  }

  ElMessage.success(window.$t('action_delete_success'))
  loadModelList()
}

const onModelEdit = ({ data = {}, parent_data = {} } = {}) => {
  model_setting_ref.value.open({ data: { ...parent_data, ...data, id: data.value } })
}

const onAgentListChange = ({ data = {}, count = 0 } = {}) => {
  const provider = agent_providers.value.find(item => item.value === data.value)
  if (provider) provider.agent_total = count
  loadAgentListCount()
}

onMounted(() => {
  refresh()
  eventBus.on('user-login-success', refresh)
})
onUnmounted(() => {
  eventBus.off('user-login-success', refresh)
})
</script>

<style scoped>
::v-deep(.el-collapse-item__arrow) {
  margin-left: 6px;
}
</style>
