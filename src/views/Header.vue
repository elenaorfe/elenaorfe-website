<template>
  <v-container>
    <h1 class="d-inline">{{ $t("about.name") }}</h1>
    <span class="mx-4 d-none d-sm-inline">|</span>
    <span class="d-block d-sm-inline">{{ $t("about.role") }}</span>
    <div class="float-right">
      <a
        class="language-link"
        v-bind:class="{ active: isEN }"
        @click="changeLanguage('en')"
        >EN
      </a>
      <span> | </span>
      <a
        class="language-link"
        v-bind:class="{ active: !isEN }"
        @click="changeLanguage('es')"
        >ES
      </a>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import i18n from "@/plugins/i18n";

export default Vue.extend({
  data() {
    return {
      isEN: true
    };
  },
  methods: {
    changeLanguage(lng: string) {
      i18n.locale = lng;
      this.isEN = lng === 'en';
    }
  }
});
</script>
<style lang="scss">
.v-application a.language-link {
  color: #5e6472;

  &.active {
    font-weight: bold;
  }
}
</style>
