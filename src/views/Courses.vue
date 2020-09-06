<template>
  <div class="courses mt-4">
    <v-divider class="my-4 mx-auto" width="25%"></v-divider>
    <v-container class="title">
      <h2 class="secondary--text text-uppercase font-weight-light">
        {{ $t("courses.title") }}
      </h2>
    </v-container>
    <v-container>
      <div v-for="(course, key, index) in $t('courses.items')" :key="index">
        <Course v-bind:course="course" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Course from "@/components/Course.vue";

export default {
  components: {
    Course
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
