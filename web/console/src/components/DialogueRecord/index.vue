<template>
  <div class="h-full overflow-y-auto bg-white rounded-lg px-8 py-7 box-border overflow-hidden" :class="className">
    <div class="flex items-center gap-2">
      <!-- <ElSelect class="flex-none !w-[180px]" v-model="filterForm.sort_by" :placeholder="$t('form_select_placeholder')"
				size="large" @change="refresh">
				<template #prefix>
					<label class="text-sm text-[#768097]">{{ $t('filter') }}：</label>
				</template>
				<ElOption v-for="item in sortOptions" :key="item.value" :label="item.label" :value="item.value" />
			</ElSelect> -->
      <div class="flex-none w-[250px]">
        <DateRangeFilter v-model="filterForm.date" class="!w-full" @change="refresh" />
      </div>
      <div class="flex-1 w-0" />
      <ElInput
        v-model="filterForm.keyword"
        class="max-w-[268px]"
        size="large"
        clearable
        :placeholder="$t(type === 'agent' ? 'user/mobile' : 'keyword')"
        :suffix-icon="Search"
        @change="refresh"
      />
    </div>
    <TablePlus
      class="mt-5"
      :data="tableList"
      :total="tableTotal"
      :loading="tableLoading"
      :page="filterForm.page"
      :limit="filterForm.pageSize"
      style="width: 100%"
      header-row-class-name="rounded overflow-hidden"
      header-cell-class-name="!bg-[#F6F7F8] !h-[60px] !border-none"
      @page-size-change="handleSizeChange"
      @page-current-change="handleCurrentChange"
    >
      <!-- <ElTableColumn prop="updated_time" :label="$t('update_time')" width="160" show-overflow-tooltip>
				<template #default="scope">
					{{ scope.row.updated_time }}
				</template>
			</ElTableColumn> -->
      <ElTableColumn prop="create_time" :label="$t('create_time')" width="160" show-overflow-tooltip>
        <template #default="scope">
          {{ scope.row.create_time }}
        </template>
      </ElTableColumn>
      <ElTableColumn prop="summary" :label="$t('summary')" min-width="180" show-overflow-tooltip>
        <template #default="scope">
          {{ scope.row.summary_content || '- -' }}
        </template>
      </ElTableColumn>
      <ElTableColumn prop="message_count" :label="$t('message_count')" width="120" align="center" />
      <ElTableColumn :label="$t('operation')" width="140" align="center">
        <template #default="{ row }">
          <ElButton type="primary" link @click="handleDetail(row)">
            {{ $t('detail') }}
          </ElButton>
        </template>
      </ElTableColumn>

      <!-- <el-table-column label="用户反馈" width="140">
				<template #default="scope">
					<div class="flex gap-1">
						<div v-if="scope.row.user_feedback_stats.like"
							class="h-6 flex-center gap-1 px-1 bg-[#EFF3FD] rounded text-xs text-[#2563EB]">
							<svg-icon name="like" />
							{{ scope.row.user_feedback_stats.like }}
						</div>
						<div v-if="scope.row.user_feedback_stats.dislike"
							class="h-6 flex-center gap-1 px-1 bg-[#EFF3FD] rounded text-xs text-[#FA5151]">
							<svg-icon name="dislike" />
							{{ scope.row.user_feedback_stats.dislike }}
						</div>
						<div v-if="!scope.row.user_feedback_stats.like && !scope.row.user_feedback_stats.dislike"
							class="text-sm text-[#182B50]">
							--
						</div>
					</div>
				</template>
			</el-table-column> -->
    </TablePlus>
  </div>

  <ElDrawer v-model="detailVisible" destroy-on-close :title="$t('dialogue_detail')" size="697px">
    <div v-loading="detailLoading">
      <x-bubble-list :messages="messageList" class="px-4 relative py-4">
        <template #header>
          <!-- <x-bubble-assistant :content="agentFormStore.form_data.settings.opening_statement"
						:suggestions="agentFormStore.form_data.settings.suggested_questions" />
					<ElEmpty v-if="showChatListEmpty" class="mt-10" :description="$t('chat.empty_desc')" /> -->
        </template>
        <template #item="{ message, index }">
          <x-bubble-user :content="message.question.content" :files="message.question.user_files">
            <template v-if="!message.answer.loading" #menu>
              <x-icon size="16" class="cursor-pointer" name="copy" @click="onCopy(message.question.content)" />
            </template>
          </x-bubble-user>
          <!-- :always-show-menu="message_index === messageList.length - 1" -->
          <x-bubble-assistant
            :content="message.answer.content"
            :reasoning="message.answer.reasoning_content"
            :reasoning-expanded="message.answer.reasoning_expanded"
            :streaming="message.answer.loading"
          >
            <template v-if="!message.answer.loading" #menu>
              <x-icon size="16" class="cursor-pointer" name="copy" @click="onCopy(message.answer.content)" />
            </template>
          </x-bubble-assistant>
        </template>
      </x-bubble-list>
    </div>
    <!-- <ChatView ref="chatViewRef" v-if="detailVisible" :library="realLibrary" :mode="app.mode" :features="app.model_config"
			@feedback="fetchData" /> -->
  </ElDrawer>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

// import ChatView from '@/flow/components/chat/chat-view.vue'
import DateRangeFilter from '@/components/Filter/date-range.vue'

import { getSimpleDateFormatString, getDateTimestamp } from '@/utils/moment'
import { conversationApi } from '@/api/modules/conversation'
import { messageApi } from '@/api/modules/message'
import { copyToClip } from '@/utils/copy'
// import { useAgentFormStore } from '@/views/agent/create/store'

const props = withDefaults(
  defineProps<{
    type?: 'agent' | 'user'
    relatedId?: string | number
    className?: string
  }>(),
  {}
)

// const agentFormStore = useAgentFormStore()

const sortOptions = [
  {
    value: '-updated_at',
    label: `${window.$t('update_time')} ↓`,
  },
  {
    value: 'updated_at',
    label: `${window.$t('update_time')} ↑`,
  },
  {
    value: '-created_at',
    label: `${window.$t('create_time')} ↓`,
  },
  {
    value: 'created_at',
    label: `${window.$t('create_time')} ↑`,
  },
]

// const app = inject('app') as Dify.App
// const realLibrary = inject('realLibrary')
// const chatViewRef = ref()
// const chatView2Ref = ref()

const filterForm = reactive({
  keyword: '',
  sort_by: '-updated_at',
  date: [],
  page: 1,
  pageSize: 10,
})
const detailVisible = ref(false)
const detailLoading = ref(false)
const tableList = ref([])
const tableTotal = ref(0)
const tableLoading = ref(false)

// const showChatListEmpty = computed(() => {
// 	const settings = agentFormStore.form_data.settings
// 	if (chat_list.value.length)
// 		return false
// 	if (settings.opening_statement.replace(/\s/g, ''))
// 		return false
// 	if (settings.suggested_questions.length && settings.suggested_questions.some(item => item.content.replace(/\s/g, '')))
// 		return false
// 	return true
// })

const getCommonParams = () => {
  const params = {
    sort_by: filterForm.sort_by,
  }
  console.log(props.type)
  if (filterForm.keyword) options.params = filterForm.keyword
  if (filterForm.date[0]) params.created_at_start = getDateTimestamp(filterForm.date[0])
  if (filterForm.date[1]) params.created_at_end = getDateTimestamp(filterForm.date[1])
  if (props.type === 'agent') params.agent_id = props.relatedId
  else if (props.type === 'user') params.user_id = props.relatedId
  return params
}

const refresh = async () => {
  filterForm.page = 1
  return fetchData()
}
const fetchData = async () => {
  const params = {
    offset: (filterForm.page - 1) * filterForm.pageSize,
    limit: filterForm.pageSize,
    ...getCommonParams(),
  }
  tableLoading.value = true
  const {
    data: { count = 0, items = [] },
  } = await conversationApi[`fetch_${props.type}_conversations`]({
    ...params,
  }).finally(() => {
    tableLoading.value = false
  })
  tableList.value = items.map(item => {
    item.create_time = getSimpleDateFormatString({ date: item.created_at, format: 'YYYY-MM-DD hh:mm' })
    try {
      item.summary = JSON.parse(item.summary || '[]')
    } catch (error) {
      item.summary = []
    }
    item.summary_content = (item.summary[0] || {}).content || ''
    return item
  })
  tableTotal.value = +count || 0
}
const handleCurrentChange = page => {
  filterForm.page = page
  fetchData()
}
const handleSizeChange = pageSize => {
  filterForm.pageSize = pageSize
  refresh()
}
const messageList = ref([])
const handleDetail = async data => {
  detailVisible.value = true
  detailLoading.value = true
  const { data: { messages = [] } = {} } = await messageApi
    .fetch_conversation_messages({
      conversation_id: data.id,
      offset: 0,
      limit: 1000,
    })
    .finally(() => {
      detailLoading.value = false
    })
  messageList.value = messages.map((item = {}) => {
    try {
      item.message = JSON.parse(item.message || '[]')
    } catch (error) {
      item.message = []
    }
    const question = item.message[0] || {}
    return {
      question: {
        role: question.role || 'user',
        content: question.content || '',
        user_files: question.user_files || [],
      },
      answer: {
        loading: false,
        role: 'assistant',
        content: item.answer || '',
        reasoning_expanded: true,
        reasoning_content: item.reasoning_content || '',
      },
    }
  })
}
const onCopy = async (text = '') => {
  await copyToClip(text)
  ElMessage.success(window.$t('action_copy_success'))
}

onMounted(() => {
  refresh()
})
</script>
