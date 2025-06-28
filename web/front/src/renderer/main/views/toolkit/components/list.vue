<template>
  <div name="list" tag="div">
    <div v-if="!showList.length" class="col-span-full flex flex-col items-center justify-center">
      <el-empty :description="$t('common.no_data')" :image="$getPublicPath('/images/chat/completion_empty.png')" />
    </div>
    <template v-for="item in showList" :key="item.group_id">
      <h2 v-if="+item.group_id" class="col-span-full text-placeholder" :id="`group_${item.group_id}`">{{
        item.group_name }}</h2>
      <div v-for="row in item.children" :key="row.id" @click="handleAdd(row)"
        class="min-h-[80px] bg-white rounded px-5 py-4 flex items-center gap-2 cursor-pointer border border-[#ECECEC] hover:shadow">
        <ElImage class="size-[40px] rounded-full" fit="contain" lazy :src="row.logo" />
        <div class="flex-1 overflow-hidden">
          <div class="text-base font-medium text-primary mb-1 mt-1 line-clamp-1" :title="row.name"
            v-html="row.name.replace(keyword, `<span class='text-theme'>${keyword}</span>`)" />
          <div class="text-sm text-regular text-opacity-60 line-clamp-1" :title="row.description"
            v-html="row.description.replace(keyword, `<span class='text-theme'>${keyword}</span>`)" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue'
import { useLinksStore } from '@/stores/modules/links'

const linksStore = useLinksStore()

const props = withDefaults(defineProps<{
  list: Link.State[]
  keyword?: string
  onlyAll?: boolean
  groupId?: number
}>(), {
  list: [],
  keyword: '',
  onlyAll: false,
  groupId: 0
})


const showList = computed(() => {
  // if (!props.keyword) return props.list
  // return props.list.filter(item => {
  //   return item.name.includes(props.keyword) || item.description.includes(props.keyword)
  // })
  const categorys = JSON.parse(JSON.stringify(linksStore.categorys || [])).filter((item) => props.onlyAll ? item.group_id == 0 : item.group_id != 0)
  const list = JSON.parse(JSON.stringify(linksStore.links || []))
  categorys.forEach(item => {
    item.children = list.filter(row => row.group_id == item.group_id)
    if (props.onlyAll && item.group_id == 0) item.children = props.list
    if (props.keyword) item.children = item.children.filter(row => row.name.includes(props.keyword) || row.description.includes(props.keyword))
  })
  return categorys.filter(item => item.children.length)
})

const handleAdd = (item: Link.State) => {
  window.open(item.url, '_blank')
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
