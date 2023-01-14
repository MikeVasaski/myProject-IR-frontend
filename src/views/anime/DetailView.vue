<template>
  <div v-for="anime in GStore.details" :key="anime.mal_id">
    <div id="detail">
      <img :src="anime.image" alt="anime_image" />
      <h2>{{ anime.title }}</h2>
      <p>
        <span>Synopsis</span><br />
        {{ anime.synopsis }}
      </p>
    </div>
  </div>
  <button @click="addBookmark">Add to favorite</button>
</template>
<script>
import AnimeService from '../../service/anime/AnimeService.js';

export default {
  inject: ['GStore'],
  name: 'DetailView',
  methods: {
    addBookmark(query) {}
  }
};
</script>
<style scoped>
span {
  font-weight: bold;
}
</style>
