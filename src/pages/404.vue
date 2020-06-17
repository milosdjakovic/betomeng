<template>
  <Layout>
    <div class="flex justify-center p-8 sm:p-20">
      <div class="flex-grow max-w-4xl">
        <h2 class="text-2xl">404</h2>
        <transition name="fade" mode="out-in">
          <p key="nav-home-en" v-if="currentLanguage === `en`">{{ siteContent.en.fourZeroFour.content }}</p>
          <p key="nav-content-rs" v-if="currentLanguage === `rs`">{{ siteContent.rs.fourZeroFour.content }}</p>
        </transition>
      </div>
    </div>
  </Layout>
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