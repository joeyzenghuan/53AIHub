import { ref } from 'vue'

function useEnv() {
  const { host, hostname } = window.location

  // https://hub.53ai.com/console/
  // https://hubtest.53ai.com/console/
  const isWorkEnv = ref<boolean>(host === 'hub.53ai.com')
  const isDevEnv = ref<boolean>(!isWorkEnv.value)
  const isOpLocalEnv = ref<boolean>(import.meta.env.VITE_PLATFORM === 'op-local')

  return {
    isWorkEnv,
    isDevEnv,
    isOpLocalEnv
  }
}

export { useEnv }
export default useEnv
