<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <div
          class="mb-4 text-justify"
          v-for="(description, key, index) in $t('about.description')"
          :key="index"
        >
          {{ description }}
        </div>
        <div class="mt-4 text-center">
          <v-btn
            v-for="(contact, key, index) in $t('about.contact')"
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

export default Vue.extend({
  data() {
    return {
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
