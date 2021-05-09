import {all, call} from 'redux-saga/effects';
import moviesSagas from './movies/sagas';
import tvSagas from './tv/sagas';
import genreSagas from './assetsByGenre/sagas';
import searchSagas from './search/sagas';

/* In case the application gets more complex and we have more
 *   features, we can add more sagas to the array
 */
export default function* rootSaga() {
  yield all([
    call(moviesSagas),
    call(tvSagas),
    call(genreSagas),
    call(searchSagas),
  ]);
}
