import {ScrollView} from 'react-native';
import React from 'react';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {GroupListItem} from './components';
import {useTranslation} from 'react-i18next';
import {ScreenName} from '../../types';

const SettingsScreen: NavigationFunctionComponent<{}> = ({componentId}) => {
  const {t} = useTranslation('settings');

  const handleLanguageButton = () => {
    Navigation.push(componentId, {
      component: {
        name: ScreenName.Language,
        options: {
          topBar: {
            title: {
              text: t('options.language'),
            },
          },
        },
      },
    });
  };

  return (
    <ScrollView>
      <GroupListItem
        title={t('options.language')}
        onPress={handleLanguageButton}
      />
      <GroupListItem title={t('options.other_settings')} />
      <GroupListItem title={t('options.city')} />
      <GroupListItem title={t('options.exit')} />
    </ScrollView>
  );
};

export default SettingsScreen;
