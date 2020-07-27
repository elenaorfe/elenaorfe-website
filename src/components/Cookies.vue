<template>
  <v-banner 
    v-model="showCookiesModal" s
    ingle-line 
    transition="slide-y-transition">
    {{ cookiesInternal.description }}
    <template v-slot:actions>
      <v-btn text color="secondary" @click="cookiesAgree">Ok</v-btn>
    </template>
  </v-banner>
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
