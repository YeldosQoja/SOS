import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import {Navigation} from 'react-native-navigation';
import {mainRoot} from '../navigation';

const SplashScreen = () => {
  const delay = (ms: number) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Finished!');
      }, ms);
    });
  };

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
    delay(3000).then(res => {
      console.log(res);
      Navigation.setRoot(mainRoot);
    });
  }, []);

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
