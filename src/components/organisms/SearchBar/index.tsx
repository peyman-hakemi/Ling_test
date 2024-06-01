import React, {useCallback, useRef, useState} from 'react';
import {Button, SearchInput, SortBy} from '../../index';
import {Container} from './SearchBar.styles';
import store from '../../../store/store';
import {searchUserAction} from '../../../store/actions/leaderboardActions';
import {Animated} from 'react-native';
import {changeSortOrderAction} from '../../../store/actions/searchBarActions';
import {useAppDispatch} from '../../../store/utils';
import {strings} from '../../../theme';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const {ENTER_NAME, SEARCH} = strings.searchBar;
  const rotationValue = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(5)).current;

  const [selectedOption, setSelectedOption] = useState<'name' | 'rank'>('rank');

  const searchUser = () => {
    // change input, reset the sort, and reset the sort animation
    dispatch(searchUserAction(store.getState().searchBar.inputValue));
    dispatch(changeSortOrderAction('ASC'));
    resetAnimations();
  };

  const resetAnimations = useCallback(() => {
    // reset the sort animation
    rotationValue.resetAnimation();
    animatedValue.resetAnimation();
    setSelectedOption('rank');
  }, []);

  return (
    <>
      <Container>
        <SearchInput
          placeholder={ENTER_NAME}
          onSearch={searchUser}
          resetAnimations={resetAnimations}
        />
        <Button title={SEARCH} onPress={searchUser} />
      </Container>
      <SortBy
        rotationValue={rotationValue}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        animatedValue={animatedValue}
      />
    </>
  );
};

export default SearchBar;
