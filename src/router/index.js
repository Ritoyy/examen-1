import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD
import Product from '../views/Product.vue'
import ProductDetail from '@/components/ProductDetails.vue' // Path to your product detail page
import ProductList from '../views/ProductList.vue'
=======
import Product from '../views/ProductList.vue'
import Checkout from '../views/CheckoutPage.vue'
>>>>>>> a2cdf1701fb6d4730f3c8c4447dd2ee2b2891a10

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
<<<<<<< HEAD
      path: '/productlist',
      name: 'productlist',
      component: ProductList,
    },
    {
      path: '/products/:ID',
      name: 'ProductDetail',
      component: ProductDetail,
      props: true, // This allows passing the route parameter as a prop to the component
=======
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
>>>>>>> a2cdf1701fb6d4730f3c8c4447dd2ee2b2891a10
    },
  ],
})

export default router
