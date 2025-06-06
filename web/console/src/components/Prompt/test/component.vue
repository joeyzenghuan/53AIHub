<script>
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'
import { CaretBottom } from '@element-plus/icons-vue'

export default {
  components: {
    NodeViewWrapper,
    CaretBottom,
  },

  props: nodeViewProps,

  methods: {
    handleInput(e) {
      const newContent = e.target.innerText.trim()

      // 立即清空可见内容（保持与存储值一致）
      if (newContent === '')
        e.target.innerText = ''

      this.updateAttributes({ value: newContent })
    },

    handleBlur(e) {
      // 确保 blur 时同步最新状态
      this.handleInput(e)
    },

    handleCommand(value) {
      this.updateAttributes({ value })
    },
    handleWrapperClick() {
      this.$refs.contentEl.focus()
    },
  },
}
</script>

<template>
  <NodeViewWrapper as="span" class="mx-1">
    <span class="py-px px-1 rounded bg-[#F1F5FD] text-sm text-[#91B1F5] outline-none" @click="handleWrapperClick">
      <span
        ref="contentEl"
        contenteditable="true"
        :data-placeholder="node.attrs.defaultValue"
        class="content-editable outline-none"
        :class="{ empty: !node.attrs.value }"
        @input="handleInput"
        @blur="handleBlur"
      >
        {{ node.attrs.value }}
      </span>
      <el-dropdown v-if="node.attrs.type === 'creator'" @command="handleCommand">
        <el-icon color="#92B1F5" class="ml-1 align-text-top">
          <CaretBottom />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="小红书文案">小红书文案</el-dropdown-item>
            <el-dropdown-item command="广告文案">广告文案</el-dropdown-item>
            <el-dropdown-item command="抖音脚本">抖音脚本</el-dropdown-item>
            <el-dropdown-item command="品牌故事">品牌故事</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </span>
  </NodeViewWrapper>
</template>

<style scoped>
.content-editable.empty:empty::before {
  content: attr(data-placeholder);
  color: #91B1F5;
  pointer-events: none; /* 允许点击穿透 */
}

/* 修复空内容时的布局 */
.content-editable:empty {
  display: inline-block;
}
.tiptap .ProseMirror-selectednode {
  outline: none;
}
</style>
