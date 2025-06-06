<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { CircleCloseFilled, Microphone } from '@element-plus/icons-vue'

// import FileUpload from '@/components/FileUpload/index.vue'

// import { fileUpload } from '@/components/FileUpload/index.ts'

import { formatAudioTime, generateRandomId } from '@/utils'
import { blobToFile, fileToDataURL } from '@/utils/file'

const props = withDefaults(defineProps<{
  placeholder?: string
  fileUpload?: any
  mainColor?: string
  speechToText?: boolean
	disabled?: boolean
}>(), {
	placeholder: 'message_input_placeholder',
  fileUpload: {
    image: {
      enabled: false,
    },
  },
  mainColor: '#2563EB',
  speechToText: false,
	disabled: false
})

const emits = defineEmits<{
  (e: 'confirm', data: any): void
}>()

const recWaveRef = ref()
const fileUploadRef = ref()

const uuid = `chat-input_${generateRandomId(8)}`
const MIN_TIME = 3

const inputFocus = ref(false)

const state = reactive({
  question: '',
  chatbi_db_id: '',
  oFileList: [],
})
const input = reactive({
  remote_url: '',
})
const record = reactive({
  recording: false,
  time: 0,
})
const MAX_RECORD_TIME = 60
let recordTimer: any

const imageConfig = computed(() => {
  return props.fileUpload.image || { enabled: false, transfer_methods: [], number_limits: 6 }
})
const imageLimit = computed(() => {
  return imageConfig.value.number_limits - state.oFileList.length
})
const inputOpen = computed(() => {
  return record.recording ? false : (inputFocus.value || state.oFileList.length || state.question.trim())
})

const buttonDisabled = computed(() => {
  if (props.disabled) return true
  if (state.oFileList.length)
    return !state.oFileList.every(item => item.percentage === 100)

  return !(state.question || '').trim()
})

const handleUpload = () => {
  fileUploadRef.value.trigger()
}
const onProgressFile = async (e) => {
  if (!e.url) {
    const url = await fileToDataURL(e.raw)
    e.url = url

    e.upload_file_id = e.id || ''
    e.type = 'image'
    e.is_error = 1
    e.transfer_method = 'local_file'
    e.belongs_to = 'user'
  }
}
const onSuccessFile = async (e) => {
  e.upload_file_id = e.id
  e.is_error = 0
}

const onErroFile = (item) => {
  item.is_error = 1
}
const handleRemoveFile = (index: number) => {
  const file = state.oFileList[index]
  state.oFileList.splice(index, 1)
  if (file.raw)
  	fileUploadRef.value.handleRemove(file.raw)
}

const handleAddFile = () => {
  if (!imageLimit.value || !input.remote_url)
    return
  state.oFileList.push({
    type: 'image',
    transfer_method: 'remote_url',
    url: input.remote_url,
    upload_file_id: '',
    is_error: 0,
    belongs_to: 'user',
    percentage: 100,
  })
  input.remote_url = ''
}

const handleFocus = () => {
  inputFocus.value = true
}

let recContext: any = null
let recWave: any = null

const loadRecorder = async () => {
// 必须引入的核心
  const Recorder = (await import('recorder-core')).default
  // 引入mp3格式支持文件；如果需要多个格式支持，把这些格式的编码引擎js文件放到后面统统引入进来即可
  await import('recorder-core/src/engine/mp3')
  await import('recorder-core/src/engine/mp3-engine')

  // 可选的插件支持项，这个是波形可视化插件
  await import('recorder-core/src/extensions/waveview')
  return Recorder
}

const recClose = (cancel = true) => {
  if (!recContext)
    return
  recContext.stop((blob, duration) => {
    clearInterval(recordTimer)
    record.recording = false
    record.time = duration
    recContext.close()
    recContext = null

    if (cancel)
      return
    const file = blobToFile(blob, `${Date.now()}.mp3`)
    fileUpload(file)
      .then((res) => {
        emits('confirm', {
          question: '',
          files: [
            {
              type: 'audio',
              transfer_method: 'local_file',
              url: res.url,
              is_error: 0,
              belongs_to: 'user',
              upload_file_id: res.id,
            },
          ],
          chatbi_db_id: state.chatbi_db_id,
        })
      })
  })
}
const recOpen = async () => {
  const Recorder = await loadRecorder()
  // 创建录音对象
  recContext = Recorder({
    type: 'mp3', // 录音格式，可以换成wav等其他格式
    sampleRate: 16000, // 录音的采样率，越大细节越丰富越细腻
    bitRate: 16, // 录音的比特率，越大音质越好
    onProcess: (buffers, powerLevel, bufferDuration, bufferSampleRate, newBufferIdx, asyncEnd) => {
      // 录音实时回调，大约1秒调用12次本回调
      // 可实时绘制波形，实时上传（发送）数据
      if (recWave)
        recWave.input(buffers[buffers.length - 1], powerLevel, bufferSampleRate)
    },
  })

  // 打开录音，获得权限
  recContext.open(() => {
    record.recording = true
    nextTick(() => {
      recWave = Recorder.WaveView({ elem: recWaveRef.value })
      record.time = 0
      if (recordTimer)
        clearInterval(recordTimer)
      recordTimer = setInterval(() => {
        record.time += 1
        if (MAX_RECORD_TIME === record.time)
          recClose(false)
      }, 1000)
      recContext.start()
    })
  }, (msg: string, isUserNotAllow: boolean) => {
    // 用户拒绝了录音权限，或者浏览器不支持录音
    ElMessage.warning(isUserNotAllow ? '未授权浏览器录音权限' : '无可用麦克风')
  })
}
const handleRecord = () => {
  recOpen()
}

const handleRecordStop = () => {
  if (record.time < MIN_TIME)
    return ElMessage.warning(`录音时间至少${MIN_TIME}秒`)
  recClose(false)
}
const handleRecordCancel = () => {
  recClose(true)
}
const handleSubmit = () => {
  if (buttonDisabled.value)
    return
  emits('confirm', {
    question: state.question,
    files: [...state.oFileList],
    chatbi_db_id: state.chatbi_db_id,
  })
}
const handleEnter = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    handleSubmit()
  }
}

const findParent = (el: any): boolean => {
  if (el.classList && el.classList.contains(uuid))
    return true
  if (el.parentNode)
    return findParent(el.parentNode)
  return false
}
const hideInputWrap = (e) => {
  if (!findParent(e.target))
    inputFocus.value = false
}

onMounted(() => {
  document.addEventListener('click', hideInputWrap)
})
onBeforeUnmount(() => {
  // 移除监听器
  document.removeEventListener('click', hideInputWrap)
  recClose(true)
})

defineExpose({
  set question(val: string) {
    state.question = val
  },
  get question() {
    return state.question
  },
  clearFiles() {
    // files.value = []
    fileUploadRef.value?.clearFiles()
  },
})
</script>

<template>
  <div
    class="w-full m-auto border rounded bg-white relative input"
    :class="[uuid]"
    :style="{ borderColor: inputOpen ? mainColor : '' }"
  >
    <div v-if="inputOpen && imageConfig.enabled" class="h-10 flex gap-4 border-b mx-4">
      <div v-if="false" class="flex items-center gap-1 cursor-pointer">
        <span class="text-xs text-[#182B50CC]">文档</span>
      </div>
      <template v-if="imageConfig.enabled">
        <!-- 避免tooltip隐藏后fileupload销毁 无法得到上传内容 -->
        <div v-show="false">
          <FileUpload ref="fileUploadRef" v-model:file-list="state.oFileList" :size="10" multiple :limit="imageConfig.number_limits" accept=".jpg,.png" @progress="onProgressFile" @success="onSuccessFile" />
        </div>
        <el-tooltip
          v-if="imageConfig.transfer_methods.includes('remote_url')"
          effect="light"
          trigger="click"
          placement="top"
          :append-to="`.${uuid}`"
          :show-arrow="false"
          popper-class="corp-switch-popper"
        >
          <template #content>
            <div class="w-[280px]">
              <div class="border flex items-center p-1 rounded">
                <el-input v-model="input.remote_url" placeholder="将图片链接粘贴至此处" type="text" class="flex-1" style="--el-input-text-color: #182B50; --el-input-bg-color: transparent;--el-border-color: none; --el-input-focus-border: none;  --el-input-hover-border: none; --el-input-hover-border-color: none; --el-input-focus-border-color: none;" @keypress.enter="handleAddFile" />
                <el-button :disabled="!input.remote_url" type="primary" @click="handleAddFile">
                  好的
                </el-button>
              </div>
              <template v-if="imageConfig.transfer_methods.includes('local_file')">
                <div class="flex-center my-3">
                  <div class="w-[47px] h-px bg-[#EDEEF1]" />
                  <span class="text-xs text-[#182B50] text-opacity-40 px-3">OR</span>
                  <div class="w-[47px] h-px bg-[#EDEEF1]" />
                </div>
                <div class="flex-center pb-2">
                  <div class="flex items-center gap-1 text-xs text-[#2563EB] cursor-pointer" @click="handleUpload">
                    <svg-icon name="image" width="16px" height="16px" />
                    从本地上传
                  </div>
                </div>
              </template>
            </div>
          </template>
          <div class="flex items-center gap-1 cursor-pointer">
            <svg-icon name="image" width="14px" height="14px" color="#525D78" />
            <span class="text-xs text-[#182B50CC]">图片</span>
          </div>
        </el-tooltip>

        <div v-else v-debounce class="flex items-center gap-1 cursor-pointer" @click="handleUpload">
          <svg-icon name="image" width="14px" height="14px" color="#525D78" />
          <span class="text-xs text-[#182B50CC]">图片</span>
        </div>
      </template>

      <div v-if="false" class="flex items-center gap-1 cursor-pointer">
        <span class="text-xs text-[#182B50CC]">音频</span>
      </div>
    </div>
    <div :class="[inputOpen ? '' : 'flex items-center']" class="pl-2 pr-4 py-3">
      <div v-if="false" class="columns-3 gap-3">
        <template v-for="item in [1, 2, 3]">
          <div class="h-12 rounded-md px-3 relative flex items-center gap-2 bg-[#F6F7F9]">
            <img class="w-8 h-8" src="">
            <div class="flex-1 overflow-hidden">
              <div class="text-sm text-[#182B50] truncate">
                英氏_婴幼儿护理英氏_婴幼儿护理英氏_婴幼儿护理
              </div>
              <div class="text-xs text-[#182B5099]">
                解析中 30%
              </div>
            </div>
            <div class="absolute left-0 top-0 bottom-0 w-1/2 bg-[#2563EB14]" />
            <div class="absolute -right-2 -top-2 p-1 cursor-pointer">
              <el-icon color="#8C929F">
                <CircleCloseFilled />
              </el-icon>
            </div>
          </div>
        </template>
      </div>
      <div v-if="state.oFileList.length" class="flex flex-wrap gap-2">
        <template v-for="(item, index) in state.oFileList" :key="item.uid">
          <div class="flex-none h-12 w-12 relative bg-[#F6F7F9] group">
            <el-image v-if="item.url" class="w-12 h-12 rounded" fit="cover" :src="item.url" @error="onErroFile(item)" />
            <div v-if="item.percentage < 100" class="absolute top-0 left-0 right-0 bottom-0 rounded bg-black/50 flex-center text-sm text-white">
              {{ item.percentage }}%
            </div>

            <div class="w-4 h-4 absolute -right-2 -top-2 cursor-pointer bg-white rounded-full invisible group-hover:visible" @click="handleRemoveFile(index)">
              <el-icon color="#8C929F" class="!absolute left-0 top-0">
                <CircleCloseFilled />
              </el-icon>
            </div>
          </div>
        </template>
      </div>
      <ElInput
        v-model="state.question"
        :placeholder="$t(placeholder)"
        type="textarea"
				:class="{ 'pointer-events-none': disabled }"
        :rows="inputOpen ? 3 : 1"
        style="--el-input-text-color: #182B50; --el-input-bg-color: transparent;--el-border-color: none; --el-input-focus-border: none;  --el-input-hover-border: none; --el-input-hover-border-color: none; --el-input-focus-border-color: none;"
        resize="none"
        :maxlength="10000"
        @focus="handleFocus"
        @keypress="handleEnter"
      />
      <div class="flex justify-end items-center gap-1">
        <div v-if="speechToText" v-debounce class="flex-center px-2 cursor-pointer" @click="handleRecord">
          <el-icon size="18" color="rgba(24, 43, 80, 0.8)">
            <Microphone />
          </el-icon>
        </div>
        <el-button :color="mainColor" style="--el-button-border-color: transparent; --el-button-disabled-border-color:transparent;" :disabled="buttonDisabled" @click="handleSubmit">
          {{ $t('action_send') }}
        </el-button>
      </div>
    </div>
    <div v-if="record.recording" class="absolute left-0 right-0 top-0 bottom-0 px-4 rounded-md flex items-center bg-[#F5F8FF]">
      <div class="text-sm text-[#9EA6BA]">
        现在讲...
      </div>
      <div class="flex-1 flex-center gap-3">
        <div ref="recWaveRef" class="flex-none w-32 h-10 rec-wave-bar" />
        <div class="text-sm text-[#2563EB]">
          {{ MAX_RECORD_TIME - record.time }}''后停止录音
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div v-debounce class="cursor-pointer" @click="handleRecordStop">
          <svg-icon name="paused" color="#2563EB" width="20" />
        </div>
        <el-icon v-debounce class="cursor-pointer" size="20" color="#CCCCCC" @click="handleRecordCancel">
          <CircleCloseFilled />
        </el-icon>
        <div class="text-sm text-[#1B2B51]">
          {{ formatAudioTime(record.time) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .rec-wave-bar > div {
	width: 100%;
	height: 100%;
}
</style>
