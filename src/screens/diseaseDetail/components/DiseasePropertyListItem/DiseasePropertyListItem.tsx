import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  padding: 12px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.25px;
  border-color: ${props => props.theme.gray.light};
`;

const IconContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.gray.dark};
  margin-right: 8px;
`;

const Title = styled.Text`
  flex: 1;
  color: ${props => props.theme.text};
  font-size: 15px;
  font-weight: 500;
`;

interface Props {
  icon: ReactNode;
  title: string;
}

export const DiseasePropertyListItem = ({icon, title}: Props) => {
  return (
    <Container>
      <IconContainer>{icon}</IconContainer>
      <Title>{title}</Title>
    </Container>
  );
};
