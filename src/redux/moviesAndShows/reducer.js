import actionTypes from './actionTypes';

const INITIAL_STATE = {
	popularMovies: [],
	popularTvShows: [],
	isLoading: false,
	errorMessage: ''
}

export default (state=INITIAL_STATE, action ) => {
	switch(action.type){
		case actionTypes.FETCH_POPULAR_SHOWS_START:
		case actionTypes.FETCH_POPULAR_MOVIES_START:
			return{
				...state,
				isLoading: true
			}
		case actionTypes.FETCH_POPULAR_SHOWS_SUCCESS:
			return{
				...state,
				isLoading: false,
				popularTvShows: action.payload
			}
		case actionTypes.FETCH_POPULAR_MOVIES_SUCCESS:
			return{
				...state,
				isLoading: false,
				popularMovies: action.payload
			}
		case actionTypes.FETCH_POPULAR_SHOWS_FAILED:
		case actionTypes.FETCH_POPULAR_MOVIES_FAILED:
			return{
				...state,
				isLoading: false,
				errorMessage: action.payload
			}
		default:
			return{
				...state
			}
	}
}