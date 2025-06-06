import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import LoginModal from '@/components/LoginModal/setup.ts'

import { useUserStore } from '@/stores/modules/user'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: () => {
      return window.electron ? '/toolbox' : '/index'
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/index/layout.vue'),
        children: [
          {
            path: '/index',
            name: 'HomeIndex',
            component: () => import('@/views/index/index.vue'),
          },
          {
            path: '/index/agent',
            name: 'HomeAgent',
            component: () => import('@/views/index/agent.vue'),
          },
          {
            path: '/index/toolbox',
            name: 'HomeToolbox',
            component: () => import('@/views/index/toolbox.vue'),
          },
        ]
      },
      {
        path: '/chat',
        name: 'Chat',
        component: () => import('@/views/chat/index.vue'),
        meta: {
          auth: true
        }
      },
      // {
      //   path: '/agent',
      //   name: 'Agent',
      //   component: () => import('@/views/agent/index.vue'),
      //   meta: {
      //     auth: true
      //   }
      // },
      {
        path: '/discover',
        name: 'Discover',
        component: () => import('@/views/discover/index.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/profile/index.vue'),
        meta: {
          auth: window.$isElectron ? false : true
        }
      },
      {
        path: '/toolbox',
        name: 'Toolbox',
        component: () => import('@/views/desktop/tools/index.vue'),
      },
    ]
  },
  {
    path: '/svglist',
    name: 'Svg',
    component: () => import('@/views/svglist/index.vue'),
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

// 添加路由守卫
router.beforeEach((to, _from, next) => {
  const userStore = useUserStore()
  const isLoggedIn = localStorage.getItem('access_token') // 或其他判断用户是否登录的方法
  if (isLoggedIn) {
    userStore.getUserInfo()
  }

  if (to.meta.auth) {
    // 这里需要根据你的实际登录状态判断逻辑来替换
    if (isLoggedIn) {

    } else {
      // 如果未登录，可以重定向到登录页面
      LoginModal().open()
      next('/') // 或者重定向到你的登录页面
      return
    }
  }
  next()
})

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
