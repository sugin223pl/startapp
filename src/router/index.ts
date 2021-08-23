import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Screens from '../screens/Screens.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/screens/screen1'
  },
  {
    path: '/screens/',
    component: Screens,
    children: [
      {
        path: '',
        redirect: '/screens/screen1'
      },
      {
        path: 'screen1',
        component: () => import('@/screens/Screen1.vue')
      },
      {
        path: 'screen2',
        component: () => import('@/screens/Screen2.vue')
      },
      {
        path: 'screen3',
        component: () => import('@/screens/Screen3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
