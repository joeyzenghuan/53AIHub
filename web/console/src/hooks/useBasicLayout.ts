import { computed } from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export function useBasicLayout() {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const isInMobile = computed(() => /Android|iPhone|SymbianOS|Windows Phone|iPad|iPod/gi.test(navigator.userAgent))
  const isInDingTalk = computed(() => /dingtalk/img.test(navigator.userAgent))

  const isSm = breakpoints.smaller('sm')
  const isMiddle = breakpoints.smaller('md')
  const isLarge = breakpoints.smaller('lg')
  const isXl = breakpoints.smaller('xl')

  return { isInMobile, isInDingTalk, isSm, isMiddle, isLarge, isXl }
}
