<script setup lang="ts">
import { ref } from 'vue'
const form = ref({
  request_limit: {
    frequency: {
      enable: false,
      interval: 1,
      number: 1,
      over_message: '',
    },
    total: {
      enable: false,
      limit: 1,
      over_message: '',
    },
  },
})
</script>

<template>
  <el-form-item :label="$t('dialogue_frequency')">
    <div class="w-full">
      <div class="text-[#182B50] text-opacity-60">
        <el-switch v-model="form.request_limit.frequency.enable" class="mr-2" /> {{ form.request_limit.frequency.enable
          ? $t('action_open') : $t('action_close') }}
      </div>
      <div v-if="form.request_limit.frequency.enable">
        <div class="flex items-center whitespace-nowrap text-[#182B50] mt-4">
          {{ $t('limit') }}<el-input-number
            v-model="form.request_limit.frequency.interval" :min="1" :controls="false"
            class="mx-2 w-7" size="large"
          /> {{ $t('second') }}, {{ $t('send') }} <el-input-number
            v-model="form.request_limit.frequency.number" :min="1" :controls="false" class="mx-2 w-7" size="large"
          /> {{
            $t('unit_messages') }}
        </div>
        <div class="flex items-center whitespace-nowrap text-[#182B50] mt-4">
          {{ $t('over_message') }} <el-input
            v-model="form.request_limit.frequency.over_message" type="textarea"
            :rows="3" resize="none" class="mx-2" size="large"
          />
        </div>
      </div>
    </div>
  </el-form-item>
  <el-form-item :label="$t('dialogue_total')">
    <div class="w-full">
      <div class="text-[#182B50] text-opacity-60">
        <el-switch v-model="form.request_limit.total.enable" class="mr-2" /> {{ form.request_limit.total.enable
          ? $t('action_open') : $t('action_close') }}
      </div>
      <div v-if="form.request_limit.total.enable">
        <!-- 为了让对话频率跟对话总量宽度一样，复制上面一份 -->
        <div class="h-[1px] flex overflow-hidden items-center whitespace-nowrap text-[#182B50] invisible">
          {{ $t('limit') }}<el-input-number :min="1" :controls="false" class="mx-2 w-7" size="large" />{{ $t('second')
          }}, {{ $t('send') }}<el-input-number :min="1" :controls="false" class="mx-2 w-7" size="large" />{{
            $t('unit_messages') }}
        </div>

        <div class="flex items-center whitespace-nowrap text-[#182B50] mt-4">
          {{ $t('limit_every_dialogue') }} <el-input-number
            v-model="form.request_limit.total.limit" :min="1" :controls="false"
            class="mx-2 w-7" size="large"
          /> {{ $t('unit_messages_v2') }}
        </div>
        <div class="flex items-center whitespace-nowrap text-[#182B50] mt-4">
          {{ $t('over_message') }} <el-input
            v-model="form.request_limit.total.over_message" type="textarea" :rows="3"
            resize="none" class="mx-2" size="large"
          />
        </div>
      </div>
    </div>
  </el-form-item>
</template>

<style scoped>

</style>
