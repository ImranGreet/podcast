<template>
  <div
    class="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-y-8 lg:gap-y-0 px-5 xl:px-0"
  >
    <div class="text-textColor font-headline">
      <h1 class="text-xl">Podcast Available On</h1>
    </div>
    <Spotify />
    <Googlepod />
    <SoundCloud />
    <Apple />
  </div>
</template>

<script>
import Apple from "../../assets/svgs/Apple.vue";
import Googlepod from "../../assets/svgs/Googlepod.vue";
import SoundCloud from "../../assets/svgs/SoundCloud.vue";
import Spotify from "../../assets/svgs/Spotify.vue";

export default {
  name: "AvailableBrand",
  components: {
    Spotify,
    Googlepod,
    SoundCloud,

    Apple,
  },
};
</script>

<style>
</style>