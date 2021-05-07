import { takeLatest, put, call, all } from 'redux-saga/effects';
import { fetchTvGenreFailed, fetchTvGenreSuccess } from './actions';
import actionTypes from './actionTypes';
import { assetsByGenres } from '../../utils/axiosUtils';

function* fetchTvGenreAsync(){
	try{
		const tvGenres = yield assetsByGenres(99, 10751)
		yield put(fetchTvGenreSuccess(tvGenres))
	}catch(error){
		yield put(fetchTvGenreFailed(error));
	}
}

function* fetchTvGenreStart() {
	yield takeLatest(actionTypes.FETCH_TV_GENRE_START, fetchTvGenreAsync)
}

export default function* genreSagas(){
	yield all([
		call(fetchTvGenreStart)
	])
}