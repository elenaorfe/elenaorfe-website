<template>
  <div class="home">
    <About></About>
    <WorkExperiences></WorkExperiences>
    <PersonalProjects></PersonalProjects>
  </div>
</template>

<script lang="ts">
import About from "./About.vue";
import PersonalProjects from "./PersonalProjects.vue";
import WorkExperiences from "./WorkExperiences.vue";

export default {
  components: {
    About,
    PersonalProjects,
    WorkExperiences
  }
};
</script>

<style lang="scss">
.home {
  & .title {
    text-align: center;
  }
}
</style>
