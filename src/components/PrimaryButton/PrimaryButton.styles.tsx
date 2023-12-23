import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${props => props.theme.main};
  padding: 16px;
  border-radius: 10px;
  justify-content: center;
  align-self: stretch;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.white};
`;
