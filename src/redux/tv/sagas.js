import {takeLatest, put, call, all, takeEvery} from 'redux-saga/effects';
import {
  fetchMoreTvFailed,
  fetchMoreTvSuccess,
  fetchPopularShowsFailed,
  fetchPopularShowsSuccess,
} from './actions';
import actionTypes from './actionTypes';
import {getMoreTvShows, getPopularTvShows} from '../../utils/axiosUtils';

function* fetchPopularShowsAsync() {
  try {
    const popularShows = yield getPopularTvShows();
    yield put(fetchPopularShowsSuccess(popularShows));
  } catch (error) {
    yield put(fetchPopularShowsFailed(error));
  }
}

function* fetchMoreTvAsync({payload}) {
  try {
    const moreShows = yield getMoreTvShows(payload);
    yield put(fetchMoreTvSuccess(moreShows));
  } catch (error) {
    yield put(fetchMoreTvFailed(error));
  }
}

function* fetchPopularShowsStart() {
  yield takeLatest(
    actionTypes.FETCH_POPULAR_SHOWS_START,
    fetchPopularShowsAsync,
  );
}
function* fetchMoreTvStart() {
  yield takeEvery(actionTypes.FETCH_MORE_TV_START, fetchMoreTvAsync);
}

export default function* tvSagas() {
  yield all([call(fetchPopularShowsStart), call(fetchMoreTvStart)]);
}
