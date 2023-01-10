<template>
  <div class="home">
    <AnimeCard
      v-for="anime in anime"
      :key="anime.mal_id"
      :anime="anime"
    ></AnimeCard>
    {{ GStore.animeTitle }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import AnimeCard from '@/components/AnimeCard.vue';

export default {
  inject: ['GStore'],
  name: 'HomeView',
  components: {
    AnimeCard
  }
};
</script>
