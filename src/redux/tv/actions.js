import actionTypes from './actionTypes';

export const fetchPopularShowsStart = (page) => ({
	type: actionTypes.FETCH_POPULAR_SHOWS_START, 
	payload: page
})
export const fetchPopularShowsFailed = error => ({
	type: actionTypes.FETCH_POPULAR_SHOWS_FAILED,
	payload: error.message
})
export const fetchPopularShowsSuccess = data =>({
	type: actionTypes.FETCH_POPULAR_SHOWS_SUCCESS,
	payload: data
})
export const fetchMoreTvStart = (page) => ({
	type: actionTypes.FETCH_MORE_TV_START, 
	payload: page
})
export const fetchMoreTvFailed = error => ({
	type: actionTypes.FETCH_MORE_TV_FAILED,
	payload: error.message
})
export const fetchMoreTvSuccess = data =>({
	type: actionTypes.FETCH_MORE_TV_SUCCESS,
	payload: data
})