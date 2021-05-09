import actionTypes from './actionTypes';

export const fetchSearchStart = (query) => ({
	type: actionTypes.FETCH_SEARCH_START,
	payload: query
})

export const fetchSearchFailed = error => ({
	type: actionTypes.FETCH_SEARCH_FAILED,
	payload: error.message
})
export const fetchSearchSuccess = data =>({
	type: actionTypes.FETCH_SEARCH_SUCCESS,
	payload: data
})

export const clearSearch = () => ({
	type: actionTypes.CLEAR_SEARCH
})