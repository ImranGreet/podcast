<template>
  <section class="w-full bg-textColor">
    <div class="px-16 py-16 w-full">
      <div class="w-full grid grid-cols-3">
        <div class="w-full flex flex-col justify-start items-start">
          <h1 class="text-4xl text-deafult">Xenmesh</h1>
        </div>
        <!-- links -->
        <div class="grid grid-cols-3 text-deafult w-full col-span-2">
          <ul v-for="(footerPage, index) in footerLinks" :key="index">
            <h3 class="text-xl capitalize">{{ footerPage.title }}</h3>
            <div class="my-2"></div>
            <li
              v-for="(link, index) in footerPage.links"
              :key="index"
              class="py-2 capitalize"
            >
              <router-link
                to="#"
                v-if="footerPage.title.trim() === 'subscribe'.trim()"
              >
                <div class="flex relative">
                  <component :is="link" class="inline" />
                  <span class="absolute left-12 top-2">{{ link }}</span>
                </div>
              </router-link>
              <router-link to="#" v-else> {{ link }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <copyright />
  </section>
</template>

<script>
import { ref } from "vue";
import Apple from "../../assets/svgs/apple.vue";
import Googlepod from "../../assets/svgs/googlepod.vue";
import Soundcloud from "../../assets/svgs/soundcloud.vue";
import Spotify from "../../assets/svgs/spotify.vue";
import copyright from "./copyright.vue";

export default {
  name: "Footer",
  components: { Apple, Googlepod, Soundcloud, Spotify, copyright },

  setup() {
    const footerLinks = ref([
      {
        id: 1,
        title: "pages",
        links: ["home", "podcast", "host", "blog"],
      },
      {
        id: 2,
        title: "reach us",
        links: ["contact", "about"],
      },
      {
        id: 3,
        title: "subscribe",
        links: ["Apple", "Googlepod", "Soundcloud", "Spotify"],
      },
    ]);
    return {
      footerLinks,
    };
  },
};
</script>

<style>
</style>