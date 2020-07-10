<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <h1 class="d-inline">{{ aboutInternal.name }}</h1>
        <span class="mx-4">|</span>
        <span>{{ aboutInternal.role }}</span>
        <v-divider class="my-4" width="25%"></v-divider>
        <div
          class="mb-4 text-justify"
          v-for="(description, index) in aboutInternal.description"
          :key="index"
        >
          {{ description }}
        </div>
        <div class="mt-4 text-center">
          <v-btn
            v-for="(contact, index) in aboutInternal.contact"
            :key="index"
            class="ml-4"
            icon
            color="secondary"
            @click="redirect(contact.url)"
          >
            <v-icon size="35px">{{ contact.img }}</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <!-- TODO <v-parallax src="../assets/img/profile.png"></v-parallax>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import about from "@/assets/data/about.json";
import { About } from "@/models/about";

export default {
  props: {
    about: Object as PropType<About>
  },
  data() {
    return {
      aboutInternal: about
    };
  },
  methods: {
    redirect(url) {
      window.open(url, "_blank");
    }
  },
  created() {
    const language = navigator.language.split("-")[0];
    this.aboutInternal = about[language];
  }
};
</script>

<style lang="scss">
.about {
  & .title {
    text-align: center;
  }

  & .text-justify {
    text-align: justify;
  }
}
</style>
