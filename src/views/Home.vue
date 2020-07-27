<template>
  <div class="home">
    <Cookies></Cookies>
    <About></About>
    <WorkExperiences></WorkExperiences>
    <PersonalProjects></PersonalProjects>
  </div>
</template>

<script lang="ts">
import Cookies from  "../components/Cookies.vue";
import About from "./About.vue";
import PersonalProjects from "./PersonalProjects.vue";
import WorkExperiences from "./WorkExperiences.vue";

export default {
  components: {
    Cookies,
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
