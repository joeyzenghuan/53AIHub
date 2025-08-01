<template>
  <Layout class="px-[60px] py-8">
    <Header :title="$t('module.chunk_setting')" />

    <div class="flex-1 flex flex-col bg-white p-6 mt-3 overflow-hidden">
      <div class="flex-1 flex flex-col overflow-y-auto">
        <div class="flex items-center gap-2.5">
          <div class="w-1 h-4 bg-[#2563EB]"></div>
          <span class="text-base text-[#1D1E1F]">拆分条件</span>
        </div>
        <div class="px-3 py-4">
          <div class="flex items-center gap-4">
            <span class="text-sm text-[#1D1E1F]">知识原文长度大于</span>
            <div>
              <el-input-number
                v-model="setting.min_chunk_size"
                class="el-input-number--left"
                size="large"
                :min="chunkSize.min"
                :max="chunkSize.max"
                :controls="false"
                @blur="handleBlurChunkSize"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2.5 mb-3">
          <div class="w-1 h-4 bg-[#2563EB]"></div>
          <span class="text-base text-[#1D1E1F]">拆分规则</span>
        </div>
        <div class="border rounded">
          <div class="flex items-center gap-2 p-5 border-b">
            <img class="size-6" :src="$getRealPath({ url: '/images/chunk/knowledge.webp' })" />
            <h4 class="text-base text-[#1D1E1F]">知识点</h4>
          </div>
          <div class="p-5 flex flex-col gap-4">
            <div class="flex items-center">
              <div class="flex-none w-24 text-sm text-[#4F5052]">拆分规则</div>
              <el-radio-group v-model="setting.knowledge_split_type">
                <el-radio :value="SPLIT_TYPE.HEADING">
                  <div class="flex items-center">
                    <el-dropdown @command="handleChangeKnowledgeHeading">
                      <div class="flex items-center gap-2">
                        {{ knowledgeHeadingLabel }}
                        <el-icon><ArrowDown /></el-icon>
                      </div>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <template v-for="item in headerList" :key="item.type">
                            <el-dropdown-item :command="item.type">
                              {{ item.label }}
                            </el-dropdown-item>
                          </template>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </div>
                </el-radio>
                <el-radio :value="SPLIT_TYPE.PARAGRAPH">段落(\n\n)</el-radio>
                <el-radio :value="SPLIT_TYPE.CUSTOM">
                  <div class="flex items-center gap-2">
                    <span>指定</span>
                    <div>
                      <el-input v-model="setting.knowledge_split_input" />
                    </div>
                    <el-dropdown @command="handleChangeKnowledgeCustom">
                      <div class="flex items-center gap-2">
                        常用
                        <el-icon><ArrowDown /></el-icon>
                      </div>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <template v-for="item in commonList" :key="item.value">
                            <el-dropdown-item :command="item.value">
                              <div class="flex-none w-10">
                                {{ item.value }}
                              </div>
                              {{ item.label }}
                            </el-dropdown-item>
                          </template>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </div>
                </el-radio>
              </el-radio-group>
            </div>
            <div class="flex items-center">
              <div class="flex-none w-24 text-sm text-[#4F5052]">最大长度</div>
              <div>
                <el-input-number
                  v-model="setting.knowledge_max_length"
                  class="el-input-number--left"
                  size="large"
                  :min="maxLength.min"
                  :max="maxLength.max"
                  :controls="false"
                  @blur="handleBlurKnowledgeMaxLength"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="border rounded mt-4">
          <div class="flex items-center gap-2 p-5 border-b">
            <img class="size-6" :src="$getRealPath({ url: '/images/chunk/index.webp' })" />
            <h4 class="text-base text-[#1D1E1F]">索引块</h4>
          </div>
          <div class="p-5 flex flex-col gap-4">
            <div class="text-sm text-[#1D1E1F] font-semibold">默认索引</div>
            <div class="flex items-center">
              <div class="flex-none w-24 text-sm text-[#4F5052]">拆分规则</div>
              <el-radio-group v-model="setting.index_split_type">
                <el-radio :value="SPLIT_TYPE.HEADING">
                  <div class="flex items-center">
                    <el-dropdown @command="handleChangeIndexHeading">
                      <div class="flex items-center gap-2">
                        {{ indexHeadingLabel }}
                        <el-icon><ArrowDown /></el-icon>
                      </div>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <template v-for="item in headerList" :key="item.type">
                            <el-dropdown-item :command="item.type">
                              {{ item.label }}
                            </el-dropdown-item>
                          </template>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </div>
                </el-radio>
                <el-radio :value="SPLIT_TYPE.PARAGRAPH">段落(\n\n)</el-radio>
                <el-radio :value="SPLIT_TYPE.CUSTOM">
                  <div class="flex items-center gap-2">
                    <span>指定</span>
                    <div>
                      <el-input v-model="setting.index_split_input" />
                    </div>
                    <el-dropdown @command="handleChangeIndexCustom">
                      <div class="flex items-center gap-2">
                        常用
                        <el-icon><ArrowDown /></el-icon>
                      </div>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <template v-for="item in commonList" :key="item.value">
                            <el-dropdown-item :command="item.value">
                              <div class="flex-none w-10">
                                {{ item.value }}
                              </div>
                              {{ item.label }}
                            </el-dropdown-item>
                          </template>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </div>
                </el-radio>
              </el-radio-group>
            </div>
            <div class="flex items-center">
              <div class="flex-none w-24 text-sm text-[#4F5052]">最大长度</div>
              <div>
                <el-input-number
                  v-model="setting.index_max_length"
                  class="el-input-number--left"
                  size="large"
                  :min="0"
                  :max="1000000"
                  :controls="false"
                  @blur="handleBlurIndexMaxLength"
                />
              </div>
            </div>
            <div class="text-sm text-[#1D1E1F] font-semibold">内容概要</div>
            <div class="flex items-center">
              <div class="flex-none w-24 text-sm text-[#4F5052]">生成规则</div>
              <el-radio-group v-model="setting.summary_generation">
                <el-radio :value="SUMMARY_GENERATION.MANUAL">人工撰写</el-radio>
                <el-radio :value="SUMMARY_GENERATION.AI">AI生成</el-radio>
              </el-radio-group>
            </div>
            <div class="text-sm text-[#1D1E1F] font-semibold">常见问法</div>
            <div class="flex items-center">
              <div class="flex-none w-24 text-sm text-[#4F5052]">生成规则</div>
              <el-radio-group v-model="setting.question_generation">
                <el-radio :value="QUESTION_GENERATION.MANUAL">人工撰写</el-radio>
                <el-radio :value="QUESTION_GENERATION.AI">AI生成</el-radio>
              </el-radio-group>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-none">
        <el-button v-debounce type="primary" size="large" class="mt-4" @click="handleConfirm">保存</el-button>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { computed, onMounted, ref } from 'vue'
import { chunkSettingApi } from '@/api/modules/chunk-setting'
import type { ChunkSetting } from '@/api/modules/chunk-setting'
import { CHUNK_SETTING_DEFAULT, SUMMARY_GENERATION, QUESTION_GENERATION, SPLIT_TYPE } from '@/constants/chunk'
import { deepCopy } from '@/utils'

interface Setting extends ChunkSetting {
  knowledge_split_type: string
  knowledge_split_input: string
  index_split_type: string
  index_split_input: string
}

const chunkSize = {
  min: 500,
  max: 10000,
}
const maxLength = {
  min: 50,
  max: 4000,
}

const headerList = [
  {
    type: 'h1',
    label: '一级标题（H1）',
  },
  {
    type: 'h2',
    label: '二级标题（H2）',
  },
  {
    type: 'h3',
    label: '三级标题（H3）',
  },
  {
    type: 'h4',
    label: '四级标题（H4）',
  },
  {
    type: 'h5',
    label: '五级标题（H5）',
  },
]

const commonList = [
  {
    value: '\\n',
    label: '换行符',
  },
  {
    value: '\\n\\n',
    label: '段落符',
  },
  {
    value: '\\t',
    label: '制表符',
  },
  {
    value: '---',
    label: '分割符',
  },
]

const setting = ref<Setting>(deepCopy({ ...CHUNK_SETTING_DEFAULT, knowledge_split_type: 'h2', index_split_type: 'h2' }))

const knowledgeHeadingLabel = computed(() => {
  const label = headerList.find(item => item.type === setting.value.knowledge_split_rule)?.label
  return label || headerList[0].label
})

const indexHeadingLabel = computed(() => {
  const label = headerList.find(item => item.type === setting.value.index_split_rule)?.label
  return label || headerList[0].label
})

const handleChangeKnowledgeHeading = (value: string) => {
  setting.value.knowledge_split_rule = value
}

const handleChangeIndexHeading = (value: string) => {
  setting.value.index_split_rule = value
}

const handleChangeIndexCustom = (value: string) => {
  setting.value.index_split_input = value
}

const handleChangeKnowledgeCustom = (value: string) => {
  setting.value.knowledge_split_input = value
}

const handleBlurChunkSize = () => {
  setting.value.min_chunk_size = Math.max(Math.min(setting.value.min_chunk_size, chunkSize.max), chunkSize.min)
}

const handleBlurIndexMaxLength = () => {
  setting.value.index_max_length = Math.max(
    Math.min(setting.value.index_max_length, setting.value.knowledge_max_length),
    maxLength.min
  )
}
const handleBlurKnowledgeMaxLength = () => {
  setting.value.knowledge_max_length = Math.max(
    Math.min(setting.value.knowledge_max_length, maxLength.max),
    maxLength.min
  )
  handleBlurIndexMaxLength()
}

const handleConfirm = async () => {
  const data = {
    ...setting.value,
  }
  if (data.knowledge_split_type === SPLIT_TYPE.PARAGRAPH) {
    data.knowledge_split_rule = data.knowledge_split_type
  }
  if (data.knowledge_split_type === SPLIT_TYPE.CUSTOM) {
    data.knowledge_split_rule = data.knowledge_split_input
  }
  if (data.index_split_type === SPLIT_TYPE.PARAGRAPH) {
    data.index_split_rule = data.index_split_type
  }
  if (data.index_split_type === SPLIT_TYPE.CUSTOM) {
    data.index_split_rule = data.index_split_input
  }

  await chunkSettingApi.default.update(data)
  ElMessage.success($t('message_status.save_success'))
}

const setSplitRule = (config: Setting, prefix: 'knowledge_split' | 'index_split') => {
  const isHeading = headerList.some(item => item.type === config[`${prefix}_rule`])
  const isParagraph = config[`${prefix}_rule`] === SPLIT_TYPE.PARAGRAPH
  const isCustom = commonList.some(item => item.value === config[`${prefix}_input`])
  if (isHeading) {
    config[`${prefix}_type`] = SPLIT_TYPE.HEADING
    config[`${prefix}_input`] = commonList[0].value
  } else if (isParagraph) {
    config[`${prefix}_type`] = SPLIT_TYPE.PARAGRAPH
    config[`${prefix}_input`] = commonList[0].value
  } else if (isCustom) {
    config[`${prefix}_type`] = SPLIT_TYPE.CUSTOM
    config[`${prefix}_input`] = config[`${prefix}_input`]
  }
}

onMounted(async () => {
  const data = await chunkSettingApi.default.get()
  const config = {
    ...data,
    knowledge_split_type: 'heading',
    knowledge_split_input: commonList[0].value,
    index_split_type: 'heading',
    index_split_input: commonList[0].value,
  }

  setSplitRule(config, 'knowledge_split')
  setSplitRule(config, 'index_split')
  setting.value = config
})
</script>

<style scoped></style>
