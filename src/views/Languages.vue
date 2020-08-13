<template>
  <div class="languages mt-4">
    <v-divider class="my-4 mx-auto" width="25%"></v-divider>
    <v-container class="title">
      <h2 class="secondary--text text-uppercase font-weight-light">
        {{ $vuetify.lang.t("$vuetify.languages.title") }}
      </h2>
    </v-container>
    <v-container>
      <div
        v-for="(language, index) in languagesInternal"
        :key="index"
      >
        <Language v-bind:language="language" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Language from "@/components/Language.vue";
import languages from "@/assets/data/languages.json";

export default {
  data() {
    return {
      languagesInternal: languages
    };
  },
  components: {
    Language
  },
  created() {
    const language = navigator.language.split("-")[0];
    this.languagesInternal = languages[language];
  }
};
</script>

<style lang="scss">
.languages {
  & .title {
    text-align: center;
  }
}
</style>
