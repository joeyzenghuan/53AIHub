<script setup lang="ts">
import { ArrowDown, Search } from '@element-plus/icons-vue'
import { onMounted, reactive, ref, onUnmounted } from 'vue'
import UserAddDialog from '../components/user-add-dialog.vue'

import { useUserStore } from '@/stores'
import { useRoute } from 'vue-router'
import { groupApi, GROUP_TYPE_USER } from '@/api/modules/group'
import eventBus from '@/utils/event-bus'

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
const add_ref = ref()
const filter_form = reactive({
  group_id: 0,
  keyword: '',
})
const subscription_options = ref([])
const loading = ref(false)

const state: {
  keyword: string
  page: number
  limit: number
  count: number
  list: User[]
} = reactive({
  keyword: '',
  page: 1,
  limit: 10,
  count: 0,
  list: [],
})

const loadList = () => {
  loading.value = true
	user_store.loadListData({ data: { keyword: state.keyword, group_id: filter_form.group_id, offset: (state.page - 1) * state.limit, limit: state.limit } })
		.then(({ total = 0, list = [] } = {}) => {
      state.count = +total || 0
      state.list = [...list].map((item) => {
				item.subscription_name = (subscription_options.value.find((row) => row.group_id === item.group_id) || {}).group_name || ''
				return item
			})
    }).finally(() => {
      loading.value = false
    })
}

const handleSearch = () => {
  state.page = 1
  loadList()
}

const handleCommand = (command: string) => {
  filter_form.group_id = command
}

const handleAdd = ({ data = {} } = {}) => {
  add_ref.value.open({ data, subscription_options: subscription_options.value })
}
const handleDelete = async (data: User) => {
  await ElMessageBox.confirm(window.$t('module.operation_user_delete_confirm'))
	await user_store.delete({ data: { user_id: data.user_id } })
  ElMessage.success(window.$t('action_delete_success'))
  loadList()
}
const handleSizeChange = (size: number) => {
  state.limit = size
  state.page = 1
  loadList()
}
const handleCurrentChange = (page: number) => {
  state.page = page
  loadList()
}
onMounted(async () => {
	const options = await groupApi.list({ params: { group_type: GROUP_TYPE_USER } })
	subscription_options.value = options.map((item = {}) => {
		item.value = +item.group_id || 0
		item.label = item.group_name || ''
		return item
	})
	loadList()
	// eventBus.on('load-user-self-info-success', loadList)
})
onUnmounted(() => {
	// eventBus.off('load-user-self-info-success', loadList)
})
</script>

<template>
	<Layout class="px-[60px] py-8">
		<Header :title="$t(route.meta.title)" />
		<div class="flex-1 flex flex-col bg-white p-6 mt-3 box-border  max-h-[calc(100vh-100px)] overflow-auto">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-3">
					<ElDropdown v-if="false" placement="bottom" @command="handleCommand">
						<div
							class="!border-none !outline-none h-9 flex-center px-5 gap-1.5 rounded-2xl bg-[#F6F7F8] text-xs text-[#1D1E1F] cursor-pointer">
							{{ $t('all_group') }}
							<ElIcon size="14" color="#9EA5B6">
								<ArrowDown />
							</ElIcon>
						</div>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item command="all">
									{{ $t('all_group') }}
								</el-dropdown-item>
								<el-dropdown-item command="high">
									高端用户
								</el-dropdown-item>
								<el-dropdown-item command="normal">
									普通用户
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</ElDropdown>
				</div>
				<div class="flex-center gap-3">
					<ElInput v-model="state.keyword" style="width: 268px" size="large" clearable :suffix-icon="Search"
						:placeholder="$t('module.operation_user_search_placeholder')" @change="handleSearch" />
					<ElButton v-if="false" class="min-w-[100px]" type="primary" size="large" @click="handleAdd">
						{{ $t('action_add') }}
					</ElButton>
				</div>
			</div>

			<div class="flex-1 overflow-y-auto bg-white rounded-lg mt-4">
				<TablePlus :data="state.list" :total="state.count" style="width: 100%"
					header-row-class-name="rounded overflow-hidden" header-cell-class-name="!bg-[#F6F7F8] !h-[60px] !border-none" :loading="loading"
					@pageSizeChange="handleSizeChange" @pageCurrentChange="handleCurrentChange">
					<el-table-column :label="$t('user')" min-width="140" prop="nickname" show-overflow-tooltip />
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
					<el-table-column :label="$t('subscription')" min-width="100" show-overflow-tooltip>
						<template #default="{ row }">
							<span :class="{ 'text-[#9B9B9B]': !row.subscription_name }">{{ row.subscription_name || '--' }}</span>
						</template>
					</el-table-column>
					<el-table-column :label="$t('subscription_end_at')" width="120" prop="expired_time" show-overflow-tooltip>
						<template #default="{ row }">
							<span :class="{ 'text-[#9B9B9B]': !row.expired_time }">
								{{ (row.expired_time || '').slice(0, 10) || +row.group_id && $t('permanent_effect') || '--'}}
							</span>
						</template>
					</el-table-column>
					<el-table-column :label="$t('register_time')" width="160" prop="register_time">
						<template #default="{ row }">
							<span :class="{ 'text-[#9B9B9B]': !row.register_time }">{{ (row.register_time || '').slice(0, 16) || '--'
								}}</span>
						</template>
					</el-table-column>
					<el-table-column :label="$t('operation')" width="100" fixed="right" align="right">
						<template #default="{ row }">
							<ElButton class="text-[#5A6D9E] !bg-transparent" type="text" @click="handleAdd({ data: row })">
								{{ $t('action_edit') }}
							</ElButton>
							<!-- <ElButton class="text-[#5A6D9E]" type="text" @click="handleRecord({ data: row })">
                {{ $t('usage_record') }}
              </ElButton> -->
							<ElButton :disabled="user_store.info.user_id == row.user_id" class="text-[#5A6D9E] !bg-transparent !w-[30px] text-left" type="text" @click="handleDelete(row)">
								{{ user_store.info.user_id == row.user_id ? '--' : $t('action_delete') }}
							</ElButton>
						</template>
					</el-table-column>
				</TablePlus>
			</div>
		</div>
	</Layout>
	<UserAddDialog ref="add_ref" @success="loadList" />
</template>

<style scoped>

</style>
