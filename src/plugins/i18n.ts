import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "../assets/data/en.json";
import es from "../assets/data/es.json";

Vue.use(VueI18n);

const messages = {
  en: en,
  es: es
};

export default new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages // set locale messages
});
