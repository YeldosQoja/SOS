import React, {ReactNode} from 'react';
import {
  AddressName,
  Container,
  IconContainer,
  InnerDetailView,
  Title,
} from './AddressListItem.styles';
import {VerticalDivider} from '../../../../components';

interface Props {
  icon: ReactNode;
  title: string;
  selected: boolean;
  address: string;
}

export const AddressListItem = ({icon, selected, title, address}: Props) => {
  return (
    <Container $selected={selected}>
      <IconContainer>{icon}</IconContainer>
      <VerticalDivider $width="1" />
      <InnerDetailView>
        <Title>{title}</Title>
        <AddressName>{address}</AddressName>
      </InnerDetailView>
    </Container>
  );
};
