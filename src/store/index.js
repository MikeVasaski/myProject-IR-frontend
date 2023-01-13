import { reactive } from 'vue';
export default reactive({
  flashMessage: '',
  anime: null,
  animeList: null,
  data: null,
  currentUser: JSON.parse(localStorage.getItem('user'))
});
