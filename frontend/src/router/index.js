import { createRouter, createWebHistory } from 'vue-router'
import ProductTest from '../views/ProductTest.vue'
import BookDetail from '../views/BookDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: ProductTest },
  { path: '/books/:slug', name: 'BookDetail', component: BookDetail }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
