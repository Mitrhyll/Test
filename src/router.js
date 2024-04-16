import { createRouter, createWebHistory } from 'vue-router';
import CasaMsg from './components/Home.vue';
import LoginV from './components/Login.vue';
import RegisterV from './components/RegisterV'

const routes = [
  { path: '/', component: CasaMsg },
  { path: '/login', component: LoginV },
  { path: '/register', component: RegisterV },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
