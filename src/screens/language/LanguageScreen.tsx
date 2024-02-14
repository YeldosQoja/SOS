import {View} from 'react-native';
import React, {useEffect} from 'react';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {LanguageSelectItem} from './components';
import {useTranslation} from 'react-i18next';
import {changeLanguage, selectLanguage} from '@slices/settings';
import {useAppDispatch, useAppSelector} from '@hooks';

const LanguageScreen: NavigationFunctionComponent = ({componentId}) => {
  const {t} = useTranslation('settings');
  const selectedLanguage = useAppSelector(selectLanguage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {
          text: t('options.language'),
        },
      },
    });
  }, [selectedLanguage, componentId, t]);

  return (
    <View>
      <LanguageSelectItem
        onSelect={() => dispatch(changeLanguage('kz'))}
        imageSource={require('../../assets/icons/kazakhstan.png')}
        spell={t('languages.kz', {lng: 'kz'})}
        title={t('languages.kz')}
        highlightColor={'#00AFCA'}
        selected={selectedLanguage === 'kz'}
      />
      <LanguageSelectItem
        onSelect={() => dispatch(changeLanguage('ru'))}
        imageSource={require('../../assets/icons/russia.png')}
        spell={t('languages.ru', {lng: 'ru'})}
        title={t('languages.ru')}
        highlightColor={'#E4181C'}
        selected={selectedLanguage === 'ru'}
      />
    </View>
  );
};

export default LanguageScreen;
