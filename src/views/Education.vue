<template>
  <div>
    <Title :text="$t('education.title')"></Title>
    <div class="bg-white rounded shadow p-4 mb-4"
          v-for="(education, key) in $i18n.messages[$i18n.locale].education.items"
          :key="key">
      <p>{{ education.title }}</p>
      <p class="text-xs text-gray-500">{{ education.date }}</p>
      <p class="text-sm text-gray-500">{{ education.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title from '../components/Title.vue'

export default defineComponent({
  name: 'Education',
  components: {
    Title
  }
})
</script>
