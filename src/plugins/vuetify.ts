import Vue from "vue";
import Vuetify from "vuetify/lib";
import en from '@/assets/i18n/en';
import es from '@/assets/i18n/es';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#e6ebeb',
                secondary: '#339595',
                accent: '#8c9eff',
                error: '#b71c1c',
                anchor: '#8c9eff',
            },
        },
    },
    lang: {
        locales: { en, es },
        current: 'en',
    },
});
