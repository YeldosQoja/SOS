import styled from 'styled-components/native';

export const OuterView = styled.TouchableOpacity`
  height: 200px;
  width: 200px;
  border-radius: 200px;
  border-width: 1.5px;
  background-color: #ffb7b8;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const InnerView = styled.View`
  height: 160px;
  width: 160px;
  border-radius: 160px;
  background-color: #e20e00;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #000000;
  font-size: 24px;
  font-weight: 500;
`;
