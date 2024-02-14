import _MaskInput from 'react-native-mask-input';
import styled from 'styled-components/native';

const StyledMaskInput = styled(_MaskInput)<{$focused: boolean}>`
  padding: 12px;
  background: white;
  font-size: 16px;
  font-weight: 400;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({theme, $focused}) => ($focused ? theme.main : 'white')};
  margin-bottom: 12px;
`;

export const MaskInput = StyledMaskInput;
