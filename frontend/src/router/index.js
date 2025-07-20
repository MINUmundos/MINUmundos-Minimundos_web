import { createRouter, createWebHistory } from 'vue-router'
import ProductTest from '../views/ProductTest.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductTest
  },
  // other routes if needed
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
