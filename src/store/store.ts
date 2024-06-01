import {createStore} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export default store;
