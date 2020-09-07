<template>
  <v-app light id="app">
    <Home></Home>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "./views/Home.vue";
import Footer from "./views/Footer.vue";

export default Vue.extend({
  name: "App",
  components: {
    Footer,
    Home
  }
});
</script>

<style lang="scss">
@import "@/sass/variables.scss";

#app {
  font-family: $body-font-family;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app.theme--light.v-application {
  color: #5e6472;
}
</style>
