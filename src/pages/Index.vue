<template>
  <Layout>
    <div class="-mt-16">
      <div class="overflow-hidden">
        <g-image
          id="hero-image"
          style="min-height: 80vh; max-height: 100vh; min-width: 100%"
          class="object-cover h-96 sm:h-auto"
          src="~/assets/images/betomeng_01.jpg"
        />
      </div>

      <div
        id="page-content"
        class="flex justify-center w-full p-8 sm:-mt-8 sm:p-20"
        style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"
      >
        <div class="grid grid-cols-1 overflow-auto sm:grid-cols-2">
          <socialMediaLink
            v-for="(socialLink, i) in socialLinks"
            :key="`social-link-${i}-${socialLink}`"
            class="group"
            :label="socialLink.label"
            :to="socialLink.link"
          >
            <Facebook v-if="socialLink.icon === 'facebook'" class="group-hover:text-facebok-blue" />
            <Youtube v-if="socialLink.icon === 'youtube'" class="group-hover:text-youtube-red" />
            <Mixcloud
              v-if="socialLink.icon === 'mixcloud'"
              class="group-hover:text-mixcloud-purple"
            />
            <Soundcloud
              v-if="socialLink.icon === 'soundcloud'"
              class="group-hover:text-soundcloud-orange"
            />
          </socialMediaLink>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { mapState } from "vuex";
import socialMediaLink from "~/components/socialMediaLink.vue";
import Facebook from "~/components/svg-vue/Facebook.vue";
import Youtube from "~/components/svg-vue/Youtube.vue";
import Mixcloud from "~/components/svg-vue/Mixcloud.vue";
import Soundcloud from "~/components/svg-vue/Soundcloud.vue";

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    // BetomengLogo
    socialMediaLink,
    Facebook,
    Youtube,
    Mixcloud,
    Soundcloud
  },
  computed: {
    ...mapState(["count", "socialLinks", "loadAnimationTimeline", "initialLoad"])
  }, 
  mounted() {
    const tl = this.loadAnimationTimeline;

    if (!this.initialLoad) {
      tl.from("#hero-image", { y: "-16", opacity: 0, scale: 1.04 }, "-=0.3");
      tl.from("#page-content", { y: "16", opacity: 0 }, "-=0.3");
    }
  }
};
</script>
