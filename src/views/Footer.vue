<template>
  <v-footer padless>
    <v-card class="flex primary" flat tile>
      <v-card-title class="py-2 text-center">
        <span class="text-subtitle-1 secondary--text">
          Copyright © {{ new Date().getFullYear() }} elenaorfe.com
        </span>

        <v-spacer></v-spacer>

        <v-btn
          v-for="(icon, index) in icons"
          :key="icon"
          class="mx-4"
          icon
          color="secondary"
          @click="redirect(links[index])"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  data: () => ({
    icons: ["mdi-linkedin", "mdi-github", "mdi-email"],
    links: [
      "https://www.linkedin.com/in/elenaorfe",
      "https://github.com/elenaorfe",
      "elenaorfe@gmail.com"
    ]
  }),
  methods: {
    redirect(url) {
      window.open(url, "_blank");
    }
  }
});
</script>
