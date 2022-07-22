<template>
  <header>
    <div class="flex justify-end space-x-4">
      <a href="https://github.com/elenaorfe" target="_blank" rel="noopener noreferrer" class="flex" aria-label="Visit Elena's Github Profile (opens in a new window)">
        <ion-icon name="logo-github" aria-label="Visit Github"></ion-icon>
      </a>
      <a href="https://www.linkedin.com/in/elenaorfe" target="_blank" rel="noopener noreferrer" class="flex" aria-label="Visit Elena's Linkedin Profile (opens in a new window)">
        <ion-icon name="logo-linkedin" aria-label="Visit Linkedin"></ion-icon>
      </a>
      <a href="mailto:elenaorfe@gmail.com" target="_blank" rel="noopener noreferrer" class="flex" aria-label="Send an email to Elena (opens in a new window)">
        <ion-icon name="mail-outline" aria-label="Send email"></ion-icon>
      </a>
      <div class="flex relative cursor-pointer lg:pr-4" @click="showLanguageMenu = !showLanguageMenu">
        <ion-icon name="globe-outline" aria-label="Select language"></ion-icon>
        <div class="menu-language--dropdown absolute right-0 mr-4 border border-gray rounded bg-white mt-8 z-10 text-right" v-if="showLanguageMenu">
          <div
              class="menu-language--dropdown-item"
              :class="language === 'en' ? 'menu-language--dropdown-item--selected' : ''"
              @click="setLanguage('en')"
          >
            English
          </div>
          <div
              class="menu-language--dropdown-item"
              :class="language === 'es' ? 'menu-language--dropdown-item--selected' : ''"
              @click="setLanguage('es')"
          >
            Español
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import i18n from '../plugins/i18n';

export default defineComponent({
  name: 'Header',
  setup() {
    const showLanguageMenu = ref(false);
    let language = ref(i18n.global.locale);

    function setLanguage(lng: string) {
      i18n.global.locale = lng;
      language.value = lng;
    }
    return {
      showLanguageMenu,
      language,
      setLanguage
    }
  }
})
</script>

<style lang="scss" scoped>
  ion-icon {
    font-size: 24px;
    @apply text-primary-500;
  }

  .menu-language--dropdown {
    min-width: 150px;

    & .menu-language--dropdown-item {
      @apply cursor-pointer py-4 hover:bg-gray-100 pr-8;

      &.menu-language--dropdown-item--selected {
        @apply flex font-bold text-primary-500 gap-2;

        &:before {
          display: inline-flex;
          content: '';
          mask: url('../assets/icon/checkmark-outline.svg');
          mask-size: 18px 18px;
          width: 18px;
          height: 18px;
          margin: auto;
          @apply bg-primary-500;
        }
      }
    }
  }
</style>
