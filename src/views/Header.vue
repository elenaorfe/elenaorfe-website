<template>
  <v-container>
    <h1 class="d-inline">{{ $t('about.name') }}</h1>
    <span class="mx-4 d-none d-sm-inline">|</span>
    <span class="d-block d-sm-inline">{{ $t('about.role') }}</span>
    
    <div class="float-right">
        <v-icon class="flag-icon flag-icon-gb" @click="changeLanguage('en')"></v-icon>
        <v-icon class="ml-2 flag-icon flag-icon-es" @click="changeLanguage('es')"></v-icon>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import i18n from "@/plugins/i18n";

export default Vue.extend({
  methods: {
    changeLanguage(lng: string) {
        i18n.locale = lng;
    }
  }
});
</script>
