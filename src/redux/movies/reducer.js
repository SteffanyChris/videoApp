import actionTypes from './actionTypes';

const INITIAL_STATE = {
  popularMovies: [],
  isLoading: false,
  moreIsLoading: false,
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POPULAR_MOVIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_MORE_MOVIES_START:
      return {
        ...state,
        moreIsLoading: true,
      };
    case actionTypes.FETCH_POPULAR_MOVIES_SUCCESS:
    case actionTypes.FETCH_MORE_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        moreIsLoading: false,
        popularMovies: [...state.popularMovies, ...action.payload],
      };
    case actionTypes.FETCH_POPULAR_MOVIES_FAILED:
    case actionTypes.FETCH_MORE_MOVIES_FAILED:
      return {
        ...state,
        isLoading: false,
        moreIsLoading: false,
        errorMessage: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
