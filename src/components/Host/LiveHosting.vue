<template>
  <div class="w-full py-16">
    <div class="w-full flex flex-col sm:flex-row justify-center items-center">
      <div class="w 1/2 flex flex-col justify-center items-center">
        <div class="w-full space-y-8">
          <h1 class="text-3xl font-headline">
            {{ podcastHeadline }}
          </h1>
          <p>{{ podcastDetailsInfo }}</p>
          <p class="font-headline">{{ detailsEnding }}</p>
        </div>
      </div>
      <!-- host profile picture -->
      <div class="w-1/2 flex flex-col justify-center items-center ">
        <img :src="hostPersonProfile" alt="" class="w-full object-fill" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "LiveHosting",
  setup() {
    let podcastHeadline = ref("A small story about a big dream  —  ");
    let podcastDetailsInfo = ref(
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon"
    );
    let detailsEnding = ref(
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and "
    );
    let hostPersonProfile = ref(
      "https://images.pexels.com/photos/7600887/pexels-photo-7600887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    );
    return {
      podcastHeadline,
      podcastDetailsInfo,
      detailsEnding,
      hostPersonProfile,
    };
  },
};
</script>

<style>
</style>