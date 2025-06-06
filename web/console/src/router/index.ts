import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import { useUserStore, useEnterpriseStore } from '@/stores'
import { useDefaultUser } from '@/stores/modules/user'
import { useEnv } from '@/hooks/useEnv'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Main',
    component: Layout,
    redirect: () => {
      return '/index'
    },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/index.vue'),
      },
      {
        path: '/agent',
				name: 'Agent',
        component: () => import('@/views/agent/index.vue'),
      },

      {
        path: '/agent/create',
        name: 'AgentCreate',
        component: () => import('@/views/agent/create/index.vue'),
      },
      {
        path: '/toolbox',
        name: 'Toolbox',
        component: () => import('@/views/toolbox/index.vue'),
      },
			  {
        path: '/order',
        name: 'Order',
        component: () => import('@/views/order/index.vue'),
      },
			{
        path: '/user/register',
				name: 'RegisterUser',
				meta: {
					title: 'register_user.title'
				},
        component: () => import('@/views/user/register/index.vue'),
      },
			{
        path: '/user/internal',
				name: 'InternalUser',
				meta: {
					title: 'internal_user.title'
				},
        component: () => import('@/views/user/internal/index.vue'),
			},
			{
        path: '/user/admin',
				name: 'AdminUser',
				meta: {
					title: 'admin_user.title'
				},
        component: () => import('@/views/user/admin/index.vue'),
      },
      {
        path: '/info',
        name: 'Info',
        component: () => import('@/views/info/index.vue'),
      },
      {
        path: '/platform',
        name: 'Platform',
        component: () => import('@/views/platform/index.vue'),
      },
      {
        path: '/navigation',
        name: 'Navigation',
        component: () => import('@/views/navigation/index.vue'),
      },
      {
        path: '/payment',
        name: 'Payment',
        component: () => import('@/views/payment/index.vue'),
      },
      {
        path: '/subscription',
        name: 'Subscription',
        component: () => import('@/views/subscription/index.vue'),
      },
      {
        path: '/domain',
        name: 'Domain',
        component: () => import('@/views/domain/index.vue'),
      },
      {
        path: '/statistics',
        name: 'Statistics',
        component: () => import('@/views/statistics/index.vue'),
			},
			{
        path: '/template-style',
        name: 'TemplateStyle',
        component: () => import('@/views/template-style/index.vue'),
			},
			  {
        path: '/banner',
        name: 'Banner',
        component: () => import('@/views/banner/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/svglist',
    name: 'Svg',
    component: () => import('@/views/svg/index.vue'),
  },
  {
    path: '/500',
    name: 'Error500',
    component: () => import('@/views/exception/500/index.vue'),
  },
  {
    path: '/404',
    name: 'Error404',
    component: () => import('@/views/exception/404/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/404',
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export const gotoLogin = () => {
	const { isOpLocalEnv } = useEnv()
	let login_url = sessionStorage.getItem('from_origin') || ''
	if (!login_url) {
		login_url = `//${location.host}${location.search}`
		if (/(127.0.0.1)|(localhost)|(agenthubdev.cc)|(192.168.1.\d+)|/.test(login_url))
			login_url = `//${location.host}/console/saas-login/index.html${location.search}`
	}
	if (isOpLocalEnv.value) login_url = `${window.location.origin}/#/index`
  location.replace(login_url)
}
router.beforeEach(async (to, from, next) => {
	const user_store = useUserStore()
	const user_info = useDefaultUser()
	const enterprise_store = useEnterpriseStore()

	// const is_invalid_user = !user_info.access_token || !user_info.eid
	const is_invalid_user = !user_info.access_token
	if (is_invalid_user) user_store.logoff()
	if (!['/login', '/register'].includes(to.path) && is_invalid_user) {
		gotoLogin()
		return
	}

	if (['RegisterUser', 'InternalUser'].includes(to.name)) {
		if (!enterprise_store.info.eid) await enterprise_store.loadSelfInfo()
		if ((to.name === 'RegisterUser' && !enterprise_store.info.is_independent && !enterprise_store.info.is_industry)
			|| (to.name === 'InternalUser' && !enterprise_store.info.is_enterprise && !enterprise_store.info.is_industry)) {
			next({ name: 'Error404' })
			return
		}
	}

  next()
})

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
