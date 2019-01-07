<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <div class="adv"></div>
  </div>
</template>

<script>
  import Vue from "vue";
  // import "./sass/common.scss";
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
@import "./sass/common.scss";
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.adv{
  height: 50px;
  background: #f00;
}


</style>
