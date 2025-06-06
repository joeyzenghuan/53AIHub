import { copyToClip } from '@/utils/copy'

const handler = (el: any, binding: any) => {
  if (!el._copyHandler) {
    el._copyHandler = () => {
      copyToClip(binding.value)
        .then(() => {
          ElMessage.success(window.$t('action_copy_success'))
        })
    }
  }
  el.removeEventListener('click', el._copyHandler)
  el.addEventListener('click', el._copyHandler)
}
export default {
  mounted: handler,
  updated: handler,
}
