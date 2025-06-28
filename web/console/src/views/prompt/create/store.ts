import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { promptApi } from '@/api/modules/prompt'

const DEFAULT_FORM_DATA = {
  prompt_id: 0,
  group_ids: [],
  name: '',
  description: '',
  content: '',
  subscription_group_ids: [],
  user_group_ids: [],
  sort: 0,
  status: 1,
  custom_config: {
    use_cases: [],
  },
}
const formData = ref(JSON.parse(JSON.stringify(DEFAULT_FORM_DATA)))
const detailData = ref({})
const submitting = ref(false)
const loading = ref(false)

export const useFormDataStore = () => {
  const reset = () => {
    formData.value = JSON.parse(JSON.stringify(DEFAULT_FORM_DATA))
    detailData.value = {}
  }
  const set = (data = {}) => {
    formData.value = {
      ...formData.value,
      ...data,
    }
  }
  const get = () => formData.value
  const save = async ({ prompt_id } = {}) => {
    submitting.value = true
    prompt_id = prompt_id || formData.value.prompt_id || detailData.value.prompt_id || 0
    const data = await promptApi.save({ ...formData.value }).finally(() => {
      submitting.value = false
    })
    ElMessage.success(window.$t('action_save_success'))
    return data
  }
  const fetchDetail = async ({ prompt_id } = {}) => {
    prompt_id = prompt_id || formData.value.prompt_id
    loading.value = true
    const data = await promptApi.detail({ prompt_id }).finally(() => {
      loading.value = false
    })
    try {
      data.custom_config = JSON.parse(data.custom_config)
    }
    catch (error) {
      data.custom_config = {}
    }
    if (!data.custom_config)
      data.custom_config = {}
    if (!data.custom_config.use_cases)
      data.custom_config.use_cases = []
    detailData.value = data
    formatFormData()
  }
  const formatFormData = (data) => {
    data = data || detailData.value || {}
    set({
      prompt_id: data.prompt_id || 0,
      group_ids: data.group_ids || [],
      name: data.name || '',
      description: data.description || '',
      content: data.content || '',
      subscription_group_ids: data.group_ids || [],
      user_group_ids: data.group_ids || [],
      sort: data.sort || 0,
      status: data.status,
      custom_config: data.custom_config,
    })
  }

  return {
    formData,
    detailData,
    submitting,
    loading,
    reset,
    set,
    get,
    save,
    fetchDetail,
    formatFormData,
  }
}
