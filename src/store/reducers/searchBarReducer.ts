import {RootState} from '.';
import {sortOrderTypes} from '../../types';
import {AppActions} from '../actions/types';
import {ActionTypes} from '../constants/actionTypes';

interface SearchBarState {
  inputValue: string;
  sortOrder: sortOrderTypes;
}

const initialState: SearchBarState = {
  inputValue: '',
  sortOrder: 'ASC',
};

const searchBarReducer = (
  state = initialState,
  action: AppActions,
): SearchBarState => {
  switch (action.type) {
    case ActionTypes.CHANGE_INPUT:
      return {
        ...state,
        inputValue: action.payload,
      };
    case ActionTypes.CHANGE_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };
    default:
      return state;
  }
};

export const selectInputValue = (state: RootState) =>
  state.searchBar.inputValue;
export const selectSortOrder = (state: RootState) => state.searchBar.sortOrder;

export default searchBarReducer;
