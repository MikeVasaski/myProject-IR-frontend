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
</template>
<script>
export default {
  inject: ['GStore'],
  name: 'DetailView'
};
</script>
<style scoped>
span {
  font-weight: bold;
}
</style>
