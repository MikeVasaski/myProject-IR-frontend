import { reactive } from 'vue';
export default reactive({
  flashMessage: '',
  anime: null,
  currentUser: JSON.parse(localStorage.getItem('user'))
});
