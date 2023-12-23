import React from 'react';
import {Container, Data, Description} from './DiseaseListItem.styles';

interface Props {}

export const DiseaseListItem = ({}: Props) => {
  return (
    <Container onPress={() => console.log('DiseaseListItem')}>
      <Data>{'Data: --.--.----.'}</Data>
      <Description>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis semper ex. Morbi posuere massa eu gravida sollicitudin. Donec congue porta neque quis varius. Aenean augue ligula, gravida quis mauris vel, tincidunt viverra risus. Fusce vel ipsum ac lacus venenatis ornare ac gravida nisi. Cras faucibus, lectus id varius dapibus, metus purus scelerisque nisi, eget tristique ligula dolor vitae leo. Curabitur et est justo. Integer in mi ornare, bibendum tellus at, sollicitudin dolor.'
        }
      </Description>
    </Container>
  );
};
