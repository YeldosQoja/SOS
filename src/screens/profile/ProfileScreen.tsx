import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  PermissionsAndroid,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {Navigation} from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar, RoundedButton} from '../../components';
import {DetailListItem} from './components';
import {useTheme} from 'styled-components/native';
import {ScreenName} from '../../types';

const detailData = [
  {
    text: 'Болезнь: ...',
  },
  {
    text: 'Степень: ...',
  },
];

const ProfileScreen = props => {
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const pushContactsScreen = () => {
    Navigation.push(props.componentId, {
      component: {
        name: ScreenName.Contacts,
        options: {
          topBar: {
            title: {
              text: 'Контакты',
            },
          },
        },
      },
    });
  };

  const handleContactsButton = async () => {
    const isReadContactsPermissionAlreadyGranted =
      await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
    if (isReadContactsPermissionAlreadyGranted) {
      pushContactsScreen();
      return;
    }
    const permissionStatus = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      },
    );
    if (permissionStatus) {
      pushContactsScreen();
    }
  };

  const handleModalOpen = () => {
    Navigation.showModal({
      component: {
        name: 'ModalScreen',
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topSection}>
        <Avatar size={80} />
        <Text style={styles.userName}>Шапатай Димаш</Text>
      </View>
      <Text style={[styles.detailTitle, {color: theme.main}]}>Информация</Text>
      {detailData.map((detail, index) => (
        <DetailListItem key={index} title={detail.text} name={''} />
      ))}
      <View style={styles.optionsView}>
        <RoundedButton
          title={'Контакты'}
          style={styles.button}
          onPress={handleContactsButton}
          leadingIcon={
            <MaterialIcons name="person-add" size={24} color="white" />
          }
        />
        <RoundedButton
          title={'Больницы'}
          style={styles.button}
          onPress={handleModalOpen}
          leadingIcon={
            <MaterialCommunityIcons
              name="hospital-building"
              size={24}
              color="white"
            />
          }
        />
        <RoundedButton
          title={'Болезни'}
          style={styles.button}
          leadingIcon={
            <MaterialIcons name="local-hospital" size={24} color="white" />
          }
        />
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View />
      </Modal>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'stretch',
  },
  topSection: {
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#5e90ff',
  },
  userName: {
    color: '#191717',
    fontSize: 24,
    fontWeight: '500',
  },
  detailTitle: {
    margin: 12,
    marginBottom: 0,
    fontSize: 18,
    fontWeight: '500',
  },
  optionsView: {
    padding: 12,
  },
  button: {
    marginBottom: 12,
  },
});
