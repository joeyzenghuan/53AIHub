<script setup lang="ts">
import { Search, UserFilled } from '@element-plus/icons-vue'
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import UserSelectDialog from '../components/user-select-dialog.vue'

import { useUserStore } from '@/stores/modules/user'
import { userApi } from '@/api'

const route = useRoute()
interface User {
  'user_id': number
  'username': string
  'nickname': string
  'avatar': string
  'mobile': string
  'email': string
  'eid': number
  'role': number
  'group_id': number
  'status': number
  'expired_time': number
  'last_login_time': number
  'related_id': number
  'created_time': number
  'updated_time': number
  'register_time': string
}

const user_store = useUserStore()
const userSelectRef = ref()
const filter_form = reactive({
  keyword: '',
})
const loading = ref(false)
const user_info = computed(() => user_store.info)

const state: {
  keyword: string
  page: number
  pageSize: number
  count: number
  list: User[]
} = reactive({
  keyword: '',
  page: 1,
  pageSize: 10,
  count: 0,
  list: [],
})

const fetchAdminList = async () => {
  loading.value = true
  const { total = 0, list = [] } = await userApi.fetch_admin_user({ keyword: state.keyword, offset: (state.page - 1) * state.pageSize, limit: state.pageSize }).finally(() => {
    loading.value = false
  })
  state.count = +total || 0
  state.list = [...list]
}

const refresh = () => {
  state.page = 1
  return fetchAdminList()
}

const handleAdd = ({ data = {} } = {}) => {
  userSelectRef.value.open({
    success: ({ value }: { value: any[] }) => {
      userApi.batch_save_admin({ user_ids: value.map(item => item.user_id) }).then((res) => {
        ElMessage.success(window.$t('action_add_success'))
        refresh()
      })
    },
  })
}
const handleDelete = async (data: User) => {
  await ElMessageBox.confirm(window.$t('admin_user.delete_confirm'))
  await userApi.batch_remove_admin({ user_ids: [data.user_id] })
  ElMessage.success(window.$t('action_delete_success'))
  fetchAdminList()
}
const onPageSizeChange = (pageSize: number) => {
  state.pageSize = pageSize
  refresh()
}
const onPageChange = (page: number) => {
  state.page = page
  fetchAdminList()
}
onMounted(async () => {
  fetchAdminList()
  // eventBus.on('load-user-self-info-success', fetchAdminList)
})
onUnmounted(() => {
  // eventBus.off('load-user-self-info-success', fetchAdminList)
})
</script>

<template>
  <Layout class="px-[60px] py-8">
    <Header :title="$t(route.meta.title)" />
    <div class="flex-1 flex flex-col bg-white p-6 mt-3 box-border  max-h-[calc(100vh-100px)] overflow-auto">
      <div class="flex items-center justify-between">
        <ElInput
          v-model="state.keyword" style="width: 268px" size="large" clearable :suffix-icon="Search"
          :placeholder="$t('admin_user.search_placeholder')" @change="refresh"
        />
        <ElButton class="min-w-[100px]" type="primary" size="large" @click="handleAdd">
          + {{ $t('action_add') }}
        </ElButton>
      </div>

      <div class="flex-1 overflow-y-auto bg-white rounded-lg mt-4">
        <TablePlus
          :data="state.list" :total="state.count" style="width: 100%" :loading="loading"
          header-row-class-name="rounded overflow-hidden" header-cell-class-name="!bg-[#F6F7F8] !h-[60px] !border-none"
          @page-size-change="onPageSizeChange" @page-current-change="onPageChange"
        >
          <el-table-column :label="$t('user')" min-width="160" prop="nickname" show-overflow-tooltip>
            <template #default="{ row }">
              <div class="flex items-center gap-1 w-full">
                <ElIcon size="16" color="#C7C7C7">
                  <UserFilled />
                </ElIcon>
                <div class="truncate">
                  {{ row.nickname }}
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column :label="$t('mobile')" min-width="140" prop="mobile" show-overflow-tooltip>
            <template #default="{ row }">
              <span :class="{ 'text-[#9B9B9B]': !row.mobile }">{{ row.mobile || '--' }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('email')" min-width="140" prop="email" show-overflow-tooltip>
            <template #default="{ row }">
              <span :class="{ 'text-[#9B9B9B]': !row.email }">{{ row.email || '--' }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('role.title')" min-width="120" prop="role" show-overflow-tooltip>
            <template #default="{ row }">
              <span :class="{ 'text-[#9B9B9B]': !row.role_label }">{{ $t(row.role_label) || '--' }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('add_time')" width="160" prop="add_admin_time">
            <template #default="{ row }">
              <span :class="{ 'text-[#9B9B9B]': !row.add_admin_time }">{{ (row.add_admin_time || '').slice(0, 16) || '--'
              }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('operation')" width="60" fixed="right" align="right">
            <template #default="{ row }">
              <!-- <ElButton class="text-[#5A6D9E] !bg-transparent" type="text" @click="handleAdd({ data: row })">
								{{ $t('action_edit') }}
							</ElButton> -->
              <ElButton v-if="row.is_admin && user_info.user_id != row.user_id" class="text-[#5A6D9E] !bg-transparent" type="text" @click="handleDelete(row)">
                {{ $t('action_delete') }}
              </ElButton>
              <template v-else>
                --
              </template>
            </template>
          </el-table-column>
        </TablePlus>
      </div>
    </div>

    <UserSelectDialog ref="userSelectRef" />
  </Layout>
</template>

<style scoped>

</style>
