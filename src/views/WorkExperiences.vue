<template>
  <div class="work-experiences mt-4">
    <v-divider class="my-4 mx-auto" width="25%"></v-divider>
    <v-container class="title">
      <h2 class="secondary--text text-uppercase font-weight-light">
        {{ $t("workExperience.title") }}
      </h2>
      <p>
        {{ $t("workExperience.description") }}
      </p>
    </v-container>
    <v-container>
      <div
        v-for="(workExperience, key, index) in $t('workExperience.items')"
        :key="index"
      >
        <WorkExperience v-bind:workExperience="workExperience" />
      </div>
    </v-container>
  </div>
</template>

<script>
import WorkExperience from "@/components/WorkExperience.vue";

export default {
  components: {
    WorkExperience
  },
  filters: {
  	reverse(items) {
    	return items.slice().reverse()
    }
  }
};
</script>

<style lang="scss">
.work-experiences {
  & .title {
    text-align: center;
  }
}
</style>
