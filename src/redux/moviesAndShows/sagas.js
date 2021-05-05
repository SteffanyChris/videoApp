import { takeLatest, put, call, all } from 'redux-saga/effects';
import { fetchPopularMoviesFailed, fetchPopularMoviesSuccess, fetchPopularShowsFailed, fetchPopularShowsSuccess } from './actions';
import actionTypes from './actionTypes';
import { getPopularMovies, getPopularTvShows } from '../../utils/axiosUtils';

function* fetchPopularShowsAsync(){
	try{
		const popularShows = yield getPopularTvShows()
		yield put(fetchPopularShowsSuccess(popularShows))
	}catch(error){
		yield put(fetchPopularShowsFailed(error));
	}
}

function* fetchPopularMoviesAsync(){
	try{
		const popularMovies = yield getPopularMovies()
		yield put(fetchPopularMoviesSuccess(popularMovies))
	}catch(error){
		yield put(fetchPopularMoviesFailed(error));
	}
}

function* fetchPopularShowsStart() {
	yield takeLatest(actionTypes.FETCH_POPULAR_SHOWS_START, fetchPopularShowsAsync)
}

function* fetchPopularMoviesStart() {
	yield takeLatest(actionTypes.FETCH_POPULAR_MOVIES_START, fetchPopularMoviesAsync)
}

export default function* tvShowsSagas(){
	yield all([
		call(fetchPopularShowsStart),
		call(fetchPopularMoviesStart)
	])
}