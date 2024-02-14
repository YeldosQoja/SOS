import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useAppSelector} from '@hooks';
import {selectLanguage} from '@slices';
import {Navigation, NavigationProps} from 'react-native-navigation';
import {useTranslation} from 'react-i18next';

const DoctorScreen = ({componentId}: NavigationProps) => {
  const language = useAppSelector(selectLanguage);
  const {t} = useTranslation();

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      bottomTab: {
        text: t('bottom_bar_buttons.doctor'),
      },
    });
  }, [language, componentId, t]);
  return (
    <View>
      <Text>DoctorScreen</Text>
    </View>
  );
};

export default DoctorScreen;
