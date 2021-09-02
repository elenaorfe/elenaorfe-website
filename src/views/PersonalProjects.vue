<template>
  <div>
    <Title :text="$t('personalProjects.title')"></Title>
    <p class="mb-8">{{ $t("personalProjects.description") }}</p>

    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 space-y-8 md:space-y-0 gap-8">
      <div
        v-for="(personalProject, personalProjectKey, personalProjectIndex) in $i18n.messages[$i18n.locale].personalProjects.items"
        :key="`personalProject-${personalProjectIndex}`"
        class="relative bg-white rounded shadow"
      >
        <div class="lg:flex lg:h-full">
          <div class="flex flex-col justify-between text-center">
            <img
              :src="`/assets/img/${personalProject.img}`"
              class="personal-project--image"
              :class="!hoverImg || hoverImg !== personalProjectKey ? '' : 'opacity-0'" 
            />
            <!-- Desktop see more -->
            <div
              class="hidden lg:block my-4"
              @mouseover="hoverImg = personalProjectKey"
              @mouseleave="hoverImg = undefined">
              <a
                :href="personalProject.url"
                target="_blank"
                class="flex text-primary-600 justify-center gap-4"
              >
                {{ $t("personalProjects.link") }}
                <div class="arrow-wrapper--rotate-270">
                  <Arrow :isAnimate="hoverImg === personalProjectKey"/>
                </div>
              </a>
            </div>
            <!-- Tablet and mobile see more -->
            <div
              class="lg:hidden flex justify-center mt-8 mb-4"
              :class="{'arrow-wrapper--rotate-180': showProjects.includes(personalProjectIndex)}"
              @click="toggleShowProject(personalProjectIndex)"
            >
              <Arrow isAnimate />
            </div>
          </div>
          <div class="lg:absolute" :class="(hoverImg === personalProjectKey || showProjects.includes(personalProjectIndex)) ? 'block p-4': 'hidden'">
            <h2 class="text-lg uppercase text-center">{{ personalProject.title }}</h2>
            <p class="text-gray-500 text-center">{{ personalProject.date }}</p>
            <p class="mt-4 mb-2 text-justify">{{ personalProject.description }}</p>
            <div class="flex flex-wrap">
              <div
                v-for="(skill, skillIndex) in personalProject.skills" class="text-sm text-gray-500"
                :key="`personalProject-skill-${skillIndex}`"
              >
                <span>{{ skill }}</span>
                <span v-if="skillIndex < (personalProject.skills.length - 1)" class="mx-1">•</span>
              </div>
            </div>
            <a
              :href="personalProject.url"
              target="_blank"
              class="flex text-primary-600 justify-center gap-4 mt-4 lg:hidden"
            >
              {{ $t("personalProjects.link") }}
              <div class="arrow-wrapper--rotate-270">
                <Arrow isAnimate/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Title from '../components/Title.vue'
import Arrow from '../components/Arrow.vue';

export default defineComponent({
  name: 'PersonalProjects',
  setup() {
    const hoverImg = ref(false);
    const showProjects = ref([] as number[]);

    function toggleShowProject(indexToRemove: number) {
      const currentIndex = showProjects.value.findIndex((i) => i === indexToRemove);
      if(currentIndex >= 0) {
        showProjects.value.splice(currentIndex, 1);
      } else {
        showProjects.value.push(indexToRemove);
      }
    }

    return {
      toggleShowProject,
      hoverImg,
      showProjects
    }
  },
  components: {
    Title,
    Arrow
  }
})
</script>