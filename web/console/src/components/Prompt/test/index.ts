import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import Component from './component.vue'

export default Node.create({
  name: 'link',

  group: 'inline',

  inline: true,
  atom: true,

  addAttributes() {
    return {
      value: {
        default: '',
      },
      defaultValue: {
        default: '',
      },
      type: {
        // creator
        default: '',
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'link',
      },
    ]
  },

  addCommands() {
    return {
      setLink: options => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        })
      },
    }
  },

  renderHTML({ HTMLAttributes }) {
    return ['link', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return VueNodeViewRenderer(Component)
  },
})
