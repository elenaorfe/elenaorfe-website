<template>
  <v-timeline class="course" dense clipped align-top>
    <v-timeline-item fill-dot :color="courseInternal.color" :icon="courseInternal.icon">
      <v-card>
        <v-card-title class="headline">
          <v-row justify="space-between">
            <v-col cols="12" sm="8"> {{ courseInternal.title }}</v-col>
            <v-col cols="12" sm="4" class="text-sm-right text-caption">
              {{ courseInternal.date }}
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          {{ courseInternal.description }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import Vue from "vue";
import { CourseItem } from "@/models/courses";

export default Vue.extend({
  name: "Course",
  props: {
    course: {
      default: {}
    }
  },
  data() {
    return {
      courseInternal: this.course
    };
  },
  watch: { 
    course: function(newVal) {
      this.courseInternal = newVal;
    }
  }
});
</script>

<style lang="scss">
.v-timeline.course {
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

@media screen and (min-width: 1400px) {
  .v-timeline.course {
    & .v-timeline-item {
      & .v-card {
        & .v-card__title > div > div {
          white-space: nowrap
        }
      }
    }
  }
}
</style>
