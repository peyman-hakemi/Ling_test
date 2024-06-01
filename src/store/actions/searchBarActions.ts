import {ActionTypes} from '../constants/actionTypes';
import {ChangeInputAction, ChangeSortOrderAction} from './types';
import {sortOrderTypes} from '../../types';

export const changeInputAction = (username: string): ChangeInputAction => ({
  type: ActionTypes.CHANGE_INPUT,
  payload: username,
});

export const changeSortOrderAction = (
  order: sortOrderTypes,
): ChangeSortOrderAction => ({
  type: ActionTypes.CHANGE_SORT_ORDER,
  payload: order,
});
