import {View, FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import {ContactListItem, FloatingButton} from './components';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components/native';
import Contacts from 'react-native-contacts';

const data = [
  {
    name: 'Mom',
    phone: '+7(747) 476 88 75',
  },
  {
    name: 'Dad',
    phone: '+7(705) 393 50 04',
  },
  {
    name: 'Sister',
    phone: '+7(701) 257 93 68',
  },
];

const ContactsScreen = () => {
  const theme = useTheme();
  const renderItem: ListRenderItem<{name: string; phone: string}> = ({
    item: {name, phone},
  }) => <ContactListItem name={name} phone={phone} />;

  const handleAddContactsButton = () => {
    Contacts.getAll()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
      <FloatingButton
        onPress={handleAddContactsButton}
        icon={<FeatherIcon name="plus" size={32} color={theme.white} />}
        color="green"
      />
    </View>
  );
};

export default ContactsScreen;
