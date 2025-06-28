<script setup lang="ts">
import { Close, Check, Search } from '@element-plus/icons-vue'

import type { Group, GroupType } from '@/api/modules/group'
import { ref, nextTick, onMounted, watch, computed, reactive } from 'vue'
import { groupApi, GROUP_TYPE_USER } from '@/api/modules/group'

const props = withDefaults(defineProps<{
	type?: 'select' | 'checkbox' | 'picker' | 'radio'
	groupType?: GroupType
	modelValue?: number | string | number[] | string[] | null
	size?: 'large' | 'default' | 'small'
	defaultAll?: boolean
	defaultFirst?: boolean
}>(), {
	type: 'select',
	groupType: GROUP_TYPE_USER,
	modelValue: null,
	size: 'large',
	defaultAll: false,
	defaultFirst: false
})

const emits = defineEmits<{
	(e: 'update:modelValue', value: string): void
	(e: 'change', result: { value: string }): void
	(e: 'confirm', result: { value: string }): void
}>()

const treeRef = ref()

// const selectedValue = ref(props.modelValue)
const selectedValue = ref([])
const groupOptions = ref<Group[]>([])
const loading = ref(false)

const selectedOptions = computed(() => {
	return groupOptions.value.filter(item => selectedValue.value.includes(item.group_id))
})
const modelOptions = computed(() => {
	return groupOptions.value.filter(item => props.modelValue.includes(item.group_id))
})

const handleChange = () => {
	const value = JSON.parse(JSON.stringify(selectedValue.value))
	emits('update:modelValue', value)
	emits('change', { value })
}
const refresh = async () => {
	loading.value = true
	const list = await groupApi.list({ params: { group_type: props.groupType } }).catch(() => {
		loading.value = false
	})
	groupOptions.value = list.map(item => {
		item.value = +item.group_id || 0
		item.label = item.name = item.group_name || ''
		return item
	})
	await nextTick()
	const value = JSON.parse(JSON.stringify(props.modelValue))
	// 过滤一些不存在的值
	if (Array.isArray(value)) {
		const oldLength = value.length
		selectedValue.value = value.filter(val => groupOptions.value.some(item => item.group_id === val))
		if (oldLength && oldLength !== selectedValue.value.length) handleChange()
		if (props.defaultAll && (!props.modelValue || !props.modelValue.length)) {
			selectedValue.value = groupOptions.value.map(item => item.group_id)
			handleChange()
		} else if (props.defaultFirst && (!props.modelValue || !props.modelValue.length)) {
			selectedValue.value = [groupOptions.value[0].group_id]
			handleChange()
		}
	}
	if (['radio'].includes(props.type)) {
		if (props.defaultFirst && !props.modelValue) {
			selectedValue.value = groupOptions.value[0].group_id
			handleChange()
		}
	}
	loading.value = false
}

const pickerVisible = ref(false)
const filterForm = reactive({
	keyword: '',
})
const open = () => {
	selectedValue.value = JSON.parse(JSON.stringify(props.modelValue))
	pickerVisible.value = true
}
const close = () => {
	pickerVisible.value = false
}
const handleKeywordChange = () => {
	treeRef.value.filter(filterForm.keyword)
}
const filterNode = (value: string, data: any) => {
	if (!value) return true
	return data.name.includes(value)
}
const handleRemove = (item: any) => {
	selectedValue.value = selectedValue.value.filter(val => val !== item.group_id)
}
const handleNodeClick = (data: any) => {
	if (selectedValue.value.some(val => val === data.value)) {
		selectedValue.value = selectedValue.value.filter(val => val !== data.group_id)
	} else {
		selectedValue.value.push(data.group_id)
	}
}
const handleConfirm = () => {
	handleChange()
	const value = JSON.parse(JSON.stringify(selectedValue.value))
	emits('confirm', { value })
	close()
}

watch(() => props.modelValue, (val) => {
	selectedValue.value = val
})

onMounted(() => {
	refresh()
})

defineExpose({
	refresh,
	open,
	close
})
</script>

<template>
	<ElSkeleton class="w-full" animated :loading="loading">
		<template #default>
			<div v-if="type === 'picker'" class="relative">
				<div v-if="$slots.trigger" @click="open">
					<slot name="trigger" />
				</div>
				<ul v-if="!$slots.trigger" class="w-full flex items-center flex-wrap gap-2">
					<li v-for="opt in modelOptions" :key="opt.group_id"
						class="flex items-center gap-2 px-2 box-border border border-[#E5E5E5] rounded-sm text-[#666]">
						<SvgIcon name="user-group" width="18px" height="18px" color="#C7C7C7" />
						{{ opt.name }}
					</li>
					<ElButton type="primary" link @click="open">
						{{ $t(!modelValue.length ? 'action_add' : 'action_modify') }}
					</ElButton>
				</ul>
				<ElDialog :title="$t('action_select')" width="650px" :close-on-click-modal="false" destroy-on-close append-to-body
					v-model="pickerVisible">
					<div class="flex h-[400px]">
						<div class="flex-1 w-0 pr-4 box-border flex flex-col border-r border-[#E5E5E5]">
							<ElInput class="w-full h-[36px]" v-model="filterForm.keyword" size="default" clearable :prefix-icon="Search"
								:placeholder="$t('internal_user.group.search_placeholder_v2')" @change="handleKeywordChange" />
							<ElTree ref="treeRef" class="mt-4 flex-1 h-0 box-border pr-1 overflow-auto" node-key="group_id"
								:data="groupOptions" :default-expanded-keys="[0]" :expand-on-click-node="false"
								:filter-node-method="filterNode" @node-click="handleNodeClick">
								<template #default="{ data }">
									<div class="w-full flex items-center gap-2 group">
										<SvgIcon name="user-group" width="18px" height="18px"
											:color="selectedValue.some(val => val === data.group_id) ? '#3664EF' : '#999'" />
										<div class="flex-1 w-0 text-sm truncate"
											:class="[selectedValue.some(val => val === data.group_id) ? 'text-[#3664EF]' : 'text-[#333]']"
											:title="data.label">{{ data.label }}</div>
										<ElIcon v-if="selectedValue.some(val => val === data.group_id)" color="#3664EF">
											<Check />
										</ElIcon>
									</div>
								</template>
							</ElTree>
						</div>
						<div class="flex-1 w-0 pl-4 box-border flex flex-col">
							<h4 class="leading-[40px]">{{ $t('internal_user.scope.selected_title') }}</h4>
							<div class="flex-1 h-0 w-full mt-3 bg-[#FBF8FB] rounded overflow-auto">
								<ul class="box-border p-4 flex items-start flex-wrap gap-2">
									<li v-for="opt in selectedOptions" :key="opt.group_id"
										class="py-1 bg-white px-2 box-border border border-[#E5E5E5] rounded-sm">
										<SvgIcon class="inline-block mr-1" name="user-group" width="18px" height="18px" color="#939499" />
										{{ opt.group_name }}
										<ElButton class="ml-1 !outline-none !border-none !bg-[#C4C4C4] !size-4" style="zoom: 0.9;"
											:icon="Close" type="info" size="small" circle @click="handleRemove(opt)" />
									</li>
								</ul>
							</div>
						</div>
					</div>
					<template #footer>
						<div class="py-2 flex items-center justify-end">
							<ElButton class="w-[96px] h-[36px]" @click.stop="close">
								{{ $t('action_cancel') }}
							</ElButton>
							<ElButton class="w-[96px] h-[36px]" size="large" type="primary" @click="handleConfirm">
								{{ $t('action_confirm') }}
							</ElButton>
						</div>
					</template>
				</ElDialog>
			</div>
			<ElRadioGroup v-else-if="type === 'radio'" v-model="selectedValue" v-bind="$attrs" @change="handleChange">
				<ElRadio v-for="item in groupOptions" :key="item.group_id" :label="item.group_id">
					<span class="text-[#1D1E1F]">{{ item.group_name }}</span>
				</ElRadio>
			</ElRadioGroup>
			<ElCheckboxGroup v-else-if="type === 'checkbox'" v-model="selectedValue" v-bind="$attrs" @change="handleChange">
				<ElCheckbox v-for="item in groupOptions" :key="item.group_id" :label="item.group_id">
					<span class="text-[#1D1E1F]">{{ item.group_name }}</span>
				</ElCheckbox>
			</ElCheckboxGroup>
			<ElSelect v-else :size="size" :placeholder="$t('form_select_placeholder')" v-model="selectedValue" v-bind="$attrs"
				@change="handleChange">
				<ElOption v-for="item in groupOptions" :key="item.group_id" :label="item.group_name" :value="item.group_id" />
			</ElSelect>
		</template>
		<template #template>
			<ElSkeletonItem class="w-full !h-[40px]" variant="h1" />
		</template>
	</ElSkeleton>
</template>

<style lang="scss" scoped>
</style>
