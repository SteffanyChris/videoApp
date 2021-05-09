import {takeLatest, put, call, all, takeEvery} from 'redux-saga/effects';
import {clearSearch, fetchSearchFailed, fetchSearchSuccess} from './actions';
import actionTypes from './actionTypes';
import {searchMovieAndTv} from '../../utils/axiosUtils';

function* fetchSearchAsync({payload}) {
  try {
    const search = yield searchMovieAndTv(payload);
    yield put(fetchSearchSuccess(search));
  } catch (error) {
    yield put(fetchSearchFailed(error));
  }
}

function* clearSearchResults() {
  clearSearch();
}

function* fetchSearchStart() {
  yield takeLatest(actionTypes.FETCH_SEARCH_START, fetchSearchAsync);
}

function* clearSearchStart() {
  yield takeEvery(actionTypes.CLEAR_SEARCH, clearSearchResults);
}

export default function* searchSagas() {
  yield all([call(fetchSearchStart), call(clearSearchStart)]);
}
