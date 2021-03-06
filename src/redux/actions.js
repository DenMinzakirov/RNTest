import apiService from '../services/apiService'

export const GET_MOVIES = 'FETCH_MOVIES';
export const SET_SEARCH_STRING = 'SET_SEARCH_STRING';
export const LOADING = 'LOADING';
export const CLEAR_DATA = 'CLEAR_DATA';
export const MODAL_DATA = 'MODAL_DATA';
export const HIDE_DATA = 'HIDE_DATA'

const API_KEY = 'a1c1d7fe';

export const getMovies = (serchString, page = 1) => {
  try {
    return async (dispatch) => {
      if (page === 1) {
        dispatch({
          type: LOADING,
          payload: true,
        });
      }
      const res = await apiService.get(`/?s=${serchString}&page=${page}&apikey=${API_KEY}`);
      if (res.data) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {}
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

export const setModalData = (data) => (dispatch) => {
  dispatch({
    type: MODAL_DATA,
    payload: data,
  });
};

export const hideModalData = () => (dispatch) => {
    dispatch({
      type: HIDE_DATA,
    });
  };