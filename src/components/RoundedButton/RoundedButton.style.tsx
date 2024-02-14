import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 12px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 24px;
  background-color: ${props => props.theme.main};
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.white};
  margin-left: 8px;
`;
