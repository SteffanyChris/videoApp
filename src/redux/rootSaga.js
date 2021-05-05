import { all, call } from 'redux-saga/effects';
import moviesAndShowsSagas from './moviesAndShows/sagas';

/* In case the application gets more complex and we have more
*   features, we can add more sagas to the array 
*/
export default function* rootSaga() {
    yield all([
        call(moviesAndShowsSagas),
    ])
}