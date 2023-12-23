import React, {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity<{$color: string}>`
  position: absolute;
  background-color: ${props => props.$color};
  bottom: 16px;
  right: 16px;
  border-radius: 200px;
  padding: 16px;
`;

interface Props extends TouchableOpacityProps {
  icon: ReactNode;
  color: string;
}

export const FloatingButton = ({icon, color, ...rest}: Props) => {
  return (
    <Container {...rest} $color={color}>
      {icon}
    </Container>
  );
};
