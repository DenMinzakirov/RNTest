import {
  GET_MOVIES,
  SET_SEARCH_STRING,
  LOADING,
  CLEAR_DATA,
  MODAL_DATA,
  HIDE_DATA,
} from './actions';

const initialState = {
  movies: [],
  searchString: '',
  loading: false,
  totalResults: 0,
  isVisibleModal: false,
  modalData: {
    Poster: '',
    Title: '',
    Type: '',
    Year: '',
    imdbID: '',
  },
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload.Search
          ? state.movies.concat(action.payload.Search)
          : [],
        loading: false,
        totalResults: action.payload.totalResults,
      };
    case SET_SEARCH_STRING:
      return { ...state, searchString: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    case CLEAR_DATA:
      return { ...state, movies: [] };
    case MODAL_DATA:
      return { ...state, modalData: action.payload, isVisibleModal: true };
    case HIDE_DATA:
      return {
        ...state,
        modalData: {
          Poster: '',
          Title: '',
          Type: '',
          Year: '',
          imdbID: '',
        },
        isVisibleModal: false,
      };
    default:
      return state;
  }
}

export default moviesReducer;
