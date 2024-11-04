import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '@/components/ProductDetails.vue' // Path to your product detail page
import ProductList from '../views/ProductList.vue'
import Checkout from '../views/CheckoutPage.vue'
import Cart from '../views/CartView.vue'
import Also from '../components/AlsoLike.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/productlist',
      name: 'productlist',
      component: ProductList,
    },
    {
      path: '/products/:ID',
      name: 'ProductDetail',
      component: ProductDetail,
      props: true, // This allows passing the route parameter as a prop to the component
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    { path: '/checkout', name: 'checkout', component: Checkout },
<<<<<<< HEAD
=======
    { path: '/also', name: 'also', component: Also },
>>>>>>> 3d237eab8ea9baf46eccd7dcc03d9c15e5d311ce
  ],
})

export default router
