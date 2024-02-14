import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme, disabled}) =>
    disabled ? theme.gray.light : theme.main};
  padding: 12px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 8px;
  justify-content: center;
  align-self: stretch;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.white};
`;
