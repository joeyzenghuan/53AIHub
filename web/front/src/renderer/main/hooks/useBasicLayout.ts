import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

export const useBasicLayout = () => {
  const isLgScreen = breakpoints.smaller('lg')
  const isMdScreen = breakpoints.smaller('md')
  const isSmScreen = breakpoints.smaller('sm')
  return {
    isLgScreen,
    isMdScreen,
    isSmScreen
  }
}