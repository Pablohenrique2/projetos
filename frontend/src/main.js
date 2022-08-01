import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import router from './router'

createApp(App).use(router).mount('#app')
=======
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
>>>>>>> fec294bd1dbc9a5851e7e3ed7efd8981d71c1663
