<script setup>
import { nextTick, ref, watch, watchEffect } from 'vue'
import MarkdownIt from 'markdown-it'
import mk from 'markdown-it-katex'
import xss from 'xss'
import hljs from 'highlight.js' // 代码高亮库

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  reasoningContent: {
    type: String,
    required: false,
  },
  options: {
    type: Object,
    default: () => ({}),
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const markdown_ref = ref(null)
const loading_ref = ref(null)

// 初始化 markdown-it
const md = new MarkdownIt({
  html: true, // 允许 HTML 标签
  breaks: true, // 转换 \n 为 <br>
  linkify: true, // 自动识别链接
  typographer: true,
  highlight: (code, lang) => { // 代码高亮处理
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${
          hljs.highlight(code, { language: lang, ignoreIllegals: true }).value
        }</code></pre>`
      }
      catch (__) {}
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(code)}</code></pre>`
  },
  ...props.options,
}).use(mk)

// 渲染结果
const compiledMarkdown = ref('')
// 修改后的addCopyButtons函数

// 添加一个变量来跟踪 loading 是否曾经为 true
const wasLoading = ref(props.loading)

// 监听 loading 属性的变化
watch(() => props.loading, (newValue) => {
  if (newValue === true)
    wasLoading.value = true
})

watchEffect(() => {
  const prefix = props.reasoningContent
    ? `<details ${wasLoading.value ? 'open' : ''}><summary>
<i></i>
<span>${
  props.content ? window.$t('completion_completed') : window.$t('completion_thinking')
}</span>
</summary>
${props.reasoningContent}
</details>`
    : ''

  compiledMarkdown.value = xss(md.render(prefix + props.content))
  nextTick(() => {
    const summary = markdown_ref.value.querySelector('details summary i')
    if (!summary)
      return
    summary.innerHTML = '<svg aria-hidden="true"  style="width: 16px; height: 16px;"><use xlink:href="#icon-star-link" fill=""></use></svg>'
  })
  // const markdown_el = markdown_ref.value
  // const loading_el = loading_ref.value
  // if (markdown_el && loading_el) markdown_el.appendChild(loading_el)
})
</script>

<template>
  <div ref="markdown_ref" class="markdown-body" :class="{ 'is-loading': loading }" v-html="compiledMarkdown" />
  <!-- <span v-show="loading" ref="loading_ref" class="dark:text-white w-[4px] h-[20px] block animate-blink" /> -->
</template>

<style lang="scss">
/* 引入代码高亮样式 */
@import 'highlight.js/styles/github.css';
@import 'github-markdown-css/github-markdown.css';

.markdown-body {
	width: max-content;
	max-width: 100%;
	position: relative;
	background-color: transparent;
	--fgColor-default: #1D1E1F;

	&.is-loading {
		&::after {
			content: '';
			display: inline-block;
			animation: blink 1.2s infinite steps(1, start);
			width: 4px;
			height: 20px;
			color: rgba(0, 0, 0, 0.7);
		}
	}

	details {
		padding: 6px 12px;
		background-color: white !important;
		font-size: 14px;
		color: #182b50;
		margin-bottom: 8px;
		white-space: pre-wrap;
	}
	details summary {
		cursor: pointer;
		color: rgba(24, 43, 80, 0.8);
		display: flex;
		align-items: center;
		gap: 4px;
	}

	details summary span {
		flex: 1;
	}

	details summary::marker {
		content: '';
	}

	details summary:after {
		content: '➤';
		display: inline-block;
		transition: transform 0.2s;
		transform: rotate(270deg);
		font-size: 12px;
	}

	details summary + p {
		margin-top: 10px;
	}

	details[open] summary:after {
		transform: rotate(90deg);
	}

	details:not([open]) > *:not(summary) {
		display: none !important;
	}
}
@media (prefers-color-scheme: dark) {
	.markdown-body, [data-theme="dark"] {
		color-scheme: light;
	}
}
</style>
