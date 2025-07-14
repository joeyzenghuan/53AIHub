import { ref } from 'vue'

interface UseVmodelOptions {
  props: any
  key?: string
  emits?: any
}
export default function useVmodel(options: UseVmodelOptions) {
  const { props, key = 'modelValue' } = options
  const proxy = ref(props[key])

  // watch(
  //   () => proxy.value,
  //   v => _emit(event, v),
  // )
  return proxy
}
