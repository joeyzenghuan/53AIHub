import { defineComponent } from 'vue'

type CallFun = (vnodeEl: HTMLElement) => void
type Funs = Record<'mountedCallFun' | 'updatedCallFun' | 'unmountedCallFun', CallFun>
export default ({ mountedCallFun, updatedCallFun, unmountedCallFun }: Funs) => {
  return defineComponent({
    props: ['vnode'],
    // props, ctx
    setup() {
      return {}
    },
    mounted() {
      mountedCallFun(this.$el)
    },
    updated() {
      updatedCallFun(this.$el)
    },
    unmounted() {
      unmountedCallFun(this.$el)
    },
    // ctx: any
    render(props: any) {
      return props.vnode
    }
  })
}
