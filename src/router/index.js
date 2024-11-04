import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/ProductList.vue'
import Checkout from '../views/CheckoutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
  ],
})

export default router
