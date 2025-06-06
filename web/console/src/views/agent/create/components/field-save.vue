<script setup lang="ts">
import { ref } from 'vue'
const typeList = [
  { type: 'text-input', label: '单行文本', type_53ai: 'text' },
  { type: 'paragraph', label: '多行文本', type_53ai: 'textarea' },
  { type: 'number', label: '数字', type_53ai: 'inputNumber' },
  { type: 'paragraph', label: '选项', type_53ai: 'select' },
  { type: 'paragraph', label: '标签', type_53ai: 'tag' },
  { type: 'paragraph', label: '日期', type_53ai: 'date' },
]
const visible = ref(false)
const widgetForm = ref({
  name: '',
  type: 'text-input',
  value: '',
  placeholder: '',
  desc: '',
  required: false,
  maxlength: 0,
  showWordLimit: false,
  options: [],
  multiple: false,
})
const handleType = (item) => {
  widgetForm.value.type = item.type
  widgetForm.value.type_53ai = item.type_53ai
}

defineExpose({
  open() {
    visible.value = true
  },
})
</script>

<template>
  <el-dialog v-model="visible" width="700" destroy-on-close title="添加">
    <el-form ref="formRef" :model="widgetForm" style="height: 520px; overflow-y: auto;" label-position="top">
      <el-form-item label="变量名称" prop="variable" required :rules="$rules.variable()">
        <el-input v-model="widgetForm.variable" size="large" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="显示名称" prop="label" required :rules="$rules.required('请输入显示名称')">
        <el-input v-model="widgetForm.label" size="large" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="变量类型">
        <div class="flex flex-wrap gap-2">
          <template v-for="item in typeList" :key="item.type">
            <div class="w-[112px] h-12 border rounded flex-center gap-1 cursor-pointer" :class="[widgetForm.type_53ai === item.type_53ai ? 'border-[#2563EB] text-[#2563EB] bg-[#2563EB] bg-opacity-[8%]' : 'text-[#182B50] bg-[#F9FAFC]'] " @click="handleType(item)">
              <span class="text-sm ">{{ item.label }}</span>
            </div>
          </template>
        </div>
      </el-form-item>
      <el-form-item v-if="['text', 'textarea', 'select'].includes(widgetForm.type_53ai)" label="引导语">
        <el-input v-model="widgetForm.placeholder" size="large" placeholder="请输入" />
      </el-form-item>
      <el-form-item v-if="['date'].includes(widgetForm.type_53ai)" label="选择格式">
        <el-select v-model="widgetForm.mode" class="w-full" size="large" placeholder="请选择">
          <el-option label="年" value="y" />
          <el-option label="年/月" value="y-m" />
          <el-option label="年/月/日" value="y-m-d" />
          <el-option label="时/分" value="h-m" />
          <el-option label="时间范围" value="daterange" />
        </el-select>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="widgetForm.desc" size="large" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="是否必填">
        <el-switch v-model="widgetForm.required" />
      </el-form-item>
      <el-form-item v-if="['text', 'textarea'].includes(widgetForm.type_53ai)" label="最大输入字数">
        <el-input-number v-model="widgetForm.max_length" style="width: 100%;" :precision="0" :controls="false" size="large" placeholder="请输入" />
      </el-form-item>
      <el-form-item v-if="['text', 'textarea'].includes(widgetForm.type_53ai)" label="是否展示字数">
        <el-switch v-model="widgetForm.showWordLimit" />
      </el-form-item>

      <el-form-item v-if="widgetForm.type_53ai === 'select'" label="选项">
        <div class="flex flex-col gap-3 w-full">
          <template v-for="(item, index) in widgetForm.options" :key="item.value">
            <div class="flex items-center">
              <el-input v-model="item.label" class="flex-1" size="large" placeholder="请输入" />
              <div class="px-2">
                <el-icon class="cursor-pointer" color="#999999" @click="handleDelOption(index)">
                  <Delete />
                </el-icon>
              </div>
            </div>
          </template>
        </div>
        <div class="w-full h-10 leading-10 rounded text-center border border-dashed border-[#DCDFE6] cursor-pointer text-sm text-[#182B50] text-opacity-80 mt-3" @click="handleAddOption()">
          + 添加
        </div>
      </el-form-item>
      <el-form-item v-if="widgetForm.type_53ai === 'select'" label="模式">
        <el-radio-group v-model="widgetForm.multiple">
          <el-radio size="large" :label="false">
            单选
          </el-radio>
          <el-radio size="large" :label="true">
            多选
          </el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button size="large" @click="visible = false">
        取消
      </el-button>
      <el-button v-debounce type="primary" size="large" @click="handleSave">
        确定
      </el-button>
    </template>
  </el-dialog>
</template>

<style scoped>
::v-deep(.el-input-number .el-input__inner) {
	text-align: left;
}
</style>
