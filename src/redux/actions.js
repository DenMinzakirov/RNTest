import axios from 'axios';

export const GET_MOVIES = 'FETCH_MOVIES';

const API_URL = 'https://www.omdbapi.com/';
const API_KEY = 'a1c1d7fe';

export const getMovies = (serchString, page = 1) => {
    const BASE_URL = `${API_URL}?s=${serchString}&page=${page}&apikey=${API_KEY}`;
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);
      console.log('res',res);
      if (res.data) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data.Search,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
      console.log('error',error);
  }
};
