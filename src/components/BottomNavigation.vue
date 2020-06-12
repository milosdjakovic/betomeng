<template>
  <div
    class="fixed inset-x-0 bottom-0 flex justify-center h-12 px-8 sm:px-20 sm:hidden"
    :class="!isPageBottom && `bg-gray-900 bg-opacity-75 shadow-md`"
    style="transition: background 300ms, shadown 300ms, backdrop-filter 300ms"
    :style="!isPageBottom && `backdrop-filter: blur(8px) brightness(90%)`"
  >
    <div class="flex">
      <Navigation />
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

module.exports = {
  components: {
    Navigation
  },
  data: () => ({
    isPageBottom: false
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isPageBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight
    }
  }
}
</script>
