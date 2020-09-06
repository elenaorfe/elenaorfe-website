<template>
  <v-timeline class="language" dense clipped align-top>
    <v-timeline-item color="secondary" small>
      <v-card>
        <v-card-title class="headline">
          {{ languageInternal.name }}
        </v-card-title>
        <v-card-text>
          {{ languageInternal.level }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import Vue from "vue";
import { LanguageItem } from "@/models/languages";

export default Vue.extend({
  name: "Language",
  props: {
    language: {
      default: {}
    }
  },
  data() {
    return {
      languageInternal: this.language
    };
  },
  watch: { 
    language: function(newVal) {
      this.languageInternal = newVal;
    }
  }
});
</script>

<style lang="scss">
.v-timeline.language {
  & .v-timeline-item {
    padding: 0;
    & .v-card {
      box-shadow: none;
      & .v-card__title,
      .v-card__text {
        padding: 0;
      }
      & .v-card__text {
        font-size: 16px;
      }

      & .v-card__title {
        padding-top: 0;
        padding-bottom: 0;
        font-size: 1rem !important;
      }
    }
    & .v-card:after,
    .v-card:before {
      border: none;
    }
  }
}
</style>
