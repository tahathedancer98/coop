import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/se-connecter',
    component: () => import('../views/SeConnecter.vue')
  },
  {
    path: '/creer-compte',
    component: () => import('../views/CreerCompte.vue')
  },
  {
    path: '/conversations',
    component: () => import('../views/Conversations.vue')
  },
  {
    path: '/conversations/:id',
    component: () => import('../views/Conversation.vue')
  },
  {
    path: '/membres',
    component: () => import('../views/Membres.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
