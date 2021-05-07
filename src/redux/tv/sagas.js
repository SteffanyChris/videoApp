import { takeLatest, put, call, all } from 'redux-saga/effects';
import { fetchPopularShowsFailed, fetchPopularShowsSuccess, fetchTvGenreFailed, fetchTvGenreSuccess } from './actions';
import actionTypes from './actionTypes';
import { getPopularTvShows } from '../../utils/axiosUtils';

function* fetchPopularShowsAsync({payload}){
	try{
		const popularShows = yield getPopularTvShows(payload)
		yield put(fetchPopularShowsSuccess(popularShows))
	}catch(error){
		yield put(fetchPopularShowsFailed(error));
	}
}

function* fetchPopularShowsStart() {
	yield takeLatest(actionTypes.FETCH_POPULAR_SHOWS_START, fetchPopularShowsAsync)
}

export default function* tvSagas(){
	yield all([
		call(fetchPopularShowsStart)
	])
}