<!-- ProductList.vue (or any other component) -->
<template>
  <div v-for="product in products" :key="product.ID">
    <h2 @click="goToProduct(product.ID)">{{ product.nombre }}</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const products = ref([
  { ID: 1, nombre: 'Product 1' },
  { ID: 2, nombre: 'Product 2' },
  // ... other products
]);

function goToProduct(ID) {
  router.push({ name: 'ProductDetail', params: { ID } });
}
</script>
