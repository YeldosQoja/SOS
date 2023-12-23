import styled from 'styled-components/native';

export const Container = styled.View<{$selected: boolean}>`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border-width: ${({$selected}) => ($selected ? 1.1 : 0.4)}px;
  border-color: ${({$selected, theme: {main, gray}}) =>
    $selected ? main : gray};
  padding: 16px;
`;

export const IconContainer = styled.View`
  margin-right: 16px;
`;

export const InnerDetailView = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.text};
  margin-bottom: 4px;
`;

export const AddressName = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.gray};
`;
