<script setup lang="ts">
import { onMounted, ref } from 'vue'

const lists = ref([])

onMounted(() => {
  const svgs = document.querySelectorAll('#__svg__icons__dom__ symbol')
  const names = []
  Array.from(svgs).forEach((item) => {
    const name = item.getAttribute('id').replace('icon-', '')
    names.push(name)
  })
  lists.value = names
})
// export default {

// }
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div v-for="(name, index) in lists" :key="index" class="flex flex-col items-center">
      {{ name }}
      <svg-icon :name="name" width="30px" height="30px" color="#182B50" />
    </div>
  </div>
</template>

<style>

</style>
