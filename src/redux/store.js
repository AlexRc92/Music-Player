import { createStore, combineReducers } from 'redux';
import { playing, songs } from './reducers/index';

const reducer = combineReducers({
    playing,
    songs
});

const store = createStore(reducer);

export default store;