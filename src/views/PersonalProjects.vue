<template>
  <div>
    <Title :text="$t('personalProjects.title')"></Title>

    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 space-y-8 md:space-y-0 gap-8">
      <div
        v-for="item in data?.[$i18n.locale]"
        :key="item.id"
        class="relative bg-white rounded shadow"
      >
        <div class="lg:flex lg:h-full">
          <div class="flex flex-col justify-between text-center lg:gap-4">
            <div class="bg-primary-600 rounded-t-lg px-2 py-4">
              <h2 class="text-white uppercase text-center text-sm lg:text-base">{{ item.title }}</h2>
              <p class="text-sm text-white text-center">{{ item.date }}</p>
            </div>
            <img
              :src="`/assets/img/${item.img}`"
              class="personal-project--image"
              :class="!hoverImg || hoverImg !== item.id ? '' : 'opacity-0'"
              alt=""
            />
            <!-- Desktop see more -->
            <div
              class="hidden lg:block my-4"
              @mouseover="hoverImg = item.id"
              @mouseleave="hoverImg = undefined">
              <a
                :href="item.url"
                target="_blank"
                class="flex text-primary-600 justify-center gap-4"
                :aria-label="item.title"
              >
                {{ $t("personalProjects.link") }}
                <div class="arrow-wrapper--rotate-270">
                  <Arrow :isAnimate="hoverImg === item.id"></Arrow>
                </div>
              </a>
            </div>
            <!-- Tablet and mobile see more -->
            <div
              class="lg:hidden flex justify-center mt-8 mb-4"
              :class="{'arrow-wrapper--rotate-180': showProjects.includes(item.id)}"
              @click="toggleShowProject(item.id)"
            >
              <Arrow isAnimate></Arrow>
            </div>
          </div>
          <div class="lg:absolute lg:mt-24" :class="(hoverImg === item.id || showProjects.includes(item.id)) ? 'block p-4': 'hidden'">
            <p class="mt-8 mb-2 text-justify">{{ item.description }}</p>
            <div class="flex flex-wrap">
              <div
                v-for="(skill, skillIndex) in item.skills" class="text-sm text-gray-500"
                :key="`personalProject-skill-${skillIndex}`"
              >
                <span>{{ skill }}</span>
                <span v-if="skillIndex < (item.skills.length - 1)" class="mx-1">•</span>
              </div>
            </div>
            <a
              :href="item.url"
              target="_blank"
              class="flex text-primary-600 justify-center gap-4 mt-4 lg:hidden"
            >
              {{ $t("personalProjects.link") }}
              <div class="arrow-wrapper--rotate-270">
                <Arrow isAnimate></Arrow>
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
import Arrow from '../components/Arrow.vue'
import data from '../assets/data/personalProjects'
import {PersonalProject} from '../models/personalProject.model'

export default defineComponent({
  name: 'PersonalProjects',
  setup() {
    const hoverImg = ref();
    const showProjects = ref([] as string[]);

    function toggleShowProject(idToRemove: string) {
      const currentIndex = showProjects.value.findIndex((i) => i === idToRemove);
      if(currentIndex >= 0) {
        showProjects.value.splice(currentIndex, 1);
      } else {
        showProjects.value.push(idToRemove);
      }
    }

    return {
      toggleShowProject,
      hoverImg,
      showProjects,
      data: data as unknown as {
        [key: string]: PersonalProject[]
      }
    }
  },
  components: {
    Title,
    Arrow
  }
})
</script>
