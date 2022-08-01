import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../pages/login/loginComponent.vue'
import HomeView from '../pages/home/homeComponent.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'login',
    component: login
  
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
