import React from 'react';
import {ActivityIndicatorProps} from 'react-native';
import styled from 'styled-components/native';

const StyledActivityIndicator = styled.ActivityIndicator`
  align-self: center;
`;

export const Loading = ({size, color}: ActivityIndicatorProps) => {
  return <StyledActivityIndicator size={size} color={color} />;
};
