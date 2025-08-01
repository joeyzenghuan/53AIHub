<template>
  <el-dialog v-model="visible" :title="$t('default_links.default_setting')" width="800px" @close="handleCloseDefaultLinks">
    <TablePlus v-model:data="defaultLinks" sortable :pagination="false">
      <el-table-column prop="name" :label="$t('default_links.website')" >
        <template #default="{ row }">
          <div class="flex items-center gap-2">
            <img class="size-8 rounded-full" :src="row.logo" />
            <p class="text-sm text-[#1D1E1F]">{{ row.name }}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="url" :label="$t('default_links.jump_path')" show-overflow-tooltip />
      <el-table-column prop="operation" :label="$t('action.operation')" width="100">
        <template #default="{ row, $index }">
          <el-button type="primary" link @click="handleDeleteDefaultLink(row, $index)">{{ $t('action.delete') }}</el-button>
        </template>
      </el-table-column>
    </TablePlus>
    <div v-if="loading" class="h-20">
      <el-skeleton :rows="3" animated />
    </div>
    <el-button
      type="primary"
      plain
      size="large"
      class="!border-none mt-5"
      :disabled="defaultLinks.length >= MAX_LINKS_LEN"
      @click="handleOpenStoreDialog">+{{ $t('action.add') }}({{ defaultLinks.length }}/{{ MAX_LINKS_LEN }})</el-button>

		<template #footer>
			<el-button v-debounce size="large" type="primary" @click="handleSaveDefaultLinks">
				{{ $t('action.save') }}
			</el-button>
		</template>
    <StoreDialog ref="storeDialogRef" :show-add-manual="false" @add="handleAddDefaultLink" />
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { settingApi, type DefaultLinkItem } from '@/api/modules/setting'
import StoreDialog from '@/views/toolbox/components/store-dialog.vue'

const storeDialogRef = ref()

const MAX_LINKS_LEN = 8

const visible = ref(false)
const loading = ref(false)
const defaultLinks = ref<DefaultLinkItem[]>([])
const originDefaultLinks = ref<DefaultLinkItem[]>([])
const deleteDefaultLinks = ref<DefaultLinkItem[]>([])

const handleAddDefaultLink = (item: { data: DefaultLinkItem }) => {
  defaultLinks.value.push(item.data)
}

const handleCloseDefaultLinks = () => {
  defaultLinks.value = originDefaultLinks.value
  deleteDefaultLinks.value = []
}

const handleDeleteDefaultLink = (row: DefaultLinkItem, index: number) => {
  defaultLinks.value.splice(index, 1)
  deleteDefaultLinks.value.push(row)
}

const handleOpenStoreDialog = () => {
  storeDialogRef.value.open()
}

const handleSaveDefaultLinks = async () => {
  const data = {
    links: defaultLinks.value.map((item) => {
      return {
        ai_link: { ...item },
        delete: false
      }
    }).concat(deleteDefaultLinks.value.map((item) => {
      return {
        ai_link: { ...item },
        delete: true
      }
    }))
  }
  await settingApi.default_links.save(data)
  ElMessage.success(window.$t('message_status.save_success'))
  visible.value = false
}

const loadDefaultLinks = async () => {
  loading.value = true
  const { data } = await settingApi.default_links.list()
  originDefaultLinks.value = data
  defaultLinks.value = data
  loading.value = false
}


defineExpose({
  open: () => {
    loadDefaultLinks()
    deleteDefaultLinks.value = []
    visible.value = true
  },
  close: () => {
    visible.value = false
  }
})
</script>
