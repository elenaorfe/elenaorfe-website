<template>
  <div class="work-experiences mt-4">
    <v-divider class="my-4 mx-auto" width="25%"></v-divider>
    <v-container class="title">
      <h2 class="secondary--text text-uppercase font-weight-light">
        {{ $vuetify.lang.t("$vuetify.workExperience.title") }}
      </h2>
      <p>
        {{ $vuetify.lang.t("$vuetify.workExperience.description") }}
      </p>
    </v-container>
    <v-container>
      <div
        v-for="(workExperience, index) in workExperiencesInternal"
        :key="index"
      >
        <WorkExperience v-bind:workExperience="workExperience" />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import WorkExperience from "@/components/WorkExperience";
import workExperiences from "@/assets/data/workExperiences.json";

export default {
  data() {
    return {
      workExperiencesInternal: workExperiences
    };
  },
  components: {
    WorkExperience
  },
  created() {
    const language = navigator.language.split("-")[0];
    this.workExperiencesInternal = workExperiences[language];
  }
};
</script>

<style lang="scss">
.work-experiences {
  & .title {
    text-align: center;
  }
}
</style>
