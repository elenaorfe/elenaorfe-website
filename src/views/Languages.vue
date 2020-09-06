<template>
  <div class="languages mt-4">
    <v-divider class="my-4 mx-auto" width="25%"></v-divider>
    <v-container class="title">
      <h2 class="secondary--text text-uppercase font-weight-light">
        {{ $t('languages.title') }}
      </h2>
    </v-container>
    <v-container>
      <div
        v-for="(language, key, index) in $t('languages.items')"
        :key="index"
      >
        <Language v-bind:language="language" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Language from "@/components/Language.vue";

export default {
  components: {
    Language
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
