import { GET_MOVIES, SET_SEARCH_STRING } from './actions';

const initialState = {
  movies: [],
  searchString: '',
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case SET_SEARCH_STRING:
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
}

export default moviesReducer;
