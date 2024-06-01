import {User} from '../../../types';
import {ActionTypes} from '../../constants/actionTypes';
import {LeaderboardState} from '../leaderboardReducer';
import {
  changePage,
  clearSearch,
  loadLeaderboard,
  searchUser,
  sortUsers,
} from '../leaderboardReducerFunctions';

import {
  ChangePageAction,
  LoadLeaderboardAction,
  SearchUserAction,
  SortUsersAction,
} from '../../actions/types';

const initialState: LeaderboardState = {
  leaderboard: [],
  filteredUsers: [],
  page: 1,
};

const users: Record<string, User> = {
  '00D1LA8puAa1GINkVpfgC1TmO0m1': {
    bananas: 200,
    lastDayPlayed: '2018-11-22',
    longestStreak: 1,
    name: 'Rica Ella Francisco',
    stars: 6,
    subscribed: false,
    uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
  },
  x8RNvUgv5pZqDVatEXb2aYgSflq1: {
    bananas: 0,
    lastDayPlayed: '2017-11-01',
    longestStreak: 0,
    name: 'Adh Fuoo',
    stars: 4,
    subscribed: false,
    uid: 'x8RNvUgv5pZqDVatEXb2aYgSflq1',
  },

  ylL3XqPOlycHiPBuf1uXHlgZzEr2: {
    bananas: 150,
    lastDayPlayed: '2018-10-17',
    longestStreak: 1,
    name: 'Jayne Su YueHe',
    stars: 4,
    subscribed: false,
    uid: 'ylL3XqPOlycHiPBuf1uXHlgZzEr2',
  },
};

describe('leaderboardReducerFunctions', () => {
  it('should handle loadLeaderboard', () => {
    const action: LoadLeaderboardAction = {
      type: ActionTypes.LOAD_LEADERBOARD,
      payload: users,
    };
    const newState = loadLeaderboard(initialState, action);
    expect(newState.leaderboard.length).toBe(3);
    expect(newState.leaderboard[0].rank).toBe(1);
  });

  it('should handle searchUser', () => {
    const stateWithUsers = {...initialState, leaderboard: Object.values(users)};
    const action: SearchUserAction = {
      type: ActionTypes.SEARCH_USER,
      payload: 'Rica Ella Francisco',
    };
    const newState = searchUser(stateWithUsers, action);
    expect(newState.filteredUsers.length).toBe(3);
    expect(newState.filteredUsers[0].name).toBe('Rica Ella Francisco');
  });

  it('should handle sortUsers', () => {
    const action: SortUsersAction = {
      type: ActionTypes.SORT_USERS,
      payload: Object.values(users),
    };
    const newState = sortUsers(initialState, action);
    expect(newState.filteredUsers.length).toBe(3);
    expect(newState.filteredUsers[0].name).toBe('Rica Ella Francisco');
  });

  it('should handle changePage', () => {
    const action: ChangePageAction = {
      type: ActionTypes.CHANGE_PAGE,
      payload: 2,
    };
    const newState = changePage(initialState, action);
    expect(newState.page).toBe(2);
  });

  it('should handle clearSearch', () => {
    const stateWithFilteredUsers = {
      ...initialState,
      filteredUsers: Object.values(users),
    };
    const newState = clearSearch(stateWithFilteredUsers);
    expect(newState.filteredUsers.length).toBe(3);
    expect(newState.page).toBe(1);
  });
});
