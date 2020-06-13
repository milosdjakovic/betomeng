<template>
  <Layout>
    <div class="flex justify-center p-8 sm:p-20">
      <div class="flex-grow max-w-4xl">
        <!-- Language switch -->

        <!-- Content -->
        <g-image
          id="profile-image"
          style="shape-outside: circle(50%)"
          class="object-cover object-center mx-auto rounded-full md:mt-10 md:mb-10 md:ml-10 md:float-right w-84"
          src="~/assets/images/betomeng_04.jpg"
          alt="Ivica Ljubic performing"
        />

        <div class="mt-16 text-gray-300 md:mt-12 md:mr-48">
          <div id="page-title" class="flex justify-between mb-6">
              <transition name="fade-up" mode="out-in">
                <h1
                  v-if="currentLanguage === `en`"
                  class="text-2xl"
                  key="title-lang-en"
                >{{ siteContent.en.biography.title }}</h1>
                <h1
                  v-if="currentLanguage === `rs`"
                  class="text-2xl"
                  key="title-lang-rs"
                >{{ siteContent.rs.biography.title }}</h1>
              </transition>

            <div class="ml-4 text-gray-500">
              <button
                class="language-switch-button"
                :class="currentLanguage === `en` && `text-blue-400`"
                @click="changeLanguage('en')"
              >EN</button>
              /
              <button
                class="language-switch-button"
                :class="currentLanguage === `rs` && `text-blue-400`"
                @click="changeLanguage('rs')"
              >RS</button>
            </div>
          </div>

          <div id="page-content">
            <transition name="fade-down" mode="out-in">
              <p
                v-if="currentLanguage === `en`"
                key="content-lang-en"
              >{{siteContent.en.biography.content}}</p>
  
              <p
                v-if="currentLanguage === `rs`"
                key="content-lang-rs"
              >{{siteContent.rs.biography.content}}</p>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import siteContent from "~/data/site-content.json";

export default {
  metaInfo: {
    title: "Bio"
  },
  data: () => ({
    siteContent
  }),
  computed: {
    ...mapState(["currentLanguage", "initialLoad", "loadAnimationTimeline"])
  },
  methods: {
    ...mapMutations(["changeLanguage"])
  },
  mounted() {
    const tl = this.loadAnimationTimeline;

    if (!this.initialLoad) {
      tl.from(
        "#profile-image",
        { x: 30, y: -30, rotate: 60, scale: 0.7, opacity: 0 },
        "-=0.3"
      );
      tl.from(
        "#page-title",
        { x: -30, y: -30, scale: 0.7, opacity: 0 },
        "-=0.6"
      );
      tl.from(
        "#page-content",
        { x: -30, y: 30, scale: 0.7, opacity: 0 },
        "-=0.6"
      );
    }
  }
};
</script>

<style scoped lang="postcss">
.language-switch-button {
  @apply p-2 outline-none;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-up-enter, .fade-up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-4px);
}

.fade-down-enter-active,
.fade-down-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-down-enter, .fade-down-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(4px);
}
</style>

