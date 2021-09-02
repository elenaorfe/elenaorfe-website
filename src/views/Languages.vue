<template>
  <div>
    <Title :text="$t('languages.title')"></Title>
    <div class="md:grid md:grid-cols-3 space-y-4 md:space-y-0 gap-4">
      <div class="bg-white rounded shadow p-4"
           v-for="(language, key) in $i18n.messages[$i18n.locale].languages.items"
           :key="`language-${key}`">
        <p>{{ language.name }}</p>
        <p class="text-sm text-gray-500">{{ language.level }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title from '../components/Title.vue'

export default defineComponent({
  name: 'Languages',
  components: {
    Title
  }
})
</script>
