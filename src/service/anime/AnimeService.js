import apiClient from '../AxiosClient';
import GStore from '@/store';

export default {
  //   getAnime() {
  //     return apiClient
  //       .get('/')
  //       .then((response) => {
  //         GStore.anime = response.data;
  //         console.log(GStore.anime);
  //       })
  //       .catch((error) => {
  //         return console.log(error);
  //       });
  //   },

  searchAnime(query) {
    return apiClient
      .post('/searchByTitle', query)
      .then((response) => {
        var str_data = JSON.stringify(response.data);
        console.log(JSON.parse(str_data));
        var json_data = JSON.parse(str_data);
        GStore.anime = json_data;
      })
      .catch((error) => {
        return console.log(error);
      });
  }
};
