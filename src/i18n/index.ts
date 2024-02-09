import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as kz from './kz';
import * as ru from './ru';
import {store} from '../store';

export const initI18 = () => {
  const {
    settings: {language: lng},
  } = store.getState();

  i18n.use(initReactI18next).init({
    lng,
    fallbackLng: 'ru',
    defaultNS: 'common',
    fallbackNS: ['common'],
    compatibilityJSON: 'v3',
    resources: {
      kz: {
        ...kz,
      },
      ru: {
        ...ru,
      },
    },
  });
};

export default i18n;
