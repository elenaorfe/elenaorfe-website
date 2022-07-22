<template>
  <div class="container mx-auto px-4 md:px-12 my-8 space-y-12">
    <Header></Header>
    <main>
      <About></About>
      <WorkExperience></WorkExperience>
      <PersonalProjects></PersonalProjects>
      <div class="md:grid md:grid-cols-2 gap-8">
        <Courses></Courses>
        <div class="space-y-8">
          <Education></Education>
          <Languages></Languages>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import About from './views/About.vue'
import WorkExperience from './views/WorkExperience.vue'
import PersonalProjects from './views/PersonalProjects.vue'
import Courses from './views/Courses.vue'
import Education from './views/Education.vue'
import Languages from './views/Languages.vue'
import Header from './components/Header.vue'

export default defineComponent({
  name: 'App',
  components: {
    About,
    WorkExperience,
    PersonalProjects,
    Courses,
    Education,
    Languages,
    Header
  }
})
</script>

