import {View} from 'react-native';
import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {LanguageSelectItem} from './components';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, changeLanguage, selectLanguage} from '../../store';

const LanguageScreen: NavigationFunctionComponent<{}> = () => {
  const {t} = useTranslation('settings');
  const selectedLanguage = useSelector(selectLanguage);
  const dispatch = useDispatch<AppDispatch>();
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
