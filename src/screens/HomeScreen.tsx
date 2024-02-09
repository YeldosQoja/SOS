import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import {Navigation} from 'react-native-navigation';
import LottieView from 'lottie-react-native';
import {Loading, Spacer, PrimaryButton, SOSButton} from '../components';
import {useTheme} from 'styled-components/native';
import {ScreenName} from '../types';
import {useTranslation} from 'react-i18next';

const HomeScreen = props => {
  const {t} = useTranslation(['common', 'validation']);
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
    Alert.alert('SOS', t('validation:sos_button_alert_message'), [
      {
        text: t('no'),
        onPress: handleCancelCall,
      },
      {
        text: t('yes'),
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
            <Text style={[styles.confirmationTitle, {color: theme.text}]}>
              {t('validation:ambulance_call_success.title')}
            </Text>
            <Text style={[styles.confirmationMessage, {color: theme.text}]}>
              {t('validation:ambulance_call_success.message')}
            </Text>
          </View>
          <Spacer />
          <PrimaryButton title={t('map')} onPress={handleMapButton} />
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
  confirmationTitle: {
    fontWeight: '600',
    fontSize: 20,
  },
  confirmationMessage: {
    fontSize: 16,
    marginTop: 12,
  },
});
