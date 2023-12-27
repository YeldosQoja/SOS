import React from 'react';
import {Container, Data, Description} from './DiseaseListItem.styles';

interface Props {}

export const DiseaseListItem = ({}: Props) => {
  return (
    <Container onPress={() => console.log('DiseaseListItem')}>
      <Data>{'Data: --.--.----.'}</Data>
      <Description>
        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
      </Description>
    </Container>
  );
};
