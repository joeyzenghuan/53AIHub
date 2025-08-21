<template>
  <Codemirror
    ref="codemirrorRef"
    v-model="prompt"
    :disabled="disabled"
    class="w-full prompt-code"
    :class="[showLine ? '' : 'prompt-line--hidden']"
    :placeholder="placeholder"
    :indent-with-tab="false"
    :tab-size="2"
    :extensions="extensions"
    :style="$attrs.style"
    @change="onChange"
    @focus="emits('focus')"
    @blur="emits('blur')"
  />
  <!-- v-bind="{ ...$attrs }" -->

  <!-- 隐藏的 Tooltip 模板 -->
  <div v-show="false" ref="tooltipTemplate">
    <div class="variable-tooltip" style="padding: 16px; min-width: 300px">
      <div class="flex items-center gap-2">
        <el-image v-if="agentInfo.icon" :src="agentInfo.icon" class="size-8 rounded" />
        <p class="flex-1 text-sm text-[#1D1E1F] truncate">{{ agentInfo.name }}</p>
      </div>
    </div>
  </div>

  <div v-if="showToken" class="px-2 py-px text-right text-[#182B50] text-opacity-60 text-xs">{{ token }}个token</div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { Codemirror } from 'vue-codemirror'
// 移除 tiktoken 导入
import type { DecorationSet, Tooltip } from '@codemirror/view'
import { Decoration, EditorView, MatchDecorator, ViewPlugin, WidgetType, keymap, showTooltip } from '@codemirror/view'
import { StateEffect, StateField } from '@codemirror/state'

const props = withDefaults(
  defineProps<{
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
    agentInfo?: {
      icon: string
      name: string
    }
  }>(),
  {
    modelValue: '',
    disabled: false,
    placeholder: window.$t('form.input_placeholder'),
    showLine: false,
    showToken: false,
    variables: () => [],
    wordWrap: false,
    agentInfo: () => ({ icon: '', name: '' }),
  }
)

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
const tooltipTemplate = ref()

const token = ref(0)
const prompt = ref('')
const selectedIndex = ref(-1)

// 修复 tooltip 状态管理
const addTooltip = StateEffect.define<{ pos: number; above?: boolean; create: () => { dom: HTMLElement } } | null>()
const tooltipField = StateField.define<Tooltip | null>({
  create() {
    return null
  },
  update(tooltip, tr) {
    for (const e of tr.effects) {
      if (e.is(addTooltip)) return e.value
    }
    return tooltip
  },
  provide: f => showTooltip.from(f),
})

const findVariableByValue = (value: string) => {
  for (const group of props.variables) {
    const found = group.children.find(item => item.value === value)
    if (found) return { ...found, group: group.label }
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
  decoration: match => {
    const variable = findVariableByValue(match[0])
    if (variable) {
      return Decoration.replace({
        widget: new VariableWidget(variable?.label, match[1]),
      })
    }
    return null
  },
})

const variablePlugin = ViewPlugin.fromClass(
  class {
    variablePlugin: DecorationSet

    constructor(view: any) {
      this.variablePlugin = variableMatcher.createDeco(view)
    }

    update(update: any) {
      this.variablePlugin = variableMatcher.updateDeco(update, this.variablePlugin)
    }
  },
  {
    decorations: instance => instance.variablePlugin,
    provide: plugin =>
      EditorView.atomicRanges.of(view => {
        return view.plugin(plugin)?.variablePlugin || Decoration.none
      }),
  }
)

// 添加原生JavaScript token计算函数
const calculateTokens = (text: string): number => {
  if (!text || text.trim().length === 0) return 0

  // 基于GPT tokenizer的简化规则
  // 这个函数提供了一个相对准确的token估算
  // 实际GPT tokenizer更复杂，但这个方法对于大多数用例已经足够准确

  let tokenCount = 0
  let i = 0

  while (i < text.length) {
    const char = text[i]
    const charCode = char.charCodeAt(0)

    if (charCode >= 0x4e00 && charCode <= 0x9fff) {
      // 中文字符 - 每个中文字符通常对应1个token
      tokenCount += 1
      i++
    } else if (charCode >= 48 && charCode <= 57) {
      // 数字 0-9 - 连续数字通常被合并为一个token
      let numLength = 0
      while (i < text.length && text.charCodeAt(i) >= 48 && text.charCodeAt(i) <= 57) {
        numLength++
        i++
      }
      // 连续数字按长度计算，通常每3-4个数字对应1个token
      tokenCount += Math.ceil(numLength / 3.5)
    } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      // 英文字母 - 查找单词边界
      let wordLength = 0
      while (
        i < text.length &&
        ((text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) ||
          (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122))
      ) {
        wordLength++
        i++
      }
      // 英文单词通常按长度计算，短单词1个token，长单词按比例
      if (wordLength <= 3) {
        tokenCount += 1
      } else if (wordLength <= 6) {
        tokenCount += 1.5
      } else {
        tokenCount += Math.ceil(wordLength / 4)
      }
    } else if (char === ' ' || char === '\n' || char === '\t') {
      // 空白字符 - 通常不计入token
      i++
    } else {
      // 其他字符（标点符号、特殊字符等）
      // 标点符号通常与相邻字符合并为一个token
      tokenCount += 0.3
      i++
    }
  }

  return Math.round(tokenCount)
}

let _tokenTimer: any
const calcToken = () => {
  if (!props.showToken) return

  clearTimeout(_tokenTimer)
  _tokenTimer = setTimeout(() => {
    const content_html = prompt.value
    // 使用原生JavaScript计算token，替换tiktoken
    const tokens = calculateTokens(content_html)
    token.value = content_html.trim() ? tokens : 0
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
  editorView.value?.dispatch({
    changes: {
      from, // 保留已输入的 /
      to,
      insert: content,
    },
  })
}

const updateSelectedItem = () => {
  const items = tooltipRef.value?.querySelectorAll('.tooltip-item')
  items?.forEach((item: any, index) => {
    if (index === selectedIndex.value) {
      item.classList.add('selected')
      item.scrollIntoView({ block: 'nearest' })
    } else {
      item.classList.remove('selected')
    }
  })
}

function handleKeyDown(event: KeyboardEvent) {
  if (!tooltipRef.value) return

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
        const node = items[selectedIndex.value] as HTMLElement
        node.click()
        hideTooltip()
      }
      break
  }
}

function hideTooltip() {
  if (editorView.value) {
    editorView.value.dispatch({
      effects: addTooltip.of(null),
    })
  }
  document.removeEventListener('keydown', handleKeyDown, true)
}

const showVarTooltip = (pos: number, to: number) => {
  // 克隆模板中的 Tooltip
  const template = tooltipTemplate.value.querySelector('.variable-tooltip')
  const dom = template.cloneNode(true) as HTMLElement
  tooltipRef.value = dom

  props.variables.forEach(group => {
    // 添加分组标题
    const groupTitle = document.createElement('div')
    groupTitle.className = 'tooltip-title'
    groupTitle.textContent = group.label
    dom.appendChild(groupTitle)

    // 添加变量选项
    group.children.forEach(variable => {
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
  editorView.value?.dispatch({
    effects: addTooltip.of({
      pos,
      above: true,
      create: () => {
        return { dom }
      },
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
    EditorView.updateListener.of(update => {
      editorView.value = update.view
      // 在输入其他内容时关闭 tooltip
      if (update.docChanged) {
        update.view.dispatch({
          effects: addTooltip.of(null),
        })
      }
    }),
  ]
  if (props.wordWrap) options.push(EditorView.lineWrapping)

  if (props.variables && props.variables.length) {
    options.push(
      ...[
        variablePlugin,
        tooltipField,
        keymap.of([
          {
            key: '/',
            run(view) {
              const pos = view.state.selection.main.head

              // 延迟显示 tooltip
              setTimeout(() => {
                if (view.state.selection.main.head === pos + 1) {
                  // 确保用户没有继续输入
                  showVarTooltip(pos, pos + 1)
                }
              }, 200) // 200ms 延迟
              return false
            },
          },
        ]),
      ]
    )
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

watch(
  () => props.modelValue,
  () => {
    prompt.value = props.modelValue
    calcToken()
  },
  { immediate: true }
)

watch(
  () => props.variables,
  () => {
    if (codemirrorRef.value) {
      setTimeout(async () => {
        const oldPrompt = prompt.value
        prompt.value = ''
        await nextTick()
        prompt.value = oldPrompt
      }, 200)
    }
  },
  { deep: true }
)
// 新增：处理全局点击的方法
const handleGlobalClick = (event: MouseEvent) => {
  if (tooltipRef.value && !tooltipRef.value.contains(event.target as Node)) hideTooltip()
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
    const pos = editorView.value?.state.selection.main.head ?? 0
    showVarTooltip(pos, pos)
  },
  insertContent(content: string) {
    const pos = editorView.value?.state.selection.main.head ?? 0
    insertContent(pos, pos, content)
  },
  forceUpdate(text = '') {
    prompt.value = text
  },
  scrollToBottom,
})
</script>

<style>
.cm-focused {
  outline: none !important;
}
.prompt-line--hidden .cm-gutters {
  display: none !important;
}
.ͼ1 .cm-placeholder {
}
.ͼ1 .cm-scroller {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #182b50;
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
  color: #182b50;
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
  color: #2563eb;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.tooltip-item:hover,
.tooltip-item.selected {
  background-color: #f5f5f5;
}
</style>
