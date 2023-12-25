import styled from 'styled-components/native';

export const Container = styled.View`
  background: white;
  flex-direction: row;
  margin: 16px;
  align-items: center;
  padding: 8px;
  border-radius: 12px;
  shadow-color: ${({theme: {text}}) => text};
  shadow-opacity: 0.15;
  shadow-offset: 1px 2px;
  shadow-radius: 4px;
  elevation: 5;
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  background: white;
  font-size: 16px;
  padding: 8px;
`;
