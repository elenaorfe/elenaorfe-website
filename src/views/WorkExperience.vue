<template>
  <div>
    <Title :text="$t('workExperience.title')"></Title>
    <div class="md:grid md:grid-cols-2 gap-4 space-y-4 md:space-y-0">
      <div
        v-for="item in data?.[$i18n.locale]"
        :key="item.id"
      >
        <div class="relative bg-primary-600 px-4 pt-8 pb-12 rounded-t-lg text-center">
          <h2 class="text-white uppercase lg:text-lg">{{ item.name }}</h2>
          <p class="text-sm text-primary-200">{{ item.dateStart }} - {{ item.dateEnd }}</p>
          <div class="company-logo rounded-full h-12 w-12 bg-white flex items-center justify-center">
            <img :src="`/assets/img/${item.logo}`" class="rounded-full" />
          </div>
        </div>
        <div class="shadow rounded-b-lg px-4 py-8">
          <p class="mb-8">{{ item.description }}</p>
          <div
            class="flex justify-center"
            :class="{'arrow-wrapper--rotate-180': showCompanies.includes(item.id)}"
            @click="toggleShowCompany(item.id)"
          >
            <Arrow isAnimate />
          </div>
          <div v-if="showCompanies.includes(item.id)" class="mt-4">
            <div v-for="(project, projectIndex) in item.projects"
                 :key="`project-${project.id}`"
                 :class="projectIndex < (item.projects.length - 1) ? 'border-b border-gray-200 py-4': 'pt-4'"
            >
              <p class="font-bold mb-2">{{ project.title }}</p>
              <div class="flex space-x-2 mb-2">
                <ion-icon name="people-outline" class="text-2xl text-gray-500"></ion-icon>
                <div>
                  <p class="text-gray-500">{{ project.role }}</p>
                  <div class="flex flex-col md:flex-row">
                    <p class="text-sm text-gray-500 mb-2">{{ project.duration }}</p>
                    <p class="mx-2 hidden md:block">•</p>
                    <p class="text-sm text-gray-500 mb-2">{{ project.location }}</p>
                  </div>
                </div>
              </div>
              <p class="mb-2">{{ project.description }}</p>
              <div class="flex flex-wrap">
                <div
                  v-for="(skill, skillIndex) in project.skills" class="text-xs text-gray-500"
                  :key="`project-${project.id}-skill-${skillIndex}`"
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
import { defineComponent, ref } from 'vue'
import Title from '../components/Title.vue'
import Arrow from '../components/Arrow.vue'
import data from '../assets/data/workExperience'
import {WorkExperience} from '../models/workExperience.model'

export default defineComponent({
  name: 'WorkExperience',
  setup: () => {
    const showCompanies = ref([] as string[]);

    function toggleShowCompany(idToRemove: string) {
      const currentIndex = showCompanies.value.findIndex((item) => item === idToRemove);
      if(currentIndex >= 0) {
        showCompanies.value.splice(currentIndex, 1);
      } else {
        showCompanies.value.push(idToRemove);
      }
    }

    return {
      showCompanies,
      toggleShowCompany,
      data: data as unknown as {
        [key: string]: WorkExperience[]
      }
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
