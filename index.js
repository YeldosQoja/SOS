/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import {defaultOptions, mainRoot} from './src/navigation/Navigation';
import registerComponents from './src/navigation/registerComponents';
import {ThemeProvider} from 'styled-components/native';
import {appTheme} from './src/theme/constants';
import {ScreenName} from './src/types';

registerComponents(Object.keys(ScreenName), Component => props => {
  return (
    <ThemeProvider theme={appTheme}>
      <Component {...props} />
    </ThemeProvider>
  );
});

Navigation.setDefaultOptions(defaultOptions);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(mainRoot);
});
