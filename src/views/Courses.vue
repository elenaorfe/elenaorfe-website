<template>
  <div>
    <Title :text="$t('courses.title')"></Title>
    <div
      class="flex space-x-4 lg:space-x-8 bg-white rounded shadow p-4 mb-4"
      v-for="item in data?.[$i18n.locale]"
      :key="item.id"
    >
      <div class="rounded-full h-8 lg:h-12 w-8 lg:w-12 bg-primary-500 flex items-center my-auto">
        <ion-icon :name="item.icon" class="mx-auto"></ion-icon>
      </div>
      <div>
        <p>{{ item.title }}</p>
        <p class="text-xs text-gray-500">{{ item.date }}</p>
        <p class="text-sm text-gray-500">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title from '../components/Title.vue'
import data from '../assets/data/courses'
import {Course} from '../models/course.model'

export default defineComponent({
  name: 'Courses',
  components: {
    Title
  },
  setup() {
    return {
      data: data as unknown as {
        [key: string]: Course[]
      }
    }
  }
})
</script>

<style lang="scss" scoped>
  .course-logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    padding: 5px;
  }
  ion-icon {
    @apply text-white lg:text-2xl;
  }
</style>
