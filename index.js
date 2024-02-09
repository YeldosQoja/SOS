/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import {defaultOptions, registerComponents, splashRoot} from './src/navigation';
import {ThemeProvider} from 'styled-components/native';
import {appTheme} from './src/theme/constants';
import {ScreenName} from './src/types';
import './src/i18n';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {initI18} from './src/i18n';

initI18();

registerComponents(Object.keys(ScreenName), Component => props => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Component {...props} />
      </ThemeProvider>
    </Provider>
  );
});

Navigation.setDefaultOptions(defaultOptions);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(splashRoot);
});
