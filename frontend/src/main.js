import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

createApp(App).mount('#app')

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: login },
    { path: '/home', component: home },
  ]
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })