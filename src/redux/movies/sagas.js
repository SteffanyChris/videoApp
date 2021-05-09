import { takeLatest, put, call, all, takeEvery } from 'redux-saga/effects';
import { fetchMoreMoviesFailed, fetchMoreMoviesSuccess, fetchPopularMoviesFailed, fetchPopularMoviesSuccess } from './actions';
import actionTypes from './actionTypes';
import { getMoreMovies, getPopularMovies } from '../../utils/axiosUtils';

function* fetchPopularMoviesAsync(){
	try{
		const popularMovies = yield getPopularMovies()
		yield put(fetchPopularMoviesSuccess(popularMovies))
	}catch(error){
		yield put(fetchPopularMoviesFailed(error));
	}
}

function* fetchMoreMoviesAsync({payload}){
	try{
		const moreMovies = yield getMoreMovies(payload)
		yield put(fetchMoreMoviesSuccess(moreMovies))
	}catch(error){
		yield put(fetchMoreMoviesFailed(error));
	}
}

function* fetchPopularMoviesStart() {
	yield takeLatest(actionTypes.FETCH_POPULAR_MOVIES_START, fetchPopularMoviesAsync)
}

function* fetchMoreMoviesStart() {
	yield takeEvery(actionTypes.FETCH_MORE_MOVIES_START, fetchMoreMoviesAsync)
}

export default function* movieSagas(){
	yield all([
		call(fetchPopularMoviesStart),
		call(fetchMoreMoviesStart)
	])
}