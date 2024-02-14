import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 16px;
  border-bottom-width: 0.5px;
  border-color: ${({theme: {gray}}) => gray.light};
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.text};
`;

interface Props {
  title: string;
  name: string;
}

export const DetailListItem = ({title, name}: Props) => {
  return (
    <Container>
      <Title>{`${title}: ${name}`}</Title>
    </Container>
  );
};
