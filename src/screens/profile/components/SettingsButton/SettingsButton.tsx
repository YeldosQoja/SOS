import React from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {ScreenName} from '../../../../types';

export const SettingsButton: NavigationFunctionComponent<{}> = props => {
  return (
    <TouchableOpacity
      hitSlop={12}
      onPress={() => {
        Navigation.push(ScreenName.Profile, {
          component: {
            name: ScreenName.Settings,
          },
        });
      }}>
      <FeatherIcons name="settings" color={'#000'} size={24} />
    </TouchableOpacity>
  );
};
