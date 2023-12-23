import styled from 'styled-components/native';

export const Divider = styled.View<{$width: string}>`
  background: ${props => props.theme.gray};
  width: 100%;
  height: ${props => props.$width}px;
`;

export const VerticalDivider = styled(Divider)`
  width: ${props => props.$width}px;
  height: 100%;
`;
