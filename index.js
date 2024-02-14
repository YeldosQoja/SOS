/**
 * @format
 */
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {defaultOptions, registerComponents, splashRoot} from '@navigation';
import {ThemeProvider} from 'styled-components/native';
import {appTheme} from '@theme';
import {ScreenName} from '@types';
import './src/i18n';
import {Provider} from 'react-redux';
import {store, persistor} from '@store/store';
import {initI18} from './src/i18n';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';

initI18();

registerComponents(Object.keys(ScreenName), Component => props => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={appTheme}>
          <Component {...props} />
          <Toast />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
});

Navigation.setDefaultOptions(defaultOptions);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(splashRoot);
});
