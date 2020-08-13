<template>
  <div class="educations mt-4">
    <v-divider class="my-4 mx-auto" width="25%"></v-divider>
    <v-container class="title">
      <h2 class="secondary--text text-uppercase font-weight-light">
        {{ $vuetify.lang.t("$vuetify.educations.title") }}
      </h2>
    </v-container>
    <v-container>
      <div
        v-for="(education, index) in educationsInternal"
        :key="index"
      >
        <Education v-bind:education="education" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Education from "@/components/Education.vue";
import educations from "@/assets/data/educations.json";

export default {
  data() {
    return {
      educationsInternal: educations
    };
  },
  components: {
    Education
  },
  created() {
    const language = navigator.language.split("-")[0];
    this.educationsInternal = educations[language];
  }
};
</script>

<style lang="scss">
.educations {
  & .title {
    text-align: center;
  }
}
</style>
