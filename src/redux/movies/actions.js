import actionTypes from './actionTypes';

export const fetchPopularMoviesStart = () => ({
  type: actionTypes.FETCH_POPULAR_MOVIES_START,
});
export const fetchPopularMoviesFailed = error => ({
  type: actionTypes.FETCH_POPULAR_MOVIES_FAILED,
  payload: error.message,
});
export const fetchPopularMoviesSuccess = data => ({
  type: actionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
  payload: data,
});
export const fetchMoreMoviesStart = page => ({
  type: actionTypes.FETCH_MORE_MOVIES_START,
  payload: page,
});
export const fetchMoreMoviesFailed = error => ({
  type: actionTypes.FETCH_MORE_MOVIES_FAILED,
  payload: error.message,
});
export const fetchMoreMoviesSuccess = data => ({
  type: actionTypes.FETCH_MORE_MOVIES_SUCCESS,
  payload: data,
});
