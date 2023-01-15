// import { formatApiResponse } from '@/util/format-api-respomse';
import apiClient from '../AxiosClient';
import GStore from '@/store';

export default {
  // getAnime() {
  //   return apiClient
  //     .get('/')
  //     .then((response) => {
  //       GStore.anime = response.data;
  //       console.log(GStore.anime);
  //     })
  //     .catch((error) => {
  //       return console.log(error);
  //     });
  // },
  searchAnime(query) {
    return apiClient
      .post('/search', query)
      .then((response) => {
        GStore.data = response.data;
        GStore.anime = GStore.data.result;
        // console.log('format', formatApiResponse(response.data));
        // return formatApiResponse(response.data);
      })
      .catch((error) => {
        return console.log(error);
      });
  },
  addBookmark(uid, mal_id, score) {
    return apiClient.post('/addBookmark', {
      uid: uid,
      mal_id: mal_id,
      score: score
    });
  }
};
