import React from 'react';
import {Avatar} from '../../../../components';
import {Container, NameText, PhoneText} from './ContactListItem.styles';
import {View} from 'react-native';

interface Props {
  name: string;
  phone: string;
}

export const ContactListItem = ({name, phone}: Props) => {
  return (
    <Container>
      <Avatar size={24} />
      <View>
        <NameText>{name}</NameText>
        <PhoneText>{phone}</PhoneText>
      </View>
    </Container>
  );
};
