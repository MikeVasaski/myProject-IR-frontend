<template>
  <Navbarcomp></Navbarcomp>
  <router-view />
</template>
<script>
import Navbarcomp from './components/NavbarComp.vue';
export default {
  inject: ['GStore'],
  name: 'HomeView',
  components: {
    Navbarcomp
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #2c3e50;
}
</style>
