import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import {Navigation} from 'react-native-navigation';
import {authRoot, mainRoot} from '@navigation';
import {delay} from '@utils';
import {useAppSelector} from '@hooks';
import {selectAuth, selectLanguage} from '@slices';
import {useTranslation} from 'react-i18next';

const SplashScreen = () => {
  const {isAuth} = useAppSelector(selectAuth);
  const language = useAppSelector(selectLanguage);
  const {i18n} = useTranslation();

  const requestContactsPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Title',
        message: 'Message',
        buttonPositive: 'OK, then',
      },
    );
    console.log(granted);
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestContactsPermission();
    }
    i18n.changeLanguage(language);
    delay(3000).then(() => {
      if (isAuth) {
        Navigation.setRoot(mainRoot);
      } else {
        Navigation.setRoot(authRoot);
      }
    });
  }, [isAuth, language, i18n]);

  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
