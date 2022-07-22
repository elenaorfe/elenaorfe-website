<template>
  <section>
    <Title :text="$t('education.title')"></Title>
    <div class="bg-white rounded shadow p-4 mb-4"
         v-for="item in data?.[$i18n.locale]"
          :key="item.id">
      <p>{{ item.title }}</p>
      <p class="text-xs text-gray-500">{{ item.date }}</p>
      <p class="text-sm text-gray-500">{{ item.description }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title from '../components/Title.vue'
import data from '../assets/data/education'
import {Education} from '../models/education.model'

export default defineComponent({
  name: 'Education',
  components: {
    Title
  },
  setup() {
    return {
      data: data as unknown as {
        [key: string]: Education[]
      }
    }
  }
})
</script>
