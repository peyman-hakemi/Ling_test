import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {
  TableContainer,
  TableRow,
  TableHeader,
  TableCell,
  HeaderText,
  CellText,
  HighlightText,
  ActivityIndicator,
  TableHeaderContainer,
} from './Table.styles';
import {User} from '../../../types/userTypes';
import store from '../../../store/store';
import {useTheme} from 'styled-components';
import {changePageAction} from '../../../store/actions/leaderboardActions';
import {useAppDispatch, useAppSelector} from '../../../store/utils';
import {
  selectFilteredUsers,
  selectPage,
} from '../../../store/reducers/leaderboardReducer';
import {strings} from '../../../theme';

// highlight the searched text
const highlightText = (text: string, showHighlight: boolean) => {
  const searchTerm = store.getState().searchBar.inputValue;
  // if it wasn't a search term it should render normal text
  if (!!searchTerm === false || !showHighlight)
    return <CellText>{text}</CellText>;

  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = text.split(regex);

  return (
    <CellText>
      {parts.map((part, index) =>
        regex.test(part) ? (
          // highlight the searched text
          <HighlightText key={index}>{part}</HighlightText>
        ) : (
          part
        ),
      )}
    </CellText>
  );
};

const Table = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectFilteredUsers);
  const page = useAppSelector(selectPage);

  const {NAME, RANK, COUNT} = strings.table;
  const headerRow = [NAME, RANK, COUNT];

  // pagination values
  const totalItems = data.length;
  const pageSize = 20; // Number of items per page
  const totalPages = Math.ceil(totalItems / pageSize);
  const filteredUsers = data.slice(0, page * pageSize);

  const renderItem = useCallback(
    ({item, index}: {item: User; index: number}) => {
      // shouldShowLoading = if we should show a loading at the end of teh list
      const shouldShowLoading =
        index + 1 === filteredUsers?.length && filteredUsers?.length !== 10;
      return (
        <>
          <TableRow isEven={index % 2 !== 0}>
            <TableCell background={theme.tableBackground}>
              {highlightText(item.name, filteredUsers?.length === 10)}
            </TableCell>
            <TableCell>
              <CellText align="center">#{item.rank}</CellText>
            </TableCell>
            <TableCell>
              <CellText align="center">{item.bananas}</CellText>
            </TableCell>
          </TableRow>
          {shouldShowLoading && <ActivityIndicator color={theme.text} />}
        </>
      );
    },
    [filteredUsers?.length],
  );

  const renderHeader = useCallback(
    () => (
      <TableHeaderContainer>
        {headerRow.map((header, index) => (
          <TableHeader key={index}>
            <HeaderText>{header}</HeaderText>
          </TableHeader>
        ))}
      </TableHeaderContainer>
    ),
    [],
  );

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: 50, // approximate height of each item
      offset: 50 * index,
      index,
    }),
    [],
  );

  const handleLoadMore = useCallback(() => {
    if (filteredUsers?.length === 10) {
      // if user was in the search mode pagination should be reset
      dispatch(changePageAction(1));
    } else {
      if (totalPages > page) dispatch(changePageAction(page + 1));
    }
  }, [filteredUsers?.length, page]);

  return (
    <TableContainer>
      <FlatList
        data={filteredUsers}
        renderItem={renderItem}
        keyExtractor={item => item.uid.toString()}
        ListHeaderComponent={renderHeader}
        getItemLayout={getItemLayout}
        // optimization
        initialNumToRender={30}
        maxToRenderPerBatch={40}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        extraData={[filteredUsers, page]}
        // optimization
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      />
    </TableContainer>
  );
};

export default Table;
