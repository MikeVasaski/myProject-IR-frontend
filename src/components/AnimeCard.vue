<template>
  <router-link
    class="anime-link"
    :to="{ name: 'DetailView', params: { id: anime.mal_id } }"
  >
    <div class="anime-card">
      <img :src="anime.images" alt="anime_image" />
      <h4>{{ anime.title }}</h4>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'AnimeCard',
  props: {
    anime: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
.anime-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #5c3956;
  margin-bottom: 18px;
}
.anime-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(255, 0, 149, 0.459);
}
.anime-link {
  color: #59335e;
  text-decoration: none;
}
</style>
