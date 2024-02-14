import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

const StyledTextButton = styled.TouchableOpacity`
  padding: 16px;
  padding-left: 0px;
  padding-top: 4px;
`;

const StyledTextButtonTitle = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.main};
`;

interface Props extends TouchableOpacityProps {
  title: string;
}

export const TextButton = ({title, ...buttonProps}: Props) => (
  <StyledTextButton {...buttonProps}>
    <StyledTextButtonTitle>{title}</StyledTextButtonTitle>
  </StyledTextButton>
);
