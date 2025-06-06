<script setup lang="ts">
import { computed } from 'vue'
import Unit from './index.vue'
import Role from './role.vue'
const props = withDefaults(defineProps<{
  type?: 'department' | 'member' | 'role'
  list?: any[]
  group?: { member_ids: any[]; role_ids: any[] }
}>(), {
  type: 'member',
  list: () => [],
  group: () => ({ member_ids: [], role_ids: [] }),
})

const isempty = computed(() => {
  const listEmpty = props.list.length === 0
  const groupEmpty = props.group.member_ids.length === 0 && props.group.role_ids.length === 0
  return listEmpty && groupEmpty
})
</script>

<template>
  <div class="unit-group flex flex-wrap gap-2">
    <template v-for="(item, index) in list" :key="index">
      <Role v-if="type === 'role'" :value="item" />
      <Unit :type="type" :value="item" />
    </template>
    <template v-for="(item, index) in group.member_ids" :key="index">
      <Unit type="member" :value="item" />
    </template>
    <template v-for="(item, index) in group.role_ids" :key="index">
      <Role :value="item" />
    </template>
    <template v-if="isempty">
      <Unit type="department" :value="0" />
    </template>
  </div>
  <slot :isempty="isempty" />
</template>

<style>
.unit-group + .unit-group {
	margin-left: 8px;
}
</style>
