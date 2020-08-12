<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="showCookiesModal"
      :timeout="-1"
      :multi-line="multiLine"
    >
      {{ cookiesInternal.description }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="secondary"
          text
          v-bind="attrs"
          @click="cookiesAgree"
        >
          Ok
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import Vue from "vue";
import cookies from "../assets/data/cookies.json";

export default Vue.extend({
  name: "Cookies",
  props: {
    cookies
  },
  data() {
    return {
      cookiesInternal: cookies["en"],
      showCookiesModal: true
    };
  },
  methods: {
    cookiesAgree() {
      this.showCookiesModal = false;
    }
  },
  created() {
    const language = navigator.language.split("-")[0];
    this.cookiesInternal = cookies[language];
  }
});
</script>
