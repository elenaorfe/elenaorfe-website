<template>
  <v-timeline class="work-experience" dense clipped align-top>
    <v-timeline-item fill-dot class="white--text" color="white" large>
      <template v-slot:icon>
        <v-avatar>
          <img :src="require(`@/assets/img/${workExperienceInternal.logo}`)" />
        </v-avatar>
      </template>
      <v-card>
        <v-card-title class="headline">
          <v-row justify="space-between">
            <v-col cols="12" sm="6"> {{ workExperienceInternal.name }}</v-col>
            <v-col cols="12" sm="6" class="text-sm-right text-subtitle-1">
              {{ workExperienceInternal.dateStart }}
              -
              {{ workExperienceInternal.dateEnd }}
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          {{ workExperienceInternal.description }}
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-slide-x-transition group>
      <v-timeline-item
        v-for="(project, index) in workExperienceInternal.projects"
        :key="index"
        class="mb-4"
        :color="workExperienceInternal.color"
        small
      >
        <v-row justify="space-between">
          <v-col cols="12" sm="8" class="py-0">
            <span class="subtitle-1 font-weight-bold">{{ project.title }}</span>
          </v-col>
          <v-col cols="12" sm="4" class="text-sm-right text-caption py-0">
            <span>{{ project.location }}</span>
            <span class="mx-1"> | </span>
            <span>{{ project.duration }}</span>
          </v-col>
        </v-row>

        <v-row justify="space-between">
          <v-col cols="12" class="pt-0">
            <span>{{ project.description }}</span>
            <ul>
              <li v-for="(task, index) in project.tasks" :key="index">
                {{ task }}
              </li>
            </ul>
            <v-chip-group column>
              <v-chip v-for="(skill, index) in project.skills" :key="index">
                {{ skill }}
              </v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-slide-x-transition>
  </v-timeline>
</template>

<script>
import Vue from "vue";
import { WorkExperienceItem } from "@/models/workExperiences";

export default Vue.extend({
  name: "WorkExperience",
  props: {
    workExperience: {
      default: {}
    }
  },
  data() {
    return {
      workExperienceInternal: this.workExperience
    };
  }
});
</script>

<style lang="scss">
.v-timeline.work-experience {
  & .v-timeline-item {
    & .v-card {
      box-shadow: none;
      & .v-card__title,
      .v-card__text {
        padding: 0px;
      }
    }
    & .v-card:after,
    .v-card:before {
      border: none;
    }

    ul {
      list-style-type: none;
      padding-left: 0px;

      li:before {
        content: "-";
        padding-right: 5px;
      }
    }

    ul.list-horizontal {
      list-style-type: none;
      padding-left: 0px;

      & li {
        float: left;
        display: block;
        padding-right: 5px;

        &:before {
          content: "";
        }

        &:first-child:before {
          content: "🖥";
          margin-right: 5px;
        }

        &:not(:last-child):after {
          content: "·";
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
