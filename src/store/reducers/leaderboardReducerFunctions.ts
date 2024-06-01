import {Alert} from 'react-native';
import {
  ChangePageAction,
  LoadLeaderboardAction,
  SearchUserAction,
  SortUsersAction,
} from '../actions/types';
import {LeaderboardState} from './leaderboardReducer';
import {sortByBananas} from '../../utils';

export const loadLeaderboard = (
  state: LeaderboardState,
  action: LoadLeaderboardAction,
): LeaderboardState => {
  const sortedLeaderboard = sortByBananas(Object.values(action.payload)).map(
    (user, index) => ({
      ...user,
      rank: index + 1,
    }),
  );
  return {
    ...state,
    leaderboard: sortedLeaderboard,
    filteredUsers: sortedLeaderboard,
  };
};

export const searchUser = (
  state: LeaderboardState,
  action: SearchUserAction,
): LeaderboardState => {
  const searchTerm = action.payload.trim().toLowerCase();
  if (searchTerm === '') {
    return {...state, filteredUsers: state.leaderboard, page: 1};
  }

  const allUsers = [...state.leaderboard];
  const indexSearchedUser = allUsers.findIndex(user =>
    user.name.toLowerCase().includes(searchTerm),
  );

  if (indexSearchedUser !== -1) {
    let filteredUsers = allUsers.slice(0, 10);
    if (indexSearchedUser >= 10) {
      filteredUsers[9] = allUsers[indexSearchedUser];
    }
    return {...state, filteredUsers};
  } else {
    Alert.alert(
      'User Not Found',
      'This user name does not exist! Please specify an existing user name!',
    );
    return state;
  }
};

export const sortUsers = (
  state: LeaderboardState,
  action: SortUsersAction,
): LeaderboardState => {
  return {...state, filteredUsers: action.payload, page: 1};
};

export const changePage = (
  state: LeaderboardState,
  action: ChangePageAction,
): LeaderboardState => {
  return {...state, page: action.payload};
};

export const clearSearch = (state: LeaderboardState): LeaderboardState => {
  return {
    ...state,
    filteredUsers:
      state.filteredUsers.length === 10
        ? state.leaderboard
        : state.filteredUsers,
    page: 1,
  };
};
