import {AppActions} from '../actions/types';
import {ActionTypes} from '../constants/actionTypes';
import {User} from '../../types/userTypes';
import {RootState} from '.';
import {
  loadLeaderboard,
  searchUser,
  sortUsers,
  changePage,
  clearSearch,
} from './leaderboardReducerFunctions';

export interface LeaderboardState {
  leaderboard: User[];
  filteredUsers: User[];
  page: number;
}

const initialState: LeaderboardState = {
  leaderboard: [],
  filteredUsers: [],
  page: 1,
};

const leaderboardReducer = (
  state = initialState,
  action: AppActions,
): LeaderboardState => {
  switch (action.type) {
    case ActionTypes.LOAD_LEADERBOARD:
      return loadLeaderboard(state, action);
    case ActionTypes.SEARCH_USER:
      return searchUser(state, action);
    case ActionTypes.SORT_USERS:
      return sortUsers(state, action);
    case ActionTypes.CHANGE_PAGE:
      return changePage(state, action);
    case ActionTypes.CLEAR_SEARCH:
      return clearSearch(state);
    default:
      return state;
  }
};

export const selectFilteredUsers = (state: RootState) =>
  state.leaderBoard.filteredUsers;
export const selectPage = (state: RootState) => state.leaderBoard.page;

export default leaderboardReducer;
