<template>
  <div id="app" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)">
    <div class="min-h-screen text-gray-100">
      <Header />

      <main class="relative z-30 pt-16 pb-24">
        <slot />
      </main>
    </div>
    <a
      href="https://github.com/milosdjakovic/"
      class="inline-block w-full py-6 mx-auto text-xs text-center text-gray-600 -pb-10 hover:text-blue-300 hover:underline"
    >© {{ new Date().getFullYear() }}, Miloš Đakovic</a>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
html {
  background-image: url(~@/assets/images/dark-leather.jpg);
  background-color: #000;
}

body {
  background-image: url(~@/assets/images/dark-leather-teal.jpg);
  /* background-color: #6aa3ac;  */
  /* background-blend-mode: multiply; */
  /* background-blend-mode: hard-light; */
}
</style>
