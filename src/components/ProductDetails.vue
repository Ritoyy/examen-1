<!-- src/views/ProductDetail.vue -->
<template>
  <div v-if="product">
    <div class="bg-stone-200 h-screen px-12 py-16">
      <!-- Nombre -->
      <div class="text-6xl text-center">{{ product.nombre }}</div>

      <!-- Columnas -->
      <div class="grid grid-cols-3">

        <!-- Información y precio -->
        <div class="">
            <p class="align-self-center">caca</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref(null)
const quantity = ref(1)

async function fetchProduct(ID) {
  try {
    const response = await fetch(
      `https://66a189667053166bcabf3141.mockapi.io/producs?ID=${ID}`,
    )
    if (!response.ok) {
      throw new Error(`Product not found: ${response.status}`)
    }
    const data = await response.json()
    product.value = data[0] // Update the product ref with the retrieved data
  } catch (error) {
    console.error(`Error fetching product: ${error.message}`)
  }
}

// Fetch product data when the component is mounted
onMounted(() => {
  const productId = route.params.ID
  try {
    fetchProduct(productId)
  } catch (error) {
    console.error(`Error fetching product: ${error.message}`)
  }
})

const removeFromQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}
</script>
