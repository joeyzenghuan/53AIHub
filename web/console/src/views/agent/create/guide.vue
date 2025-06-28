<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { nextTick, reactive, ref, watch } from 'vue'
import { useAgentFormStore } from './store'
import UploadImage from '@/components/Upload/image.vue'

import { copyToClip } from '@/utils/copy'
import { generateRandomId } from '@/utils'
import { generateInputRules } from '@/utils/form-rule'

const agentFormStore = useAgentFormStore()

const case_form_ref = ref()
const scene_form_ref = ref()
const use_case_list = ref(agentFormStore.form_data.use_cases.filter(item => item.type === 'case'))
const use_scene_list = ref([])
for (let i = 0; i < 3; i++) {
  const list = agentFormStore.form_data.use_cases.filter(item => item.type === 'scene')
  use_scene_list.value.push(list[i] || {
    id: '',
    image: '',
    scene: '',
    desc: '',
  })
}
const case_visible = ref(false)
const case_form = reactive({
  id: '',
  input_text: '',
  output_text: '',
})
const scene_visible = ref(false)
const scene_form = reactive({
  id: '',
  image: '',
  scene: '',
  desc: '',
})

const onCopy = async (text = '') => {
  await copyToClip(text)
  ElMessage.success(window.$t('action_copy_success'))
}
const onCaseOpen = async ({ data = {} } = {}) => {
  case_form.id = data.id || ''
  case_form.input_text = data.input_text || ''
  case_form.output_text = data.output_text || ''
  case_visible.value = true
  await nextTick()
  case_form_ref.value.clearValidate()
}
const onCaseDelete = ({ data = {}, index = -1 } = {}) => {
  use_case_list.value.splice(index, 1)
}
const onCaseConfirm = () => {
  case_form_ref.value.validate((valid: boolean) => {
    if (!valid)
      return
    const id = case_form.id || generateRandomId(8)
    const data = use_case_list.value.find(item => item.id === id)
    if (data) {
      data.input_text = case_form.input_text || ''
      data.output_text = case_form.output_text || ''
    }
    else {
      use_case_list.value.push({
        type: 'case',
        id,
        input_text: case_form.input_text || '',
        output_text: case_form.output_text || '',
      })
    }
    onCaseCancel()
  })
}
const onCaseCancel = () => {
  case_visible.value = false
}
const onSceneOpen = async ({ data = {} } = {}) => {
  scene_form.id = data.id || ''
  scene_form.image = data.image || ''
  scene_form.scene = data.scene || ''
  scene_form.desc = data.desc || ''
  scene_visible.value = true
  await nextTick()
  scene_form_ref.value.clearValidate()
}
const onSceneDelete = ({ data = {}, index = -1 } = {}) => {
  use_scene_list.value.splice(index, 1)
  use_scene_list.value.push({
    id: '',
    image: '',
    scene: '',
    desc: '',
  })
}
const onSceneConfirm = () => {
  scene_form_ref.value.validate((valid: boolean) => {
    if (!valid)
      return
    const id = scene_form.id || generateRandomId(8)
    const data = use_scene_list.value.find(item => item.id === id)
    if (data) {
      data.image = scene_form.image || ''
      data.scene = scene_form.scene || ''
      data.desc = scene_form.desc || ''
    }
    else {
      const index = use_scene_list.value.findIndex(item => !item.id)
      if (index >= 0) {
        use_scene_list.value.splice(index, 1, {
          type: 'scene',
          id,
          image: scene_form.image || '',
          scene: scene_form.scene || '',
          desc: scene_form.desc || '',
        })
      }
    }
    onSceneCancel()
  })
}
const onSceneCancel = () => {
  scene_visible.value = false
}

watch(() => use_case_list.value, () => {
  agentFormStore.form_data.use_cases = [...use_case_list.value, ...use_scene_list.value].filter(item => item.id)
}, { immediate: true, deep: true })
watch(() => use_scene_list.value, () => {
  agentFormStore.form_data.use_cases = [...use_case_list.value, ...use_scene_list.value].filter(item => item.id)
}, { immediate: true, deep: true })
</script>

<template>
  <div class="h-full overflow-y-auto relative">
    <div class="p-6 bg-white rounded">
      <h4 class="text-base text-[#1D1E1F]">
        {{ $t('usage_case') }}
      </h4>
      <div class="text-sm text-[#9A9A9A] mt-4">
        {{ $t('usage_case_desc') }}
      </div>
      <!-- <div class="flex flex-wrap gap-5 mt-5"> -->
      <!-- flex-none w-[48%] -->
      <!-- <div class="columns-2 gap-4 space-y-4"> -->
      <div class="flex flex-wrap gap-5 mt-5">
        <div
          v-for="(item, index) in use_case_list" :key="index"
          class="flex-none w-[48%] box-border  p-5 bg-[#F7F9FC] rounded relative group cursor-pointer break-inside-avoid"
        >
          <div class="bg-white rounded p-5 relative">
            <div class="text-sm text-[#9A9A9A]">
              {{ $t('input') }}
            </div>
            <div class="text-sm text-[#1D1E1F] break-words mt-4">
              {{ item.input_text || '--' }}
            </div>
            <div class="absolute right-8 -bottom-9">
              <svg-icon width="50" height="50" name="arrow-down" color="white" />
            </div>
          </div>
          <div class="bg-[#E6EEFF] rounded p-5 mt-4">
            <div class="flex items-center justify-between">
              <div class="text-sm text-[#9A9A9A]">
                {{ $t('output') }}
              </div>
              <svg-icon name="copy" color="#4F5052" @click="onCopy(item.output_text)" />
            </div>
            <div class="text-sm text-[#1D1E1F] text-wrap break-words whitespace-pre-wrap mt-4 truncate line-clamp-6" style="-webkit-line-clamp: 12;">
              {{ item.output_text || '--' }}
            </div>
          </div>
          <div
            class="absolute inset-0 items-center justify-center bg-[#393C40] bg-opacity-10 rounded hidden group-hover:flex"
          >
            <el-button type="primary" @click="onCaseOpen({ data: item })">
              {{ $t('action_edit') }}
            </el-button>
            <el-button @click="onCaseDelete({ data: item, index })">
              {{ $t('action_delete') }}
            </el-button>
          </div>
        </div>
        <div
          class="flex-none w-[48%] h-[140px] flex-center flex-col p-5 bg-[#F7F9FC] rounded cursor-pointer"
          @click.stop="onCaseOpen"
        >
          <el-icon size="28" color="#9A9A9A">
            <Plus />
          </el-icon>
          <p class="text-base text-[#9A9A9A] mt-4">
            {{ $t('action_add') }}
          </p>
        </div>
      </div>
    </div>
    <div class="p-6 bg-white rounded mt-6">
      <h4 class="text-base text-[#1D1E1F]">
        {{ $t('usage_scene') }}
      </h4>
      <div class="text-sm text-[#9A9A9A] mt-4">
        {{ $t('usage_scene_desc') }}
      </div>
      <div class="flex flex-wrap justify-between gap-5 mt-5">
        <div
          v-for="(item, index) in use_scene_list" :key="index"
          class="flex-1 max-w-[330px] px-4 box-border flex flex-col items-center text-center pt-3 pb-10 relative cursor-pointer group"
        >
          <div v-if="item.image" class="w-[220px] h-[205px]">
            <img :src="item.image" class="w-full h-full object-cover">
          </div>
          <div
            v-else class="w-[220px] h-[205px] border flex-center flex-col mx-auto"
            @click.stop="onSceneOpen({ data: item })"
          >
            <el-icon size="28" color="#9A9A9A">
              <Plus />
            </el-icon>
            <p class="text-base text-[#9A9A9A] mt-4">
              {{ $t('action_add') }}
            </p>
          </div>
          <template v-if="item.id">
            <h6 class="text-base text-[#1D1E1F] mt-5 text-center max-w-[10em] truncate" :title="item.scene || ''">
              {{ item.scene || '' }}
            </h6>
            <p class="text-xs text-[#9A9A9A] mt-4 text-center text-wrap break-words whitespace-pre-wrap max-w-[24em] truncate line-clamp-6" :title="item.desc || ''">
              {{ item.desc || '' }}
            </p>
            <div
              class="absolute inset-0 items-center justify-center bg-[#393C40] bg-opacity-10 rounded hidden group-hover:flex"
            >
              <el-button type="primary" @click.stop="onSceneOpen({ data: item })">
                {{ $t('action_edit') }}
              </el-button>
              <el-button @click="onSceneDelete({ data: item, index })">
                {{ $t('action_delete') }}
              </el-button>
            </div>
          </template>
          <template v-else>
            <el-skeleton v-if="!item.scene" class="mt-6" :rows="1" />
          </template>
        </div>
      </div>
    </div>

    <slot name="footer" />

    <el-dialog
      v-model="case_visible" :title="case_form.id ? $t('action_edit') : $t('action_add')" align-center
      width="600px"
    >
      <el-form ref="case_form_ref" :model="case_form" label-width="64px" label-position="left">
        <el-form-item :label="$t('input')" prop="input_text" :rules="[...generateInputRules({ message: 'form_input_placeholder' }), { max: 200, message: $t('form_input_placeholder_max_length', { max: 200 }) }]">
          <el-input v-model="case_form.input_text" size="large" :maxlength="200" show-word-limit />
        </el-form-item>
        <el-form-item :label="$t('output')" prop="output_text" :rules="[...generateInputRules({ message: 'form_input_placeholder' }), { max: 1000, message: $t('form_input_placeholder_max_length', { max: 1000 }) }]">
          <el-input v-model="case_form.output_text" type="textarea" size="large" rows="10" resize="none" :maxlength="1000" show-word-limit />
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="py-4 flex items-center justify-center">
          <ElButton class="w-[96px] h-[36px]" type="primary" @click="onCaseConfirm">
            {{ $t('action_confirm') }}
          </ElButton>
          <ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click="onCaseCancel">
            {{
              $t('action_cancel')
            }}
          </ElButton>
        </div>
      </template>
    </el-dialog>

    <el-dialog
      v-model="scene_visible" :title="scene_form.id ? $t('action_edit') : $t('action_add')" align-center
      width="600px"
    >
      <el-form ref="scene_form_ref" :model="scene_form" label-width="102px" label-position="left">
        <el-form-item :label="$t('pictorial_image')" prop="image" :rules="generateInputRules({ message: 'form_upload_placeholder' })">
          <UploadImage v-model="scene_form.image" class="!w-[120px] !h-[112px]" />
        </el-form-item>
        <el-form-item :label="$t('scene')" prop="scene" :rules="[...generateInputRules({ message: 'form_input_placeholder' }), { max: 20, message: $t('form_input_placeholder_max_length', { max: 20 }) }]">
          <el-input v-model="scene_form.scene" size="large" :maxlength="20" show-word-limit />
        </el-form-item>
        <el-form-item :label="$t('description')" prop="desc" :rules="[...generateInputRules({ message: 'form_input_placeholder' }), { max: 50, message: $t('form_input_placeholder_max_length', { max: 50 }) }]">
          <el-input v-model="scene_form.desc" type="textarea" size="large" rows="5" resize="none" :maxlength="50" show-word-limit />
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="py-4 flex items-center justify-center">
          <ElButton class="w-[96px] h-[36px]" type="primary" @click="onSceneConfirm">
            {{ $t('action_confirm') }}
          </ElButton>
          <ElButton class="w-[96px] h-[36px] text-[#1D1E1F]" type="info" plain @click="onSceneCancel">
            {{
              $t('action_cancel')
            }}
          </ElButton>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>

</style>
