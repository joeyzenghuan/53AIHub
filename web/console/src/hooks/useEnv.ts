import { ref } from 'vue'

function useEnv() {
	const host = location.host
	const hostname = location.hostname
  const userAgent = navigator.userAgent

	// https://hub.53ai.com/console/
	// https://hubtest.53ai.com/console/
  const isWorkEnv = ref<boolean>(host === 'hub.53ai.com')
	const isDevEnv = ref<boolean>(!isWorkEnv.value)
	const isLocalEnv = ref<boolean>(/(127.0.0.1)|(localhost)|(192.168.\d.\d+)|/.test(hostname))
	const isOpLocalEnv = ref<boolean>(import.meta.env.VITE_PLATFORM === 'op-local')

  return {
    isWorkEnv,
    isDevEnv,
		isLocalEnv,
    isOpLocalEnv,
  }
}

export { useEnv }
export default useEnv
