<template>
  <div class="home">
    <Cookies></Cookies>
    <Header></Header>
    <About></About>
    <WorkExperiences></WorkExperiences>
    <PersonalProjects></PersonalProjects>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <Courses></Courses>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <Educations></Educations>
          <Languages></Languages>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Cookies from  "../components/Cookies.vue";
import Header from "./Header.vue";
import About from "./About.vue";
import PersonalProjects from "./PersonalProjects.vue";
import WorkExperiences from "./WorkExperiences.vue";
import Courses from "./Courses.vue";
import Educations from "./Educations.vue";
import Languages from "./Languages.vue";

export default {
  components: {
    Cookies,
    About,
    PersonalProjects,
    WorkExperiences,
    Courses,
    Educations,
    Languages,
    Header
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
