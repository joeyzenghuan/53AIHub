import { getCurrentInstance, ref } from 'vue'

interface UseVmodelOptions {
  props: any
  key?: string
  emits?: any
}
export default function useVmodel(options: UseVmodelOptions) {
  const vm = getCurrentInstance()
  const { props, key = 'modelValue', emits } = options
  const _emit = emits || vm?.emit
  const event = `update:${key}`
  const proxy = ref(props[key])

  // watch(
  //   () => proxy.value,
  //   v => _emit(event, v),
  // )
  return proxy
}
