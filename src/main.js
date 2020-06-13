// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from "vuex";
import gsap from "gsap";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex);

  appOptions.store = new Vuex.Store({
    state: {
      initialLoad: false,
      loadAnimationTimeline: gsap.timeline({
        defaults: { duration: 0.6, ease: "elastic.inOut(0.4 , 0.8)" }
      }),
      currentLanguage: "en",
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
    },
    mutations: {
      changeLanguage(state, newLanguage) {
        state.currentLanguage = newLanguage;
      },
      setInitialLoad(state, payload) {
        state.initialLoad = payload
      }
    },
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.meta.push({
    name: "og:title",
    name: "Betomeng"
  });
  head.meta.push({
    name: "og:description",
    name: "Ivica Ljubić"
  });
  head.meta.push({
    name: "og:image",
    name: "http://www.betomeng.com/betomeng-banner.jpg"
  });
}
