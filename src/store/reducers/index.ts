import {combineReducers} from 'redux';
import leaderBoardReducer from './leaderboardReducer';
import searchBarReducer from './searchBarReducer';
import {AppStore} from '../store';

const rootReducer = combineReducers({
  leaderBoard: leaderBoardReducer,
  searchBar: searchBarReducer,
});

export type RootState = ReturnType<AppStore['getState']>;

export default rootReducer;
