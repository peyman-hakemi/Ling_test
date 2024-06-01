import {User} from '../../types/userTypes';
import {sortByBananas} from '../../utils';
import {ActionTypes} from '../constants/actionTypes';
import {
  ChangePageAction,
  ClearSearchAction,
  LoadLeaderboardAction,
  SearchUserAction,
  SortUsersAction,
} from './types';

export const loadLeaderboardAction = (
  leaderboard: Record<string, User>,
): LoadLeaderboardAction => ({
  type: ActionTypes.LOAD_LEADERBOARD,
  payload: leaderboard,
});

export const searchUserAction = (username: string): SearchUserAction => ({
  type: ActionTypes.SEARCH_USER,
  payload: username,
});
export const clearSearchAction = (): ClearSearchAction => ({
  type: ActionTypes.CLEAR_SEARCH,
});
export const changePageAction = (page: number): ChangePageAction => ({
  type: ActionTypes.CHANGE_PAGE,
  payload: page,
});
export const sortUsersAction = (users: User[]): SortUsersAction => ({
  type: ActionTypes.SORT_USERS,
  payload: users,
});
