<template>
  <div id="app" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)">
    <div class="min-h-screen text-gray-100">
      <Header />

      <main class="relative z-30 pt-16 pb-24">
        <slot />
      </main>

      <!-- <BottomNavigation /> -->
    </div>
    <a
      href="https://github.com/milosdjakovic/"
      class="inline-block w-full py-2 mx-auto text-xs text-center text-gray-600 -pb-10 hover:text-blue-300 hover:underline"
    >© {{ new Date().getFullYear() }}, Miloš Đakovic</a>
  </div>
  <!-- <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>-->
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

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
