import axios from 'axios';

export const GET_MOVIES = 'FETCH_MOVIES';
export const SET_SEARCH_STRING = 'SET_SEARCH_STRING';
export const LOADING = 'LOADING';
export const CLEAR_DATA = 'CLEAR_DATA';

const API_URL = 'https://www.omdbapi.com/';
const API_KEY = 'a1c1d7fe';

export const getMovies = (serchString, page = 1) => {
  const BASE_URL = `${API_URL}?s=${serchString}&page=${page}&apikey=${API_KEY}`;
  try {
    return async (dispatch) => {
      if (page === 1) {
        dispatch({
          type: LOADING,
          payload: true,
        });
      }
      const res = await axios.get(`${BASE_URL}`);
      console.log('res', res);
      if (res.data) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
  }
};

export const setSearchString = (searchString) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_STRING,
    payload: searchString,
  });
};

export const setLoading = (data) => (dispatch) => {
  dispatch({
    type: LOADING,
    payload: data,
  });
};

export const setClearData = (data) => (dispatch) => {
  dispatch({
    type: CLEAR_DATA,
    payload: data,
  });
};
