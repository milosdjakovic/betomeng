// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from "vuex";
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex);

  appOptions.store = new Vuex.Store({
    state: {
      currentLanguage: 'en',
    },
    mutations: {
      changeLanguage(state, newLanguage) {
        state.currentLanguage = newLanguage;
      },
    },
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.meta.push({
    name: "title",
    name: "%s | Betomeng",
  });
}
