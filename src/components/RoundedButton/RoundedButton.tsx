import {TouchableOpacityProps} from 'react-native';
import React, {ReactNode} from 'react';
import {Container, Title} from './RoundedButton.style';

interface RoundedButtonProps extends TouchableOpacityProps {
  leadingIcon: ReactNode;
  title: string;
}

export const RoundedButton = ({
  leadingIcon,
  title,
  ...rest
}: RoundedButtonProps) => {
  return (
    <Container {...rest}>
      {leadingIcon}
      <Title>{title}</Title>
    </Container>
  );
};
