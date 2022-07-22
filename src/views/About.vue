<template>
  <section>
    <div class="md:grid md:grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <h1 class="text-2xl md:text-4xl">{{ $t("about.name") }}, <span class="block text-2xl md:text-4xl text-primary-500 mb-4 md:mb-8">{{ $t("about.role") }}</span></h1>
        <div
            class="mb-4 text-justify"
            v-for="item in data?.[$i18n.locale]"
            :key="item.id"
        >
          <div v-html="item.text"></div>
        </div>
      </div>
      <div class="m-auto" style="max-width: 400px" aria-hidden="true">
        <lottie-player
            autoplay
            loop
            controls
            mode="normal"
            src="https://assets2.lottiefiles.com/packages/lf20_r6arzszj.json"
        ></lottie-player>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '@lottiefiles/lottie-player';
import data from '../assets/data/about'
import {About} from '../models/about.model'

export default defineComponent({
  name: 'About',
  setup() {
    return {
      data: data as unknown as {
        [key: string]: About[]
      }
    }
  }
})
</script>
