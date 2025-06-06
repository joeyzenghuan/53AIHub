<script setup lang="ts">
import { ref } from 'vue'
import { RefreshRight } from '@element-plus/icons-vue'

const form = ref([
  {
    id: 1,
    type: 'text',
    label: window.$t('model_name'),
    placeholder: window.$t('model_name_placeholder'),
    maxlength: 20,
    showWordLimit: true,
    required: true,
    value: 'gpt-3.5-turbo',
  },
  {
    id: 2,
    type: 'textarea',
    label: window.$t('prompt'),
    placeholder: window.$t('prompt_placeholder'),
    maxlength: 200,
    showWordLimit: true,
    required: true,
    value: '你是一个AI助手',
  },
])

const validator = (item) => {
  return function (rule, value, callback) {
    if (item.required) {
      const hasVal = item.value.some(item => item.trim())
      if (hasVal)
        callback()
      else callback(new Error(`请添加${item.label}`))
    }
    else {
      callback()
    }
  }
}
const handleFocusTag = (item) => {
  item.temp = ''
  item.focus = true
}
const handleAddTag = (item) => {
  const temp = item.temp.trim()
  if (temp) {
    item.value.unshift(temp)
    item.temp = ''
  }
  item.focus = false
}
const handleDelTag = (item, index) => {
  item.value.splice(index, 1)
}

const getInputs = () => {
  return form.value.reduce((result, item) => {
    result[`${item.id}`] = (item.type === 'select' && !item.multiple) ? item.value : (Array.isArray(item.value) ? item.value.join(',') : String(item.value))
    return result
  }, {})
}

// watch(() => props.widgets, (widgets) => {
//   form.value = widgets.map(({ ...item }) => {
//     if (item.type === 'tag') {
//       item.focus = false
//       item.value = []
//       item.temp = ''
//     }
//     else if (item.type === 'select' && item.multiple) {
//       item.value = []
//     }
//     else {
//       item.value = ''
//     }
//     return item
//   })
// }, { deep: true, immediate: true })

defineExpose({
  validate(callback?: () => void) {
    return formRef.value.validate((valid) => {
      if (!valid)
        return
      callback && callback(getInputs())
    })
  },
})
</script>

<template>
  <div class="flex flex-col  px-4">
    <div class="flex items-center justify-between mb-5">
      <div class="text-base text-[#1D1E1F]">
        {{ $t('debug_preview') }}
      </div>
      <div class="flex-center gap-1 cursor-pointer">
        <el-icon><RefreshRight /></el-icon>
        <span class="text-sm text-[#1D1E1F]">
          {{ $t('restart') }}
        </span>
      </div>
    </div>

    <div v-if="false" class="border p-4 rounded">
      <div class="text-sm text-[#1D1E1F]">
        53AI是广州群应用网络科技有限公司在2023年推出“全员工作+AI“及“企业专属模型”的产品53AI，已服务上百家企业。产品基于Few-Shot Learning /CoT独创搜索算法53Search及模型可视化微调技术，多项指标全球领先，微调后问答准确性可达99.99%。创始人杨芳贤是腾讯云TVP（腾讯云最具价值专家），公司八个月时间获得五家投资机构的三轮投资。
      </div>
    </div>
    <el-form ref="formRef" :model="form" label-position="top" require-asterisk-position="right" @submit.native.prevent>
      <template v-for="(item, index) in form" :key="item.id">
        <el-form-item v-if="item.type === 'text'" :prop="`${index}.value`" :label="item.label" :required="item.required" :rules="[{ required: item.required, message: '请输入', trigger: 'blur' }]">
          <el-input v-model="item.value" size="large" :placeholder="item.placeholder" :maxlength="item.maxlength" :show-word-limit="item.showWordLimit" />
          <div v-if="item.desc" class="text-xs text-[#182b50] text-opacity-30 mt-1">
            {{ item.desc }}
          </div>
        </el-form-item>
        <el-form-item v-else-if="item.type === 'textarea'" :prop="`${index}.value`" :label="item.label" :required="item.required" :rules="[{ required: item.required, message: '请输入', trigger: 'blur' }]">
          <el-input v-model="item.value" size="large" type="textarea" rows="4" resize="none" :placeholder="item.placeholder" :maxlength="item.maxlength" :show-word-limit="item.showWordLimit" />
          <div v-if="item.desc" class="text-xs text-[#182b50] text-opacity-30 mt-1">
            {{ item.desc }}
          </div>
        </el-form-item>
        <el-form-item v-else-if="item.type === 'inputNumber'" :prop="`${index}.value`" :label="item.label" :required="item.required" :rules="[{ required: item.required, message: '请输入', trigger: 'blur' }]">
          <div>
            <el-input-number v-model="item.value" size="large" :min="1" :placeholder="item.placeholder" />
            <div v-if="item.desc" class="text-xs text-[#182b50] text-opacity-30 mt-1">
              {{ item.desc }}
            </div>
          </div>
        </el-form-item>
        <el-form-item v-else-if="item.type === 'select'" :prop="`${index}.value`" :label="item.label" :required="item.required" :rules="[{ required: item.required, message: '请选择', trigger: 'change' }]">
          <el-select v-model="item.value" class="w-full" size="large" :multiple="item.multiple" :placeholder="item.placeholder">
            <el-option v-for="option in item.options" :key="option.value" :label="option.label" :value="option.label" />
          </el-select>
          <div v-if="item.desc" class="text-xs text-[#182b50] text-opacity-30 mt-1">
            {{ item.desc }}
          </div>
        </el-form-item>

        <el-form-item v-else-if="item.type === 'tag'" :prop="`${index}.value`" :label="item.label" :required="item.required" :rules="[{ validator: validator(item), trigger: 'change' }]">
          <div>
            <div class="flex flex-wrap gap-3">
              <template v-for="(tag, childIndex) in item.value" :key="childIndex">
                <div class="border bordre-[#B0B7C3] rounded-sm min-h-[32px] inline-flex items-center px-3 py-1 text-xs text-[#182B50] text-opacity-80 break-all">
                  {{ tag }}
                  <el-icon class="cursor-pointer ml-1" color="#d2d5dc" @click="handleDelTag(item, childIndex)">
                    <Close />
                  </el-icon>
                </div>
              </template>
              <el-input v-if="item.focus" v-model="item.temp" autofocus style="width: 104px;" class="h-8" :placeholder="$t('form_input_placeholder')" @keypress.enter="handleAddTag(item)" @blur="handleAddTag(item)" />
              <div v-else class="border bordre-[#B0B7C3] border-dashed rounded-sm h-8 inline-flex items-center px-3  cursor-pointer" @click="handleFocusTag(item)">
                <span class="text-xs text-[#182B50] text-opacity-80">+ {{ $t('action_add') }}</span>
              </div>
            </div>
            <div v-if="item.desc" class="text-xs text-[#182b50] text-opacity-30 mt-1">
              {{ item.desc }}
            </div>
          </div>
        </el-form-item>
      </template>
    </el-form>
    <div>
      <el-button type="primary" size="large">
        {{ $t('start_running') }}
      </el-button>
    </div>
  </div>
</template>

<style scoped>

</style>
