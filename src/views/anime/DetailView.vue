<template>
  <div v-for="anime in GStore.details" :key="anime.mal_id">
    <div class="dark:bg-gray-800 dark:text-gray-50">
      <div id="detail">
        <img :src="anime.images" alt="anime_image" />
        <h2>{{ anime.title }}</h2>
        <p>
          <span>Synopsis</span><br />
          {{ anime.synopsis }}
        </p>
        <p>
          <span>Genres</span><br />
          {{ anime.genres }}
        </p>
      </div>
    </div>
  </div>
  <dropdown
    v-model="select"
    :options="choice"
    :selected="choose"
    v-on:updateOption="methodToRunOnSelect"
  ></dropdown>
  <button @click="addBookmark()">Add to favorite</button>
</template>
<script>
import AnimeService from '../../service/anime/AnimeService.js';
import dropdown from 'vue-dropdowns';
export default {
  inject: ['GStore'],
  name: 'DetailView',
  components: {
    dropdown
  },
  data() {
    return {
      select: null,
      choice: [
        { name: '1' },
        { name: '2' },
        { name: '3' },
        { name: '4' },
        { name: '5' }
      ],
      choose: {
        name: '1'
      }
    };
  },
  methods: {
    addBookmark() {
      AnimeService.addBookmark(
        this.GStore.currentUser.id,
        this.GStore.details.malid,
        this.choose.name
      ).then(() => {
        alert('Success add favorite');
      });
    },
    methodToRunOnSelect(payload) {
      this.choose = payload;
    }
  }
};
</script>
<style scoped>
span {
  font-weight: bold;
}
</style>
