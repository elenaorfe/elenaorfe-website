<template>
  <div>
    <Title :text="$t('workExperience.title')"></Title>
    <div class="md:grid md:grid-cols-2 gap-4 space-y-4 md:space-y-0">
      <div
        v-for="(workExperience, workExperienceKey, workExperienceIndex) in $i18n.messages[$i18n.locale].workExperience.items"
        :key="workExperienceKey"
      >
        <div class="relative bg-primary-600 px-4 pt-8 pb-12 rounded-t-lg text-center">
          <h2 class="text-white uppercase text-lg">{{ workExperience.name }}</h2>
          <p class="text-sm text-primary-200">{{ workExperience.dateStart }} - {{ workExperience.dateEnd }}</p>
          <div class="company-logo rounded-full h-12 w-12 bg-white flex items-center justify-center">
            <img :src="`/assets/img/${workExperience.logo}`" class="rounded-full" />
          </div>
        </div>
        <div class="shadow rounded-b-lg px-4 py-8">
          <p class="text mb-8">{{ workExperience.description }}</p>
          <div
            class="flex justify-center"
            :class="{'arrow-wrapper--rotate-180': showCompanies.includes(workExperienceIndex)}"
            @click="toggleShowCompany(workExperienceIndex)"
          >
            <Arrow isAnimate />
          </div>
          <div v-if="showCompanies.includes(workExperienceIndex)" class="mt-4">
            <div v-for="(project, projectIndex) in workExperience.projects"
                 :key="`project-${projectIndex}`"
                 :class="projectIndex < (workExperience.projects.length - 1) ? 'border-b border-gray-200 py-4': 'pt-4'"
            >
              <p>{{ project.title }}</p>
              <div class="flex flex-col md:flex-row">
                <p class="text-sm text-gray-500 mb-2">{{ project.duration }}</p>
                <p class="mx-2 hidden md:block">•</p>
                <p class="text-sm text-gray-500 mb-2">{{ project.location }}</p>
              </div>
              <p class="text-sm mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap">
                <div
                  v-for="(skill, skillIndex) in project.skills" class="text-xs text-gray-500"
                  :key="`project-${projectIndex}-skill-${skillIndex}`"
                >
                  <span>{{ skill }}</span>
                  <span v-if="skillIndex < (project.skills.length - 1)" class="mx-1">•</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Title from '../components/Title.vue';
import Arrow from '../components/Arrow.vue';

export default defineComponent({
  name: 'WorkExperience',
  setup: () => {
    const showCompanies = ref([] as number[]);

    function toggleShowCompany(indexToRemove: number) {
      const currentIndex = showCompanies.value.findIndex((i) => i === indexToRemove);
      if(currentIndex >= 0) {
        showCompanies.value.splice(currentIndex, 1);
      } else {
        showCompanies.value.push(indexToRemove);
      }
    }

    return {
      showCompanies,
      toggleShowCompany
    }
  },
  components: {
    Title,
    Arrow
  }
})
</script>


<style lang="scss" scoped>
  .company-logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    padding: 5px;
  }
</style>
