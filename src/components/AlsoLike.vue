<template>
    <div class="also-like-container">
      <p style="font-family: none; font-size: 60px; text-align: start;">YOU MAY ALSO LIKE</p>
      <div class="productos-grid">
        <div class="producto" v-for="producto in LKProductos" :key="producto.id">
          <img :src="producto.imagen" :alt="producto.nombre" class="producto-imagen" />
          <p class="producto-categoria">{{ producto.categoria }}</p>
          <div class="producto-info">
            <span class="producto-nombre">{{ producto.nombre }}</span>
            <span class="producto-precio">${{ producto.precio }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productos: [],
        LKProductos: [],
      };
    },
    mounted() {
      fetch("https://66a189667053166bcabf3141.mockapi.io/producs")
        .then((response) => response.json())
        .then((data) => {
          this.productos = data;
          this.seleccionarMasGustados();
        })
    },
    methods: {
      seleccionarMasGustados() {
        this.LKProductos = this.productos
          .slice(0, 3);
      },
    },
  };
  </script>
  
  <style scoped>
  .also-like-container {
    padding: 20px;
    text-align: center;
    max-width: 1000px; 
    margin: 0 auto;
  }
  
  .productos-grid {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  
  .producto {
    flex: 1;
    max-width: 800px;
    padding: 10px;
  }
  
  .producto-imagen {
    width: 100%;
    margin-bottom: 10px;
  }
  
  .producto-info {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }
  
  .producto-categoria {
    text-align: left;
  }

  .producto-nombre {
   color: gray;
   font-size: 13px;
    text-align: left;
  }
  
  .producto-precio {
    text-align: right;
  }
  </style>
  
  
  
  