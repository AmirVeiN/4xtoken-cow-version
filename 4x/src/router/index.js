import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import presaleView from '@/views/presaleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/presale',
      name: 'presale',
      component: presaleView
    }
  ]
})

export default router
