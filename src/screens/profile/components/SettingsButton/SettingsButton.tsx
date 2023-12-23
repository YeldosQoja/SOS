import React from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';

export const SettingsButton = () => {
  return (
    <TouchableOpacity hitSlop={12}>
      <FeatherIcons name="settings" color={'#000'} size={24} />
    </TouchableOpacity>
  );
};
