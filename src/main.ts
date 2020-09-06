import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import vuetify from "./plugins/vuetify";
import VueGtag from "vue-gtag";
import i18n from "@/plugins/i18n";

Vue.config.productionTip = false;

Vue.use(Vuetify);

Vue.use(VueGtag, {
  config: { id: "UA-173604419-1" }
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
