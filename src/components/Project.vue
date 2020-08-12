<template>
  <v-card>
    <v-img
      height="200px"
      :src="require(`@/assets/img/${projectInternal.img}`)"
    ></v-img>

    <v-card-title>
      {{ projectInternal.title }}
    </v-card-title>

    <v-card-text class="description">
      {{ projectInternal.description }}
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-subtitle>Skills</v-card-subtitle>

    <v-card-text class="skills">
      <v-chip-group column>
        <v-chip 
          v-for="(skill, index) in projectInternal.skills"
          :key="index"
          color="secondary"
          outlined
        >
          {{ skill }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text class="text-center">
      <v-btn fab dark color="secondary" @click="redirect">
        <v-icon dark>mdi-link-variant</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Project",
  props: {
    project: {
      default: {}
    }
  },
  data() {
    return {
      projectInternal: this.project
    };
  },
  methods: {
    redirect() {
      // Google analytics
      this.$gtag.event("personal project", {
        'event_category': this.projectInternal.category
      });

      window.open(this.projectInternal.url, "_blank");
    }
  }
});
</script>

<style lang="scss" scoped>
.v-card {
  & .description,
  & .skills {
    height: 100px;
  }
}

.v-chip {
  pointer-events: none;
}
</style>
