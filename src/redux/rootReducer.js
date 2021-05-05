import { combineReducers } from 'redux';
import moviesAndShowsReducer from './moviesAndShows/reducer';

/* We use combineReducers in case the application gets more complex 
*   and we need to add more reducers
*/
export default combineReducers({
    moviesAndShows: moviesAndShowsReducer,
})