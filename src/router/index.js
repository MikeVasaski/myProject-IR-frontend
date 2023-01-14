import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginForm from '../views/user/LoginForm.vue';
import DetailView from '../views/anime/DetailView.vue';
import GStore from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/details/:id',
    name: 'DetailView',
    props: true,
    component: DetailView,
    beforeEnter: (to) => {
      console.log(to.params.id);
      GStore.details = GStore.anime.filter(
        (itemInArray) => itemInArray.mal_id == to.params.id
      );
      console.log(GStore.details);
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
