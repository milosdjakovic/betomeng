<template>
  <nav class="flex flex-row">
    <g-link
      exact
      to="/"
      class="flex items-center px-4"
      active-class="text-gray-900 bg-blue-200"
    >{{ siteContent[currentLanguage].navigation.home }}</g-link>
    <g-link
      exact
      to="/bio"
      class="flex items-center px-4"
      active-class="text-gray-900 bg-blue-200"
    >Bio</g-link>
  </nav>
</template>

<script>
import { mapState } from 'vuex';
import siteContent from "~/data/site-content.json";

export default {
  data: () => ({
    siteContent
  }),
  computed: {
    ...mapState(['currentLanguage'])
  }
};
</script>