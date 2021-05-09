import actionTypes from './actionTypes';

const INITIAL_STATE = {
  assetsByGenre: [],
  IsLoading: true,
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TV_GENRE_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_TV_GENRE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        assetsByGenre: action.payload,
      };
    case actionTypes.FETCH_TV_GENRE_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
