import {Navigation} from 'react-native-navigation';
import {Screens, ScreenName} from '@types';

export function registerComponents(
  screenNames: ScreenName[],
  componentProvider?: any,
) {
  return screenNames.map(screenName =>
    Navigation.registerComponent(screenName, () =>
      componentProvider !== undefined
        ? componentProvider(Screens[screenName])
        : Screens[screenName],
    ),
  );
}
