<template>
  <div id="nav">
    <div class="menu">
      <div class="navbar">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
      </div>

      <Form @submit="search" :validation-schema="schema">
        <Field name="search" type="text" class="form-control" />
        <div class="form-group">
          <button class="btn btn-primary btn-block">
            <span>Search</span>
          </button>
        </div>
      </Form>
      <div id="nav">
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
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field } from 'vee-validate';
import AuthService from '../service/AuthService.js';
import AnimeService from '../service/anime/AnimeService.js';

export default {
  inject: ['GStore'],
  name: 'NavbarComp',
  components: {
    Form,
    Field
  },
  methods: {
    logout() {
      AuthService.logout();
      this.$router.go();
    },
    search(query) {
      console.log(query);
      AnimeService.searchAnime(query);
      // setTimeout(() => this.$route.push('animeList'), 200)
    }
  }
};
</script>
<style scoped>
#nav {
  background: rgba(201, 0, 241, 0.925);
}
.menu {
  display: flex;
  flex-direction: row;
}
MDBNavbar {
  display: flex;
  flex-direction: row;
}
</style>
