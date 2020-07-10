<template>
  <div class="home">
    <About></About>
    <WorkExperiences></WorkExperiences>
    <PersonalProjects></PersonalProjects>
  </div>
</template>

<script lang="ts">
import About from "@/views/About";
import PersonalProjects from "@/views/PersonalProjects";
import WorkExperiences from "@/views/WorkExperiences";

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
