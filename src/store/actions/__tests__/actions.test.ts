import {User} from '../../../types';
import {ActionTypes} from '../../constants/actionTypes';
import {
  changePageAction,
  clearSearchAction,
  loadLeaderboardAction,
  searchUserAction,
  sortUsersAction,
} from '../leaderboardActions';
import {changeInputAction, changeSortOrderAction} from '../searchBarActions';

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

describe('actions leaderboardActions', () => {
  it('should create an action to load leaderboard', () => {
    const expectedAction = {
      type: ActionTypes.LOAD_LEADERBOARD,
      payload: users,
    };
    expect(loadLeaderboardAction(users)).toEqual(expectedAction);
  });

  it('should create an action to search user', () => {
    const username = 'Alice';
    const expectedAction = {
      type: ActionTypes.SEARCH_USER,
      payload: username,
    };
    expect(searchUserAction(username)).toEqual(expectedAction);
  });

  it('should create an action to sort users', () => {
    const sortedUsers = Object.values(users);
    const expectedAction = {
      type: ActionTypes.SORT_USERS,
      payload: sortedUsers,
    };
    expect(sortUsersAction(sortedUsers)).toEqual(expectedAction);
  });

  it('should create an action to change page', () => {
    const page = 2;
    const expectedAction = {
      type: ActionTypes.CHANGE_PAGE,
      payload: page,
    };
    expect(changePageAction(page)).toEqual(expectedAction);
  });

  it('should create an action to clear search', () => {
    const expectedAction = {
      type: ActionTypes.CLEAR_SEARCH,
    };
    expect(clearSearchAction()).toEqual(expectedAction);
  });
});

describe('actions leaderboardActions', () => {
  it('should create an action for input change', () => {
    const expectedAction = {
      type: ActionTypes.CHANGE_INPUT,
      payload: 'Alice',
    };
    expect(changeInputAction('Alice')).toEqual(expectedAction);
  });

  it('should create an action to change sort order', () => {
    const expectedAction = {
      type: ActionTypes.CHANGE_SORT_ORDER,
      payload: 'DESC',
    };
    expect(changeSortOrderAction('DESC')).toEqual(expectedAction);
  });
});
