import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const routes = [
  { // Home
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        name: 'Home',
        meta: {
          title: 'Home'
        },
        component: () => import('@/views/home')
      }
    ]
  },

  { // Test
    path: '/test',
    component: Layout,
    redirect: '/test/import',
    name: 'Test',
    meta: {
      title: 'Test'
    },
    children: [
      {
        path: 'import',
        name: 'TestImport',
        meta: {
          title: '导入'
        },
        component: () => import('@/views/test/import')
      }
    ]
  }
]

export default new Router({
  routes
})
