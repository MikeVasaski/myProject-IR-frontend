<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarBrand href="#">
      <img src="../assets/baidu.png" alt="logo" width="150px" height="150px" />
    </MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem>
          <router-link :to="{ name: 'home' }">Home</router-link><br />
        </MDBNavbarItem>
        <MDBNavbarItem>
          <router-link :to="{ name: 'about' }">About</router-link><br />
        </MDBNavbarItem>

        <MDBNavbarItem to="#" disabled> Disabled </MDBNavbarItem>
      </MDBNavbarNav>
      <!-- Search form -->
      <form class="d-flex input-group w-auto">
        <input
          type="search"
          class="form-control"
          placeholder="Type query"
          aria-label="Search"
        />
        <MDBBtn outline="warning">Search</MDBBtn>
      </form>
      <nav class="navbar navbar-expand">
        <ul v-if="!GStore.currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              <font-awesome-icon icon="sign-in-alt" /> Login
            </router-link>
          </li>
        </ul>
        <ul v-if="GStore.currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/profile" class="nav-link">
              <font-awesome-icon icon="user" />
              {{ GStore.currentUser.name }}
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logout">
              <font-awesome-icon icon="sign-out-alt" /> Logout
            </a>
          </li>
        </ul>
      </nav>
    </MDBCollapse>
  </MDBNavbar>
</template>
<script>
import AuthService from '../service/AuthService.js';
export default {
  inject: ['GStore'],
  methods: {
    logout() {
      AuthService.logout();
      this.$router.go();
    }
  }
};
</script>
