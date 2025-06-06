<script lang="ts" setup>
// 需要引入的库
import 'vue-cropper/dist/index.css'
import { VueCropper } from 'vue-cropper'
import { CirclePlus, RefreshRight, Remove } from '@element-plus/icons-vue'

import { reactive, ref, watch, nextTick } from 'vue'
// 封装的dialog组件
import { ElMessage } from 'element-plus'
import { API_HOST  } from '@/api/host'
import uploadApi from '@/api/modules/upload'

// 父组件传参props
interface IProps {
  type?: string // 上传类型, 企业logo / 浏览器logo
  allowTypeList?: string[] // 接收允许上传的图片类型
  limitSize?: number // 限制大小，单位MB
  fixedNumber?: number[] // 截图框的宽高比例
  fixedNumberAider?: number[] // 侧边栏收起截图框的宽高比例
  previewWidth?: number // 预览宽度
  title?: string // 裁剪标题
  showWidth?: number
  showHeight?: number
  action?: 'ibos' | 'python'
  uploadAvatar?: boolean
}

// 裁剪组件需要使用到的参数
interface Options {
  img: string | ArrayBuffer | null // 裁剪图片的地址
  info: true // 裁剪框的大小信息
  outputSize: number // 裁剪生成图片的质量 [1至0.1]
  outputType: string // 裁剪生成图片的格式
  canScale: boolean // 图片是否允许滚轮缩放
  autoCrop: boolean // 是否默认生成截图框
  autoCropWidth: number // 默认生成截图框宽度
  autoCropHeight: number // 默认生成截图框高度
  fixedBox: boolean // 固定截图框大小 不允许改变
  fixed: boolean // 是否开启截图框宽高固定比例
  fixedNumber: Array<number> // 截图框的宽高比例  需要配合centerBox一起使用才能生效
  full: boolean // 是否输出原图比例的截图
  canMove: boolean // 截图框能否拖动
  original: boolean // 上传图片按照原始比例渲染
  centerBox: boolean // 截图框是否被限制在图片里面
  infoTrue: boolean // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
  accept: string // 上传允许的格式
  fillColor: string
}

// 预览样式
interface IStyle {
  width: number | string
  height: number | string
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'systemLogo',
  allowTypeList: () => ['jpg', 'png', 'jpeg'],
  limitSize: 10,
  fixedNumber: () => [1, 1],
  fixedNumberAider: () => [1, 1],
  previewWidth: 160,
  title: '图片裁剪',
  showWidth: 300,
  showHeight: 300,
  action: 'ibos',
  uploadAvatar: false
}) // dialog的显示与隐藏

const emits = defineEmits(['confirm']) // 封装的api
const dialogVisible = ref<boolean>(false) // 自定义事件

// 裁剪组件需要使用到的参数
const options = reactive<Options>({
  img: '', // 需要剪裁的图片
  autoCrop: true, // 是否默认生成截图框
  autoCropWidth: 300, // 默认生成截图框的宽度
  autoCropHeight: 300, // 默认生成截图框的长度
  fixedBox: false, // 是否固定截图框的大小 不允许改变
  info: true, // 裁剪框的大小信息
  outputSize: 1, // 裁剪生成图片的质量 [1至0.1]
  outputType: 'png', // 裁剪生成图片的格式
  canScale: true, // 图片是否允许滚轮缩放
  fixed: true, // 是否开启截图框宽高固定比例
  fixedNumber: [1, 1], // 截图框的宽高比例 需要配合centerBox一起使用才能生效 1比1
  full: true, // 是否输出原图比例的截图
  canMove: false, // 截图框能否拖动
  original: false, // 上传图片按照原始比例渲染
  centerBox: true, // 截图框是否被限制在图片里面
  infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
  accept: 'image/jpeg,image/jpg,image/png,image/gif,image/x-icon',
  fillColor: 'transparent'
})

const getStyle = ref<IStyle>({
  width: '',
  height: ''
})

/* 允许上传的类型 */
const acceptType = ref<string[]>([])

// 裁剪后的预览样式信息
const previews: any = ref({})

// 裁剪组件Ref
const cropperRef: any = ref({})
// input组件Ref
const reuploadInput = ref<HTMLElement | null | undefined>()
const uploading = ref(false)

/* 上传图片前置拦截函数 */
const beforeUploadEvent = (file: File) => {
  const type = file.name.substring(file.name.lastIndexOf('.') + 1) // 获得图片上传后缀
  // 判断是否符合上传类型
  const isAllowTye = props.allowTypeList.includes(type)
  if (!isAllowTye) {
    ElMessage.error(`仅支持${acceptType.value.join('、')}格式的图片`)
    return false
  }
  return true
}

// 回显图片使用的方法
const onChange = (e: any) => {
  const { limitSize } = props
  const file = e.target.files[0]
  if (file.size > limitSize * 1024 * 1024)
    return ElMessage.warning(`图片上传大小不能超过${limitSize}MB`)
  const URL = window.URL || window.webkitURL
  // 上传图片前置钩子，用于判断限制类型用
  if (beforeUploadEvent(file)) {
    options.img = URL.createObjectURL(file)
    dialogVisible.value = true
  }
}
/* 重置裁剪组件 */
const refreshCrop = () => {
  // cropperRef裁剪组件自带很多方法，可以打印看看
  cropperRef.value.refresh()
}

/* 右旋转图片 */
const rotateRight = () => {
  cropperRef.value.rotateRight()
}

/* 放大缩小图片比例 */
const changeScale = (num: number) => {
  const scale = num || 1
  cropperRef.value.changeScale(scale)
}

// 点击上传
const uploadFile = async (type: string): Promise<void> => {
  if (uploading.value) return
  /* 打开新的上传文件无需生成新的input元素 */
  if (type === 'reupload') {
    reuploadInput.value?.click()
    return
  }
  let input: HTMLInputElement | null = document.createElement('input')
  input.type = 'file'
  input.accept = options.accept
  input.onchange = onChange
  input.click()
  await nextTick()
  input = null
}

/* 上传成功方法 */
const cropperSuccess = async (dataFile: File) => {
  // 在接口请求中需要上传file文件格式, 并且该接口需要改header头部为form-data格式
  try {
    const res = await uploadApi.upload(dataFile)
    return res.data
  } catch (error) {
    return {}
  }
}

// base64转图片文件
const dataURLtoFile = (dataUrl: string, filename: string) => {
  const arr = dataUrl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let len = bstr.length
  const u8arr = new Uint8Array(len)
  while (len--) u8arr[len] = bstr.charCodeAt(len)

  return new File([u8arr], filename, { type: mime })
}

// 上传图片（点击保存按钮）
const onConfirm = () => {
  uploading.value = true
  cropperRef.value.getCropData(async (data: string) => {
    const dataFile: File = dataURLtoFile(data, 'images.png')
    const res = await cropperSuccess(dataFile).finally(() => {
      uploading.value = false
    })
    const url = `${API_HOST}/api/preview/${res.preview_key || ''}`
    res.url = url
    emits('confirm', res)
    dialogVisible.value = false
  })
}

// 裁剪之后的数据
const previewHandle = (data: any) => {
  // previews.value = data // 预览img图片

  cropperRef.value.getCropData((data: string) => {
    previews.value.img = data
  })
}

watch(
  () => props,
  () => {
    /* 预览样式 */
    getStyle.value = {
      width: `${props.previewWidth}px`, // 预览宽度
      height: `${props.previewWidth / props.fixedNumber[0]}px`, // 预览高度
      border: '1px solid #e8e8e8',
      'border-radius': '2px'
    }
    // 上传格式tips信息
    acceptType.value = []
    for (let i = 0; i < props.allowTypeList.length; i++)
      acceptType.value.push(props.allowTypeList[i].toUpperCase())
  },
  {
    deep: true,
    immediate: true
  }
)

/* 向子组件抛出上传事件 */
defineExpose({
  uploadFile,
  open(url) {
    options.img = url
    dialogVisible.value = true
  }
})
</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    :title="$t('common.image_cropper')"
    width="550px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    append-to-body
    @close="dialogVisible = false"
  >
    <template #default>
      <div class="cropper">
        <div class="cropper_left">
          <VueCropper
            ref="cropperRef"
            :style="{ width: `${showWidth}px`, height: `${showHeight}px` }"
            :img="options.img"
            :info="true"
            :info-true="options.infoTrue"
            :auto-crop="options.autoCrop"
            :fixed-box="options.fixedBox"
            :can-move="options.canMove"
            :can-scale="options.canScale"
            :fixed-number="fixedNumber"
            :fixed="options.fixed"
            :full="options.full"
            :output-type="options.outputType"
            :center-box="options.centerBox"
            :fill-color="options.fillColor"
            @real-time="previewHandle"
          />
          <div class="reupload_box">
            <div class="reupload_text" @click="uploadFile('reload')">
              {{ $t('action.reupload') }}
            </div>
            <div>
              <el-icon class="rotate_right" @click="changeScale(1)">
                <CirclePlus />
              </el-icon>
              <el-icon class="rotate_right" @click="changeScale(-1)">
                <Remove />
              </el-icon>
              <el-icon class="rotate_right" @click="rotateRight">
                <RefreshRight />
              </el-icon>
            </div>
          </div>
        </div>

        <div class="cropper_right">
          <div class="preview_text">
            {{ $t('action.preview') }}
          </div>
          <div :style="getStyle" class="previewImg">
            <img :style="previews.img" :src="previews.img" alt="" />
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <span class="dialog-footer">
        <el-button size="large" @click="dialogVisible = false">
          {{ $t('action.cancel') }}
        </el-button>
        <el-button size="large" type="" @click="refreshCrop">
          {{ $t('action.reset') }}
        </el-button>
        <el-button size="large" type="primary" :loading="uploading" @click="onConfirm">
          {{ $t('action.confirm') }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.cropper {
  width: 100%;
  height: 330px;
  display: flex;
  overflow: hidden;
}
.cropper_left {
  display: flex;
  flex-direction: column;
}

.reupload_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

.reupload_text {
  color: var(--primary-color);
  cursor: pointer;
}
.cropper_right {
  flex: 1;
  margin-left: 16px;
}

.rotate_right {
  margin-left: 16px;
  cursor: pointer;
}

.preview_text {
  margin-bottom: 12px;
}
</style>
