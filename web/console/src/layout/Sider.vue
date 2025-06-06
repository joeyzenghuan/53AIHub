<script setup lang="ts">
import { onMounted, ref, watchEffect, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore, useEnterpriseStore } from '@/stores'
import { ArrowRight } from '@element-plus/icons-vue'
import { useEnv } from '@/hooks/useEnv'

const { isOpLocalEnv } = useEnv()
const route = useRoute()
const user_store = useUserStore()
const enterprise_store = useEnterpriseStore()
const activeName = ref('')
const openedMenu = ref('') // 新增：存储当前展开的子菜单

const dialogVisible = ref(false)
const enterprise_info = computed(() => enterprise_store.info)

watchEffect(() => {
  const paths = route.path.match(/\/[^/]+/g) || ['']
  activeName.value = paths[0]
  openedMenu.value = paths[0]
})

onMounted(() => {
})

const onExit = () => {
	user_store.logoff({ show_confirm: true, back_to_login: true })
}
</script>

<template>
	<el-aside width="232px">
		<div class="flex flex-col flex-1 h-full ">
			<div class="flex-none pl-7 pt-8 pb-5">
				<img class="w-[136px] object-contain" :src="$getRealPath({ url: '/images/logo.png' })" alt="">
			</div>
			<div class="flex-1 border-t overflow-y-auto scrollbar--none">
				<el-menu router :default-active="activeName" :default-openeds="[openedMenu, '/agent']"
					active-text-color="#2563EB" background-color="#F6F7F8" class="border-none mx-4" text-color="#4C4D4E"
					style="--el-menu-item-height: 54px; --el-menu-item-font-size: 16px; --el-menu-hover-bg-color: #EEEFF0;">
					<el-menu-item index="/index">
						<svg-icon name="home" width="18px" class="mr-2" />
						<span>{{ $t('module.homepage') }}</span>
					</el-menu-item>
					<el-sub-menu index="/agent">
						<template #title>
							<svg-icon name="app" width="18px" class="mr-2" />
							<span>{{ $t('module.app_management') }}</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/agent">
								{{ $t('module.agent') }}
							</el-menu-item>
							<el-menu-item index="/toolbox">
								{{ $t('module.ai_toolbox') }}
							</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="3">
						<template #title>
							<svg-icon name="operate" width="18px" class="mr-2" />
							<span>{{ $t('module.operation_management') }}</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/order">
								{{ $t('module.operation_order') }}
							</el-menu-item>
							<el-menu-item v-if="enterprise_info.is_independent || enterprise_info.is_industry" index="/user/register">
								{{ $t('register_user.title') }}
							</el-menu-item>
							<el-menu-item v-if="!isOpLocalEnv && (enterprise_info.is_enterprise || enterprise_info.is_industry)" index="/user/internal">
								{{ $t('internal_user.title') }}
							</el-menu-item>
							<!-- <el-menu-item index="/visit">
								{{ $t('module.operation_visit') }}
							</el-menu-item> -->
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="5">
						<template #title>
							<svg-icon name="decoration" width="18px" class="mr-2" />
							<span>{{ $t('module.site_decoration') }}</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/template-style">
								{{ $t('module.template_style') }}
							</el-menu-item>
							<el-menu-item index="/banner">
								{{ $t('module.banner_diagram') }}
							</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="6">
						<template #title>
							<svg-icon name="setting" width="18px" class="mr-2" />
							<span>{{ $t('module.site_config') }}</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/info">
								{{ $t('module.website_info') }}
							</el-menu-item>
							<el-menu-item index="/user/admin">
								{{ $t('admin_user.title') }}
							</el-menu-item>
							<!-- <el-menu-item index="/navigation">
								{{ $t('module.navigation') }}
							</el-menu-item> -->
							<el-menu-item index="/platform">
								{{ $t('module.platform') }}
							</el-menu-item>
							<el-menu-item index="/payment">
								{{ $t('module.payment') }}
							</el-menu-item>
							<el-menu-item index="/subscription">
								{{ $t('module.subscription') }}
							</el-menu-item>
							<el-menu-item v-if="!isOpLocalEnv" index="/domain">
								{{ $t('module.domain') }}
							</el-menu-item>
							<el-menu-item index="/statistics">
								{{ $t('module.statistics') }}
							</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
				</el-menu>
			</div>

			<div class="flex-none flex flex-col pt-2 px-4 pb-6 border-t">
				<div
					class="h-14 flex items-center gap-2 px-4 rounded-lg cursor-pointer hover:bg-[#EEEFF0] opacity-60 pointer-events-none"
					@click="dialogVisible = true">
					<div class="w-6 h-6 flex-center">
						<svg-icon name="generate" width="18" />
					</div>
					<div class="flex-1 text-[#4C4D4E] text-sm">
						{{ $t('function_update') }}
					</div>
					<el-icon>
						<ArrowRight />
					</el-icon>
				</div>
				<div
					class="h-14 flex items-center gap-2 px-4 rounded-lg cursor-pointer hover:bg-[#EEEFF0] opacity-60 pointer-events-none">
					<div class="w-6 h-6 flex-center">
						<svg-icon name="remind" width="18" />
					</div>
					<div class="flex-1 text-[#4C4D4E] text-sm">
						{{ $t('notification_center') }}
					</div>
					<el-icon>
						<ArrowRight />
					</el-icon>
				</div>
				<div class="h-14 flex items-center gap-2 px-4 rounded-lg cursor-pointer hover:bg-[#EEEFF0]"
					@click.stop="onExit">
					<div class="w-6 h-6 flex-center">
						<svg-icon name="exit" width="18" />
					</div>
					<div class="flex-1 text-[#4C4D4E] text-sm">
						{{ $t('action_exit') }}
					</div>
				</div>
				<div class="flex items-center justify-start gap-2 px-5 mt-4 text-[#1D1E1F]" style="font-size: 10px;">
					<span>POWERED BY</span>
					<img class="w-[58px] object-contain" :src="$getRealPath({ url: '/images/logo_2.png' })" alt="">
				</div>
			</div>
		</div>
	</el-aside>

	<el-dialog v-model="dialogVisible" width="600px" align-center class="el-dialog--noheader" :show-close="false"
		:close-on-click-modal="false">
		<div class="h-[115px] bg-[#D4E4FC] p-8 rounded-lg mb-5  bg-[url('/images/version_log.png')] bg-cover bg-no-repeat">
			<h4 class="text-lg text-[#1D1E1F] font-semibold">
				{{ $t('function_update_desc') }}
			</h4>
			<span class="text-xs text-[#8591AB]">2025-03-06</span>
		</div>
		<div>
			<div class="flex flex-col gap-2">
				<h5 class="text-sm text-[#1D1E1F]">
					【新增】
				</h5>
				<p class="text-sm text-[#4F5052]">
					1、线索、客户、联系人、商机增加合并功能，对在系统中重复的数据可以执行数据合并操作
				</p>
				<p class="text-sm text-[#4F5052]">
					2、合同模块增加合并收款、合并开票功能，在创建收款和开票时支持选择同一个客户下的多个合同
				</p>
			</div>
		</div>
		<template #footer>
			<div class="flex-center">
				<el-button @click="dialogVisible = false">
					{{ $t('action_close') }}
				</el-button>
				<el-button type="primary" @click="dialogVisible = false">
					{{ $t('action_view_more') }}
				</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<style scoped>
:deep(.el-menu-item-group__title:empty) {
	display: none;
}
/* :deep(.el-menu-item)  {
	margin-bottom: 6px;
} */
:deep(.el-menu-item) ,
:deep(.el-sub-menu__title) {
	padding: 0 16px !important;
}
:deep(.el-menu-item:hover),
:deep(.el-sub-menu__title:hover) {
	border-radius: 8px;
}
:deep(.el-sub-menu .el-menu-item) {
	--el-menu-sub-item-height: 40px;
	--el-menu-base-level-padding: 0px;
	--el-menu-level-padding: 16px;
	font-size: 14px;
}
:deep(.el-menu-item-group) {
	padding-left: 30px;
}
:deep(.el-sub-menu .el-menu-item:hover) {
	background-color: #EEEFF0;
	border-radius: 8px;
}
</style>
