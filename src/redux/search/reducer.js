import actionTypes from './actionTypes';

const INITIAL_STATE = {
  searchResults: [],
  isLoading: false,
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SEARCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchResults: action.payload,
      };
    case actionTypes.FETCH_SEARCH_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case actionTypes.CLEAR_SEARCH:
      return {
        ...state,
        searchResults: [],
      };
    default:
      return {
        ...state,
      };
  }
};
