<template>
  <Layout>
    <div class="flex justify-center p-8 sm:p-20">
      <div class="flex-grow max-w-4xl">
        <!-- Language switch -->

        <!-- Content -->
        <!-- <img
        style="shape-outside: circle(50%)"
        class="object-cover object-center mx-auto rounded-full md:mt-10 md:mb-10 md:ml-10 md:float-right w-84"
        src="/images/betomeng_04.jpg"
        alt="Ivica Ljubic performing"
        />-->
        <g-image
          style="shape-outside: circle(50%)"
          class="object-cover object-center mx-auto rounded-full md:mt-10 md:mb-10 md:ml-10 md:float-right w-84"
          src="~/assets/images/betomeng_04.jpg"
          alt="Ivica Ljubic performing"
        />

        <div class="mt-16 text-gray-300 md:mt-12 md:mr-48">
          <div class="flex justify-between mb-6">
            <h1 v-if="currentLanguage === `en`" class="text-2xl">Biography</h1>
            <h1 v-if="currentLanguage === `rs`" class="text-2xl">Biografija</h1>

            <div class="ml-4 text-gray-500">
              <button
                class="language-switch-button"
                :class="currentLanguage === `en` && `text-blue-400`"
                @click="currentLanguage = `en`"
              >EN</button>
              /
              <button
                class="language-switch-button"
                :class="currentLanguage === `rs` && `text-blue-400`"
                @click="currentLanguage = `rs`"
              >RS</button>
            </div>
          </div>

          <p v-if="currentLanguage === `en`">
            My name is Ivica Ljubic and I have been a professional DJ for 20 years
            (since I was 19) performing under the alias of DJ Betomeng, my
            interests and activities in this field are not limited to only one
            practical side of performing, my interests span across various aspects
            of music and it’s development during its history. I am fully committed
            to this sphere of life which is in my case far more plentiful than my
            financial merit would allow me to which is the primary moving force of
            my life and style. I try to perfect and excel in this domain. Given my
            current experience, I have acquired the skills and the right mindset
            to adjust my musical repertoire to the imminent atmosphere and energy
            to which I am exposed to at the moment and I reflect it towards the
            crowd’s wishes, thus enabling me to never rigidly cling to only one
            musical genre, but to take the energy and dynamics of my performance
            and synchronize it with the current moment. Variability and
            improvisation are also dictated at any given moment.
          </p>

          <p v-if="currentLanguage === `rs`">
            Moje ime je Ivica Ljubić i profesionalno se bavim DJ-ingom već 20
            godina (od svoje 19. godine) nastupajući pod alijasom DJ Betomeng,
            moje interesovanje i aktivnost u ovoj oblasti nisu ograničeni samo na
            praktičnu stranu nastupanja, zanimaju me različiti aspekti muzike i
            njen razvoj tokom istorije. Potpuno sam posvećen ovoj sferi života
            koja je, u mom slučaju, daleko od modela finansijskog funkcionisanja,
            već primarno sam stil i način života. Trudim se da se usavršavam i
            napredujem u tom domenu. Na osnovu dosadašnjeg iskustva, stekao sam
            veštinu i osećaj da prilagođavam muzički repertoar trenutnoj atmosferi
            i energiji kojom sam okružen i po potrebi željama publike, tako da se
            nikada rigidno ne pridržavam jednog muzičkog žanra, već je energija i
            dinamika nastupa usaglašena sa postojećim trenutkom. Varijabilnost i
            improvizacija su takođe uslovljeni dobom dana.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us"
  },
  data: () => ({
    currentLanguage: "en"
  })
};
</script>

<style scoped lang="postcss">
.language-switch-button {
  @apply p-2 outline-none;
}
</style>
