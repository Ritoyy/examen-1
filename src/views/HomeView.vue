<script setup></script>

<template>
  <div class="container-fluid" id="nav">
    <div class="row">
      <div class="col" style="text-align: start">
        <a href="#" style="color: gray">SHOP</a>
        <a href="#" style="color: gray; margin-inline: 30px">ABOUT US</a>
        <a href="#" style="color: gray">GLASS SKIN DUO</a>
      </div>
      <div class="col"><img src="https://i0.wp.com/beautyfeed.org/wp-content/uploads/2024/08/0-02-05-49d2ac187d2d7f767ae6122638d9714c0d32759cc6b44e9bcd74fe742e3619ab_f9b359a9a4080609.png?fit=1553%2C685&ssl=1" alt="logo" /></div>
      <div class="col" style="text-align: end">
        <a href="#" style="color: gray; margin-inline: 30px">CART</a>
        <a href="#" style="color: gray">SEARCH</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
#nav {
  top: 0%;
  width: 100vw;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 20px;
}

.row {
  display: flex;
  margin-bottom: 10px;
}

.col {
  flex: 1;
  padding: 20px;
  margin-right: 10px;
  text-align: center;
}

.col:last-child {
  margin-right: 0;
}
</style>
