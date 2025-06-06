<script setup lang="ts">
import { onMounted } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import settingApi from '@/api/modules/setting'

// 将插入样式和脚本的函数移到 onMounted 外部，提高可读性和复用性
const insertStyle = (content: string) => {
  if (!content) return

  const trimmed = content.trim()
  const type = 'style'
  const tag = `<${type}`
  try {
    if (trimmed.toLowerCase().startsWith(tag)) {
      document.head.insertAdjacentHTML('beforeend', trimmed)
    } else {
      const element = document.createElement(type)
      element.innerHTML = trimmed
      document.head.appendChild(element)
    }
  } catch (error) {
    console.error(`Failed to insert ${type} content:`, error)
  }
}

const insertScript = (content: string) => {
  if (!content) return

  const trimmed = content.trim()
  const node = document.createElement('div')
  node.innerHTML = trimmed
  const scripts = node.querySelectorAll('script')

  if (scripts.length) {
    scripts.forEach((script) => {
      const newScript = document.createElement('script')
      if (script.src) {
        newScript.src = script.src
      } else {
        newScript.type = 'text/javascript'
        newScript.appendChild(document.createTextNode(script.innerHTML))
      }
      document.body.appendChild(newScript)
    })
  } else {
    const newScript = document.createElement('script')
    newScript.type = 'text/javascript'
    newScript.appendChild(document.createTextNode(content))
    document.body.appendChild(newScript)
  }
}

onMounted(() => {
  settingApi.group.get('third_party_statistic').then((res) => {
    const items = {
      style: res.data.find((item) => item.key === 'third_party_statistic_css')?.value || '',
      script: res.data.find((item) => item.key === 'third_party_statistic_header')?.value || ''
    }

    insertStyle(items.style)
    insertScript(items.script)
  }).catch(error => {
    console.error('Failed to fetch third party statistic settings:', error)
  })
})
</script>

<template>
  <ElConfigProvider :locale="zhCn" :input="{ spellcheck: false }">
    <RouterView />
  </ElConfigProvider>
</template>
