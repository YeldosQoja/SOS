import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 32px;
  background-color: ${props => props.theme.main};
`;

export const Title = styled.Text`
  font-size: 17px;
  font-weight: 500;
  color: ${props => props.theme.white};
  margin-left: 8px;
`;
