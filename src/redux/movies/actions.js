import actionTypes from './actionTypes';

export const fetchPopularMoviesStart = (page) => ({
	type: actionTypes.FETCH_POPULAR_MOVIES_START,
	payload: page
})
export const fetchPopularMoviesFailed = error => ({
	type: actionTypes.FETCH_POPULAR_MOVIES_FAILED,
	payload: error.message
})
export const fetchPopularMoviesSuccess = data => ({
	type: actionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
	payload: data
})