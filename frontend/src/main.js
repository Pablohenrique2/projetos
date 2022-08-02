import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue } from 'bootstrap-vue';
import './plugins/axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
if (localStorage.users === undefined) {
  let users = [
    {
      username: 'admin',
      email: 'admin@gmail.coma',
      password: 'admin',
    },
  ];
  localStorage.setItem('users', JSON.stringify(users));
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
