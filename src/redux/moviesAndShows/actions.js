import actionTypes from './actionTypes';

export const fetchPopularShowsStart = () => ({
	type: actionTypes.FETCH_POPULAR_SHOWS_START
})
export const fetchPopularShowsFailed = error => ({
	type: actionTypes.FETCH_POPULAR_SHOWS_FAILED,
	payload: error.message
})
export const fetchPopularShowsSuccess = data =>({
	type: actionTypes.FETCH_POPULAR_SHOWS_SUCCESS,
	payload: data
})

export const fetchPopularMoviesStart = () => ({
	type: actionTypes.FETCH_POPULAR_MOVIES_START
})
export const fetchPopularMoviesFailed = error => ({
	type: actionTypes.FETCH_POPULAR_MOVIES_FAILED,
	payload: error.message
})
export const fetchPopularMoviesSuccess = data => ({
	type: actionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
	payload: data
})