import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: white;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-bottom-width: 0.25px;
  border-color: ${({theme: {gray}}) => gray};
`;

export const Poster = styled.View`
  background: ${({theme: {main}}) => main};
  border-radius: 50px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const PosterLetter = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: 600;
`;

export const Title = styled.Text`
  flex: 1;
  color: ${({theme: {text}}) => text};
  font-size: 18px;
  font-weight: 500;
`;
