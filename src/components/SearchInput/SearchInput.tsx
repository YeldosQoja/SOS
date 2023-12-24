import React from 'react';
import {useTheme} from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Container, StyledTextInput} from './SearchInput.styles';
import {TextInputProps} from 'react-native';

export const SearchInput = (props: TextInputProps) => {
  const {gray} = useTheme();

  return (
    <Container>
      <StyledTextInput {...props} />
      <MaterialIcons name="search" color={gray} size={26} />
    </Container>
  );
};
