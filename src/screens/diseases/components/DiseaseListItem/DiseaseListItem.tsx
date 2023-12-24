import React from 'react';
import {Container, Poster, PosterLetter, Title} from './DiseaseListItem.styles';

interface Props {
  name: string;
  onPress?: () => void;
}

export const DiseaseListItem = ({name, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Poster>
        <PosterLetter>{name.length ? name[0] : 'A'}</PosterLetter>
      </Poster>
      <Title>{name}</Title>
    </Container>
  );
};
