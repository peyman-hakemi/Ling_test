import {sortOrderTypes} from '../../types';
import {User} from '../../types/userTypes';
import {ActionTypes} from '../constants/actionTypes';

export interface ChangeInputAction {
  type: ActionTypes.CHANGE_INPUT;
  payload: string;
}

export interface LoadLeaderboardAction {
  type: ActionTypes.LOAD_LEADERBOARD;
  payload: Record<string, any>;
}

export interface SearchUserAction {
  type: ActionTypes.SEARCH_USER;
  payload: string;
}
export interface ClearSearchAction {
  type: ActionTypes.CLEAR_SEARCH;
}

export interface SortUsersAction {
  type: ActionTypes.SORT_USERS;
  payload: User[];
}

export interface ChangeSortOrderAction {
  type: ActionTypes.CHANGE_SORT_ORDER;
  payload: sortOrderTypes;
}
export interface ChangePageAction {
  type: ActionTypes.CHANGE_PAGE;
  payload: number;
}

export type AppActions =
  | ChangeInputAction
  | LoadLeaderboardAction
  | SearchUserAction
  | SortUsersAction
  | ChangeSortOrderAction
  | ClearSearchAction
  | ChangePageAction;
