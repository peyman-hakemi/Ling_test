import styled from 'styled-components/native';
import {mvp} from '../../../utils';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: ${mvp(40)};
  border-width: ${mvp(1)};
  font-size: ${mvp(15)};
  border-color: ${props => props.theme.inputBorder};
  color: ${props => props.theme.text};
  border-radius: ${mvp(5)};
  padding-left: ${mvp(30)};
  padding-right: ${mvp(30)};
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  left: ${mvp(8)};
`;
export const IconCrossContainer = styled.TouchableOpacity`
  position: absolute;
  right: ${mvp(8)};
`;
