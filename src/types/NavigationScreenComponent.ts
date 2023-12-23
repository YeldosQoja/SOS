import {NavigationFunctionComponent} from 'react-native-navigation';
import {Screen} from './ScreenName';

export interface NavigationScreenComponent<Props = {}>
  extends NavigationFunctionComponent<Props> {
  screenName: Screen;
}
