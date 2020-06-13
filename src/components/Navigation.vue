<template>
  <nav class="flex flex-row">
    <g-link exact to="/" class="fall-down nav-link" active-class="nav-link__active">
      <transition name="fade" mode="out-in">
        <span key="nav-home-en" v-if="currentLanguage === `en`">{{ siteContent.en.navigation.home }}</span>
        <span key="nav-home-rs" v-if="currentLanguage === `rs`">{{ siteContent.rs.navigation.home }}</span>
      </transition>
    </g-link>

    <g-link exact to="/bio" class="fall-down nav-link" active-class="nav-link__active">Bio</g-link>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import siteContent from "~/data/site-content.json";

export default {
  data: () => ({
    siteContent
  }),
  computed: {
    ...mapState(["currentLanguage"])
  }
};
</script>

<style lang="postcss" scoped>
.nav-link {
  @apply flex items-center px-4;
  transition: background 280ms;
}

.nav-link:not(.nav-link__active):hover {
  @apply bg-blue-200 bg-opacity-25;
}

.nav-link__active {
  @apply text-gray-900 bg-blue-200;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-7px)
}
</style>