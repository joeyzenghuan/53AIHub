import { copyToClip } from '@/utils/copy'

const handler = (el: any, binding: any) => {
  el._copyText = binding.value
  if (!el._copyHandler) {
    el._copyHandler = function (event: Event) {
      event.stopPropagation() // 阻止事件冒泡到父级
      copyToClip(this._copyText).then(() => {
        ElMessage.success(window.$t('common.copied'))
      })
    }
  }
  el.removeEventListener('click', el._copyHandler)
  el.addEventListener('click', el._copyHandler)
}
export default {
  mounted: handler,
  updated: handler,
  unmounted: (el: any) => {
    el.removeEventListener('click', el._copyHandler)
  }
}
