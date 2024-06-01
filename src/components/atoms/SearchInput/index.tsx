import React, {useCallback} from 'react';
import {
  Container,
  IconContainer,
  IconCrossContainer,
  Input,
} from './SearchInput.styles';
import {CrossIcon, SearchIcon} from '../../../assets/svgs';
import {mvp} from '../../../utils';
import {
  changeInputAction,
  changeSortOrderAction,
} from '../../../store/actions/searchBarActions';
import {clearSearchAction} from '../../../store/actions/leaderboardActions';
import {useAppDispatch, useAppSelector} from '../../../store/utils';
import {selectInputValue} from '../../../store/reducers/searchBarReducer';

interface IProps {
  placeholder: string;
  onSearch: () => void;
  resetAnimations: () => void;
}

const SearchInput = ({placeholder, onSearch, resetAnimations}: IProps) => {
  const dispatch = useAppDispatch();

  const inputValue = useAppSelector(selectInputValue);

  const onChangeValue = useCallback((value: string) => {
    // change the input value when user types
    dispatch(changeInputAction(value));
  }, []);

  const clearSearch = useCallback(() => {
    // reset some of the states in order to have a clear experience of searching
    dispatch(changeInputAction(''));
    dispatch(clearSearchAction());
    dispatch(changeSortOrderAction('ASC'));

    resetAnimations();
  }, []);

  return (
    <Container>
      <Input
        placeholder={placeholder}
        onChangeText={onChangeValue}
        value={inputValue}
      />
      <IconContainer onPress={onSearch}>
        <SearchIcon width={mvp(15)} height={mvp(15)} />
      </IconContainer>
      {!!inputValue?.length && (
        <IconCrossContainer onPress={clearSearch}>
          <CrossIcon width={mvp(15)} height={mvp(15)} />
        </IconCrossContainer>
      )}
    </Container>
  );
};

export default SearchInput;
