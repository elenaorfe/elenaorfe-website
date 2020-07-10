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
        <v-chip v-for="(skill, index) in projectInternal.skills" :key="index">
          {{ skill }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="redirect">
        Visit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Project } from "@/models/projects";

export default Vue.extend({
  name: "Project",
  props: {
    project: Object as PropType<Project>
  },
  data() {
    return {
      projectInternal: this.project
    };
  },
  methods: {
    redirect() {
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
</style>
