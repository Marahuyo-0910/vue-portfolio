import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Showcase from '../views/Showcase.vue';
import Contact from '../views/Contact.vue';
import Creative from '../views/Creative.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/portfolio/profile', component: Profile },
  { path: '/portfolio/showcase', component: Showcase },
  { path: '/portfolio/contact', component: Contact },
  { path: '/portfolio/creative', component: Creative }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
