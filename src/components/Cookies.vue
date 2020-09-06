<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="showCookiesModal"
      :timeout="-1"
      :multi-line="true"
    >
      {{ $t('cookies.description') }}

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

export default Vue.extend({
  name: "Cookies",
  data() {
    return {
      showCookiesModal: true
    };
  },
  methods: {
    cookiesAgree() {
      this.showCookiesModal = false;
    }
  }
});
</script>
