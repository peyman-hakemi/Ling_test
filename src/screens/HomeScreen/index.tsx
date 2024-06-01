import React, {useEffect} from 'react';
import {SearchBar, Table} from '../../components';
import {Container} from './HomeScreen.styles';
import {loadLeaderboardAction} from '../../store/actions/leaderboardActions';

import leaderboardData from '../../data/leaderboard.json';
import {useAppDispatch} from '../../store/utils';

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadLeaderboardAction(leaderboardData));
  }, [dispatch]);

  return (
    <Container>
      <SearchBar />
      <Table />
    </Container>
  );
};

export default HomeScreen;
