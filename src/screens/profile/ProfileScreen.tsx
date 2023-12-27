import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  PermissionsAndroid,
  Platform,
  Alert,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar, RoundedButton} from '../../components';
import {DetailListItem} from './components';
import {useTheme} from 'styled-components/native';
import {ScreenName} from '../../types';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const detailData = [
  {
    text: 'Болезнь: ...',
  },
  {
    text: 'Степень: ...',
  },
];

const ProfileScreen: NavigationFunctionComponent<{}> = props => {
  const theme = useTheme();

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

  const handleDiseaseItemSelect = (id: number, title: string) => {
    Navigation.push(props.componentId, {
      component: {
        name: ScreenName.DiseaseDetail,
        passProps: {disease: {id, title}},
      },
    });
  };

  const handleAlertGalleryButton = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.2,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAlertCameraButton = async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        quality: 0.2,
        cameraType: 'front',
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAvatarClick = async () => {
    Alert.alert('Выберите источник для фото профиля.', undefined, [
      {
        text: 'Галерея',
        onPress: handleAlertGalleryButton,
      },
      {
        text: 'Камера',
        onPress: handleAlertCameraButton,
      },
    ]);
  };

  const handleContactsButton = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      if (granted === 'granted') {
        pushContactsScreen();
      } else {
        Alert.alert(
          'Разрешите доступ к контактам',
          'Для работы приложения нужен доступ к вашим контактам. Разрешите в настройках. Спасибо!',
          [
            {
              text: 'Отмена',
              style: 'cancel',
            },
            {
              text: 'Открыть настройки приложения',
              onPress: () => {
                Linking.openSettings();
              },
            },
          ],
        );
      }
    } else {
      pushContactsScreen();
    }
  };

  const openModal = (screenName: ScreenName) => {
    Navigation.showModal({
      component: {
        name: screenName,
        passProps: {
          onSelectDiseaseItem: handleDiseaseItemSelect,
        },
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity onPress={handleAvatarClick}>
          <Avatar size={60} />
        </TouchableOpacity>
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
          onPress={() => openModal(ScreenName.HospitalList)}
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
          onPress={() => openModal(ScreenName.DiseaseList)}
          leadingIcon={
            <MaterialIcons name="local-hospital" size={24} color="white" />
          }
        />
      </View>
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
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#5e90ff',
  },
  userName: {
    color: '#191717',
    fontSize: 20,
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
