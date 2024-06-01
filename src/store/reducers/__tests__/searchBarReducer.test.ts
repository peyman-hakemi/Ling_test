// searchBarReducer.test.ts

import {sortOrderTypes} from '../../../types';
import {
  changeInputAction,
  changeSortOrderAction,
} from '../../actions/searchBarActions';
import searchBarReducer from '../searchBarReducer';

const initialState = {
  inputValue: '',
  sortOrder: 'ASC' as sortOrderTypes,
};

describe('searchBarReducer', () => {
  it('should handle CHANGE_INPUT', () => {
    const action = changeInputAction('Alice');
    const newState = searchBarReducer(initialState, action);
    expect(newState.inputValue).toBe('Alice');
  });

  it('should handle CHANGE_SORT_ORDER', () => {
    const action = changeSortOrderAction('DESC');
    const newState = searchBarReducer(initialState, action);
    expect(newState.sortOrder).toBe('DESC');
  });
});
