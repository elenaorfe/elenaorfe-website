<template>
  <div class="projects mt-4">
    <v-divider class="my-4 mx-auto" width="25%"></v-divider>
    <v-container class="title">
      <h2 class="secondary--text text-uppercase font-weight-light">
        {{ $vuetify.lang.t("$vuetify.personalProjects.title") }}
      </h2>
      <p>
        {{ $vuetify.lang.t("$vuetify.personalProjects.description") }}
      </p>
    </v-container>
    <v-container>
      <v-row>
        <v-col
          v-for="(personalProjectInternal, index) in personalProjectsInternal"
          :key="index"
          cols="12"
          sm="4"
        >
          <Project v-bind:project="personalProjectInternal"></Project>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import Project from "@/components/Project.vue";
import personalProjects from "../assets/data/personalProjects.json";

export default Vue.extend({
  data() {
    return {
      personalProjectsInternal: personalProjects
    };
  },
  components: {
    Project
  },
  created() {
    const language = navigator.language.split("-")[0];
    this.personalProjectsInternal = personalProjects[language];
  }
});
</script>

<style lang="scss">
.projects {
  & .title {
    text-align: center;
  }
}
</style>
