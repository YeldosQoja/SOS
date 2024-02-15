import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as kz from './kz';
import * as ru from './ru';

export const initI18 = () => {
  i18n.use(initReactI18next).init({
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
