import * as VueI18n from 'vue-i18n';
import en from '../assets/data/en.json';
import es from '../assets/data/es.json';

const messages = {
  en: en,
  es: es
};

export default VueI18n.createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
});
