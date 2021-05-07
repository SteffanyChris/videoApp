import { combineReducers } from 'redux';
import moviesReducer from './movies/reducer';
import tvReducer from './tv/reducer';
import genresReducer from './assetsByGenre/reducer';

/* We use combineReducers in case the application gets more complex 
*   and we need to add more reducers
*/
export default combineReducers({
    movies: moviesReducer,
    tv: tvReducer,
    assetsByGenres: genresReducer
})