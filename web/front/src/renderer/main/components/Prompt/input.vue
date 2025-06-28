<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { Codemirror } from 'vue-codemirror'
// import { get_encoding } from 'tiktoken'
import type { DecorationSet, Tooltip } from '@codemirror/view'
import { Decoration, EditorView, MatchDecorator, ViewPlugin, WidgetType, keymap, showTooltip } from '@codemirror/view'
import { StateEffect, StateField } from '@codemirror/state'

const props = withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
  disabled?: boolean
  // 左边显示的行号
  showLine?: boolean
  showToken?: boolean
  variables?: {
    label: string
    children: {
      label: string
      value: string
    }[]
  }[]
  wordWrap?: boolean
}>(), {
  modelValue: '',
  disabled: false,
  placeholder: '',
  showLine: false,
  showToken: false,
  variables: () => [],
  wordWrap: true,
})

const emits = defineEmits<{
  (e: 'change', data: any): void
  (e: 'input', data: any): void
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const codemirrorRef = ref()
const editorView = ref<EditorView | null>(null)
const tooltipRef = ref<HTMLElement | null>(null)

const token = ref(0)
const prompt = ref('')
const selectedIndex = ref(-1)

// 添加 tooltip 状态管理
const addTooltip = StateEffect.define<{ pos: number }>()
const tooltipField = StateField.define<readonly Tooltip[]>({
  create() { return null },
  update(tooltips, tr) {
    for (const e of tr.effects) {
      if (e.is(addTooltip))
        return e.value
    }
    return tooltips
  },
  provide: f => showTooltip.from(f),
})

const findVariableByValue = (value: string) => {
  for (const group of props.variables) {
    const found = group.children.find(item => item.value === value)
    if (found)
      return { ...found, group: group.label }
  }
  return null
}
class VariableWidget extends WidgetType {
  name: string
  value: string
  constructor(name: string, value: string) {
    super()
    this.name = name
    this.value = value
  }

  eq(other: any) {
    return this.name === other.name
  }

  toDOM() {
    const elt = document.createElement('span')
    elt.style.cssText = `
      color: rgb(42, 100, 231);
      padding: 0 4px;`
    elt.textContent = this.name
    return elt
  }

  ignoreEvent() {
    return false
  }
}
const variableMatcher = new MatchDecorator({
  regexp: /(\{\#(\S+?)\#\}|\{\{(\S+?)\}\})/g,
  decoration: (match) => {
    const variable = findVariableByValue(match[0])
    if (variable) {
      return Decoration.replace({
        widget: new VariableWidget(variable?.label, match[1]),
      })
    }
    else {
      return ''
    }
  },
})

const variablePlugin = ViewPlugin.fromClass(class {
  variablePlugin: DecorationSet
  constructor(view: any) {
    this.variablePlugin = variableMatcher.createDeco(view)
  }

  update(update) {
    this.variablePlugin = variableMatcher.updateDeco(update, this.variablePlugin)
  }
}, {
  decorations: instance => instance.variablePlugin,
  provide: plugin => EditorView.atomicRanges.of((view) => {
    return view.plugin(plugin)?.variablePlugin || Decoration.none
  }),
})

let _tokenTimer: any
const calcToken = () => {
  if (!props.showToken)
    return

  clearTimeout(_tokenTimer)
  _tokenTimer = setTimeout(() => {
    const content_html = prompt.value
    // const encoding = get_encoding('cl100k_base')
    // const tokens = encoding.encode(content_html)
    // encoding.free()
    // token.value = content_html.trim() ? tokens.length : 0
  }, 200)
}

const onChange = () => {
  nextTick(() => {
    emits('update:modelValue', prompt.value)
    emits('change', prompt.value)
    emits('input', prompt.value)
  })
  calcToken()
}

const insertContent = (from: number, to: number, content: string) => {
  editorView.value.dispatch({
    changes: {
      from, // 保留已输入的 /
      to,
      insert: content,
    },
  })
}

const updateSelectedItem = () => {
  const items = tooltipRef.value.querySelectorAll('.tooltip-item')
  items.forEach((item: HTMLElement, index) => {
    if (index === selectedIndex.value) {
      item.classList.add('selected')
      item.scrollIntoView({ block: 'nearest' })
    }
    else {
      item.classList.remove('selected')
    }
  })
}
const hideTooltip = () => {
  if (editorView.value) {
    editorView.value.dispatch({
      effects: addTooltip.of(null),
    })
  }
  document.removeEventListener('keydown', handleKeyDown, true)
}
const handleKeyDown = (event: KeyboardEvent) => {
  if (!tooltipRef.value)
    return

  const items = tooltipRef.value.querySelectorAll('.tooltip-item')
  switch (event.key) {
    case 'ArrowDown':
    case 'ArrowUp':
      event.preventDefault()
      event.stopPropagation()
      const direction = event.key === 'ArrowDown' ? 1 : -1
      selectedIndex.value = Math.max(0, Math.min(selectedIndex.value + direction, items.length - 1))
      updateSelectedItem()
      break
    case 'Enter':
      event.preventDefault()
      event.stopPropagation()
      if (selectedIndex.value >= 0) {
        const node = items[selectedIndex.value]
        node.click()
        hideTooltip()
      }
      break
  }
}

const showVarTooltip = (pos: number, to: number) => {
  // 创建 tooltip 内容
  const dom = document.createElement('div')
  dom.className = 'variable-tooltip'
  tooltipRef.value = dom

  props.variables.forEach((group) => {
    const groupTitle = document.createElement('div')
    groupTitle.className = 'tooltip-title'
    groupTitle.textContent = group.label
    dom.appendChild(groupTitle)

    group.children.forEach((variable) => {
      const item = document.createElement('div')
      item.className = 'tooltip-item'
      item.textContent = variable.label
      item.dataset.value = variable.value
      item.onclick = () => {
        insertContent(pos, to, variable.value)
        hideTooltip()
      }
      dom.appendChild(item)
    })
  })

  // 显示 tooltip
  editorView.value.dispatch({
    effects: addTooltip.of({
      pos,
      above: true,
      create: () => ({ dom }),
    }),
  })

  nextTick(() => {
    // 重置选中索引
    selectedIndex.value = 0
    updateSelectedItem()
    document.addEventListener('keydown', handleKeyDown, true)
  })
}

const extensions = computed(() => {
  const options = [
    EditorView.updateListener.of((update) => {
      editorView.value = update.view

      // 在输入其他内容时关闭 tooltip
      if (update.docChanged) {
        update.view.dispatch({
          effects: addTooltip.of(null),
        })
      }
    }),
  ]
  if (props.wordWrap)
    options.push(EditorView.lineWrapping)

  if (props.variables && props.variables.length) {
    options.push(...[
      variablePlugin,
      tooltipField,
      keymap.of([{
        key: '/',
        run(view) {
          const pos = view.state.selection.main.head

          // 延迟显示 tooltip
          setTimeout(() => {
            if (view.state.selection.main.head === pos + 1) { // 确保用户没有继续输入
              showVarTooltip(pos, pos + 1)
            }
          }, 200) // 200ms 延迟
          return false
        },
      }]),
    ])
  }
  return options
})

const scrollToBottom = () => {
  nextTick(() => {
    if (editorView.value) {
      const lastLine = editorView.value.state.doc.lines - 1
      const lastLineEnd = editorView.value.state.doc.line(lastLine).to
      editorView.value.dispatch({
        selection: { anchor: lastLineEnd, head: lastLineEnd },
        scrollIntoView: true,
      })
    }
  })
}

watch(() => props.modelValue, () => {
  prompt.value = props.modelValue
  calcToken()
}, { immediate: true })

watch(() => props.variables, () => {
  if (codemirrorRef.value) {
    setTimeout(async () => {
      const oldPrompt = prompt.value
      prompt.value = ''
      await nextTick()
      prompt.value = oldPrompt
    }, 200)
  }
}, { deep: true })
// 新增：处理全局点击的方法
const handleGlobalClick = (event: MouseEvent) => {
  if (tooltipRef.value && !tooltipRef.value.contains(event.target as Node))
    hideTooltip()
}

// 设置和清理全局点击事件监听器
onMounted(() => {
  document.addEventListener('click', handleGlobalClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleGlobalClick)
})

defineExpose({
  showTooltip() {
    const pos = Math.max(editorView.value.state.doc.length, 0)
    showVarTooltip(pos, pos)
  },
  insertContent(content: string) {
    const pos = Math.max(editorView.value.state.doc.length, 0)
    insertContent(pos, pos, content)
  },
  forceUpdate(text = '') {
    prompt.value = text
  },
  scrollToBottom,
})
</script>

<template>
  <Codemirror ref="codemirrorRef" v-model="prompt" :disabled="disabled" class="w-full prompt-code"
    :class="[showLine ? '' : 'prompt-line--hidden']" :placeholder="$t(placeholder)" :indent-with-tab="false"
    :tab-size="2" :extensions="extensions" :style="$attrs.style" @change="onChange" @focus="emits('focus')"
    @blur="emits('blur')" />
  <!-- v-bind="{ ...$attrs }" -->

  <div v-if="showToken" class="px-2 py-px text-right text-[#182B50] text-opacity-60 text-xs">
    {{ token }}个token
  </div>
</template>

<style>
.cm-focused {
  outline: none !important;
}

.prompt-line--hidden .cm-gutters {
  display: none !important;
}

.ͼ1 .cm-placeholder {}

.ͼ1 .cm-scroller {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #182B50;
}

.ͼ2 .cm-activeLine {
  background: none !important;
}

.variable-tooltip {
  width: 150px;
  max-height: 250px;
  overflow-y: auto;
  border: none !important;
  background-color: white !important;
  padding: 4px 4px;
  border-radius: 4px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

.tooltip-title {
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  color: #182B50;
  opacity: 0.6;
  cursor: default;
  padding: 0px 8px;
  margin-top: 4px;
}

.tooltip-item {
  padding: 0px 8px;
  height: 24px;
  line-height: 24px;
  cursor: pointer;
  font-size: 12px;
  color: #2563EB;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.tooltip-item:hover,
.tooltip-item.selected {
  background-color: #f5f5f5;
}
</style>
