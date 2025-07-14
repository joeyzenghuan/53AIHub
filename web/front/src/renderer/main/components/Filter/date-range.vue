<template>
  <el-date-picker
    v-model="model"
    type="daterange"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :size="size"
    :popper-options="{ placement: 'bottom-start' }"
    :shortcuts="shortcuts"
    v-bind="{ ...$attrs }"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import useVmodel from '@/hooks/useVmodel'
import { getSimpleDateFormatString } from '@/utils/moment'
import { dateRangeOptions, getRangeStartEndDates } from '@/utils/filter'

interface DateRange {
  start: string
  end: string
}

const props = withDefaults(
  defineProps<{
    modelValue?: (string | number)[]
    prop?: DateRange
    startPlaceholder?: string
    endPlaceholder?: string
    size?: 'small' | 'default' | 'large'
    valueFormat?: Function
  }>(),
  {
    modelValue: () => [],
    prop: () => ({
      start: 'start',
      end: 'end'
    }),
    startPlaceholder: window.$t('filter.start_time'),
    endPlaceholder: window.$t('filter.end_time'),
    size: 'default',
    valueFormat: (date: Date) => getSimpleDateFormatString({ date, format: 'YYYY-MM-DD hh:mm' })
  }
)

const emits = defineEmits<{
  (e: 'update:modelValue', data: (string | number)[]): void
  (e: 'add'): void
  (e: 'change', data: (string | number)[]): void
}>()

const model = useVmodel({
  props,
  emits
})

const handleChange = (e: Date[]) => {
  let date: (string | number)[] = []
  if (e && e.length) {
    e[0].setHours(0, 0, 0, 0)
    e[1].setHours(23, 59, 59, 999)
    date = [props.valueFormat(e[0]), props.valueFormat(e[1])]
  }
  emits('update:modelValue', date)
  emits('change', date)
}

const shortcuts = dateRangeOptions.map((item) => {
  return {
    text: item.label,
    value: () => {
      const date = getRangeStartEndDates(item.value)
      return [date.start, date.end]
    }
  }
})
</script>

<style scoped></style>
