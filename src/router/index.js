import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/SobreView.vue')
  },
  {
    path: '/acomodacoes',
    name: 'acomodacoes',
    component: () => import('../views/AcomodacoesView.vue')
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: () => import('../views/ReservasView.vue')
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import('../views/ContatoView.vue')
  },
  {
    path: '/minhasreservas',
    name: 'minhasreservas',
    component: () => import('../views/MinhasReservas.vue')
  },
  {
    path: '/loginfunc',
    name: 'loginfunc',
    component: () => import('../views/LoginFunc.vue')
  },
  {
    path: '/admHome',
    name: 'admHome',
    component: () => import('../views/Adm/AdmHome.vue')
  },
  {
    path: '/admUsers',
    name: 'admUsers',
    component: () => import('../views/Adm/AdmUsers.vue')
  }
  ,
  {
    path: '/admAcomodacoes',
    name: 'admAcomodacoes',
    component: () => import('../views/Adm/AdmAcomodacoes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
