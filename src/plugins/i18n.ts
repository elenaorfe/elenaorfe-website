import * as VueI18n from 'vue-i18n';
import en from '../assets/translations/en.json';
import es from '../assets/translations/es.json';

const messages = Object.assign({
  en: en,
  es: es
});

export default VueI18n.createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
});
