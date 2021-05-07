import actionTypes from './actionTypes';

export const fetchTvGenreStart = () => ({
	type: actionTypes.FETCH_TV_GENRE_START,
})

export const fetchTvGenreFailed = error => ({
	type: actionTypes.FETCH_TV_GENRE_FAILED,
	payload: error.message
})
export const fetchTvGenreSuccess = data =>({
	type: actionTypes.FETCH_TV_GENRE_SUCCESS,
	payload: data
})