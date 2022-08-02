import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Form from '../views/Form.vue'
import Login from '../views/Login.vue'
import Edit from '../views/Edit.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'list',
    component: List
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  ,
  {
    path: '/editar/:id',
    name: 'edit',
    component: Edit
  },
]

const router = new VueRouter({
  routes
})

export default router
