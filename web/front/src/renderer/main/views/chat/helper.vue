<template>
  <div class="h-full overflow-y-auto bg-white">
    <div class="p-6 bg-white rounded">
      <h4 class="text-base text-primary">
        {{ $t('chat.usage_case') }}
      </h4>
      <div class="columns-2 gap-5 space-y-5 mt-5 max-md:columns-1">
        <template v-for="(item, index) in state.cases" :key="index">
          <div class="p-5 bg-[#F7F9FC] rounded relative group cursor-pointer break-inside-avoid">
            <div class="bg-white rounded p-5 relative">
              <div class="text-sm text-secondary">
                {{ $t('chat.input') }}
              </div>
              <div class="text-sm text-primary break-words mt-4">{{ item.input_text }}</div>
              <div class="absolute right-8 -bottom-9">
                <svg-icon :size="50" name="arrow-down" color="white" />
              </div>
            </div>
            <div class="bg-[#E6EEFF] rounded p-5 mt-4">
              <div class="flex items-center justify-between">
                <div class="text-sm text-secondary">
                  {{ $t('chat.output') }}
                </div>
                <div v-copy="item.output_text" v-tooltip="{ content: $t('action.copy') }">
                  <svg-icon name="copy" color="#4F5052" />
                </div>
              </div>
              <div class="text-sm text-primary break-words whitespace-pre-wrap mt-4">{{ item.output_text }}</div>
            </div>
          </div>
        </template>
      </div>
      <el-empty
        v-if="state.cases.length === 0"
        :image-size="92"
        :description="$t('common.no_data')"
        :image="$getPublicPath('/images/chat/completion_empty.png')"
      />
    </div>
    <div class="p-6 bg-white rounded">
      <h4 class="text-base text-primary">
        {{ $t('chat.usage_scene') }}
      </h4>
      <div class="flex gap-6 py-5 max-md:flex-col max-md:gap-2">
        <template v-for="(item, index) in state.scenes" :key="index">
          <div class="flex-1 px-4 text-center pt-3 pb-10 relative cursor-pointer group">
            <img class="max-w-[200px] mx-auto" :src="item.image" />
            <h6 class="text-base text-primary mt-5 break-words">
              {{ item.scene }}
            </h6>
            <p class="text-xs text-secondary mt-4 break-words">
              {{ item.desc }}
            </p>
          </div>
        </template>
      </div>
      <el-empty
        v-if="state.scenes.length === 0"
        :image-size="92"
        :description="$t('common.no_data')"
        :image="$getPublicPath('/images/chat/completion_empty.png')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from 'vue'

const props = withDefaults(
  defineProps<{
    agent: Agent.State
  }>(),
  {
    agent: () => ({ use_cases: '[]' })
  }
)
const state = reactive({
  cases: [],
  scenes: []
})

watchEffect(() => {
  const list = JSON.parse(props.agent.use_cases || '[]') || []
  state.cases = list.filter((item) => item.type === 'case')
  state.scenes = list.filter((item) => item.type === 'scene')
})
</script>

<style scoped></style>
