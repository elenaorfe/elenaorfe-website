<template>
  <v-timeline class="education" dense clipped align-top>
    <v-timeline-item color="secondary" small>
      <v-card>
        <v-card-title class="headline">
          <v-row justify="space-between">
            <v-col cols="12" sm="8"> {{ educationInternal.title }}</v-col>
            <v-col cols="12" sm="4" class="text-sm-right text-caption">
              {{ educationInternal.date }}
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          {{ educationInternal.description }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import Vue from "vue";
import { EducationItem } from "@/models/educations";

export default Vue.extend({
  name: "Education",
  props: {
    education: {
      default: {}
    }
  },
  data() {
    return {
      educationInternal: this.education
    };
  },
  watch: { 
    education: function(newVal) {
      this.educationInternal = newVal;
    }
  }
});
</script>

<style lang="scss">
.v-timeline.education {
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

      & .v-card__title > div > div {
        padding-top: 0;
        padding-bottom: 0;
        font-size: 1rem;
      }
    }
    & .v-card:after,
    .v-card:before {
      border: none;
    }
  }
}
</style>
