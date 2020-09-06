<template>
  <div class="projects mt-4">
    <v-divider class="my-4 mx-auto" width="25%"></v-divider>
    <v-container class="title">
      <h2 class="secondary--text text-uppercase font-weight-light">
        {{ $t('personalProjects.title') }}
      </h2>
      <p>
        {{ $t('personalProjects.description') }}
      </p>
    </v-container>
    <v-container>
      <v-row>
        <v-col
          v-for="(personalProjectInternal, key, index) in $t('personalProjects.items')"
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

export default Vue.extend({
  components: {
    Project
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
