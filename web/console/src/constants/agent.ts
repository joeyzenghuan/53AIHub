export const inputTypeList = [
  {
    label: window.$t('variable_type.text'),
    type: 'text',
  },
  {
    label: window.$t('variable_type.textarea'),
    type: 'textarea',
  },
  {
    label: window.$t('variable_type.inputNumber'),
    type: 'inputNumber',
  },
  {
    label: window.$t('variable_type.select'),
    type: 'select',
  },
  { label: window.$t('variable_type.date'), type: 'date', allowed: ['53ai_workflow'] },
  { label: window.$t('variable_type.tag'), type: 'tag', allowed: ['53ai_workflow'] },
  { label: window.$t('variable_type.file'), type: 'file' },
]

export const outputTypeList = [
  { label: window.$t('variable_type.textarea'), type: 'textarea' },
  { label: window.$t('variable_type.image'), type: 'image' },
  { label: window.$t('variable_type.audio'), type: 'audio' },
  { label: window.$t('variable_type.video'), type: 'video' },
  { label: window.$t('variable_type.markdown'), type: 'markdown' },
]
