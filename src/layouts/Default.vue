<template>
  <div id="app">
    <div class="min-h-screen text-gray-100">
      <Header />

      <transition id="page-content" name="fade" appear>
        <main class="relative z-30 pt-16 pb-24">
          <slot />
        </main>
      </transition>
    </div>
    <a
      href="https://github.com/milosdjakovic/"
      class="inline-block w-full py-6 mx-auto text-xs text-center text-gray-600 -pb-10 hover:text-blue-300 hover:underline"
    >© {{ new Date().getFullYear() }}, Miloš Đaković</a>
  </div>
</template>

<script>
import gsap from "gsap";
import { mapState, mapMutations } from "vuex";
import Header from "~/components/Header.vue";

export default {
  components: {
    Header
  },
  computed: {
    ...mapState(["initialLoad", "loadAnimationTimeline"])
  },
  methods: {
    ...mapMutations(['setInitialLoad'])
  },
  mounted() {
    const tl = this.loadAnimationTimeline;

    if (!this.initialLoad) {
      tl.to("html", { opacity: 1 });
      tl.from("#header", { y: "-100%" });
      tl.from("#header-blue-room-logo", {rotate: 360 }, "-=0.5");
      tl.from("#header-title", {}, "-=0.6");
      tl.from(".fall-down", { y: "-4rem", stagger: 0.13}, "-=0.6");

      setTimeout(() => this.setInitialLoad(!this.initialLoad), 600)
      // this.setInitialLoad(!this.initialLoad);
    }
  }
};
</script>

<style>
html {
  background-image: url(~@/assets/images/dark-leather.jpg);
  background-color: #000;
  opacity: 0;
}

body {
  background-image: url(~@/assets/images/dark-leather-teal.jpg);
  /* background-color: #6aa3ac;  */
  /* background-blend-mode: multiply; */
  /* background-blend-mode: hard-light; */
}

#app {
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)
}

.fade-enter-active {
  transition: opacity 0.3s, margin-top 0.3s;
}

.fade-enter {
  opacity: 0;
  margin-top: -2px;
}
</style>
