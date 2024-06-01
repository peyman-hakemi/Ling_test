import React from 'react';
import {ButtonContainer, ButtonText} from './Button.styles';

interface IProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button = ({title, onPress, disabled}: IProps) => {
  return (
    <ButtonContainer onPress={onPress} disabled={disabled}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
