import actionTypes from './actionTypes';

const INITIAL_STATE = {
	popularTvShows: [],
	isLoading: false,
	moreIsLoading: false,
	errorMessage: ''
}

export default (state=INITIAL_STATE, action ) => {
	switch(action.type){
		case actionTypes.FETCH_POPULAR_SHOWS_START:
			return{
				...state,
				isLoading: true
			}
		case actionTypes.FETCH_MORE_TV_START:
			return{
				...state,
				moreIsLoading: true
			}
		case actionTypes.FETCH_POPULAR_SHOWS_SUCCESS:
		case actionTypes.FETCH_MORE_TV_SUCCESS:
			return{
				...state,
				isLoading: false,
				moreIsLoading: false,
				popularTvShows: [...state.popularTvShows, ...action.payload]
			}
		case actionTypes.FETCH_POPULAR_SHOWS_FAILED:
		case actionTypes.FETCH_MORE_TV_FAILED:
			return{
				...state,
				isLoading: false,
				moreIsLoading: false,
				errorMessage: action.payload
			}
		default:
			return{
				...state
			}
	}
}