import { router } from '@/router'

let _routing = false
const handler = (el: any, binding: any) => {
  const params = binding.value
  const modifiers = binding.modifiers
  el.addEventListener('click', () => {
    if (_routing)
      return
    _routing = true
    if (modifiers.push)
      router.push(params)
    else if (modifiers.back)
      router.back()

    const timer = setTimeout(() => {
      _routing = false
      clearTimeout(timer)
    }, 1000)
  })
}
export default {
  mounted: handler,
  updated: handler,
}
