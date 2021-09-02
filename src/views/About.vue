<template>
  <div class="md:grid md:grid-cols-1 lg:grid-cols-2 gap-4">
    <div>
      <h1 class="text-2xl md:text-4xl">{{ $t("about.name") }},</h1>
      <h1 class="text-2xl md:text-4xl text-primary-500 mb-4 md:mb-8">{{ $t("about.role") }}</h1>
      <div
        class="mb-4 text-justify"
        v-for="(description, key, index) in $i18n.messages[$i18n.locale].about.description"
        :key="index"
      >
        <div v-html="description"></div>
      </div>
    </div>
    <div class="mx-auto">
      <img src="/assets/img/profile-mobile.png" alt="profile" class="w-1/2 md:w-auto mx-auto" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About'
})
</script>
