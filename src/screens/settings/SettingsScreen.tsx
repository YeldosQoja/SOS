import {View} from 'react-native';
import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {GroupListItem} from './components';

const SettingsScreen: NavigationFunctionComponent<{}> = ({componentId}) => {
  return (
    <View>
      <GroupListItem title="Язык" />
      <GroupListItem title="Дополнительные настойки" />
      <GroupListItem title="Город" />
      <GroupListItem title="Выйти" />
    </View>
  );
};

export default SettingsScreen;
