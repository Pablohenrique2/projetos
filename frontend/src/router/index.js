import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import List from '../views/List.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import Edit from '../views/Edit.vue';
import Perfil from '../views/Perfil.vue';

Vue.use(VueRouter);
function guest(to, from, next) {
  if (localStorage.activeUser) {
    next({ name: 'Home' });
  } else next();
}

function guard(to, from, next) {
  if (localStorage.activeUser) {
    next();
  } else next({ name: 'Login' });
}

const routes = [
  {
    path: '/admin',
    name: 'list',
    component: List,
    beforeEnter: guard,
  },

  {
    path: '/editar/:id',
    name: 'edit',
    component: Edit,
    beforeEnter: guard,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: guest,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: guest,
  },

  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil,
    beforeEnter: guard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
