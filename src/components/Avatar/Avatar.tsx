import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Container} from './Avatar.styles';

interface Props {
  size: number;
}

export const Avatar = ({size}: Props) => {
  return (
    <Container>
      <MaterialIcons name="person" size={size} color="#FFFFFF" />
    </Container>
  );
};
