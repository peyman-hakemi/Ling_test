import styled from 'styled-components/native';
import {mvp} from '../../../utils';
import {TextProps, ViewProps} from 'react-native';

interface CellTextProps extends TextProps {
  align?: 'left' | 'center' | 'right';
}
interface CellTableProps extends ViewProps {
  background?: string;
}
interface TableRowProps {
  isEven?: boolean;
}

export const TableContainer = styled.View`
  margin-top: ${mvp(10)};
`;

export const TableRow = styled.View<TableRowProps>`
  flex-direction: row;
  background-color: ${props =>
    props.isEven ? props.theme.evenCellBackground : props.theme.background};
`;
export const TableHeaderContainer = styled.View`
  flex-direction: row;
  border-top-left-radius: ${mvp(5)};
  border-top-right-radius: ${mvp(5)};
  overflow: hidden;
`;

export const TableHeader = styled(TableRow)`
  flex: 1;
  padding-top: ${mvp(6)};
  padding-bottom: ${mvp(6)};
  background-color: ${props => props.theme.tableHeaderBackground};
`;

export const TableCell = styled.View<CellTableProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${mvp(12)} ${mvp(10)};
  border-bottom-width: ${mvp(1)};
  border-bottom-color: ${props => props.theme.tableBorders};
`;

export const HeaderText = styled.Text`
  font-weight: bold;
  color: ${props => props.theme.text};
  text-align: center;
  flex: 1;
  font-size: ${mvp(15)};
`;

export const CellText = styled.Text<CellTextProps>`
  color: ${props => props.theme.text};
  text-align: ${props => props.align || 'left'};
  width: 100%;
  font-size: ${mvp(14)};
`;

export const HighlightText = styled.Text`
  background-color: ${props => props.theme.highlightText};
  color: ${props => props.theme.text};
`;

export const ActivityIndicator = styled.ActivityIndicator`
  width: 100%;
  align-self: center;
  padding-top: ${mvp(20)};
`;
