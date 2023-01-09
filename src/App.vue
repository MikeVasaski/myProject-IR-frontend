<template>
  <MDBNavbar dark bg="dark" container>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <form class="d-flex input-group w-auto">
      <input
        type="search"
        class="form-control"
        placeholder="Type query"
        aria-label="Search"
      />
      <MDBBtn outline="white"> Search </MDBBtn>
    </form>
  </MDBNavbar>
  <router-view />
</template>
<script>
import { MDBBtn, MDBNavbar } from 'mdb-vue-ui-kit';

export default {
  components: {
    MDBBtn,
    MDBNavbar
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

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
