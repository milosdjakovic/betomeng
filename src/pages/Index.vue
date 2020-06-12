<template>
  <Layout>
    <div class="-mt-16">
      <g-image
        style="min-height: 80vh; max-height: 100vh; min-width: 100%"
        class="object-cover h-96 sm:h-auto"
        src="~/assets/images/betomeng_01.jpg"
      />

      <div
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
import socialMediaLink from "~/components/socialMediaLink.vue";
import Facebook from "~/components/svg-vue/Facebook.vue";
import Youtube from "~/components/svg-vue/Youtube.vue";
import Mixcloud from "~/components/svg-vue/Mixcloud.vue";
import Soundcloud from "~/components/svg-vue/Soundcloud.vue";

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    // BetomengLogo
    socialMediaLink,
    Facebook,
    Youtube,
    Mixcloud,
    Soundcloud
  },
  data: () => ({
    socialLinks: [
      {
        link: "https://www.facebook.com/betomengmusic/",
        icon: "facebook",
        label: "Betomeng"
      },
      {
        link: "https://www.facebook.com/groups/electronicALmachine/",
        icon: "facebook",
        label: "Electronic Al Machine"
      },
      {
        link: "https://www.youtube.com/user/BetomengLegoman",
        icon: "youtube",
        label: "Youtube"
      },
      {
        link: "https://www.mixcloud.com/Betomeng",
        icon: "mixcloud",
        label: "Mixcloud"
      },
      {
        link: "https://soundcloud.com/betomeng",
        icon: "soundcloud",
        label: "Soundcloud - I"
      },
      {
        link: "https://soundcloud.com/betomeng-1",
        icon: "soundcloud",
        label: "Soundcloud - II"
      },
      {
        link: "https://soundcloud.com/betomeng-2",
        icon: "soundcloud",
        label: "Soundcloud - III"
      },
      {
        link: "https://soundcloud.com/betomengxxx",
        icon: "soundcloud",
        label: "Soundcloud - IV"
      }
    ]
  })
};
</script>
