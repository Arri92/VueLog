import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue'
import Loginfailed from '../pages/Loginfailed.vue'
import Loginaccepted from '../pages/Loginaccepted.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/loginfailed',
    name: 'Loginfailed',
    component: Loginfailed,
  },
  {
    path: '/loginaccepted',
    name: 'Loginaccepted',
    component: Loginaccepted,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;