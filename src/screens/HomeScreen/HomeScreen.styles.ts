import styled from 'styled-components/native';
import {mvp} from '../../utils';

export const Container = styled.View`
  padding-top: ${mvp(10)};
  padding-left: ${mvp(10)};
  padding-right: ${mvp(10)};
  background-color: ${props => props.theme.background};
  height: 100%;
`;
