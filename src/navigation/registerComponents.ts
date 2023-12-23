import {ComponentProvider} from 'react-native';
import {ScreenName} from '../types';
import {Navigation} from 'react-native-navigation';
import {Screens} from '../screens';

export default function (
  screenNames: ScreenName[],
  componentProvider?: ComponentProvider,
) {
  console.log(screenNames);
  return screenNames.map(screenName =>
    Navigation.registerComponent(screenName, () =>
      componentProvider !== undefined
        ? componentProvider(Screens[screenName])
        : Screens[screenName],
    ),
  );
}
