import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import {Navigation} from 'react-native-navigation';
import LottieView from 'lottie-react-native';
import {Loading, Spacer, PrimaryButton, SOSButton} from '../components';
import {useTheme} from 'styled-components/native';
import {ScreenName} from '../types';

const HomeScreen = props => {
  const [state, setState] = useState('idle');
  const theme = useTheme();

  const delay = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const handleCancelCall = () => {};

  const handleConfirmCall = async () => {
    setState('sending');
    await delay(5000);
    setState('sent');
  };

  const handleMapButton = () => {
    Navigation.push(props.componentId, {
      component: {
        name: ScreenName.Map,
        options: {
          topBar: {
            background: {
              color: theme.white,
            },
            title: {
              text: 'SOS',
              color: theme.text,
            },
            backButton: {
              color: theme.text,
              title: '',
            },
          },
        },
      },
    });
  };

  const handleSOSButtonPress = () => {
    Alert.alert('SOS', 'Вы точно хотите вызвать скорую помощь?', [
      {
        text: 'Нет',
        onPress: handleCancelCall,
      },
      {
        text: 'Да',
        onPress: handleConfirmCall,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {state === 'idle' ? (
        <SOSButton onPress={handleSOSButtonPress} />
      ) : state === 'sending' ? (
        <Loading color="#5e90ff" size="large" />
      ) : (
        <>
          <Spacer />
          <View style={styles.confirmationView}>
            <LottieView
              source={require('../assets/animations/check-animation.json')}
              style={styles.lottieView}
              autoPlay
              loop={false}
            />
            <Text
              style={{
                fontWeight: '600',
                fontSize: 20,
              }}>
              {'Отправлено'}
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 12,
              }}>
              {'Сообщение отправлено близким контактам'}
            </Text>
          </View>
          <Spacer />
          <PrimaryButton title="Карта" onPress={handleMapButton} />
        </>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 16,
  },
  confirmationView: {
    alignItems: 'center',
  },
  lottieView: {
    height: 200,
    width: 200,
  },
});
