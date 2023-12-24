import React from 'react';
import {
  AddressName,
  Container,
  HospitalName,
  HosptialKind,
  ReviewContainer,
  ReviewCount,
  Status,
} from './HospitalListItem.styles';
import {useTheme} from 'styled-components/native';
import {Rating} from '../../../../components';

interface Props {
  name: string;
  kind: string;
  rating: number;
  reviewCount: number;
  addressName: string;
  open: boolean;
  statusText?: string;
}

export const HospitalListItem = ({
  name,
  kind,
  rating,
  reviewCount,
  addressName,
  open,
  statusText,
}: Props) => {
  const {red} = useTheme();

  return (
    <Container activeOpacity={0.7}>
      <HospitalName>{name}</HospitalName>
      <HosptialKind>{kind}</HosptialKind>
      <ReviewContainer>
        <Rating rating={rating} />
        <ReviewCount>{`${reviewCount} оценки`}</ReviewCount>
      </ReviewContainer>
      <AddressName>{addressName}</AddressName>
      {statusText !== undefined ? (
        <Status $color={red.dark}>{statusText}</Status>
      ) : null}
    </Container>
  );
};
