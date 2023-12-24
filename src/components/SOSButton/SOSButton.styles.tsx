import styled from 'styled-components/native';

export const OuterView = styled.TouchableOpacity`
  height: 200px;
  width: 200px;
  border-radius: 200px;
  border-width: 1.5px;
  background-color: ${({theme: {red}}) => red.light};
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const InnerView = styled.View`
  height: 160px;
  width: 160px;
  border-radius: 160px;
  background-color: ${({theme: {red}}) => red.dark};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme: {text}}) => text};
  font-size: 24px;
  font-weight: 500;
`;
