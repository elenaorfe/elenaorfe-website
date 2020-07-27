<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <h1 class="d-inline">{{ aboutInternal.name }}</h1>
        <span class="mx-4 d-none d-sm-inline">|</span>
        <span class="d-block d-sm-inline">{{ aboutInternal.role }}</span>
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
            @click="redirect(contact)"
          >
            <v-icon size="35px">{{ contact.img }}</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <v-parallax v-if="!isMobile" src="../assets/img/profile.png"></v-parallax>
        <v-img v-if="isMobile" src="../assets/img/profile-mobile.png"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import about from "../assets/data/about.json";

export default Vue.extend({
  props: {
    about
  },
  data() {
    return {
      aboutInternal: about["en"],
      isMobile: false
    };
  },
  methods: {
    redirect(contact) {
      // Google analytics
      this.$gtag.event("social media", {
        'event_category' : contact.category
      });

      window.open(contact.url, "_blank");
    }
  },
  created() {
    const language = navigator.language.split("-")[0];
    this.aboutInternal = about[language];

    this.isMobile = screen.width <= 760;
  }
});
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
