<template>
  <div class="courses mt-4">
    <v-divider class="my-4 mx-auto" width="25%"></v-divider>
    <v-container class="title">
      <h2 class="secondary--text text-uppercase font-weight-light">
        {{ $vuetify.lang.t("$vuetify.courses.title") }}
      </h2>
    </v-container>
    <v-container>
      <div
        v-for="(course, index) in coursesInternal"
        :key="index"
      >
        <Course v-bind:course="course" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Course from "@/components/Course.vue";
import courses from "@/assets/data/courses.json";

export default {
  data() {
    return {
      coursesInternal: courses
    };
  },
  components: {
    Course
  },
  created() {
    const language = navigator.language.split("-")[0];
    this.coursesInternal = courses[language];
  }
};
</script>

<style lang="scss">
.courses {
  & .title {
    text-align: center;
  }
}
</style>
