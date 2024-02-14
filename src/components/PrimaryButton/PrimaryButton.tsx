import React from 'react';
import {Container, Title} from './PrimaryButton.styles';
import {TouchableOpacityProps} from 'react-native';

interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;

}

export const PrimaryButton = ({title, ...rest}: PrimaryButtonProps) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
