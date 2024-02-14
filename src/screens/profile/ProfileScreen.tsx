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
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar, RoundedButton} from '@components';
import {DetailListItem} from './components';
import {useTheme} from 'styled-components/native';
import {ScreenName} from '@types';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useTranslation} from 'react-i18next';
import {useAppSelector} from '@hooks';
import {selectLanguage} from '@slices';
import {useGetUserQuery} from '@api';

const ProfileScreen: NavigationFunctionComponent<{}> = ({componentId}) => {
  const theme = useTheme();
  const {t} = useTranslation(['profile', 'validation']);
  const language = useAppSelector(selectLanguage);
  const {isLoading, isError, error, isSuccess, data} =
    useGetUserQuery(undefined);

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      bottomTab: {
        text: t('bottom_bar_buttons.profile'),
      },
    });
  }, [language, componentId, t]);

  const pushContactsScreen = () => {
    Navigation.push(componentId, {
      component: {
        name: ScreenName.Contacts,
        options: {
          topBar: {
            title: {
              text: t('contacts'),
            },
          },
        },
      },
    });
  };

  const handleDiseaseItemSelect = (id: number, title: string) => {
    Navigation.push(componentId, {
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
    Alert.alert(
      t('validation:add_avatar_alert.title'),
      t('validation:add_avatar_alert.message'),
      [
        {
          text: t('validation:add_avatar_alert.gallery'),
          onPress: handleAlertGalleryButton,
        },
        {
          text: t('validation:add_avatar_alert.camera'),
          onPress: handleAlertCameraButton,
        },
      ],
    );
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
          t('request_contacts_permission.title', {ns: 'validation'}),
          t('request_contacts_permission.message', {ns: 'validation'}),
          [
            {
              text: t('cancel'),
              style: 'cancel',
            },
            {
              text: t(
                'request_contacts_permission.open_settings_button_title',
                {ns: 'validation'},
              ),
              onPress: Linking.openSettings,
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

  if (isLoading) {
    return <ActivityIndicator color={theme.main} />;
  }

  if (isError && error) {
    return (
      <View>
        <Text>{`${error}`}</Text>
      </View>
    );
  }

  if (data && isSuccess) {
    const {name, surname} = data;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topSection}>
          <TouchableOpacity onPress={handleAvatarClick}>
            <Avatar size={60} />
          </TouchableOpacity>
          <Text style={styles.userName}>{`${name} ${surname}`}</Text>
        </View>
        <Text style={[styles.detailTitle, {color: theme.main}]}>
          {t('user_detail_section_title', {ns: 'profile'})}
        </Text>
        <DetailListItem title={t('disease_title')} name={''} />
        <DetailListItem title={t('degree_title')} name={''} />
        <View style={styles.optionsView}>
          <RoundedButton
            title={t('contacts')}
            style={styles.button}
            onPress={handleContactsButton}
            leadingIcon={
              <MaterialIcons name="person-add" size={24} color="white" />
            }
          />
          <RoundedButton
            title={t('hospitals')}
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
            title={t('diseases')}
            style={styles.button}
            onPress={() => openModal(ScreenName.DiseaseList)}
            leadingIcon={
              <MaterialIcons name="local-hospital" size={24} color="white" />
            }
          />
        </View>
      </ScrollView>
    );
  }
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
