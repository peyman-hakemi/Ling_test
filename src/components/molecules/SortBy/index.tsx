import React, {useState, useMemo, useCallback} from 'react';
import {
  Container,
  OptionButton,
  AnimatedBox,
  OptionText,
} from './SortBy.styles';
import {Animated} from 'react-native';
import {
  sortByName as sortName,
  sortByBananas as sortBanana,
} from '../../../utils';
import {strings} from '../../../theme';
import {useTheme} from 'styled-components/native';
import {SortDownIcon} from '../../../assets';
import {User, sortOrderTypes} from '../../../types';
import {changeSortOrderAction} from '../../../store/actions/searchBarActions';
import {sortUsersAction} from '../../../store/actions/leaderboardActions';
import {useAppDispatch, useAppSelector} from '../../../store/utils';
import {selectFilteredUsers} from '../../../store/reducers/leaderboardReducer';
import {selectSortOrder} from '../../../store/reducers/searchBarReducer';

interface IProps {
  animatedValue: Animated.Value;
  rotationValue: Animated.Value;
  selectedOption: 'rank' | 'name';
  setSelectedOption: (val: IProps['selectedOption']) => void;
}

const SortBy = ({
  rotationValue,
  selectedOption,
  setSelectedOption,
  animatedValue,
}: IProps) => {
  const {SORT_BY_NAME, SORT_BY_RANK} = strings.filter;

  const theme = useTheme();
  const dispatch = useAppDispatch();

  const [boxWidth, setBoxWidth] = useState(0);
  const rankSelected = selectedOption === 'rank';
  const nameSelected = selectedOption === 'name';

  // ---------------------------- INITIAL SORTS FOR BETTER PERFORMANCE ----------------------------
  const unSortedList = useAppSelector(selectFilteredUsers);
  const sortOrder = useAppSelector(selectSortOrder);
  const sortedByName = useMemo(
    () => sortName([...unSortedList]),
    [unSortedList],
  );
  const sortedByRank = useMemo(
    () => sortBanana([...unSortedList]),
    [unSortedList],
  );

  // ---------------------------- ANIMATE THE SORT ICON ----------------------------
  const rotation = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  // ---------------------------- CHANGE THE SORT AND ASCENDING OR DESCENDING ----------------------------
  const sortByName = () => {
    animateBox(1);
  };

  const sortByRank = () => {
    animateBox(0);
  };

  const setOrderAndList = (
    sort: sortOrderTypes,
    users: User[],
    resetAnimation?: boolean,
  ) => {
    dispatch(changeSortOrderAction(sort));
    if (resetAnimation) {
      // reset sort animation
      rotationValue.resetAnimation();
    } else {
      Animated.timing(rotationValue, {
        toValue: sort !== 'ASC' ? 1 : 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
    setTimeout(() => {
      // set the users with time out, in order to not collide with the animation
      dispatch(sortUsersAction(sort !== 'DESC' ? users : users.reverse()));
    }, 100);
  };

  const animateBox = (toValue: number) => {
    // animate the white box under the sort box
    Animated.spring(animatedValue, {
      toValue: toValue === 0 ? 5 : boxWidth,
      useNativeDriver: true,
    }).start(() => {
      const reverseSort = sortOrder === 'ASC' ? 'DESC' : 'ASC';
      // toValue === 0 is when rank is selected
      if (toValue === 0) {
        if (rankSelected) {
          // just change the sort order if rank was selected
          setOrderAndList(reverseSort, sortedByRank);
        } else {
          setOrderAndList('ASC', sortedByRank, true);
          setSelectedOption('rank');
        }
      } else {
        // toValue === 1 is when name is selected
        if (nameSelected) {
          // just change the sort order if name was selected
          setOrderAndList(reverseSort, sortedByName);
        } else {
          setOrderAndList('ASC', sortedByName, true);
          setSelectedOption('name');
        }
      }
    });
  };

  const SortIcon = useCallback(
    () => (
      <Animated.View
        style={{
          transform: [{rotate: rotation}],
        }}>
        <SortDownIcon fill={theme.iconSort} />
      </Animated.View>
    ),
    [rotation, sortOrder],
  );

  return (
    <Container
      onLayout={event => setBoxWidth(event.nativeEvent.layout.width / 2)}>
      <AnimatedBox style={{transform: [{translateX: animatedValue}]}} />
      <OptionButton onPress={sortByRank}>
        {rankSelected && <SortIcon />}
        <OptionText selected={rankSelected}>{SORT_BY_RANK}</OptionText>
      </OptionButton>
      <OptionButton onPress={sortByName}>
        {nameSelected && <SortIcon />}
        <OptionText selected={nameSelected}>{SORT_BY_NAME}</OptionText>
      </OptionButton>
    </Container>
  );
};

export default SortBy;
