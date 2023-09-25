import HttpApi from 'i18next-http-backend';
import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { supportedLngs } from '@shared/constants/i18n';
import { LS_I18N_LANG_KEY } from '@shared/constants/localStorage';

const savedLang = localStorage.getItem(LS_I18N_LANG_KEY);
const defaultLang = supportedLngs.includes(savedLang) ? savedLang : 'uk';

const initOptions: InitOptions = {
  lng: defaultLang,
  fallbackLng: false,
  supportedLngs,
  ns: 'common',
  defaultNS: 'common',
  backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
  detection: { lookupLocalStorage: LS_I18N_LANG_KEY },
  saveMissing: true
  // debug: __IS_DEV__,
};

i18n.on('missingKey', (lng, ns, key) => {
  console.error(`${lng[0].toUpperCase()}.${ns} is missing the ${key} key`);
});

i18n.use(HttpApi).use(LanguageDetector).use(initReactI18next).init(initOptions);

export default i18n;
