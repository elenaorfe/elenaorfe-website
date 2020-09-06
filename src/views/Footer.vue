<template>
  <v-footer padless>
    <v-card class="flex primary" flat tile>
      <v-card-title class="py-2 text-center">
        <span class="text-subtitle-1 secondary--text">
          Copyright © {{ new Date().getFullYear() }} elenaorfe.com
        </span>

        <v-spacer></v-spacer>

        <div class="mx-auto">
          <v-btn
            v-for="(contact, key, index) in $t('about.contact')"
            :key="index"
            class="ml-4"
            icon
            color="secondary"
            @click="redirect(contact)"
          >
            <v-icon>{{ contact.img }}</v-icon>
          </v-btn>
        </div>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  methods: {
    redirect(contact) {
      // Google analytics
      this.$gtag.event("social media", {
        'event_category' : contact.category
      });

      window.open(contact.url, "_blank");
    }
  }
});
</script>
