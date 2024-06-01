import styled from 'styled-components/native';
import {mvp} from '../../../utils';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.theme.buttonBackground};
  padding-vertical: ${mvp(10)};
  border-radius: ${mvp(5)};
  align-items: center;
  flex: 1;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.buttonText};
  font-size: ${mvp(16)};
`;
