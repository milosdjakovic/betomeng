<template>
  <Layout>
    <div class="flex justify-center p-8 sm:p-20">
      <div class="flex-grow max-w-4xl">
        <!-- Language switch -->

        <!-- Content -->
        <g-image
          style="shape-outside: circle(50%)"
          class="object-cover object-center mx-auto rounded-full md:mt-10 md:mb-10 md:ml-10 md:float-right w-84"
          src="~/assets/images/betomeng_04.jpg"
          alt="Ivica Ljubic performing"
        />

        <div class="mt-16 text-gray-300 md:mt-12 md:mr-48">
          <div class="flex justify-between mb-6">
            <h1 v-if="currentLanguage === `en`" class="text-2xl">{{ siteContent.en.biography.title }}</h1>
            <h1 v-if="currentLanguage === `rs`" class="text-2xl">{{ siteContent.rs.biography.title }}</h1>

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

          <p v-if="currentLanguage === `en`">
           {{siteContent.en.biography.content}}
          </p>

          <p v-if="currentLanguage === `rs`">
            {{siteContent.rs.biography.content}}
          </p>
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
    ...mapState(["currentLanguage"])
  },
  methods: {
    ...mapMutations(["changeLanguage"])
  }
};
</script>

<style scoped lang="postcss">
.language-switch-button {
  @apply p-2 outline-none;
}
</style>
