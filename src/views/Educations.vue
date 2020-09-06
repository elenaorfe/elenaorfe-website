<template>
  <div class="educations mt-4">
    <v-divider class="my-4 mx-auto" width="25%"></v-divider>
    <v-container class="title">
      <h2 class="secondary--text text-uppercase font-weight-light">
        {{ $t('educations.title') }}
      </h2>
    </v-container>
    <v-container>
      <div
        v-for="(education, key, index) in $t('educations.items')"
        :key="index"
      >
        <Education v-bind:education="education" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Education from "@/components/Education.vue";

export default {
  components: {
    Education
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
