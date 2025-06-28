<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { nextTick, onMounted, onUnmounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CreateDrawer from './create/create-drawer.vue'

import eventBus from '@/utils/event-bus'
import { GROUP_TYPE_PROMPT } from '@/api/modules/group'
import { promptApi } from '@/api/modules/prompt'

defineOptions({
  name: 'Prompt',
})

const router = useRouter()
const route = useRoute()

const groupTabsRef = ref()
const createRef = ref()

const filter_form = reactive({
  group_id: [],
  keyword: '',
  page: 1,
  page_size: 10,
})
const table_data = ref([])
const table_total = ref(0)
const table_loading = ref(false)

const fetchPromptData = async () => {
  table_loading.value = true
  const { total = 0, list = [] } = await promptApi.list({
    params: {
      group_id: filter_form.group_id.join(','),
      keyword: filter_form.keyword,
      offset: (filter_form.page - 1) * filter_form.page_size,
      limit: filter_form.page_size,
    },
  }).finally(() => {
    table_loading.value = false
  })
  table_total.value = total
  table_data.value = []
  await nextTick()
  table_data.value = [...list].map((item) => {
    item.group_ids = item.group_ids || []
    let options = groupTabsRef.value.getData()
    options = options.filter(row => (item.group_ids || []).includes(row.group_id)) || {}
    item.group_names = options.map(row => row.group_name)
    return item
  })
}
const refresh = async () => {
  filter_form.page = 1
  return fetchPromptData()
}
const onTableSizeChange = (size: number) => {
  filter_form.page_size = size
  refresh()
}
const onTableCurrentChange = (current: number) => {
  filter_form.page = current
  fetchPromptData()
}
const handleMoreCommand = async (command, data = {}) => {
  switch (command) {
    case 'add':
      createRef.value.open({
        group_ids: filter_form.group_id,
      })
      break
    case 'edit':
      await router.push({
        name: 'PromptCreate',
        query: {
          prompt_id: data.prompt_id,
        },
      })
      break
    case 'delete':
      await ElMessageBox.confirm(window.$t('prompt.delete_confirm'), window.$t('tip'))
      await promptApi.delete({ prompt_id: data.prompt_id })
      ElMessage.success(window.$t('action_delete_success'))
      fetchPromptData()
      break
    case 'update_status':
      await promptApi.update_status({ prompt_id: data.prompt_id, status: data.status })
      ElMessage.success(window.$t('action_save_success'))
      break
  }
}

onMounted(() => {
  // refresh()
  eventBus.on('user-login-success', refresh)
  eventBus.on('prompt-create', refresh)
  eventBus.on('prompt-update', fetchPromptData)
})
onUnmounted(() => {
  eventBus.off('user-login-success', refresh)
  eventBus.off('prompt-create', refresh)
  eventBus.off('prompt-update', fetchPromptData)
})
</script>

<template>
  <Layout class="px-[60px] py-8">
    <Header :title="$t('module.prompt')">
      <template #right>
        <el-button type="primary" size="large" @click="handleMoreCommand('add')">
          + {{ $t('action_add') }}
        </el-button>
      </template>
    </Header>
    <div class="flex-1 overflow-y-auto bg-white rounded-lg px-10 py-6 mt-4">
      <div class="flex items-center justify-between mb-4">
        <div class="flex-1 w-0">
          <GroupTabs
            ref="groupTabsRef" v-model="filter_form.group_id" type="dropdown" :group-type="GROUP_TYPE_PROMPT"
            @change="refresh" @get-options="refresh"
          />
        </div>
        <div class="flex-none flex-center gap-3 ml-8">
          <ElInput
            v-model="filter_form.keyword" size="large" clearable :placeholder="$t('prompt.search_placeholder')"
            :suffix-icon="Search" @change="refresh"
          />
          <!-- <Search v-model="filter_form.keyword" placeholder="prompt.search_placeholder" @change="refresh" /> -->
          <!-- <div class="flex items-center gap-1 whitespace-nowrap cursor-pointer text-[#576D9C]"
						@click="groupTabsRef.open">
						<svg-icon name="cate-manage" width="14px" height="14px" />
						<div class="text-sm ">
							{{ $t('group') }}
						</div>
					</div> -->
        </div>
      </div>
      <TablePlus
        header-row-class-name="rounded overflow-hidden"
        header-cell-class-name="!bg-[#F6F7F8] !h-[60px] !border-none" :data="table_data" :total="table_total"
        :loading="table_loading" :page="filter_form.page" :limit="filter_form.page_size"
        @page-size-change="onTableSizeChange" @page-current-change="onTableCurrentChange"
      >
        <ElTableColumn :label="$t('title')" min-width="140" prop="name" show-overflow-tooltip />
        <ElTableColumn :label="$t('description')" min-width="180" show-overflow-tooltip>
          <template #default="{ row }">
            <span :class="!row.description ? 'text-[#999]' : ''">
              {{ row.description || '--' }}
            </span>
          </template>
        </ElTableColumn>
        <ElTableColumn :label="$t('group')" min-width="180" show-overflow-tooltip>
          <template #default="{ row }">
            <span :class="!row.group_names || !row.group_names.length ? 'text-[#999]' : ''">
              {{ row.group_names.join('、') || '--' }}
            </span>
          </template>
        </ElTableColumn>
        <ElTableColumn :label="$t('sort')" width="80" show-overflow-tooltip>
          <template #default="{ row = {} }">
            {{ row.sort }}
          </template>
        </ElTableColumn>
        <ElTableColumn :label="$t('action_enable')" width="80">
          <template #default="{ row }">
            <ElSwitch
              v-model="row.status" :active-value="1" :inactive-value="0"
              @change="handleMoreCommand('update_status', row)"
            />
          </template>
        </ElTableColumn>
        <ElTableColumn :label="$t('operation')" width="120" align="right" fixed="right">
          <template #default="{ row }">
            <el-button type="primary" link @click="handleMoreCommand('edit', row)">
              {{ $t('action_edit') }}
            </el-button>
            <el-button type="primary" link @click="handleMoreCommand('delete', row)">
              {{ $t('action_delete') }}
            </el-button>
          </template>
        </ElTableColumn>
      </TablePlus>
    </div>
  </Layout>

  <CreateDrawer ref="createRef" />
</template>

<style lang="scss" scoped>
</style>
