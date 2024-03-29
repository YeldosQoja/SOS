import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 16px;
  border-bottom-width: 0.5px;
  border-color: gray;
`;

export const Data = styled.Text`
  font-size: 17px;
  font-weight: 500;
  color: ${({theme: {text}}) => text};
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: ${({theme: {gray}}) => gray.light};
`;
