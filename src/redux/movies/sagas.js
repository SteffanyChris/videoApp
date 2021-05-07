import { takeLatest, put, call, all } from 'redux-saga/effects';
import { fetchPopularMoviesFailed, fetchPopularMoviesSuccess } from './actions';
import actionTypes from './actionTypes';
import { getPopularMovies } from '../../utils/axiosUtils';

function* fetchPopularMoviesAsync({payload}){
	try{
		const popularMovies = yield getPopularMovies(payload)
		yield put(fetchPopularMoviesSuccess(popularMovies))
	}catch(error){
		yield put(fetchPopularMoviesFailed(error));
	}
}

function* fetchPopularMoviesStart() {
	yield takeLatest(actionTypes.FETCH_POPULAR_MOVIES_START, fetchPopularMoviesAsync)
}

export default function* movieSagas(){
	yield all([
		call(fetchPopularMoviesStart)
	])
}