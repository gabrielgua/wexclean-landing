import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/home', component: () => import('@/views/HomeView.vue') },
    { name: 'products', path: '/products', component: () => import('@/views/ProductsView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/home' },
  ],
  scrollBehavior(to, from) {
    if (to.name === from.name) {
      return false
    }

    return { top: 0, behavior: 'smooth' }
  },
})

export default router
