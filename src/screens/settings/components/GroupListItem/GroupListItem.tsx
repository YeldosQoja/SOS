import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  padding: 12px;
  border-bottom-width: 0.25px;
  border-color: ${({theme: {gray}}) => gray};
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme: {text}}) => text};
`;

interface Props {
  title: string;
  onPress?: () => void;
}

export const GroupListItem = ({title, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};
