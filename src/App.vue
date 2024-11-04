<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
</script>

<template>
  <div class="px-8">
    <Navbar />
    <RouterView />
  </div>
</template>
