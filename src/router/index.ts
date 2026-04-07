import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: () => import('../views/ListaEventos.vue')
  },
  {
    path: '/eventos/:id',
    name: 'detalhe-evento',
    component: () => import('../views/DetalheEvento.vue')
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    component: () => import('../views/FavoritosPage.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('../views/PerfilSobre.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;