<template>
  <div
    id="header"
    class="fixed inset-x-0 top-0 z-40 flex justify-center h-16 px-4 sm:px-20"
    :class="isPageTop && `bg-gray-900 bg-opacity-50 shadow-md`"
    style="transition: background 300ms, shadown 300ms, backdrop-filter 300ms"
    :style="isPageTop && `backdrop-filter: blur(8px) brightness(90%)`"
  >
    <div class="overflow-hidden flex justify-between flex-grow max-w-4xl">
      <g-link id="header-logo" exact to="/" class="fall-down flex items-center">
        <BlueRoomLogo id="header-blue-room-logo" class="h-6 sm:h-10" />
        <p id="header-title" class="fall-down ml-3 text-xl sm:text-2xl">{{ $static.metadata.siteName }}</p>
      </g-link>

      <div id="header-navigation" class="flex ml-8">
        <Navigation />
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navigation from "~/components/Navigation.vue";
import BlueRoomLogo from "~/components/svg-vue/BlueRoomLogo.vue";

export default {
  components: {
    Navigation,
    BlueRoomLogo
  },
  data: () => ({
    isPageTop: false
  }),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isPageTop = window.scrollY > 2;
    }
  }
};
</script>
