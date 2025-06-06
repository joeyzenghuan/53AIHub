<script setup lang="ts">
import { reactive } from 'vue'
import { Delete } from '@element-plus/icons-vue'

import api from '@/apis'

const props = withDefaults(defineProps<{
  ctype: number
  identity?: string
  // 删除前，拦截
  beforeRemove?: Function | Promise<boolean>
}>(), {
  ctype: 0,
  identity: 'cid',
  beforeRemove: () => true,
})

const emits = defineEmits<{
  (e: 'success', promptid?: string): any
}>()
let _del_categroys: { cid: number; cname: string }[] = []

const cate: {
  visible: boolean
  list: { cid: number; cname: string }[]
} = reactive({
  visible: false,
  list: [],
})

const handlAddCate = () => {
  cate.list.push({
    cid: -Date.now(),
    cname: '',
  })
}
const handlDelCate = async (index: number) => {
  const item = cate.list[index]

  if (cate.list.filter(item => item.cid).length === 1)
    return ElMessage.warning('至少保留一个分组')

  const intercept = props.beforeRemove(item)
  if (intercept === false)
    return

  if (intercept.then && intercept.catch) {
    const res = await intercept
    if (res === false)
      return
  }
  await ElMessageBox.confirm('确定删除该分类？', '删除')
  _del_categroys.push(item)
  cate.list.splice(index, 1)
}

const delCate = async () => {
  for (let i = 0; i < _del_categroys.length; i++) {
    const item = _del_categroys[i]
    if (item.cid > 0)
      await api.prompt.deletecategory({ eid: userStore.eid, cid: item.cid, type: 'enterprise' })
  }
}

const handleCateSave = async () => {
  const list = cate.list
  const isEmpty = list.filter(item => item.cname.trim()).length === 0
  if (isEmpty)
    return ElMessage.warning('分组不能为空')
  await delCate()
  await api.prompt.savecategoryv2({
    eid: userStore.eid,
    ctype: props.ctype,
    type: 'enterprise',
    list: list.filter(item => item.cname.trim()).map((item, index) => {
      return {
        name: item.cname.trim(),
        cid: item.cid > 0 ? item.cid : 0,
        sort: list.length - index,
      }
    }),
  })
  ElMessage.success('已更新')
  cate.visible = false
  emits('success')
}

defineExpose({
  open(list: any[]) {
    _del_categroys = []
    cate.list = list.map((item) => {
      return {
        cid: item.cid,
        cname: item.cname,
      }
    }).filter(item => item.cid > 0)
    if (cate.list.length === 0)
      cate.list = [{ cid: -Date.now(), cname: '' }]

    cate.visible = true
  },
})
</script>

<template>
  <el-dialog v-model="cate.visible" :title="$t('group_management')" width="770px" align-center destroy-on-close :close-on-click-modal="false">
    <div class="text-[#182B50] text-opacity-60 text-sm pb-4">
      {{ $t('display_order') }}
    </div>
    <Sortable v-model="cate.list" identity="cid" class="w-full flex flex-col gap-4">
      <template #item="{ item, index }">
        <div class="flex items-center">
          <div class="pr-3 sort-icon cursor-move">
            <svg-icon name="drag" width="16px" height="32px" color="#a1a5af" />
          </div>
          <div class="flex-1">
            <el-input v-model="item.cname" size="large" :placeholder="$t('form_input_placeholder')" class="w-full" maxlength="10" show-word-limit />
          </div>
          <el-icon class="ml-4 cursor-pointer" color="rgba(24, 43, 80, 0.4)" @click="handlDelCate(index)">
            <Delete />
          </el-icon>
        </div>
      </template>
    </Sortable>
    <el-button type="primary" link class="mt-4 ml-5" @click="handlAddCate">
      +{{ $t('action_add') }}
    </el-button>

    <template #footer>
      <el-button size="large" type="default" @click="cate.visible = false">
        {{ $t('action_cancel') }}
      </el-button>
      <el-button v-debounce size="large" type="primary" @click="handleCateSave">
        {{ $t('action_save') }}
      </el-button>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>
