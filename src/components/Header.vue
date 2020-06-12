<template>
  <div
    class="fixed inset-x-0 top-0 z-40 flex justify-center h-10 px-4 sm:px-20 sm:h-16"
    :class="isPageTop && `bg-gray-900 bg-opacity-50 shadow-md`"
    style="transition: background 300ms, shadown 300ms, backdrop-filter 300ms"
    :style="isPageTop && `backdrop-filter: blur(8px) brightness(90%)`"
  >
    <div class="flex justify-between flex-grow max-w-4xl">
      <nuxt-link exact to="/" class="flex items-center">
        <BlueRoomLogo class="h-6 sm:h-10" />
        <p class="ml-3 text-xl sm:text-2xl">Betomeng</p>
      </nuxt-link>

      <div class="flex ml-8">
        <Navigation />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import BlueRoomLogo from '~/components/svg-vue/BlueRoomLogo.vue'

module.exports = {
  components: {
    Navigation,
    BlueRoomLogo
  },
  data: () => ({
    isPageTop: false
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isPageTop = window.scrollY > 2
    }
  }
}
</script>
