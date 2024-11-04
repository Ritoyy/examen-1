<template>

  <div>
    <p class="shopall" style="font-size: 60px;">SHOP ALL</p>
    <ul class="lista-opciones">
    <li>ALL</li>
    <li>TONER ESSENCE</li>
    <li>MASK</li>
    <li>SERUM</li>
  </ul>
  </div>
  <div class="contenedor-productos">
    <!-- Fila 1 -->
    <div class="grid-productos">
      <div class="producto imagen-grande" v-if="productos[0]">
        <img :src="productos[0].imagen" :alt="productos[0].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[0].nombre }}</span>
          <span class="producto-precio">${{ productos[0].precio }}</span>
        </div>
      </div>
      <div class="producto" v-if="productos[1]">
        <img :src="productos[1].imagen" :alt="productos[1].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[1].nombre }}</span>
          <span class="producto-precio">${{ productos[1].precio }}</span>
        </div>
      </div>
      <div class="producto" v-if="productos[2]">
        <img :src="productos[2].imagen" :alt="productos[2].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[2].nombre }}</span>
          <span class="producto-precio">${{ productos[2].precio }}</span>
        </div>
      </div>
    </div>

    <!-- Fila 2 -->
    <div class="grid-productos">
      <div class="producto" v-if="productos[3]">
        <img :src="productos[3].imagen" :alt="productos[3].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[3].nombre }}</span>
          <span class="producto-precio">${{ productos[3].precio }}</span>
        </div>
      </div>
      <div class="producto vacio"></div> <!-- Espacio vacío -->
      <div class="producto" v-if="productos[4]">
        <img :src="productos[4].imagen" :alt="productos[4].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[4].nombre }}</span>
          <span class="producto-precio">${{ productos[4].precio }}</span>
        </div>
      </div>
      <div class="producto" v-if="productos[5]">
        <img :src="productos[5].imagen" :alt="productos[5].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[5].nombre }}</span>
          <span class="producto-precio">${{ productos[5].precio }}</span>
        </div>
      </div>
    </div>

    <!-- Fila 3 -->
    <div class="grid-productos">
      <div class="producto vacio"></div> 
      <div class="producto" v-if="productos[6]">
        <img :src="productos[6].imagen" :alt="productos[6].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[6].nombre }}</span>
          <span class="producto-precio">${{ productos[6].precio }}</span>
        </div>
      </div>
      <div class="producto vacio"></div> 
      <div class="producto" v-if="productos[7]">
        <img :src="productos[7].imagen" :alt="productos[7].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[7].nombre }}</span>
          <span class="producto-precio">${{ productos[7].precio }}</span>
        </div>
      </div>
    </div>

    <!-- Fila 4 -->
    <div class="grid-productos">
      <div class="producto" v-if="productos[8]">
        <img :src="productos[8].imagen" :alt="productos[8].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[8].nombre }}</span>
          <span class="producto-precio">${{ productos[8].precio }}</span>
        </div>
      </div>
      <div class="producto" v-if="productos[9]">
        <img :src="productos[9].imagen" :alt="productos[9].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[9].nombre }}</span>
          <span class="producto-precio">${{ productos[9].precio }}</span>
        </div>
      </div>
      <div class="producto imagen-grande-horizontal" v-if="productos[10]">
        <img :src="productos[10].imagen" :alt="productos[10].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[10].nombre }}</span>
          <span class="producto-precio">${{ productos[10].precio }}</span>
        </div>
      </div>
    </div>
  </div>
  <ul style="text-align: center;">SHOW MORE</ul>
</template>

<script>
export default {
  data() {
    return {
      productos: []
    };
  },
  mounted() {
    fetch("https://66a189667053166bcabf3141.mockapi.io/producs")
      .then((response) => response.json())
      .then((data) => {
        this.productos = data;
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  }
};
</script>

<style scoped>
.shopall{
  font-family: none;
}

.lista-opciones {
      display: flex;
      gap: 10px; 
      list-style-type: none;
      padding: 0;
      margin: 0;
      color: gray;
      :hover{
        color: black;
        cursor: pointer;
      }
    }

.contenedor-productos {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.grid-productos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 1000px;
}

.producto {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Imagenes */
.imagen-grande {
  grid-column: span 2;
}

.imagen-grande-horizontal {
  grid-column: span 2;
}

.vacio {
  background: transparent;
}

.imagen-producto {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.producto-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
}

.producto-nombre {
  font-weight: bold;
  text-align: left;
}

.producto-precio {
  color: #555;
  text-align: right;
}
</style>






