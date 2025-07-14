import { computed } from 'vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

export const useBasicLayout = () => {
  const isLgScreen = breakpoints.smaller('lg')
  const isMdScreen = breakpoints.smaller('md')
  const isSmScreen = breakpoints.smaller('sm')

  const isInMobile = computed(() => {
    const userAgent = navigator.userAgent
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
  })
  return {
    isLgScreen,
    isMdScreen,
    isSmScreen,
    isInMobile
  }
}