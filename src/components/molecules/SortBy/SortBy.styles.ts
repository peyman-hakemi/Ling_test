import styled from 'styled-components/native';
import {mvp} from '../../../utils';
import {Animated, TextProps} from 'react-native';

interface OptionTextProps extends TextProps {
  selected?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #e0e7ff;
  border-radius: ${mvp(8)};
  padding: ${mvp(4)};
  position: relative;
  margin-top: ${mvp(10)};
`;

export const OptionButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${mvp(10)};
  flex-direction: row;
`;

export const AnimatedBox = styled(Animated.View)`
  position: absolute;
  left: 0;
  top: ${mvp(5)};
  bottom: ${mvp(5)};
  width: 50%;
  background-color: ${props => props.theme.background};
  border-radius: ${mvp(8)};
`;

export const OptionText = styled.Text<OptionTextProps>`
  color: ${({theme}) => theme.text};
  font-weight: ${({selected}) => (selected ? 'bold' : 'normal')};
  margin-left: ${mvp(4)};
`;
