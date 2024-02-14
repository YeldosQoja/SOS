import styled from 'styled-components/native';

const StyledInput = styled.TextInput<{$focused: boolean}>`
  padding: 12px;
  background: #ffffff;
  font-size: 16px;
  font-weight: 400;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({theme, $focused}) => ($focused ? theme.main : '#ffffff')};
  margin-bottom: 12px;
`;

export const Input = StyledInput;
